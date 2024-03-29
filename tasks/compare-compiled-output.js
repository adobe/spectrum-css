const { existsSync, statSync, readdirSync, mkdirSync } = require("fs");
const { readFile, writeFile } = require("fs").promises;
const { join, relative, dirname } = require("path");

const fg = require("fast-glob");
const tar = require("tar");
const _ = require("lodash");

const nunjucks = require("nunjucks");
const env = new nunjucks.Environment();

const { rimrafSync } = require("rimraf");
const npmFetch = require("npm-registry-fetch");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const Diff = require("diff");
const Diff2Html = require("diff2html");

const { default: builder } = require("./component-builder.js");

require("colors");

const pathing = {
	root: join(__dirname, "../"),
	components: join(__dirname, "../components"),
};

const bytesToSize = function (bytes) {
	if (bytes === 0) return "0";

	const sizes = ["bytes", "KB", "MB", "GB", "TB"];
	// Determine the size identifier to use (KB, MB, etc)
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
	return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

env.addFilter("bytesToSize", bytesToSize);
env.addFilter("print", (data) => JSON.stringify(data, null, 2));
env.addFilter("hasChange", (data) => {
	return [...data.entries()].reduce((hasChange, [, fileData]) => {
		if (!fileData) return hasChange;
		if (fileData.hasDiff) return true;
		return hasChange;
	}, false);
});

const log = {
	error: (err) => process.stderr.write(`${err}\n\n`),
	write: (msg) => process.stdout.write(msg),
	writeTable: (data, { min = 20, max = 30 } = {}) => {
		// This utility function is used to print a table of data to the console
		const table = (data = []) => {
			return data.map((row, idx) => `${row ?? " "}`.padEnd(idx === 0 ? max : min)).join("");
		};

		process.stdout.write(`${table(data)}\n`);
	},
};

const cleanAndMkdir = (path, clean = true) => {
	if (!path) return;

	let isFile = false;

	// If the output directory exists, delete it but don't throw an error if it doesn't
	if (clean && existsSync(path)) {
		isFile = statSync(path).isFile();
		rimrafSync(path, { preserveRoot: true });
	}

	// Create the output directory fresh
	mkdirSync(isFile ? dirname(path) : path, { recursive: true });
};

const allComponents =
	readdirSync(pathing.components, { withFileTypes: true })
		?.filter((file) => file.isDirectory())
		.map((file) => file.name) ?? [];

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
		allComponents,
		nav,
		...templateVariables,
	});

	if (typeof outputPath === "undefined") return html;

	return writeFile(outputPath, html, { encoding: "utf-8" });
}

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

		const patch = Diff.createPatch(file, npm.content, local.content);
		const css = Diff.diffCss(npm.content, local.content);
		data.hasDiff = css.length > 1;

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
		join(outputPath, `index.html`)
	);
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

	// Build the component fresh
	await builder({
		componentName: component,
		clean: true,
	});

	cleanAndMkdir(join(output, "diffs", component));
	cleanAndMkdir(join(pathing.latest, component));

	const pkgPath = require.resolve(`@spectrum-css/${component}/package.json`) ?? join(cwd, component, "package.json");
	const pkg = pkgPath && existsSync(pkgPath)
		? require(pkgPath)
		: { name: `@spectrum-css/${component}` };

	if (!cwd && pkgPath) {
		cwd = dirname(pkgPath).split("/").slice(0, -1).join("/");
	}

	let tag;
	let found = 0;

	// Using a set, we can remove duplicates from the list of compiled assets
	const filelist = new Set();
	const warnings = [];

	// Check if the component exists locally and has compiled output
	if (existsSync(join(cwd, component))) {
		found++;

		// Note: component might exist locally but might not contain any compiled output
		const files =
			(await fg("**/*.css", { cwd: join(cwd, component, "dist") })) ?? [];
		files.forEach((file) => filelist.add(file));
	} else {
		warnings.push(
			`${
				`${relative(pathing.root, join(cwd, component))}`.yellow
			} not found locally.\n`
		);
	}

	if (pkg && pkg.name) {
		const printPkgName = pkg.name.yellow;

		// Check if the component exists on npm; do not fail if it isn't found -
		//   report it and output only the sizes of the local compiled assets
		const npmData =
			(await npmFetch.json(pkg.name).catch((err) => {
				// @todo: do we need to report on the error messages returned?
				warnings.push(err ?? `Failed to fetch ${printPkgName} from npm.\n`);
			})) ?? {};

		// If the component exists on npm, fetch the latest release data
		// @todo what is the fallback if there isn't a latest tag?
		if (npmData["dist-tags"]?.latest) {
			tag = npmData["dist-tags"]?.latest;
		}

		if (tag) {
			// Check locally to see if we have already fetched the tarball
			// for this tag; if not, fetch it and extract it
			const tarballPath = join(cacheLocation, `${component}-${tag}.tgz`);
			const tarballUrl = npmData.versions?.[tag]?.dist?.tarball;
			if (!existsSync(tarballPath) && tarballUrl) {
				// Here is where we check the cached packages folder for the tarball
				// so we don't have to re-fetch it every time
				const tarballFile = await npmFetch(tarballUrl).catch(() => {});
				if (
					!tarballFile ||
					(tarballFile.status && tarballFile.status !== 200)
				) {
					log.error(`Failed to fetch release content for ${pkg.name}`);
				} else {
					await writeFile(tarballPath, await tarballFile.buffer(), {
						encoding: "utf-8",
					});
				}
			}

			// The tarball path should exist locally now; if not, something went wrong
			if (existsSync(tarballPath)) {
				await tar
					.extract({
						file: tarballPath,
						cwd: join(pathing.latest, component),
						// Only unpack the dist folder
						filter: (path) => path.startsWith("package/dist"),
						strip: 2,
					})
					.catch((err) => warnings.push(err));
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
	const componentName = localPath.split("/")[localPath.split("/").length - 2];
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
		components = allComponents;
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

	/**
	 * Each component will report on it's file structure locally when compared
	 * against it's latest tag on npm; then a console report will be logged and
	 * a visual diff generated for each file that has changed.
	 */
	const results = await Promise.all(
		components.map(async (component) => {
			return processComponent(component, {
				output: pathing.output,
				cacheLocation: pathing.cache,
			}).catch((err) =>
				Promise.resolve({
					component,
					warnings: [err],
				})
			);
		})
	).catch((err) => {
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
		log.write(`\n${_.pad(` ${component} `, 20, "-").cyan}\n`);

		if (warnings.length > 0) {
			warnings.forEach((warning) => log.write(`${warning}\n`));
		}

		const maxColumnWidth = files.reduce((max, file) => {
			if (file.length > max) max = file.length;
			return max;
		}, 30);

		// Write a table of the file sizes to the console for easy comparison
		log.writeTable(["Filename", "Local", `Tag v${tag}`], { min: 15, max: maxColumnWidth + 5});

		files.forEach(async (file) => {
			const { local, npm } = fileMap.get(file);

			const indicatorColor = (localSize, tagSize = 0) => {
				if (localSize < tagSize) return 'green';
				if (localSize > tagSize) return 'red';
				else return 'gray';
			};

			const localSize = local?.size && `${bytesToSize(local.size)}`[indicatorColor(local.size, npm?.size)];
			const tagSize = npm?.size && `${bytesToSize(npm.size)}`.gray;

			log.writeTable([
				`${file}`.green,
				localSize ?? `** removed **`.red,
				tagSize ?? `** new **`.yellow,
			], { min: 25, max: maxColumnWidth + 15 });

			if (local?.size && npm?.size && local.size !== npm.size) {
				hasComponentChange = true;
			}
		});

		if (hasComponentChange) hasAnyChange = true;
	}

	if (!hasAnyChange) {
		log.write(`\n${"✓".green}  No changes detected.\n`);
		return Promise.resolve();
	}

	await Promise.all(
		[...componentData.entries()]
			.map(async ([component, { tag, files, }], _, data) => {
				return generateDiff({
					filepaths: [...files.keys()],
					outputPath: join(pathing.output, "diffs", component),
					fileMap: files,
					data,
					component,
					tag
				})
					.then(() => true);
			})
	);

	// This is writing a summary of all the components that were compared
	// to make reviewing the diffs easier to navigate
	return renderTemplate(
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
}

let {
	_: components,
	output = join(pathing.root, ".diff-output"),
	cache = true,
	// @todo allow to run against local main or published versions
} = yargs(hideBin(process.argv)).argv;

main(components, output, { skipCache: !cache }).then((code) => {
	process.exit(code);
});
