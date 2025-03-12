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

const { statSync, readFileSync, existsSync, readdirSync } = require("fs");
const { join, relative, extname, basename } = require("path");

const github = require("@actions/github");
const glob = require("@actions/glob");

/**
 * @typedef {string} PackageName - The name of the component package
 * @typedef {string} FileName - The name of the file in the component package
 * @typedef {{ isMain: boolean, hasChanged: boolean, size: { head: number, base: number }, content: { head: string | undefined, base: string | undefined } }} FileDetails - The details of the component package including the main file and the file map as well as other short-hand properties for reporting
 * @typedef {Map<FileName, FileDetails>} PackageFiles - A map of file sizes from the head and base branches keyed by filename (full path, not shorthand)
 * @typedef {(FileDetails & { packageName: PackageName, filePath: FileName, fileMap: PackageFiles })[]} DataSections - An array of file details represented as objects
 * @typedef {Map<PackageName, PackageFiles>} PackageDetails - A map of file sizes from the head and base branches keyed by filename (full path, not shorthand)
 */

/** A few helpful utility functions; v1 == PR (change); v0 == base (initial) */

/** @type {(v1: number, v0: number) => number} */
const difference = (v1, v0) => v1 - v0;
/** @type {(v1: number, v0: number) => number} */
const isRemoved = (v1, v0) => (!v1 || v1 === 0) && (v0 && v0 > 0);
/** @type {(v1: number, v0: number) => number} */
const isNew = (v1, v0) => (v1 && v1 > 0) && (!v0 || v0 === 0);

/**
 * Convert the provided difference between file sizes into a human
 * readable representation of the change.
 * @param {number} v1
 * @param {number} v0
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
 * @param {number} v1
 * @param {number} v2
 * @returns {string} The percent change in size
 */
const printPercentChange = function (v1, v0) {
    const delta = ((v1 - v0) / v0) * 100;
    if (delta === 0) return "no change";
    return `${delta.toFixed(2)}%`;
};

/**
 * From the data indexed by filename, create a detailed table of the changes in the compiled assets
 * with a full view of all files present in the head and base branches.
 * @param {PackageDetails} packageDetails
  * @returns {DataSections}
 */
const makeDataSections = function (packageDetails) {
    const sections = [];

    /** Next convert that component data into a detailed object for reporting */
    for (const [packageName, fileMap] of packageDetails) {
        for (const [filePath, details] of fileMap) {
            /** We don't need to report on components that haven't changed unless they're new or removed */
            if (!details.hasChanged) return;

            sections.push({
                packageName,
                filePath,
                minified: basename(filePath) + ".min." + extname(filePath),
                gZipped: basename(filePath) + ".min." + extname(filePath) + ".gz",
                fileMap,
                ...details,
            });
        }
    }

    return sections;
};

/**
 * List all files in the directory to help with debugging
 * @param {string} path
 * @param {string[]} pattern
 * @returns {void}
 */
function debugEmptyDirectory(path, pattern, { core }) {
    if (!existsSync(path)) {
        throw new Error(`The provided path does not exist in the workspace`);
    }

    /**
     * Recursively report on the files in the provided directory for debugging
     * @param {string} path
     * @param {{ core: import('@actions/core'), rootDir: string }} configuration
     * @returns {void}
     */
    function reportOnDirectoryFiles(path, { core, rootDir = path }) {
        readdirSync(path, { withFileTypes: true }).forEach((dirent) => {
            if (dirent.isFile()) {
                const file = join(path, dirent.name);
                if (dirent.name.startsWith(".")) return;
                core.info(`- ${relative(path, file)}  |  ${bytesToSize(statSync(file).size)}`);
            } else if (dirent.isDirectory()) {
                const dir = join(path, dirent.name);
                if (dirent.name.startsWith(".") || dirent.name === "node_modules") return;
                core.info(`${relative(rootDir, dir)}/`);
                reportOnDirectoryFiles(dir, { core, rootDir });
            }
        });
    }

    core.startGroup(`All files in ${path}`);
    reportOnDirectoryFiles(path, { core });
    core.endGroup();

    throw new Error(`No files found matching the glob pattern: ${pattern.map((p) => join(path, p)).join(", ")}`);
}

/**
 * Convert the provided byte size to a human readable format
 * @param {number} bytes
 * @returns {string} The size in human readable format
 */
const bytesToSize = function (bytes) {
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
const addComment = async function ({ search, content, token }) {
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
 * Use the provided glob pattern to fetch the files and their sizes from the
 * filesystem and return a Map of the files and their sizes.
 * @param {string[]} patterns
 * @returns {Promise<PackageDetails>} - Returns the relative path and size of the files sorted by package
 */
const fetchPackageDetails = async function (patterns = [], { headPath, basePath, core }) {
    if (patterns.length === 0) {
        core.warning(`No file pattern provided for project packages.`);
        return;
    }

    if (!existsSync(headPath) && !existsSync(basePath)) {
        core.warning(`Neither ${headPath} no ${basePath} exist in the workspace`);
        return;
    }

    /** @type import('@actions/glob').Globber */
    const globber = await glob.create(patterns.map((f) => join(headPath, f)).join("\n"), {
        implicitDescendants: false
    });

    /** @type Awaited<ReturnType<import('@actions/glob').Globber['glob']>> */
    let packages = await globber.glob();

    core.info(`Found ${packages.length} packages matching the pattern ${patterns.join(", ")}.`);

    // Remove any folders that don't have a package.json file
    packages = packages.filter((p) => {
        // Check that every package folder has a package.json asset
        if (!existsSync(join(p, "package.json"))) {
            core.warning(`The package at ${p} does not have a package.json file, skipping.`);
            return false;
        }

        return existsSync(join(p, "package.json"));
    });

    // If no files are found, fail the action with a helpful message
    if (packages.length === 0) {
        if (headPath) debugEmptyDirectory(headPath, patterns, { core });
        if (basePath) debugEmptyDirectory(basePath, patterns, { core });
        return new Map();
    }

    core.info(`From ${headPath}, found ${packages.length} packages matching the pattern ${patterns.join(", ")}.`);

    /** @type PackageDetails */
    const details = new Map();

    // Check the exports of the packages to determine which assets to include in the comparison
    for (const pkg of packages) {
        const files = new Map();
        const packagePath = join(pkg, "package.json");
        const { main, exports } = require(packagePath) ?? {};

        // If the package.json doesn't have an exports field, remove it from the array
        if (!exports) {
            core.warning(`The package at ${pkg} does not have an exports field in the package.json, skipping.`);
            packages = packages.filter((p) => p !== pkg);
        }
        else {
            // If the exports field is a string, add it to the files array
            if (typeof exports === "string") {
                const stat = statSync(join(pkg, exports));
                files.set(join(pkg, exports), {
                    isMain: main === exports,
                    size: stat.size ?? 0
                });
            }
            // If the exports field is an object, add each key to the files array
            else if (typeof exports === "object") {
                for (const key in exports) {
                    core.info(`"${exports[key]}" === "${main}"`, main === exports[key]);
                    const headStat = statSync(join(headPath, pkg, exports[key]));
                    const baseStat = statSync(join(basePath, pkg, exports[key]));

                    const headContent = headStat > 0 && readFileSync(join(headPath, pkg, exports[key]), "utf8");
                    const baseContent = baseStat > 0 && readFileSync(join(basePath, pkg, exports[key]), "utf8");

                    files.set(join(pkg, exports[key]), {
                        isMain: main === exports[key],
                        // If the content is the same, report that the file has not changed
                        hasChanged: headContent === baseContent,
                        size: {
                            head: headStat.size ?? 0,
                            base: baseStat.size ?? 0,
                        },
                        content: {
                            head: headContent,
                            base: baseContent,
                        }
                    });
                }
            }
            else {
                core.warning(`The package at ${pkg} has an exports field that is not a string or object, skipping.`);
                packages = packages.filter((p) => p !== pkg);
            }
        }

        details.set(pkg, files);
    }

    // Fetch the files and their sizes, creates an array of arrays to be used in the table
    return details;
};

module.exports = { addComment, bytesToSize, debugEmptyDirectory, difference, fetchPackageDetails, isNew, isRemoved, makeDataSections, printChange, printPercentChange };
