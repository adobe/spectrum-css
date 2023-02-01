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

// Read in all variables used
// Read in all vars from recent DNA
// Include definitions if they refer to a variable, static if not

async function buildIndexVars() {
  const files = ["index.css", "skin.css"].filter((file) => fs.existsSync(file))
  try {
    const result = await postcss(processors).process(
      files.map((file) => fs.readFileSync(file, "utf-8")).join(""),
      { from: undefined }
    )

    fs.writeFileSync(path.join("dist", "index-vars.css"), result.css)
  } catch (e) {
    console.error(e)
  }
}

const buildVars = async function () {
  await buildIndexVars()
  await vars.bakeVars()
}

exports.buildIndexVars = buildIndexVars
exports.buildVars = buildVars

exports.buildCSS = async () => {
  try {
    await buildVars()
    let css = ""
    try {
      css = await fs.promises.readFile("dist/index-vars.css", "utf-8")
    } catch (e) {
      console.error(`Error reading index-vars.css: ${e}`)
    }
    await fs.promises.writeFile("dist/index.css", css)
  } catch (err) {
    console.error("Error in build " + err)
  }
}
