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
    printHeader,
    printFooter,
    relativePrint,
    getFolderDependencyOrder,
	getPackageFromPath,
} = require("./utilities");

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const pug = require("pug");
const yaml = require("js-yaml");
const lunr = require("lunr");
const npmFetch = require("npm-registry-fetch");
const rimraf = require("rimraf");

// Import the component-builder-simple to process the site styles
const { processCSS } = require("../../tasks/component-builder.js");

require("colors");

const loadicons = require.resolve("loadicons");
const lunrPath = require.resolve("lunr");
const prism = require.resolve("prismjs");
const tokens = require.resolve("@spectrum-css/tokens");
const vars = require.resolve("@spectrum-css/vars");
const expressvars = require.resolve("@spectrum-css/expressvars");
const workflowIcons = require.resolve("@adobe/spectrum-css-workflow-icons");
const uiIcons = require.resolve("@spectrum-css/ui-icons");

/**
 * @typedef {Object} SiteUtilities
 * @property {import('markdown-it')} markdown
 * @property {import('prismjs').Prism} Prism
 * @property {(status: string) => "negative"|"notice"|"positive"|"neutral"} getStatusLightVariant
 * @property {(name: string, subName?: string) => string} getSlug
 * @property {(component: object, dnaVars: object) => void} populateDNAInfo
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
 * @property {Object} dnaVars
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
					if (!err) return;
					console.log(`${"✗".red}  problem making ${relativePrint(path.dirname(output)).yellow}`);
					return Promise.reject(err);
				});
			}

			const input = path.join(cwd, file);

			return fsp.copyFile(input, output).then(() => {
				console.log(`${"✓".green}  ${relativePrint(input).gray} -> ${relativePrint(output).yellow}`);
				return output;
			}).catch((err) => {
				if (!err) return;
				console.log(`${"✗".red}  ${relativePrint(input).gray} -> ${relativePrint(output).yellow}`);
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
	const key = printHeader("", { timerKey: "[copy] 📷  Site resources" });

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
		copy_Assets(["spectrum-*.css"], {
			cwd: path.dirname(vars),
			outputDir: "dependencies/@spectrum-css/vars",
		}),
		copy_Assets(["spectrum-*.css"], {
			cwd: path.dirname(expressvars),
			outputDir: "dependencies/@spectrum-css/expressvars",
		}),
		copy_Assets(["*.{png,jpg,jpeg,svg,ico}"], {
			cwd: path.join(dirs.root, "assets"),
			outputDir: "img"
		}),
	]).then((result) => {

		printFooter(key);
		return result.flat();
	}).catch((err) => {

		printFooter(key);
		return Promise.reject(err);
	});
}

/**
 * Fetch the global data for all rendered pages
 * @returns {Promise<TemplateData>}
 */
async function fetchData_forGlobal({
	dnaVars = {},
	nav =[],
	docs =[],
	store = {},
	...otherData
} = {}) {
	/* Only fetch the metadata if we don't already have it */
	if (Object.keys(dnaVars).length > 0) {
		dnaVars = vars ? await fsp.readFile(vars)
			.then(JSON.parse)
			.catch(err => Promise.reject(err)) : {};
	}

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

		await Promise.all(files.map(async (file) => {
			const { component, pageURL } = await fetchData_forPackage(file);

			if (Object.keys(component).length <= 0) {
				return Promise.reject(new Error(`${"✗".red}  Could not fetch component data for ${relativePrint(file).yellow}`));
			}

			if (!hasNav) {
				nav.push({
					name: component.name,
					component: component.id,
					hide: component.hide ?? false,
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
		dnaVars,
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

	const pkgPath = path.join(dirs.components, componentName, "package.json");

	const dirName = path.dirname(pkgPath);
	const basename = path.basename(file, ".yml");

	const component = await fsp.readFile(file, "utf-8")
		.then(yaml.load)
		.catch(err => Promise.reject(err));

	// Use the example file name
	if (!component.id) {
		component.id = basename ?? componentName;
	}

	if (!component.name) {
		if (data.dnaVars?.[`spectrum-${component.id}-name`]) {
			component.name = data.dnaVars[`spectrum-${component.id}-name`];
		} else {
			component.name = componentName ?? component.id;
		}
	}

	const pkg = await fsp.readFile(pkgPath)
		.then(JSON.parse)
		.catch(err => Promise.reject(err));

	const releaseDate = await npmFetch.json(pkg.name).then(npmData => {
		if (!npmData || !npmData.time || !npmData.time[pkg.version]) return;
		return new Date(npmData.time[pkg.version])
			.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
	}).catch(() => {
		console.log(`${"✗".red}  Could not determine date of release for ${pkg.name.cyan}@${pkg.version}`);
		return "Unreleased";
	});

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
		])],
		releaseDate,
		pkg,
	};
}

/**
 * Build yml data into html files for the site
 * @param {string} dep
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<string[]>}
 */
async function buildPages_forPackage(dep, globalData = {}) {
	const pkgPath = require.resolve(path.join(dep, "package.json"));
	const dirName = path.dirname(pkgPath);
	const componentName = getPackageFromPath(dirName);
    if (!componentName) {
        return Promise.reject(new Error(`${"✗".red}  No package found for ${dirName}`));
	}

	const files = await fg("metadata/*.yml", {
		cwd: dirName,
		allowEmpty: true,
		absolute: true,
	});

	const key = `[${`@spectrum-css/${componentName}`.cyan}] assets copied`;
	console.time(key);

	const outputFiles = await Promise.all(files.map(async (file) => {
		const data = await fetchData_forPackage(file, globalData);

		// Without a URL, there's nowhere to write this file
		if (!data.pageURL) {
			return Promise.reject(`${"✗".red}  Could not determine a page url for ${relativePrint(file).yellow}.`)
		}

		const outputPath = path.join(dirs.publish, data.pageURL);

		const template = path.join(dirs.site, "templates/siteComponent.pug");
		if (!fs.existsSync(template)) {
			return Promise.reject(new Error(`${"✗".red}  could not find ${relativePrint(template).yellow}`));
		}

		const compiled = pug.renderFile(
			path.join(dirs.site, "templates/siteComponent.pug"),
			data,
		);

		if (!compiled) {
			return Promise.reject(new Error(`${"✗".red}  There was a problem compiling the template for ${relativePrint(outputPath).yellow}`));
		}

		if (!fs.existsSync(path.dirname(outputPath))) {
			await fsp.mkdir(path.dirname(outputPath), { recursive: true }).catch((err) => {
				if (!err) return;
				console.log(`${"✗".red}  problem making ${relativePrint(path.dirname(output)).yellow}`);
				return Promise.reject(err);
			});
		}

		return fsp.writeFile(outputPath, compiled).then(() => {
			console.log(`[${`@spectrum-css/${componentName}`.cyan}] ${"✓".green}  ${relativePrint(file, { cwd: dirName }).gray} -> ${relativePrint(outputPath).yellow}`);
			return outputPath;
		}).catch((err) => {
			if (!err) return;
			console.log(`${"✗".red}  ${relativePrint(outputPath).gray}`);
			return Promise.reject(err);
		});
	})).catch(err => {
		if (!err) return;

		if (Array.isArray(err)) err.forEach(e => {
			console.trace(e);
		});
		else console.trace(err);

		console.timeEnd(key);
		return;
	});

	console.timeEnd(key);
	return outputFiles ?? [];
}

/**
 * Build assets for a single component
 * @param {string} dirName
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function build_forPackage(dirName, globalData = {}) {
	const componentName = getPackageFromPath(dirName);
	if (!componentName) {
		return Promise.reject(new Error(`${"✗".red}  No package found for ${dirName}`));
	}

	return Promise.all([
		buildPages_forPackage(dirName, globalData),
		copy_Assets(["*.css", "themes/*.css", "*.json"], {
			cwd: path.join(dirName, "dist"),
			outputDir: path.join("components", componentName),
			allowEmpty: true,
		}),
		copy_Assets(["*.js"], {
			cwd: path.join(dirName, "stories"),
			ignore: ["*.stories.js"],
			outputDir: path.join("components", componentName),
		}),
		copy_Assets(["package.json"], {
			cwd: dirName,
			outputDir: path.join("components", componentName),
		})
	]);
}

/**
 * Build component pages
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function build_forPackages(globalData = {}) {
	const packages = (await fsp.readdir(dirs.components, { withFileTypes: true }))
		.filter((dirent) => {
			/* looking for directories that have a package.json */
			if (!dirent.isDirectory() && !dirent.isSymbolicLink()) return false;
			if (!fs.existsSync(path.join(dirent.path, dirent.name, "package.json"))) return false;
			return true;
		})
		.map((dirent) => path.join(dirent.path, dirent.name));

	const key = printHeader("", { timerKey: "[build] 📦  Components" });
	// Build pages for all provided dependencies
	return Promise.all(packages.map(package => build_forPackage(package, globalData))).then(() => {
		printFooter(key);
	}).catch((err) => {
		printFooter(key);
		return Promise.reject(err);
	});
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
			if (!err) return;
			console.log(`${"✗".red}  problem making ${relativePrint(path.dirname(output)).yellow}`);
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(outputPath, compiled).then(() => {
		console.log(`${"✓".green}  ${relativePrint(file).gray} -> ${relativePrint(outputPath).yellow}`);
	}).catch((err) => {
		if (!err) return;
		console.log(`${"✗".red}  ${relativePrint(outputPath).gray}`);
		return Promise.reject(err);
	});
}

/**
 * Build docs pages
 * @param {TemplateData} [globalData={}]
 * @returns {Promise<void>}
 */
async function build_forSite(globalData = {}) {
	const key = printHeader("", { timerKey: "[build] ✍️  Pages" });

	const files = await fg(["*.pug"], { cwd: dirs.site });

	return Promise.all(files.map(async (file) =>
		buildPage_forSite(file, globalData)
	)).then(() => {

		printFooter(key);
	}).catch((err) => {

		printFooter(key);
		return Promise.reject(err);
	});
}

/**
 * Build docs styles
 * @returns {Promise<void>}
 */
async function build_forSiteStyles() {
	const key = printHeader("", { timerKey: "[build] 🎨  Styles" });

	const cwd = path.join(dirs.site, "resources/css");
	const files = await fg("*.css", {
		cwd,
		allowEmpty: true,
	});

	return Promise.all(files.map(async (file) => {
		const outputPath = path.join(dirs.publish, "css", file);
		const content = await fsp.readFile(path.join(cwd, file));
		return processCSS(content, path.join(cwd, file), outputPath, { cwd: dirs.root });
	})).then(() => {

		printFooter(key);
	}).catch((err) => {

		printFooter(key);
		return Promise.reject(err);
	});
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
			if (!err) return;
			console.log(`${"✗".red}  problem making ${relativePrint(path.dirname(dirs.publish)).yellow}`);
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(indexPath, JSON.stringify(index, null, 2)).then(() => {
		console.log(`${"✓".green}  ${relativePrint(indexPath).yellow} written`);
	}).catch(() => {
		console.log(`${"✗".red}  ${relativePrint(indexPath).gray}`);
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
			if (!err) return;
			console.log(`${"✗".red}  problem making ${relativePrint(path.dirname(dirs.publish)).yellow}`);
			return Promise.reject(err);
		});
	}

	return fsp.writeFile(storePath, JSON.stringify(store, null, 2)).then(() => {
		console.log(`${"✓".green}  ${relativePrint(storePath).yellow} written`);
	}).catch(() => {
		console.log(`${"✗".red}  ${relativePrint(storePath).gray}`);
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

    const dirName = path.join(dirs.components, componentName);
    if (!fs.existsSync(dirName)) {
        return Promise.reject(new Error(`${"✗".red}  No local package found for ${componentName}`));
	}

	const outputDir = path.join("components", componentName);

    const copyTask = () => copy_Assets(["**"], {
        cwd: path.join(dirName, "dist"),
        outputDir,
        allowEmpty: true,
        absolute: false,
    })
        .then(() => fg.sync(`${dirName}/dist/*.css`));

	const processorPath = path.join(dirs.root, `tasks/component-builder.js`);
	if (!fs.existsSync(processorPath)) {
		console.log(`${"✗".red}  No processing function found for ${relativePrint(processorPath)}`);
        return copyTask();
	}

	if (fs.existsSync(outputDir)) await rimraf(outputDir);
	await require(processorPath);

	if (fs.existsSync(outputDir)) return copyTask();
}

async function main() {
	const globalData = await fetchData_forGlobal();
	return Promise.all([
		build_forSite(globalData),
		build_forPackages(globalData),
		build_forSiteStyles(),
		copy_Resources(),
		build_forStore(globalData.store),
		build_forIndex(globalData.docs),
	]).catch((err) => Promise.reject(err));
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
