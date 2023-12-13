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

const { existsSync, statSync, readdirSync, mkdirSync } = require("fs");
const { readFile, writeFile } = require("fs").promises;
const { join, relative, sep, dirname, basename } = require("path");

const fg = require("fast-glob");
const tar = require("tar");
const _ = require("lodash");
const prettier = require("prettier");

const nunjucks = require("nunjucks");
const env = new nunjucks.Environment();

const { rimrafSync } = require("rimraf");
const npmFetch = require("npm-registry-fetch");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const Diff = require("diff");
const Diff2Html = require("diff2html");

require("colors");

/**
 * @typedef Metadata
 * @property {string} path - The path to the compiled asset
 * @property {string} content - The content of the compiled asset
 * @property {number} size - The size of the compiled asset
 */

/**
 * @typedef ComponentData
 * @property {string} packageName - The name of the package
 * @property {string} tag - The latest tag on npm
 * @property {Object} pkg - The package.json data for the package
 * @property {Map<string,Metadata>} fileMap - A map of the compiled assets for a package keyed by filename
 * @property {string[]} warnings - Any warnings that were generated during the process
*/

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
 * Converts a number of bytes to a human-readable string
 * @param {Number} bytes
 * @returns {String}
 */
const bytesToSize = function (bytes) {
  if (bytes === 0) return "0";

  const sizes = ["bytes", "KB", "MB", "GB", "TB"];
  // Determine the size identifier to use (KB, MB, etc)
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

/* Adds the bytesToSize filter to nunjucks */
env.addFilter("bytesToSize", bytesToSize);

/* Adds a pretty printer filter to nunjucks for objects */
env.addFilter("print", (data) => JSON.stringify(data, null, 2));

/**
 * A global object for console logging different types of messages
 * in a consistent way
 */
const log = {
  error: (err) => console.trace(`${err}\n\n`),
  write: (msg) => process.stdout.write(msg),
  writeTable: (data, { min = 20, max = 30 } = {}) => {
    if (!Array.isArray(data)) {
      data = [data];
    }

    // This utility function is used to print a table of data to the console
    const table = (data = []) => {
      return data
        .map((row, idx) => `${row ?? " "}`.padEnd(idx === 0 ? max : min))
        .join("");
    };

    process.stdout.write(`${table(data)}\n`);
  },
};

/**
 * A utility function to clean and create a directory; if the path is a file,
 *  the directory will be created for the file's parent directory
 * @param {string|import("fs").PathLike} path
 * @param {Boolean} clean [true] - Delete the directory before creating it
 * @returns
 */
const cleanAndMkdir = (path, clean = true) => {
  if (!path) return;

  let isFile = false;

  // If the output directory exists, delete it but don't throw an error if it doesn't
  if (clean && existsSync(path)) {
    isFile = statSync(path).isFile();
    rimrafSync(path, { preserveRoot: true });
  }

  // Create the output directory fresh
  mkdirSync(isFile ? dirname(path) : path, { recursive: true });
};

/**
 * @description Renders a nunjucks template to a file (if outputPath is defined) or returns
 * the rendered template as a string
 * @param {string|import("fs").PathLike} templateFile
 * @param {Object} templateVariables
 * @param {string|import("fs").PathLike} outputPath
 * @returns {Promise<string|void>}
 */
async function renderTemplate(
  templateFile,
  templateVariables = {},
  outputPath = undefined
) {
  templateFile = join(__dirname, "templates", `${templateFile}.njk`);

  if (typeof templateFile === "undefined" || !existsSync(templateFile)) {
    Promise.reject(
      `Template file ${templateFile} not found. Could not render output.`
    );
    return;
  }

  const content = await readFile(templateFile, { encoding: "utf-8" });

  // Generate an HTML summary of the package's compiled assets with links to the HTML diffs of each file
  const html = env.renderString(content, {
    allPackages,
    ...templateVariables,
  });

  if (typeof outputPath === "undefined") return html;

  return writeFile(outputPath, html, { encoding: "utf-8" }).then(() => {
    return html;
  });
}

/**
 * Normalize content before rendering the diff
 * @param {string} content
 * @returns {Promise<string>}
 */
async function normalize(content) {
  // Remove the sourceMappingURL comment which is a source of noise
  content = content.replace(/\/\*# sourceMappingURL(.*?) \*\//, "").trim();

  // Normalize the content with prettier
  return prettier.format(content, {
    tabWidth: 2,
    useTabs: false,
    printWidth: 300,
    parser: "css",
  });
}

/**
 * @description Generates an HTML diff of the local and npm versions of a file
 * @param {string|import("fs").PathLike} filepath - The path to the file
 * @param {string|import("fs").PathLike} outputPath - The path to write the diff to
 * @param {string} localContent - The content to compare
 * @param {string} remoteContent - The content to compare against
 * @param {Object} renderData [{}] - Additional data to pass to the template
 * @returns
 */
async function generateDiff(
  filepath,
  outputPath,
  localContent,
  remoteContent,
  renderData = {}
) {
  localContent = await normalize(localContent).catch(err => Promise.reject(err));
  remoteContent = await normalize(remoteContent).catch(err => Promise.reject(err));

  /**
   * @todo This data _seems_ more useful but we can't render it visually 🤔
   *   perhaps there's a way to render this information meaningfully
   * @note This function is sloooooooooow
   * const diff = Diff.diffCss(localContent, remoteContent);
   * if (diff && diff.length) diff.forEach(d => log.write(JSON.stringify(d, null, 2)));
   **/

  const patch = Diff.createPatch(filepath, localContent, remoteContent);
  const html = Diff2Html.html(Diff2Html.parse(patch), {
    drawFileList: true,
    matching: "lines",
    outputFormat: "side-by-side",
  });

  return renderTemplate(
    "diff-preview",
    {
      ...renderData,
      file: filepath,
      html,
    },
    join(outputPath, `${basename(filepath, ".css")}.html`)
  );
}

/**
 * @description Process a single package and return a report of the local and
 *   published compiled assets for each file
 * @param {string} packageName - The name of the package to process (required)
 * @param {Object} options [{}] - Additional options
 * @param {string} options.cwd - The current working directory
 *
 * @returns {Promise<ComponentData>} - A summary of the package's compiled assets
 */
async function processPackage(packageName, { cwd } = {}) {
  if (!packageName) return Promise.reject("No package specified.");

  cleanAndMkdir(join(output, "diffs", packageName));
  cleanAndMkdir(pathing.latest);

  const pkgPath =
    require.resolve(`@spectrum-css/${packageName}/package.json`) ??
    join(cwd, packageName, "package.json");
  const pkg =
    pkgPath && existsSync(pkgPath)
      ? require(pkgPath)
      : { name: `@spectrum-css/${packageName}` };

  if (!cwd && pkgPath) {
    cwd = dirname(pkgPath)?.split(sep).slice(0, -1).join(sep);
  }

  let tag;
  let found = 0;

  // Using a set, we can remove duplicates from the list of compiled assets
  const filelist = new Set();
  const warnings = [];

  // Check if the package exists locally and has compiled output
  if (existsSync(join(cwd, packageName))) {
    found++;

    // Note: package might exist locally but might not contain any compiled output
    const files =
      (await fg("**/*.css", { cwd: join(cwd, packageName, "dist") })) ?? [];
    files.forEach((file) => filelist.add(file));
  } else {
    warnings.push(
      `${
        `${relative(pathing.root, join(cwd, packageName))}`.brightYellow
      } not found locally.\n`
    );
  }

  if (pkg && pkg.name) {
    const printPkgName = pkg.name.brightYellow;

    // Check if the package exists on npm; do not fail if it isn't found -
    //   report it and output only the sizes of the local compiled assets
    const npmData =
      (await npmFetch.json(pkg.name).catch((err) => {
        // @todo: do we need to report on the error messages returned?
        warnings.push(err ?? `Failed to fetch ${printPkgName} from npm.\n`);
      })) ?? {};

    // If the package exists on npm, fetch the latest release data
    // @todo what is the fallback if there isn't a latest tag?
    if (npmData["dist-tags"]?.latest) {
      tag = npmData["dist-tags"]?.latest;
    }

    if (tag) {
      // Check locally to see if we have already fetched the tarball
      // for this tag; if not, fetch it and extract it
      const tarballPath = join(pathing.cache, `${packageName}-${tag}.tgz`);
      const tarballUrl = npmData.versions?.[tag]?.dist?.tarball;
      if (!existsSync(tarballPath) && tarballUrl) {
        // Here is where we check the cached packages folder for the tarball
        // so we don't have to re-fetch it every time
        const tarballFile = await npmFetch(tarballUrl).catch(() => {});
        if (
          !tarballFile ||
          (tarballFile.status && tarballFile.status !== 200)
        ) {
          log.error(`Failed to fetch release content for ${pkg.name}`);
        } else {
          await writeFile(tarballPath, await tarballFile.buffer(), {
            encoding: "utf-8",
          });
        }
      }

      if (!existsSync(join(pathing.latest, packageName))) {
        mkdirSync(join(pathing.latest, packageName), { recursive: true });
      }

      // The tarball path should exist locally now; if not, something went wrong
      if (existsSync(tarballPath)) {
        await tar
          .extract({
            file: tarballPath,
            cwd: join(pathing.latest, packageName),
            // Only unpack the dist folder
            filter: (path) => path.startsWith("package/dist"),
            strip: 2,
          })
          .catch((err) => warnings.push(err));
      }

      if (existsSync(join(pathing.latest, packageName))) {
        const files =
          (await fg("**/*.css", {
            cwd: join(pathing.latest, packageName),
          })) ?? [];

        if (files.length > 0) found++;
        files.forEach((file) => filelist.add(file));
      }
    }
  }

  if (found < 1) {
    warnings.forEach(warning => log.write(warning));
    return Promise.reject(
      `${packageName.cyan} does not exist. Try checking the package's name and spelling.`
    );
  }

  if (filelist.size === 0) {
    warnings.forEach(warning => log.write(warning));
    return Promise.reject(
      `No compiled assets found associated with ${packageName.cyan}.`
    );
  }

  // For all files found locally & on npm, report back on it's sizes
  const results = await Promise.all(
    [...filelist].map(async (filename) =>
      processFile(
        filename,
        join(cwd, packageName, "dist"),
        join(pathing.latest, packageName)
      )
    )
  );

  return {
    packageName,
    warnings,
    tag,
    pkg,
    fileMap: results.reduce((acc, { filename, ...data }) => {
      acc.set(filename, data);
      return acc;
    }, new Map()),
  };
}

/**
 * @description Process a single file path both locally and from the npm cache
 *   and return the file's content and size for comparison
 * @param {string} filename
 * @param {string} localPath
 * @param {string} comparePath
 * @returns {Promise<{filename: string, local: {path: string, content: string, size: number}, npm: {path: string, content: string, size: number}, link: string}>}
*/
async function processFile(filename, localPath, comparePath) {
  if (!localPath || !comparePath) return {};

  const packageName = localPath.split("/")[localPath.split("/").length - 2];
  const data = {};

  // Look for the file locally
  if (existsSync(join(localPath, filename))) {
    const content = await readFile(join(localPath, filename), {
      encoding: "utf-8",
    });
    const stats = statSync(join(localPath, filename));
    data.local = {
      path: join(localPath, filename),
      content,
      size: stats.size,
    };
  }

  // Look for the file in the data pulled from NPM
  if (existsSync(join(comparePath, filename))) {
    const content = await readFile(join(comparePath, filename), {
      encoding: "utf-8",
    });
    const stats = statSync(join(comparePath, filename));
    data.npm = {
      path: join(comparePath, filename),
      content,
      size: stats.size,
    };

    if (stats.size > 0 && data.local && data.local.size > 0) {
      data.link = `diffs/${packageName}/${basename(filename, ".css")}.html`;
    }
  }

  return {
    filename,
    ...data,
  };
}

/**
 * @typedef Options
 * @property {boolean} skipCache [false] - Skip fetching the tarballs from npm
 */

/**
 * @description This is the entry point for the task; it will process the
 *  packages specified and generate a report of the compiled assets for each
 *  file that has changed between the local and npm versions. It will also
 *  generate an HTML summary of the changes for easy review and report to the
 *  console the changes in file size.
 *
 * @note This script compares file sizes and only generates a visual diff if
 *  the file size changes. There is a chance that the file size will not change
 *  but the content will. **This is a limitation of the script and will be need
 *  to be addressed in a future version.**
 *
 * @param {string[]} packages
 * @param {string|import("fs").PathLike} output
 * @param {Options} options
 * @returns {Promise<void>}
 */
async function main(packages, output, { skipCache = false } = {}) {
  /* If no packages are defined, run the compare script against all available packages */
  if (!packages || packages.length === 0) {
    packages = allPackages;
  }

  pathing.output = output;
  pathing.cache = join(output, "packages");
  pathing.latest = join(output, "latest");

  /** Setup the folder structure */
  cleanAndMkdir(pathing.output);

  // This is our cache of fetched tarballs from npm; do not clean this directory
  // unless we want to re-fetch the tarballs
  cleanAndMkdir(pathing.cache, skipCache);

  cleanAndMkdir(pathing.latest);

  /**
   * Each package will report on it's file structure locally when compared
   * against it's latest tag on npm; then a console report will be logged and
   * a visual diff generated for each file that has changed.
   */
  const results = await Promise.all(
    packages.map(async (packageName) => {
      return processPackage(packageName).catch((err) =>
        Promise.resolve({
          packageName,
          warnings: [err],
        })
      );
    })
  ).catch((err) => {
    log.error(err);
  });

  if (
    !results ||
    results.length === 0 ||
    results.every((r) => !r.fileMap || r.fileMap.size === 0)
  ) {
    log.error(`No compiled assets found for ${packages.join(", ")}.`);

    if (results && results.some((r) => r.warnings?.length > 0)) {
      results.forEach((r) => {
        if (r.warnings?.length > 0) {
          r.warnings.forEach((warning) => log.error(warning));
        }
      });
    }
    return Promise.resolve();
  }

  const packageData = new Map();
  const promises = [];

  for (const {
    packageName,
    warnings = [],
    tag,
    pkg = {},
    fileMap = new Map(),
  } of results) {
    let hasComponentChange = false;
    const files = [...fileMap.keys()];

    if (!files || files.length === 0) {
      log.write(
        `No compiled assets found associated with ${
          `@spectrum-css/${packageName}`.brightYellow
        }.`
      );
      continue;
    }

    packageData.set(packageName, {
      pkg,
      tag,
      files: fileMap,
    });

    // This is our report header to indicate the start of a new package's data
    log.write(`\n${_.pad(` ${packageName} `, 20, "-").cyan}\n`);

    if (warnings.length > 0) {
      warnings.forEach((warning) => log.write(`${warning}\n`));
    }

    const maxColumnWidth = files.reduce((max, file) => {
      if (file.length > max) max = file.length;
      return max;
    }, 30);

    // Write a table of the file sizes to the console for easy comparison
    log.writeTable(["Filename", "Size", "Size (release)"], {
      min: 15,
      max: maxColumnWidth + 5,
    });

    files.forEach(async (file) => {
      let hasFileChange = false;
      const { local, npm } = fileMap.get(file);

      log.writeTable(
        [
          `${file}`.green,
          local?.size ? `${bytesToSize(local.size)}`.gray : "** removed **".red,
          npm?.size ? `${bytesToSize(npm.size)}`.gray : "** new **".yellow,
        ],
        { min: 25, max: maxColumnWidth + 15 }
      );

      if (local?.size && npm?.size && local.size !== npm.size) {
        hasFileChange = true;
        hasComponentChange = true;
      }

      if (local && local.content && npm && npm.content && hasFileChange) {
        promises.push(
          generateDiff(
            file,
            join(pathing.output, "diffs", packageName),
            local.content,
            npm.content,
            {
              packageName,
              tag,
            }
          ).then(() => hasComponentChange)
        );
      }
    });
  }

  const hasAnyChange = await Promise.all(promises)
    .then((hasChange) => hasChange.some((change) => change))
    .catch((err) => log.error(err));

  if (!hasAnyChange) {
    log.write(`\n${"✓".green}  No changes detected.\n`);
    return Promise.resolve();
  }

  // This is writing a summary of all the packages that were compared
  // to make reviewing the diffs easier to navigate
  return renderTemplate(
    "compare-listing",
    {
      title: "Compiled asset comparison",
      packages: [...packageData.keys()],
      data: packageData.entries(),
      root: pathing.root,
    },
    join(pathing.output, "index.html")
  )
    .then(async () => {
      // Open the summary in the browser for easy review
      const open = (await import("open"))?.default;
      if (open) await open(join(pathing.output, "index.html"));
    })
    .catch((err) => Promise.reject(err));
}

let {
  _: packages,
  output = join(pathing.root, ".diff-output"),
  cache = true,
} = yargs(hideBin(process.argv)).argv;

main(packages, output, { skipCache: !cache }).then((code) => {
  process.exit(code);
});
