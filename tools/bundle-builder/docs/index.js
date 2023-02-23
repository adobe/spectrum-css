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

let minimumDeps = [
  'icon',
  'statuslight',
  'link',
  'page',
  'site',
  'typography',
  'tooltip',
  'sidenav',
  'actionbutton',
  'button',
  'textfield',
  'clearbutton',
  'search',
  'menu',
  'fieldlabel',
  'picker',
  'popover',
  'underlay',
  'card',
  'divider',
  'illustratedmessage',
  'accordion',
  'table'
];

let templateData = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8'))
};
async function buildDocs_forDep(dep) {
  try {
 
  // // Drop package org
  dep = dep.split('/').pop();

  let metadata = JSON.parse(await fs.readFileSync(path.join(dirs.components, 'vars', 'dist', 'spectrum-metadata.json')));

  const package = path.dirname(require.resolve(`@spectrum-css/${dep}/package.json`));
  const dependencyOrder = await depUtils.getPackageDependencyOrder(package);

  let dirName = `${dirs.components}/${dep}`;
  
  const componentDeps = dependencyOrder.map((dep) => dep.split('/').pop());
  componentDeps.push(dep);
  
  const pkg = JSON.parse(await fs.readFileSync(path.join(dirs.components, dep, 'package.json')));

  let docsDeps = minimumDeps.concat(componentDeps);
  docsDeps = docsDeps.filter((dep, i) => docsDeps.indexOf(dep) === i);

  let date;
        try {
          const data = await npmFetch.json(pkg.name);
          date = data.time[pkg.version];
          date = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
        catch (err) {
          date = 'Unreleased';
          logger.error(`Could not determine date of release for ${pkg.name}@${pkg.version}`);
        }

  const siteData = Object.assign({}, {
    util: require(`${dirs.site}/util`),
    dnaVars: metadata
  }, templateData, {
    pageURL: path.basename(dep, '.yml') + '.html',
    dependencyOrder: docsDeps,
    releaseDate: date,
    pkg: pkg
  });
  try {
    const files = await fg([
      `${dirName}/metadata.yml`,
      `${dirName}/metadata/*.yml`
    ]);
    let file = {}
    files.forEach(filePath => {
      let component;
      const componentName = filePath.replace('/metadata', '').split('/').pop();
      file.basename = path.basename(filePath)
      try {
        component = yaml.safeLoad(fs.readFileSync(filePath, 'utf-8'));
      } catch (safeloadError) {
        console.error('Uh, oh... yaml loading failed for', componentName);
        throw safeloadError;
      }
      file.path = path.basename(filePath)
      file.data = component
      if (!component.id) {
        if (file.basename === 'metadata.yml') {
          // Use the component's name
          component.id = dep;
        } else {
          // Use the example file name
          component.id = path.basename(file.basename, '.yml');
        }
      }
      try {
        require(`${dirs.site}/util`).populateDNAInfo(component, metadata);
      } catch (e) {
        console.error(e)
      }
      
  
      // Arrange examples for processing
      var examples;
      if (!component.examples) {
        // Only one top-level example
        examples = [component];
      } else {
        // Multiple child examples
        examples = component.examples;
      }
  
      if (!Array.isArray(examples)) {
        examples = Object.values(examples);
      }
  
      examples.forEach(example => {
        if (example.dnaStatus === 'Deprecated' || example.cssStatus === 'Deprecated') {
          example.status = 'Deprecated';
        } else if (example.cssStatus === 'Verified' || example.dnaStatus === 'Canon') {
          example.status = 'Verified';
        } else {
          example.status = 'Contribution';
        }
      });
  
      const dnaStatusTranslation = {
        'Canon': 'Verified',
        'Precursor': 'Contribution'
      };
  
      file.path = ext(file.path, '.html');
      try {
        const compiled = nunjucks.render(`${dirs.site}/content/_includes/siteComponent.njk`, {
          ...siteData || {},
          component,
          status: dnaStatusTranslation[component.dnaStatus] || component.dnaStatus,
        });
    
        fs.writeFileSync(`dist/docs/${path.basename(filePath, '.yml')}.html`, compiled);
      } catch (e) {
        console.error(e)
      }
      
    });
  } catch (e) {
    console.error(" NO metadata.yml or metadata folder found in " + dep)
  }
} catch (e) {
  console.error(e + dep)
}
}

// Combined
async function buildDocs_individualPackages() {
  const dependencies = await depUtils.getFolderDependencyOrder(
    dirs.components
  )
  return Promise.all(dependencies.map(buildDocs_forDep))
}

// working
async function buildSite_generateIndex() {
  const components = await fg([
    `${dirs.components}/*/metadata.yml`,
    `${dirs.components}/*/metadata/*.yml`
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
    `${dirs.components}/*/metadata.yml`, `${dirs.components}/*/metadata/*.yml`,
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
    await Promise.all([buildDocs()])
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
