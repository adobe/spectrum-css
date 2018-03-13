/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2017 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
var gulp = require('gulp');
var log = require('fancy-log');
var path = require('path');
var replace = require('gulp-replace');
var Balthazar = require('@spectrum/balthazar');

gulp.task('dna:generate', function() {
  var outputPath = path.resolve('dist', 'vars');
  const CSS_OUTPUT_TYPE = Balthazar.OUTPUT_TYPES.css;
  // the api for convert is destination, type, path-to-json
  // default path to json will look for node_modules/@spectrum/spectrum-dna locally
  return Balthazar.convertVars(outputPath, CSS_OUTPUT_TYPE)
    .then(files => {
      log('load-dna: All output has been generated!');
      files.forEach(fileName => {
        log('  created:', fileName);
      });
    });
});

gulp.task('dna:postprocess-colorstops', function() {
  return gulp.src([
    'dist/vars/spectrum-*.css',
    '!dist/vars/spectrum-dimensions.css',
    '!dist/vars/spectrum-metadata.css'
  ])
    // replace anything with a value of 'transparent' with an actual transparent color
    // we could swap this to '0' and set an opacity property
    // but that's getting pretty crazy
    .pipe(replace(/(.*?:) transparent;\n/g, (match, p1) => {
      const result = `${p1} rgba(0, 0, 0, 0);\n`;
      return result;
    }))
    .pipe(gulp.dest('dist/vars/'));
});

gulp.task('load-dna',
  gulp.series(
    'dna:generate',
    'dna:postprocess-colorstops'
  )
);
