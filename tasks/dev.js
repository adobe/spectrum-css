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

var browserSync = require('browser-sync').create();

function reload(done) {
  browserSync.reload();
  done();
}

function injectCSS() {
  return gulp.src([
    'dist/*.css',
    'dist/components/*/index-vars.css'
  ])
    .pipe(browserSync.stream());
}

function injectDocsResources() {
  return gulp.src('dist/docs/css/docs.css')
    .pipe(browserSync.stream());
}

function serve(done) {
  browserSync.init({
    port: 8080,
    ui: {
      port: 3000,
      weinre: {
        port: 3001
      }
    },
    startPath: 'docs/index.html',
    server: {
      baseDir: [
        './dist/'
      ],
      directory: true
    },
    watchOptions: {
      awaitWriteFinish: true
    }
  });
  done();
}

function watch() {
  gulp.watch([
    'docs/**/*.yml',
    '!examples/*.yml',
    'topdoc/lib/template.pug',
    'topdoc/lib/index.js',
    'topdoc/resources/js/*.js'
  ], gulp.series('reload-docs'));

  gulp.watch([
    'docs/examples/*.yml'
  ], gulp.series('reload-docs-examples'));

  gulp.watch([
    'docs/examples/*.html'
  ], gulp.series('reload-docs-standalone-examples'));

  gulp.watch([
    'topdoc/resources/css/*.css'
  ], gulp.series('reload-docs-css'));

  gulp.watch('icons/*.svg', gulp.series('reload-icons'));
}

function watchCSSLite() {
  gulp.watch('src/**/*.css', gulp.series('reload-css-lite'));
}

function watchCSS() {
  gulp.watch('src/**/*.css', gulp.series('reload-css'));
}

gulp.task('reload-css-lite', gulp.series('build-css-lite', injectCSS));
gulp.task('reload-css', gulp.series('build-css', injectCSS));

gulp.task('reload-docs-css', gulp.series('build-docs:copy-site-resources', injectDocsResources));

gulp.task('reload-docs', gulp.series('build-docs', reload));
gulp.task('reload-docs-examples', gulp.series('build-docs:examples', reload));
gulp.task('reload-docs-standalone-examples', gulp.series('build-docs:standalone-examples', reload));
gulp.task('reload-icons', gulp.series('icons', reload));

gulp.task('dev', gulp.series('build', serve, gulp.parallel(watch, watchCSSLite)));
gulp.task('dev-heavy', gulp.series('build', serve, gulp.parallel(watch, watchCSS)));
