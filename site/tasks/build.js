/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/* eslint-disable no-console */
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const pug = require("pug");
const yaml = require("js-yaml");
const lunr = require("lunr");

require("colors");

const { default: md } = require("./markdown.js");

const siteDir = path.join(__dirname, "../");
const rootDir = path.join(siteDir, "../");

const defaultOutputDir = path.join(siteDir, "dist");
const componentDir = path.join(rootDir, "components");

const verbose = process.env.NX_VERBOSE_LOGGING === "true" ? true : false;

const globalFunctions = {
	getSlug: (name, subName = undefined) => {
		if (!name) return;
		if (subName) name += `-${subName}`;
		return name.toLowerCase().replace(/[^a-z-]/g, "");
	},
	getStatusLightVariant: (status) => {
		if (["Deprecated"].includes(status)) return "negative";
		if (["Beta Contribution", "Contribution", "Unverified"].includes(status))
			return "notice";
		if (["Canon", "Verified"].includes(status)) return "positive";
		return "neutral";
	},
	markdown: md,
	Prism: require("prismjs"),
};

let initialLog = 0;

/* -------------- UTILITIES -------------- */
/**
 * Creates a project-relative path for pretty printing to console
 * @param {string} filePath
 * @returns {string}
 */
function prettyprint(filePath) {
	return path.relative(rootDir, filePath);
}

/**
 * Fetches the component's folder name from the file path or returns undefined if not found
 * @param {string} filePath
 * @returns {string|undefined}
 */
function getPackageFromPath(filePath) {
	if (!filePath) return;
	const matches = filePath.match(/\/(components|@spectrum-css)\/(.*?)\//);
	if (!matches || matches.length < 3) return;
	return matches[2];
}

/* -------------- BUILDERS -------------- */
async function buildSite_dependencies(
	packageName,
	outputDir = defaultOutputDir,
	destination = undefined,
	assets = undefined
) {
	let resourcePath;
	try {
		resourcePath = require.resolve(packageName);
	} catch (err) {
		console.error(`${"⚠️".yellow}  Package ${packageName.magenta} not found`);
		return;
	}

	let files = [];
	if (!assets || assets.length === 0 || !Array.isArray(assets)) {
		files = await fg(resourcePath, {
			cwd: rootDir,
			absolute: true,
			allowEmpty: true,
		});
	} else {
		files = await fg(assets, {
			cwd: path.dirname(resourcePath).replace(/dist\/?/, ""),
			absolute: true,
			allowEmpty: true,
		});
	}

	if (!files || files.length === 0) return Promise.resolve();

	return Promise.all(
		files.map(async (file) => {
			let fileParts = file.split(path.sep);

			// If node_modules is in the path, capture the path after it
			if (fileParts && fileParts.includes("node_modules")) {
				fileParts = fileParts.slice(fileParts.indexOf("node_modules") + 1);
			}

			// If local asset, remove the directory paths before it
			if (fileParts && fileParts.includes("components")) {
				fileParts = fileParts.slice(fileParts.indexOf("components") + 1);
			}

			// If local asset, remove the directory paths before it
			if (fileParts && fileParts.includes("tokens")) {
				fileParts = fileParts.slice(fileParts.indexOf("tokens"));
			}

			// Remove dist from path
			if (fileParts && fileParts.includes("dist")) {
				fileParts.splice(fileParts.indexOf("dist"), 1).join(path.sep);
			}

			const writePath = path.join(
				outputDir,
				destination,
				fileParts.join(path.sep)
			);
			if (!fs.existsSync(path.dirname(writePath))) {
				await fsp
					.mkdir(path.dirname(writePath), { recursive: true })
					.catch((err) => {
						console.error(
							`${"⚠️".yellow}  Error creating directory ${prettyprint(
								path.dirname(writePath)
							)}`
						);
						console.error(err);
					});
			}

			return fsp
				.copyFile(file, writePath)
				.then(() => {
					if (verbose)
						console.log(
							`    - Copied ${prettyprint(file).cyan} to ${
								prettyprint(writePath).yellow
							}`
						);
				})
				.catch((err) => {
					console.error(
						`${"⚠️".yellow}  Error copying ${prettyprint(file)} to ${
							prettyprint(writePath).yellow
						}`
					);
					console.error(err);
				});
		})
	);
}

/* Copy resources folders and contents from site to top-level dist */
async function buildSite_resources(outputDir = defaultOutputDir) {
	const files = await fg(["**"], {
		cwd: path.join(siteDir, "resources"),
	});

	return Promise.all(
		files.map(async (file) => {
			const writePath = path.join(outputDir, file);
			if (!fs.existsSync(path.dirname(writePath))) {
				await fsp
					.mkdir(path.dirname(writePath), { recursive: true })
					.catch((err) => {
						console.error(
							`${"⚠️".yellow}  Error creating directory ${prettyprint(
								path.dirname(writePath)
							)}`
						);
						console.error(err);
					});
			}
			return fsp
				.copyFile(path.join(siteDir, "resources", file), writePath)
				.then(() => {
					if (verbose)
						console.log(
							`    - Copied ${
								prettyprint(path.join(siteDir, "resources", file)).cyan
							} to ${prettyprint(writePath).yellow}`
						);
				})
				.catch((err) => {
					console.error(
						`${"⚠️".yellow}  Error copying ${prettyprint(
							path.join(siteDir, file)
						)} to ${prettyprint(writePath).yellow}`
					);
					console.error(err);
				});
		})
	);
}

async function buildSite_componentHTML(file, { dependencies, pkg }) {
	const component = await fsp
		.readFile(file, "utf8")
		.then(yaml.load)
		.catch((err) => {
			console.error(`${"⚠️".yellow}  Error loading ${prettyprint(file)}`);
			console.error(err);
			return;
		});

	if (!component || component.length === 0) {
		console.error(`${"⚠️".yellow}  Error loading ${prettyprint(file)}`);
		return Promise.resolve();
	}

	const componentName =
		getPackageFromPath(file) ?? component.name.toLowerCase().replace(/\s/g, "");

	const outputFilename = `${path.basename(file, ".yml")}.html`;

	return {
		pageData: {
			pageURL: outputFilename,
			pkg,
			component,
			dependencies: [
				...new Set([...dependencies, ...(component.dependencies ?? [])]),
			],
		},
		navData: {
			name: component.name,
			component: componentName,
			description: component.description,
			hide: component.hide ?? false,
			href: outputFilename,
		},
	};
}

async function buildSite_componentPages(
	packagePath = componentDir,
	{ packages = [] } = {}
) {
	const files = await fg([`*.yml`, `**/*.yml`], {
		cwd: packagePath,
		allowEmpty: true,
		absolute: true,
	});

	if (!files || files.length === 0) return { pagesData: [], collection: [] };

	const componentName = getPackageFromPath(packagePath);
	const collection = [];

	let pkg;
	try {
		pkg = require(path.join(packagePath, "package.json"));
	} catch (err) {
		pkg = {
			name: `@spectrum-css/${componentName}`,
		};
	}

	if (!pkg) {
		pkg = {
			name: `@spectrum-css/${componentName}`,
		};
	}

	packages = packages.filter((package) =>
		fs.existsSync(path.join(packagePath, package, "index.css"))
	);

	/* Collects all write promises and returns a single promise for their completion */
	const pagesData =
		(await Promise.all(
			files.map(async (file) =>
				buildSite_componentHTML(file, {
					dependencies: packages,
					pkg,
				}).then(({ pageData, navData }) => {
					collection.push(navData);
					return pageData;
				})
			)
		)) ?? [];

	return { pagesData, collection };
}

async function buildSite_components(outputDir = defaultOutputDir) {
	const nav = [];
	const docs = [];
	const store = {};

	const promises = [];
	const pagesData = [];
	const packages = await fg(["*/package.json"], {
		cwd: componentDir,
	});

	packages
		.map((pkg) => path.dirname(pkg))
		.forEach((component) => {
			promises.push(
				buildSite_dependencies(
					`@spectrum-css/${component}`,
					outputDir,
					"components",
					["package.json", "dist/**"]
				),
				buildSite_componentPages(path.join(componentDir, component), {
					packages,
				}).then(({ pagesData: pageItems, collection: collectionItems }) => {
					if (!collectionItems || collectionItems.length === 0) return;

					collectionItems.forEach((componentData) => {
						const { href, name, component, description } = componentData;
						nav.push(componentData);
						docs.push({ href, name, description });
						store[href] = { href, name, component, description };
					});

					if (pageItems) pagesData.push(...pageItems);
				})
			);
		});

	promises.push(
		buildSite_componentPages(path.join(siteDir, "patterns"), {
			packages,
		}).then(({ pagesData: pageItems, collection: collectionItems }) => {
			if (!collectionItems || collectionItems.length === 0) return;

			collectionItems.forEach((componentData) => {
				const { href, name, component, description } = componentData;
				nav.push(componentData);
				docs.push({ href, name, description });
				store[href] = { href, name, component, description };
			});

			if (pageItems) pagesData.push(...pageItems);
		})
	);

	await Promise.all(promises);

	if (pagesData && pagesData.length > 0) {
		await Promise.all(
			pagesData.map(async function (pageData) {
				const componentTemplate = path.join(
					siteDir,
					"templates/siteComponent.pug"
				);

				if (!fs.existsSync(componentTemplate)) {
					console.error(
						`${"⚠️".yellow}  Missing template file ${prettyprint(
							componentTemplate
						)}`
					);
					return Promise.reject();
				}

				const compiled = pug.renderFile(componentTemplate, {
					...globalFunctions,
					...pageData,
					nav: nav.sort((a, b) => (a.name <= b.name ? -1 : 1)),
				});

				if (!compiled || compiled.length === 0) {
					console.error(
						`${"⚠️".yellow}  Error compiling ${prettyprint(componentTemplate)}`
					);
					return Promise.reject();
				}

				const writePath = path.join(outputDir, pageData.pageURL);

				if (!fs.existsSync(path.dirname(writePath))) {
					await fsp.mkdir(path.dirname(writePath)).catch((err) => {
						console.error(
							`${"⚠️".yellow}  Error creating directory ${prettyprint(
								path.dirname(writePath)
							)}`
						);
						console.error(err);
					});
				}

				return fsp
					.writeFile(writePath, compiled)
					.then(() => {
						if (verbose)
							console.log(
								`    - Written ${prettyprint(writePath).yellow} from ${
									prettyprint(componentTemplate).gray
								}`
							);
					})
					.catch((err) => {
						console.error(
							`${"⚠️".yellow}  Error writing ${prettyprint(writePath)}`
						);
						console.error(err);
					});
			})
		);
	}

	/* return the navigation array sorted alphabetically */
	return {
		nav: nav.sort((a, b) => (a.name <= b.name ? -1 : 1)),
		docs,
		store,
	};
}

async function buildSite_pages(outputDir = defaultOutputDir, nav = []) {
	const files = await fg(["*.pug"], {
		cwd: siteDir,
		allowEmpty: true,
	});

	if (!files || files.length === 0) return Promise.resolve();

	/* Collects all write promises and returns a single promise for their completion */
	return Promise.all(
		files.map(async (file) => {
			const outputFilename = `${path.basename(file, ".pug")}.html`;

			const compiled = pug.renderFile(file, {
				...globalFunctions,
				pageURL: outputFilename,
				dependencies: [
					"icon",
					"statuslight",
					"link",
					"page",
					"site",
					"typography",
					"tooltip",
					"sidenav",
					"actionbutton",
					"button",
					"textfield",
					"clearbutton",
					"search",
					"menu",
					"fieldlabel",
					"picker",
					"popover",
					"underlay",
					"card",
					"divider",
					"illustratedmessage",
					"accordion",
					"table",
				],
				nav: nav.sort((a, b) => (a.name <= b.name ? -1 : 1)),
			});

			if (!compiled || compiled.length === 0) return Promise.resolve();

			const writePath = path.join(outputDir, outputFilename);

			if (!fs.existsSync(path.dirname(writePath))) {
				await fsp.mkdir(path.dirname(writePath)).catch((err) => {
					console.error(
						`${"⚠️".yellow}  Error creating directory ${prettyprint(
							path.dirname(writePath)
						)}`
					);
					console.error(err);
				});
			}

			return fsp
				.writeFile(writePath, compiled)
				.then(() => {
					if (verbose)
						console.log(
							`    - Written ${prettyprint(writePath).yellow} from ${
								prettyprint(file).cyan
							}`
						);
				})
				.catch((err) => {
					console.error(
						`${"⚠️".yellow}  Error writing ${prettyprint(writePath)}`
					);
					console.error(err);
				});
		})
	);
}

async function buildSite_index(outputDir = defaultOutputDir, { docs, store }) {
	if (!docs || docs.length === 0 || !store || Object.keys(store).length === 0)
		return;

	const promises = [];
	if (docs && docs.length > 0) {
		// Writing out to dist/index.json
		const index = lunr(function () {
			this.ref("href");
			this.field("name", { boost: 10 });
			this.field("description");

			docs.forEach(function (doc) {
				this.add(doc);
			}, this);
		});

		// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript
		const content = JSON.stringify(index, null, 2);
		const writePath = path.join(outputDir, "index.json");

		if (!fs.existsSync(path.dirname(writePath))) {
			await fsp.mkdir(path.dirname(writePath)).catch((err) => {
				console.error(
					`${"⚠️".yellow}  Error creating directory ${prettyprint(
						path.dirname(writePath)
					)}`
				);
				console.error(err);
			});
		}
		promises.push(
			fsp
				.writeFile(writePath, content)
				.then(() => {
					if (verbose)
						console.log(`    - Written ${prettyprint(writePath).yellow}`);
				})
				.catch((err) => {
					console.error(
						`${"⚠️".yellow}  Error writing ${prettyprint(writePath)}`
					);
					console.error(err);
				})
		);
	}

	if (store && Object.keys(store).length > 0) {
		// Writing out to dist/store.json
		const content = JSON.stringify(store, null, 2);
		const writePath = path.join(outputDir, "store.json");

		if (!fs.existsSync(path.dirname(writePath))) {
			await fsp.mkdir(path.dirname(writePath)).catch((err) => {
				console.error(
					`${"⚠️".yellow}  Error creating directory ${prettyprint(
						path.dirname(writePath)
					)}`
				);
				console.error(err);
			});
		}

		promises.push(
			fsp
				.writeFile(writePath, content)
				.then(() => {
					if (verbose)
						console.log(`    - Written ${prettyprint(writePath).yellow}`);
				})
				.catch((err) => {
					console.error(
						`${"⚠️".yellow}  Error writing ${prettyprint(writePath)}`
					);
					console.error(err);
				})
		);
	}

	return Promise.all(promises);
}

async function buildSite_assets(outputDir = defaultOutputDir) {
	return Promise.all([
		buildSite_dependencies("@spectrum-css/tokens", outputDir, "components"),
		buildSite_dependencies(
			"@adobe/spectrum-css-workflow-icons",
			outputDir,
			"img",
			["dist/spectrum-icons.svg"]
		),
		buildSite_dependencies("@spectrum-css/icon", outputDir, "img", [
			"dist/spectrum-css-icons.svg",
		]),
		buildSite_dependencies("@spectrum-css/vars", outputDir, "dependencies", [
			"dist/spectrum-*.css",
		]),
		buildSite_dependencies(
			"@spectrum-css/expressvars",
			outputDir,
			"dependencies",
			["dist/spectrum-*.css"]
		),
		buildSite_dependencies("loadicons", outputDir, "js"),
		buildSite_dependencies("lunr", outputDir, "js"),
		buildSite_dependencies("prismjs", outputDir, "css", [
			"themes/prism.css",
			"themes/prism-dark.css",
		]),
	]);
}

/* -------------- BUILD RECIPE -------------- */
async function build(outputDir = defaultOutputDir) {
	if (verbose && initialLog < 1) {
		console.log("🚧  Building site");
		initialLog++;
	}

	return await Promise.all([
		buildSite_components(outputDir).then(({ nav, docs, store }) => {
			return Promise.all([
				buildSite_index(outputDir, { docs, store }),
				buildSite_pages(outputDir, nav),
			]);
		}),
		buildSite_resources(outputDir),
		buildSite_assets(outputDir),
	]);
}

/* -------------- EXPORTS -------------- */
exports.buildSite_resources = buildSite_resources;
exports.default = exports.build = build;
