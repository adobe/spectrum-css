/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fg = require("fast-glob")
const del = require("del")
const path = require("path")
const fs = require("fs")
const concat = require("concat-stream")
const depUtils = require("./lib/depUtils")
const exec = require("./lib/exec")
const dirs = require("./lib/dirs")
const docs = require("./docs")
const dev = require("./dev")
const subrunner = require("./subrunner")
const release = require("./release")
const vars = require("./vars")
const fs_extra = require('fs-extra');

let dependencyOrder = null;



async function clean() {
  console.log("Starting Clean")
  let globs = [
    'dist/components',
    'dist/docs/*.html',
    'dist/docs/*.json',
    '!dist/docs/get-started.html',
    '!dist/docs/index.html',
    '!dist/preview'
  ];

  // Don't delete the dist folder inside of installed packages
  if (process.cwd() === dirs.topLevel) {
    globs.push(`${dirs.components}/*/dist/*`)
  }
  console.log("Finishing Clean")
  return del(globs)
}

function concatPackageFiles(taskName, input, output, directory) {
  const func = function () {
    let glob
    if (Array.isArray(input)) {
      glob = []

      dependencyOrder.forEach((dep) => {
        input.forEach((file) => {
          glob.push(`${dirs.resolve(dep)}/${file}`)
        })
      })
    } else {
      glob = dependencyOrder.map((dep) => `${dirs.resolve(dep)}/${input}`)
    }

    const srcFiles = fs
      .readdirSync(glob)
      .filter((file) => file.endsWith(".css"))
    const destDirectory = path.join("dist", directory || "")

    concat(srcFiles, path.join(destDirectory, output))
      .then(() => {
        console.log("Files concatenated successfully")
      })
      .catch((err) => {
        console.error(err)
      })
  }

  Object.defineProperty(func, "name", { value: taskName, writable: false })

  return func
}


async function getDependencyOrder() {
  dependencyOrder = await depUtils.getFolderDependencyOrder(dirs.components)
}

let buildCombined = async () => {
  await getDependencyOrder();
  await Promise.all([
  concatPackageFiles('buildCombined_core', 'index.css', 'spectrum-core.css'),
  concatPackageFiles('buildCombined_large', 'index-lg.css', 'spectrum-core-lg.css'),
  concatPackageFiles('buildCombined_diff', 'index-diff.css', 'spectrum-core-diff.css'),
  concatPackageFiles('buildCombined_light', 'multiStops/light.css', 'spectrum-light.css'),
  concatPackageFiles('buildCombined_lightest', 'multiStops/lightest.css', 'spectrum-lightest.css'),
  concatPackageFiles('buildCombined_dark', 'multiStops/dark.css', 'spectrum-dark.css'),
  concatPackageFiles('buildCombined_darkest', 'multiStops/darkest.css', 'spectrum-darkest.css')
  ]);
  };


  let buildStandalone = async () => {
    await getDependencyOrder();
    await Promise.all([
      concatPackageFiles('buildStandalone_light', ['index.css', 'colorStops/light.css' ], 'spectrum-light.css', 'standalone/'),
      concatPackageFiles('buildStandalone_lightest', ['index.css', 'colorStops/lightest.css' ], 'spectrum-lightest.css', 'standalone/'),
      concatPackageFiles('buildStandalone_dark', ['index.css', 'colorStops/dark.css' ], 'spectrum-dark.css', 'standalone/'),
      concatPackageFiles('buildStandalone_darkest', ['index.css', 'colorStops/darkest.css' ], 'spectrum-darkest.css', 'standalone/'),
      concatPackageFiles('buildStandalone_lightLarge', ['index-lg.css', 'colorStops/light.css' ], 'spectrum-light-lg.css', 'standalone/'),
      concatPackageFiles('buildStandalone_lightestLarge', ['index-lg.css', 'colorStops/lightest.css' ], 'spectrum-lightest-lg.css', 'standalone/'),
      concatPackageFiles('buildStandalone_darkLarge', ['index-lg.css', 'colorStops/dark.css' ], 'spectrum-dark-lg.css', 'standalone/'),
      concatPackageFiles('buildStandalone_darkestLarge', ['index-lg.css', 'colorStops/darkest.css' ], 'spectrum-darkest-lg.css', 'standalone/'),
    ]);
  };
// run buildLite on a selected set of packages that depend on commons
// yay: faster than 'rebuild everything' approach
// boo: must add new packages here as commons grows
function buildDepenenciesOfCommons() {
  const dependentComponents = [
    `${dirs.components}/actionbutton`,
    `${dirs.components}/button`,
    `${dirs.components}/clearbutton`,
    `${dirs.components}/closebutton`,
    `${dirs.components}/infieldbutton`,
    `${dirs.components}/logicbutton`,
    `${dirs.components}/picker`,
    `${dirs.components}/pickerbutton`,
  ]
  return subrunner.runTaskOnPackages("buildLite", dependentComponents)
}

async function copyPackages() {
  const filePaths = await fg([
    `${dirs.components}/*/package.json`,
    `${dirs.components}/*/dist/**`,
    `!${dirs.components}/*/dist/docs/**`,
  ])

  for (const filePath of filePaths) {
    if (filePath.includes(`dist/`)) {
      const parts = filePath.split("/");
      const indexOfDist = parts.indexOf("dist");
      if (indexOfDist !== -1) {
        parts.splice(indexOfDist, 1);
      }
      const finalDestination = [parts.slice(0, parts.indexOf("components")), 'dist', parts.slice(parts.indexOf("components"))].flat().join("/");
      await fs_extra.copy(filePath, finalDestination)
    } else {
      const parts = filePath.split("/")
      const newFilePath = parts.slice(parts.indexOf("components")).join("/")
      const finalDestination = `dist/${newFilePath}`

      await fs_extra.copy(filePath, finalDestination)
    }
  }
}

async function buildIfTopLevel() {
  let builtTasks = async () => {
    try {
      await Promise.all([
        docs.build(),
        buildCombined(),
        buildStandalone(),
        copyPackages()
      ]);
    } catch(error) {
      console.error(error);
    }
  }

  if (process.cwd() === dirs.topLevel) {
    // Run a build for all packages first
    try {
      await subrunner.buildComponents();
      await builtTasks();
    } catch (error) {
      console.error(error);
    }
  }

  // They're already built, just include the output
  return builtTasks
}

const build = async () => {
  try {
    await clean();
    await buildIfTopLevel();
    await vars.copyVars();
  } catch (error) {
    console.error(error);
  }
}

// const subrunner = {
//   runTaskOnAllComponents(task, callback) {
//     // code to run task on all components
//     callback()
//   },
// }

const buildComponents = async (type) => {
  console.log('Starting buildComponents')
  return subrunner.runTaskOnAllComponents(type);
}

const buildLite = async () => {
  console.log('Starting buildLite')
  try {
    await clean();
    await buildComponents('buildLite');
    await Promise.all([docs.build(), copyPackages()]);
    console.log('Finishiing buildLite')
  } catch(error) {
    console.error(error);
  }
}

const buildMedium = async () => {
  try {
    await clean();
    await buildComponents('buildMedium');
    await Promise.all([docs.build(), copyPackages()]);
  } catch(error) {
    console.error(error);
  }
}

const buildHeavy = async () => {
  try {
    await clean();
    await buildComponents('buildHeavy');
    await Promise.all([docs.build(), copyPackages()]);
  } catch(error) {
    console.error(error);
  }
}

let devTask
if (process.cwd() === dirs.topLevel) {
  // Build all packages if at the top level
  devTask = async () => {
    try {
      await buildLite()
     // await dev.watch()
    } catch (error) {
      console.error(error);
    }
  }
} else {
  // Otherwise, just start watching
  devTask = async () => {
    try {
      await clean();
      await Promise.all([docs.build(), copyPackages()]);
      await dev.watch();
    } catch (error) {
      console.error(error);
    }
  }
}

exports.devHeavy = async () => {
  try {
  await buildHeavy()
  await dev.watch()
  }  catch (error) {
    console.error(error);
  }
}

exports.copyVars = vars.copyVars

exports.prePack = async () => {
  try {
    await build();
    await release.releaseBackwardsCompat();
  } catch(error) {
    console.error(error);
  }
}

exports.release = async () => {
  try {
    await release.updateAndTagRelease();
    await exec.task("yarnInstall", "yarn install --frozen-lockfile");
    await build();
    await exec.task("npmPublish", "npm publish");
    await exec.task("gitPush", "git push");
  } catch (err) {
    console.error(err);
  }
}

exports.generateChangelog = release.generateChangelog
exports.buildUniqueVars = vars.buildUnique

exports.ghPages = release.ghPages
exports.postPublish = release.releaseBackwardsCompatCleanup

exports.buildComponents = subrunner.buildComponents
exports.buildCombined = buildCombined
exports.buildStandalone = buildStandalone
exports.buildLite = buildLite
exports.buildDocs = docs.buildDocs
exports.buildDepenenciesOfCommons = buildDepenenciesOfCommons
exports.copyPackages = copyPackages
exports.dev = devTask
exports.clean = clean
exports.build = build
exports.watch = dev.watch
exports.default = buildMedium

exports.updateAndTagRelease = release.updateAndTagRelease
