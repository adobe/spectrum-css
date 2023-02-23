/* eslint-disable max-len */
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// const postcss = require('postcss');
// const logger = require('gulplog');
const fsp = require("fs").promises
const path = require("path")
const fs = require("fs")
const varUtils = require("./lib/varUtils")

async function bakeVars() {
  try {
    const pkg = JSON.parse(await fs.promises.readFile(path.join("package.json")))
    const pkgName = pkg.name.split("/").pop()

  return new Promise((resolve, reject) => {
    fs.readFile("dist/index-vars.css", "utf-8", async (err, fileContent) => {
      if (err) {
        reject(err)
      }
      if(fileContent){
      // const file = await fs.promises.readFile(filePath)
      const classNames = varUtils.getClassNames(fileContent, pkgName)

      // Find all custom properties used in the component
      let variableList = varUtils.getVarsFromCSS(fileContent);

      // Get vars defined inside of the component
      let componentVars = varUtils.getVarsDefinedInCSS(fileContent);

      // Get vars in ALL components
      let vars = await varUtils.getAllComponentVars();

      // Get literally all of the possible vars (even overridden vars that are different between themes/scales)
      let allVars = await varUtils.getAllVars();

      let errors = []
      let usedVars = {}
      variableList.forEach((varName) => {
        if (varName.indexOf("spectrum-global") !== -1) {
          console.warn(
            `⚠️  ${pkg.name} directly uses global variable ${varName}`
          )
        } else if (
          !allVars[varName] &&
          !varName.startsWith("--mod") &&
          !varName.startsWith("--highcontrast")
        ) {
          if (componentVars.indexOf(varName) === -1) {
            errors.push(`${pkg.name} uses undefined variable ${varName}`)
          } else {
            console.warn(
              `🔶 ${pkg.name} uses locally defined variable ${varName}`
            )
          }
        } else {
          usedVars[varName] = vars[varName]
        }
      })
      if (errors.length) {
        reject(new Error(errors.join("\n")))
      }

      const contents = varUtils.getVariableDeclarations(classNames, usedVars)
     // const newFilePath = filePath.replace("index-vars.css", "vars.css")
      await fs.promises.writeFile('dist/vars.css', contents)
      resolve();
    } else {
      reject(new Error('No file'))
    }
    })
  })
  } catch (e) {
    console.error("Error in bakeVars " + e)
  }
  
}

exports.bakeVars = bakeVars
