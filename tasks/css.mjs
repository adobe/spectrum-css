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

import fs, { promises as fsp } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

import fg from "fast-glob";
import postcss from "postcss";
import postcssrc from "postcss-load-config";
import parser from "postcss-selector-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const pkg = await fsp
	.readFile(join(process.cwd(), "package.json"))
	.then(JSON.parse)
	.catch(() => {});

const isLegacy = !pkg?.peerDependencies?.["@spectrum-css/tokens"];

async function parseCSS(contents, pkgName) {
	// Pulls out all the variables used in the component and writes them to dist/vars.css & dist/vars.json
	const classNames = new Set();
	const varDefinitions = new Map();
	const usedVars = new Set();

	postcss.parse(contents).walkRules((rule) => {
		rule.walkDecls((decl) => {
			const value = decl.value.replace(/(\t|\n)/g, "").trim();

			if (decl.prop.startsWith("--")) {
				if (varDefinitions.has(decl.prop)) {
					varDefinitions.set(decl.prop, [
						...varDefinitions.get(decl.prop),
						value,
					]);
				} else {
					varDefinitions.set(decl.prop, [value]);
				}
			}

			const matches = value.match(/var\(.*?\)/g);
			if (!matches) return;
			matches.forEach((match) => {
				const varName = match
					.replace(/var\(\s*(--[\w\-]+)\s*,?.*?\)/, "$1")
					.trim();
				usedVars.add(varName);
			});
		});

		if (pkgName.endsWith("page")) return;

		// @todo clean up selector parsing using postcss-selector-parser
		parser((selectors) => {
			selectors.walk((s) => {
				if (s.type !== "class") return;
				if (/^spectrum-[A-Z][a-zA-Z]+$/.test(s.value)) {
					classNames.add(`.${s.value}`);
				}
			});
		}).processSync(rule.selector);
	});

	return {
		classNames,
		varDefinitions,
		usedVars,
	};
}

// Read in all variables used
// Read in all vars from recent DNA
// Include definitions if they refer to a variable, static if not
async function processCSS(inputPaths, ctx) {
	// Combine content in index.css & skin.css (if it exists); output as index-vars.css
	let content = "";
	for (const filepath of await fg(inputPaths, {
		cwd: process.cwd(),
		allowEmpty: true, // Allow missing skin.css
		absolute: true,
	})) {
		content += await fsp
			.readFile(filepath, "utf8")
			.then((contents) => `${contents}\n\n`)
			.catch((err) => {
				console.warn(err);
				return "";
			});
	}

	// If there's no content, don't bother
	if (!content || content === "") return;

	// Process the CSS; this will use the closest postcss config to the file
	const { plugins, options } = await postcssrc(ctx);

	return postcss(plugins)
		.process(content, {
			...options,
			from: join(process.cwd(), inputPaths[0]),
		})
		.then((result) => result.css)
		.catch((err) => console.error(err));
}

/* Check if the variable is defined in the global vars */
// @todo these should probably be stylelint warnings
async function checkForErrors(key) {
	for (const file of [
		resolve(__dirname, "../components/vars/dist/variable-metadata.json"),
		resolve(__dirname, "../components/expressvars/dist/variable-metadata.json"),
	]) {
		if (!fs.existsSync(file)) continue;
		const data = await fsp
			.readFile(file, "utf8")
			.then(JSON.parse)
			.catch(() => ({}));
		if (data[key]) return;
	}

	const tokens = resolve(__dirname, "../components/tokens/dist/index.css");
	if (!fs.existsSync(tokens)) return;

	return fsp
		.readFile(tokens, "utf8")
		.then(async (c) => {
			const { varDefinitions } = await parseCSS(c, "@spectrum-css/tokens");
			if (!varDefinitions || !varDefinitions.has(key)) {
				console.log(`⛔️ ${pkg.name} uses undefined variable ${key}`);
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

async function writeAssets(
	inputPaths,
	outputPath,
	ctx = {},
	callback = undefined
) {
	// Combine content in index.css & skin.css (if it exists); output as index-vars.css
	const contents = await processCSS(inputPaths, {
		to: join(process.cwd(), outputPath),
		from: join(process.cwd(), inputPaths[0]),
		...ctx,
	});

	if (!fs.existsSync(dirname(join(process.cwd(), outputPath)))) {
		fs.mkdirSync(dirname(join(process.cwd(), outputPath)));
	}

	// Write the processed CSS to dist/index-vars.css
	return fsp
		.writeFile(join(process.cwd(), outputPath), contents, {
			encoding: "utf8",
		})
		.then(() => {
			if (callback && typeof callback === "function") callback();
		})
		.catch((err) => console.error(err));
}

async function main() {
	// If there's no package.json data, nothing to do
	if (!pkg || !pkg.name) return;

	// Combine content in index.css & skin.css (if it exists); output as index-vars.css
	await writeAssets(
		[
			"index.css",
			"skin.css",
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		],
		"dist/index.css",
		{
			isLegacy,
			map: "inline",
		},
		() => {
			if (!fs.existsSync(join(process.cwd(), "dist/index.css"))) return;

			// Just copy index-vars as index to maintain backwards compat
			fs.copyFileSync(
				join(process.cwd(), "dist/index.css"),
				join(process.cwd(), "dist/index-vars.css")
			);
		}
	);

	// index-base.css
	if (!isLegacy) {
		await writeAssets(
			[
				"index.css",
				"skin.css",
				"themes/spectrum.css", // spectrum comes first
				"themes/*.css",
			],
			"dist/index-base.css",
			{
				isLegacy,
				map: "inline",
				splitinatorOptions: { noFlatVariables: true },
			}
		);

		if (fs.existsSync(join(process.cwd(), "themes/spectrum.css"))) {
			await writeAssets(["themes/spectrum.css"], "dist/themes/spectrum.css", {
				isLegacy,
				map: "inline",
				splitinatorOptions: { noSelectors: true },
			});
		}

		if (fs.existsSync(join(process.cwd(), "themes/express.css"))) {
			await writeAssets(["themes/express.css"], "dist/themes/express.css", {
				isLegacy,
				map: "inline",
				splitinatorOptions: { noSelectors: true },
			});
		}

		await writeAssets(
			[
				"themes/spectrum.css", // spectrum comes first
				"themes/*.css",
			],
			"dist/index-theme.css",
			{
				isLegacy,
				map: "inline",
				splitinatorOptions: { noSelectors: true },
			}
		);
	}

	/* ------------------------- */
	const { classNames, varDefinitions, usedVars } = await parseCSS(
		fs.readFileSync(join(process.cwd(), "index.css"), "utf8"),
		pkg.name
	);

	// For each color stop and scale, filter the variables for those matching the component
	const mods = [...usedVars].filter((key) => key.startsWith("--mod"));
	const a11y = [...usedVars].filter((key) => key.startsWith("--highcontrast"));
	const globalVars = [...usedVars].filter((key) => {
		if (mods.includes(key) || a11y.includes(key)) return false;

		if (
			isLegacy
				? key.includes("spectrum-global")
				: !key.includes(pkg.name.split("/").pop())
		) {
			console.log(`🔶 ${pkg.name} directly uses global variable ${key}`);
			return true;
		}

		return false;
	});

	// Find all custom properties used in the component
	const componentVars = [...usedVars].filter(
		(key) =>
			!(globalVars.includes(key) || mods.includes(key) || a11y.includes(key))
	);

	// If there are no variables used, no need to write out the files
	if (!componentVars || componentVars.length === 0) return;

	const varData = {};
	varDefinitions.forEach((value, key) => {
		if (value && value[0]) varData[key] = value[0];
	});

	await Promise.all(
		componentVars.map((key) => {
			// If the definition doesn't exist inside the component's own stylesheet, check for it in the global stylesheet
			if (varDefinitions.has(key)) {
				return Promise.resolve();
			}

			return checkForErrors(key);
		})
	);

	return Promise.all([
		// Write these variables out to their own file
		fsp.writeFile(
			join(process.cwd(), "dist/vars.css"),
			`
${[...classNames].join(",\n")} {
${Object.entries(varData)
	.map(([varName, value]) => `  ${varName}: ${value};`)
	.join("\n")}
}
`
		),
	]).catch((err) => console.error(err));
}

await main();
