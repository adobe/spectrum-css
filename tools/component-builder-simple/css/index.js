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
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const postcssReal = require('postcss');
const fsp = require('fs').promises;
const { parse } = require('postcss-values-parser');
const processorsFunction = require('./processors').getProcessors;
const processors = processorsFunction();

function getTokensUsedInValueNode(node, usedTokens) {
  usedTokens = usedTokens ?? [];
  if (node.nodes) {
    node.nodes.forEach(subNode => {
      if (subNode.type === 'word' && subNode.value.startsWith('--')) {
        usedTokens.push(subNode.value);
      }
      else if (subNode.type === 'func') {
        getTokensUsedInValueNode(subNode, usedTokens);
      }
    });
  }
  return usedTokens;
}

function getTokensUsedInCSS(root, coreTokens, componentTokens) {
  let usedTokens = [];
  let coreTokensUsed = {};
  let componentTokensUsed = {};

  root.walkRules((rule, ruleIndex) => {
    rule.walkDecls((decl) => {
      let matches = decl.value.match(/var\(.*?\)/g);
      if (matches) {
        let parsed = parse(decl.value);
        parsed.nodes.forEach(node => {
          const usedTokensInValue = getTokensUsedInValueNode(node);
          usedTokensInValue.forEach(tokenName => {
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
  return gulp.src([
      'index.css',
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
    .pipe(concat('index.css'))
    .pipe(postcss(processors, {
      from: './index.css' // gulp-concat sets the file.path wrong, so override here
    }))
    .pipe(gulp.dest('dist/'));
}

function buildCSSWithoutThemes() {
  return gulp.src([
      'index.css',
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
    .pipe(concat('index-base.css'))
    .pipe(postcss(processorsFunction(false, { noFlatVariables: true }), {
      from: './index.css' // gulp-concat sets the file.path wrong, so override here
    }))
    .pipe(gulp.dest('dist/'));
}

function buildCSSThemeIndex() {
  return gulp.src([
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
    .pipe(concat('index-theme.css'))
    .pipe(postcss(processorsFunction(true, { noSelectors: true })))
    .pipe(gulp.dest('dist/'));
}

function buildCSSThemes() {
  return gulp.src([
      'themes/*.css'
    ])
    .pipe(postcss(processorsFunction(true, { noSelectors: true })))
    .pipe(gulp.dest('dist/themes/'));
}

/**
  Special case for express: it needs Spectrum base vars and needs to override them
*/
function buildExpressTheme() {
  return gulp.src([
      'dist/index-theme.css'
    ])
    .pipe(concat('express.css'))
    .pipe(postcss(processorsFunction(true).concat(require('postcss-combininator'))))
    .pipe(gulp.dest('dist/themes/'));
}

let coreTokens = null;
function checkCSS(glob) {
  return gulp.src(glob)
    .pipe(concat('index-combined.css'))
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

      // Find all tokens used in the component
      let { usedTokens, coreTokensUsed, componentTokensUsed } = getTokensUsedInCSS(root, coreTokens, componentTokens);

      // Make sure the component doesn't use any undefined tokens
      let errors = [];
      usedTokens.forEach(tokenName => {
        if (!coreTokens[tokenName] && !componentTokens[tokenName] && !tokenName.startsWith('--custom') && !tokenName.startsWith('--highcontrast')) {
          errors.push(`${pkg.name} uses undefined token ${tokenName}`);
        }
      });

      // Make sure all tokens defined in the component are used
      Object.keys(componentTokens).forEach(tokenName => {
        if (!usedTokens.includes(tokenName)) {
          errors.push(`${pkg.name} defines ${tokenName}, but never uses it`);
        }
      });

      if (errors.length) {
        return cb(new Error(errors.join('\n')), file);
      }

      cb(null);
    }));
}

function checkSourceCSS() {
  return checkCSS([
    'themes/*.css',
    'index.css'
  ]);
}

function checkBuiltCSS() {
  return checkCSS('dist/index.css');
}

exports.buildCSS = gulp.series(
  checkSourceCSS,
  gulp.parallel(
    buildCSS,
    buildCSSWithoutThemes,
    gulp.series(
      buildCSSThemes,
      buildCSSThemeIndex,
      buildExpressTheme
    )
  ),
  checkBuiltCSS
);
