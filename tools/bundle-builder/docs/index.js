/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const gulp = require("gulp");
const pug = require("gulp-pug");
const data = require("gulp-data");
const through = require("through2");

const fg = require("fast-glob");
const pugCompiler = require("pug");
const yaml = require("js-yaml");
const ext = require("replace-ext");
const lunr = require("lunr");
const npmFetch = require("npm-registry-fetch");
const depSolver = require("dependency-solver");

require("colors");

const dirs = {
  components: path.join(__dirname, "../../../components"),
  site: path.join(__dirname, "../../../site"),
  root: path.join(__dirname, "../../.."),
};

let minimumDeps = [
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
  "inlinealert",
  "divider",
  "illustratedmessage",
  "accordion",
  "table",
];

let templateData = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync("package.json", "utf8")),
};

/**
 * Given a package path, get its dependencies
 * @param {string} packages - package directory
 * @return {Object} An object mapping the package name to its dependencies, or null if no dependencies
 */
async function getDependencies(package) {
  const {
    name,
    peerDependencies = {},
    dependencies = {},
    devDependencies = {},
  } = await fsp.readFile(require.resolve(path.join(`${package}/package.json`))).then(JSON.parse);

  return {
    name,
    dependencies: [
      ...new Set([
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ]),
    ].filter(
      (dep) =>
        dep.startsWith("@spectrum-css") &&
        !["bundle-builder", "component-builder-simple"].some((postfix) =>
          dep.endsWith(postfix)
        )
    ),
  };
}

/**
 * Given a list of package paths, solve the dependency order
 * @param {string[]} packages - package directories
 * @return {Promise<string[]>} The solved dependency order
 */
async function solveDependencies(packages) {
  async function getDependenciesForSolver(package) {
    let { name, dependencies } = await getDependencies(package);

    if (dependencies.length === 0) return;

    return { [name]: dependencies };
  }

  let depArray = (
    await Promise.all(packages.map(getDependenciesForSolver))
  ).filter(Boolean);

  let dependencies = {};
  depArray.forEach((dep) => {
    Object.assign(dependencies, dep);
  });

  return depSolver.solve(dependencies);
}

/**
 * Get the list of all packages in given directory
 * @param {string} packageDir - package directory
 * @return {Promise<string[]>} An array of package names in dependency order
 */
async function getPackageDependencyOrder(packageDir) {
  const { dependencies } = await getDependencies(packageDir);
  return solveDependencies(
    dependencies
      .map((dep) => {
        try {
          const packagePath = require.resolve(`${dep}/package.json`);
          return path.dirname(packagePath);
        } catch (err) {
          return;
        }
      })
      .filter(Boolean)
  );
}

/**
 * Get the list of all packages in given directory
 * @param {string} packagesDir - directory of packages
 * @return {Promise<string[]>} An array of package names in dependency order
 */
async function getFolderDependencyOrder(packagesDir) {
  // Get list of all packages
  const packages = (await fsp.readdir(packagesDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => path.join(packagesDir, dirent.name));

  const solution = (await solveDependencies(packages)) ?? [];

  return [...new Set(["@spectrum-css/tokens", ...solution])];
}

async function buildDocs_forDep(dep) {
  const folder = dep.split(path.sep).pop();
  const pkgPath = require.resolve(`${dep}/package.json`);

  if (!pkgPath) return;

  let isLocalComponent = true;
  // Not a local component, load it in the dependencies folder
  if (!["tokens", "ui-icons"].some(pkg => folder === pkg) && path.relative(dirs.components, pkgPath).startsWith("..")) {
    isLocalComponent = false;
  }

  let dirName = path.dirname(pkgPath);
  let pkg = require(pkgPath);

  const dependencyOrder = await getPackageDependencyOrder(dirName);

  // If a dirName was not found, try the deprecated folder instead
  if (!dirName || !isLocalComponent || dirName.split(path.sep).includes("node_modules")) {
    dirName = path.join(dirs.root, ".storybook", "deprecated", folder);

    if (!fs.existsSync(dirName)) return;
  }

  return new Promise((resolve, reject) => {
    gulp
      .src([`${dirName}/metadata/*.yml`, `${dirName}/*.yml`], {
        allowEmpty: true,
      })
      .pipe(
        data(async function (file) {
          const componentDeps = dependencyOrder.map((dep) =>
            dep.split(path.sep).pop()
          );
          componentDeps.push(folder);

          const docsDeps = [...new Set([...minimumDeps, ...componentDeps])];

          let date;
          try {
            const data = await npmFetch.json(pkg.name);
            date = data.time[pkg.version];
            date = new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          } catch (err) {
            date = "Unreleased";
          }

          /* TODO: does the template need to know if the styles are sourced from components or dependencies? */
          return {
            util: require(`${dirs.site}/util`),
            ...(templateData ?? {}),
            pageURL: path.basename(file.basename, ".yml") + ".html",
            dependencyOrder: docsDeps,
            releaseDate: date,
            pkg,
          };
        })
      )
      .pipe(
        through.obj(function compilePug(file, _, cb) {
          const component = yaml.load(String(file.contents));

          if (!component.id) {
            // Use the example file name
            component.id = path.basename(file.basename, ".yml");
          }

          const templateData = {
            component,
            ...(file.data ?? {}),
          };

          file.path = ext(file.path, ".html");

          try {
            const templatePath = `${dirs.site}/templates/siteComponent.pug`;
            let compiled = pugCompiler.renderFile(templatePath, templateData);
            file.contents = Buffer.from(compiled);
          } catch (err) {
            return cb(err);
          }
          cb(null, file);
        })
      )
      .pipe(gulp.dest("dist/"))
      .on("end", resolve)
      .on("error", reject);
  });
}

function copyDocs_forDep(dep) {
  const folder = dep.split(path.sep).pop();
  const pkgPath = require.resolve(`${dep}/package.json`);

  if (!pkgPath) return;

  let destDir = path.join(dirs.root, "dist", "components", folder);
  // Not a local component, load it in the dependencies folder
  if (folder !== "tokens" && path.relative(dirs.components, pkgPath).startsWith("..")) {
    destDir = path.join(dirs.root, "dist", "dependencies", dep);
  }

  const files = fg.sync(["package.json", "dist/**"], {
    cwd: path.dirname(pkgPath),
  });

  return Promise.all(
    files.map((file) => {
      const cleanFile = file.replace("dist/", "");
      const from = path.join(path.dirname(pkgPath), file);
      const dest = path.join(destDir, cleanFile);
      if (!fs.existsSync(path.dirname(dest))) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
      }

      return fs.copyFileSync(from, dest);
    })
  );
}

// Combined -- note: this does include deprecated packages that exist only in node_modules
async function buildDocs_individualPackages() {
  const dependencies = await getFolderDependencyOrder(dirs.components);

  const deprecatedDeps = fs
    .readdirSync(path.join(dirs.root, ".storybook", "deprecated"))
    .map((folder) => `@spectrum-css/${folder.split(path.sep).pop()}`) ?? [];

  const deprecatedSolution = (await solveDependencies(deprecatedDeps)) ?? [];

  return Promise.all(
    [...(dependencies ?? []), ...(deprecatedSolution ?? [])].map((d) =>
      Promise.all([buildDocs_forDep(d), copyDocs_forDep(d)])
    )
  );
}

function buildSite_generateIndex() {
  return gulp
    .src([
      `${dirs.components}/*/metadata/*.yml`,
      `${dirs.root}/.storybook/deprecated/*/*.yml`,
    ])
    .pipe(
      (function () {
        let docs = [];
        let store = {};
        let latestFile = null;
        function readYML(file, _, cb) {
          const componentData = yaml.load(String(file.contents));
          const componentName = file.dirname
            .replace("/metadata", "")
            .split(path.sep)
            .pop();

          const fileName = ext(file.basename, ".html");

          docs.push({
            href: fileName,
            name: componentData.name,
            description: componentData.description,
          });

          store[fileName] = {
            href: fileName,
            name: componentData.name,
            component: componentName,
            description: componentData.description,
          };

          latestFile = file;

          cb();
        }

        function endStream(cb) {
          let indexFile = latestFile.clone({ contents: false });
          indexFile.path = path.join(latestFile.base, "index.json");

          let index = lunr(function () {
            this.ref("href");
            this.field("name", { boost: 10 });
            this.field("description");

            docs.forEach(function (doc) {
              this.add(doc);
            }, this);
          });

          // Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript

          indexFile.contents = Buffer.from(JSON.stringify(index));
          this.push(indexFile);

          let storeFile = latestFile.clone({ contents: false });
          storeFile.path = path.join(latestFile.base, "store.json");
          storeFile.contents = Buffer.from(JSON.stringify(store));
          this.push(storeFile);

          cb();
        }

        return through.obj(readYML, endStream);
      })()
    )
    .pipe(gulp.dest("dist/"));
}

function buildSite_getData() {
  let nav = [];
  return gulp
    .src([
      `${dirs.components}/*/metadata/*.yml`,
      `${dirs.root}/.storybook/deprecated/*/*.yml`,
    ])
    .pipe(
      through.obj(function readYML(file, _, cb) {
        const componentData = yaml.load(String(file.contents));
        const componentName = file.dirname
          .replace("/metadata", "")
          .split(path.sep)
          .pop();

        const fileName = ext(file.basename, ".html");

        nav.push({
          name: componentData.name,
          component: componentName,
          hide: componentData.hide,
          href: fileName,
          description: componentData.description,
        });

        cb(null, file);
      })
    )
    .on("end", function () {
      templateData.nav = nav.sort(function (a, b) {
        return a.name <= b.name ? -1 : 1;
      });
    });
}

function buildSite_copyResources() {
  return gulp.src(`${dirs.site}/dist/**`).pipe(gulp.dest("dist/"));
}

function buildSite_copyFreshResources() {
  return gulp.src(`${dirs.site}/resources/**`).pipe(gulp.dest("dist/"));
}

function buildSite_html() {
  return gulp
    .src(`${dirs.site}/*.pug`)
    .pipe(
      data(function (file) {
        return {
          util: require(`${dirs.site}/util`),
          pageURL: path.basename(file.basename, ".pug") + ".html",
          dependencyOrder: minimumDeps,
        };
      })
    )
    .pipe(
      pug({
        locals: templateData,
      })
    )
    .pipe(gulp.dest("dist/"));
}

function copySiteWorkflowIcons() {
  return gulp
    .src(
      path.join(
        path.dirname(require.resolve("@adobe/spectrum-css-workflow-icons")),
        "spectrum-icons.svg"
      )
    )
    .pipe(gulp.dest("dist/img/"));
}

function copySiteUIIcons() {
  return gulp
    .src(require.resolve("@spectrum-css/ui-icons"))
    .pipe(gulp.dest("dist/img/"));
}

exports.buildSite_getData = buildSite_getData;
exports.buildSite_copyFreshResources = buildSite_copyFreshResources;
exports.buildSite_html = buildSite_html;
exports.buildDocs_forDep = buildDocs_forDep;
exports.buildDocs_individualPackages = buildDocs_individualPackages;

exports.buildSite_pages = gulp.series(buildSite_getData, buildSite_html);
exports.buildDocs = gulp.series(
  buildSite_getData,
  gulp.parallel(
    buildSite_generateIndex,
    buildDocs_individualPackages,
    buildSite_copyResources,
    copySiteWorkflowIcons,
    copySiteUIIcons
  )
);
exports.build = gulp.series(
  buildSite_getData,
  gulp.parallel(exports.buildDocs, buildSite_html)
);
