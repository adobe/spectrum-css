#!/usr/bin/env node

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
const { processCSS } = require("./css-tools.js")
const fs = require("fs-extra")
const glob = require("glob")
const { readFile, writeFile } = require("fs")
const path = require("path")
const concat = require("concat")
const util = require("util")
const rimraf = require("rimraf")
const fs_s = require('fs')


const StyleDictionary = require("style-dictionary")

const styleDictionary = StyleDictionary.extend("config.js")

const copyFilePromise = util.promisify(fs.copyFile)

function copyFiles(srcDir, destDir, files) {
  return Promise.all(
    files.map((f) => {
      return copyFilePromise(path.join(srcDir, f), path.join(destDir, f))
    })
  )
}

const root_folder = "components"
const dest_folder = "_site/components"

function processColorAliases() {
  var colorStops = ["darkest", "dark", "light", "lightest"]
  const file = `${dest_folder}/vars/globals/spectrum-colorAliases.css`
  readFile(file, "utf-8", function (err, contents) {
    if (err) {
      console.log(err)
      return
    }
    const replaced = contents.replace(
      /:root/,
      colorStops.map((stop) => `.spectrum--${stop}`).join(",\n")
    )
    writeFile(file, replaced, "utf-8", async function (err) {
      if (err) {
        console.log(err)
      } else {
        await processCSS(file)
      }
    })
  })
}

function processDimensionAliases() {
  var scales = ["medium", "large"]
  const file = `${dest_folder}/vars/globals/spectrum-dimensionAliases.css`

  readFile(file, "utf-8", function (err, contents) {
    if (err) {
      console.log(err)
      return
    }
    const replaced = contents.replace(
      /:root/,
      scales.map((scale) => `.spectrum--${scale}`).join(",\n")
    )
    writeFile(file, replaced, "utf-8", async function (err) {
      if (err) {
        console.log(err)
      } else {
        await processCSS(file)
      }
    })
  })
}

// concat the global files into spectrum-global.css main file
function concatGlobalsFinal() {
  const filesPath = [
    `${dest_folder}/vars/.tmp/spectrum-global.css`,
    `${dest_folder}/vars/globals/spectrum-dimensionAliases.css`,
    `${dest_folder}/vars/globals/spectrum-colorAliases.css`,
    `${dest_folder}/vars/custom.css`,
  ]
  concat(filesPath, `${dest_folder}/vars/spectrum-global.css`, function (err) {
    if (err) throw err
    console.log("done")
  })
}

//copy global css files under css/globals and update the :root to .spectrum
const copyGlobals = (item) => {
  fs.copy(
    `${dest_folder}/${item.name}/css/globals`,
    `${dest_folder}/${item.name}/globals`,
    async function (err) {
      if (err) {
        console.error(err)
      } else {
        glob(
          `${dest_folder}/${item.name}/globals/*.css`,
          {
            ignore: `${dest_folder}/${item.name}/globals/{spectrum-dimensionAliases,spectrum-colorAliases}.css`,
          },
          function (er, files) {
            files.forEach((file) => {
              // TODO for index.css
              readFile(file, "utf-8", function (err, contents) {
                if (err) {
                  console.log(err)
                  return
                }
                const replaced = contents.replace(/:root {/, ".spectrum {")
                writeFile(file, replaced, "utf-8", async function (err) {
                  if (err) {
                    console.log(err)
                  } else {
                    await processCSS(file)
                  }
                })
              })
            })
          }
        )
      }
      await processColorAliases()
      await processDimensionAliases()
      await concatGlobalsFinal()
    }
  ) // Copies directory, even if it has subdirectories or files
}

// copy sources of the files and name the css names for themes
function copySources() {
  let classMap = {
    "spectrum-darkest.css": ".spectrum--darkest",
    "spectrum-dark.css": ".spectrum--dark",
    "spectrum-light.css": ".spectrum--light",
    "spectrum-lightest.css": ".spectrum--lightest",
    "spectrum-large.css": ".spectrum--large",
    "spectrum-medium.css": ".spectrum--medium",
  }

  // list all css files from themes and scales

  const themesCSSFiles = glob.sync(dest_folder + "/vars/css/themes/*.css")
  const scalesCSSFIles = glob.sync(dest_folder + "/vars/css/scales/*.css")
  const files = [...themesCSSFiles, ...scalesCSSFIles]

  files.forEach((file) => {
    // TODO for index.css
    readFile(file, "utf-8", function (err, contents) {
      if (err) {
        console.log(err)
        return
      }
      const replaced = contents.replace(/:root/, function (match) {
        return classMap[path.basename(file)]
      })
      writeFile(file, replaced, "utf-8", async function (err) {
        if (err) {
          console.log(err)
        } else {
          fs.copy(file, `_site/components/vars/${path.basename(file)}`)
        }
      })
    })
  })
}

// TODO have to revisit while rendering components
function copyComponents() {
  glob(
    `${dest_folder}/vars/css/components/*.css`,
    {
      ignore: `${dest_folder}/vars/css/components/index.css`,
    },
    function (er, files) {
      files.forEach((file) => {
        // TODO for index.css
        readFile(file, "utf-8", function (err, contents) {
          if (err) {
            console.log(err)
            return
          }
          const replaced = contents.replace(/:root/, ".spectrum")
          writeFile(file, replaced, "utf-8", async function (err) {
            if (err) {
              console.log(err)
            } else {
              await processCSS(file)
            }
          })
        })
      })
    }
  )
}

const renameIndexCSS = async (component) => {
  fs_s.readdir(component, (err, files) => {
      if (err) throw err

      for (const file of files) {
        if (
          path.extname(file) === ".css" &&
          path.basename(file, ".css") === "index"
        ) {
          const oldPath = path.join(component, file)
          const newPath = path.join(component, "index-vars.css")

          fs.rename(oldPath, newPath, (err) => {
            if (err) throw err
            console.log(`Renamed ${oldPath} to ${newPath}`)
          })
        }
      }
    })
}

// main build function
const buildCSS = async () => {
  fs.copySync(root_folder, dest_folder)

  fs.readdirSync(dest_folder, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .forEach(async (item) => {
      if (item.name === "vars" || item.name === 'expressvars') {
        await copyGlobals(item)
        await copySources()
        await copyComponents()
      } else if (item.name === "tokens") {
        await parseTokensCSS(item.name)
      } else {
        await renameIndexCSS(`${dest_folder}/${item.name}`)
        for (const cssPath of await fg([`${dest_folder}/${item.name}/*.css`])) {
          await processCSS(cssPath)
          fs.copy(
            `${dest_folder}/${item.name}/dist/index-vars.css`,
            `${dest_folder}/${item.name}/index-vars.css`,
            function (err) {
              if (err) console.log("No file found so skipping")
            }
          )
        }
      }
    })
}

// concat tokens css files ######################

const concatIndex = async (name) => {
  var cssFiles = glob.sync(
    `${dest_folder}/${name}/{css,custom-spectrum,custom-express}/**/**/*.css`
  )
  console.log(cssFiles)
  await concat(cssFiles, `${dest_folder}/${name}/index.css`)
}

const clean = async (name) => {
  rimraf(`${dest_folder}/${name}/dist/*`, function () {
    console.log("done")
  })
}

const buildCustoms = async (itemName) => {
  await Promise.all([
    buildCustomExpress(itemName),
    buildCustomSpectrum(itemName),
  ]).then((results) => console.log(results + "done promise"))
}

function buildCustomSpectrum(name) {
  const sourceDir = `${dest_folder}/${name}/custom-spectrum`
  const destinationDir = `${dest_folder}/${name}/css/spectrum`
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true })
  }

  fs.copy(sourceDir, destinationDir, function (error) {
    if (error) {
      throw error
    } else {
      console.log("success!")
    }
  })
}

function buildCustomExpress(name) {
  const sourceDir = `${dest_folder}/${name}/custom-express`
  const destinationDir = `${dest_folder}/${name}/css/express`

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true })
  }

  fs.copy(sourceDir, destinationDir, function (error) {
    if (error) {
      throw error
    } else {
      console.log("success! building")
    }
  })
}

async function parseTokensCSS(name) {
  await clean(name)
  await styleDictionary.buildAllPlatforms()
  await buildCustoms(name)
  await concatIndex(name)
}
// concat tokens css files ######################
buildCSS()
