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
const fse = require("fs-extra");
const path = require("path");

const fg = require("fast-glob");
const npmFetch = require("npm-registry-fetch");
const pugCompiler = require("pug");
const yaml = require("js-yaml");
const lunr = require("lunr");
const postcss = require("postcss");

const siteDir = __dirname;
const componentsDir = path.join(__dirname, "../../components");
const outputDir = path.join(__dirname, "../../dist");

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

/**
 * Fetch an object containing all the variables in the project;
 * both vars and tokens.
 * @returns {Promise<{[string]: string}>}
 */
async function getAllVars() {
	const variableList = {};
	for (const asset of await fg(
		[
			`vars/css/themes/*.css`,
			`vars/css/scales/*.css`,
			`vars/css/components/*.css`,
			`vars/css/globals/*.css`,
			`tokens/dist/index.css`,
		],
		{
			cwd: componentsDir,
		}
	)) {
		const css = await fsp.readFile(path.join(componentsDir, asset), "utf8");
		if (!css) continue;

		postcss.parse(css).walkRules((rule) => {
			rule.walkDecls((decl) => {
				variableList[decl.prop] = decl.value;
			});
		});
	}

	return variableList;
}

/**
 * Provided an array of files, return a string of their contents combined.
 * @param {string[]} files
 * @returns {Promise<string>}
 */
async function combineFileContents(files) {
	if (!Array.isArray(files)) {
		return Promise.reject(
			`[combineFileContents] requires an array of files be provided.`
		);
	}

	return (
		await Promise.all(
			files.map(async (file) => {
				return await fsp.readFile(path.join(rootDirectory, file), {
					encoding: "utf8",
				});
			})
		)
	).join("\n");
}

/**
 * Fetch an array of all the variables used in the components.
 * @returns {Promise<string[]>}
 */
async function getUsedVars(rootDirectory = componentsDir) {
	if (!rootDirectory) {
		console.error("Must define where we're looking for used vars.");
		return;
	}

	if (!fs.existsSync(rootDirectory)) {
		console.error(`Directory ${rootDirectory} does not exist.`);
		return;
	}

	const files = [];
	if (fs.statSync(rootDirectory).isFile()) {
		files.push(rootDirectory);
	} else {
		files.push(...(await fg(["dist/index-vars.css"], { cwd: rootDirectory })));
	}

	const variableObject = {};

	const allVars = await getAllVars();
	const contents = await combineFileContents(files);

	postcss.parse(contents.toString()).walkRules((rule) => {
		rule.walkDecls((decl) => {
			let matches = decl.value.match(/--[\w-]+/g);
			if (matches) {
				matches.forEach(function (match) {
					variableObject[match] = true;
				});
			}
		});
	});

	function resolveValue(value) {
		if (!value) return;

		let match = value.match(/var\((.+),?.*?\)/);
		if (!match) return value;
		return match[1];
	}

	// Resolve each variable to ensure everything it references is available
	for (let varName in variableObject) {
		let reffedVar = allVars[varName];
		if (reffedVar && reffedVar.startsWith("var")) {
			let value = resolveValue(reffedVar);

			let curVarName = value;
			while (allVars[curVarName]) {
				if (!variableObject[curVarName]) {
					variableObject[curVarName] = true;
				}
				curVarName = allVars[curVarName];
			}
		}
	}

	return Object.keys(variableObject);
}

/**
 * Copy the contents of a directory to another directory
 * @param {string} destination
 * @param {string} source
 * @returns
 */
async function copy(source, destination = outputDir) {
	if (!destination || !source) {
		throw new Error("You must specify a source and destination");
	}

	if (!Array.isArray(source)) {
		source = [source];
	}

	await fse.mkdirp(destination);

	return Promise.all(
		source.map((s) => {
			// If the source doesn't exist, don't copy anything
			if (!fs.existsSync(s)) return;

			const sourceFile = fs.statSync(s, { throwIfNoEntry: false });
			if (sourceFile.isDirectory()) {
				return fse.copy(s, destination, { overwrite: true, recursive: true });
			}

			if (sourceFile.isFile()) {
				return fse.copy(s, path.join(destination, path.basename(s)), {
					overwrite: true,
					recursive: true,
				});
			}

			return Promise.resolve();
		})
	);
}

/**
 * Process website templates and output them to the appropriate directory
 * @param {[{}]} nav
 * @returns
 */
async function processTemplates(nav) {
	const files = await fg(["*.pug"], { cwd: siteDir });
	const promises = files.map(async (file) => {
		const data = {
			nav,
			util: require(`${siteDir}/util`),
			pageURL: path.basename(file, ".pug") + ".html",
			dependencyOrder: minimumDeps,
		};

		const template = pugCompiler.compileFile(file, {
			pretty: true,
		});
		return fsp.writeFile(path.join(outputDir, data.pageURL), template(data));
	});

	return Promise.all(promises);
}

async function processMetadata() {
	const dnaVars = await fsp
		.readFile(path.join(componentsDir, "vars/dist/spectrum-metadata.json"))
		.then(JSON.parse)
		.catch(console.error);

	const nav = [];
	const docs = [];
	const store = {};

	const files = await fg(["*/metadata/*.yml"], {
		cwd: componentsDir,
	});

	// Loop through each component
	const fileData = await Promise.all(
		files.map(async (file) => {
			// The first section of the path is the folder's name for the component
			const folderName = file.split(path.sep)[0];

			// Read in the metadata content
			const componentData =
				(await fsp
					.readFile(path.join(componentsDir, file), "utf8")
					.then(yaml.load)) ?? {};

			const packagePath = path.join(componentsDir, folderName, `package.json`);
			if (!fs.existsSync(packagePath)) {
				console.error(`No package.json found for ${folderName}`);
				return;
			}

			const pkg = await fsp
				.readFile(packagePath)
				.then(JSON.parse)
				.catch((err) => {
					throw err;
				});

			if (!pkg) {
				console.error(`No package.json found for ${folderName}`);
				return;
			}

			const href = `${path.basename(file, ".yml")}.html`;

			const dependencies = [
				...new Set(
					minimumDeps.concat(
						pkg.devDependencies
							? Object.keys(pkg.devDependencies)
									.filter((dep) => {
										return (
											dep.startsWith("@spectrum-css") &&
											!dep.endsWith("builder") &&
											!dep.endsWith("builder-simple")
										);
									})
									.map((dep) => dep.split("/").pop())
							: []
					)
				),
			];

			const data = await npmFetch.json(pkg.name);
			const datetime = data?.time?.[pkg?.version];
			const releaseDate = datetime
				? new Date(datetime).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
				  }) ?? "Unreleased"
				: "Unreleased";

			docs.push({ ...componentData, href });

			store[href] = {
				...componentData,
				href,
				component: folderName,
			};

			nav.push({
				href,
				...componentData,
			});

			return {
				...componentData,
				component: folderName,
				name: componentData.name ?? folderName,
				href,
				util: require(`${siteDir}/util`),
				dnaVars,
				pageURL: href,
				dependencyOrder: dependencies,
				releaseDate,
				pkg,
			};
		})
	);

	// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript
	const index = lunr(function () {
		this.ref("href");
		this.field("name", { boost: 10 });
		this.field("description");

		docs.forEach(function (doc) {
			this.add(doc);
		}, this);
	});

	await fsp.writeFile(
		path.join(outputDir, "index.json"),
		JSON.stringify(index, null, 2)
	);
	await fsp.writeFile(
		path.join(outputDir, "store.json"),
		JSON.stringify(store, null, 2)
	);

	return fileData.map((data) => {
		// Add template data to each nav item for sidenav rendering
		data.nav = nav.sort((a, b) => (a.name <= b.name ? -1 : 1));
		return data;
	});
}

async function main() {
	const promises = [
		copy(path.join(siteDir, "resources")),
		copy(require.resolve("loadicons"), path.join(outputDir, "js/loadicons")),
		copy(
			require.resolve("@adobe/focus-ring-polyfill"),
			path.join(outputDir, "js/focus-ring-polyfill")
		),
		copy(require.resolve("lunr"), path.join(outputDir, "js/lunr")),
		copy(
			[
				`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
				`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
			],
			path.join(outputDir, "css/prism")
		),
		copy(
			require.resolve(
				"@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg"
			),
			path.join(outputDir, "img")
		),
		processMetadata().then(async (data) => {
			return [
				...data.map((component) => {
					const templatePath = path.join(
						siteDir,
						"templates",
						"siteComponent.pug"
					);
					const template = pugCompiler.compileFile(templatePath, {
						pretty: true,
					});
					return fsp.writeFile(
						path.join(outputDir, component.href),
						template({ ...component, component })
					);
				}),
				processTemplates(data[0].nav),
			];
		}),
	];

	// Read in all variables from components
	const variableList = await getUsedVars();

	// For each stop and scale, filter by used variables only
	promises.push(
		...(
			(await fg(["*.css"], {
				cwd: path.join(componentsDir, "vars"),
			})) ?? []
		).map(async (file) => {
			const css = await fsp
				.readFile(path.join(componentsDir, "vars", file))
				.then((content) => content.toString());

			const root = postcss.parse(css);
			root.walkRules((rule) => {
				rule.walkDecls((decl) => {
					if (!variableList.includes(decl.prop)) decl.remove();
				});
			});

			const updatedContent = root.toString();

			if (!updatedContent || updatedContent.length === 0) {
				return;
			}

			const writePath = `${path.join(outputDir, "vars")}/${path.basename(
				file,
				".css"
			)}-unique.css`;

			await fse.mkdirp(path.join(outputDir, "vars"), { recursive: true });

			return fsp.writeFile(writePath, updatedContent);
		}),
		...["vars", "expressvars"]
			.map(async (folder) => {
				const css =
					(await fg(["spectrum-*.css"], {
						cwd: path.join(componentsDir, `${folder}/dist`),
						absolute: true,
					})) ?? [];

				return css.map(async (file) =>
					copy(file, path.join(outputDir, folder))
				);
			})
			.flat()
	);

	const allVars =
		(await fg(["**/*.css"], {
			cwd: path.join(componentsDir, "vars/dist"),
		})) ?? [];

	// Copy all vars to the tokens folder
	promises.push(
		...allVars.map(async (file) =>
			copy(
				path.join(componentsDir, "vars/dist", file),
				path.join(outputDir, "tokens")
			)
		)
	);

	const componentAssets =
		(await fg(["*/package.json", "*/dist/**", "!*/dist/docs/**"], {
			cwd: componentsDir,
		})) ?? [];
	promises.push(
		...componentAssets.map(async (file) => {
			// We don't want to include the dist folder in the output path
			const updatedPath = file.replace("/dist", "");
			return copy(
				path.join(componentsDir, file),
				path.join(outputDir, "components/", path.dirname(updatedPath))
			);
		})
	);

	return Promise.all(promises);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
