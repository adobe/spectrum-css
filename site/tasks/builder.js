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

/**
 * @typedef {Object} ComponentData
 * @property {string} foldername - The name of the folder the component is in
 * @property {Object} component - The component's metadata, fetched from the metadata/*.yml file
 * @property {string} pageURL - The URL to the component's page
 * @property {string[]} dependencyOrder - The order in which the component's dependencies should be loaded
 * @property {string} releaseDate - The date the component was released
 * @property {Object} pkg - The package.json object for the component
 */

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const spawn = require("child_process").spawn;

const fg = require("fast-glob");
const pug = require("pug");
const yaml = require("js-yaml");
const lunr = require("lunr");
const depSolver = require("dependency-solver");
const npmFetch = require("npm-registry-fetch");

require("colors");

const rootPath = path.join(__dirname, "../..");
const sitePath = path.join(__dirname, "..");
const destPath = path.join(sitePath, "dist");
const componentPath = path.join(rootPath, "components");

const minimumDeps = [
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
];

const templateData = {
	nav: [],
	dnaVars: require("@spectrum-css/vars"),
	util: require("../util"),
};

/**
 * @description Copy a file from one location to another, creating the destination directory if needed
 * @param {import("fs").PathLike} from - The source file
 * @param {import("fs").PathLike} to - The destination file
 * @returns {Promise<void>}
 */
const safeCopy = async function (from, to) {
	if (!from || !to) return Promise.resolve();

	if (!fs.existsSync(path.dirname(to))) {
		fs.mkdirSync(path.dirname(to), { recursive: true });
	}

	return fsp.copyFile(from, to);
};

/**
 * @description Fetch a full list of dependencies for a package
 * @param {Object} Package - The package.json object for the package
 * @param {Object} Package.dependencies - The dependencies object in the package.json
 * @param {Object} Package.devDependencies - The devDependencies object in the package.json
 * @param {Object} Package.peerDependencies - The peerDependencies object in the package.json
 * @returns {string[]} - A string array containing the package names of all dependencies (deduped)
 */
const getDependencies = function ({
	dependencies = {},
	devDependencies = {},
	peerDependencies = {},
}) {
	const deps = new Set();

	for (const dep of [
		...Object.keys(dependencies),
		...Object.keys(devDependencies),
		...Object.keys(peerDependencies),
	]) {
		if (!dep.startsWith("@spectrum-css")) continue;
		deps.add(dep);
	}

	return [...deps].sort();
};

/**
 * @description Given a list of package paths, solve the dependency order
 * @param {string[]} packages - package directories
 * @return {Promise<string[]>} The solved dependency order
 */
const solveDependencies = async function (packages) {
	const depArray = packages.map((package) => {
		const pkgJSON = require(path.join(package, "package.json"));
		if (!pkgJSON) return false;
		const dependencies = getDependencies(pkgJSON);
		if (!dependencies || dependencies.length === 0) return false;
		return { [pkgJSON.name]: dependencies };
	}).filter(Boolean);

	if (depArray.length === 0) return [];

	const depObj = depArray.reduce((acc, dep) => {
		return { ...acc, ...dep };
	}, {});

	return depSolver.solve(depObj);
};

/**
 * @description Get the list of all packages in given directory
 * @param {string} packagesDir - directory of packages
 * @return {Promise<string[]>} An array of package names in dependency order
 */
const getFolderDependencyOrder = async function (packagesDir) {
	const packages = (await fsp.readdir(packagesDir, { withFileTypes: true }))
		.filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
		.map((dirent) => path.join(packagesDir, dirent.name));

	const solution = await solveDependencies(packages) ?? [];

	return [...new Set([
		// If the solution doesn't include the vars package, we need to include the tokens package as well
		...(!solution.includes("@spectrum-css/vars") ? ["@spectrum-css/tokens"] : []),
		...solution,
		// If the solution includes the vars package, we need to include the expressvars package as well
		...(solution.includes("@spectrum-css/vars") ? ["@spectrum-css/expressvars"] : []),
	])];
};

/**
 * @description Copy the site resources from their source to the site dist
 * @returns {Promise<void>}
 */
const copyResources = async function () {
	const resources = await fg("**", {
		cwd: path.join(sitePath, "resources"),
		allowEmpty: true,
		onlyFiles: true,
	});

	if (resources.length === 0) return Promise.resolve();
	return Promise.all(resources.map((resource) => {
		return safeCopy(path.join(sitePath, "resources", resource), path.join(destPath, resource));
	}));
};

/**
 * @description Copy the site resources from the site dist to the root dist
 * @note This runs as part of the buildPagesForDependency function; not as
 *   part of copySiteDependencies
 * @returns {Promise<void>}
 */
const copyPackageAssets = async function (sourcePath) {
	const foldername = sourcePath.split(path.sep).pop();
	const packageAssets = await fg([
		`package.json`,
		`dist/**`,
		`stories/**`,
	], {
		cwd: sourcePath,
		allowEmpty: true,
		onlyFiles: true,
	});

	return Promise.all(packageAssets.map((resource) => {
		const outputPath = resource.startsWith("dist") ? resource.split(path.sep).slice(1).join(path.sep) : resource;
		return safeCopy(
			path.join(sourcePath, resource),
			path.join(destPath, "components", foldername, outputPath)
		);
	}));
};

/**
 * @description Copy the workflow icons package to the site dist
 * @returns {Promise<void>}
 */
const copyWorkflowIcons = async function () {
	const resource = require.resolve("@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg", {
		paths: [rootPath, process.cwd()]
	});

	if (!resource) {
		process.stdout.write(`🔴 Unable to locate ${"@adobe/spectrum-css-workflow-icons".yellow} icons package.`);
		return;
	}
	return safeCopy(
		resource,
		path.join(destPath, "img", path.basename(resource))
	);
};

/**
 * @description Copy the ui icons package to the site dist
 * @returns {Promise<void>}
 */
const copyUIIcons = async function () {
	const resource = require.resolve("@spectrum-css/ui-icons", {
		paths: [rootPath, process.cwd()]
	});
	if (!resource) {
		process.stdout.write(`🔴 Unable to locate ${"@spectrum-css/ui-icons".yellow} icons package.`);
		return;
	}
	return safeCopy(resource, path.join(destPath, "img", path.basename(resource)));
};

/**
 * @description Copy the legacy tokens package to the site dist
 * @returns {Promise<void>}
 */
const copyVars = async function () {
	const resourcePath = path.dirname(require.resolve("@spectrum-css/vars/package.json", {
		paths: [rootPath, process.cwd()]
	}));

	if (!resourcePath) {
		process.stdout.write(`🔴 Unable to locate ${"@spectrum-css/vars".yellow} package.`);
		return;
	}

	const resources = fg.sync("spectrum-*.css", {
		cwd: path.join(resourcePath, "dist"),
		allowEmpty: true,
		onlyFiles: true,
	});

	return Promise.all(
		resources.map(resource =>
			safeCopy(
				path.join(resourcePath, "dist", resource),
				path.join(destPath, "dependencies/@spectrum-css/vars", resource)
			)
		)
	);
};

/**
 * @description Copy the legacy express tokens package to the site dist
 * @returns {Promise<void>}
 */
const copyExpressVars = async function () {
	const resourcePath = path.dirname(require.resolve("@spectrum-css/expressvars/package.json", {
		paths: [rootPath, process.cwd()]
	}));

	if (!resourcePath) {
		process.stdout.write(`🔴 Unable to locate ${"@spectrum-css/expressvars".yellow} package.`);
		return;
	}

	const resources = fg.sync("spectrum-*.css", {
		cwd: path.join(resourcePath, "dist"),
		allowEmpty: true,
		onlyFiles: true,
	});

	return Promise.all(
		resources.map(resource =>
			safeCopy(
				path.join(resourcePath, "dist", resource),
				path.join(destPath, "dependencies/@spectrum-css/expressvars", resource)
			)
		)
	);
};

/**
 * @description Copy the core tokens package to the site dist
 * @returns {Promise<void>}
 */
const copyCoreTokens = async function () {
	const resourcePath = path.dirname(require.resolve("@spectrum-css/tokens/package.json", {
		paths: [rootPath, process.cwd()]
	})) ?? path.dirname(rootPath, "tokens");

	if (!resourcePath) {
		process.stdout.write(`🔴 Unable to locate ${"@spectrum-css/tokens".yellow} package.`);
		return;
	}

	const resources = fg.sync("**/*.css", {
		cwd: path.join(resourcePath, "dist"),
		allowEmpty: true,
		onlyFiles: true,
	});

	return Promise.all(
		resources.map(resource =>
			safeCopy(
				path.join(resourcePath, "dist", resource),
				path.join(destPath, "tokens", resource)
			)
		)
	);
};

/**
 * @description Copy the loadicons package to the site dist
 * @returns {Promise<void>}
 */
const copyLoadicons = async function () {
	const resource = require.resolve("loadicons");

	if (!resource) return Promise.resolve();
	return safeCopy(resource, path.join(destPath, "js/loadicons", path.basename(resource)));
};

/**
 * @description Copy the lunr package to the site dist
 * @returns {Promise<void>}
 */
const copyLunr = async function () {
	const resource = require.resolve("lunr");

	if (!resource) return Promise.resolve();
	return safeCopy(resource, path.join(destPath, "js/lunr", path.basename(resource)));
};

/**
 * @description Copy the prism package to the site dist
 * @returns {Promise<void>}
 */
const copyPrism = async function () {
	const resources = await fg([
		"themes/prism.css",
		"themes/prism-dark.css"
	], {
		cwd: path.dirname(require.resolve("prismjs")),
		allowEmpty: true,
		onlyFiles: true,
	});

	if (resources.length === 0) return Promise.resolve();
	return Promise.all(resources.map((resource) => {
		const dest = path.join(destPath, "css/prism/themes/", path.basename(resource));
		return safeCopy(
			path.join(path.dirname(require.resolve("prismjs")), resource),
			dest
		);
	}));
};

/**
 * @description Copy all site dependencies to the site dist
 * @returns {Promise<void>}
 */
const copySiteDependencies = async function () {
	return Promise.all([
		copyResources(),
		copyCoreTokens(),
		copyVars(),
		copyExpressVars(),
		copyUIIcons(),
		copyWorkflowIcons(),
		copyLoadicons(),
		copyLunr(),
		copyPrism()
	]);
};

/**
 * @description Assemble the data needed to build the docs for
 *   a package; used for putting together the index, store, and navigation
 * @param {string} depName - The package name to use to fetch the component's data
 * @returns {Promise<ComponentData[]>} - An array of ComponentData objects, one entry for each metadata file
 */
const getDataForDependency = async function (depName) {
	const packagePath = require.resolve(`${depName}/package.json`);
	const folder = path.dirname(packagePath);
	if (!fs.existsSync(packagePath)) return [];

	const pkg = require(packagePath) ?? {};
	const dependencies = getDependencies(pkg);

	let date;
	try {
		const data = await npmFetch.json(pkg.name);
		date = data.time[pkg.version];
		date = new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch (err) {
		date = "Unreleased";
	}

	// Drop package org
	const foldername = depName.split(path.sep).pop();

	const files = fg.sync("metadata/*.yml", {
		cwd: folder,
		allowEmpty: true,
		absolute: true,
		onlyFiles: true,
	});

	const data = [];
	for (const file of files) {
		const contents = fs.readFileSync(file, "utf-8");

		data.push({
			foldername,
			component: yaml.load(contents),
			pageURL: `${path.basename(file, ".yml")}.html`,
			dependencyOrder: [
				...new Set([
					...minimumDeps,
					...dependencies,
					foldername
				])
			],
			releaseDate: date,
			pkg,
		});
	}
	return data;
};

/**
 * @description Build the index and store for the site search
 * @returns {Promise<void>} - A promise that resolves when the index and store are written
 */
const getDataForIndexes = async function () {
	const folders = await fg("*", {
		cwd: componentPath,
		onlyDirectories: true,
	});

	const data = (await Promise.all(folders.map((folder) => getDataForDependency(`@spectrum-css/${folder}`)))).flat();

	if (!data || data.length === 0) return;

	const docs = [];
	const store = {};

	for (const set of data) {
		docs.push({
			href: set.pageURL,
			name: set.component?.name,
			description: set.component?.description,
		});

		store[set.pageURL] = {
			href: set.pageURL,
			name: set.component?.name,
			component: set.foldername,
			description: set.component?.description,
		};
	}

	const indexPath = path.join(destPath, "index.json");
	const storePath = path.join(destPath, "store.json");

	const index = lunr(function () {
		this.ref("href");
		this.field("name", { boost: 10 });
		this.field("description");

		docs.forEach(function (doc) {
			this.add(doc);
		}, this);
	});

	if (!fs.existsSync(path.dirname(indexPath))) {
		fs.mkdirSync(path.dirname(indexPath), { recursive: true });
	}

	return Promise.all([
		// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript
		fsp.writeFile(indexPath, JSON.stringify(index, null, 2)),
		fsp.writeFile(storePath, JSON.stringify(store, null, 2)),
	]);
};

/**
 * @description Build the data needed for the site pages
 * @returns {Promise<void>}
 */
const getDataForNavigation = async function () {
	const folders = await fg("*", {
		cwd: componentPath,
		onlyDirectories: true,
	});

	const data = (await Promise.all(
		folders.map((folder) => getDataForDependency(`@spectrum-css/${folder}`))
	)).flat();

	if (!data || data.length === 0) return;

	let nav = [];

	for (const set of data) {
		nav.push({
			name: set.component?.name,
			component: set.foldername,
			hide: set.component?.hide,
			href: set.pageURL,
			description: set.component?.description,
		});
	}

	templateData.nav = nav.sort((a, b) => a.name <= b.name ? -1 : 1);
};

/**
 * @description Refresh all site data
 * @returns {Promise<void>}
 */
const getAllData = async function () {
	return Promise.all([
		getDataForNavigation(),
		getDataForIndexes(),
	]);
};

/**
 * @description Build the docs for a single package
 * @param {string} depName - The package name to use to fetch the component's data
 * @returns {Promise<ComponentData[]>}
 */
const buildPagesForDependency = async function (depName) {
	/* Path to the template for rendering a component's page */
	const template = path.join(sitePath, "templates/siteComponent.pug");
	/* If the template doesn't exist, we can't build the docs */
	if (!fs.existsSync(template)) {
		Promise.reject(new Error("Unable to compile docs, missing template"));
		return;
	}

	/* Fetch the component's data */
	const data = await getDataForDependency(depName);
	/* If there's no data, the package probably doesn't have any metadata files */
	if (!data || data.length === 0) return;

	const sourcePath = path.dirname(require.resolve(`${depName}/package.json`));

	if (!sourcePath) {
		Promise.reject(new Error(`🔴 Unable to locate ${depName.yellow} package.`));
		return;
	}

	/* Collect the promises for writing the files that can occur in parallel */
	const promises = [
		copyPackageAssets(sourcePath),
	];

	for (const set of data) {
		/* Render the template with the component's data */
		const compiled = pug.renderFile(template, {
			...templateData,
			...set,
		});

		/* Check if the output directory exists, and create it if not */
		const outputPath = path.join(destPath, set.pageURL);
		if (!fs.existsSync(path.dirname(outputPath))) {
			await fsp.mkdir(path.dirname(outputPath), { recursive: true });
		}

		promises.push(
			fsp.writeFile(outputPath, compiled)
		);
	}

	return Promise.all(promises).then(() => data);
};

/**
 * @description Build the docs for all packages
 * @returns {Promise<ComponentData[]>}
 */
const buildAllPackages = async function () {
	const dependencies = await getFolderDependencyOrder(componentPath);

	// @note letting nx run this in advance of the build
	// await runComponentTask(dependencies.map(dep => dep.split("/").pop()));

	return Promise.all(
		dependencies.map(buildPagesForDependency)
	).then(data => data.flat());
};

/**
 * @description Build the site page for a single template
 * @returns {Promise<string|Error>}
 */
async function buildPageByTemplate(template) {
	if (!fs.existsSync(template)) {
		return Promise.reject(`Template ${template.cyan} could not be found.`);
	}

	const pageURL = `${path.basename(template, ".pug")}.html`;

	const compiled = pug.renderFile(template, {
		...templateData,
		pageURL,
		dependencyOrder: minimumDeps,
	});

	const outputPath = path.join(destPath, pageURL);
	if (!fs.existsSync(path.dirname(outputPath))) {
		fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	}

	return fsp.writeFile(outputPath, compiled).then(() => pageURL).catch((err) => {
		if (err) Promise.reject(new Error(`🔴 Error building ${pageURL.cyan}: ${err}`));
	});
};

/**
 * @description Build the site pages
 * @returns {Promise<string[]|Error>} - A promise that resolves when the pages are written, or rejects with an error
 */
async function buildAllPages() {
	const pages = await fg("*.pug", {
		cwd: sitePath,
		allowEmpty: true,
		absolute: true,
		onlyFiles: true,
	});

	if (!pages || pages.length === 0) {
		return Promise.reject(`No pages found in ${sitePath.cyan} matching the '${'*.pug'.yellow} pattern.`);
	}

	return Promise.all(pages.map((template) => buildPageByTemplate(template))).then((buildPages) => {
		const built = buildPages.filter((page) => typeof page === "string");
		process.stdout.write(built.map((b) => `${`✓`.green} ${b.cyan}`).join("\n"));
		/* Returns a list of the pages that were built */
		return Promise.resolve(built);
	}).catch((err) => {
		if (err) Promise.reject(new Error(`🔴 Error building site pages: ${err}`));
	});
};

/**
 * @description Run the specified task for the given package
 * @returns {Promise<void>}
 */
const runComponentTask = async function (packages = []) {
	return new Promise((resolve, reject) => {
		if (!packages || packages.length === 0) resolve();

		let output = "";

		// Spawn a component build using NX
		const builder = spawn("yarn", ["builder", packages.join(",")], {
			cwd: rootPath,
			env: {
				...process.env,
				NX_PERF_LOGGING: "false",
			}
		});

		builder.stdout.on('data', (chunk) => {
			output += chunk.toString() + "\n";
		});

		builder.stderr.on('data', (chunk) => {
			output += chunk.toString() + "\n";
		});

		builder.on('error', (err) => {
			reject(err);
		});

		builder.on("exit", async (code) => {
			if (code !== 0) {
				reject(
					new Error(`🔴 build failed with code ${code}`)
				);
			}

			// If the build succeeded, write the output
			process.stdout.write(output + "\n");

			// Copy the assets for each package to the site dist
			await Promise.all(
				packages.map(async (package) =>
					copyPackageAssets(path.join(componentPath, package))
				)
			);

			resolve();
		});
	});
};

/**
 * @description Fetch the site data and then trigger the build for a single page
 * @param {import('fs').PathLike} path - The path to the page to build
 * @returns {Promise<void>}
 */
const buildPage = async function (path) {
	/* Builds *.pug files in the site directory */
	return getAllData().then(() => buildPageByTemplate(path));
};

/**
 * @description Fetch the site data and then trigger the site pages build
 * @returns {Promise<void>}
 */
const buildPages = async function () {
	/* Builds *.pug files in the site directory */
	return getAllData().then(() => buildAllPages());
};

/**
 * @description Fetch the site data and then trigger the build for a single package
 * @param {import('fs').PathLike} path - The path to the page to build
 * @returns {Promise<void>}
 */
const buildPackage = async function (package) {
	/* Builds *.pug files in the site directory */
	return getAllData().then(() => buildPagesForDependency(package));
};

/**
 * @description Fetch the site data and then trigger the site pages build
 * @returns {Promise<void>}
 */
const buildPackages = async function packages() {
	return getAllData().then(() =>
		Promise.all([
			buildAllPackages(),
			copySiteDependencies(),
		])
	);
};

/**
 * @description Fetch the site data and then trigger the build for all site resources
 * @returns {Promise<void>}
 */
const build = async function () {
	return getAllData().then(() =>
		Promise.all([
			buildAllPackages(),
			copySiteDependencies(),
			buildAllPages(),
		])
	);
};

exports.buildFreshResources = copyResources;
exports.copyPackageAssets = copyPackageAssets;
exports.copySiteDependencies = copySiteDependencies;

exports.refreshData = getAllData;

exports.buildPagesForDependency = buildPagesForDependency;
exports.buildAllPackages = buildAllPackages;

exports.buildPage = buildPage;
exports.buildPages = buildPages;
exports.buildPackage = buildPackage;
exports.buildPackages = buildPackages;

exports.runComponentTask = runComponentTask;

/* Default export is the full build */
module.exports = exports.build = build;
