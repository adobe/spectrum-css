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

const { existsSync, mkdirSync, readdirSync } = require("fs");
const { writeFile, readFile } = require("fs").promises;
const { join, sep, dirname } = require("path");

const fg = require("fast-glob");
const postcss = require("postcss");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

require("colors");

/**
 * A global object to store the pathing information for the script
 */
const pathing = {
  root: join(__dirname, ".."),
  components: join(__dirname, "..", "components"),
};

/**
 * A global list of all the packages available to compare
 */
const allPackages = [
  ...(readdirSync(pathing.components, { withFileTypes: true })
    ?.filter((file) => file.isDirectory())
    .map((file) => file.name) ?? []),
  "ui-icons",
  "tokens",
];

/**
 * A global object for console logging different types of messages
 * in a consistent way
 */
const log = {
  error: (err) => console.trace(`${err}\n\n`),
  write: (msg) => process.stdout.write(msg),
};

/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 */
async function extractProperties(
  filepath,
  config = new Map(),
) {
  if (!filepath) return Promise.reject("No file specified.");
  if (config.size === 0) return Promise.reject("No config specified.");

  /* Read the file and find all the matches */
  const root = await readFile(filepath, "utf-8").then(result => {
    return postcss.parse(result, { from: filepath });
  }).catch((err) => {
    return Promise.reject(err);
  });

  const metadata = new Map([...config.keys()].map((key) => [key, new Set()]));

  root.walkDecls((decl) => {
    for (const [key, regexes] of config.entries()) {
      for (const regex of regexes) {
        // Start by testing the property
        if (regex.test(decl.prop)) {
          metadata.set(key, metadata.get(key).add(decl.prop));
        }

        // Next, test the value for any property references
        if (!decl.value.includes("var(")) continue;

        const foundProps = decl.value.matchAll(/var\((--[a-z|0-9|-]+)[)|,]/g);
        [...foundProps].forEach((found) => {
          const prop = found[1];
          if (regex.test(prop)) {
            metadata.set(key, metadata.get(key).add(prop));
          }
        });
      }
    }
  });

  return metadata;
}

async function processPackage(packageName) {
  if (!packageName) return Promise.reject("No package specified.");

  let dir = dirname(require.resolve(`@spectrum-css/${packageName}/package.json`));
  if (!dir && existsSync(join(pathing.root, packageName))) {
    dir = join(pathing.root, packageName);
  } else if (!dir && existsSync(join(pathing.components, packageName))) {
    dir = join(pathing.components, packageName);
  }

  /* Remove duplicates using a Set and sort the results (default is alphabetical) */
  const metadata = {};

  /* Loop over the directories in the components folder and find all the first-level css files */
  const files = await fg("*.css", {
    cwd: join(dir, "dist"),
    absolute: true,
    /* Skip the vars and tokens files */
    ignore: [
      "**/node_modules/**",
      "**/metadata/**",
      "themes/*.css",
      "index-theme.css",
    ],
    onlyFiles: true,
  });

  for (const filepath of files) {
    const matches = await extractProperties(filepath, new Map([
      ["mods", [/^--mod-/]],
      ["internal", [new RegExp(`^--spectrum-${packageName}-`)]],
      ["globals", [new RegExp(`^--spectrum-(?!${packageName})`)]],
      ["a11y", [/^--highcontrast-/g]],
      ["other", [/^--(?!system|mod|spectrum|highcontrast)-/]],
    ]));

    matches.forEach((value, key) => {
      if (!metadata[key]) metadata[key] = [];
      value.forEach((match) => metadata[key].push(match));
    });
  }

  const hasProperties = Object.values(metadata).some((value) => value.length > 0);

  if (!hasProperties) {
    log.write(
      `${"⚠️".yellow}  No custom properties in ${`@spectrum-css/${dir.split(sep).pop()}`.magenta
      }`
    );
    return;
  }

  /* Remove duplicates using a Set and sort the results (default is alphabetical) */
  Object.entries(metadata).forEach(([key, value]) => {
    metadata[key] = [...new Set(value)].sort();
  });

  /* -- JSON Output -- */
  const destPath = `${dir}/dist`;
  // If the dist folder doesn't exist yet, create it
  if (!existsSync(destPath)) mkdirSync(destPath);

  // Write the JSON output to the dist folder
  return writeFile(`${destPath}/metadata.json`, JSON.stringify(metadata, null, 2));
}

async function main(packages) {
  // Default to all component directories
  if (packages.length === 0) packages = allPackages;

  /* Loop over the directories passed in as arguments */
  return Promise.all(packages.map(processPackage));
}

let {
  _: packages,
} = yargs(hideBin(process.argv)).argv;

main(packages).catch((err) => {
  log.error(err);
  process.exit(1);
});
