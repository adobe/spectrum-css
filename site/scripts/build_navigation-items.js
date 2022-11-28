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
const yaml = require("js-yaml")
const path = require("path")
const glob = require("glob")
const ext = require("replace-ext")


function getAllYMLFiles(root_folder) {
    let nav = []
    const files = glob.sync(root_folder + "/*/metadata/*.yml")
  
    files.forEach(function (file) {
      let componentData
      const componentName = file.replace("/metadata", "").split("/").pop()
      try {
        componentData = yaml.load(fs.readFileSync(file, "utf8"))
      } catch (safeloadError) {
        logger.error(
          "Uh, oh... during buildDocs_getData, yaml loading failed for".yellow,
          componentName.red
        )
        throw safeloadError
      }
  
      if (path.basename(file) === "metadata.yml") {
        file.basename = componentName
      }
  
      var fileName = ext(componentName, ".html")
      nav.push({
        name: componentData.name,
        component: componentName,
        hide: componentData.hide,
        fastLoad: componentData.fastLoad,
        href: fileName,
        description: componentData.description,
      })
  
      // fileStr.on("end", function () {
      //   templateData.nav = nav.sort(function (a, b) {
      //     return a.name <= b.name ? -1 : 1
      //   })
      //   console.log(templateData.nav)
      // })
    })
    return nav
  }

module.exports = getAllYMLFiles