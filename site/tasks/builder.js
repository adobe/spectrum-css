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

const {
	dirs,
	relativePrint,
	getFolderDependencyOrder,
	getPackageFromPath,
} = require("./utilities");

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const _ = require("lodash");
const fg = require("fast-glob");
const pug = require("pug");
const yaml = require("js-yaml");
const lunr = require("lunr");
const npmFetch = require("npm-registry-fetch");

// Import the component-builder-simple to process the site styles
const { processCSS } = require("../../tasks/component-builder.js");

require("colors");

const loadicons = require.resolve("loadicons");
const lunrPath = require.resolve("lunr");
const prism = require.resolve("prismjs");
const tokens = require.resolve("@spectrum-css/tokens");
const workflowIcons = require.resolve("@adobe/spectrum-css-workflow-icons");
const uiIcons = require.resolve("@spectrum-css/ui-icons");

const deprecatedComponents = [];

const timeInMs = (seconds, nanoseconds) => (seconds * 1000000000 + nanoseconds) / 1000000;

/**
 * @typedef {Object} SiteUtilities
 * @property {import('markdown-it')} markdown
 * @property {import('prismjs').Prism} Prism
 * @property {(status: string) => "negative"|"notice"|"positive"|"neutral"} getStatusLightVariant
 * @property {(name: string, subName?: string) => string} getSlug
 * @property {(component: object) => void} populateDNAInfo
 */

/**
 * @typedef Navigation
 * @property {string} name
 * @property {string} component
 * @property {boolean} hide
 * @property {string} href
 * @property {string} description
 */

/**
 * @typedef {Object} TemplateData
 * @property {SiteUtilities} util
 * @property {Navigation[]} nav
 * @property {Object} component
 * @property {string} pageURL
 * @property {string[]} dependencyOrder
 * @property {string} releaseDate
 * @property {Object} pkg
 */

/**
 * Copy static assets to the publish directory
 * @param {(string|RegExp)[]} globs
 * @param {object} options
 * @param {string} [options.cwd]
 * @param {string} outputDir
 * @returns {Promise<string[]>}
 */
async function copy_Assets(globs = [], {
	cwd,
	outputDir,
	...fastGlobOptions
} = {}) {
	const files = await fg(globs, {
		onlyFiles: true,
		allowEmpty: true,
		...fastGlobOptions,
		cwd,
	});

	if (!files.length) return Promise.resolve([]);

	return Promise.all(
		files.map(async (file) => {
			const output = outputDir ? path.join(dirs.publish, outputDir, file) : path.join(dirs.publish, file);

			if (!fs.existsSync(path.dirname(output))) {
				await fsp.mkdir(path.dirname(output), { recursive: true }).catch((err) => {
					if (!err) return Promise.reject(new Error(`${"✗".red}  problem making ${relativePrint(path.dirname(output)).yellow}`));
					return Promise.reject(err);
				});
			}

			const input = path.join(cwd, file);

			return fsp.copyFile(input, output).then(() => {
				return `${"✓".green}  ${relativePrint(input).gray} -> ${relativePrint(output).yellow}`;
			}).catch((err) => {
				if (!err) return Promise.reject(new Error(`${"✗".red}  ${relativePrint(input).gray} -> ${relativePrint(output).yellow}`));
				return Promise.reject(err);
			});
		})
	);
}

/**
 * Copy all site resources
 * @returns {Promise<string[]>}
 */
async function copy_Resources() {
	const start = process.hrtime();
	return Promise.all([
		copy_Assets(["**"], { cwd: path.join(dirs.site, "resources") }),
		copy_Assets(["index.css"], {
			cwd: path.dirname(tokens),
			outputDir: "components/tokens/"
		}),
		copy_Assets(["index.css", "css/**"], {
			cwd: path.dirname(tokens),
			outputDir: "tokens/"
		}),
		copy_Assets(["index.js"], {
			cwd: path.dirname(loadicons),
			outputDir: "js/loadicons/"
		}),
		copy_Assets(["lunr*.js"], {
			cwd: path.dirname(lunrPath),
			outputDir: "js/lunr/"
		}),
		copy_Assets(["prism.css", "prism-dark.css"], {
			cwd: path.join(path.dirname(prism), "themes"),
			outputDir: "css/prism/"
		}),
		copy_Assets(["spectrum-icons.svg"], {
			cwd: path.dirname(workflowIcons),
			outputDir: "img"
		}),
		copy_Assets(["*.svg"], {
			cwd: path.dirname(uiIcons),
			outputDir: "img",
		}),
		copy_Assets(["*.{png,jpg,jpeg,svg,ico}"], {
			cwd: path.join(dirs.root, "assets"),
			outputDir: "img"
		}),
	]).then((results = []) => {
		const end = process.hrtime(start);
		return [
			"\n\n[copy] 📷  Site resources",
			...results.flat(),
			"---------------------",
			`processing took ${timeInMs(...end)}ms`,
			"",
		];
	}).catch((err) => Promise.reject(err));
}

/**
 * Fetch the global data for all rendered pages
 * @returns {Promise<TemplateData>}
 */
async function fetchData_forGlobal({
	nav =[],
	docs =[],
	store = {},
	...otherData
} = {}) {
	/* We're only going to process this data if we haven't already fetched it */
	const hasNav = nav.length > 0;
	const hasDocs = docs.length > 0;
	const hasStore = Object.keys(store).length > 0;

	if (!hasNav || !hasDocs || !hasStore) {
		const files = await fg("*/metadata/*.yml", {
			cwd: dirs.components,
			allowEmpty: true,
			absolute: true,
		});

		const deprecatedFiles = await fg("deprecated/*/*.yml", {
			cwd: dirs.storybook,
			allowEmpty: true,
			absolute: true
		});

		await Promise.all([...files, ...deprecatedFiles].map(async (file) => {
			const { component, pageURL } = await fetchData_forPackage(file);

			if (Object.keys(component).length <= 0) {
				return Promise.reject(new Error(`${"✗".red}  Could not fetch component data for ${relativePrint(file).yellow}`));
			}

			if (!hasNav) {
				nav.push({
					name: component.name,
					component: component.id,
					hide: component.hide ?? false,
					status: component.status,
					href: pageURL,
					description: component.description,
				});
			}

			if (!hasDocs) {
				docs.push({
					href: pageURL,
					name: component.name,
					description: component.description,
				});
			}

			if (!hasStore) {
				store[pageURL] = {
					href: pageURL,
					name: component.name,
					component: component.id,
					description: component.description,
				};
			}
		}));
	}

	return {
		util: require("../util"),
		nav: nav.sort((a, b) => a.name <= b.name ? -1 : 1),
		docs,
		store,
		...otherData,
	};
}

/**
 * Fetch & interpret the data in yml for the template
 * @param {string} file
 * @returns {Promise<TemplateData>}
 */
async function fetchData_forPackage(file, data = {}) {
	if (!file) return data;

	// Drop package org
	const componentName = getPackageFromPath(file);
	if (!componentName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${file}`));
	}

	const pkgPath = require.resolve(`@spectrum-css/${componentName}/package.json`);
	const dirName = path.dirname(pkgPath);
	if (!dirName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${dirName}`));
	}

	const basename = path.basename(file, ".yml");

	const component = await fsp.readFile(file, "utf-8")
		.then(yaml.load)
		.catch(err => Promise.reject(err));

	// Use the example file name
	if (!component.id) {
		component.id = basename ?? componentName;
	}

	if (!component.name) {
		component.name = componentName ?? component.id;
	}

	const pkg = await fsp.readFile(pkgPath)
		.then(JSON.parse)
		.catch(err => Promise.reject(err));

	let npmData;
	try {
		npmData = await npmFetch.json(pkg.name);
	}
	catch (err) {
		console.log(err);
	}

	let releaseDate = "Unreleased";
	if (npmData?.time?.[pkg.version]) {
		releaseDate = new Date(npmData.time[pkg.version])
			.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
	}
	else {
		console.log(`${"✗".red}  Could not determine date of release for ${pkg.name.cyan}@${pkg.version}`);
	}

	const releases = [
		{ label: "Current version", version: pkg.version, date: releaseDate }
	];

	if (npmData?.["dist-tags"]) {
		for (const [tag, version] of Object.entries(npmData["dist-tags"])) {
			if (tag === "beta") continue;
			// Spectrum 2 TBD
			if (tag === "next") continue;
			// Skip adding it to the table if it's the same version as current
			if (tag === "latest" && version === pkg.version) continue;

			let label = _.capitalize(tag);

			const date = new Date(npmData.time[version])
				.toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				});

			releases.push({ tag, label, version, date });
		}
	}

	const dependencyOrder = await getFolderDependencyOrder(dirName);

	return {
		...data,
		component,
		pageURL: `${basename}.html`,
		dependencyOrder: [...new Set([
			...(dependencyOrder ?? []).map((dep) => dep.split("/").pop()),
			componentName,
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
			"inlinealert",
		])],
		releases,
		releaseDate,
		pkg,
	};
}

/**
 * Pass yml data through template to output html
 * @param {string} componentName
 * @param {string} dirName
 * @param {string} file
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<string>}
 */
async function buildPages_compileTemplate(componentName, dirName, file, globalData) {
	const data = await fetchData_forPackage(file, globalData);

	// Without a URL, there's nowhere to write this file
	if (!data.pageURL) {
		return Promise.reject(`${"✗".red}  Could not determine a page url for ${relativePrint(file).yellow}.`);
	}

	const outputPath = path.join(dirs.publish, data.pageURL);

	const template = path.join(dirs.site, "includes/siteComponent.pug");
	if (!fs.existsSync(template)) {
		return Promise.reject(new Error(`${"✗".red}  could not find ${relativePrint(template).yellow}`));
	}

	const compiled = pug.renderFile(
		path.join(dirs.site, "includes/siteComponent.pug"),
		data,
	);

	if (!compiled) {
		return Promise.reject(new Error(`${"✗".red}  There was a problem compiling the template for ${relativePrint(outputPath).yellow}`));
	}

	if (!fs.existsSync(path.dirname(outputPath))) {
		await fsp.mkdir(path.dirname(outputPath), { recursive: true }).catch((err) => {
			if (!err) return Promise.reject(new Error(`${"✗".red}  problem making ${relativePrint(path.dirname(outputPath)).yellow}`));
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(outputPath, compiled).then(() => {
		return `${"✓".green}  ${relativePrint(file, { cwd: dirName }).gray} -> ${relativePrint(outputPath).yellow}`;
	}).catch((err) => {
		if (!err) return Promise.reject(new Error(`${"✗".red}  ${relativePrint(outputPath).gray}`));
		return Promise.reject(err);
	});
}

/**
 * Build yml data into html files for the site
 * @param {string} dep
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<string[]>}
 */
async function buildPages_forPackage(componentName, globalData = {}) {
	if (!componentName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${dirName}`));
	}

	const pkgPath = require.resolve(`@spectrum-css/${componentName}/package.json`);
	const dirName = path.dirname(pkgPath);
	if (!dirName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${dirName}`));
	}

	let dataDir = path.join(dirName, "metadata");
	if (deprecatedComponents.includes(componentName)) {
		dataDir = path.join(dirs.storybook, "deprecated", componentName);
	}

	const files = await fg("*.yml", {
		cwd: dataDir,
		allowEmpty: true,
		absolute: true,
	});

	return Promise.all(files.map(async (file) => {
		return buildPages_compileTemplate(componentName, dirName, file, globalData);
	})).then((results = []) => results.flat());
}

/**
 * Build assets for a single component
 * @param {string} componentName
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<string[]|Error[]>}
 */
async function build_forPackage(componentName, globalData = {}) {
	const start = process.hrtime();

	const pkgPath = require.resolve(`@spectrum-css/${componentName}/package.json`);
	const dirName = path.dirname(pkgPath);
	if (!dirName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${dirName}`));
	}

	let storiesDir = path.join(dirName, "stories");
	let outputDir = path.join("components", componentName);
	if (deprecatedComponents.includes(componentName)) {
		outputDir = path.join("dependencies/@spectrum-css", componentName);
		storiesDir = path.join(dirs.storybook, "deprecated", componentName);
	}

	/** @todo how do we load dependencies not hosted in the repo? */
	return Promise.all([
		buildPages_forPackage(componentName, globalData),
		copy_Assets(["*.css", "**/*.css", "*.json"], {
			cwd: path.join(dirName, "dist"),
			outputDir,
			allowEmpty: true,
		}),
		copy_Assets(["*.js"], {
			cwd: storiesDir,
			ignore: ["*.stories.js"],
			outputDir,
		}),
		copy_Assets(["package.json"], {
			cwd: dirName,
			outputDir,
		})
	]).then((results = []) => {
		const end = process.hrtime(start);
		return [
			`[${`@spectrum-css/${componentName}`.cyan}]`,
			"---------------------",
			...results.flat(),
			"---------------------",
			`processing took ${timeInMs(...end)}ms`,
			"",
		];
	});
}

/**
 * Build component pages
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function build_forPackages(globalData = {}) {
	const start = process.hrtime();
	const packages = (await fsp.readdir(dirs.components, { withFileTypes: true }))
		.filter((dirent) => {
			/* looking for directories that have a package.json */
			if (!dirent.isDirectory() && !dirent.isSymbolicLink()) return false;
			if (!fs.existsSync(path.join(dirent.path, dirent.name, "package.json"))) return false;
			return true;
		})
		.map((dirent) => dirent.name);

	// Build pages for all provided dependencies
	return Promise.all(packages.map(pkg => build_forPackage(pkg, globalData)))
		.then((results = []) => {
			const end = process.hrtime(start);
			return [
				"[build] 📦  Components",
				...results.flat(),
				`total processing took ${timeInMs(...end)}ms`,
				"---------------------",
				"",
			];
		})
		.catch((err) => Promise.reject(err));
}

/**
 * Build deprecated component pages
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function build_forDeprecatedPackages(globalData = {}) {
	const start = process.hrtime();
	// Build pages for all provided dependencies
	return Promise.all(deprecatedComponents.map(pkg => build_forPackage(pkg, globalData)))
		.then((results = []) => {
			const end = process.hrtime(start);
			return [
				"[build] 📦  Deprecated components",
				...results.flat(),
				`total processing took ${timeInMs(...end)}ms`,
				"---------------------",
				"",
			];
		})
		.catch((err) => Promise.reject(err));
}

/**
 * Build docs pages
 * @param {string} file
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function buildPage_forSite(file, globalData = {}) {
	const pageURL = `${path.basename(file, ".pug")}.html`;
	const outputPath = path.join(dirs.publish, pageURL);
	const compiled = pug.renderFile(
		path.join(dirs.site, file),
		{
			...globalData,
			pageURL,
			dependencyOrder: [
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
			pkg: require(path.join(dirs.site, "package.json")),
		}
	);

	if (!compiled) {
		return Promise.reject(new Error(`${"✗".red}  problem compiling the template for ${relativePrint(outputPath).yellow}`));
	}

	if (!fs.existsSync(path.dirname(outputPath))) {
		await fsp.mkdir(path.dirname(outputPath), { recursive: true }).catch((err) => {
			if (!err) return Promise.reject(new Error(`${"✗".red}  problem making ${relativePrint(path.dirname(outputPath)).yellow}`));
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(outputPath, compiled).then(() => {
		return `${"✓".green}  ${relativePrint(file).gray} -> ${relativePrint(outputPath).yellow}`;
	}).catch((err) => {
		if (!err) return Promise.reject(new Error(`${"✗".red}  ${relativePrint(outputPath).gray}`));
		return Promise.reject(err);
	});
}

/**
 * Build docs pages
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function build_forSite(globalData = {}) {
	const start = process.hrtime();

	const files = await fg(["*.pug"], { cwd: dirs.site });

	return Promise.all(files.map(async (file) =>
		buildPage_forSite(file, globalData)
	)).then((results = []) => {
		const end = process.hrtime(start);
		return [
			"[build] ✍️  Pages",
			...results.flat(),
			"---------------------",
			`processing took ${timeInMs(...end)}ms`,
			"",
		];
	}).catch((err) => Promise.reject(err));
}

/**
 * Build docs styles
 * @returns {Promise<void>}
 */
async function build_forSiteStyles() {
	const start = process.hrtime();

	const cwd = path.join(dirs.site, "resources/css");
	const files = await fg("*.css", {
		cwd,
		allowEmpty: true,
	});

	return Promise.all(files.map(async (file) => {
		const outputPath = path.join(dirs.publish, "css", file);
		const content = await fsp.readFile(path.join(cwd, file));
		return processCSS(content, path.join(cwd, file), outputPath, { cwd: dirs.root });
	})).then((results = []) => {
		const end = process.hrtime(start);
		return [
			"[build] 🎨  Styles",
			...results.flat(),
			"---------------------",
			`processing took ${timeInMs(...end)}ms`,
			"",
		];
	}).catch((err) => Promise.reject(err));
}

/**
 * Build index.json
 * @param {object[]} docs
 * @returns {Promise<void>}
 */
async function build_forIndex(docs) {
	const index = lunr(function () {
		this.ref("href");
		this.field("name", { boost: 10 });
		this.field("description");

		docs.forEach(function (doc) {
			this.add(doc);
		}, this);
	});

	const indexPath = path.join(dirs.publish, "index.json");

	if (!fs.existsSync(dirs.publish)) {
		await fsp.mkdir(dirs.publish, { recursive: true }).catch((err) => {
			if (!err) return Promise.reject(new Error(`${"✗".red}  problem making ${relativePrint(path.dirname(dirs.publish)).yellow}`));
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(indexPath, JSON.stringify(index, null, 2)).then(() => {
		return `${"✓".green}  ${relativePrint(indexPath).yellow} written`;
	}).catch((err) => {
		if (!err) return Promise.reject(new Error(`${"✗".red}  ${relativePrint(indexPath).gray}`));
		return Promise.reject(err);
	});
}

/**
 * Build store.json
 * @param {object} store
 * @returns {Promise<void>}
 */
async function build_forStore(store) {
	const storePath = path.join(dirs.publish, "store.json");

	if (!fs.existsSync(dirs.publish)) {
		await fsp.mkdir(dirs.publish, { recursive: true }).catch((err) => {
			if (!err) return Promise.reject(new Error(`${"✗".red}  problem making ${relativePrint(path.dirname(dirs.publish)).yellow}`));
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(storePath, JSON.stringify(store, null, 2)).then(() => {
		return `${"✓".green}  ${relativePrint(storePath).yellow} written`;
	}).catch((err) => {
		if (!err) return Promise.reject(new Error(`${"✗".red}  ${relativePrint(storePath).gray}`));
		return Promise.reject(err);
	});
}

/**
 * Watch styles
 * @param {string} file
 * @returns {Promise<string[]>}
 */
async function watch_Styles(file) {
	const componentName = getPackageFromPath(file);
	if (!componentName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${file}`));
	}

	const processorPath = path.join(dirs.root, "tasks/component-builder.js");

	if (!fs.existsSync(processorPath)) {
		return Promise.reject(new Error(`${"✗".red}  No processing function found for ${relativePrint(processorPath)}`));
	}

	await require(processorPath);

	const globalData = await fetchData_forGlobal();

	return build_forPackage(componentName, globalData);
}

async function main() {
	const globalData = await fetchData_forGlobal();
	return Promise.all([
		build_forSite(globalData),
		build_forPackages(globalData),
		build_forDeprecatedPackages(globalData),
		build_forSiteStyles(),
		copy_Resources(),
		build_forStore(globalData.store),
		build_forIndex(globalData.docs),
	]).then((results = []) => {
		results.flat().forEach(r => console.log(r));
	}).catch((err) => {
		if (err) console.log(err.message ?? err);
		return Promise.reject(err);
	});
}

module.exports = {
	default: main,
	build_forPackage,
	buildPages_forPackage,
	build_forSite,
	copy_Resources,
	copy_Assets,
	watch_Styles,
	fetchData_forGlobal,
};
