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
const depSolver = require('dependency-solver');
const logger = require('gulplog');

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
  pkg: JSON.parse(fs.readFileSync(path.join('package.json'), 'utf8'))
};

function buildDocs_html(dep) {
  let dirName = `node_modules/@spectrum-css/${dep}`;
  let pkg = JSON.parse(fs.readFileSync(`${dirName}/package.json`, 'utf8'));

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
    .pipe(data(function(file) {
      let packageDeps = Object.keys(pkg.dependencies)
        .filter((dep) => dep.indexOf('@spectrum-css') === 0)
        .map((dep) => dep.split('/').pop());

      packageDeps.push(dep);

      let docsDeps = minimumDeps.concat(packageDeps);

      return Object.assign({}, {
        util: require('./util'),
        dnaVars: JSON.parse(fs.readFileSync(path.join('node_modules', '@spectrum-css/vars', 'dist', 'spectrum-metadata.json'), 'utf8')),
        markdown: require('markdown').markdown,
        Prisim: require('prismjs')
      }, templateData, {
        pageURL: path.basename(file.basename, '.yml') + '.html',
        dependencyOrder: docsDeps,
        pkg: JSON.parse(fs.readFileSync(path.join('node_modules', `@spectrum-css/${dep}`, 'package.json'), 'utf8'))
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
    .pipe(gulp.dest('dist/docs/'));
}

// Combined
function buildDocs_individualPackages() {
  let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  let unsortedDependencies = Object.keys(pkg.devDependencies)
    .filter(function(dep) {
      return dep.indexOf('@spectrum-css') === 0;
    })
    .map(function(dep) {
      return dep.split('/').pop();
    });

  return merge.apply(merge, unsortedDependencies.map(buildDocs_html));
}

function buildSite_getData(done) {
  templateData.nav = [];

  return gulp.src([
    'node_modules/@spectrum-css/*/docs.yml',
    'node_modules/@spectrum-css/*/docs/*.yml'
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
    templateData.nav.push({
      name: componentData.name,
      component: packageName,
      href: fileName
    });

    cb(null, file);
  }))
  .on('end', function() {
    templateData.nav = templateData.nav.sort(function(a, b) {
      return a.name <= b.name ? -1 : 1;
    });
    done();
  });
};

function buildSite_copyResources() {
  return gulp.src('site/resources/**')
    .pipe(gulp.dest('dist/docs/'));
};

function buildSite_html() {
  return gulp.src('site/*.pug')
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

let buildSite_pages = exports.buildSite_pages = gulp.series(
  buildSite_getData,
  buildSite_html
);

exports.buildSite_copyResources = buildSite_copyResources;

exports.buildSite = gulp.parallel(
  buildSite_copyResources,
  buildSite_pages
);

exports.buildSite_html = buildSite_html;

exports.buildDocs = gulp.parallel(
  buildDocs_individualPackages,
  buildDocs_loadicons,
  buildDocs_focusPolyfill,
  buildDocs_prism
);
