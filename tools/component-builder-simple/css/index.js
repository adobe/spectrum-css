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

const path = require("path")
const fs = require("fs")
const postcssReal = require("postcss")
const fsp = require("fs").promises
const { parse } = require("postcss-values-parser")
const fg = require("fast-glob")
const processorsFunction = require("./processors").getProcessors
const processors = processorsFunction()

/**
 * @description get all the tokens used
 * @param {*} node
 * @param {*} usedTokens
 * @returns
 */
function getTokensUsedInValueNode(node, usedTokens) {
  usedTokens = usedTokens ? usedTokens : []
  if (node.nodes) {
    node.nodes.forEach((subNode) => {
      if (subNode.type === "word" && subNode.value.startsWith("--")) {
        usedTokens.push(subNode.value)
      } else if (subNode.type === "func") {
        getTokensUsedInValueNode(subNode, usedTokens)
      }
    })
  }
  return usedTokens
}

/**
 * @description get all the tokesn used in css files
 * @param {*} root
 * @param {*} coreTokens
 * @param {*} componentTokens
 * @returns
 */
function getTokensUsedInCSS(root, coreTokens, componentTokens) {
  let usedTokens = []
  let coreTokensUsed = {}
  let componentTokensUsed = {}

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      let matches = decl.value.match(/var\(.*?\)/g)
      if (matches) {
        let parsed = parse(decl.value)
        parsed.nodes.forEach((node) => {
          const usedTokensInValue = getTokensUsedInValueNode(node)
          usedTokensInValue.forEach((tokenName) => {
            if (coreTokens[tokenName]) {
              coreTokensUsed[tokenName] = (coreTokensUsed[tokenName] ?? 0) + 1
            } else if (componentTokens[tokenName]) {
              componentTokensUsed[tokenName] =
                (componentTokensUsed[tokenName] ?? 0) + 1
            }
            if (usedTokens.indexOf(tokenName) === -1) {
              usedTokens.push(tokenName)
            }
          })
        })
      }
    })
  })

  return { usedTokens, coreTokensUsed, componentTokensUsed }
}

/**
 * @description get all tokens defined in css files
 * @param {*} root
 * @returns
 */
function getTokensDefinedInCSS(root) {
  let variables = {}

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      if (decl.prop.startsWith("--")) {
        variables[decl.prop] = decl.value
      }
    })
  })

  return variables
}

/**
 * @description get all core tokens from spectrum-css/tokens
 */
async function getCoreTokens() {
  const fetchOptions = {
    paths: [process.cwd(), path.join(process.cwd(), "../../")],
  }
  /* Resolve core tokens first from the current working directory, or if not found, from the root of the monorepo */
  const coreTokensFile = require.resolve("@spectrum-css/tokens", fetchOptions)
  const coreTokensPkg = require.resolve(
    "@spectrum-css/tokens/package.json",
    fetchOptions
  )
  if (coreTokensPkg)
    console.log(
      "Core tokens version:",
      await fsp
        .readFile(coreTokensPkg, "utf8")
        .then(JSON.parse)
        .then((pkg) => pkg.version)
    )
  let contents = await fsp.readFile(coreTokensFile, "utf8")
  let root = postcssReal.parse(contents)
  return getTokensDefinedInCSS(root)
}

/**
 * @desctiption method to build css files
 */
async function buildCSS() {
  const cssFiles = [ 'index.css',
  'themes/spectrum.css', // spectrum comes first
  'themes/*.css']
  try {
    const allCss = await fg.sync(cssFiles)
    // Read the contents of all CSS files
    const cssContents = await Promise.all(
      allCss.map((file) => fs.promises.readFile(file, "utf-8"))
    )

    // Concatenate the contents of all CSS files
    const css = cssContents.join("\n")

    // Process the CSS using postcss
    const processedCss = await postcssReal(processors).process(css, {
      from: "./index.css",
    })

    // Write the processed CSS to a file
    await fs.promises.writeFile("dist/index.css", processedCss.css)
    console.log("********** build css done *********")
  } catch (e) {
    console.error(e)
  }
}

async function buildCSSWithoutThemes() {
  const indexFile = ["index.css"];
  const themeFiles = ['themes/spectrum.css', 'themes/*.css'];
  let themeFileList = [];

  try {
    // Check if the themes folder exists
    const isThemesFolderExists = await fs.promises.stat("themes").catch(() => false);
    if (isThemesFolderExists) {
      themeFileList = await fg.sync(themeFiles);
    }

    // Get the list of all CSS files
    const files = [...indexFile, ...themeFileList];
    const cssContents = await Promise.all(files.map(file => fs.promises.readFile(file, "utf-8")));
    const css = cssContents.join("\n");

    // Process the CSS using postcss
    const processors = processorsFunction(false, { noFlatVariables: true });
    const processedCss = await postcssReal(processors).process(css, { from: "./index.css" });
    await fs.promises.mkdir(path.join("dist/themes"), { recursive: true });

    // Write the processed CSS to a file
    await fs.promises.writeFile("dist/index-base.css", processedCss.css);
  } catch (e) {
    console.error(e);
  }
}


/**
 * @description take all the theme files and create index theme at the root
 */
async function buildCSSThemeIndex() {
  const cssFiles = [
    "themes/spectrum.css", // spectrum comes first
    "themes/*.css",
  ]
  try {
    const isThemesFolderExists = await fs.promises
      .stat("themes")
      .catch(() => false)
    if (isThemesFolderExists) {
      const allCss = await fg.sync(cssFiles)
      // Read the contents of all CSS files
      const cssContents = await Promise.all(
        allCss.map((file) => fs.promises.readFile(file, "utf-8"))
      )

      // Concatenate the contents of all CSS files
      const css = cssContents.join("\n")

      // Process the CSS using postcss
      const processors = processorsFunction(true, { noSelectors: true })
      const processedCss = await postcssReal(processors).process(css)
      await fs.promises.mkdir(path.join("dist/themes"), { recursive: true });

      // Write the processed CSS to a file
      await fs.promises.writeFile("dist/index-theme.css", processedCss.css)
    }
  } catch (e) {
    console.error(e)
  }
}

async function buildCSSThemes() {
  // Get a list of all CSS files in the themes directory
  // Check if the themes folder exists
  try {
    const isThemesFolderExists = await fs.promises
      .stat("themes")
      .catch(() => false)
    if (isThemesFolderExists) {
      const cssFiles = await fs.promises.readdir("themes/")

      // Process each CSS file
      for (const file of cssFiles) {
        // Read the contents of the CSS file
        const css = await fs.promises.readFile(
          path.join("themes/", file),
          "utf-8"
        )

        // Process the CSS using postcss
        const processors = processorsFunction(true, { noSelectors: true })
        const processedCss = await postcssReal(processors).process(css)
        await fs.promises.mkdir(path.join("dist/themes"), { recursive: true });
        // Write the processed CSS to a file in the dist/themes directory
        await fs.promises.writeFile(
          path.join("dist/themes/", file),
          processedCss.css
        )
      }
    }
  } catch (e) {
    console.error(e)
  }
}

/**
  Special case for express: it needs Spectrum base vars and needs to override them
*/
async function buildExpressTheme() {
  try {
    // Read the contents of the index-theme.css file
    const css = await fs.promises.readFile("dist/index-theme.css", "utf-8")

    // Process the CSS using postcss
    const processors = processorsFunction(true).concat(
      require("postcss-combininator")
    )
    const processedCss = await postcssReal(processors).process(css)

    // Write the processed CSS to a file named express.css in the dist/themes directory
    await fs.promises.mkdir(path.join("dist/themes"), { recursive: true });

    await fs.promises.writeFile("dist/themes/express.css", processedCss.css)
  } catch (e) {
    console.error(e)
  }
}

let coreTokens = null
async function checkCSS(globFile) {
  // Read the contents of all CSS files specified by the glob
  try {
    const cssFiles = await fg.sync(globFile)
    const cssContents = await Promise.all(
      cssFiles.map((file) => fs.promises.readFile(file, "utf-8"))
    )

    // Concatenate the contents of all CSS files
    const css = cssContents.join("\n")

    // Fetch core tokens once during the build
    if (coreTokens === null) {
      coreTokens = await getCoreTokens()
    }

    const pkg = JSON.parse(await fs.promises.readFile("package.json", "utf-8"))

    // Parse the CSS
    const root = postcssReal.parse(css)

    // Get tokens defined inside of the component
    const componentTokens = getTokensDefinedInCSS(root)

    // Find all tokens used in the component
    const { usedTokens, coreTokensUsed, componentTokensUsed } =
      getTokensUsedInCSS(root, coreTokens, componentTokens)

    // Make sure the component doesn't use any undefined tokens
    const errors = []
    usedTokens.forEach((tokenName) => {
      if (
        !coreTokens[tokenName] &&
        !componentTokens[tokenName] &&
        !tokenName.startsWith("--mod") &&
        !tokenName.startsWith("--highcontrast")
      ) {
        errors.push(`${pkg.name} uses undefined token ${tokenName}`)
      }
    })

    // Make sure all tokens defined in the component are used
    Object.keys(componentTokens).forEach((tokenName) => {
      if (!usedTokens.includes(tokenName)) {
        errors.push(`${pkg.name} defines ${tokenName}, but never uses it`)
      }
    })

    if (errors.length) {
      throw new Error(errors.join("\n"))
    }
  } catch (e) {
    console.log(e)
  }
}

function checkSourceCSS() {
  return checkCSS(["themes/*.css", "index.css"])
}

function checkBuiltCSS() {
  return checkCSS("dist/index.css")
}

exports.buildCSS = async function () {
  try {
    await checkSourceCSS()
    await Promise.all([
      buildCSS(),
      buildCSSWithoutThemes(),
      (async () => {
        await buildCSSThemes()
        await buildCSSThemeIndex()
        await buildExpressTheme()
      })(),
    ])
    await checkBuiltCSS()
  } catch (e) {
    console.error(e)
  }
}
