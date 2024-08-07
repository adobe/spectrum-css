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
const { join, sep, dirname } = require("path");

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
		const { filePath, PACKAGES } = splitDataByPackage(headOutput, headPath, baseOutput);
		const sections = makeTable(PACKAGES, filePath, headPath);

		/** Calculate the total size of the pull request's assets */
		const overallHeadSize = [...headOutput.values()].reduce(
			(acc, size) => acc + size,
			0
		);

		/** Calculate the overall size of the base branch's assets */
		const overallBaseSize = hasBase
			? [...baseOutput.values()].reduce((acc, size) => acc + size, 0)
			: undefined;

		const hasChange = overallHeadSize !== overallBaseSize;

		/** If no diff map data provided, we're going to report on the overall size */

		/**
		 * If the updated assets are the same as the original,
		 * report no change
		 * @todo could likely use this to report the overall change; is that helpful info?
		 **/
		const markdown = [];
		const summary = [
			"### Summary",
			`**Total size**: ${bytesToSize(overallHeadSize)}<sup>*</sup>`,
		];

		if (sections.length === 0) {
			summary.push(...["", " 🎉 No changes detected in any packages"]);
		} else {
			/**
			 * Calculate the change in size
			 * PR - base / base = change
			 */
			let changeSummary = "";
			if (baseOutput.size > 0 && hasBase && hasChange) {
				changeSummary = `**Total change (Δ)**: ${printChange(overallBaseSize, overallHeadSize)} (${printPercentChange(overallHeadSize, overallBaseSize)})`;
			} else if (baseOutput.size > 0 && hasBase && !hasChange) {
				changeSummary = `No change in file sizes`;
			}

			if (changeSummary !== "") {
				summary.push(
					changeSummary,
					"",
				);
			}

			sections.map(({ name, filePath, headMainSize, baseMainSize, hasChange, mainFile, fileMap }) => {
				if (!hasChange) return;

				const data = [];

				/** We only evaluate changes if there is a diff branch being used and this is the main file for the package */
				if (hasBase) {
					/**
					 * If: the component folder exists in the original branch but not the PR
					 * Or: the pull request file size is 0 or empty but the original branch has a size
					 * Then: report that it was removed, moved, or renamed
					 *
					 * Else if: the component folder exists in the PR but not the original branch
					 * Or: the pull request file has size but the original branch does not
					 * Then: report that it's new
					 *
					 * Else if: the difference between the two sizes is not 0 (i.e. there is a change)
					 * Then: report the change
					 *
					 * Else: report that there is no change
					 */
					if (
						(existsSync(join(basePath, filePath, name)) && !existsSync(join(headPath, filePath, name)))
					) {
						data.push("🚨 deleted, moved, or renamed");
					} else if (
						(existsSync(join(headPath, filePath, name)) && !existsSync(join(basePath, filePath, name)))
					) {
						data.push("🎉 new");
					} else if (
						((Math.abs(difference(headMainSize, baseMainSize))) / 1000) >= 0.001
					) {
						data.push(printChange(headMainSize, baseMainSize));
					}
				}


				const md = ["", `#### ${name}`, ""];
				md.push(
					...[
						["Filename", "Head", "Minified", "Gzipped", ...(hasBase ? ["Compared to base"] : [])],
						[" - ", " - ", "-", "-", ...(hasBase ? [" - "] : [])],
					].map((row) => `| ${row.join(" | ")} |`),

					...[...fileMap.entries()]
						.reduce(
							(
								table, // accumulator
								[readableFilename, { headByteSize = 0, baseByteSize = 0 }] // deconstructed filemap entry; i.e., Map<key, { ...values }> = [key, { ...values }]
							) => {
								// table is an array containing the printable data for the markdown table
								if (readableFilename.endsWith(".map")) return table;

								const removedOnBranch = isRemoved(headByteSize, baseByteSize);
								// @todo should there be any normalization before comparing the file names?
								const isMainFile = readableFilename === mainFile;

								// If the file is a minified file, don't include it separately in the table
								if (/\.min\.css/.test(readableFilename)) return table;

								const gzipName = readableFilename.replace(/\.([a-z]+)$/, ".min.$1.gz");
								const minName = readableFilename.replace(/\.([a-z]+)$/, ".min.$1");

								const size = removedOnBranch ? " - " : bytesToSize(headByteSize);
								const gzipSize = removedOnBranch ? " - " : gzipName ? bytesToSize(fileMap.get(gzipName)?.headByteSize ?? 0) : "-";
								const minSize = removedOnBranch ? " - " : minName ? bytesToSize(fileMap.get(minName)?.headByteSize ?? 0) : "-";

								const delta = removedOnBranch ? "🚨 deleted, moved, or renamed" : isNew(headByteSize, baseByteSize) ? "🎉 **new**" : `${printChange(headByteSize, baseByteSize)}${difference(baseByteSize, headByteSize) !== 0 ? ` (${printPercentChange(headByteSize , baseByteSize)})` : ""}`;

								// @todo readable filename can be linked to html diff of the file?
								// https://github.com/adobe/spectrum-css/pull/2093/files#diff-6badd53e481452b5af234953767029ef2e364427dd84cdeed25f5778b6fca2e6
								return [
									...table,
									[
										// Bold the main file to help it stand out
										isMainFile ? `**${readableFilename}**` : readableFilename,
										// If the file was removed, note it's absense with a dash; otherwise, note it's size
										size,
										minSize,
										gzipSize,
										...(hasBase ? [delta] : []),
									]
								];
							},
							[]
						)
						.map((row) => `| ${row.join(" | ")} |`),
				);

				markdown.push(...md);
			});

			// If there is more than 1 component updated, add a details/summary section to the markdown at the start of the array
			if (markdown.length > 5) {
				markdown.unshift(
					"<a name=\"details\"></a>",
					"<details>",
					"<summary><b>File change details</b></summary>",
					""
				);

				markdown.push(
					"",
					"</details>"
				);
			}

			markdown.push("");
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
				(acc, [_, size]) => acc + size,
				0
			);
			core.setOutput("total-size", headMainSize);

			if (hasBase) {
				const baseMainSize = [...baseOutput.entries()].reduce(
					(acc, [_, size]) => acc + size,
					0
				);

				core.setOutput(
					"has-changed",
					hasBase && headMainSize !== baseMainSize ? "true" : "false"
				);
			}
		} else {
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
		? `-`
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
	if (delta === 0) return `no change`;
	return `${delta.toFixed(2)}%`;
};

/**
 *
 * @param {Map<string, Map<string, { headByteSize: number, baseByteSize: number }>>} PACKAGES
 * @param {string} filePath - The path to the component's dist folder from the root of the repo
 * @param {string} path - The path from the github workspace to the root of the repo
 * @returns {Array<{ name: string, filePath: string, headMainSize: number, baseMainSize: number, hasChange: boolean, fileMap: Map<string, { headByteSize: number, baseByteSize: number }>}>}
 */
const makeTable = function (PACKAGES, filePath, path) {
	const sections = [];

	/** Next convert that component data into a detailed object for reporting */
	PACKAGES.forEach((fileMap, packageName) => {
		// Read in the main asset file from the package.json
		const packagePath = join(path, filePath, packageName, "package.json");

		let mainFile = "index.min.css";
		if (existsSync(packagePath)) {
			const { main } = require(packagePath) ?? {};
			if (main) {
				mainFile = main.replace(/^.*\/dist\//, "");

				// Check if a minified output of this file exists
				if (existsSync(join(dirname(packagePath), main.replace(/\.css$/, ".min.css")))) {
					mainFile = mainFile.replace(/\.css$/, ".min.css");
				}
			}
		}

		const mainFileOnly = [...fileMap.keys()].filter((file) => file.endsWith(mainFile));
		const headMainSize = mainFileOnly.reduce(
			(acc, filename) => {
				const { headByteSize = 0 } = fileMap.get(filename);
				return acc + headByteSize;
			},
			0
		);

		const baseMainSize = mainFileOnly.reduce(
			(acc, filename) => {
				const { baseByteSize = 0 } = fileMap.get(filename);
				return acc + baseByteSize;
			},
			0
		);

		const hasChange = fileMap.size > 0 && [...fileMap.values()].some(({ headByteSize, baseByteSize }) => headByteSize !== baseByteSize);

		/**
		 * We don't need to report on components that haven't changed unless they're new or removed
		 */
		if (headMainSize === baseMainSize) return;

		sections.push({
			name: packageName,
			filePath,
			headMainSize,
			baseMainSize,
			hasChange,
			mainFile: mainFileOnly?.[0],
			fileMap
		});
	});

	return sections;
};

/**
 * Split out the data indexed by filename into groups by component
 * @param {Map<string, number>} dataMap
 * @param {string} path
 * @param {Map<string, number>} baseMap
 * @returns {{ filePath: string, PACKAGES: Map<string, Map<string, { headByteSize: number, baseByteSize: number }>>}}
 */
const splitDataByPackage = function (dataMap, path, baseMap = new Map()) {
	const PACKAGES = new Map();

	let filePath;
	[...dataMap.entries()].forEach(([file, headByteSize]) => {
		// Determine the name of the component
		const parts = file.split(sep);
		const componentIdx = parts.findIndex((part) => part === "dist") - 1;
		const packageName = parts[componentIdx];

		if (!filePath) {
			filePath = `${file.replace(path, "")}/${parts.slice(componentIdx + 1, -1).join(sep)}`;
		}

		const readableFilename = file.replace(/^.*\/dist\//, "");

		const fileMap = PACKAGES.has(packageName)
			? PACKAGES.get(packageName)
			: new Map();

		if (!fileMap.has(readableFilename)) {
			fileMap.set(readableFilename, {
				headByteSize,
				baseByteSize: baseMap.get(file),
			});
		}

		/** Update the component's table data */
		PACKAGES.set(packageName, fileMap);
	});

	// Look for any base files not present in the head
	[...baseMap.entries()].forEach(([file, baseByteSize]) => {
		// Determine the name of the component
		const parts = file.split(sep);
		const componentIdx = parts.findIndex((part) => part === "dist") - 1;
		const packageName = parts[componentIdx];

		if (!filePath) {
			filePath = `${file.replace(path, "")}/${parts.slice(componentIdx + 1, -1).join(sep)}`;
		}

		const readableFilename = file.replace(/^.*\/dist\//, "");

		const fileMap = PACKAGES.has(packageName)
			? PACKAGES.get(packageName)
			: new Map();

		if (!fileMap.has(readableFilename)) {
			fileMap.set(readableFilename, {
				headByteSize: dataMap.get(file),
				baseByteSize,
			});
		}

		/** Update the component's table data */
		PACKAGES.set(packageName, fileMap);
	});

	return { filePath, PACKAGES };
};
