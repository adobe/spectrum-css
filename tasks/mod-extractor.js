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

async function main(dir = path.join(__dirname, "../components")) {
	/* Loop over the directories in the components folder and find all the first-level css files */
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
		/* This regex will find all the custom properties that start with --mod- */
		/* and are defined inside a var() function */
		const regex = /(--mod-(?:\w|-)+)/g;

		/* Read the file and find all the matches */
		const matches = await fsp
			.readFile(filepath, "utf-8")
			.then((content) => {
				// assign the matches to an array through the spread operator and map the results to the first capture group
				return [...content.matchAll(regex)].map((match) => match[1]);
			})
			.catch((err) => {
				console.log(err);
			});

		// If there are no matches, skip this file and continue to the next one
		if (!matches || matches.length === 0) continue;

		/* Remove duplicates using a Set and sort the results (default is alphabetical) */
		const found = [...new Set(matches)].sort();
		/* -- Markdown Output -- */
		/* Output as a markdown table in the metadata folder for site rendering */
		let destPath = `${path.dirname(filepath)}/metadata`;
		// If the metadata folder doesn't exist, create it
		if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);

		let formattedResults = [
			"| Modifiable Custom Properties |\n| --- |",
			...found.map((result) => `| \`${result}\` |`),
		];

		// Write the results to a markdown file in the metadata folder
		await fsp.writeFile(
			`${destPath}/mods.md`,
			formattedResults.join("\n"),
			(err) => {
				if (err) throw err;
			}
		);

		/* -- JSON Output -- */
		destPath = `${path.dirname(filepath)}/dist`;
		// If the dist folder doesn't exist yet, create it
		if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);

		formattedResults = JSON.stringify({ mods: found }, null, 2);

		// Write the JSON output to the dist folder
		await fsp.writeFile(`${destPath}/mods.json`, formattedResults, (err) => {
			if (err) throw err;
		});
	}
}

main();
