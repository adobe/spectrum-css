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
const postcssReal = require('postcss');
const fsp = require('fs').promises;
const path = require('path');
const concat = require('gulp-concat');

// Todo: get these values from a common place?
var colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

var scales = [
  'medium',
  'large'
];

var gatherVars = postcssReal.plugin('gather-vars', function(variableList) {
  return function (root, result) {
    // Process each rule
    root.walkRules((rule, ruleIndex) => {
      // Check every declaration
      rule.walkDecls((decl) => {
        let matches = decl.value.match(/var\(.*?\)/g);
        if (matches) {
          matches.forEach(function(match) {
            if (variableList.indexOf(match) === -1) {
              let varName = match.replace(/var\((--[\w\-]+),?\s*([\w\-]*)\)/, '$1').trim();
              variableList.push(varName);
            }
          });
        }
      });
    });
  }
});

var gatherVarValues = postcssReal.plugin('gather-var-values', function(variables) {
  return function (root, result) {
    // Process each rule
    root.walkRules((rule, ruleIndex) => {
      // Check every declaration
      rule.walkDecls((decl) => {
        variables[decl.prop] = decl.value;
      });
    });
  }
});

function getVars(css) {
  return new Promise((resolve, reject) => {
    var variableList = [];
    postcssReal(gatherVars(variableList))
      .process(css)
      .then(() => {
        resolve(variableList);
      });
  });
}

function getVarValues(css) {
  return new Promise((resolve, reject) => {
    var variables = {};
    postcssReal(gatherVarValues(variables))
      .process(css)
      .then(() => {
        resolve(variables);
      });
  });
}

async function getVariables(colorStop) {
  // Read in variables from @spectrum-css/vars
  // Filter by list of required vars
  const varDir = path.join('node_modules', '@spectrum-css', 'vars');
  let css = await fsp.readFile(path.join(varDir, 'vars', `spectrum-${colorStop}.css`));
  let vars = await getVarValues(css);
  return { colorStop: colorStop, vars: vars };
}

function getVariableDeclarations(component, modifier, vars) {
  return `
.spectrum--${modifier} {
${Object.keys(vars).map((varName) => `  ${varName}: ${vars[varName]};`).join('\n')}
}
`;
}

async function bakeVars() {
  let pkg = JSON.parse(await fsp.readFile(path.join('package.json')));

  return gulp.src([
    'index.css',
    'skin.css'
  ])
  .pipe(concat('all.css'))
  .pipe(through.obj(async function doBake(file, enc, cb) {
    // Find all custom properties used in the component
    let variableList = await getVars(file.contents);

    // For each color stop and scale, filter the variables for those matching the component
    let vars = await Promise.all(colorStops.concat(scales).map(getVariables));
    vars.forEach((varSet) => {
      let {colorStop, vars} = varSet;

      let usedVars = {};
      for (let varName in vars) {
        if (variableList.indexOf(varName) !== -1) {
          usedVars[varName] = vars[varName];
        }
      }

      var contents = getVariableDeclarations(pkg.name.split('/').pop(), colorStop, usedVars);
      let newFile = file.clone({contents: false});
      newFile.path = path.join(file.base, `spectrum-${colorStop}.css`);
      newFile.contents = Buffer.from(contents);
      this.push(newFile);
    });

    cb(null);
  }))
  .pipe(gulp.dest('dist/vars/'));
}

exports.bakeVars = bakeVars;
