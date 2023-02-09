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
const fs = require("fs")
const fsp = fs.promises
const fg = require("fast-glob")
const path = require("path")
const yaml = require("js-yaml")
const through = require("through2")
const ext = require("replace-ext")
const lunr = require("lunr")
const npmFetch = require("npm-registry-fetch")
const nunjucks = require("nunjucks")
const logger = require("../lib/logger")
const dirs = require("../lib/dirs")
const depUtils = require("../lib/depUtils")

// adding nunjucks

const minimumDeps = [
  "icon",
  "statuslight",
  "link",
  "page",
  "site",
  "typography",
  "tooltip",
  "sidenav",
  "actionbutton",
  "button",
  "textfield",
  "clearbutton",
  "search",
  "menu",
  "fieldlabel",
  "picker",
  "popover",
  "underlay",
  "card",
  "divider",
  "illustratedmessage",
  "accordion",
  "table",
]

const templateData = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync("package.json", "utf8")),
}

async function buildDocs_forDep(dep) {
  // Drop package org
  dep = dep.split("/").pop()

  const metadata = JSON.parse(
    await fs.promises.readFile(
      path.join(
        dirs.topLevelComponents,
        "vars",
        "dist",
        "spectrum-metadata.json"
      )
    )
  )

  const dependencyOrder = await depUtils.getPackageDependencyOrder(
    path.join(dirs.topLevelComponents, dep)
  )

  const dirName = `${dirs.topLevelComponents}/${dep}`

  console.debug(
    `Will build docs for package in ${dirs.topLevelComponents}/${dep}`
  )
  // This code uses the glob function to select the files based on the given patterns,
  // and the through2 module to create a stream that processes the data.
  // The transform function is called for each file in the stream,
  // and performs the necessary transformation on the file data.

  // The code loops over the matches array and creates a read stream for each file,
  // pipes the data through the transform stream, and writes the transformed data to a new file.
  const files = [`${dirName}/metadata.yml`, `${dirName}/metadata/*.yml`]

  async function transform(file, enc, callback) {
    const componentDeps = dependencyOrder.map((dep) => dep.split("/").pop())
    componentDeps.push(dep)

    const pkg = JSON.parse(
      await fsp.readFile(
        path.join(dirs.topLevelComponents, dep, "package.json")
      )
    )

    let docsDeps = minimumDeps.concat(componentDeps)
    docsDeps = docsDeps.filter((dep, i) => docsDeps.indexOf(dep) === i)

    let date
    try {
      const data = await npmFetch.json(pkg.name)
      date = data.time[pkg.version]
      date = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch (err) {
      date = "Unreleased"
      logger.error(
        `Could not determine date of release for ${pkg.name}@${pkg.version}`
      )
    }

    const transformedFile = Object.assign(
      {},
      {
        util: require(`${dirs.site}/util`),
        dnaVars: metadata,
      },
      templateData,
      {
        pageURL: `${path.basename(file.basename, ".yml")}.html`,
        dependencyOrder: docsDeps,
        releaseDate: date,
        pkg: pkg,
      }
    )

    callback(null, transformedFile)
  }
  // eslint-disable-next-line consistent-return
  function compileNunJucks(file, enc, cb) {
    let component
    const componentName = file.dirname.replace("/metadata", "").split("/").pop()
    try {
      component = yaml.safeLoad(String(file.contents))
    } catch (safeloadError) {
      logger.error(
        "Uh, oh... during buildDocs_forDep, yaml loading failed for".yellow,
        componentName.red
      )
      throw safeloadError
    }

    if (!component.id) {
      if (file.basename === "metadata.yml") {
        // Use the component's name
        component.id = dep
      } else {
        // Use the example file name
        component.id = path.basename(file.basename, ".yml")
      }
    }
    let templateData = Object.assign(
      {},
      { component: component },
      file.data || {}
    )

    file.path = ext(file.path, ".html")

    try {
      const templatePath = `${dirs.site}/templates/siteComponent.njk`
      const compiled = nunjucks.render(templatePath, templateData)
      file.contents = Buffer.from(compiled)
    } catch (err) {
      return cb(err)
    }
    cb(null, file)
  }

  const matches = await fg(files)
  // eslint-disable-next-line no-restricted-syntax
  for (const file of matches) {
    fs.createReadStream(file)
      .pipe(through.obj(transform))
      .pipe(fs.createWriteStream(file.replace("metadata", dep)))
      .pipe(through.obj(compileNunJucks))
      .pipe(fs.createWriteStream(`dist/docs/${path.basename(file)}`))
  }
}

// Combined
async function buildDocs_individualPackages() {
  const dependencies = await depUtils.getFolderDependencyOrder(
    dirs.topLevelComponents
  )

  return Promise.all(dependencies.map(buildDocs_forDep))
}

// working
async function buildSite_generateIndex() {
  const components = await fg([
    `${dirs.topLevelComponents}/*/metadata.yml`,
    `${dirs.topLevelComponents}/*/metadata/*.yml`
  ])

  let docs = [];
  let store = {};
  let latestFile = null;

  components.forEach(component => {
    const file = fs.readFileSync(component);
    let componentData;
    try {
      componentData = yaml.safeLoad(String(file));
    } catch (err) {
      throw err;
    }

    const componentName = path.dirname(component).replace('/metadata', '').split('/').pop();

    if (path.basename(component) === 'metadata.yml') {
      component.basename = componentName;
    }

    const fileName = ext(path.basename(component), '.html');

    docs.push({
      href: fileName,
      name: componentData.name,
      description: componentData.description
    });

    store[fileName] = {
      href: fileName,
      name: componentData.name,
      component: componentName,
      description: componentData.description
    };

    latestFile = file;
  });

  let dest =  'dist/docs/'
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  let indexFile = {
    path: path.join(dest, 'index.json'),
    contents: Buffer.from(
      JSON.stringify(
        lunr(function() {
          this.ref('href');
          this.field('name', { boost: 10 });
          this.field('description');
  
          docs.forEach(function(doc) {
            this.add(doc);
          }, this);
        })
      )
    )
  };

  let storeFile = {
    path: path.join(dest, 'store.json'),
    contents: Buffer.from(JSON.stringify(store))
  };

  fs.writeFileSync(indexFile.path, indexFile.contents);
  fs.writeFileSync(storeFile.path, storeFile.contents);
}

/**
 * @description This will loop through each file in the metadataFiles array,
 * read the contents of the file
 * using the fs module's readFileSync method, perform any necessary t
 * ransformations on the contents, and then add an entry to the nav array for each file.
 * Finally, the nav array is sorted and assigned to the templateData.nav property.
 */
async function buildSite_getData() {
  let nav = []
  const files = await fg([
    `${dirs.topLevelComponents}/*/metadata.yml, ${dirs.topLevelComponents}/*/metadata/*.yml`,
  ])

  files.forEach(function (file) {
    let componentData
    var componentName = path
      .dirname(file)
      .replace("/metadata", "")
      .split("/")
      .pop()
    try {
      componentData = yaml.safeLoad(fs.readFileSync(file, "utf8"))
    } catch (safeloadError) {
      logger.error(
        "Uh, oh... during buildDocs_getData, yaml loading failed for".yellow,
        componentName.red
      )
      throw safeloadError
    }

    if (path.basename(file) === "metadata.yml") {
      file = componentName
    }

    var fileName = ext(path.basename(file), ".html")
    nav.push({
      name: componentData.name,
      component: componentName,
      hide: componentData.hide,
      fastLoad: componentData.fastLoad,
      href: fileName,
      description: componentData.description,
    })
  })

  templateData.nav = nav.sort(function (a, b) {
    return a.name <= b.name ? -1 : 1
  })
}

// copy all the resources from site/dist to dist/docs
function buildSite_copyResources() {
  const resourcesPath = `${dirs.site}/dist/`
  const distPath = path.join(path.dirname(__dirname), "..", "..", "dist/docs/")
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
      fs.mkdirSync(distPath, { recursive: true })
    }
    walk(resourcesPath, distPath)
  } catch (e) {
    console.error("Error in buildSite_Resournces " + e)
  }
}
function buildSite_copyFreshResources() {
  const resourcesPath = `${dirs.site}/resources/`
  const distPath = path.join(path.dirname(__dirname), "..", "..", "dist/docs/")
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
      fs.mkdirSync(distPath, { recursive: true })
    }
    walk(resourcesPath, distPath)
  } catch (e) {
    console.error("Error in buildSite_Resournces " + e)
  }
}

/**
 * @description This will loop through each file in the siteFiles array,
 * read the contents of the file
 * using the fs module's readFileSync method, perform any necessary transformations
 * on the contents using the nunjucksRender function, and then write
 * the transformed contents to a new file in the dist/docs/
 * directory using the fs module's writeFileSync method.
 */
async function buildSite_html() {
  const siteFiles = await fg(`${dirs.site}/content/_includes/**/*.njk`, {
    extend: ["njk"],
  })
  const distPath = "dist/docs/"
  siteFiles.forEach((file) => {
    const fileContents = fs.readFileSync(file, "utf8")
    const data = {
      // eslint-disable-next-line import/no-dynamic-require
      util: require(`${dirs.site}/util`),
      pageURL: `${path.basename(file, ".njk")}.html`,
      dependencyOrder: minimumDeps,
      nav: templateData.nav,
    }

    const transformedContents = nunjucks.renderString(
      "site/templates",
      fileContents
    )
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true })
    }
    fs.writeFileSync(
      `${distPath}${path.basename(file, ".njk")}.html`,
      transformedContents
    )
  })
}

function copySiteWorkflowIcons() {
  const sourcePath = path.join(
    path.dirname(require.resolve("@adobe/spectrum-css-workflow-icons")),
    "spectrum-icons.svg"
  )

  const destinationPath = "dist/docs/img/"

  fs.copyFileSync(sourcePath, `${destinationPath}/spectrum-icons.svg`)
  console.log("copySiteWorkflowIcons done")
}

// build all the site pages
const buildSite_pages = async () => {
  try {
    await buildSite_getData()
    await buildSite_html()
  } catch (e) {
    console.log("Error in builder-builder docs " + e)
  }
}

exports.buildSite = async () => {
  try {
    await Promise.all([buildSite_copyResources(), buildSite_pages()])
  } catch (e) {
    console.log("Error in builder-builder docs " + e)
  }
}

/**
 * @description This will first run the buildSite_getData function,
 * and then run the buildSite_generateIndex,
 * buildDocs_individualPackages, buildSite_copyResources, and copySiteWorkflowIcons
 * functions in parallel. The callback function will be invoked
 * when all of the tasks in the series have completed.
 */
async function buildDocs() {
  try {
    await buildSite_getData()
    await Promise.all([
      buildSite_generateIndex(),
      buildDocs_individualPackages(),
      buildSite_copyResources(),
      copySiteWorkflowIcons(),
    ])
  } catch (e) {
    console.log("Error in builder-builder docs " + e)
  }
}

// eslint-disable-next-line func-names
async function build() {
  try {
    await buildSite_getData()
    await Promise.all([buildDocs(), buildSite_html()])
  } catch (e) {
    console.log("Error in builder-builder docs " + e)
  }
}

exports.buildSite_getData = buildSite_getData
exports.buildSite_copyResources = buildSite_copyResources
exports.buildSite_copyFreshResources = buildSite_copyFreshResources
exports.buildSite_pages = buildSite_pages
exports.buildSite_html = buildSite_html
exports.buildDocs_forDep = buildDocs_forDep
exports.buildDocs = buildDocs
exports.build = build
