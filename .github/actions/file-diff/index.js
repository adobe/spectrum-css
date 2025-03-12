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

const core = require("@actions/core");

const {
	addComment,
	bytesToSize,
	difference,
	fetchPackageDetails,
	isNew,
	isRemoved,
	makeDataSections,
	printChange,
	printPercentChange,
} = require("./utilities.js");

async function run() {
	try {
		// --------------- Fetch user input values  ---------------
		const token = core.getInput("token");
		const headPath = core.getInput("head-path");
		const basePath = core.getInput("base-path");
		const packagePattern = core.getMultilineInput("package-pattern", {
			trimWhitespace: true,
		});
		const shouldAddComment = core.getBooleanInput("comment") ?? true;
		const commentHeader = core.getInput("comment-header");
		// --------------- End user input  ---------------

		// --------------- Evaluate compiled assets  ---------------
		const packageDetails = await fetchPackageDetails(packagePattern, {
			headPath,
			basePath,
			core,
		});

		/**
		 * If true, indicates there are files to compare against; not
		 * just reporting on the overall size of the compiled assets
		 * @type boolean
		 */
		const shouldCompare = Object.values(packageDetails).reduce((acc, files) => {
			if (acc) return acc;
			return [...files.values()].some(({ size }) => size.base > 0);
		}, false);

		// --------------- End evaluation  ---------------

		/** Split the data by component package */
		const sections = makeDataSections(packageDetails);
		console.info({ sections, packageDetails });

		/** If there are no sections, there are no changes */
		if (!sections || (Array.isArray(sections) && sections.length === 0)) {
			core.info("No sections found, no changes detected");
			return;
		}

		/**
		 * Calculate the total size of the minified files where applicable, use the regular size
		 * if the minified file doesn't exist
		 * @param {import('./utilities.js').PackageDetails} contentMap - The map of file names and their sizes
		 * @param {"head" | "base"} source - The source of the file size to calculate
		 * @returns {number} - The total size of the minified files where applicable
		 */
		const calculateMinifiedTotal = (contentMap, source = "head") =>
			[...contentMap.values()].reduce((acc, fileMap) => {
				acc + [...fileMap.entries()].reduce((acc, [filename, { size = {} } = {}]) => {
					if (!filename.includes(".min.")) return acc;
					return acc + Number(size[source] ?? 0);
				}, 0);
			}, 0);

		/** Calculate the total size of the pull request's assets */
		const overallHeadSize = calculateMinifiedTotal(packageDetails, 'head');

		/**
		 * Calculate the overall size of the base branch's assets
		 * if there is a base branch
		 * @type number
		 */
		const overallBaseSize = shouldCompare ? calculateMinifiedTotal(packageDetails, 'base') : 0;

		/**
		 * If there is a base branch, check if there is a change in the overall size,
		 * otherwise, check if the overall size of the head branch is greater than 0
		 * @type boolean
		 */
		const hasChange = [...packageDetails.values()].reduce((acc, files) => {
			if (acc) return acc;
			return [...files.values()].some(({ hasChanged }) => hasChanged);
		} , false);

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

		core.info(sections);
		if (!hasChange && (!sections || !Array.isArray(sections) || sections.length === 0)) {
			summary.push("", " 🎉 No changes detected in any packages");
		} else {
			const tableHead = [
				"Filename",
				"Head",
				"Minified",
				"Gzipped",
				...(shouldCompare ? ["Compared to base"] : []),
			];

			/** Next iterate over the components and report on the changes */
			sections.map(({ packageName, /*...details*/ }) => {
				/**
				 * Iterate over the files in the component and create a markdown table
				 * @param {Array} table - The markdown table accumulator
				 * @param {[readableFilename, { headByteSize, baseByteSize }]} - The deconstructed filemap entry
				 */
				const tableRows = (
					table, // accumulator
					[readableFilename, { headByteSize, baseByteSize }], // deconstructed filemap entry; i.e., Map<key, { ...values }> = [key, { ...values }]
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

					const gzipName = readableFilename.replace(
						/\.([a-z]+)$/,
						".min.$1.gz",
					);
					const gzipFileRef = fileMap.get(gzipName);

					const minName = readableFilename.replace(/\.([a-z]+)$/, ".min.$1");
					const minFileRef = fileMap.get(minName);

					const removedOnBranch = isRemoved(headByteSize, baseByteSize);
					const newOnBranch = isNew(headByteSize, baseByteSize);

					let size, gzipSize, minSize, change, diff;
					if (removedOnBranch) {
						size = "🚨 deleted/moved";
						change = `⬇ ${bytesToSize(baseByteSize)}`;
						if (difference(baseByteSize, headByteSize) !== 0 && !newOnBranch) {
							diff = ` (${printPercentChange(headByteSize, baseByteSize)})`;
						}
					} else {
						size = bytesToSize(headByteSize);

						if (gzipFileRef && gzipFileRef?.headByteSize) {
							// If the gzip file is new, prefix it's size with a "🆕" emoji
							if (isNew(gzipFileRef.headByteSize, gzipFileRef?.baseByteSize)) {
								gzipSize = `🆕 ${bytesToSize(gzipFileRef.headByteSize)}`;
							} else if (
								isRemoved(gzipFileRef.headByteSize, gzipFileRef?.baseByteSize)
							) {
								gzipSize = "🚨 deleted/moved";
							} else {
								gzipSize = bytesToSize(gzipFileRef.headByteSize);
							}
						}

						if (minFileRef && minFileRef?.headByteSize) {
							// If the minSize file is new, prefix it's size with a "🆕" emoji
							if (isNew(minFileRef.headByteSize, minFileRef?.baseByteSize)) {
								minSize = `🆕 ${bytesToSize(minFileRef.headByteSize)}`;
							} else if (
								isRemoved(minFileRef.headByteSize, minFileRef?.baseByteSize)
							) {
								minSize = "🚨 deleted/moved";
							} else {
								minSize = bytesToSize(minFileRef.headByteSize);
							}
						}

						if (newOnBranch) {
							change = `🆕 ${bytesToSize(headByteSize)}`;
						} else {
							change = printChange(headByteSize, baseByteSize);
						}
					}

					if (!minSize) minSize = " - ";
					if (!gzipSize) gzipSize = " - ";

					const delta = `${change}${diff ?? ""}`;

					if (isMain) {
						summaryTable.push([packageName, size, minSize, gzipSize, delta]);
					}

					table.push([
						// Bold the main file to help it stand out
						isMain ? `**${readableFilename}**` : readableFilename,
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
					`#### ${packageName}`,
					"",
					...[tableHead, tableHead.map(() => "-")].map(
						(row) => `| ${row.join(" | ")} |`,
					),
					...[...fileMap.entries()]
						.reduce(tableRows, [])
						.map((row) => `| ${row.join(" | ")} |`),
				);
			});

			/** Calculate the change in size [(head - base) / base = change] */
			if (shouldCompare) {
				if (hasChange) {
					summary.push(
						`**Total change (Δ)**: ${printChange(overallHeadSize, overallBaseSize)} (${printPercentChange(overallHeadSize, overallBaseSize)})`,
						"",
						`<small><em>Table reports on changes to a package's main file.${sections.length > 1 ? ` Other changes can be found in the collapsed <a href=\"#details\">Details</a> section below.` : ""}</em></small>`,
						"",
					);
				} else if (sections.length > 1) {
					summary.push("✅ **No change in file sizes**", "");
				}
			} else {
				summary.push("No base branch to compare against.", "");
			}

			// If there is more than 1 component updated, add a details/summary section to the markdown at the start of the array
			if (sections.length > 1) {
				markdown.unshift(
					'<a name="details"></a>',
					"<details>",
					"<summary><b>File change details</b></summary>",
					"",
				);

				markdown.push("", `</details>`);
			}
		}

		if (summaryTable.length > 0) {
			const summaryTableHeader = ["Package", "Size", "Minified", "Gzipped"];
			if (shouldCompare && hasChange) summaryTableHeader.push("Δ");

			// Add the headings to the summary table if it contains data
			summaryTable.unshift(
				summaryTableHeader,
				summaryTableHeader.map(() => "-"),
			);

			// This removes the delta column if there are no changes to compare
			summary.push(
				...summaryTable.map((row) => {
					if (summaryTableHeader.length === row.length)
						return `| ${row.join(" | ")} |`;
					// If the row is not the same length as the header, strip out the extra columns
					if (row.length > summaryTableHeader.length) {
						return `| ${row.slice(0, summaryTableHeader.length).join(" | ")} |`;
					}

					// If the row is shorter than the header, add empty columns to the end with " - "
					return `| ${row.concat(Array(summaryTableHeader.length - row.length).fill(" - ")).join(" | ")} |`;
				}),
			);
		}

		markdown.push(
			"",
			"<small>",
			"* <em>Size is the sum of all main files for packages in the library.</em><br/>",
			"* <em>An ASCII character in UTF-8 is 8 bits or 1 byte.</em>",
			"</small>",
		);

		// --------------- Start Comment  ---------------
		if (shouldAddComment) {
			await addComment({
				search: new RegExp(`^${commentHeader}`),
				content: [commentHeader, summary.join("\n"), markdown.join("\n")].join(
					"\n\n",
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
				0,
			);
			core.setOutput("total-size", headMainSize);
		} else {
			core.setOutput("total-size", 0);
		}

		core.setOutput("has-changed", sections.length === 0 ? "true" : "false");
	} catch (error) {
		core.error(error.stack);
		core.setFailed(error.message);
	}
}

run();
