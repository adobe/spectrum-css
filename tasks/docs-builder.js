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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const depSolver = require("dependency-solver");
const pug = require("pug");
const lunr = require("lunr");
const yaml = require("js-yaml");

const util = require(path.join(__dirname, "../site/util"));

const templateData = { nav: [], pkg };
const docs = [];
const store = {};

/**
 * Given a package path, get its dependencies
 * @param {string} packages - package directory
 * @return {Object} An object mapping the package name to its dependencies, or null if no dependencies
 */
async function getDependencies({ name, devDependencies }) {
	const dependencies = [];

	if (devDependencies && Object.keys(devDependencies).length) {
		dependencies.push(
			...(Object.keys(devDependencies).filter(
				(dep) =>
					dep.indexOf("@spectrum-css") === 0 &&
					dep !== "@spectrum-css/bundle-builder" &&
					dep !== "@spectrum-css/component-builder" &&
					dep !== "@spectrum-css/component-builder-simple"
			) ?? [])
		);
	}

	return { name, dependencies };
}

async function getDependenciesForSolver(package) {
	const { name, dependencies } = await getDependencies(package);
	if (dependencies.length === 0) return {};
	return { [name]: dependencies };
}

async function buildIndex(data) {
	const index = lunr(function () {
		this.ref("href");
		this.field("name", { boost: 10 });
		this.field("description");

		data.forEach(function (item) {
			this.add(item);
		}, this);
	});

	fsp.writeFile(
		path.join(__dirname, "../dist/index.json"),
		JSON.stringify(index, null, 2)
	);

	// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript
}

// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript
async function buildStore(data) {
	fsp.writeFile(
		path.join(__dirname, "../dist/store.json"),
		JSON.stringify(data, null, 2)
	);
}

async function buildComponentPage(packagePath = process.cwd()) {
	const nav = [];

	// Read in the package.json for this package
	const pkg = require(path.join(packagePath, "package.json"));

	// Fetch the vars metadata
	const metadata = require("@spectrum-css/vars") ?? {};

	const { dependencies } = (await getDependencies(pkg)) ?? {};

	const dependencyOrder = await Promise.all(
		dependencies.map(async (dep) => {
			const pkgPath = path.join(path.dirname(require.resolve(dep)), "..");
			const depPkg = require(path.join(pkgPath, "package.json")) ?? {};
			return await getDependenciesForSolver(depPkg);
		})
	)
		.then((deps) => {
			return depSolver
				.solve(deps.reduce((acc, dep) => ({ ...acc, ...dep }), {}))
				.filter((p) => p !== "@spectrum-css/tokens");
		})
		.catch((err) => {
			console.error(err);
		});

	// Nobody relies on it, so it gets clipped out of the solution
	dependencyOrder.push("@spectrum-css/expressvars");

	// Build tokens first
	// This is because not every package relies on tokens, but the builder needs tokens to bake vars
	dependencyOrder.unshift("@spectrum-css/tokens");

	// Iterate over each metadata file in this package folder
	for (const file of await fg(["metadata/*.yml"], {
		allowEmpty: true,
		cwd: packagePath,
	})) {
		const component = await fsp
			.readFile(file, "utf8")
			.then((c) => yaml.load(c))
			.catch((err) => {
				console.error(err);
			});

		const componentName = path.basename(file, ".yml");
		const href = `${componentName}.html`;

		if (!component.id) {
			// Use the example file name
			component.id = componentName;
		}

		nav.push({
			name: component.name,
			component: componentName,
			hide: component.hide,
			fastLoad: component.fastLoad,
			href,
			description: component.description,
		});

		docs.push({
			href,
			name: component.name,
			description: component.description,
		});

		store[href] = {
			href,
			name: component.name,
			component: componentName,
			description: component.description,
		};

		const componentDeps = dependencyOrder.map((dep) => dep.split("/").pop());
		componentDeps.push(dep);

		const sitePath = path.join(__dirname, "../site");
		const templatePath = `${sitePath}/templates/individualComponent.pug`;
		const compiled = pug.renderFile(templatePath, {
			dependencies,
			dnaVars: metadata,
			pkg,
			util,
			component,
		});

		if (compiled)
			return fsp.writeFile(path.join(__dirname, "../dist", href), compiled);

		return Promise.resolve();
	}

	templateData.nav = nav.sort((a, b) => {
		return a.name <= b.name ? -1 : 1;
	});
}

async function buildPages() {
	const promises = [];
	for (const file of await fg(["*.pug"], {
		allowEmpty: true,
		absolute: true,
		cwd: path.join(__dirname, "../site"),
	})) {
		const page = await fsp.readFile(file, "utf8");
		const href = path.basename(file, ".pug") + ".html";
		const compiled = pug.render(page, {
			util,
			pageURL: href,
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
		});

		if (compiled) {
			promises.push(
				fsp.writeFile(path.join(__dirname, "../dist", href), compiled)
			);
		}
	}

	return Promise.all(promises);
}

async function main() {
	// Iterates over each package in the component directory
	const allPackages = (
		await fsp.readdir(path.join(__dirname, "../components"), {
			withFileTypes: true,
		})
	)
		.filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
		.map((dirent) => path.join(packagesDir, dirent.name));

	await Promise.all(allPackages.map(buildComponentPage));
	await Promise.all([buildPages(), buildIndex(docs), buildStore(store)]);
	await Promise.all([
		// fsp.copyFile(
		// 	path.join(__dirname, `../site/dist/index.html`),
		// 	path.join(__dirname, `../dist/index.html`)
		// ),
		await fg(["resources/**", "dist/**"], {
			cwd: path.join(__dirname, "../site"),
		}).then((files) => {
			return Promise.all(
				files.map((file) =>
					fsp.copyFile(
						path.join(__dirname, "../site/dist", file),
						path.join(__dirname, `../dist/`, file)
					)
				)
			);
		}),
	]);
}

main();
