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

const { existsSync } = require("fs");
const { join, sep } = require("path");

const core = require("@actions/core");

const {
	fetchFilesAndSizes,
	bytesToSize,
	addComment,
} = require("./utilities.js");

async function run() {
	try {
		// --------------- Fetch user input values  ---------------
		const token = core.getInput("token");
		const headPath = core.getInput("head-path");
		const basePath = core.getInput("base-path");
		const fileGlobPattern = core.getMultilineInput("file-glob-pattern", {
			trimWhitespace: true,
		});
		const shouldAddComment = core.getBooleanInput("comment") ?? true;
		const commentHeader = core.getInput("comment-header");
		// --------------- End user input  ---------------

		// --------------- Evaluate compiled assets  ---------------
		/** @type Map<string, number> */
		const headOutput = await fetchFilesAndSizes(headPath, fileGlobPattern, {
			core,
		});
		/**
		 * If a diff path is provided, get the diff files and their sizes
		 * @type Map<string, number>
		 **/
		const baseOutput = await fetchFilesAndSizes(basePath, fileGlobPattern, {
			core,
		});
		/**
		 * Indicates that there are files we're comparing against
		 * and not just reporting on the overall size of the compiled assets
		 * @type boolean
		 */
		const hasBase = baseOutput.size > 0;
		// --------------- End evaluation  ---------------

		/** Split the data by component package */
		const { filePath, PACKAGES } = splitDataByPackage(headOutput, baseOutput);
		const sections = makeTable(PACKAGES, filePath, headPath);

		/**
		 * Calculate the total size of the minified files where applicable, use the regular size
		 * if the minified file doesn't exist
		 * @param {Map<string, number>} contentMap - The map of file names and their sizes
		 * @returns {number} - The total size of the minified files where applicable
		 */
		const calculateMinifiedTotal = (contentMap) => [...contentMap.entries()]
			.reduce((acc, [filename, size]) => {
				// We don't include anything other than css files in the total size
				if (!filename.endsWith(".css") || filename.endsWith(".min.css")) return acc;

				// If filename ends with *.css but not *.min.css, add the size of the minified file
				if (/\.css$/.test(filename) && !/\.min\.css$/.test(filename)) {
					const minified = filename.replace(/\.css$/, ".min.css");

					// Check if the minified file exists in the headOutput
					if (headOutput.has(minified)) {
						const minSize = headOutput.get(minified);
						if (minSize) return acc + minSize;
					}
					else {
						// If the minified file doesn't exist, add the size of the css file
						return acc + size;
					}
				}
				return acc + size;
			}, 0);


		/** Calculate the total size of the pull request's assets */
		const overallHeadSize = calculateMinifiedTotal(headOutput);

		/**
		* Calculate the overall size of the base branch's assets
		* if there is a base branch
		* @type number
		*/
		const overallBaseSize = hasBase ? calculateMinifiedTotal(baseOutput) : 0;

		/**
		 * If there is a base branch, check if there is a change in the overall size,
		 * otherwise, check if the overall size of the head branch is greater than 0
		 * @type boolean
		 */
		const hasChange = overallHeadSize !== overallBaseSize;

		/**
		 * Report the changes in the compiled assets in a markdown format
		 * @type string[]
		 **/
		const markdown = [];
		const summary = [
			"### Summary",
			`**Total size**: ${bytesToSize(overallHeadSize)}<sup>*</sup>`,
		];

		let summaryTable = [];

		if (sections.length === 0) {
			summary.push("", " 🎉 No changes detected in any packages");
		}
		else {
			const tableHead = ["Filename", "Head", "Minified", "Gzipped", ...(hasBase ? ["Compared to base"] : [])];

			/** Next iterate over the components and report on the changes */
			sections.map(({ name, hasChange, mainFile, fileMap }) => {
				if (!hasChange) return;

				/**
				* Iterate over the files in the component and create a markdown table
				* @param {Array} table - The markdown table accumulator
				* @param {[readableFilename, { headByteSize, baseByteSize }]} - The deconstructed filemap entry
				*/
				const tableRows = (
					table, // accumulator
					[readableFilename, { headByteSize, baseByteSize }] // deconstructed filemap entry; i.e., Map<key, { ...values }> = [key, { ...values }]
				) => {
					// @todo readable filename can be linked to html diff of the file?
					// https://github.com/adobe/spectrum-css/pull/2093/files#diff-6badd53e481452b5af234953767029ef2e364427dd84cdeed25f5778b6fca2e6

					if (
						// table is an array containing the printable data for the markdown table
						readableFilename.endsWith(".map") ||
						// If the file is a minified file, don't include it separately in the table
						/\.min\.css/.test(readableFilename)
					) {
						return table;
					}

					// @todo should there be any normalization before comparing the file names?
					const isMainFile = readableFilename === mainFile;

					const gzipName = readableFilename.replace(/\.([a-z]+)$/, ".min.$1.gz");
					const gzipFileRef = fileMap.get(gzipName);

					const minName = readableFilename.replace(/\.([a-z]+)$/, ".min.$1");
					const minFileRef = fileMap.get(minName);

					const removedOnBranch = isRemoved(headByteSize, baseByteSize);
					const newOnBranch = isNew(headByteSize, baseByteSize);

					let size, gzipSize, minSize, change, diff;
					if (removedOnBranch) {
						size = "🚨 deleted/moved"
						change = `⬇ ${bytesToSize(baseByteSize)}`;
						if (difference(baseByteSize, headByteSize) !== 0 && !newOnBranch) {
							diff = ` (${printPercentChange(headByteSize , baseByteSize)})`;
						}
					}
					else {
						size = bytesToSize(headByteSize);

						if (gzipFileRef && gzipFileRef?.headByteSize) {
							// If the gzip file is new, prefix it's size with a "🆕" emoji
							if (isNew(gzipFileRef.headByteSize, gzipFileRef?.baseByteSize)) {
								gzipSize = `🆕 ${bytesToSize(gzipFileRef.headByteSize)}`;
							}
							else if (isRemoved(gzipFileRef.headByteSize, gzipFileRef?.baseByteSize)) {
								gzipSize = "🚨 deleted/moved";
							}
							else {
								gzipSize = bytesToSize(gzipFileRef.headByteSize);
							}
						}

						if (minFileRef && minFileRef?.headByteSize) {
							// If the minSize file is new, prefix it's size with a "🆕" emoji
							if (isNew(minFileRef.headByteSize, minFileRef?.baseByteSize)) {
								minSize = `🆕 ${bytesToSize(minFileRef.headByteSize)}`;
							}
							else if (isRemoved(minFileRef.headByteSize, minFileRef?.baseByteSize)) {
								minSize = "🚨 deleted/moved";
							}
							else {
								minSize = bytesToSize(minFileRef.headByteSize);
							}
						}

						if (newOnBranch) {
							change = `🆕 ${bytesToSize(headByteSize)}`;
						}
						else {
							change = printChange(headByteSize, baseByteSize);
						}
					}

					if (!minSize) minSize = " - ";
					if (!gzipSize) gzipSize = " - ";

					const delta = `${change}${diff ?? ""}`;

					if (isMainFile) {
						summaryTable.push([name, size, minSize, gzipSize, delta]);
					}

					table.push([
						// Bold the main file to help it stand out
						isMainFile ? `**${readableFilename}**` : readableFilename,
						// If the file was removed, note it's absense with a dash; otherwise, note it's size
						size,
						minSize,
						gzipSize,
						delta,
					]);

					return table;
				};

				markdown.push(
					"",
					`#### ${name}`,
					"",
					...[
						tableHead,
						tableHead.map(() => "-"),
					].map((row) => `| ${row.join(" | ")} |`),
					...[...fileMap.entries()].reduce(tableRows, []).map((row) => `| ${row.join(" | ")} |`),
				);
			});

			/** Calculate the change in size [(head - base) / base = change] */
			if (hasBase) {
				if (hasChange) {
					summary.push(
						`**Total change (Δ)**: ${printChange(overallHeadSize, overallBaseSize)} (${printPercentChange(overallHeadSize, overallBaseSize)})`,
						"",
						`<small><em>Table reports on changes to a package's main file.${componentsChanged > 1 ? ` Other changes can be found in the collapsed <a href=\"#details\">Details</a> section below.` : ""}</em></small>`,
						""
					);
				}
				else if (sections.length > 1) {
					summary.push("✅ **No change in file sizes**", "");
				}
			}
			else {
				summary.push(
					"No base branch to compare against.",
					""
				);
			}

			// If there is more than 1 component updated, add a details/summary section to the markdown at the start of the array
			if (sections.length > 1) {
				markdown.unshift(
					"<a name=\"details\"></a>",
					"<details>",
					"<summary><b>File change details</b></summary>",
					""
				);

				markdown.push("", `</details>`);
			}
		}

		if (summaryTable.length > 0) {
			const summaryTableHeader = ["Package", "Size", "Minified", "Gzipped"];
			if (hasBase && hasChange) summaryTableHeader.push("Δ");

			// Add the headings to the summary table if it contains data
			summaryTable.unshift(
				summaryTableHeader,
				summaryTableHeader.map(() => "-"),
			);

			// This removes the delta column if there are no changes to compare
			summary.push(...summaryTable.map((row) => {
				if (summaryTableHeader.length === row.length) return `| ${row.join(" | ")} |`;
				// If the row is not the same length as the header, strip out the extra columns
				if (row.length > summaryTableHeader.length) {
					return `| ${row.slice(0, summaryTableHeader.length).join(" | ")} |`;
				}

				// If the row is shorter than the header, add empty columns to the end with " - "
				return `| ${row.concat(Array(summaryTableHeader.length - row.length).fill(" - ")).join(" | ")} |`;
			}));
		}

		markdown.push(
			"",
			"<small>",
			"* <em>Size is the sum of all main files for packages in the library.</em><br/>",
			"* <em>An ASCII character in UTF-8 is 8 bits or 1 byte.</em>",
			"</small>"
		);

		// --------------- Start Comment  ---------------
		if (shouldAddComment) {
			await addComment({
				search: new RegExp(`^${commentHeader}`),
				content: [commentHeader, summary.join("\n"), markdown.join("\n")].join(
					"\n\n"
				),
				token,
			});
		}
		// --------------- End Comment  ---------------

		// Add a summary to the GitHub Actions output
		core.startGroup(commentHeader);
		core.info(summary.join("\n"));
		core.info(markdown.join("\n"));
		core.endGroup();

		core.summary = summary.join("\n");

		// --------------- Set output variables  ---------------
		if (headOutput.size > 0) {
			const headMainSize = [...headOutput.entries()].reduce(
				(acc, [, size]) => acc + size,
				0
			);
			core.setOutput("total-size", headMainSize);

			if (hasBase) {
				const baseMainSize = [...baseOutput.entries()].reduce(
					(acc, [, size]) => acc + size,
					0
				);

				core.setOutput(
					"has-changed",
					hasBase && headMainSize !== baseMainSize ? "true" : "false"
				);
			}
		}
		else {
			core.setOutput("total-size", 0);
		}
	} catch (error) {
		core.error(error.stack);
		core.setFailed(error.message);
	}
}

run();

/** A few helpful utility functions; v1 == PR (change); v0 == base (initial) */
const difference = (v1, v0) => v1 - v0;
const isRemoved = (v1, v0) => (!v1 || v1 === 0) && (v0 && v0 > 0);
const isNew = (v1, v0) => (v1 && v1 > 0) && (!v0 || v0 === 0);

/**
 * Convert the provided difference between file sizes into a human
 * readable representation of the change.
 * @param {number} difference
 * @returns {string}
 */
const printChange = function (v1, v0) {
	/** Calculate the change in size: v1 - v0 = change */
	const d = difference(v1, v0);
	return d === 0
		? "-"
		: `${d > 0 ? "🔴 ⬆" : "🟢 ⬇"} ${bytesToSize(Math.abs(d))}`;
};

/**
 * Convert the provided difference between file sizes into a percent
 * value of the change.
 * @param {number} delta
 * @param {number} original
 * @returns {string}
 */
const printPercentChange = function (v1, v0) {
	const delta = ((v1 - v0) / v0) * 100;
	if (delta === 0) return "no change";
	return `${delta.toFixed(2)}%`;
};

/**
 * @typedef {string} PackageName - The name of the component package
 * @typedef {string} FileName - The name of the file in the component package
 * @typedef {{ headByteSize: number, baseByteSize: number }} FileSpecs - The size of the file in the head and base branches
 * @typedef {Map<FileName, FileSpecs>} FileDetails - A map of file sizes from the head and base branches keyed by filename (full path, not shorthand)
 * @typedef {{ name: PackageName, filePath: string, hasChange: boolean, mainFile: string, fileMap: FileDetails}} PackageDetails - The details of the component package including the main file and the file map as well as other short-hand properties for reporting
 */

/**
 * From the data indexed by filename, create a detailed table of the changes in the compiled assets
 * with a full view of all files present in the head and base branches.
 * @param {Map<PackageName, FileDetails>} PACKAGES
 * @param {string} filePath - The path to the component's dist folder from the root of the repo
 * @param {string} rootPath - The path from the github workspace to the root of the repo
  * @returns {PackageDetails[]}
 */
const makeTable = function (PACKAGES, filePath, rootPath) {
	const sections = [];

	/** Next convert that component data into a detailed object for reporting */
	PACKAGES.forEach((fileMap, packageName) => {
		// Read in the main asset file from the package.json
		const packagePath = join(rootPath, filePath, packageName, "package.json");

		// Default to the index.css file if no main file is provided in the package.json
		let mainFile = "index.css";
		if (existsSync(packagePath)) {
			// If the package.json exists, read in the main file
			const { main } = require(packagePath) ?? {};
			// If the main file is a string, use it as the main file
			if (typeof main === "string") {
				// Strip out the path to the dist folder from the main file
				mainFile = main.replace(new RegExp("^.*\/?dist\/"), "");
			}
		}

		/**
		 * Check if any of the files in the component have changed
		 * @type boolean
		 */
		const hasChange = fileMap.size > 0 && [...fileMap.values()].some(({ headByteSize, baseByteSize }) => headByteSize !== baseByteSize);

		/**
		 * We don't need to report on components that haven't changed unless they're new or removed
		 */
		if (!hasChange) return;

		sections.push({
			name: packageName,
			filePath,
			hasChange,
			mainFile,
			fileMap
		});
	});

	return sections;
};

/**
 * Split out the data indexed by filename into groups by component
 * @param {Map<string, number>} dataMap - A map of file names relative to the root of the repo and their sizes
 * @param {Map<string, number>=[new Map()]} baseMap - The map of file sizes from the base branch indexed by filename (optional)
 * @returns {{ filePath: string, PACKAGES: Map<PackageName, FileDetails>}}
 */
const splitDataByPackage = function (dataMap, baseMap = new Map()) {
	/**
	 * Path to the component's dist folder relative to the root of the repo
	 * @type {string|undefined}
	 */
	let filePath;

	const PACKAGES = new Map();

	/**
	 * Determine the name of the component
	 * @param {string} file - The full path to the file
	 * @param {{ part: string|undefined, offset: number|undefined, length: number|undefined }} options - The part of the path to split on and the offset to start from
	 * @returns {string}
	 */
	const getPathPart = (file, { part, offset, length, reverse = false } = {}) => {
		// If the file is not a string, return it as is
		if (!file || typeof file !== "string") return file;

		// Split the file path into parts
		const parts = file.split("/");

		// Default our index to 0
		let idx = 0;
		// If a part is provided, find the position of that part
		if (typeof part !== "undefined") {
			idx = parts.findIndex((p) => p === part);
			// index is -1 if the part is not found, return the file as is
			if (idx === -1) return file;
		}

		// If an offset is provided, add it to the index
		if (typeof offset !== "undefined") idx += offset;

		// If a length is provided, return the parts from the index to the index + length
		if (typeof length !== "undefined") {
			// If the length is negative, return the parts from the index + length to the index
			// this captures the previous n parts before the index
			if (length < 0) {
				return parts.slice(idx + length, idx).join(sep);
			}

			return parts.slice(idx, idx + length).join(sep);
		}

		// Otherwise, return the parts from the index to the end
		if (!reverse) return parts.slice(idx).join(sep);
		return parts.slice(0, idx).join(sep);
	};

	const pullDataIntoPackages = (filepath, size, isHead = true) => {
		const packageName = getPathPart(filepath, { part: "dist", offset: -1, length: 1 });
		// Capture the path to the component's dist folder, this doesn't include the root path from outside the repo
		if (!filePath) filePath = getPathPart(filepath, { part: "dist", reverse: true });

		// Capture the filename without the path to the dist folder
		const readableFilename = getPathPart(filepath, { part: "dist", offset: 1 });

		// If fileMap data already exists for the package, use it; otherwise, create a new map
		const fileMap = PACKAGES.has(packageName) ? PACKAGES.get(packageName) : new Map();

		// If the fileMap doesn't have the file, add it
		if (!fileMap.has(readableFilename)) {
			fileMap.set(readableFilename, {
				headByteSize: isHead ? size : dataMap.get(filepath),
				baseByteSize: isHead ? baseMap.get(filepath) : size,
			});
		}

		/** Update the component's table data */
		PACKAGES.set(packageName, fileMap);
	};

	// This sets up the core data structure for the package files
	[...dataMap.entries()].forEach(([file, headByteSize]) => pullDataIntoPackages(file, headByteSize, true));

	// Look for any base files not present in the head to ensure we capture when files are deleted
	[...baseMap.entries()].forEach(([file, baseByteSize]) => pullDataIntoPackages(file, baseByteSize, false));

	return { filePath, PACKAGES };
};
