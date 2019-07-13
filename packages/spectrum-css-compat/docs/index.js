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
const depSolver = require('dependency-solver');
const logger = require('gulplog');

let dependencyOrder = null;

function getDependencyOrder(done) {
  dependencyOrder = [];

  let dependencies = {};

  return gulp.src([
    'node_modules/@spectrum-css/*/package.json'
  ])
  .pipe(through.obj(function readPackage(file, enc, cb) {
    let pkg;
    try {
      pkg = JSON.parse(String(file.contents));
    } catch (e) {
      return cb(e);
    }

    dependencies[pkg.name] = [];
    if (pkg.dependencies) {
      dependencies[pkg.name] = Object.keys(pkg.dependencies).filter(function(dep) {
        return dep.indexOf('@spectrum-css') === 0;
      });
    }

    cb(null, file);
  }))
  .on('end', function() {
    dependencyOrder = depSolver.solve(dependencies);
    dependencyOrder = dependencyOrder.map(function(dep) {
      return dep.split('/').pop();
    });

    logger.debug(`Dependency order: \n${dependencyOrder.join('\n')}`);
    done();
  });
};

function buildDocs_html(dep) {
  var dirName = `node_modules/@spectrum-css/${dep}`;
  var pkg = JSON.parse(fs.readFileSync(`${dirName}/package.json`, 'utf8'));

  return gulp.src(
    [
      `${dirName}/docs.yml`,
      `${dirName}/docs/*.yml`
    ], {
      allowEmpty: true
    }
  )
    .pipe(rename(function(file) {
      if (file.basename === 'docs') {
        file.basename = dep;
      }
    }))
    .pipe(data(function() {
      return {
        util: require('./util'),
        dnaVars: JSON.parse(fs.readFileSync(path.join('node_modules', '@spectrum-css/vars', 'dist', 'spectrum-metadata.json'), 'utf8')),
        pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
        markdown: require('markdown').markdown,
        Prisim: require('prismjs')
      };
    }))
    .pipe(through.obj(function compilePug(file, enc, cb) {
        let data = Object.assign({}, { component: yaml.safeLoad(String(file.contents)) }, file.data || {});

        file.path = ext(file.path, '.json');

        try {
          const templatePath = `${__dirname}/template.pug`;
          let compiled = pug.renderFile(templatePath, data);
          let json = JSON.stringify({
            name: dep,
            version: pkg.version,
            markup: compiled
          });
          file.contents = Buffer.from(json);
        } catch (e) {
          return cb(e);
        }
        cb(null, file);
      })
    )
    .pipe(gulp.dest('dist/docs/'));
}

// Combined
function buildDocs() {
  return merge.apply(merge, dependencyOrder.map(buildDocs_html));
}

module.exports = gulp.series(
  getDependencyOrder,
  buildDocs
);
