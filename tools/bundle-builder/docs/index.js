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
const gulp = require('gulp');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const pugCompiler = require('pug');
const pug = require('gulp-pug');
const data = require('gulp-data');
const rename = require('gulp-rename');
const yaml = require('js-yaml');
const through = require('through2');
const ext = require('replace-ext');
const logger = require('gulplog');
const lunr = require('lunr');

const dirs = require('../lib/dirs');
const exec = require('../lib/exec');
const depUtils = require('../lib/depUtils');

let minimumDeps = [
  'icon',
  'statuslight',
  'link',
  'page',
  'site',
  'typography',
  'tooltip',
  'sidenav',
  'button',
  'textfield',
  'search',
  'menu',
  'popover',
  'underlay',
  'rule',
  'illustratedmessage'
];

let templateData = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8'))
};

async function buildDocs_forDep(dep) {
  // Drop package org
  dep = dep.split('/').pop();

  let metadata = JSON.parse(await fsp.readFile(path.join(dirs.components, 'vars', 'dist', 'spectrum-metadata.json')));

  let dependencyOrder = await depUtils.getPackageDependencyOrder(path.join(dirs.components, dep));

  let dirName = `${dirs.components}/${dep}`;

  logger.debug(`Will build docs for package in ${dirs.components}/${dep}`);

  return new Promise((resolve, reject) => {
    gulp.src(
      [
        `${dirName}/metadata.yml`,
        `${dirName}/metadata/*.yml`
      ], {
        allowEmpty: true
      }
    )
      .pipe(rename(function(file) {
        if (file.basename === 'metadata') {
          file.basename = dep;
        }
      }))
      .pipe(data(async function(file) {
        let componentDeps = dependencyOrder.map((dep) => dep.split('/').pop());
        componentDeps.push(dep);

        let pkg = JSON.parse(await fsp.readFile(path.join(dirs.components, dep, 'package.json')));

        let docsDeps = minimumDeps.concat(componentDeps);
        docsDeps = docsDeps.filter((dep, i) => docsDeps.indexOf(dep) === i);

        let date;
        try {
          date = await exec.promise(`git log -1 --format=%ai ${pkg.name}@${pkg.version}`, { pipe: false });

          date = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
        catch (err) {
          logger.error(`Could not determine date of release for ${pkg.name}@${pkg.version}`);
        }

        return Object.assign({}, {
          util: require(`${dirs.site}/util`),
          dnaVars: metadata
        }, templateData, {
          pageURL: path.basename(file.basename, '.yml') + '.html',
          dependencyOrder: docsDeps,
          releaseDate: date,
          pkg: pkg
        });
      }))
      .pipe(through.obj(function compilePug(file, enc, cb) {
        let component = yaml.safeLoad(String(file.contents));
        if (!component.id) {
          if (file.basename === 'metadata.yml') {
            // Use the component's name
            component.id = dep;
          }
          else {
            // Use the example file name
            component.id = path.basename(file.basename, '.yml');
          }
        }
        let templateData = Object.assign({}, { component: component }, file.data || {});

        file.path = ext(file.path, '.html');

        try {
          const templatePath = `${dirs.site}/templates/siteComponent.pug`;
          let compiled = pugCompiler.renderFile(templatePath, templateData);
          file.contents = Buffer.from(compiled);
        } catch (err) {
          return cb(err);
        }
        cb(null, file);
      }))
      .pipe(gulp.dest('dist/docs/'))
      .on('end', resolve)
      .on('error', reject);
  });
}

// Combined
async function buildDocs_individualPackages() {
  let dependencies = await depUtils.getFolderDependencyOrder(dirs.components);

  return Promise.all(dependencies.map(buildDocs_forDep));
}

function buildSite_generateIndex() {
  return gulp.src([
    `${dirs.components}/*/metadata.yml`,
    `${dirs.components}/*/metadata/*.yml`
  ])
  .pipe(function() {
    let docs = [];
    let store = {};
    let latestFile = null;
    function readYML(file, enc, cb) {
      let componentData;
      try {
        componentData = yaml.safeLoad(String(file.contents));
      } catch (err) {
        return cb(err);
      }

      var componentName = file.dirname.replace('/metadata', '').split('/').pop();

      if (path.basename(file.basename) === 'metadata.yml') {
        file.basename = componentName;
      }

      var fileName = ext(file.basename, '.html');

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

      cb();
    }

    function endStream(cb) {
      let indexFile = latestFile.clone({contents: false});
      indexFile.path = path.join(latestFile.base, 'index.json');

      let index = lunr(function() {
        this.ref('href');
        this.field('name', { boost: 10 });
        this.field('description');

        docs.forEach(function(doc) {
          this.add(doc);
        }, this);
      });

      // Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript

      indexFile.contents = Buffer.from(JSON.stringify(index));
      this.push(indexFile);

      let storeFile = latestFile.clone({contents: false});
      storeFile.path = path.join(latestFile.base, 'store.json');
      storeFile.contents = Buffer.from(JSON.stringify(store));
      this.push(storeFile);

      cb();
    }

    return through.obj(readYML, endStream);
  }())
  .pipe(gulp.dest('dist/docs/'));
};

function buildSite_getData() {
  let nav = [];
  return gulp.src([
    `${dirs.components}/*/metadata.yml`,
    `${dirs.components}/*/metadata/*.yml`
  ])
  .pipe(through.obj(function readYML(file, enc, cb) {
    let componentData;
    try {
      componentData = yaml.safeLoad(String(file.contents));
    } catch (err) {
      return cb(err);
    }

    var componentName = file.dirname.replace('/metadata', '').split('/').pop();

    if (path.basename(file.basename) === 'metadata.yml') {
      file.basename = componentName;
    }

    var fileName = ext(file.basename, '.html');
    nav.push({
      name: componentData.name,
      component: componentName,
      href: fileName,
      description: componentData.description
    });

    cb(null, file);
  }))
  .on('end', function() {
    templateData.nav = nav.sort(function(a, b) {
      return a.name <= b.name ? -1 : 1;
    });
  })
};

function buildSite_copyResources() {
  return gulp.src(`${dirs.site}/dist/**`)
    .pipe(gulp.dest('dist/docs/'));
}

function buildSite_copyFreshResources() {
  return gulp.src(`${dirs.site}/resources/**`)
    .pipe(gulp.dest('dist/docs/'));
}

function buildSite_html() {
  return gulp.src(`${dirs.site}/*.pug`)
    .pipe(data(function(file) {
      return {
        pageURL: path.basename(file.basename, '.pug') + '.html',
        dependencyOrder: minimumDeps
      };
    }))
    .pipe(pug({
      locals: templateData
    }))
    .pipe(gulp.dest('dist/docs/'));
}

function copySiteWorkflowIcons() {
  return gulp.src(path.join(path.dirname(require.resolve('@adobe/spectrum-css-workflow-icons')), 'spectrum-icons.svg'))
    .pipe(gulp.dest('dist/docs/img/'));
}

let buildSite_pages = gulp.series(
  buildSite_getData,
  buildSite_html
);

exports.buildSite = gulp.parallel(
  buildSite_copyResources,
  buildSite_pages
);

let buildDocs = gulp.series(
  buildSite_getData,
  gulp.parallel(
    buildSite_generateIndex,
    buildDocs_individualPackages,
    buildSite_copyResources,
    copySiteWorkflowIcons
  )
);

let build = gulp.series(
  buildSite_getData,
  gulp.parallel(
    buildDocs,
    buildSite_html
  )
);

exports.buildSite_getData = buildSite_getData;
exports.buildSite_copyResources = buildSite_copyResources;
exports.buildSite_copyFreshResources = buildSite_copyFreshResources;
exports.buildSite_pages = buildSite_pages;
exports.buildSite_html = buildSite_html;
exports.buildDocs_forDep = buildDocs_forDep;
exports.buildDocs = buildDocs;
exports.build = build;
