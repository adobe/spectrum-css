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
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

require("colors");

/* -------------- UTILITIES -------------- */
const varDir = path.dirname(
	require.resolve("@spectrum-css/vars/package.json", {
		paths: [process.cwd(), path.join(__dirname, "../../../../")],
	})
);

const coreTokensFile = path.dirname(
	require.resolve("@spectrum-css/tokens/package.json", {
		paths: [process.cwd(), path.join(__dirname, "../../../../")],
	})
);

/**
 * Fetches the component's folder name from the file path or returns undefined if not found
 * @param {string} filePath
 * @returns {string|undefined}
 */
function getPackageFromPath(filePath) {
	const regex = /\/(components|@?spectrum-css)\/(.*?)\//;
	const matches = filePath.match(regex);
	return matches ? matches[2] : undefined;
}

function getVarsUsed(content) {
	const variableList = new Set();

	postcss.parse(content).walkDecls((decl) => {
		const matches = decl.value.match(/var\(.*?\)/g);
		if (!matches) return;

		matches.forEach((match) => {
			const varName = match.replace(/var\((--[\w-]+),?.*?\)/, "$1").trim();
			if (varName) variableList.add(varName);
		});
	});

	return [...variableList];
}

/**
 * Get variable values from the provided CSS content
 * @param {string} contents
 * @returns {{[key: string]: string}}
 */
function getVarValues(contents) {
	const variables = {};
	postcss
		.parse(contents)
		.walkDecls(/^--/, (decl) => (variables[decl.prop] = decl.value));
	return variables;
}

/**
 * Get all class names from the provided CSS content
 * @param {string} contents
 * @param {string} pkgName
 * @returns {string[]}
 */
function getClassNames(contents, pkgName) {
	const classNames = new Set();

	postcss.parse(contents).walkRules((rule) => {
		if (pkgName === "page") return false;

		rule.selectors.forEach((fullSelector) => {
			// Skip compound selectors, they may not start with the component itself
			if (fullSelector.match(/~|\+/)) return true;

			const selector = fullSelector.split(" ").shift();

			if (rule.type === "rule") {
				let matches = selector.match(/^\.spectrum-[\w]+/);
				if (matches && matches[0]) {
					classNames.add(matches[0]);
				}
			}
		});
	});

	return [...classNames];
}

/**
 * Get all tokens from the @spectrum-css/tokens & @spectrum-css/vars package
 * @returns {{[key: string]: string}}
 */
function getAllVars() {
	const variableList = {};

	const files = fg.sync(
		[
			`${varDir}/css/themes/*.css`,
			`${varDir}/css/scales/*.css`,
			coreTokensFile,
		],
		{
			allowEmpty: true,
		}
	);

	files.map((file) => {
		const content = fs.readFileSync(file, "utf8");
		const list = getVarValues(content);
		Object.entries(list).forEach(([key, value]) => {
			variableList[key] = value;
		});
	});

	return variableList;
}

/**
 * Get all component variables from the @spectrum-css/vars package
 * @returns {{[key: string]: string}}
 */
function getAllComponentVars() {
	const variableList = {};

	const files = fg.sync(
		[`css/components/*.css`, `css/globals/*.css`, `custom.css`],
		{
			cwd: varDir,
		}
	);

	files.forEach((file) => {
		const content = fs.readFileSync(path.join(varDir, file), "utf-8");
		const list = getVarValues(content);
		Object.entries(list).forEach(([key, value]) => {
			variableList[key] = value;
		});
	});

	return variableList;
}

function getVariableDeclarations(classNames, vars) {
	const varNames = Object.keys(vars);
	if (!varNames || varNames.length === 0) return "";

	return `
${classNames.map((className) => `${className}`).join(",\n")} {
  ${varNames.map((varName) => `${varName}: ${vars[varName]};`).join("\n  ")}
}\n`;
}

async function processCSS(from, content) {
	return postcssrc({
		from,
	})
		.then(({ plugins, options }) =>
			postcss(plugins).process(content, { from, ...options })
		)
		.catch((err) => {
			console.error(err);
		});
}

/* -------------- BUILDERS -------------- */

/**
 * Build the index.css & index-vars.css file (index-vars.css is a copy of index.css for backwards compatibility)
 */
async function buildCSS(packagePath = process.cwd()) {
	const files = await fg(
		[
			"index.css",
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		],
		{
			cwd: packagePath,
			allowEmpty: true,
		}
	);

	const contents = files
		.map((file) => fs.readFileSync(path.join(packagePath, file), "utf8"))
		.join();

	if (!contents || contents.length === 0) return;

	const result = await processCSS(path.join(packagePath, files[0]), contents);

	if (!result || !result.css || result.css.length === 0) return;

	if (!fs.existsSync(path.join(packagePath, "dist"))) {
		fs.mkdirSync(path.join(packagePath, "dist"));
	}

	const promises = [
		fsp
			.writeFile(path.join(packagePath, "dist/index.css"), result.css)
			.then(() => {
				console.log(`  ${"✔︎".green} ${"dist/index.css"}`);
			})
			.catch((err) => {
				console.error(err);
			}),
		fsp
			.writeFile(path.join(packagePath, "dist/index-vars.css"), result.css)
			.then(() => {
				console.log(
					`  ${"✔︎".gray} ${"dist/index-vars.css (deprecated)".gray}`
				);
			})
			.catch((err) => {
				console.error(err);
			}),
	];

	if (result.map)
		promises.push(
			fsp
				.writeFile(
					path.join(packagePath, "dist/index.css.map"),
					result.map.toString()
				)
				.then(() => {
					console.log(`  ${"✔︎".gray} ${"dist/index.css.map".gray}`);
				})
				.catch((err) => {
					console.error(err);
				})
		);

	return Promise.all(promises);
}

/**
 * Build the index-base.css file
 */
async function buildCSSWithoutThemes(packagePath = process.cwd()) {
	const files = await fg(
		[
			"index.css",
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		],
		{
			cwd: packagePath,
		}
	);

	const contents = files
		.map((file) => fs.readFileSync(path.join(packagePath, file), "utf8"))
		.join();

	if (!contents || contents.length === 0) return;

	const result = await processCSS(path.join(packagePath, files[0]), contents);

	if (!result || !result.css || result.css.length === 0) return;

	if (!fs.existsSync(path.join(packagePath, "dist")))
		fs.mkdirSync(path.join(packagePath, "dist"));

	const promises = [
		fsp
			.writeFile(path.join(packagePath, "dist/index-base.css"), result.css)
			.then(() => {
				console.log(`  ${"✔︎".green} ${"dist/index-base.css"}`);
			})
			.catch((err) => {
				console.error(err);
			}),
	];

	if (result.map)
		promises.push(
			fsp
				.writeFile(
					path.join(packagePath, "dist/index-base.css.map"),
					result.map.toString()
				)
				.then(() => {
					console.log(`  ${"✔︎".gray} ${"dist/index-base.css.map".gray}`);
				})
				.catch((err) => {
					console.error(err);
				})
		);

	return Promise.all(promises);
}

/**
 * Build the individual theme files
 */
async function buildCSSThemes(packagePath = process.cwd()) {
	if (!fs.existsSync(path.join(packagePath, "themes/"))) return;

	const files = await fg(["themes/*.css"], {
		cwd: packagePath,
	});

	if (!files || files.length === 0) return;

	return Promise.all(
		files.map(async (file) => {
			const content = await fsp.readFile(path.join(packagePath, file), "utf8");

			if (!content || content.length === 0) return;

			const result = await processCSS(path.join(packagePath, file), content);

			if (!result || !result.css || result.css.length === 0) return;

			if (!fs.existsSync(path.join(packagePath, "dist/themes")))
				fs.mkdirSync(path.join(packagePath, "dist/themes"), {
					recursive: true,
				});

			const promises = [
				fsp
					.writeFile(
						path.join(packagePath, "dist/themes", path.basename(file)),
						result.css
					)
					.then(() => {
						console.log(
							`  ${"✔︎".green} ${`dist/themes/${path.basename(file)}`}`
						);
					})
					.catch((err) => {
						console.error(err);
					}),
			];

			if (result.map)
				promises.push(
					fsp
						.writeFile(
							path.join(
								packagePath,
								"dist/themes",
								`${path.basename(file)}.map`
							),
							result.map.toString()
						)
						.then(() => {
							console.log(
								`  ${"✔︎".gray} ${
									`dist/themes/${path.basename(file)}.map`.gray
								}`
							);
						})
						.catch((err) => {
							console.error(err);
						})
				);

			return Promise.all(promises);
		})
	);
}

/**
 * Build the index-theme.css file, which is a combination of all themes
 */
async function buildCSSThemeIndex(packagePath = process.cwd()) {
	if (!fs.existsSync(path.join(packagePath, "themes/"))) return;

	const files = await fg(
		[
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		],
		{
			cwd: packagePath,
		}
	);

	if (!files || files.length === 0) return;

	const contents = files
		.map((file) => fs.readFileSync(path.join(packagePath, file), "utf8"))
		.join();

	if (!contents || contents.length === 0) return;

	const result = await processCSS(path.join(packagePath, files[0]), contents);

	if (!result || !result.css || result.css.length === 0) return;

	if (!fs.existsSync(path.join(packagePath, "dist")))
		fs.mkdirSync(path.join(packagePath, "dist"));

	const promises = [
		fsp
			.writeFile(path.join(packagePath, "dist/index-theme.css"), result.css)
			.then(() => {
				console.log(`  ${"✔︎".green} ${"dist/index-theme.css"}`);
			})
			.catch((err) => {
				console.error(err);
			})
			.then(() => {
				return buildExpressTheme();
			}),
	];

	if (result.map)
		promises.push(
			fsp
				.writeFile(
					path.join(packagePath, "dist/index-theme.css.map"),
					result.map.toString()
				)
				.then(() => {
					console.log(`  ${"✔︎".gray} ${"dist/index-theme.css.map".gray}`);
				})
				.catch((err) => {
					console.error(err);
				})
		);

	return Promise.all(promises);
}

/**
 * Special case for express: it needs Spectrum base vars and needs to override them
 */
async function buildExpressTheme(packagePath = process.cwd()) {
	if (!fs.existsSync(path.join(packagePath, "themes/express.css")))
		return Promise.resolve();

	const files = await fg(["dist/index-theme.css", "themes/express.css"], {
		cwd: packagePath,
	});

	if (!files || files.length === 0) return Promise.resolve();

	const contents = files
		.map((file) => fs.readFileSync(path.join(packagePath, file), "utf8"))
		.join();

	if (!contents || contents.length === 0) return Promise.resolve();

	const result = await processCSS(path.join(packagePath, files[0]), contents);

	if (!result.css || result.css.length === 0) return Promise.resolve();

	if (!fs.existsSync(path.join(packagePath, "dist/themes")))
		fs.mkdirSync(path.join(packagePath, "dist/themes"), { recursive: true });

	const promises = [
		fsp
			.writeFile(path.join(packagePath, "dist/themes/express.css"), result.css)
			.then(() => {
				console.log(`  ${"✔︎".green} ${"dist/themes/express.css"}`);
			})
			.catch((err) => {
				console.error(err);
			}),
	];

	if (result.map)
		promises.push(
			fsp
				.writeFile(
					path.join(packagePath, "dist/themes/express.css.map"),
					result.map.toString()
				)
				.then(() => {
					console.log(`  ${"✔︎".gray} ${"dist/themes/express.css.map".gray}`);
				})
				.catch((err) => {
					console.error(err);
				})
		);

	return Promise.all(promises);
}
/**
 * Build the vars.css file from the compiled index-vars.css file
 */
async function legacy_bakeVars(packagePath = process.cwd()) {
	if (!fs.existsSync(path.join(packagePath, "dist/index-vars.css"))) {
		return;
	}

	const content = await fsp.readFile(
		path.join(packagePath, "dist/index-vars.css"),
		"utf8"
	);

	if (!content || content.length === 0) return;

	const pkgName = getPackageFromPath(packagePath);

	const classNames = getClassNames(content, pkgName);

	// Find all custom properties used in the component
	const variableList = getVarsUsed(content);

	// Get vars in ALL components
	const vars = getAllComponentVars();

	// Get literally all of the possible vars (even overridden vars that are different between themes/scales)
	const allVars = {
		...getAllVars(),
		...vars,
	};

	// For each color stop and scale, filter the variables for those matching the component
	const usedVars = {};
	variableList.forEach((varName) => {
		if (
			!varName.includes("spectrum-global") &&
			(allVars[varName] ||
				varName.startsWith("--mod") ||
				varName.startsWith("--highcontrast"))
		)
			usedVars[varName] = vars[varName];
	});

	const contents = getVariableDeclarations(classNames, usedVars);

	if (!fs.existsSync(path.join(packagePath, "dist")))
		fs.mkdirSync(path.join(packagePath, "dist"), { recursive: true });

	return fsp
		.writeFile(path.join(packagePath, "dist/vars.css"), contents)
		.then(() => {
			console.log(`  ${"✔︎".green} ${"dist/vars.css"}`);
		})
		.catch((err) => {
			console.error(err);
		});
}

/**
 * Build the index.css & index-vars.css file (index-vars.css is a copy of index.css for backwards compatibility)
 */
async function legacy_buildIndexVars(packagePath = process.cwd()) {
	const files = await fg("index.css", { cwd: packagePath });

	const contents = files
		.map((file) => fs.readFileSync(path.join(packagePath, file), "utf8"))
		.join();

	if (!contents || contents.length === 0) return;

	const result = await processCSS(path.join(packagePath, files[0]), contents);

	if (!result || !result.css || result.css.length === 0) return;

	if (!fs.existsSync(path.join(packagePath, "dist"))) {
		fs.mkdirSync(path.join(packagePath, "dist"));
	}

	const promises = [
		fsp
			.writeFile(path.join(packagePath, "dist/index.css"), result.css)
			.then(() => {
				console.log(`  ${"✔︎".green} ${"dist/index.css"}`);
			})
			.catch((err) => {
				console.error(err);
			}),
		fsp
			.writeFile(path.join(packagePath, "dist/index-vars.css"), result.css)
			.then(() => {
				console.log(`  ${"✔︎".green} ${"dist/index-vars.css"}`);
			})
			.catch((err) => {
				console.error(err);
			}),
	];

	if (result.map)
		promises.push(
			fsp
				.writeFile(
					path.join(packagePath, "dist/index.css.map"),
					result.map.toString()
				)
				.then(() => {
					console.log(`  ${"✔︎".gray} ${"dist/index.css.map".gray}`);
				})
				.catch((err) => {
					console.error(err);
				})
		);

	return Promise.all(promises);
}

/* -------------- BUILD RECIPE -------------- */
const legacy_build = async (packagePath = process.cwd()) => {
	return legacy_buildIndexVars(packagePath).then(() =>
		legacy_bakeVars(packagePath)
	);
};

const build = async (packagePath = process.cwd()) => {
	// If there's no package.json, we're not in a component package
	if (!fs.existsSync(path.join(packagePath, "package.json")))
		return Promise.resolve();

	const pkg = require(path.join(packagePath, "package.json"));

	const isLegacy =
		pkg.peerDependencies && pkg.peerDependencies["@spectrum-css/vars"];

	console.log(
		`${pkg.name.magenta} v${pkg.version.gray}${
			isLegacy ? ` (${"legacy".yellow})` : ""
		}`
	);

	if (isLegacy) return legacy_build(packagePath);

	return Promise.all([
		buildCSS(packagePath),
		buildCSSWithoutThemes(packagePath),
		buildCSSThemes(packagePath),
		buildCSSThemeIndex(packagePath),
	]);
};

async function main(paths) {
	if (paths.length === 0) {
		paths = [process.cwd()];
	}

	return Promise.all(paths.map((p) => build(path.join(__dirname, "..", p))));
}

/* -------------- EXPORTS -------------- */
exports.default = build;

/* -------------- CLI RUN -------------- */
const { _ = [] } = yargs(hideBin(process.argv)).argv;

main(_).catch((e) => {
	console.error(e);
	process.exit(1);
});

/* eslint-enable no-console */
