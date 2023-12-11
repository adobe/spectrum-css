/*!
 * Copyright 2023 Adobe. All rights reserved.
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
		const path = core.getInput("path");
		const diffPath = core.getInput("diff-path");
		const fileGlobPattern = core.getMultilineInput("file-glob-pattern", {
			trimWhitespace: true,
		});
		const shouldAddComment = core.getBooleanInput("comment") ?? true;
		const commentHeader = core.getInput("comment-header");
		// --------------- End user input  ---------------

		// --------------- Evaluate compiled assets  ---------------
		/** @type Map<string, number> */
		const pathOutput = await fetchFilesAndSizes(path, fileGlobPattern, {
			core,
		});
		/**
		 * If a diff path is provided, get the diff files and their sizes
		 * @type Map<string, number>
		 **/
		const diffOutput = await fetchFilesAndSizes(diffPath, fileGlobPattern, {
			core,
		});
		/**
		 * Indicates that there are files we're comparing against
		 * and not just reporting on the overall size of the compiled assets
		 * @type boolean
		 */
		const hasDiff = diffOutput.size > 0;
		// --------------- End evaluation  ---------------

		/** Split the data by component package */
		const COMPONENTS = splitDataByComponent(pathOutput, diffOutput);
		const sections = makeTable(COMPONENTS);

		const overallSize = [...pathOutput.values()].reduce(
			(acc, size) => acc + size,
			0
		);

		/** Calculate the overall size of the updated assets */
		const overallDiffSize = hasDiff
			? [...diffOutput.values()].reduce((acc, size) => acc + size, 0)
			: undefined;

		/** If no diff map data provided, we're going to report on the overall size */
		/**
		 * If the updated assets are the same as the original,
		 * report no change
		 * @todo could likely use this to report the overall change; is that helpful info?
		 **/
		const markdown = [];
		const summary = [
			"### Summary",
			`**Total size**: ${bytesToSize(overallDiffSize)}<sup>*</sup>`
		];
		const summaryTable = [];

		if (sections.length === 0) {
			summary.push(...["", " 🎉 No changes detected in any packages"]);
		} else {
			if (diffOutput.size > 0 && hasDiff) {
				let changeSummary = `**Total change (Δ)**: ${printChange(
					overallDiffSize - overallSize
				)}`;

				if (overallSize === overallDiffSize) changeSummary += " 🎉";
				else
					changeSummary += ` (${printPercentChange(
						(overallDiffSize - overallSize) / overallSize
					)})`;

				summary.push(...[changeSummary, ""]);
			}

			summaryTable.push(
				["Package", "Size", ...(hasDiff ? ["Δ"] : [])],
				["-", "-", ...(hasDiff ? ["-"] : [])]
			);

			markdown.push(`<details>`, `<summary><b>Details</b></summary>`, "");

			sections.map(({ name, totalSize, totalDiffSize, fileMap }) => {
				const md = ["", `#### ${name}`, ""];
				const data = [name, bytesToSize(totalDiffSize)];

				if (hasDiff) {
					// If a diff path was provided and the component folder doesn't exist,
					// report that the compiled assets were removed
					if (
						!existsSync(join(diffPath, "components", name)) ||
						(totalSize === 0 && totalDiffSize > 0)
					) {
						data.push("🚨 package deleted/moved/renamed");
					} else if (totalSize > 0 && totalDiffSize === 0) {
						data.push("🎉 new package");
					} else {
						data.push(printChange(totalDiffSize - totalSize));
					}
				}

				summaryTable.push(data);

				md.push(
					...[
						["File", "Size", ...(hasDiff ? ["Base", "Δ"] : [])],
						[" - ", " - ", ...(hasDiff ? [" - ", " - "] : [])],
						[
							"**Total**",
							bytesToSize(totalSize),
							...(hasDiff
								? [
									bytesToSize(totalDiffSize),
									`${printChange(totalDiffSize - totalSize)} (${printPercentChange((totalDiffSize - totalSize) / totalSize)})`,
								]
								: []),
						],
					].map((row) => `| ${row.join(" | ")} |`),
					...[...fileMap.entries()]
						.reduce(
							(
								table,
								[readableFilename, { byteSize = 0, diffByteSize = 0 }]
							) => {
								// @todo readable filename can be linked to html diff of the file?
								// https://github.com/adobe/spectrum-css/pull/2093/files#diff-6badd53e481452b5af234953767029ef2e364427dd84cdeed25f5778b6fca2e6
								return [
									...table,
									[
										readableFilename,
										byteSize === 0 && diffByteSize > 0 ? "**removed**" : bytesToSize(byteSize),
										...(hasDiff ? [
											bytesToSize(diffByteSize),
											`${printChange(diffByteSize - byteSize)} (${printPercentChange((diffByteSize - byteSize) / byteSize)})`,
										] : []),
									]
								];
							},
							[]
						)
						.map((row) => `| ${row.join(" | ")} |`),
				);

				markdown.push(...md);
			});

			markdown.push("", `</details>`);
		}

		if (summaryTable.length > 1) {
			summary.push(...summaryTable.map((row) => `| ${row.join(" | ")} |`));
		}

		markdown.push("", `<small><sup>*</sup> <em>An ASCII character in UTF-8 is 8 bits or 1 byte.</em></small>`);

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
		if (pathOutput.size > 0) {
			const totalSize = [...pathOutput.entries()].reduce(
				(acc, [_, size]) => acc + size,
				0
			);
			core.setOutput("total-size", totalSize);

			if (hasDiff) {
				const totalDiffSize = [...diffOutput.entries()].reduce(
					(acc, [_, size]) => acc + size,
					0
				);

				core.setOutput(
					"has-changed",
					hasDiff && totalSize !== totalDiffSize ? "true" : "false"
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

/**
 * Convert the provided difference between file sizes into a human
 * readable representation of the change.
 * @param {number} difference
 * @returns {string}
 */
const printChange = function (difference) {
	return difference === 0
		? `-`
		: `${difference > 0 ? "⬆" : "⬇"} ${bytesToSize(Math.abs(difference))}`;
};

/**
 * Convert the provided difference between file sizes into a percent
 * value of the change.
 * @param {number} delta
 * @param {number} original
 * @returns {string}
 */
const printPercentChange = function (delta) {
	if (delta === 0) return `no change`;
	return `${Math.abs(delta * 100).toFixed(2)}%`;
};

/**
 *
 * @param {Map<string, number>} pathMap
 * @param {Map<string, number>} diffMap
 * @returns {string}
 */
const makeTable = function (COMPONENTS) {
	const sections = [];

	/** Next convert that component data into a comment */
	COMPONENTS.forEach((fileMap, componentName) => {
		const totalSize = [...fileMap.values()].reduce(
			(acc, { byteSize }) => acc + byteSize,
			0
		);
		const totalDiffSize = [...fileMap.values()].reduce(
			(acc, { diffByteSize = 0 }) => acc + diffByteSize,
			0
		);

		/**
		 * We don't need to report on components that haven't changed unless they're new or removed
		 */
		if (totalSize === totalDiffSize) return;

		sections.push({ name: componentName, totalSize, totalDiffSize, fileMap });
	});

	return sections;
};

/**
 * Split out the data indexed by filename into groups by component
 * @param {Map<string, number>} dataMap
 * @param {Map<string, number>} diffMap
 * @returns {Map<string, Map<string, { byteSize: number, diffByteSize: number }>>}
 */
const splitDataByComponent = function (dataMap, diffMap = new Map()) {
	const COMPONENTS = new Map();
	[...dataMap.entries()].forEach(([file, byteSize]) => {
		// Determine the name of the component
		const parts = file.split(sep);
		const componentIdx = parts.findIndex((part) => part === "dist") - 1;
		const componentName = parts[componentIdx];
		const readableFilename = file.replace(/^.*\/dist\//, "");

		const fileMap = COMPONENTS.has(componentName)
			? COMPONENTS.get(componentName)
			: new Map();

		if (!fileMap.has(readableFilename)) {
			fileMap.set(readableFilename, {
				byteSize,
				diffByteSize: diffMap.get(file),
			});
		} else {
			throw new Error(`The file ${file} was found twice in the dataset`);
		}

		/** Update the component's table data */
		COMPONENTS.set(componentName, fileMap);
	});
	return COMPONENTS;
};
