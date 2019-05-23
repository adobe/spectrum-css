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
var gulp = require('gulp');
var exec = require('child_process').exec;
var replace = require('gulp-replace');
var fs = require('fs');
var path = require('path');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');
var gulpExec = require('gulp-exec');
var plumb = require('./lib/plumb.js');

gulp.task('build-docs:examples', function() {
  var topdoc = path.resolve('node_modules', '.bin', 'topdoc');

  return gulp.src([
    'docs/examples/*.yml'
  ])
    .pipe(rename(function(path) {
      path.extname = '.css';
    }))
    .pipe(wrap(`/* topdoc
<%= contents %>
directory: <%= file.dirname %>
filename: <%= file.stem %>
*/`))
    .pipe(gulp.dest('temp/topdoc/'))
    .pipe(gulpExec(`${topdoc} -d temp/examples/<%= file.stem %> -t ./topdoc <%= file.path %> -a false && mv temp/examples/<%= file.stem %>/index.html dist/docs/<%= file.stem %>.html`))
    .pipe(gulpExec.reporter());
});

gulp.task('build-docs:standalone-examples', function() {
  return gulp.src([
    'docs/examples/*.html'
  ])
    .pipe(gulp.dest('dist/docs/'));
});

gulp.task('build-docs:topdoc', function(cb) {
  var exePath = path.resolve('node_modules', '.bin', 'topdoc');
  exec(exePath, function (err, stdout, stderr) {
    process.stdout.write('[topdoc] '+stdout);
    process.stderr.write(stderr);
    cb(err);
  });
});

gulp.task('build-docs:inject-topdoc', function() {
  return gulp.src([
    'dist/standalone/spectrum-light.css'
  ])
    .pipe(plumb())
    .pipe(replace(/\{\{\s*(.*?)\s*\}}/g, function(match, docPath) {
      var filePath = path.resolve('docs', docPath);
      var contents = fs.readFileSync(filePath, 'utf8');

      // Add filename
      contents += '\ndirectory: ' + path.dirname(docPath);
      contents += '\nfilename: ' + path.basename(docPath, '.yml');

      return contents;
    }))
    .pipe(gulp.dest('temp/topdoc/'));
});

gulp.task('build-docs:copy-site-resources', function() {
  return gulp.src([
    'topdoc/resources/**',
    '!gh-pages.html'
  ])
    .pipe(gulp.dest('dist/docs'));
});

gulp.task('build-docs:copy-prism-resources', function() {
  return gulp.src([
    'node_modules/prismjs/themes/prism.css',
    'node_modules/prismjs/themes/prism-tomorrow.css'
  ])
    .pipe(gulp.dest('dist/docs/css/vendor/'));
});


gulp.task('build-docs:copy-polyfill', function() {
  return gulp.src([
    require.resolve('@adobe/focus-ring-polyfill')
  ])
    .pipe(rename('focus-ring-polyfill.js'))
    .pipe(gulp.dest('dist/docs/js/vendor/'));
});

gulp.task('build-docs:copy-spectrum-icons', function() {
  return gulp.src([
    'node_modules/@spectrum/spectrum-icons/dist/svg/**',
    'node_modules/@spectrum/spectrum-icons/dist/lib/**'
  ])
    .pipe(gulp.dest('dist/icons/'));
});


gulp.task('build-docs:rewrite-spectrum-icons', function() {
  return gulp.src([
    'dist/icons/*.html'
  ])
    // Use the local copy of spectrum-css
    .pipe(replace('../lib/', ''))
    .pipe(replace('../spectrum-css/', '../'))
    .pipe(gulp.dest('dist/icons/'));
});

gulp.task('build-docs',
  gulp.series(
    'build-docs:inject-topdoc',
    'build-docs:topdoc',
    gulp.parallel(
      'build-docs:copy-site-resources',
      'build-docs:copy-prism-resources',
      'build-docs:copy-polyfill',
      'build-docs:copy-spectrum-icons',
      'build-docs:standalone-examples',
      'build-docs:examples'
    ),
    'build-docs:rewrite-spectrum-icons'
  )
);
