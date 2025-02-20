/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { join } from "node:path";
import { URL } from "node:url";

const __dirname = new URL(".", import.meta.url).pathname;

import Eleventy from "@11ty/eleventy";
import open from "open";

import "colors";

/**
 * A utility to write logs to the console
 * @type {object} log
 * @property {(string) => void} log.error
 * @property {(string) => void} log.write
 * @property {(string[], { min: number, max: number }) => void} log.writeTable
 */
const log = {
	error: (err) => process.stderr.write(`${err}\n\n`),
	write: (msg) => process.stdout.write(msg),
	writeTable: (data = [], { min = 20, max = 30 } = {}) => {
		if (!data.length) return;

		// Print a table of data to the console
		process.stdout.write(`${data.map((row, idx) => `${row ?? " "}`.padEnd(idx === 0 ? max : min)).join("")}\n`);
	},
};

/**
 *
 * @param {string[]|undefined} [components=] - The list of components to compare
 * @param {string|undefined} [output] - The output directory to write the diffs to
 * @param {object} [options] - Additional options to pass to the comparison
 * @param {string} [options.target="latest"] - The specific tag to compare against
 * @returns
 */
export default async function main(
	components = [],
	output = join(__dirname, "..", "_site"),
	{
		ignore = [],
	} = {}
) {
	if (!components || components.length === 0) {
		// @todo: do a think when no components are specified
	}

	// Strip out utilities
	components = components.filter(c => !ignore.includes(c));

	if (components.length === 0) {
		log.error("No components to compare.");
		return Promise.resolve();
	}

	/** @type {import('@11ty/eleventy').Eleventy} */
	const eleventy = new Eleventy(join(__dirname, ".."), output, {
		configPath: join(__dirname, "..", "eleventy.config.js"),
		components,
	});

	eleventy.write().then(() => {
		// Open the summary in the browser for easy review
		const window = open(join(output, "content", "index.html"), { wait: true });
		window.focus();
	}).catch((err) => {
		log.error(err);
	});
}
