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
 * Parse a component's CSS file(s) to extract "--mod" custom properties.
 *
 * @param {string} dir Directory for a single component.
 * @param {string | string[]} patterns Fast-glob pattern(s) to find CSS file(s) within `dir`.
 * @returns {Promise<string[]>} The found list of mod names. May contain duplicates.
 */
async function collectMods(dir, patterns = "dist/index.css") {
	let mods = [];

	// Loop over the built CSS file(s) that might contain mods.
	for (const filepath of await fg(patterns, {
		cwd: dir,
		absolute: true,
		ignore: [
			"**/node_modules/**",
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

		// Add matches to list of mods associated with this component directory.
		mods.push(...matches);
	}

	return mods;
}

/**
 * Output list of mods to a markdown file and a JSON file in the metadata directory.
 * Sorts list and exludes any duplicates.
 * 
 * @param {String} directory Directory to write the metadata folder with mods files.
 * @param {Array} mods Array of custom properties starting with "--mod".
 */
async function outputMods(directory, mods = []){
	if (!mods || mods.length === 0){
		console.log(` 〰️ No mods were found or exported for ${directory}`);
		return;
	}
	if (!directory){
		console.error(" ❌ outputMods did not receive a valid directory string and could not export anything.", directory);
		return;
	}

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

	console.log(` ✔️  Exported ${found.length} mod${found.length > 1 ? 's' : ''} for '${directory}'`);
}

/**
 * Parse CSS files to extract "--mod" custom properties, and export the list of mods
 * to both a markdown file and a JSON file for each component.
 */
(async () => {
	console.log(`⚙️  Searching CSS for '--mod' prefixed properties and exporting files...`);

	// Names of components to also search the source CSS for mods. 
	// Some components don't generate dist files.
	const searchSourceCSS = ['commons', 'overlay'];

	// Find each component directory.
	for (const componentDirectory of await fg(path.join(__dirname, "../components/*"), {
		absolute: true,
		onlyDirectories: true,
	})) {
		// Which CSS files to search; some exceptions to the default arg.
		const patterns = searchSourceCSS.some(componentName => {
			return componentDirectory.endsWith('/' + componentName);
		}) ? ['*.css', 'dist/index.css'] : undefined;

		// Collect its mods, and export them.
		const mods = await collectMods(componentDirectory, patterns);
		outputMods(componentDirectory, mods);
	}
})();
