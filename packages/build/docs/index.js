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

// Build a list of dependencies
var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
var packageName = pkg.name.split('/').pop();

var dependencies = [];
if (pkg.dependencies) {
  for (let depPkg in pkg.dependencies) {
    let deps = [];
    if (depPkg.indexOf('@spectrum-css') === 0) {
      let dependencyName = depPkg.split('/').pop();
      dependencies.push(dependencyName);
    }
  }
}

// Dependencies that are required for docs to render
var docDependencies = [];
var buildPkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'package.json'), 'utf8'));
if (buildPkg.dependencies) {
  for (let depPkg in buildPkg.dependencies) {
    let deps = [];
    if (depPkg.indexOf('@spectrum-css') === 0) {
      let dependencyName = depPkg.split('/').pop();
      docDependencies.push(dependencyName);
    }
  }
}

docDependencies.forEach(function(docDep) {
  // Drop dupes, and don't include the package itself if that's what we're building
  if (docDep !== packageName && dependencies.indexOf(docDep) === -1) {
    dependencies.push(docDep);
  }
});

gulp.task('build-docs:html', function() {
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  var pkgname = pkg.name.split('/').pop();

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
        util: require('./util'),
        dependencies: dependencies,
        dnaVars: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'node_modules', '@spectrum-css/vars', 'dist', 'spectrum-metadata.json'), 'utf8')),
        pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
        markdown: require('markdown').markdown,
        Prisim: require('prismjs')
      };
    }))
    .pipe(through.obj(function compilePug(file, enc, cb) {
        let data = Object.assign({}, { component: yaml.safeLoad(String(file.contents)) }, file.data || {});

        file.path = ext(file.path, '.html');

        try {
          const templatePath = `${__dirname}/template.pug`;
          let compiled = pug.renderFile(templatePath, data);
          file.contents = Buffer.from(compiled);
        } catch (e) {
          return cb(e);
        }
        cb(null, file);
      })
    )
    .pipe(gulp.dest('dist/docs/'));
});

gulp.task('build-docs:resources', function() {
  return gulp.src(`${__dirname}/resources/**`)
    .pipe(gulp.dest('dist/docs/'));
});

gulp.task('build-docs:copyDeps', function() {
  function copyDep(dep) {
    return gulp.src(`node_modules/@spectrum-css/${dep}/dist/*.css`)
      .pipe(gulp.dest(`dist/docs/dependencies/@spectrum-css/${dep}/`));
  }
  return merge.apply(merge, dependencies.map(copyDep));
});

gulp.task('build-docs:copyDocDeps', function() {
  function copyDep(dep) {
    return gulp.src(`${__dirname}/../node_modules/@spectrum-css/${dep}/dist/index.css`)
      .pipe(gulp.dest(`dist/docs/dependencies/@spectrum-css/${dep}/`));
  }
  return merge.apply(merge, docDependencies.map(copyDep));
});

gulp.task('build-docs:loadicons', function() {
  return gulp.src(require.resolve('loadicons'))
    .pipe(gulp.dest('dist/docs/dependencies/loadicons/'));
});

gulp.task('build-docs:focus-ring-polyfill', function() {
  return gulp.src(require.resolve('@adobe/focus-ring-polyfill'))
    .pipe(gulp.dest('dist/docs/dependencies/@adobe/focus-ring-polyfill/'));
});

gulp.task('build-docs:prism', function() {
  return gulp.src([
    `${path.dirname(require.resolve('prismjs'))}/themes/prism.css`,
    `${path.dirname(require.resolve('prismjs'))}/themes/prism-tomorrow.css`
  ])
    .pipe(gulp.dest('dist/docs/css/vendor/'));
});

gulp.task('build-docs', gulp.parallel(
  'build-docs:resources',
  'build-docs:loadicons',
  'build-docs:focus-ring-polyfill',
  'build-docs:prism',
  'build-docs:copyDeps',
  'build-docs:copyDocDeps',
  'build-docs:html'
));
