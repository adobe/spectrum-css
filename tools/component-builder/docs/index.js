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
const path = require('path');
const pug = require('pug');
const data = require('gulp-data');
const rename = require('gulp-rename');
const yaml = require('js-yaml');
const merge = require('merge-stream');
const through = require('through2');
const ext = require('replace-ext');

const sitePath = path.join(__dirname, '..', '..', '..', 'site');

var dependencies;
var docDependencies;
function getDependencies() {
  // Build a list of dependencies
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  var packageName = pkg.name.split('/').pop();

  dependencies = [];
  if (pkg.dependencies) {
    for (let depPkg in pkg.dependencies) {
      let deps = [];
      if (depPkg.indexOf('@spectrum-css') === 0) {
        let dependencyName = depPkg.split('/').pop();
        dependencies.push(dependencyName);
      }
    }
  }

  // Add dev deps: these are dependencies required to render examples in the docs for this specific component
  if (pkg.devDependencies) {
    for (let depPkg in pkg.devDependencies) {
      let deps = [];
      if (depPkg.indexOf('@spectrum-css') === 0 && depPkg !== '@spectrum-css/component-builder') {
        let dependencyName = depPkg.split('/').pop();
        dependencies.push(dependencyName);
      }
    }
  }
}

function buildDocs_html() {
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  var pkgname = pkg.name.split('/').pop();

  // This must be called per-task, or top level build won't know the right deps
  getDependencies();

  return gulp.src(
    [
      'docs.yml',
      'docs/*.yml'
    ], {
      allowEmpty: true
    }
  )
    .pipe(rename(function(file) {
      if (file.basename === 'docs' || file.basename === pkgname) {
        file.basename = 'index';
      }
    }))
    .pipe(data(function() {
      return {
        dependencies: dependencies,
        dnaVars: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'node_modules', '@spectrum-css/vars', 'dist', 'spectrum-metadata.json'), 'utf8')),
        pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
        util: require(`${sitePath}/util`)
      };
    }))
    .pipe(through.obj(function compilePug(file, enc, cb) {
        let data = Object.assign({}, { component: yaml.safeLoad(String(file.contents)) }, file.data || {});

        file.path = ext(file.path, '.html');

        try {
          const templatePath = `${sitePath}/templates/individualComponent.pug`;
          let compiled = pug.renderFile(templatePath, data);
          file.contents = Buffer.from(compiled);
        } catch (e) {
          return cb(e);
        }
        cb(null, file);
      })
    )
    .pipe(gulp.dest('dist/docs/'));
}

function buildDocs_resources() {
  return gulp.src(`${sitePath}/dist/**`)
    .pipe(gulp.dest('dist/docs/'));
}

function buildDocs_copyDeps() {
  // This must be called per-task, or top level build won't know the right deps
  getDependencies();

  function copyDep(dep) {
    return gulp.src(`node_modules/@spectrum-css/${dep}/dist/*`)
      .pipe(gulp.dest(`dist/docs/dependencies/@spectrum-css/${dep}/`));
  }
  return merge.apply(merge, dependencies.map(copyDep));
}

let buildDocs = gulp.parallel(
  buildDocs_resources,
  buildDocs_copyDeps,
  buildDocs_html
);

exports.buildDocs = buildDocs;
exports.buildDocs_html = gulp.series(buildDocs_html);
