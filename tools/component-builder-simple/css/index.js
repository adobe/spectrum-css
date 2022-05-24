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
const path = require('path');
const through = require('through2');
const postcss = require('gulp-postcss');
const postcssReal = require('postcss');
const processors = require('./processors').processors;
const fsp = require('fs').promises;

function getTokensUsedInCSS(root, coreTokens, componentTokens) {
  let usedTokens = [];
  let coreTokensUsed = {};
  let componentTokensUsed = {};

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      let matches = decl.value.match(/var\(.*?\)/g);
      if (matches) {
        matches.forEach(function(match) {
          let tokenName = match.replace(/var\((--[\w\-]+),?.*?\)/, '$1').trim();
          if (coreTokens[tokenName]) {
            coreTokensUsed[tokenName] = (coreTokensUsed[tokenName] ?? 0) + 1;
          }
          else if (componentTokens[tokenName]) {
            componentTokensUsed[tokenName] = (componentTokensUsed[tokenName] ?? 0) + 1;
          }
          if (usedTokens.indexOf(tokenName) === -1) {
            usedTokens.push(tokenName);
          }
        });
      }
    });
  });

  return { usedTokens, coreTokensUsed, componentTokensUsed };
}

function getTokensDefinedInCSS(root) {
  let variables = {};

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      if (decl.prop.startsWith('--')) {
        variables[decl.prop] = decl.value;
      }
    });
  });

  return variables;
}

async function getCoreTokens() {
  const coreTokensFile = require.resolve('@spectrum-css/tokens');
  let contents = await fsp.readFile(coreTokensFile, 'utf8');
  let root = postcssReal.parse(contents);
  return getTokensDefinedInCSS(root);
}

function buildCSS() {
  return gulp.src('index.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
}

let coreTokens = null;
function checkCSS() {
  return gulp.src('dist/index.css')
    .pipe(through.obj(async function doBake(file, enc, cb) {
      // Fetch core tokes once during the build
      if (coreTokens === null) {
        coreTokens = await getCoreTokens();
      }

      let pkg = JSON.parse(await fsp.readFile(path.join('package.json')));

      // Parse only once
      let root = postcssReal.parse(file.contents);

      // Get tokens defined inside of the component
      let componentTokens = getTokensDefinedInCSS(root);

      // Find all custom properties used in the component
      let { usedTokens, coreTokensUsed, componentTokensUsed } = getTokensUsedInCSS(root, coreTokens, componentTokens);

      // For each color stop and scale, filter the variables for those matching the component
      let errors = [];
      usedTokens.forEach(tokenName => {
        if (!coreTokens[tokenName] && !componentTokens[tokenName] && !tokenName.startsWith('--custom') && !tokenName.startsWith('--highcontrast')) {
          errors.push(`${pkg.name} uses undefined token ${tokenName}`);
        }
      });

      if (errors.length) {
        return cb(new Error(errors.join('\n')), file);
      }

      cb(null);
    }));
}

exports.checkCSS = checkCSS;
exports.buildCSS = gulp.series(
  buildCSS,
  checkCSS
);
