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
const path = require("path");

const postcss = require("postcss");

/**
 * @description This PostCSS config determines which file
 * to load based on env variable
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({
  env = "development",
  file,
  options,
}) => {
   let {
    map = { inline: false },
    varsOnly = false,
    skipLint = false,
    flatten = true,
   } = options;

  // Prefer the foldername provided by the NX_TASK_TARGET_PROJECT env variable
  let foldername = process.env.NX_TASK_TARGET_PROJECT;
  if (!foldername) {
    // If we didn't get a foldername from the env variable, try to get it from the file
    const parts = file?.dirname.split(path.sep);
    if (parts.includes("components")) {
      foldername = parts[parts.indexOf("components") + 1];
    }
  }

  let isLegacy = false;
  if (process.env.NX_TASK_TARGET_CONFIGURATION) {
    isLegacy = Boolean(process.env.NX_TASK_TARGET_CONFIGURATION === "legacy");
  }

  varsOnly =
    process.argv.slice(2).includes("--only-vars") ?? varsOnly;
  skipLint =
    process.argv.slice(2).includes("--skip-lint") ?? skipLint;
  flatten = !(process.argv.slice(2).includes("--no-flatten") ?? flatten);

  // If we got a foldername from the interpretation above, use it to set the paths
  const cwd = foldername
    ? path.join(__dirname, "components", foldername)
    : process.cwd();
  const from = file
    ? path.join(file.dirname, file.basename)
    : path.join(cwd, "index.css");

  const basename = path.basename(from, ".css");

  // Determine if this is an express file
  const isExpress = Boolean(basename === "express");
  const isTheme = isExpress || Boolean(basename === "spectrum");
  const isProduction = Boolean(env === "production");

  // const tokens = isLegacy ? [
  // 	require.resolve("@spectrum-css/vars/dist/spectrum-global.css"),
  // 	require.resolve("@spectrum-css/vars/dist/spectrum-light.css"),
  // 	require.resolve("@spectrum-css/vars/dist/spectrum-medium.css"),
  // 	require.resolve("@spectrum-css/vars/dist/components/index.css")
  // ] : [
  // 	path.join(__dirname, "tokens/dist/index.css")
  // ];

  function fetchComponentMetadata(from) {
    let ret;

    // Check the file for it's leading metadata
    const content = fs.readFileSync(from, "utf8");
    const root = postcss.parse(content, { from });
    root.walkComments((comment) => {
      if (!comment.text.startsWith("*")) return;
      const lines = comment.text.split("\n");
      if (!lines.length) return;

      ret = lines.reduce((acc, line) => {
        const keyword = line.match(/@([a-z]+)\s/)?.[1];
        if (!keyword) return acc;
        const value = line.replace("*", "").replace(` @${keyword} `, "").trim();
        if (!value) return acc;
        acc[keyword] = value;
        return acc;
      }, {});
    });

    return ret;
  }

  let metadata = fetchComponentMetadata(from);
  if (!metadata && fs.existsSync(path.join(cwd, "index.css"))) {
    metadata = fetchComponentMetadata(path.join(cwd, "index.css")) ?? {};
  }

  if (metadata.namespace && metadata.component) {
    metadata.classname = `${metadata.namespace}-${metadata.component}`;
  }

  return {
    ...options,
    map,
    plugins: {
      /* --------------------------------------------------- */
      /* ------------------- IMPORTS ---------------- */
      /** @link https://github.com/postcss/postcss-import#postcss-import */
      "postcss-import": {
        root: cwd,
        addModulesDirectories: [
          path.join(cwd, "node_modules"),
          path.join(__dirname, "node_modules"),
        ],
      },
      /* --------------------------------------------------- */
      /* ------------------- KEY PROCESSING ---------------- */
      "postcss-each": {},
      /** @link https://github.com/csstools/postcss-extend-rule */
      "postcss-extend-rule": {
        onRecursiveExtend: "throw",
        onUnusedExtend: "ignore",
      },
      stylelint: !skipLint
        ? {
            fix: !isProduction,
            configFile: path.join(__dirname, "stylelint.config.js"),
            allowEmptyInput: true,
            cache: false, // !isProduction,
            ignorePath: path.join(__dirname, ".stylelintignore"),
            reportNeedlessDisables: true,
            reportInvalidScopeDisables: true,
          }
        : false,
      /* --------------------------------------------------- */
      /* ------------------- ORGANIZE/DEDUPE --------------- */
      /**
       * @note only used in migrated builds
       * @todo could this be broken out into smaller, focused plugins?
       *
       * @note processIdentifier: this functions as a kind of style query polyfill
       * @example @\container style(--spectrum: express) -> .spectrum--express
       * @link https://blog.logrocket.com/new-css-style-queries/
       * @link https://developer.chrome.com/blog/style-queries/
       *
       * @note flatVariables: (default=true) false is used for dist/index-base.css
       * @note selectors: (default=true) false is used for themes/*.css
       */
      "@spectrum-tools/postcss-container-style-converter": !isLegacy
        ? {
            processIdentifier: (identifierValue, identifierName) => {
              if (identifierName !== "system") return identifierValue;
              if (identifierValue !== "spectrum") {
                return `spectrum--${identifierValue}`;
              }
              return identifierValue;
            },
            keyIdentifier: metadata.classname ?? "spectrum",
            selectors: !isTheme,
            flatVariables: flatten ?? false,
          }
        : false,
      /* --------------------------------------------------- */
      /* ------------------- VARIABLE PARSING -------------- */
      /**
       * @note this is only running on updated components in the themes/express.css file
       * or on the varsOnly build
       */
      "@spectrum-tools/postcss-combine-selectors": isExpress
        ? {
            selector: isExpress ? ".spectrum--express" : ".spectrum",
            ignoreList: [/^--highcontrast/, /^--mod/],
          }
        : varsOnly
        ? {
            selector: metadata.classname ? `.${metadata.classname}` : undefined,
            ignoreList: [/^--highcontrast/, /^--mod/],
          }
        : false,
      "@spectrum-tools/postcss-transform-logical": {},
      "postcss-sorting": {
        order: ["custom-properties", "declarations", "at-rules", "rules"],
        "properties-order": "alphabetical",
      },
      // "postcss-combine-duplicated-selectors": {
      // 	removeDuplicatedProperties: true,
      // },
      "postcss-combine-media-query": {},
      /** @note [CSS-289] Coordinating with SWC */
      // "postcss-hover-media-feature": {},
      /* --------------------------------------------------- */
      /* ------------------- CLEAN-UP TASKS ---------------- */
      "postcss-discard-comments": {
        removeAll: true,
      },
      /* After cleaning up comments, remove all empty rules */
      "postcss-discard-empty": {},
      /* --------------------------------------------------- */
      /* ------------------- POLYFILLS --------------------- */
      /**
       * @note stage 2 (default); stage 4 === stable
       * @link https://github.com/csstools/postcss-plugins
       * @link https://preset-env.cssdb.org/features/#stage-2
       */
      "postcss-preset-env": {
        stage: 3,
        // env,
        features: {
          "logical-properties-and-values": true,
          clamp: true,
          "color-functional-notation": true,
          "dir-pseudo-class": {
            preserve: true,
          },
          "nesting-rules": {
            noIsPseudoSelector: true,
          },
          // "focus-visible-pseudo-class": true,
          // https://github.com/jsxtools/focus-within
          "focus-within-pseudo-class": true,
          "font-format-keywords": true,
          "not-pseudo-class": true,
          "opacity-percentage": true,
          // https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme
          "prefers-color-scheme-query": true,
        },
      },
      /* Ensure the license is at the top of the file */
      "postcss-licensing": {
        filename: "COPYRIGHT",
        cwd: __dirname,
        skipIfEmpty: true,
      },
      /* --------------------------------------------------- */
      /* ------------------- REPORTING --------------------- */
      "postcss-reporter": {
        clearReportedMessages: true,
      },
    },
  };
};
