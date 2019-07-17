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
const pugCompiler = require('pug');
const pug = require('gulp-pug');
const data = require('gulp-data');
const rename = require('gulp-rename');
const yaml = require('js-yaml');
const merge = require('merge-stream');
const through = require('through2');
const ext = require('replace-ext');
const logger = require('gulplog');

const dirs = require('../lib/dirs');
const depUtils = require('../lib/depUtils');

let minimumDeps = [
  'label',
  'link',
  'page',
  'tooltip',
  'typography',
  'sidenav'
];

let templateData = {
  nav: [],
  pkg: JSON.parse(fs.readFileSync(path.join(`${dirs.cwd}/package.json`), 'utf8'))
};

async function buildDocs_html(dep) {
  // Drop package org
  dep = dep.split('/').pop();

  let dependencyOrder = await depUtils.getPackageDependencyOrder(path.join(dirs.packages, dep));

  let dirName = `${dirs.packages}/${dep}`;

  return new Promise((resolve, reject) => {
    gulp.src(
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
      .pipe(data(function(file) {
        let packageDeps = dependencyOrder.map((dep) => dep.split('/').pop());
        packageDeps.push(dep);

        let docsDeps = minimumDeps.concat(packageDeps);

        return Object.assign({}, {
          util: require('./util'),
          dnaVars: JSON.parse(fs.readFileSync(path.join(dirs.packages, 'vars', 'dist', 'spectrum-metadata.json'), 'utf8')),
          markdown: require('markdown').markdown,
          Prisim: require('prismjs')
        }, templateData, {
          pageURL: path.basename(file.basename, '.yml') + '.html',
          dependencyOrder: docsDeps,
          pkg: JSON.parse(fs.readFileSync(path.join(dirs.packages, dep, 'package.json'), 'utf8'))
        });
      }))
      .pipe(through.obj(function compilePug(file, enc, cb) {
          let templateData = Object.assign({}, { component: yaml.safeLoad(String(file.contents)) }, file.data || {});

          file.path = ext(file.path, '.html');

          try {
            const templatePath = `${__dirname}/template.pug`;
            let compiled = pugCompiler.renderFile(templatePath, templateData);
            file.contents = Buffer.from(compiled);
          } catch (e) {
            return cb(e);
          }
          cb(null, file);
        })
      )
      .pipe(gulp.dest('dist/docs/'))
      .on('end', resolve)
      .on('error', reject);
  });
}

// Combined
async function buildDocs_individualPackages() {
  let dependencies = await depUtils.getFolderDependencyOrder(dirs.packages);

  return Promise.all(dependencies.map(buildDocs_html));
}

function buildSite_getData(done) {
  let nav = [];

  return gulp.src([
    `${dirs.packages}/*/docs.yml`,
    `${dirs.packages}/*/docs/*.yml`
  ])
  .pipe(through.obj(function compilePug(file, enc, cb) {
    let componentData;
    try {
      componentData = yaml.safeLoad(String(file.contents));
    } catch (e) {
      return cb(e);
    }

    var packageName = file.dirname.replace('/docs', '').split('/').pop();

    if (path.basename(file.basename) === 'docs.yml') {
      file.basename = packageName;
    }

    var fileName = ext(file.basename, '.html');
    nav.push({
      name: componentData.name,
      component: packageName,
      href: fileName
    });

    cb(null, file);
  }))
  .on('end', function() {
    templateData.nav = nav.sort(function(a, b) {
      return a.name <= b.name ? -1 : 1;
    });
    done();
  });
};

function buildSite_copyResources() {
  return gulp.src(`${dirs.builder}/site/resources/**`)
    .pipe(gulp.dest('dist/docs/'));
};

function buildSite_html() {
  return gulp.src(`${dirs.builder}/site/*.pug`)
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
};

function buildDocs_loadicons() {
  return gulp.src(require.resolve('loadicons'))
    .pipe(gulp.dest('dist/docs/js/loadicons/'));
}

function buildDocs_focusPolyfill() {
  return gulp.src(require.resolve('@adobe/focus-ring-polyfill'))
    .pipe(gulp.dest('dist/docs/js/focus-ring-polyfill/'));
}

function buildDocs_prism() {
  return gulp.src([
    `${path.dirname(require.resolve('prismjs'))}/themes/prism.css`,
    `${path.dirname(require.resolve('prismjs'))}/themes/prism-tomorrow.css`
  ])
    .pipe(gulp.dest('dist/docs/css/prisim/'));
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
    buildDocs_individualPackages,
    buildDocs_loadicons,
    buildDocs_focusPolyfill,
    buildDocs_prism
  )
);

let build = gulp.series(
  buildSite_getData,
  gulp.parallel(
    buildDocs,
    buildSite_copyResources,
    buildSite_html
  )
);

exports.buildSite_copyResources = buildSite_copyResources;
exports.buildSite_pages = buildSite_pages;
exports.buildSite_html = buildSite_html;
exports.buildDocs = buildDocs;
exports.build = build;
