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
const postcss = require("postcss")
const processors = require("./processors").processors
// const legacyBuild = require('./legacyBuild');
const vars = require("./vars")
const path = require('path');
const fg = require("fast-glob")
// Read in all variables used
// Read in all vars from recent DNA
// Include definitions if they refer to a variable, static if not

async function buildIndexVars() {
  const files = await fg([
    "index.css",
    "skin.css"
  ]);
  try {
    // Allow missing skin.css
    let contents = "";
    for (const file of files) {
      contents += await fs.promises.readFile(file, "utf-8");
    }
    try {
      const result = await postcss(processors).process(contents, { from: 'index.css' });
      await fs.promises.writeFile(path.join("dist", "index-vars.css"), result.css);
      console.log("File saved successfully");
      } catch (error) {
      console.error("An error occurred while processing CSS:", error);
    }
  } catch (e) {
    console.error(e)
  }
}

const buildVars = async function () {
  try {
    await buildIndexVars()
  } catch (e) {
    console.error("Error in buildIndexVars " + e)
  }
  try {
    await vars.bakeVars()
  } catch (e) {
    console.error("Error in buildVars " + e)
  }
}

exports.buildIndexVars = buildIndexVars
exports.buildVars = buildVars

exports.buildCSS = async function () {
  try {
    await buildVars()

    return new Promise((resolve, reject) => {
      fs.copyFile("dist/index-vars.css", "dist/index.css", (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  } catch (e) {
    console.error(e)
  }
}
