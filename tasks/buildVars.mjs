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

import { promises as fsp, existsSync } from "fs";
import { join, basename, relative } from "path";

import fg from "fast-glob";
import postcss from "postcss";

/**
 *
 * @param {string[]} files
 * @returns {Promise<Map<string, { [key: string]: string }>>}
 */
async function getAllVars(files) {
	return fg(files, {
		cwd: process.cwd(),
		onlyFiles: true,
		allowEmpty: true,
	})
		.then(async (files) => {
			if (files.length === 0) return;

			const variables = new Map();

			for (const filepath of files) {
				await fsp
					.readFile(filepath, "utf8")
					.then((css) => {
						if (!css) return;

						postcss.parse(css).walkRules((rule) => {
							rule.walkDecls((decl) => {
								if (variables.has(decl.prop)) {
									const prevValues = Object.values(variables.get(decl.prop));

									if (prevValues.includes(decl.value)) {
										variables.set(decl.prop, {
											...variables.get(decl.prop),
											[filepath]: decl.value,
										});
									}

									return;
								}

								variables.set(decl.prop, { [filepath]: decl.value });
							});
						});
					})
					.catch((err) => console.error(err));
			}

			return variables;
		})
		.catch((err) => console.error(err));
}

async function copyGlobals(
	files = ["**/*.css", "!**/node_modules/**", "!dist/**"],
	{
		cwd = process.cwd(),
		dest = join(process.cwd(), "dist/"),
		transform = (content, filepath = "") =>
			content.replace(/:root/, ".spectrum"),
	}
) {
	const promises = [];
	for (const filepath of await fg(files, {
		cwd,
		onlyFiles: true,
		allowEmpty: true,
	})) {
		let content = "";

		await fsp
			.readFile(join(cwd, filepath), "utf8")
			.then((c) => {
				if (typeof c === "undefined") return;
				content += `\n  /* Sourced: ${filepath} */\n`;
				content += c;
			})
			.catch((err) => console.error(err));

		if (!content) continue;

		if (typeof transform === "function") {
			content = transform(content, filepath);
		}

		promises.push(fsp.writeFile(join(dest, filepath), content));
	}

	return Promise.all(promises);
}

async function processAliases(path, aliases = []) {
	if (!existsSync(path)) return;

	let content = "";
	await fsp
		.readFile(path, "utf8")
		.then((c) => {
			if (typeof c === "undefined") return;
			content += `\n/* Sourced: ${relative(process.cwd(), path)} */\n`;
			content += c.replace(
				/:root/,
				aliases.map((alias) => `.spectrum--${alias}`).join(",\n")
			);
		})
		.catch((err) => console.error(err));

	return fsp.writeFile(path.replace("/css/", "/dist/"), content);
}

async function concatGlobalsFinal() {
	let content = "";
	for (const filepath of await fg(["*.css", "!index.css", "!*.Aliases.css"], {
		cwd: join(process.cwd(), "css/globals"),
		onlyFiles: true,
		allowEmpty: true,
	})) {
		await fsp
			.readFile(join(process.cwd(), "css/globals", filepath), "utf8")
			.then((c) => {
				if (typeof c === "undefined") return;

				content += `  /* Sourced: css/globals/${filepath} */`;
				content += c.replace(/:root {/, "").replace(/}/, "");
			})
			.catch((err) => console.error(err));
	}

	if (content && content !== "") {
		content = `.spectrum {\n${content}}\n`;
	}

	for (const filepath of await fg(
		[
			"dist/globals/spectrum-dimensionAliases.css",
			"dist/globals/spectrum-colorAliases.css",
			"custom.css",
		],
		{
			cwd: process.cwd(),
			onlyFiles: true,
			allowEmpty: true,
		}
	)) {
		await fsp
			.readFile(join(process.cwd(), filepath), "utf8")
			.then((c) => {
				if (typeof c === "undefined") return;

				if (filepath.endsWith("custom.css")) {
					content += `\n  /* Sourced: ${filepath} */\n`;
				}

				content += `${c}\n`;
			})
			.catch((err) => console.error(err));
	}

	if (!content || content === "") return Promise.resolve();

	return fsp
		.writeFile(join(process.cwd(), "dist/spectrum-global.css"), content)
		.catch((err) => console.error(err));
}

async function captureMetadata() {
	// Get literally all of the possible vars (even overridden vars that are different between themes/scales)
	const allVars = await getAllVars([
		`css/components/*.css`,
		`css/globals/*.css`,
		`custom.css`,
		`css/themes/*.css`,
		`css/scales/*.css`,
	]);

	if (!allVars) return Promise.resolve();

	return fsp
		.writeFile(
			join(process.cwd(), "dist/variable-metadata.json"),
			JSON.stringify(Object.fromEntries(allVars), null, 2)
		)
		.catch((err) => console.error(err));
}

async function main() {
	const isPackage = (
		await fg([`${process.cwd()}/package.json`], {
			onlyFiles: true,
			allowEmpty: true,
		})
	)?.length;

	if (!isPackage) {
		return Promise.reject(
			new Error(
				"This script must be run from the root of a package. Try updating the cwd."
			)
		);
	}

	// First, make sure the dist folders exists
	await Promise.all(
		["globals", "themes", "scales", "components"].map(async (dir) => {
			return fsp
				.mkdir(join(process.cwd(), `dist/${dir}`), { recursive: true })
				.catch((err) => console.error(err));
		})
	);

	// Copy and process the assets
	await Promise.all([
		copyGlobals(
			["globals/spectrum-*Globals.css", "globals/spectrum-*Semantics.css"],
			{
				cwd: join(process.cwd(), "css/"),
			}
		),
		copyGlobals(["themes/*.css", "scales/*.css"], {
			cwd: join(process.cwd(), "css/"),
			transform: (content, filepath = "") => {
				if (!content || content === "") return "";

				return content.replace(
					/:root/,
					`.${basename(filepath, ".css").replace(/-/, "--")}`
				);
			},
		}),
		copyGlobals(["!components/index.css", "components/*.css"], {
			cwd: join(process.cwd(), "css"),
		}),
		processAliases(
			join(process.cwd(), "css/globals/spectrum-colorAliases.css"),
			["darkest", "dark", "light", "lightest"]
		),
		processAliases(
			join(process.cwd(), "css/globals/spectrum-dimensionAliases.css"),
			["medium", "large"]
		),
		captureMetadata(),
	])
		.then(
			async () => await concatGlobalsFinal().catch((err) => console.error(err))
		)
		.catch((err) => console.error(err));
}

main()
	.then(() => {
		console.log("🟢 Package built successfully.");
	})
	.catch((err) => console.error(err));
