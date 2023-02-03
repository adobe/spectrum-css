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

const fs = require("fs")
const del = require("del")
const path = require("path")
const fg = require("fast-glob")

function clean() {
  return del("dist/*")
}

function prepareBuild(cb) {
  const dir = "dist"
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  // cb()
}

/**
 * @description This code will read all the files in the css/globals directory,
 * except for the spectrum-dimensionAliases.css
 * and spectrum-colorAliases.css files, and write modified versions of them
 * to the dist/globals directory.
 * @author Rajdeep
 */
function copyGlobals() {
  const src = [
    "css/globals/*.css",
    "!css/globals/spectrum-dimensionAliases.css",
    "!css/globals/spectrum-colorAliases.css",
  ]

  const dest = "dist/globals/"
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  fg.sync(src).forEach((file) => {
    const content = fs
      .readFileSync(file, "utf-8")
      .replace(/:root {/, ".spectrum {")
    fs.writeFileSync(path.join(dest, path.basename(file)), content)
  })
}

/**
 * @description This code will read all the files in the css/themes and
 * css/scales directories and write modified versions of them to the dist directory.
 * @author Rajdeep
 */
async function copySources() {
  let classMap = {
    "spectrum-darkest.css": ".spectrum--darkest",
    "spectrum-dark.css": ".spectrum--dark",
    "spectrum-light.css": ".spectrum--light",
    "spectrum-lightest.css": ".spectrum--lightest",
    "spectrum-large.css": ".spectrum--large",
    "spectrum-medium.css": ".spectrum--medium",
  }

  const src = ["css/themes/*.css", "css/scales/*.css"]

  const dest = "dist/"
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  fg.sync(src).forEach((file) => {
    const content = fs
      .readFileSync(file, "utf-8")
      .replace(":root", classMap[path.basename(file)])
    fs.writeFileSync(path.join(dest, path.basename(file)), content)
  })
}

/**
 * @description This code will read the .tmp/spectrum-global.css,
 * dist/globals/spectrum-dimensionAliases.css,
 * dist/globals/spectrum-colorAliases.css, and custom.css files and write a
 * modified version of them to the dist directory as a single file called spectrum-global.css
 * @author Rajdeep
 */

 async function concatGlobalsFinal() {
  const src = ['.tmp/spectrum-global.css', 'dist/globals/spectrum-dimensionAliases.css', 'dist/globals/spectrum-colorAliases.css', 'custom.css']
  let contents = '';
      fg.sync(src).forEach((file) => {
        
        let fileContent = fs.readFileSync(file, 'utf-8');
        if (file.match('Aliases.css')) {
          fileContent = fileContent.replace('{', `{\n  /* ${path.basename(file)} */`);
        }
        contents += fileContent;
        
      });
      fs.writeFileSync('dist/spectrum-global.css', contents)
}

/**
 * @description This code will read all the files in the css/globals directory,
 * except for the index.css, spectrum-dimensionAliases.css, and spectrum-colorAliases.css files,
 * and write a modified version of them to the .tmp directory
 * as a single file called spectrum-global.css
 * @author Rajdeep
 */
async function concatGlobalsTemp() {
  const src = [
    "css/globals/*.css",
    "!css/globals/index.css",
    "!css/globals/spectrum-dimensionAliases.css",
    "!css/globals/spectrum-colorAliases.css",
  ]

  const dest = ".tmp/"
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  const content = fg.sync(src).reduce((acc, file) => {
    if (file.startsWith("!")) {
      return acc
    }

    return (
      acc +
      `  /* ${path.basename(file)} */\n` +
      fs
        .readFileSync(file, "utf-8")
        .replace(/:root {/, "")
        .replace(/}/, "")
    )
  }, ".spectrum {\n")

  fs.writeFileSync(`${dest}spectrum-global.css`, content + "}\n")
}

/**
 * @description This code will read the css/globals/spectrum-colorAliases.css
 * file and write a modified version of it to the dist/globals directory.
 */
async function processColorAliases() {
  const colorStops = ["darkest", "dark", "light", "lightest"]

  const srcPath = "css/globals/spectrum-colorAliases.css"
  const destPath = "dist/globals/spectrum-colorAliases.css"

  let content = fs.readFileSync(srcPath, "utf8")
  content = content.replace(
    /:root/,
    colorStops.map((stop) => `.spectrum--${stop}`).join(",\n")
  )

  fs.writeFileSync(destPath, content)
}

/**
 * @description This code will read the css/globals/spectrum-dimensionAliases.css file
 * and write a modified version of it to the dist/globals directory
 * @author Rajdeep
 */
 async function processDimensionAliases() {
  const scales = [
    'medium',
    'large'
  ];

  let data = fs.readFileSync('css/globals/spectrum-dimensionAliases.css', 'utf-8')
    let processedData = data.replace(/:root/, scales.map(scale => `.spectrum--${scale}`).join(',\n'));

    fs.writeFileSync('dist/globals/spectrum-dimensionAliases.css', processedData)
}

/**
 * @description  This code will read all the files in the css/components directory,
 * except for the index.css file, and write modified versions
 * of them to the dist/components directory.
 * @author Rajdeep
 */
async function copyComponents() {
  const src = ["!css/components/index.css", "css/components/*.css"]

  const dest = "dist/components/"
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  fg.sync(src).forEach((file) => {
    if (file.startsWith("!")) {
      return
    }

    const content = fs.readFileSync(file, "utf-8").replace(/:root/, ".spectrum")
    fs.writeFileSync(path.join(dest, path.basename(file)), content)
  })
}

/**
 * @description This code will copy the json/spectrum-metadata.json file to the dist directory.
 * The copyFile function is used to copy the file from its original location to the destination.
 * @author Rajdeep
 */
async function copyMetadata() {
  const src = "json/spectrum-metadata.json"
  const destDir = "dist/"
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }
  const dest = path.join(destDir, "spectrum-metadata.json")

  fs.copyFileSync(src, dest)
}

/**
 * @descriptio This code will define a build function that performs a series of tasks in a
 * @param {*} callback
 */
const build = async () => {
  await clean()
  await prepareBuild()
  await Promise.all([
    copyMetadata(),
    copyGlobals(),
    copySources(),
    copyComponents(),
    concatGlobalsTemp(),
    processColorAliases(),
    processDimensionAliases()
  ])
  await concatGlobalsFinal()
}
/**
 * @description This code defines an update function that performs a series of tasks
 */
exports.update = async () => {
  // eslint-disable-next-line global-require
  await require("./tasks/updateDNA")()
  await build()
}
exports.clean = clean
exports.default = build
exports.build =
  exports.buildLite =
  exports.buildHeavy =
  exports.buildMedium =
    function () {
      return new Promise((resolve, reject) => {
        Promise.all([build()])
          .then(() => {
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
