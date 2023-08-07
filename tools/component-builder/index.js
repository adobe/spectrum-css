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

const postcss = require("postcss");
const plugins = require("./processors").processors;

async function buildIndexVars() {
	let contents = "";
	for (const file of await fg(["index.css", "skin.css"], {
		cwd: process.cwd(),
		allowEmpty: true,
	})) {
		contents += await fsp.readFile(path.join(process.cwd(), file), {
			encoding: "utf8",
		});
	}

	const result = await postcss(plugins)
		.process(contents, {
			from: path.join(process.cwd(), "index.css"),
		})
		.then((result) => {
			return result.css;
		});

	if (!result) return;

	await fsp.writeFile(path.join(process.cwd(), "dist/index.css"), result);

	return path.join(process.cwd(), "dist/index.css");
}

async function getAllVars() {
	// Get vars in ALL components
	const allVars = new Map();
	for (const file of await fg(
		[`css/components/*.css`, `css/globals/*.css`, `custom.css`],
		{
			cwd: path.join(__dirname, "../../components/vars"),
		}
	)) {
		const content = await fsp.readFile(
			path.join(__dirname, "../../components/vars", file),
			{
				encoding: "utf8",
			}
		);
		if (!content) continue;

		const root = postcss.parse(content);
		if (!root) continue;

		root.walkRules((rule) => {
			rule.walkDecls((decl) => {
				if (!decl.prop.startsWith("--")) return;
				allVars.set(decl.prop, decl.value);
			});
		});
	}
	return allVars;
}

async function buildVars(indexFile, allVars) {
	if (!fs.existsSync(indexFile)) return;

	const fileContent = await fsp.readFile(indexFile, {
		encoding: "utf8",
	});
	const root = postcss.parse(fileContent);

	const classNames = new Set();
	const vars = new Set();
	root.walkRules((rule) => {
		rule.selectors.forEach((fullSelector) => {
			// Skip compound selectors, they may not start with the component itself
			if (fullSelector.match(/~|\+/)) return true;

			const selector = fullSelector.split(" ").shift();

			if (rule.type !== "rule") return;

			const matches = selector.match(/^\.spectrum-[\w]+/);
			if (!matches) return;
			classNames.add(matches[0]);
		});

		rule.walkDecls((decl) => {
			if (!/(^|[^\w-])var\([\W\w]+\)/.test(decl.value)) return;
			const matches = decl.value.match(/var\(([\W\w]+)\)/);
			if (!matches) return;
			const varName = matches[1];
			vars.add(varName);
		});
	});

	if (vars.size === 0) return;

	return fsp.writeFile(
		path.join(process.cwd(), "dist/vars.css"),
		`
${[...classNames].map((className) => `${className}`).join(",\n")} {
${[...vars]
	.filter((varName) => allVars.has(varName))
	.map((varName) => `  ${varName}: ${allVars.get(vars)};`)
	.join("\n")}
}
`
	);
}

async function main() {
	const outputFile = await buildIndexVars();
	const allVars = await getAllVars();

	if (!outputFile) return;

	return await Promise.all([
		buildVars(outputFile, allVars),
		// Copy index.css as index-vars.css to maintain backwards compat
		fsp.copyFile(outputFile, "dist/index-vars.css"),
	]);
}

main();
