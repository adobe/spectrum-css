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

const { statSync, existsSync, readdirSync } = require("fs");
const { join, relative } = require("path");

const github = require("@actions/github");
const glob = require("@actions/glob");

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
                core.info(`- ${relative(path, file)}  |  ${exports.bytesToSize(statSync(file).size)}`);
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
 * Use the provided glob pattern to fetch the files and their sizes from the
 * filesystem and return a Map of the files and their sizes.
 * @param {string} rootPath
 * @param {string[]} patterns
 * @returns {Promise<Map<string, number>>}
 */
exports.fetchFilesAndSizes = async function (rootPath, patterns = [], { core }) {
    if (!existsSync(rootPath)) return new Map();

    /** @type import('@actions/glob').Globber */
    const globber = await glob.create(patterns.map((f) => join(rootPath, f)).join("\n"));

    /** @type Awaited<ReturnType<import('@actions/glob').Globber['glob']>> */
    const files = await globber.glob();

    // If no files are found, fail the action with a helpful message
    if (files.length === 0) {
        debugEmptyDirectory(rootPath, patterns, { core });
        return new Map();
    }

    core.info(`Found ${files.length} files matching the glob pattern ${patterns.join(", ")}.`);

    // Fetch the files and their sizes, creates an array of arrays to be used in the table
    return new Map(
        files
            .map((f) => {
                const relativePath = relative(rootPath, f);
                const stat = statSync(f);
                if (!stat || stat.isDirectory()) return;
                return [relativePath, stat.size];
            })
            .filter(Boolean),
    );
};
