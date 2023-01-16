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
const fs = require('fs')
const glob = require('glob')
const path = require("path")
const through = require('through2');
const postcss = require("postcss")
const concat = require("concat-stream")
const fg = require('fast-glob');
const dirs = require("../lib/dirs.js")

// Uhg share this with component-builder
function getVarsFromCSS(css) {
  const variableList = {}
  const root = postcss.parse(css)

  root.walkRules((rule) => {
    rule.walkDecls((decl) => {
      const matches = decl.value.match(/--[\w-]+/g)
      if (matches) {
        matches.forEach((match) => {
          variableList[match] = true
        })
      }
    })
  })

  return variableList
}

function getVarValues(css) {
  const root = postcss.parse(css)
  const variables = {}

  root.walkRules((rule) => {
    rule.walkDecls((decl) => {
      variables[decl.prop] = decl.value
    })
  })

  return variables
}

function getAllVars() {
  return new Promise((resolve, reject) => {
    const filePatterns = [
      `${dirs.components}/vars/css/themes/*.css`,
      `${dirs.components}/vars/css/scales/*.css`,
      `${dirs.components}/vars/css/components/*.css`,
      `${dirs.components}/vars/css/globals/*.css`,
      `${dirs.components}/tokens/dist/index.css`,
    ]

    fg(filePatterns, (error, files) => {
      if (error) {
        reject(error)
      }

      let variableList = []

      files.forEach((file) => {
        const contents = fs.readFileSync(file, "utf8")
        variableList = getVarValues(contents)
      })

      fs.writeFileSync("everything.css", variableList.join(""))
      resolve(variableList)
    })
  })
}

// eslint-disable-next-line consistent-return
function resolveValue(value) {
  if (value) {
    const match = value.match(/var\((.+),?.*?\)/)
    if (match) {
      return match[1]
    }
    return value
  }
}

/**
 * 
 * @returns get all the used variables in the current directory
 */
async function getUsedVars() {
  return new Promise(async (resolve, reject) => {
    let variableArray
    let variableObject

    const allVars = await getAllVars()

    const filePattern = `${dirs.components}/*/dist/index-vars.css`

    glob(filePattern, (err, files) => {
      if (err) {
        reject(err)
      } else {
        concat(files, "everything.css", (error) => {
          if (error) {
            reject(error)
          } else {
            through
              .obj((file, enc, cb) => {
                variableObject = getVarsFromCSS(file.contents.toString())

                // Resolve each variable to ensure everything it references is available
                for (let varName in variableObject) {
                  let reffedVar = allVars[varName];
                  if (reffedVar && reffedVar.startsWith('var')) {
                    let value = resolveValue(reffedVar);
                    let curVarName = value;
                    while (allVars[curVarName]) {
                      if (!variableObject[curVarName]) {
                        variableObject[curVarName] = true;
                      }
                      curVarName = allVars[curVarName];
                    }
                  }
                }

                variableArray = Object.keys(variableObject)

                cb(null, file)
              })
              .on("finish", () => {
                resolve(variableArray)
              })
              .on("error", reject)
          }
        })
      }
    })
  })
}

/**
 * @description This code reads the contents of each file in filePaths, parses the CSS using postcss.parse,
 * removes any declarations whose property names are not in variableList, 
 * and writes the modified CSS to a new
 * file with the same name as the original file plus the -unique suffix.
 * @author Rajdeep
 */

const varDir = path.join(dirs.components, "vars", "dist")
async function buildUnique() {
  return new Promise(async (resolve, reject) => {
    // Read in all variables from components
    const variableList = await getUsedVars()

    // For each stop and scale, filter by used variables only
    const filePaths = [
      path.join(varDir, "*.css"),
      `!${path.join(varDir, "index.css")}`,
    ]

    filePaths.forEach((filePath) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err)
          return
        }

        const css = data.toString()
        const root = postcss.parse(css)

        root.walkRules((rule, ruleIndex) => {
          rule.walkDecls((decl) => {
            if (variableList.indexOf(decl.prop) === -1) {
              decl.remove()
            }
          })
        })

        const newCss = root.toString()

        // For each line variable, delete it if its not included
        const newFilePath = `${filePath}-unique`
        fs.writeFile(newFilePath, newCss, (err1) => {
          if (err1) {
            reject(err1)
            return
          }

          resolve()
        })
      })
    })
  })
}

function copyVars() {
  return new Promise((resolve, reject) => {
    const filePath = path.join(varDir, "spectrum-*.css")
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      const newFilePath = `dist/vars/${path.basename(filePath)}`
      fs.writeFile(newFilePath, data, (err) => {
        if (err) {
          reject(err)
          return
        }

        resolve()
      })
    })
  })
}

/**
 * @description This code reads the contents of the file at the path specified in filePath, 
 * and writes the contents to a
 * new file with the same name as the original file in the dist/expressvars/ directory.
 * @author Rajdeep
*/
const expressVarDir = path.join(dirs.components, "expressvars", "dist")
function copyExpressVars() {
  return new Promise((resolve, reject) => {
    const filePath = path.join(expressVarDir, "spectrum-*.css")
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      const newFilePath = `dist/expressvars/${path.basename(filePath)}`
      fs.writeFile(newFilePath, data, (err) => {
        if (err) {
          reject(err)
          return
        }

        resolve()
      })
    })
  })
}

// const coreTokensDir = path.join(dirs.components, "tokens", "dist")
/**
 * @description This implementation uses glob to find all the files that match the pattern 
 * specified in filePattern,
 * and then reads and writes each file to the dist/tokens/ directory.
 * @author Rajdeep
 */
function copyCoreTokens() {
  return new Promise((resolve, reject) => {
    const filePattern = path.join(varDir, "**/*.css")
    glob(filePattern, (err, filePaths) => {
      if (err) {
        reject(err)
        return
      }

      filePaths.forEach((filePath) => {
        fs.readFile(filePath, (err, data) => {
          if (err) {
            reject(err)
            return
          }

          const newFilePath = `dist/tokens/${path.basename(filePath)}`
          fs.writeFile(newFilePath, data, (err) => {
            if (err) {
              reject(err)
              return
            }

            resolve()
          })
        })
      })
    })
  })
}

exports.buildUnique = buildUnique

exports.copyVars = async () => {
  await Promise.all([
    buildUnique(),
    copyVars(),
    copyExpressVars(),
    copyCoreTokens(),
  ])
}
