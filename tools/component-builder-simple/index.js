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

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

function getTokensDefinedInCSS(root) {
  let variables = {};

  root.walkRules((rule) => {
    rule.walkDecls((decl) => {
      if (decl.prop.startsWith('--')) {
        variables[decl.prop] = decl.value;
      }
    });
  });

  return variables;
}

async function getCoreTokens() {
  const fetchOptions = {
    paths: [
      process.cwd(),
      path.join(process.cwd(), '../../')
    ]
  };
  /* Resolve core tokens first from the current working directory, or if not found, from the root of the monorepo */
  const coreTokensFile = require.resolve('@spectrum-css/tokens', fetchOptions);
  let contents = await fsp.readFile(coreTokensFile, 'utf8');
  let root = require('postcss').parse(contents);
  return getTokensDefinedInCSS(root);
}

const coreTokens = await getCoreTokens();

function checkCSS(glob) {
  return gulp.src(glob)
    .pipe(require('gulp-concat')('index-combined.css'))
    .pipe(require('through2').obj(async function doBake(file, enc, cb) {
      // Fetch core tokes once during the build
      if (coreTokens === null) {
        coreTokens = await getCoreTokens();
      }

      let pkg = JSON.parse(await fsp.readFile(path.join('package.json')));

      // Parse only once
      let root = require('postcss').parse(file.contents);

      // Get tokens defined inside of the component
      let componentTokens = getTokensDefinedInCSS(root);

      // Find all tokens used in the component
      let { usedTokens } = getTokensUsedInCSS(root, coreTokens, componentTokens);

      // Make sure the component doesn't use any undefined tokens
      let errors = [];
      usedTokens.forEach(tokenName => {
        if (!coreTokens[tokenName] && !componentTokens[tokenName] && !tokenName.startsWith('--mod') && !tokenName.startsWith('--highcontrast')) {
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

exports.build = exports.buildLite = exports.buildMedium = exports.buildHeavy = exports.buildCSS = gulp.series(
  checkSourceCSS = () => checkCSS([
    'themes/*.css',
    'index.css'
  ]),
  gulp.parallel(
    buildCSS = () => gulp.src([
      'index.css',
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
      .pipe(require('gulp-concat')('index.css'))
      .pipe(require('gulp-postcss')({
        config: __dirname,
        from: './index.css' // gulp-concat sets the file.path wrong, so override here
      }))
      .pipe(gulp.dest('dist/')),
    buildCSSWithoutThemes = () => gulp.src([
      'index.css',
      'themes/spectrum.css', // spectrum comes first
      'themes/*.css'
    ])
      .pipe(concat('index-base.css'))
      .pipe(postcss({
        config: __dirname,
        keepUnusedVars: false,
        noFlatVariables: true,
        from: './index.css' // gulp-concat sets the file.path wrong, so override here
      }))
      .pipe(gulp.dest('dist/')),
    gulp.series(
      buildCSSThemes = () => gulp.src([
        'themes/*.css'
      ])
        .pipe(postcss({
          config: __dirname,
          keepUnusedVars: true,
          noSelectors: true,
        }))
        .pipe(gulp.dest('dist/themes/')),
      buildCSSThemeIndex = () => gulp.src([
        'themes/spectrum.css', // spectrum comes first
        'themes/*.css'
      ])
        .pipe(concat('index-theme.css'))
        .pipe(postcss({
          config: __dirname,
          keepUnusedVars: true,
          noSelectors: true,
        }))
        .pipe(gulp.dest('dist/')),
      buildExpressTheme = () => gulp.src([
        'dist/index-theme.css'
      ])
        .pipe(concat('express.css'))
        .pipe(postcss({
          config: __dirname,
          keepUnusedVars: true,
          additionalPlugins: [require('postcss-combinator')]
        }))
        .pipe(gulp.dest('dist/themes/')),
    )
  ),
  checkSourceCSS = () => checkCSS([
    'dist/index.css',
  ]),
  function copyIndex() {
    // Just copy index.vars as index.css to maintain backwards compat
    return gulp.src('dist/index.css')
      .pipe(rename((file) => {
        file.basename = 'index-vars';
      }))
      .pipe(gulp.dest('dist/'))
  }
);
exports.default = this.build;
