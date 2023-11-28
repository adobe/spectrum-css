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

const { existsSync, mkdirSync } = require("fs");
const { writeFile, readFile } = require("fs").promises;
const path = require("path");
const fg = require("fast-glob");

/**
 * Parse first-level CSS files to extract "--mod" custom properties.
 *
 * @param {string} dir Parent components directory. 
 * @returns Array of objects containing the component directory and the list of mod names.
 */
async function collectMods(dir = path.join(__dirname, "../components")) {
	let modsPerPath = [];

	// Loop over the directories in the components folder and find all the first-level CSS files.
	for (const filepath of await fg("*/*.css", {
		cwd: dir,
		absolute: true,
		/* Skip the vars and tokens files */
		ignore: [
			"**/node_modules/**",
			"**/dist/**",
			"**/metadata/**",
			"**/*vars/*.css",
			"**/tokens/*.css",
		],
		onlyFiles: true,
	})) {
		/**
		 * This regex will find all the custom properties that start with --mod-
		 * and are defined inside a var() function. The last capture group will
		 * ignore any mod properties that are followed by a colon, to exclude
		 * sub-component passthrough properties that should not be listed as mods.
		 */
		const regex = /(--mod-(?:\w|-)+)(?!:|\w|-)/g;

		// Read the file and find all the matches.
		const matches = await readFile(filepath, "utf-8")
			.then((content) => {
				// Assign the matches to an array through the spread operator
				// and map the results to the first capture group.
				return [...content.matchAll(regex)].map((match) => match[1]);
			})
			.catch((err) => {
				console.log(err);
			});

		// If there are no matches, skip this file and continue to the next one.
		if (!matches || matches.length === 0) continue;

		// Add matches to list of mods associated with this component (directory).
		// Append to existing array or add new object to array.
		const directory = path.dirname(filepath);
		existingPathIndex = modsPerPath.findIndex(obj => obj.directory == directory);
		if (existingPathIndex != -1){
			modsPerPath[existingPathIndex].matches.push(...matches);
		} else {
			modsPerPath.push({ directory, matches });
		}
	}

	return modsPerPath;
}

/**
 * Output list of mods to a markdown file and a JSON file in the metadata directory.
 * Sorts list and exludes any duplicates.
 * 
 * @param {String} directory Directory to write the metadata folder with mods files.
 * @param {Array} mods Array of custom properties starting with "--mod".
 */
async function outputMods(directory, mods = []){
	if (!mods || mods.length === 0 || !directory) return;

	// Remove duplicates using a Set and sort the results (default is alphabetical).
	const found = [...new Set(mods)].sort();

	/* -- Markdown Output -- */
	/* Output as a markdown table in the metadata folder for site rendering */
	let destPath = `${directory}/metadata`;
	// If the metadata folder doesn't exist, create it.
	if (!existsSync(destPath)) mkdirSync(destPath);

	let formattedResults = [
		"| Modifiable Custom Properties |\n| --- |",
		...found.map((result) => `| \`${result}\` |`),
	];

	// Write the results to a markdown file in the metadata folder.
	await writeFile(
		`${destPath}/mods.md`,
		formattedResults.join("\n"),
		(err) => {
			if (err) throw err;
		}
	);

	/* -- JSON Output -- */
	destPath = `${directory}/dist`;
	// If the dist folder doesn't exist yet, create it.
	if (!existsSync(destPath)) mkdirSync(destPath);

	formattedResults = JSON.stringify({ mods: found }, null, 2);

	// Write the JSON output to the dist folder.
	await writeFile(`${destPath}/mods.json`, formattedResults, (err) => {
		if (err) throw err;
	});
}

/**
 * Parse CSS files to extract "--mod" custom properties, and export the list of mods
 * to both a markdown file and a JSON file for each component.
 */
(async () => {
	const modsPerPath = await collectMods();
	// Output mods list for each component (directory).
	modsPerPath.forEach(m => {
		outputMods(m.directory, m.matches);
	});
})();
