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
const postcssReal = require('postcss');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');

function getProcessors(keepVars = false) {
  return [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-inherit'),
    require('postcss-custom-properties')({
      noValueNotifications: 'error',
      warnings: !keepVars
    }),
    require('./lib/postcss-custom-properties-passthrough')(),
    require('postcss-calc'),
    keepVars ? require('./lib/postcss-custom-properties-mapping') : null,
    keepVars ? require('./lib/postcss-notnested')({ replace: '.spectrum' }) : null,
    require('postcss-functions')({
      functions: {
        noscale: function(value) {
          return value.toString().toUpperCase();
        },
        percent: function(value) {
          return parseInt(value, 10) / 100;
        }
      }
    }),
    require('./lib/postcss-strip-comments')({ preserveTopdoc: false }),
    require('postcss-focus-ring'),
    require('autoprefixer')({
      'browsers': [
        'IE >= 10',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 iOS versions'
      ]
    })
  ].filter(Boolean);
}

var processors = getProcessors();
var varsProcessors = getProcessors(true);

/**
 * Builds a version of each component that uses native CSS variables. Relies on the unique variables extracted from DNA.
 */
gulp.task('build-css:vars', function() {
  return gulp.src([
    'index.css',
    'skin.css'
  ], {
    allowEmpty: true // Allow missing skin.css
  })
    .pipe(concat('index.css'))
    .pipe(postcss(varsProcessors))
    .pipe(gulp.dest('dist/'));
});

/**
 * Builds a version of each component that uses native CSS variables. Relies on the unique variables extracted from DNA.
 */
gulp.task('build-css', gulp.parallel(
  'build-css:vars'
));
