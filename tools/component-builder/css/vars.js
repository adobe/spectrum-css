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
const through = require('through2');
const postcss = require('postcss');
const logger = require('gulplog');
const fsp = require('fs').promises;
const path = require('path');

const varUtils = require('./lib/varUtils');

// Todo: get these values from a common place?
let colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

let scales = [
  'medium',
  'large'
];

function bakeVars() {
  return gulp.src([
    'dist/index-vars.css'
  ])
  .pipe(through.obj(async function doBake(file, enc, cb) {
    let pkg = JSON.parse(await fsp.readFile(path.join('package.json')));
    let pkgName = pkg.name.split('/').pop();
    let classNames = varUtils.getClassNames(file.contents, pkgName);

    // Find all custom properties used in the component
    let variableList = varUtils.getVarsFromCSS(file.contents);

    // Get vars in ALL components
    // Note: This is missing overridden variables, so we're incorrectly getting "uses undefined variable" warnings
    let vars = await varUtils.getAllComponentVars();

    // For each color stop and scale, filter the variables for those matching the component
    let usedVars = {};
    variableList.forEach(varName => {
      if (varName.indexOf('spectrum-global') !== -1) {
        logger.warn(`${pkg.name} directly uses global variable ${varName}`);
      }
      if (!vars[varName]) {
        logger.warn(`${pkg.name} uses undefined variable ${varName}`);
      }
      else {
        usedVars[varName] = vars[varName];
      }
    });

    let contents = varUtils.getVariableDeclarations(classNames, usedVars);
    let newFile = file.clone({contents: false});
    newFile.path = path.join(file.base, `vars.css`);
    newFile.contents = Buffer.from(contents);

    cb(null, newFile);
  }))
  .pipe(gulp.dest('dist/'));
}

exports.bakeVars = bakeVars;
