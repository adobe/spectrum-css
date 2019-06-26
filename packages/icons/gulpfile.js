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
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');

require('@spectrum-css/build');

gulp.task('generate-svgsprite', function() {
  return gulp.src('combined/*.svg')
    .pipe(rename(function(filePath) {
      filePath.basename = 'spectrum-css-icon-' + filePath.basename;
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('spectrum-css-icons.svg'))
    .pipe(gulp.dest('dist/'));
});

function getSVGSpriteTask(size) {
  return function() {
    return gulp.src(`${size}/*.svg`)
      .pipe(rename(function(filePath) {
        filePath.basename = 'spectrum-css-icon-' + filePath.basename.replace(/S_UI(.*?)_.*/, '$1');
      }))
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename(`spectrum-css-icons-${size}.svg`))
      .pipe(gulp.dest('dist/'));
  };
}

gulp.task('generate-svgsprite-medium', getSVGSpriteTask('medium'));
gulp.task('generate-svgsprite-large', getSVGSpriteTask('large'));

gulp.task('icons', gulp.parallel(
  'generate-svgsprite-medium',
  'generate-svgsprite-large',
  gulp.series(
    'generate-svgsprite'
  )
));

gulp.task('default', gulp.parallel(
  'icons',
  'build-css'
));
