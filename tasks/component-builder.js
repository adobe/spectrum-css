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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

/**
 * A source of truth for commonly used directories
 * @type {object} dirs
 * @property {string} dirs.root
 * @property {string} dirs.components
 * @property {string} dirs.site
 * @property {string} dirs.publish
 */
const dirs = {
	root: path.join(__dirname, ".."),
	components: path.join(__dirname, "../components"),
	site: path.join(__dirname, "../site"),
	publish: path.join(__dirname, "../dist"),
};

/** @type {(string) => string} */
const relativePrint = (filename, { cwd = dirs.root }) => path.relative(cwd, filename);

const bytesToSize = function (bytes) {
	if (bytes === 0) return "0";

	const sizes = ["bytes", "KB", "MB", "GB", "TB"];
	// Determine the size identifier to use (KB, MB, etc)
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
	return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string}
 */
function getPackageFromPath(filePath = process.cwd()) {
	const parts = filePath.split(path.sep);

	// Capture component name from a local or node_modules syntax
	if (parts.includes("components") || parts.includes("@spectrum-css")) {
		const index = parts.indexOf("components") ?? parts.indexOf("@spectrum-css");
		return parts[index + 1];
	}

	// Check local root-level packages such as ui-icons & tokens
	if (parts.includes("ui-icons")) return "ui-icons";
	if (parts.includes("tokens")) return "tokens";

	// This is a fallback best-guess scenario:
	// Split the path from root dir and capture the first folder as the package name
	const guessParts = path.relative(dirs.root, filePath).split(path.sep);
	return guessParts[0];
}

/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} content
 * @param {RegExp} [regex=]
 * @returns Set<string>
 */
async function extractProperties(
	content,
	regex = /(--mod-(?:\w|-)+)(?!:|\w|-)/g
) {
    if (!content) return new Set();

	// assign the matches to an array through the spread operator and map the results to the first capture group
	return new Set([...content.matchAll(regex)].map((match) => match[1]) ?? []);
}

/**
 * Extract custom property modifers to report
 * @param {string} filepath
 * @param {object} [options={}]
 * @returns Promise<string|string[]|void>
 */
async function extractModifiers(filepath, { cwd } = {}) {
    if (!fs.existsSync(filepath)) return Promise.resolve();

    const content = await fsp.readFile(filepath, { encoding: "utf-8" });

    /* Remove duplicates using a Set and sort the results (default is alphabetical) */
    const found = await extractProperties(content);
    const spectrum = await extractProperties(content, /(--spectrum-(?:\w|-)+)(?!:|\w|-)/g);
    const system = await extractProperties(content, /(--system-(?:\w|-)+)(?!:|\w|-)/g);
    const highContrast = await extractProperties(content, /(--highcontrast-(?:\w|-)+)(?!:|\w|-)/g);

    const selectors = new Set();
    const root = postcss.parse(content);
    root.walkRules(rule => {
        if (rule.selector) selectors.add(rule.selector);
    });

    if (!fs.existsSync(path.join(cwd, "dist"))) {
        fs.mkdirSync(path.join(cwd, "dist"));
    }

    const promises = [];
    if (found.size > 0) {
        // If the metadata folder doesn't exist, create it
        if (!fs.existsSync(path.join(cwd, "metadata"))) {
            fs.mkdirSync(path.join(cwd, "metadata"));
        }

        promises.push(
            fsp.writeFile(
                path.join(cwd, `metadata/mods.md`),
                prettier.format(
                    [
                        "| Modifiable custom properties |\n| --- |",
                        ...[...found].sort().map((result) => `| \`${result}\` |`),
                    ].join("\n"),
                    { parser: "markdown" }
                ),
                { encoding: "utf-8" }
            )
            .then(() => `${"✓".green}  ${"metadata/mods.md".padEnd(20, " ").yellow}  ${'-- deprecated --'.gray}`)
            .catch((err) => {
                if (!err) return;
                console.log(`${"✗".red}  ${"metadata/mods.md".yellow} not written`);
                return Promise.reject(err);
            })
        );
    }

    promises.push(
        fsp.writeFile(
            path.join(cwd, `dist/metadata.json`),
            prettier.format(
                JSON.stringify({
                    selectors: [...selectors].sort(),
                    mods: [...found].sort(),
                    spectrum: [...spectrum].sort(),
                    system: [...system].sort(),
                    a11y: [...highContrast].sort(),
                }, null, 2),
                { parser: "json" }
            ),
            { encoding: "utf-8" }
        ).then(() => {
            const stats = fs.statSync(path.join(cwd, `dist/metadata.json`));
            return [
                `${"✓".green}  ${"dist/metadata.json".padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`,
                `🔍  ${`${found.size}`.underline} modifiable custom propert${found.size === 1 ? "y" : "ies"}`,
                `🔍  ${`${selectors.size}`.underline} selector${found.size === 1 ? "" : "s"}`,
            ];
        }).catch((err) => {
            if (!err) return;
            console.log(`${"✗".red}  ${"dist/metadata.json".yellow} not written`);
            return Promise.reject(err);
        })
    );

    return Promise.all(promises);
}

/**
 * Process the provided CSS input and write out to a file
 * @param {string} content
 * @param {string} input
 * @param {string} output
 * @param {object} [options={}]
 * @param {string} [options.cwd=]
 * @param {boolean} [options.clean=false]
 * @param {import('postcss-load-config').ConfigContext} [options.postCSSOptions]
 * @returns {Promise<(string|void)[]>} Returns either the CSS content or void
 */
async function processCSS(content, input, output, {
    cwd,
    clean = false,
    ...postCSSOptions
} = {}) {
    if (!content) return Promise.reject(new Error(`This function requires content be provided`));

    const { plugins, options } = await postcssrc(
        {
            cwd,
            env: process.env.NODE_ENV ?? "development",
            from: input,
            to: output,
            verbose: false,
            ...postCSSOptions,
        },
        __dirname // This is the path to the directory where the postcss.config.js lives
    );

    const result = await postcss(plugins).process(content, options);

    if (result.error) return Promise.reject(result.error);

    if (!result.css) return Promise.reject(new Error(`No CSS was generated from the provided content for ${relativePrint(input, { cwd })}`));

    if (!fs.existsSync(path.dirname(output))) {
        await fsp.mkdir(path.dirname(output), { recursive: true }).catch((err) => {
            if (!err) return;
            // @todo pretty print these are relative paths
            console.log(`${"✗".red}  problem making the ${relativePrint(path.dirname(output), { cwd }).yellow} directory`);
            return Promise.reject(err);
        });
    }

    const promises = [];

    if (result.css) {
        promises.push(
            fsp.writeFile(output, result.css.trimStart()).then(() => {
                const stats = fs.statSync(output);
                return `${"✓".green}  ${relativePrint(output, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`;
            }).catch((err) => {
                if (!err) return;
                console.log(`${"✗".red}  ${relativePrint(output, { cwd }).yellow} not written`);
                return Promise.reject(err);
            })
        );
    }

    if (result.map) {
        promises.push(
            fsp.writeFile(`${output}.map`, result.map.toString().trimStart()).then(() => {
                const stats = fs.statSync(output);
                return `${"✓".green}  ${relativePrint(`${output}.map`, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`;
            }).catch((err) => {
                if (!err) return;
                console.log(`${"✗".red}  ${relativePrint(`${output}.map`, { cwd }).yellow} not written`);
                return Promise.reject(err);
            })
        );
    }

    return Promise.all(promises);
}

/**
 * Fetch content from glob input and optionally combine results
 * @param {(string|RegExp)[]} globs
 * @param {object} options
 * @param {string} [options.cwd=]
 * @param {string} [options.shouldCombine=false] If true, combine the assets read in into one string
 * @param {import('fast-glob').Options} [options.fastGlobOptions={}] Additional options for fast-glob
 * @returns {Promise<{ content: string, input: string }[]>}
 */
async function fetchContent(globs = [], {
    cwd,
    shouldCombine = false,
    ...fastGlobOptions
} = {}) {
    const files = await fg(globs, {
        onlyFiles: true,
        ...fastGlobOptions,
        cwd,
    });

    if (!files.length) return Promise.resolve([]);

    const fileData = await Promise.all(
        files.map(async (file) => ({
            input: path.join(cwd, file),
            content: await fsp.readFile(path.join(cwd, file), "utf8")
        }))
    );

    // Combine the content into 1 file; @todo do this in future using CSS imports
    if (shouldCombine) {
        let content = "";
        fileData.forEach(dataset => {
            if (dataset.content) content += '\n\n' + dataset.content;
        });

        return Promise.resolve([{
            content,
            input: fileData[0].input
        }]);
    }

    return Promise.all(
        files.map(async (file) => ({
            content: await fsp.readFile(path.join(cwd, file), "utf8"),
            input: file,
        }))
    );
}

/**
 * A utility to copy a file from one local to another
 * @param {string} from
 * @param {string} to
 * @param {object} [config={}]
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @returns Promise<string|void>
 */
async function copy(from, to, { cwd } = {}) {
    if (!fs.existsSync(from)) return;

    const content = await fsp.readFile(from, { encoding: "utf-8" });
    if (!content) return;
    /** @todo add support for injecting a deprecation notice as a comment after the copyright */
    return fsp.writeFile(to, content, { encoding: "utf-8" })
        .then(() => `${"✓".green}  ${relativePrint(to, { cwd }).padEnd(20, " ").yellow}  ${"-- deprecated --".gray}`)
        .catch((err) => {
            if (!err) return;
            console.log(`${"✗".red}  ${relativePrint(from, { cwd }).gray} could not be copied to ${relativePrint(to, { cwd }).yellow}`);
            return Promise.reject(err);
        });
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false } = {}) {
    // Nothing to do if there's no input file
    if (!fs.existsSync(path.join(cwd, "index.css"))) return;

    const content = await fsp.readFile(path.join(cwd, "index.css"), "utf8");

    return Promise.all([
        // This was buildCSS
        processCSS(content, path.join(cwd, "index.css"), path.join(cwd, "dist", "index.css"), { cwd, clean })
            .then(async (reports) =>
                Promise.all([
                    // After building, extract the available modifiers
                    extractModifiers(path.join(cwd, "dist/index.css"), { cwd }),
                    // Copy index.css to index-vars.css for backwards compat, log as deprecated
                    copy(path.join(cwd, "dist/index.css"), path.join(cwd, "dist/index-vars.css"), { cwd }),
                ])
                    // Return the console output to be logged
                    .then(r => [r, ...reports])
            ),
        // This was buildCSSWithoutThemes
        processCSS(content, path.join(cwd, "index.css"), path.join(cwd, "dist/index-base.css"), {
            cwd,
            clean,
            lint: false,
        }),
    ]);
}

/**
 * The builder for the individual themes assets
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function buildThemes({ cwd = process.cwd(), clean = false } = {}) {
    // This fetches the content of the files and returns an array of objects with the content and input paths
    const contentData = await fetchContent(["themes/*.css"], { cwd, clean });

    // Nothing to do if there's no content
    if (!contentData || contentData.length === 0) return;

    return Promise.all(
        contentData.map(async ({ content, input }) => {
            const promises = [
                processCSS(content, path.join(cwd, input), path.join(cwd, "dist", input), { cwd, clean, lint: false })
            ];

            // Additional processing for the express output because it includes both it and spectrum's content
            if (path.basename(input, ".css") === "express") {
                promises.push(
                    processCSS(content, path.join(cwd, input), path.join(cwd, "dist/index-theme.css"), { cwd, clean, lint: false })
                );
            }

            return Promise.all(promises);
        })
    );
}

/**
 * The main entry point for this tool; this builds a CSS component
 * @param {object} config
 * @param {string} [config.componentName=process.env.NX_TASK_TARGET_PROJECT] - Current working directory for the component being built
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @param {boolean} [config.clean=false] - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function main({
    componentName = process.env.NX_TASK_TARGET_PROJECT,
    cwd,
    clean = false
} = {}) {
    if (!cwd && (componentName)) {
        cwd = path.join(dirs.components, componentName);
    }

    if (!componentName) {
        componentName = cwd ? getPackageFromPath(cwd) : process.env.NX_TASK_TARGET_PROJECT;
    }

    const key = `[build] ${`@spectrum-css/${componentName}`.cyan}`;
    console.time(key);

    return Promise.all([
        build({ cwd, clean }),
        buildThemes({ cwd, clean }),
    ]).then((report) => {
        const logs = report.flat(Infinity).filter(Boolean);

        console.log(`\n\n${key} 🔨`);
        console.log(`${"".padStart(30, "-")}`);

        if (logs && logs.length > 0) {
            logs.sort((a,) => {
                if (a.includes('✓')) return -1;
                if (a.includes('🔍')) return 0;
                return 1;
            }).forEach(log => console.log(log));
        } else console.log(`No assets created.`.gray)

        console.log(`${"".padStart(30, "-")}`);
        console.timeEnd(key);
        console.log("");

    }).catch((err) => {

        console.log(`\n\n${key} 🔨`);
        console.log(`${"".padStart(30, "-")}`);

        console.trace(err);

        console.log(`${"".padStart(30, "-")}`);
        console.timeEnd(key);
        console.log("");

        process.exit(1);
    });
};

exports.processCSS = processCSS;
exports.fetchContent = fetchContent;
exports.default = main;
