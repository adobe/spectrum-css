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
const path = require("path")
const fs_extra = require("fs-extra")

async function buildSite_resources() {
  const resourcesPath = path.join(__dirname, "resources")
  const distPath = path.join(__dirname, "dist")
  try {
    const copyFile = (src, dest) => {
      const destFile = path.join(dest, path.basename(src))
      fs.copyFileSync(src, destFile)
    }

    const walk = (dir, dest) => {
      fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file)
        const destDir = path.join(dest, file)
        if (fs.statSync(filePath).isDirectory()) {
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir)
          }
          walk(filePath, destDir)
        } else {
          copyFile(filePath, dest)
        }
      })
    }

    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath)
    }
    walk(resourcesPath, distPath)
  } catch (e) {
    console.error("Error in buildSite_Resournces " + e)
  }
}

async function buildSite_loadicons() {
  const filePath = require.resolve("loadicons")
  try {
    const fileContent = fs.readFileSync(filePath)
    fs_extra.outputFile(
      path.join(__dirname, "dist/js/loadicons/", path.basename(filePath)),
      fileContent
    )
  } catch (e) {
    console.error("error in buildSite_loadicons " + e)
  }
}

/**
 * @description Build focus polyfill
 * @returns creates index file in focus polyfill folder inside output directory
 * @author Rajdeep
 */
async function buildSite_focusPolyfill() {
  const filePath = require.resolve("@adobe/focus-ring-polyfill")
  const fileContent = fs.readFileSync(filePath)
  try {
    fs_extra.outputFile(
      path.join(
        __dirname,
        "dist/js/focus-ring-polyfill/",
        path.basename(filePath)
      ),
      fileContent
    )
  } catch (e) {
    console.error("Error in buildSite_focusPolyfill " + e)
  }
}

/**
 * @description Build lunr.js file inside lunr directory under docs
 * @author Rajdeep
 */

async function buildSite_lunr() {
  const filePath = require.resolve("lunr")
  const fileContent = fs.readFileSync(filePath)
  try {
    fs_extra.outputFile(
      path.join(__dirname, "dist/js/lunr/", path.basename(filePath)),
      fileContent
    )
  } catch (e) {
    console.error("Error in buildSite_lunr " + e)
  }
}

async function buildSite_prism() {
  const prismPath = path.dirname(require.resolve("prismjs"))
  const filesPath = [
    `${prismPath}/themes/prism.css`,
    `${prismPath}/themes/prism-dark.css`,
  ]
  try {
    filesPath.forEach((filePath) => {
      const fileContent = fs.readFileSync(filePath)
      fs_extra.outputFile(
        path.join(__dirname, "dist/css/prism/", path.basename(filePath)),
        fileContent
      )
    })
  } catch (e) {
    console.error(e)
  }
}

const copySiteResources = async () => {
  try {
    await Promise.all([
      buildSite_resources(),
      buildSite_loadicons(),
      buildSite_focusPolyfill(),
      buildSite_lunr(),
      buildSite_prism(),
    ])
  } catch (err) {
    if (err) {
      throw new Error(err)
    }
  }
}
exports.copySiteResources = copySiteResources
