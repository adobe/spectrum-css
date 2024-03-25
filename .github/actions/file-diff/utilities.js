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

const { statSync, existsSync, readdirSync, readFileSync } = require("fs");
const { readFile } = require("fs").promises;
const { join, relative, dirname, sep, extname } = require("path");

const github = require("@actions/github");
const glob = require("@actions/glob");
const core = require("@actions/core");

const Diff = require("diff");

/** A few helpful utility functions; v1 == PR (change); v0 == base (initial) */
exports.difference = (v1, v0) => v1 - v0;
exports.isRemoved = (v1, v0) => (!v1 || v1 === 0) && (v0 && v0 > 0);
exports.isNew = (v1, v0) => (v1 && v1 > 0) && (!v0 || v0 === 0);

/**
 * Convert the provided difference between file sizes into a human
 * readable representation of the change.
 * @param {number} difference
 * @returns {string}
 */
exports.printChange = function (v1, v0) {
	/** Calculate the change in size: v1 - v0 = change */
	const d = difference(v1, v0);
	return d === 0
		? `-`
		: `${d > 0 ? "⬆" : "⬇"} ${bytesToSize(Math.abs(d))}`;
};

/**
 * Convert the provided difference between file sizes into a percent
 * value of the change.
 * @param {number} delta
 * @param {number} original
 * @returns {string}
 */
exports.printPercentChange = function (v1, v0) {
	const delta = ((v1 - v0) / v0) * 100;
	if (delta === 0) return `no change`;
	return `${delta.toFixed(2)}%`;
};

/**
 * List all files in the directory to help with debugging
 * @param {string} path
 * @param {string[]} pattern
 * @returns {void}
 */
function debugEmptyDirectory(path, pattern) {
    if (!existsSync(path)) {
        throw new Error(`The provided path does not exist in the workspace`);
    }

    /**
     * Recursively report on the files in the provided directory for debugging
     * @param {string} path
     * @param {{ rootDir: string }} configuration
     * @returns {void}
     */
    function reportOnDirectoryFiles(path, { rootDir = path }) {
        readdirSync(path, { withFileTypes: true }).forEach((dirent) => {
            if (dirent.isFile()) {
                const file = join(path, dirent.name);
                if (dirent.name.startsWith(".")) return;
                core.info(`- ${relative(path, file)}  |  ${exports.bytesToSize(statSync(file).size)}`);
            } else if (dirent.isDirectory()) {
                const dir = join(path, dirent.name);
                if (dirent.name.startsWith(".") || dirent.name === "node_modules") return;
                core.info(`${relative(rootDir, dir)}/`);
                reportOnDirectoryFiles(dir, { rootDir });
            }
        });
    }

    core.startGroup(`All files in ${path}`);
    reportOnDirectoryFiles(path);
    core.endGroup();

    throw new Error(`No files found matching the glob pattern: ${pattern.map((p) => join(path, p)).join(", ")}`);
}

/**
 * Convert the provided byte size to a human readable format
 * @param {number} bytes
 * @returns {string} The size in human readable format
 */
exports.bytesToSize = function (bytes) {
    if (!bytes) return "-";
    if (bytes === 0) return "0";

    const sizes = ["bytes", "KB", "MB", "GB", "TB"];

    // Determine the size identifier to use (KB, MB, etc)
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

    if (i === 0) {
        const value = (bytes / 1000).toFixed(2);
        if (value === "0.00") return "< 0.01 KB";
        return value + " " + sizes[1];
    }

    return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

/** @typedef {import('@octokit/rest').RestEndpointMethodTypes['issues']} Issues */
/**
 * @param {RegExp} findComment
 * @param {string} content
 * @param {string} token - The GitHub token to use for authentication
 * @returns {Promise<Issues['createComment']['response'] | Issues['updateComment']['response']>}
 */
exports.addComment = async function ({ search, content, token }) {
    /**
     * @description Set up the octokit client
     * @type ReturnType<import('@actions/github').getOctokit>
     */
    const octokit = new github.getOctokit(token);

    // Fetch data about the action that triggered the workflow
    /** @type import('@actions/github/lib/interfaces').WebhookPayload['pull_request'] */
    const pullRequest = github.context.payload.pull_request;
    /** @type string */
    const owner = github.context.payload.repository.owner.login;
    /** @type string */
    const repo = github.context.payload.repository.name;

    if (!pullRequest) {
        core.warning(`No pull request found in the context, skipping comment`);
        return;
    }

    const commentData = { owner, repo };
    const comments =
        (await octokit.paginate(octokit.rest.issues.listComments, {
            ...commentData,
            issue_number: pullRequest.number,
        })) ?? [];

    /**
     * Add the body content after comments are fetched so that it's
     * not included in the search for existing comments.
     */
    commentData.body = content;

    /**
     * Search comments from the bottom-up to find the most recent comment
     * from the GitHub Actions bot that matches our criteria.
     */
    const existingComment = comments.reverse().find((comment) => {
        return (
            comment?.user?.login === "github-actions[bot]" &&
            comment?.user?.type === "Bot" &&
            search.test(comment?.body)
        );
    });

    // If the comment exists then update instead of creating a new one.
    const action = existingComment ? "updateComment" : "createComment";

    if (existingComment) {
        commentData.comment_id = existingComment.id;
    } else {
        commentData.issue_number = pullRequest.number;
    }

    return octokit.rest.issues[action](commentData);
};

/**
 * @typedef {Object} FileData
 * @property {number} size - a numeric representation of the file size via stat
 * @property {string} content - a raw read-in of the file content
 */

/**
 * Use the provided glob pattern to fetch the files and their sizes from the
 * filesystem and return a Map of the files and their sizes.
 * @param {string} rootPath
 * @param {string[]} patterns
 * @returns {Promise<Map<string, FileData>>}
 */
exports.fetchFileData = async function (rootPath, patterns = []) {
    // If no rootPath is provided
    if (typeof rootPath === "undefined") {
        return new Map();
    }

        // Log a warning that the provided path does not exist in the workspace
    if (!existsSync(rootPath)) {
        core.warning(`Provided path (${rootPath}) could not be found in the workspace.`);
        return new Map();
    }

    /** @type import('@actions/glob').Globber */
    const globber = await glob.create(patterns.map((f) => join(rootPath, f)).join("\n"));

    /** @type Awaited<ReturnType<import('@actions/glob').Globber['glob']>> */
    const files = await globber.glob();

    // If no files are found, fail the action with a helpful message
    if (files.length === 0) {
        debugEmptyDirectory(rootPath, patterns);
        return new Map();
    }

    core.info(`Found ${files.length} files matching the glob pattern ${patterns.join(", ")}.`);

    // Fetch the files and their sizes, creates an array of arrays to be used in the table
    return new Map(
        files
            .map((f) => {
                const relativePath = relative(rootPath, f);
                const stat = statSync(f);
                // Only report on files, not on directories
                if (!stat || stat.isDirectory()) return;

                const content = readFileSync(f, { encoding: "utf-8" });
                return [relativePath, {
                    size: stat.size,
                    content,
                }];
            })
            .filter(Boolean),
    );
};

/**
 * Split out the data indexed by filename into groups by component
 * @param {Map<string, FileData>} dataMap
 * @param {string} path
 * @param {Map<string, FileData>} baseMap
 * @returns {{ filePath: string, PACKAGES: Map<string, Map<string, FileData>>}}
 */
exports.splitDataByPackage = function (dataMap, path, baseMap = new Map()) {
	const PACKAGES = new Map();

	let filePath;
	[...dataMap.entries()].forEach(([file, headData]) => {
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
                headData,
                baseData: baseMap.get(file),
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

/**
 * Sort the provided table into a printable dataset
 * @param {Map<string, Map<string, FileData>>} PACKAGES
 * @param {string} filePath - The path to the component's dist folder from the root of the repo
 * @param {string} path - The path from the github workspace to the root of the repo
 * @returns {Array<{ name: string, filePath: string, hasChange: boolean, fileMap: Map<string, FileData>}>}
 */
exports.makeTable = function (PACKAGES, filePath, path) {
	const sections = [];

	/** Next convert that component data into a detailed object for reporting */
	PACKAGES.forEach((fileMap, packageName) => {
		// Read in the main asset file from the package.json
		const packagePath = join(path, filePath, packageName, "package.json");

		let mainFile;
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

		const hasChange = fileMap.size > 0 && [...fileMap.values()].some(({ headByteSize, baseByteSize }) => headByteSize !== baseByteSize);

		/**
		 * We don't need to report on components that haven't changed unless they're new or removed
		 */
		// if (headMainSize === baseMainSize) return;

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
 * Read in file content from head and base, determine if the content has any differences
 * returns false if the content is the same, else return the diff object
 * @param {string} filePath - The path to the component's dist folder from the root of the repo
 * @param {Object} options
 * @param {string} options.headPath
 * @param {string} options.basePath
 * @returns {boolean|import("diff").Change[]|Error}
 */
exports.fetchDiff = async function (filepath, { headPath, basePath }) {
    const filetype = extname(filepath);

    let headContent;
    let baseContent;

    // Read in the file content in parallel
    await Promise.all([
        await readFile(join(headPath, filepath)).then(content => headContent = content),
        await readFile(join(basePath, filepath)).then(content => baseContent = content),
    ]).catch(err => {
        return err;
    });

    let diff;
    if (filetype === ".css") {
        diff = Diff.diffCss(baseContent, headContent);
    } else if (filetype === ".json") {
        diff = Diff.diffJson(baseContent, headContent);
    } else {
        diff = Diff.diffWordsWithSpace(baseContent, headContent);
    }

    if (diff.length === 0) return false;
    else return Diff.createPatch(filepath, baseContent, headContent);
};
