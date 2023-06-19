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

import fs, { promises as fsp } from "fs";
import { dirname, join, relative, extname } from "path";

import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import fg from "fast-glob";
import postcss from "postcss";
import postcssrc from "postcss-load-config";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { parseCSS, filterVars } from "./parse-css.mjs";

const { _: inputs, verbose = false } = yargs(hideBin(process.argv)).alias(
	"v",
	"verbose"
).argv;

/**
 * @description Run the provided content through PostCSS
 * @param {string} content
 * @param {import("postcss-load-config").ConfigContext} [ctx={}]
 * @returns {Promise<string>}
 */
async function processCSS(content, ctx = {}) {
  // If there's no content, don't bother
  if (!content || content === "") return;

  // Process the CSS; this will use the closest postcss config to the file
  const { plugins, options } = await postcssrc({
    cwd: process.cwd(),
    env: process.env.NODE_ENV || "development",
    ...ctx,
  }).catch((err) => Promise.reject(err));

  return postcss(plugins).process(content, {
    from: join(process.cwd(), "index.css"),
    ...options,
  }).then((r) => r?.css);
}

/**
 * @description Read in the provided input files, combine, and run them through PostCSS
 * @param {string[]} inputPaths
 * @param {string} outputPath
 * @param {import("postcss-load-config").ConfigContext} [ctx={}]
 * @returns {Promise<string>}
 */
async function readWriteAssets(inputPaths, outputPath, ctx = {}) {
  const files = await fg(inputPaths, {
    cwd: process.cwd(),
    allowEmpty: true, // Allow missing skin.css
    absolute: true,
  });

  const combined = files
    .map((filepath) => fs.readFileSync(filepath, "utf8"))
    .join("\n\n");

  // If there's no content, our job here is done
  if (!combined || combined === "") return;

  const ext = extname(outputPath).replace(".", "");

  let contents = combined;
  if (ext === "css") {
    contents = await processCSS(combined, {
      to: join(process.cwd(), outputPath),
      from: join(process.cwd(), inputPaths[0]),
      ...ctx,
    });
  }

  // Write the processed CSS to dist/index-vars.css
  return writeAssets(contents, outputPath);
}

/**
 * @description Read in the provided input files, combine, and run them through PostCSS
 * @param {string} contents
 * @param {string} outputPath
 * @returns {Promise<string>}
 */
async function writeAssets(contents, outputPath) {
  if (!contents || contents === "") return;

  /** Create the directory first if it doesn't exist */
  if (!fs.existsSync(dirname(join(process.cwd(), outputPath)))) {
    fs.mkdirSync(dirname(join(process.cwd(), outputPath)), {
      recursive: true,
    });
  }

  // Write the processed CSS to dist/index-vars.css
  return fsp
    .writeFile(join(process.cwd(), outputPath), contents, {
      encoding: "utf8",
    })
    .then(() => {
      if (verbose) {
        console.log(
          `   ✔ wrote ${relative(process.cwd(), outputPath)} [${contents.length
          } bytes]`
        );
      }

      return contents;
    });
}

/**
 * Process CSS variables looking for all class names, variable definitions,
 * and any used variables; for each color stop and scale, filter the variables
 * for those matching the component; check all used variables to find those
 * relevant to only this component; write out the variables to a vars.css file
 * @param {String} source
 * @param {Object} options
 * @param {String} options.pkgName
 * @param {Boolean} options.isLegacy
 * @returns {Promise}
 */
async function onlyComponentVars(source, options) {
  /**
   * 5. Process CSS variables looking for all class names, variable definitions, and any used variables
   * @todo should these be sourced from the combined index-vars.css in dist?
   */
  const { classNames, varDefinitions, usedVars } = await parseCSS(source);

  /**
   * 6. For each color stop and scale, filter the variables for those matching the component
   * This data is used later to report on and document the available variables
   */
  const { mods, a11y, global, component } = filterVars(usedVars, options);

  /** metadata/mods.md */
  await writeAssets(
    [
      "| Modifiable custom properties |\n| --- |",
      ...mods.map((result) => `| \`${result}\` |`),
    ].join("\n"),
    "metadata/mods.md"
  );

  /** dist/custom-properties.json */
  await writeAssets(
    JSON.stringify({ mods, a11y, global, component }, null, 2),
    "dist/custom-properties.json"
  );

  // If there are no variables used, no need to write out the files
  if (!component || component.length === 0) return;

  /** @todo do we want the first value or the last one? */
  const data = [...varDefinitions.entries()].map(([key, value]) => {
    if (key.startsWith("--highcontrast")) return;
    return `  ${key}: ${value[0]};`;
  })

  const varsOnlyContent = await processCSS(
    `${[...classNames].join(",")} {${data.join("")}}`,
    {
      to: join(process.cwd(), "dist/vars.css"),
      from: join(process.cwd(), "index.css"),
    }
  );

  return writeAssets(varsOnlyContent, "dist/vars.css");
}

/**
 * For now this is running in the context of the package that's being built
 */
async function main() {
  /**
   * Read in the component's package data to determine which build method to use
   */
  const pkg = await fsp
    .readFile(join(process.cwd(), "package.json"))
    .then(JSON.parse)
    .catch(() => {});

  /** If there's no package.json data, nothing to do */
  if (!pkg || !pkg.name) {
    throw new Error(
      `No package.json data was found at ${process.cwd()}. Ensure this script is running at the root of a component directory.`
    );
  }

  /** If this component does not depend on tokens as a peerDependency, use the legacy build approach */
  const isLegacy = !pkg.peerDependencies?.["@spectrum-css/tokens"];

  if (verbose) {
    console.log(
      `🏗️  Building ${pkg.name} using the ${
        isLegacy ? "legacy" : "modern"
      } build approach.\n--------------------\n`
    );
  }

  const promises = [];

  /**
   * 1. Combine content in index.css & skin.css (if it exists); output as index-vars.css
   */
  const indexCSS = readWriteAssets(
    [
      "index.css",
      "skin.css",
      "themes/spectrum.css", // spectrum comes first
      "themes/*.css",
    ],
    "dist/index.css"
  ).then((contents) => {
    // Copy index as index-vars to maintain backwards compat
    try {
      fs.copyFileSync(
        join(process.cwd(), "dist/index.css"),
        join(process.cwd(), "dist/index-vars.css")
      );
    } catch (error) {
      console.error(error);
    }

    // Use this data to generate our vars.css file
    return onlyComponentVars(contents, {
      pkgName: pkg.name,
      isLegacy,
    });
  });

  promises.push(indexCSS);

  /** Do NOT run the following for legacy builds */
  if (isLegacy) return Promise.all(promises);

  /**
   * 2. If this is NOT a legacy component; combine styles and themes
   * 	into an index-base.css
   */
  const indexBase = readWriteAssets(
    [
      "index.css",
      "themes/spectrum.css", // spectrum comes first
      "themes/*.css",
    ],
    "dist/index-base.css"
  );

  promises.push(indexBase);

  /**
   * 3. If this is NOT a legacy component and there are themes, process them individually
   */
  const themes = await fg(["themes/*.css", "!themes/spectrum.css"], {
    cwd: process.cwd(),
  });

  if (fs.existsSync(join(process.cwd(), "themes/spectrum.css"))) {
    promises.push(
      readWriteAssets(["themes/spectrum.css"], "dist/themes/spectrum.css")
    );
  }

  promises.push(
    ...themes.map(async (theme) => readWriteAssets([theme], `dist/${theme}`))
  );

  /**
   * 4. If this is NOT a legacy component, combine theme styles into an index-theme.css with spectrum first
   */
  const indexTheme = readWriteAssets(
    [
      "themes/spectrum.css", // spectrum comes first
      "themes/*.css",
    ],
    "dist/index-theme.css"
  );

  promises.push(indexTheme);

  /** Wait for all the promises to conclude */
  return Promise.all(promises);
}

/** Get the arguments passed to the script */
const pwd = process.cwd();
let changeDir = false;

/** Change the working directory to the component */
if (fs.existsSync(join(__dirname, "../components", inputs[0]))) {
  process.chdir(join(__dirname, "../components", inputs[0]));
  changeDir = true;
}

/** Run the main function */
await main().catch((err) => {
	console.error(err);
	process.exit(1);
});

/** Restore the original working directory */
if (changeDir) process.chdir(pwd);
