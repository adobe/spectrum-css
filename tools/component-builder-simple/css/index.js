/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// const { join } = require('path');
// const { readFile } = require('fs').promises;

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
// const logger = require('gulplog');

const { parse: parseValues } = require('postcss-values-parser');

// const postcssConfigPath = join(__dirname, '../');

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

// getTokensDefinedInCSS
function getTokensFromCSS(fileContent) {
  let variables = {};
  let usedTokens = [];

  if (!fileContent) {
    return { usedTokens, variables };
  }

  const root = require('postcss').parse(fileContent);

  root.walkRules((rule) => {
    rule.walkDecls((decl) => {
      const { prop, value } = decl;
      // Get tokens defined inside of the component
      if (prop.startsWith('--')) {
        variables[prop] = value;
      }

      if (!value.match(/var\(.*?\)/g)) return;

      const parsed = parseValues(value);
      for (const node of parsed.nodes) {
        for (const tokenName of getTokensUsedInValueNode(node)) {
          if (usedTokens.indexOf(tokenName) === -1) {
            usedTokens.push(tokenName);
          }
        }
      }
    });
  });

  return { usedTokens, variables };
}

// async function getCoreTokens() {
//   const fetchOptions = {
//     paths: [
//       process.cwd(),
//       join(process.cwd(), '../../')
//     ]
//   };
//   /* Resolve core tokens first from the current working directory, or if not found, from the root of the monorepo */
//   const coreTokensFile = require.resolve('@spectrum-css/tokens', fetchOptions);
//   const coreTokensPkg = require.resolve('@spectrum-css/tokens/package.json', fetchOptions);
//   if (coreTokensPkg) {
//     const version = await readFile(coreTokensPkg, 'utf8').then(JSON.parse).then(pkg => pkg.version).catch(logger.warn);
//     if (version) logger.info('Core tokens version:', version);

//     const contents = await readFile(coreTokensFile, 'utf8');
//     const { variables } = getTokensFromCSS(contents);
//     return variables;
//   }
// }

function buildCSS() {
  return gulp.src([
      'index.css',
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
    .pipe(concat('index.css'))
    .pipe(postcss({
      from: './index.css', // gulp-concat sets the file.path wrong, so override here
      // config: postcssConfigPath,
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
    .pipe(postcss({
      from: './index.css', // gulp-concat sets the file.path wrong, so override here
      // config: postcssConfigPath,
      keepUnusedVars: false,
      splitinatorOtions: { noFlatVariables: true },
    }))
    .pipe(gulp.dest('dist/'));
}

function buildCSSThemeIndex() {
  return gulp.src([
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
    .pipe(concat('index-theme.css'))
    .pipe(postcss({
      keepUnusedVars: true,
      splitinatorOtions: { noSelectors: true },
      // config: postcssConfigPath,
    }))
    .pipe(gulp.dest('dist/'));
}

function buildCSSThemes() {
  return gulp.src([
      'themes/*.css'
    ])
    .pipe(postcss({
      keepUnusedVars: true,
      splitinatorOtions: { noSelectors: true },
      // config: postcssConfigPath,
    }))
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
    .pipe(postcss({
      keepUnusedVars: true,
      additionalPlugins: {
        'postcss-combininator': {},
      },
      // config: postcssConfigPath,
    }))
    .pipe(gulp.dest('dist/themes/'));
}

// let coreTokens;
function checkCSS(glob) {
  return gulp.src(glob)
    .pipe(concat('index-combined.css'))
    // .pipe(through.obj(async function doBake(file, enc, cb) {
    //   // Fetch core tokes once during the build
    //   coreTokens = coreTokens ?? await getCoreTokens();

    //   /* @note: is this only fetching the package name? */
    //   const pkg = await readFile('package.json').then(JSON.parse).catch(logger.warn);

    //   // Parse only once
    //   const fileContent = file.contents.toString();
    //   if (!fileContent) cb(null, file);

    //   // Find all tokens used in the component
    //   const { variables: componentTokens, usedTokens } = getTokensFromCSS(fileContent);

    //   // Make sure the component doesn't use any undefined tokens
    //   usedTokens.forEach(tokenName => {
    //     if (!coreTokens[tokenName] && !componentTokens[tokenName] && !tokenName.startsWith('--mod') && !tokenName.startsWith('--highcontrast')) {
    //       logger.warn(`🔴 ${pkg.name} uses undefined token ${tokenName}`);
    //     }
    //   });

    //   // Make sure all tokens defined in the component are used
    //   Object.keys(componentTokens).forEach(tokenName => {
    //     if (!usedTokens.includes(tokenName)) {
    //       logger.warn(`🔴 ${pkg.name} defines ${tokenName}, but never uses it`);
    //     }
    //   });

    //   cb(null, file);
    // }));
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
