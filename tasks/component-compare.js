const { existsSync, statSync } = require("fs");
const { readFile } = require("fs").promises;
const { join, relative, dirname, basename, extname } = require("path");

const fg = require("fast-glob");
const tar = require("tar");
const _ = require("lodash");

const nunjucks = require("nunjucks");
const env = new nunjucks.Environment();

const npmFetch = require("npm-registry-fetch");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const Diff = require("diff");
const Diff2Html = require("diff2html");

const { dirs, log, bytesToSize, copy, writeConsoleTable, cleanAndMkdir, writeAndReport, getAllComponentNames } = require("./utilities.js");

require("colors");

/**
 * A global object to store the paths to the output directories
 * this facilitates a shared location for all the tasks to write
 * without having to pass the paths around as arguments.
 * @type {{ [key: string]: string }}
 */
const pathing = {};

env.addFilter("bytesToSize", bytesToSize);
env.addFilter("print", (data) => JSON.stringify(data, null, 2));
env.addFilter("hasChange", (data) => {
	return [...data.entries()].reduce((hasChange, [, fileData]) => {
		if (!fileData) return hasChange;
		if (fileData.hasDiff) return true;
		return hasChange;
	}, false);
});

/**
 * A focused function that handles the template rendering
 * @param {string} templateFile
 * @param {Object} templateVariables
 * @param {string} [outputPath=undefined]
 * @returns {Promise<string | void>}
 */
async function renderTemplate(
	templateFile,
	templateVariables = {},
	outputPath = undefined
) {
	templateFile = join(__dirname, "templates", `${templateFile}.njk`);

	if (typeof templateFile === "undefined" || !existsSync(templateFile)) {
		Promise.reject(
			`Template file ${templateFile} not found. Could not render output.`
		);
		return;
	}

	const template = await readFile(templateFile, { encoding: "utf-8" });

	const navTemplate = await readFile(join(__dirname, "templates", "sidenav.njk"), { encoding: "utf-8" });
	const nav = env.renderString(navTemplate, templateVariables);

	// Generate an HTML summary of the component's compiled assets with links to the HTML diffs of each file
	const html = env.renderString(template, {
		allComponents: getAllComponentNames(false),
		nav,
		...templateVariables,
	});

	if (typeof outputPath === "undefined") return html;

	return writeAndReport(html, outputPath);
}

/**
 * This function generates a visual diff of the compiled assets for a component
 * @param {Object} config
 * @param {string[]} config.filepaths
 * @param {string} config.outputPath
 * @param {Map<string, { local: { path: string, content: string, size: number }, npm: { path: string, content: string, size: number }, hasDiff: boolean }>} config.fileMap
 * @returns {ReturnType<typeof renderTemplate>}
 */
async function generateDiff({
	filepaths,
	outputPath,
	fileMap,
	...renderData
}) {
	const patches = [];
	filepaths.forEach(file => {
		const data = fileMap.get(file);
		const { local, npm } = data;
		if (!npm?.content || !local?.content) return;

		const extension = extname(npm.path);

		const patch = Diff.createPatch(file, npm.content, local.content);

		let diff;
		switch(extension) {
			case ".css":
				diff = Diff.diffCss(npm.content, local.content);
				break;
			case ".json":
				diff = Diff.diffJson(npm.content, local.content);
				break;
			default:
				diff = Diff.diffChars(npm.content, local.content);
		}

		data.hasDiff = diff.length > 1;

		// Reflect if the component has a diff to the data
		fileMap.set(file, data);

		if (!patch) return;

		patches.push(patch);
	});

	if (patches.length === 0) return Promise.resolve();

	const html = Diff2Html.html(patches.map(patch => Diff2Html.parse(patch)).flat(), {
		drawFileList: true,
		matching: "lines",
		outputFormat: "side-by-side",
		renderNothingWhenEmpty: true,
	});

	return renderTemplate(
		"diff-preview",
		{
			...renderData,
			html,
		},
		join(outputPath, "index.html")
	);
}

async function fetchPublishedComponent(packageName, {
	cacheLocation,
	outputLocation,
}) {
	const warnings = [];
	let tag;

	// Check if the component exists on npm; do not fail if it isn't found -
	//   report it and output only the sizes of the local compiled assets
	const npmData =
		(await npmFetch.json(packageName).catch((err) => {
			// @todo: do we need to report on the error messages returned?
			warnings.push(err ?? `Failed to fetch ${packageName.yellow} from npm.\n`);
		})) ?? {};

	// If the component exists on npm, fetch the latest release data
	// @todo what is the fallback if there isn't a latest tag?
	if (npmData["dist-tags"]?.latest) {
		tag = npmData["dist-tags"]?.latest;
	}

	if (!tag) return;

	// Check locally to see if we have already fetched the tarball
	// for this tag; if not, fetch it and extract it
	const tarballPath = join(cacheLocation, `${packageName?.split("/")?.[1] ?? packageName}-${tag}.tgz`);
	const tarballUrl = npmData.versions?.[tag]?.dist?.tarball;
	if (!existsSync(tarballPath) && tarballUrl) {
		// Here is where we check the cached packages folder for the tarball
		// so we don't have to re-fetch it every time
		const tarballFile = await npmFetch(tarballUrl).catch(() => {});
		if (
			!tarballFile ||
			(tarballFile.status && tarballFile.status !== 200)
		) {
			log.error(`Failed to fetch release content for ${packageName}`);
		}
		else {
			await writeAndReport(await tarballFile.buffer(), tarballPath);
		}
	}

	// The tarball path should exist locally now; if not, something went wrong
	if (existsSync(tarballPath)) {
		await tar
			.extract({
				file: tarballPath,
				cwd: outputLocation,
				// Only unpack the dist folder
				filter: (path) => path.startsWith("package/dist"),
				strip: 2,
			})
			.catch((err) => warnings.push(err));
	}

	return { tag, warnings };
}

async function processComponent(
	component,
	{
		cwd,
		output = pathing.output,
		cacheLocation = pathing.cache,
	}
) {
	if (!component) return Promise.reject("No component specified.");

	cleanAndMkdir(join(output, "diffs", component));
	cleanAndMkdir(join(pathing.latest, component));

	const pkgPath = require.resolve(`@spectrum-css/${component}/package.json`) ?? join(cwd, component, "package.json");
	const pkg = pkgPath && existsSync(pkgPath)
		? require(pkgPath)
		: { name: `@spectrum-css/${component}` };

	if (!cwd && pkgPath) {
		cwd = dirname(pkgPath).split("/").slice(0, -1).join("/");
	}

	let found = 0;

	// Using a set, we can remove duplicates from the list of compiled assets
	const filelist = new Set();
	const warnings = [];

	// Check if the component exists locally and has compiled output
	if (existsSync(join(cwd, component))) {
		found++;

		// Note: component might exist locally but might not contain any compiled output
		for (const file of await fg("**/*", {
			cwd: join(cwd, component, "dist"),
			ignore: ["*.map", "*.min.*", "*.gz"],
		})) {
			filelist.add(file);
		}
	}
	else {
		warnings.push(
			`${
				`${relative(dirs.root, join(cwd, component))}`.yellow
			} not found locally.\n`
		);
	}

	let tag = "latest";
	if (pkg?.name) {
		const npmResults = await fetchPublishedComponent(pkg.name, {
			cacheLocation,
			outputLocation: join(pathing.latest, component),
		});

		if (npmResults?.tag) {
			tag = npmResults.tag;
		}

		if (npmResults?.warnings?.length > 0) {
			warnings.push(...npmResults.warnings);
		}

		if (existsSync(join(pathing.latest, component))) {
			const files =
				(await fg("**/*.css", {
					cwd: join(pathing.latest, component),
				})) ?? [];

			if (files.length > 0) found++;
			files.forEach((file) => filelist.add(file));
		}
	}

	if (found < 1) {
		return Promise.reject(
			`${component.cyan} does not exist. Try checking the package's name and spelling.`
		);
	}

	if (filelist.size === 0) {
		return Promise.reject(
			`No compiled assets found associated with ${component.cyan}.`
		);
	}

	// For all files found locally & on npm, report back on it's sizes
	return Promise.all(
		[...filelist].map(async (filename) =>
			processFile(
				filename,
				join(cwd, component, "dist"),
				join(pathing.latest, component)
			)
		)
	).then((results) => {
		const fileMap = results.reduce((acc, { filename, ...data }) => {
			acc.set(filename, data);
			return acc;
		}, new Map());

		return {
			component,
			warnings,
			tag,
			pkg,
			fileMap,
		};
	});
}

async function processFile(filename, localPath, comparePath) {
	const data = {};

	// Look for the file locally
	if (existsSync(join(localPath, filename))) {
		const content = await readFile(join(localPath, filename), {
			encoding: "utf-8",
		});
		const stats = statSync(join(localPath, filename));
		data.local = {
			path: join(localPath, filename),
			content,
			size: stats.size,
		};
	}

	// Look for the file in the data pulled from NPM
	if (existsSync(join(comparePath, filename))) {
		const content = await readFile(join(comparePath, filename), {
			encoding: "utf-8",
		});
		const stats = statSync(join(comparePath, filename));
		data.npm = {
			path: join(comparePath, filename),
			content,
			size: stats.size,
		};

		if (stats.size > 0 && data.local && data.local.size > 0) {
			data.hasDiff = true;
		}
	}

	return {
		filename,
		...data,
	};
}

async function main(
	components,
	output,
	{ skipCache = false } = {}
) {
	if (!components || components.length === 0) {
		components = getAllComponentNames(false);
	}

	// Strip out utilities
	components = components.filter(c => !["actionmenu", "commons"].includes(c));

	pathing.output = output;
	pathing.cache = join(output, "packages");
	pathing.latest = join(output, "latest");

	/** Setup the folder structure */
	cleanAndMkdir(pathing.output);

	// This is our cache of fetched tarballs from npm; do not clean this directory
	// unless we want to re-fetch the tarballs
	cleanAndMkdir(pathing.cache, skipCache);

	cleanAndMkdir(pathing.latest);

	const promises = [];
	// Copy the bundled CSS to the output directory
	const renderAssets = [
		join(dirs.root, "tools", "bundle", "dist", "index.min.css"),
		join(require.resolve("diff2html"), "..", "..", "bundles", "css", "diff2html.min.css"),
		join(require.resolve("diff2html"), "..", "..", "bundles", "js", "diff2html.min.js"),
	];

	renderAssets.forEach((asset) => {
		promises.push(
			copy(asset, join(pathing.output, basename(asset)), { isDeprecated: false })
		);
	});

	/**
	 * Each component will report on it's file structure locally when compared
	 * against it's latest tag on npm; then a console report will be logged and
	 * a visual diff generated for each file that has changed.
	 */
	const results = await Promise.all([
		...(components.map(async (component) => {
			return processComponent(component, {
				output: pathing.output,
				cacheLocation: pathing.cache,
			}).catch((err) =>
				Promise.resolve({
					component,
					warnings: [err],
				})
			);
		}))
	]).catch((err) => {
		log.error(err);
	});

	if (
		!results ||
		results.length === 0 ||
		results.every((r) => !r.fileMap || r.fileMap.size === 0)
	) {
		log.error(`No compiled assets found for ${components.join(", ")}.`);

		if (results && results.some((r) => r.warnings?.length > 0)) {
			results.forEach((r) => {
				if (r.warnings?.length > 0) {
					r.warnings.forEach((warning) => log.error(warning));
				}
			});
		}
		return Promise.resolve();
	}

	const componentData = new Map();

	const cliOutput = [];

	let hasAnyChange = false;
	for (const {
		component,
		warnings = [],
		tag,
		pkg = {},
		fileMap = new Map(),
	} of results) {
		let hasComponentChange = false;
		const files = [...fileMap.keys()];

		if (!files || files.length === 0) {
			log.error(
				`No compiled assets found associated with ${
					`@spectrum-css/${component}`.yellow
				}.`
			);
			continue;
		}

		componentData.set(component, {
			pkg,
			tag,
			files: fileMap,
		});

		// This is our report header to indicate the start of a new component's data
		cliOutput.push(`\n${_.pad(` ${component} `, 20, "-").cyan}\n`);

		if (warnings.length > 0) {
			warnings.forEach((warning) => cliOutput.push(`${warning}\n`));
		}

		const maxColumnWidth = files.reduce((max, file) => {
			if (file.length > max) max = file.length;
			return max;
		}, 30);

		// Write a table of the file sizes to the console for easy comparison
		cliOutput.push(
			writeConsoleTable(["Filename", "Local", `Tag v${tag}`], { min: 15, max: maxColumnWidth + 5})
		);

		files.forEach(async (file) => {
			const { local, npm } = fileMap.get(file);

			const indicatorColor = (localSize, tagSize = 0) => {
				if (localSize < tagSize) return "green";
				if (localSize > tagSize) return "red";
				else return "gray";
			};

			const localSize = local?.size && `${bytesToSize(local.size)}`[indicatorColor(local.size, npm?.size)];
			const tagSize = npm?.size && `${bytesToSize(npm.size)}`.gray;

			cliOutput.push(
				writeConsoleTable([
				`${file}`.green,
				localSize ?? "** removed **".red,
				tagSize ?? "** new **".yellow,
				], { min: 25, max: maxColumnWidth + 15 })
			);

			if (local?.size && npm?.size && local.size !== npm.size) {
				hasComponentChange = true;
			}
		});

		if (hasComponentChange) hasAnyChange = true;
	}

	await Promise.all([
		...promises,
		...[...componentData.entries()]
			.map(async ([component, { tag, files, }], _, data) =>
				generateDiff({
					filepaths: [...files.keys()],
					outputPath: join(pathing.output, "diffs", component),
					fileMap: files,
					data,
					component,
					tag
				})
			)
	]).then((result) => {
		log.write("\n");
		// Print any result strings to the console
		[...result].flat(Infinity).filter(Boolean).forEach((r) => log.write(r + "\n"));
	}).catch((err) => {
		log.error(err);
	});

	// This is writing a summary of all the components that were compared
	// to make reviewing the diffs easier to navigate
	await renderTemplate(
		"compare-listing",
		{
			title: "Compiled asset comparison",
			data: [...componentData.entries()],
		},
		join(output, "index.html")
	)
		.then(async () => {
			// Open the summary in the browser for easy review
			const open = (await import("open"))?.default;
			if (open) await open(join(output, "index.html"));
		})
		.catch((err) => Promise.reject(err));

	/** WRITE CONTENT TO CONSOLE */
	cliOutput.forEach(line => log.write(line));

	if (!hasAnyChange) {
		log.write(`\n${"✓".green}  No changes detected.\n`);
	}
}

let {
	_: components,
	output = join(dirs.root, ".diff-output"),
	cache = true,
	// @todo allow to run against local main or published versions
} = yargs(hideBin(process.argv)).argv;

main(components, output, { skipCache: !cache }).then((code) => {
	process.exit(code);
});
