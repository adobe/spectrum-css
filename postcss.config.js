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

/**
 * @todo: Importing commons assets such as extends brings along all their comments
 * which is not ideal. We should be able to strip them out or make the extends available
 * to all components without having to import them.
 */

const { existsSync } = require("fs");
const { sep, join, basename, dirname } = require("path");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const fetchComponentMetadata = require("./tasks/fetch-metadata-from-css");

/**
 * @description This PostCSS config determines which file
 * to load based on env variable
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({ env = "development", file, options = {} }) => {
    const inputDirname = typeof file === "string" ? dirname(file) : file.dirname;
    const inputBasename = typeof file === "string" ? basename(file) : file.basename;
    const { skipLint = false } = options;

    const isProduction = Boolean(env === "production");

    const {
        // _: input,
        output,
        lint = !skipLint,
        map = options.map ?? !isProduction ? { inline: false } : false,
    } = yargs(hideBin(process.argv)).argv;

    let prefix = "spectrum";

    const isNodeModules = Boolean(inputDirname.includes("node_modules"));
    if (isNodeModules)
        return {
            ...options,
            map,
            plugins: {},
        };

    // Prefer the foldername provided by the NX_TASK_TARGET_PROJECT env variable
    let foldername = process.env.NX_TASK_TARGET_PROJECT;
    if (!foldername) {
        // If we didn't get a foldername from the env variable, try to get it from the file
        const parts = inputDirname.split(sep);
        if (parts.includes("components")) {
            foldername = parts[parts.indexOf("components") + 1];
        }
    }

    let isLegacy = false;
    if (process.env.NX_TASK_TARGET_CONFIGURATION) {
        isLegacy = Boolean(process.env.NX_TASK_TARGET_CONFIGURATION === "legacy");
    }

    // If we got a foldername from the interpretation above, use it to set the paths
    const cwd = foldername ? join(__dirname, "components", foldername) : process.cwd();
    const from = inputDirname && inputBasename ? join(inputDirname, inputBasename) : join(cwd, "index.css");
    const to = output ?? join(cwd, "dist/index.css");

    let metadata = fetchComponentMetadata(from);
    if (!metadata && existsSync(join(cwd, "index.css"))) {
        metadata = fetchComponentMetadata(join(cwd, "index.css"));
    }

    if (metadata && Object.keys(metadata).length && metadata.namespace) {
        prefix = metadata.namespace;
    }

    // Determine if this is an express file
    const isExpress = Boolean(basename(from, ".css") === "express");
    const isTheme = isExpress || Boolean(basename(from, ".css") === prefix);

    return {
        ...options,
        map,
        plugins: {
            /* --------------------------------------------------- */
            /* ------------------- IMPORTS ---------------- */
            /** @link https://github.com/postcss/postcss-import#postcss-import */
            "postcss-import": {
                root: cwd,
                addModulesDirectories: [join(cwd, "node_modules"), join(__dirname, "node_modules")],
            },
            /* --------------------------------------------------- */
            /* ------------------- SASS-LIKE UTILITIES ----------- */
            "postcss-each": {},
            "postcss-nesting": { noIsPseudoSelector: true },
            /**
             * @link https://github.com/csstools/postcss-extend-rule
             * @note replacement for postcss-inherit
             */
            "postcss-extend-rule": {
                onRecursiveExtend: "throw",
                onUnusedExtend: "ignore",
            },
            /* --------------------------------------------------- */
            /* ------------------- ORGANIZE/DEDUPE --------------- */
            "@spectrum-tools/postcss-transform-logical": {},
            "postcss-autocorrect": {},
            "postcss-combine-media-query": {},
            /** @note: this does not sort rules */
            "postcss-sorting": {
                order: ["custom-properties", "declarations", "rules", "at-rules"],
            },
            "postcss-merge-rules": {},
            "postcss-combine-duplicated-selectors": {},
            /* --------------------------------------------------- */
            /* ------------------- VARIABLE PARSING -------------- */
            /**
             * @note only used in migrated builds
             * @todo could this be broken out into smaller, focused plugins?
             *
             * @example @\container style(--system: express) -> .spectrum--express
             * @link https://blog.logrocket.com/new-css-style-queries/
             * @link https://developer.chrome.com/blog/style-queries/
             *
             * @note noFlatVariables: (default=false) true is used for index-base.css
             * @note noSelectors: (default=false) true is used for index-theme.css & themes/*.css
             */
            "@spectrum-tools/postcss-splitinator": !isLegacy
                ? {
                      prefix,
                      keyIdentifier: metadata && metadata.component ? metadata.component : "",
                      noSelectors: isTheme || Boolean(basename(to, ".css") === "index-theme"),
                      noFlatVariables: Boolean(basename(to, ".css") === "index-base"),
                  }
                : false,
            /**
             * @note this is only running on updated components in the themes/express.css file
             * or on the vars.css build
             */
            "@spectrum-tools/postcss-combine-selectors": isTheme
                ? {
                      selector: isExpress ? `.${prefix}--express` : `.${prefix}`,
                      customPropertiesOnly: Boolean(basename(to, ".css") === "vars"),
                      ignoreList: [/^--highcontrast/, /^--mod/, /^--spectrum/],
                  }
                : { customPropertiesOnly: Boolean(basename(to, ".css") === "vars") },
            /* --------------------------------------------------- */
            /* ------------------- POLYFILLS --------------------- */
            /** @note [CSS-289] Coordinating with SWC */
            // "postcss-hover-media-feature": {},
            /**
             * @todo should we be documenting this for downstream users rather
             * than polyfilling the features ourselves? what if they want to
             * use a different support matrix?
             *
             * @note stage 2 (default); stage 4 === stable
             * @link https://github.com/csstools/postcss-plugins
             * @link https://preset-env.cssdb.org/features/#stage-2
             */
            "postcss-preset-env": !isProduction
                ? {
                      stage: 3,
                      env,
                      features: {
                          "logical-properties-and-values": false,
                          clamp: true,
                          "color-functional-notation": true,
                          "dir-pseudo-class": { preserve: true },
                          "nesting-rules": false, // { noIsPseudoSelector: true },
                          // "focus-visible-pseudo-class": true,
                          // https://github.com/jsxtools/focus-within
                          "focus-within-pseudo-class": true,
                          "font-format-keywords": true,
                          "not-pseudo-class": true,
                          "opacity-percentage": true,
                          // https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme
                          "prefers-color-scheme-query": true,
                      },
                  }
                : {},
            /* --------------------------------------------------- */
            /* ------------------- CLEAN-UP TASKS ---------------- */
            "postcss-discard-comments": {
                removeAll: true, // isProduction,
                /* not production? just remove the license data */
                // remove: !isProduction ? (comment) => {
                //   if (comment && comment.startsWith("!")) return true;
                //   return false;
                // } : undefined,
            },
            cssnano: {
                preset: [
                    "lite",
                    {
                        normalizeWhitespace: false,
                        discardComments: true,
                        orderedValues: {},
                        mergeRules: {},
                        uniqueSelectors: {},
                        cssDeclarationSorter: {},
                    },
                ],
            },
            /* Ensure the license is at the top of the file */
            "postcss-licensing": {
                filename: "COPYRIGHT",
                cwd: __dirname,
                skipIfEmpty: true,
            },
            /* --------------------------------------------------- */
            /* ------------------- REPORTING --------------------- */
            "@spectrum-tools/postcss-prettier": {},
            stylelint: lint
                ? {
                      configFile: join(__dirname, "stylelint.config.js"),
                      allowEmptyInput: true,
                      cache: !isProduction,
                      ignorePath: join(__dirname, ".stylelintignore"),
                      reportNeedlessDisables: true,
                      reportInvalidScopeDisables: true,
                  }
                : false,
            "postcss-reporter": {
                clearReportedMessages: true,
            },
        },
    };
};
