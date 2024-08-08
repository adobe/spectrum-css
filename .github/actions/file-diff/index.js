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
const { join } = require("path");

const core = require("@actions/core");

const {
	fetchFileData,
	bytesToSize,
	addComment,
	splitDataByPackage,
	makeTable,
	difference,
	isRemoved,
	isNew,
	printChange,
	printPercentChange,
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
		const headFileStats = await fetchFileData(headPath, fileGlobPattern);

		/**
		 * If a diff path is provided, get the diff files and their sizes
		 * @type Map<string, number>
		 **/
		const baseFileStats = await fetchFileData(basePath, fileGlobPattern);

		/**
		 * Indicates that there are files we're comparing against
		 * and not just reporting on the overall size of the compiled assets
		 * @type boolean
		 */
		const shouldCompare = baseFileStats.size > 0;
		// --------------- End evaluation  ---------------

		/** Split the data by component package */
		const { filePath, PACKAGES } = splitDataByPackage(headFileStats, headPath, baseFileStats);

		if (PACKAGES.size === 0) {
			throw new Error(`No packages could be identified in the provided workspace.`);
		}

		const sections = makeTable(PACKAGES, filePath, headPath);

		/**
		 * If the updated assets are the same as the original,
		 * report no change
		 * @todo could likely use this to report the overall change; is that helpful info?
		 **/
		const markdown = [];
		const summary = [
			"### Summary",
		];

		if (sections.length === 0) {
			// @TODO why would the sections come back empty?
			summary.push(...["", " 🎉 No changes detected in any packages"]);
		} else {
			let hasChange = false;

			/* Push a line break before and after the section details */
			markdown.push("");

			sections.map(({ name, filePath, hasChange, mainFile, fileMap }) => {
				if (shouldCompare && !hasChange) return;

				const detail = [];

				/** We only evaluate changes if there is a diff branch being used and this is the main file for the package */
				if (shouldCompare) {
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
						detail.push("🚨 deleted, moved, or renamed");
					} else if (
						(existsSync(join(headPath, filePath, name)) && !existsSync(join(basePath, filePath, name)))
					) {
						detail.push("🎉 new");
					}
				}


				const md = ["", `#### ${name}`, ...detail, ""];
				md.push(
					...[
						["File", "Head", ...(shouldCompare ? ["Base", "Δ"] : [])],
						[" - ", " - ", ...(shouldCompare ? [" - ", " - "] : [])],
					].map((row) => `| ${row.join(" | ")} |`),
					...[...fileMap.entries()]
						.reduce(
							(
								table, // accumulator
								[readableFilename, { headByteSize = 0, baseByteSize = 0 }] // deconstructed filemap entry; i.e., Map<key, { ...values }> = [key, { ...values }]
							) => {
								// @todo readable filename can be linked to html diff of the file?
								// https://github.com/adobe/spectrum-css/pull/2093/files#diff-6badd53e481452b5af234953767029ef2e364427dd84cdeed25f5778b6fca2e6
								return [
									...table,
									[
										readableFilename === mainFile ? `**${readableFilename}**` : readableFilename,
										// If the file was removed, note it's absense with a dash; otherwise, note it's size
										isRemoved(headByteSize, baseByteSize) ? " - " : bytesToSize(headByteSize),
										...(shouldCompare ? [
											bytesToSize(baseByteSize),
											isRemoved(headByteSize, baseByteSize) ? "🚨 deleted, moved, or renamed" : isNew(headByteSize, baseByteSize) ? "🎉 **new**" : `${printChange(headByteSize, baseByteSize)}${difference(baseByteSize, headByteSize) !== 0 ? ` (${printPercentChange(headByteSize , baseByteSize)})` : ""}`,
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

			/**
			 * Calculate the change in size
			 * PR - base / base = change
			 */
			let changeSummary = "";
			if (baseFileStats.size > 0 && shouldCompare && hasChange) {
				changeSummary = `**Total change (Δ)**: ${printChange(overallBaseSize, overallHeadSize)} (${printPercentChange(overallHeadSize, overallBaseSize)})`;
			} else if (baseFileStats.size > 0 && shouldCompare && !hasChange) {
				changeSummary = `No change in file sizes`;
			}

			if (changeSummary !== "") {
				summary.push(
					changeSummary,
					"",
				);
			}

			markdown.push("");
		}

		markdown.push(
			"",
			"<small>",
			"* <em>Represents the sum of all <strong>main</strong> files for packages in the library (i.e., @spectrum-css/accordion/dist/index.css).</em><br/>",
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
		if (headFileStats.size > 0) {
			const headMainSize = [...headFileStats.entries()].reduce(
				(acc, [_, size]) => acc + size,
				0
			);
			core.setOutput("total-size", headMainSize);

			if (shouldCompare) {
				const baseMainSize = [...baseFileStats.entries()].reduce(
					(acc, [_, size]) => acc + size,
					0
				);

				core.setOutput(
					"has-changed",
					shouldCompare && headMainSize !== baseMainSize ? "true" : "false"
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
