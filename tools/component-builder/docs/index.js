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
const fsp = require("fs").promises
const path = require("path")
const yaml = require("js-yaml")

const nunjucks = require("nunjucks")
const async = require("async")

const sitePath = path.join(__dirname, "..", "..", "..", "site")
const util = require(`${sitePath}/util`)

async function readJSONFile(filepath) {
  return JSON.parse(await fsp.readFile(filepath))
}

async function getDependencies(packagePath = "") {
  let package = await readJSONFile(path.join(packagePath, "package.json"))

  let dependencies = []

  if (package.devDependencies) {
    dependencies = Object.keys(package.devDependencies)

    dependencies = dependencies
      .filter((dep) => {
        return (
          dep.indexOf("@spectrum-css") === 0 &&
          dep !== "@spectrum-css/bundle-builder" &&
          dep !== "@spectrum-css/component-builder" &&
          dep !== "@spectrum-css/component-builder-simple"
        )
      })
      .map((dep) => dep.split("/").pop())
  }

  return dependencies
}

async function buildDocs_html() {
  let dependencies
  let package
  try {
    package = await readJSONFile("package.json")
    dependencies = await getDependencies()
  } catch (err) {
    console.error("Error in component builder docs " + err)
    return
  }

  let packageName = package.name.split("/").pop()

  let dnaVars = readJSONFile(
    path.join(
      path.dirname(require.resolve("@spectrum-css/vars")),
      "..",
      "dist",
      "spectrum-metadata.json"
    )
  )

  let filePaths = ["metadata.yml", "metadata/*.yml"]

  // Set up Nunjucks compiler
  const nunjucksCompiler = nunjucks.configure(sitePath + "/templates", {
    autoescape: false,
  })

  // Read and process each file
  filePaths.forEach((filePath) => {
    fs.readFile(filePath, "utf8", (err, contents) => {
      if (err) {
        console.error("Error in component builder docs " + err)
        return
      }

      // Rename file if necessary
      let file = path.parse(filePath)
      if (file.basename === "docs" || file.basename === packageName) {
        file.basename = "index"
      }

      // Set data for Nunjucks rendering
      let data = {
        dependencies: dependencies,
        dnaVars: dnaVars,
        pkg: package,
        util: util,
        component: yaml.safeLoad(contents),
      }

      // Render template
      try {
        const templatePath = `${sitePath}/templates/individualComponent.njk`
        let compiled = nunjucksCompiler.render(templatePath, data)

        // Write rendered HTML to file
        fs.writeFile(
          path.join("dist/docs/", file.name + ".html"),
          compiled,
          (err) => {
            if (err) {
              console.error("Error in component builder docs " + err)
            }
          }
        )
      } catch (e) {
        console.error("Error in component builder docs " + e)
      }
    })
  })
}

function buildDocs_resources() {
  // Read all files in the source directory
  fs.readdir(`${sitePath}/dist/`, (err, fileNames) => {
    if (err) {
      console.error("Error in component builder docs " + err)
      return
    }

    // Process each file
    fileNames.forEach((fileName) => {
      // Read file contents
      fs.readFile(`${sitePath}/dist/${fileName}`, (err, contents) => {
        if (err) {
          console.error("Error in component builder docs " + err)
          return
        }

        // Write file contents to the destination directory
        fs.writeFile(path.join("dist/docs/", fileName), contents, (err) => {
          if (err) {
            console.error("Error in component builder docs " + err)
          }
        })
      })
    })
  })
}

async function buildDocs_copyDeps() {
  let dependencies
  try {
    dependencies = await getDependencies()
  } catch (err) {
    console.error("Error in component builder docs " + err)
    return
  }

  dependencies.forEach((dep) => {
    // Get a list of file paths that match the pattern
    let filePaths = glob.sync(`node_modules/@spectrum-css/${dep}/dist/*`)

    filePaths.forEach((filePath) => {
      // Read the file contents
      fs.readFile(filePath, (err, contents) => {
        if (err) {
          console.error("Error in component builder docs " + err)
          return
        }

        // Write the file contents to the destination directory
        fs.writeFile(
          path.join(
            "dist/docs/dependencies/@spectrum-css/",
            dep,
            path.basename(filePath)
          ),
          contents,
          (err) => {
            if (err) {
              console.error("Error in component builder docs " + err)
            }
          }
        )
      })
    })
  })
}

let buildDocs = async function() {
  await Promise.all([
    buildDocs_resources(),
    buildDocs_copyDeps(),
    buildDocs_html()
  ])
};

exports.buildDocs = buildDocs;

exports.buildDocs_html = async function() {
  await buildDocs_html()
};
