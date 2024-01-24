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

const isAbsolutePath = (pathToCheck) => path.isAbsolute(pathToCheck);

/**
 *
 * @param {string[]} inputFiles
 * @param {string} output
 * @param {*} config
 * @returns
 */
async function builder(inputFiles, output, config = {}) {
	if (!inputFiles) return;

	let { cwd = process.cwd() } = config;

	const files = await fg(inputFiles, {
		cwd,
		allowEmpty: true,
		absolute: true,
	});

	if (!files || files.length === 0) return;

	const contents = files.reduce((content, file) => {
		const css = fs.readFileSync(file, "utf-8");
		if (!css || css.length === 0) return content;
		return `${content}\n/* Source: ${file} */\n\n${css}`;
	}, "");

	if (!contents || contents.length === 0) return;

	return postcssrc({ ...config, from: files[0] })
		.then(({ plugins, options }) =>
			postcss(plugins).process(contents, options)
				.then((result) => {
					if (!result.css || result.css.length === 0) return;

					// If the provided output path is not absolute, make it relative to the cwd
					output = isAbsolutePath(output) ? output : path.join(cwd, output);

					// Ensure the output directory exists and remove the file if it already exists
					if (!fs.existsSync(path.dirname(output))) {
						fs.mkdirSync(path.dirname(output), { recursive: true });
					} else if (fs.existsSync(output)) {
						fs.unlinkSync(output);

						// Remove the map file if it exists
						if (fs.existsSync(`${output}.map`)) {
							fs.unlinkSync(`${output}.map`);
						}
					}

					return Promise.all([
						fsp.writeFile(output, result.css, { encoding: "utf-8" }),
						result.map ? fsp.writeFile(`${output}.map`, result.map, { encoding: "utf-8" }) : Promise.resolve(),
					]).then(() => {
						const consoleOutput = [];
						if (fs.existsSync(output)) {
							consoleOutput.push(`${`✓`.green} ${path.relative(cwd, output).yellow} built`);
						}
						if (fs.existsSync(`${output}.map`)) {
							consoleOutput.push(`${`✓`.green} ${`${path.relative(cwd, output)}.map`.yellow} built`);
						}
						return consoleOutput;
					});
				})
		);
}

async function buildIndex(folder) {
	return builder([
		"index.css",
		"themes/spectrum.css", // spectrum comes first
		"themes/*.css",
	], "dist/index.css", { cwd: folder });
}

async function buildCSSWithoutThemes(folder) {
	return builder([
			"index.css",
			"themes/spectrum.css", // spectrum comes first
			"themes/express.css",
	], "dist/index-base.css", { cwd: folder, splitinatorOptions: { noFlatVariables: true } });
}

async function buildCSSThemeIndex(folder) {
	return builder([
			"themes/spectrum.css", // spectrum comes first
			"themes/express.css",
	], "dist/index-theme.css", { cwd: folder, splitinatorOptions: { noSelectors: true } });
}

async function buildCSSVarsOnly(folder) {
	return builder(["index.css"], "dist/vars.css", {
		cwd: folder,
		varsOnly: true,
	});
}

async function buildCSSThemes(folder) {
	if (!fs.existsSync(path.join(folder, "themes"))) return;

	return Promise.all(
		fg.sync([
			"themes/*.css"
		], {
			ignore: ["themes/express.css"],
			cwd: folder,
			allowEmpty: true,
		}).map((file) =>
			builder(file, `dist/${file}`, { cwd: folder, splitinatorOptions: { noSelectors: true } })
		)
	);
}

/**
  Special case for express: it needs Spectrum base vars and needs to override them
*/
async function buildExpressTheme(folder) {
	return builder([
		"dist/index-theme.css",
	], "dist/themes/express.css", {
		cwd: folder,
		additionalPlugins: [
			require("postcss-combininator"),
		],
	});
}

function copyIndex(sourceFile, destFile, { cwd = process.cwd() } = {}) {
	if (!fs.existsSync(path.join(cwd, sourceFile))) return;

	// Copy index.vars as index.css to maintain backwards compat
	fs.copyFileSync(path.join(cwd, sourceFile), path.join(cwd, destFile));

	return `${`✓`.green} ${destFile.yellow} copied ${`from ${sourceFile}`.grey}`;
}

async function build(folder = undefined) {
	const output = [];
	if (!folder) folder = process.cwd();

	// Skip if no package.json
	if (!fs.existsSync(path.join(folder, "package.json"))) return;

	const { name, peerDependencies } = require(isAbsolutePath(folder) ? path.join(folder, "package.json") : path.join(__dirname, "..", folder, "package.json"));

	const isLegacy = [...Object.keys(peerDependencies ?? {})].includes("@spectrum-css/vars");

	output.push(`[builder] 🔨 ${name.cyan}${isLegacy ? " [legacy]".gray : ""}`);

	const promises = [
		buildIndex(folder).then(() =>
			copyIndex("dist/index.css", "dist/index-vars.css", { cwd: folder })
		),
	];

	if (!isLegacy) {
		promises.push(
			buildCSSWithoutThemes(folder),
			buildCSSThemes(folder),
			buildCSSThemeIndex(folder).then(() =>
				buildExpressTheme(folder)
			),
		)
	} else if (!["site", "page"].includes(name.split("/")?.pop())) {
		promises.push(
			buildCSSVarsOnly(folder)
		);
	}

	return Promise.all(promises).then((result) => {
		[
			...output,
			...result.flat(),
		].filter(Boolean).forEach((line) => process.stdout.write(`${line}\n`));
	});
}

async function main(inputs) {
	// Default to all component directories
	if (inputs.length === 0) {
		inputs = await fg("components/*", {
			cwd: path.join(__dirname, ".."),
			onlyDirectories: true,
			absolute: true,
		});
	}

	if (!inputs || inputs.length === 0) {
		process.stdout.write(
			`${`⚠️`.yellow}  No component directories found in ${"./components/*".yellow}.`
		);
		return;
	}

	/* Loop over the directories passed in as arguments */
	return Promise.all(inputs.map((dir) => build(dir)));
}

const { _ = [] } = yargs(hideBin(process.argv)).argv;

main(_).catch((err) => {
	console.log({ err });
	process.stderr.write(err);
	process.exit(1);
});

/* eslint-enable no-console */
