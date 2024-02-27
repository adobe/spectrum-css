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

const { existsSync, mkdirSync } = require("fs");
const { writeFile, readFile } = require("fs").promises;

const path = require("path");

const fg = require("fast-glob");
const prettier = require("prettier");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

require("colors");

/**
 * @description This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} filepath
 * @param {object} options
 * @param {Set<string>} options.found
 * @param {string} options.namespace
 */
async function extractProperties(filepath, found = new Set()) {
	if (!filepath || !existsSync(filepath)) return Promise.resolve(found);

	/* Read the file and find all the matches */
	const content = await readFile(filepath, "utf-8").catch((err) => {
		Promise.reject(err);
	});

	if (!content) return Promise.resolve(found);

	[/(--mod-(?:\w|-)+)(?!:|\w|-)/g].forEach((regex) => {
		// assign the matches to an array through the spread operator and map the results to the first capture group
		const matches = [...content.matchAll(regex)].map((match) => match[1]).filter(Boolean) ?? [];
		matches.forEach((match) => found.add(match));
	});

	return Promise.resolve(found);
}

async function markdownOutput(dir, found) {
	/* -- Markdown Output -- */
	/* Output as a markdown table in the metadata folder for site rendering */
	const destPath = `${dir}/metadata`;

	// If the metadata folder doesn't exist, create it
	if (!existsSync(destPath)) mkdirSync(destPath);

	const formattedResults = [
		"| Modifiable custom properties |\n| --- |",
		...[...found].sort().map((result) => `| \`${result}\` |`),
	];

	const finalResult = prettier.format(formattedResults.join("\n"), {
		parser: "markdown",
	});

	// Write the results to a markdown file in the metadata folder
	return writeFile(`${destPath}/mods.md`, finalResult, { encoding: "utf-8" }).then(() => {
		console.log(`${`✓`.green} ${"metadata/mods.md".yellow} written`);
	}).catch((err) => {
		if (!err) return;
		console.log(`${`✗`.red} ${"metadata/mods.md".yellow} not written`);
		return Promise.reject(err);
	});
}

async function jsonOutput(dir, found) {
	/* -- JSON Output -- */
	const destPath = `${dir}/dist`;
	// If the dist folder doesn't exist yet, create it
	if (!existsSync(destPath)) mkdirSync(destPath);

	const formattedResults = JSON.stringify({ mods: [...found].sort() }, null, 2);
	const finalResult = prettier.format(formattedResults, {
		parser: "json",
	});

	// Write the JSON output to the dist folder
	return writeFile(`${destPath}/mods.json`, finalResult, { encoding: "utf-8" }).then(() => {
		console.log(`${`✓`.green} ${"dist/mods.json".yellow} written`);
	}).catch((err) => {
		if (!err) return;
		console.log(`${`✗`.red} ${"dist/mods.json".yellow} not written`);
		return Promise.reject(err);
	});
}

async function build(dir) {
	/* Remove duplicates using a Set and sort the results (default is alphabetical) */
	let found = new Set();

	/* Loop over the directories in the components folder and find all the first-level css files */
	for (const filepath of await fg(["*.css", "themes/*.css"], {
		cwd: path.join(dir, "dist"),
		absolute: true,
		onlyFiles: true,
	})) {
		found = await extractProperties(filepath, found);
	}

	console.log(" ");
	console.log(`[mod-extractor] 🔍 ${`@spectrum-css/${dir.split(path.sep).pop()}`.cyan}`);
	console.log(`Found ${`${found.size}`.underline} modifiable custom propert${found.size === 1 ? "y" : "ies"}`);

	if (found.size === 0) return Promise.resolve();

	return Promise.all([
		markdownOutput(dir, found),
		jsonOutput(dir, found)
	]);
}

async function main(inputs = []) {
	// Default to all component directories
	if (inputs.length === 0) {
		inputs = await fg("components/*", {
			onlyDirectories: true,
			absolute: true,
		}) ?? [];

		if (inputs.length === 0) {
			console.log(
				`${`⚠️`.yellow}  No component directories found in ${"./components/*".yellow}.`
			);
			return;
		}
	}

	/* Loop over the directories passed in as arguments */
	return Promise.all(inputs.map((dir) => build(dir)));
}

const { _ = [] } = yargs(hideBin(process.argv)).argv;

main(_).catch((err) => {
	console.error(err);
	process.exit(1);
});

/* eslint-enable no-console */
