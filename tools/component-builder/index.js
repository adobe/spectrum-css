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

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const gulp = require('gulp');

// const chalk = require('chalk');
const fg = require('fast-glob');
const postcss = require('postcss');

async function fetchTokenData(files = []) {
  // Check for @spectrum-css/tokens vs. @spectrum-css/vars?
  // @todo should only be fetching this data once per build

  // Get literally all of the possible vars (even overridden vars that are different between themes/scales)
  const vars = new Map();

  files.forEach(async (fileName) => {
    const dirname = path.dirname(fileName).split(path.sep).pop();
    return fsp.readFile(fileName, 'utf-8').then((css) => {
      const root = postcss.parse(css);
      root.walkRules((rule) => {
        rule.walkDecls((decl) => {
          let isComponentVar = false;

          // Only look for component-specific vars in this loop
          if (['components', 'globals'].some(folder => dirname === folder) || path.basename(fileName, '.css') === 'custom') {
            isComponentVar = true;
          }

          // Add the rest to the vars set
          vars.set(decl.prop, {
            value: decl.value,
            isComponentVar
          });
        });
      });
    });
  });

  return vars;
}

async function buildVars() {
  const disallowList = ['mod', 'highcontrast'];

  const varDir = path.dirname(require.resolve('@spectrum-css/vars/package.json', {
    paths: [process.cwd(), path.join(process.cwd(), '../../')]
  }));

  const allVars = await fetchTokenData(await fg([
    `${varDir}/custom.css`,
    `${varDir}/css/{themes,scales,components,globals}/*.css`,
    require.resolve('@spectrum-css/tokens', {
      paths: [process.cwd(), path.join(process.cwd(), '../../')]
    }),
  ]));

  // assuming dirname equals component directory?
  const file = path.join(process.cwd(), 'dist/index-vars.css');
  const distDir = path.dirname(file);
  const pkg = await fsp.readFile(path.join(distDir, '../package.json'), 'utf-8').then(JSON.parse).catch((err) => {
    Promise.reject(new Error(`Could not find package.json in ${distDir}`));
  });

  const content = await fsp.readFile(file, 'utf-8');
  const folderName = pkg.name?.split('/')?.pop();

  const classNames = new Set();
  const componentVars = new Set();
  const usedVars = new Map();

  postcss.parse(content).walkRules((rule) => {
    // @todo are we ignoring the page classes?
    if (folderName === 'page') return false;

    rule.selectors.forEach((fullSelector) => {
      // Skip compound selectors, they may not start with the component itself
      if (fullSelector.match(/~|\+/)) return true;

      // Parse selectors to find relevant classes
      require('postcss-selector-parser')(selectors => {
        selectors.walkClasses((s) => {
          if (!s.value.match(/^spectrum-[\w]+/)) return;
          classNames.add(s.value);
        });
      });
    });

    rule.walkDecls((decl) => {
      // Get vars defined inside of the component
      if (decl.prop.startsWith('--')) {
        componentVars.add(decl.prop);
      }

      // Find all custom properties _used_ in the component
      require('postcss-value-parser')(decl.value).walk((node) => {
        if (node.type !== 'function' || node.value !== 'var') return;
        const varName = node.nodes[0].value;

        const isGlobalToken = varName.includes('spectrum-global');
        const inAllVars = allVars.has(varName);
        const inComponentVars = componentVars.has(varName);
        const ignoredVar = disallowList.some(prefix => varName.startsWith(`--${prefix}-`));

        if (isGlobalToken) {
          console.log(`⚠️  ${pkg.name} directly uses global variable ${varName}`);
          return;
        }

        // If the var is not defined in any of the provided token files, and it doesn't start with a disallowed prefix, notify
        if (!inAllVars && !ignoredVar) {
          if (inComponentVars) {
            console.log(`${pkg.name} uses undefined variable ${varName}`);
            return;
          }

          console.log(`🔶 ${pkg.name} uses locally defined variable ${varName}`);
          return;
        }

        usedVars.set(varName, allVars.get(varName)?.value);
      });
    });
  });

  if (usedVars.size === 0 || classNames.size === 0) return Promise.resolve();

  // Write out the vars.css file
  return fsp.writeFile(path.join(distDir, 'vars.css'), `
${[...classNames].join(',\n')} {
  ${[...usedVars.entries()].map(([prop, value]) => `${prop}: ${value};`).join('\n  ')}
}
`);
}

function buildIndexVars() {
  return gulp.src([
    'index.css',
    'skin.css'
  ], {
    allowEmpty: true // Allow missing skin.css
  })
    .pipe(require('gulp-concat')('index-vars.css'))
    .pipe(require('gulp-postcss')({
      config: __dirname,
    }))
    .pipe(gulp.dest('dist/'));
}

exports.build = exports.buildMedium = gulp.series(
  buildIndexVars,
  buildVars,
);

exports.default = this.build;

exports.buildLite = gulp.series(buildIndexVars);
exports.buildHeavy = gulp.series(
  buildVars,
  function copyIndex() {
    // Just copy index.vars as index.css to maintain backwards compat
    return gulp.src('dist/index-vars.css')
      .pipe(require('gulp-rename')((file) => {
        file.basename = 'index';
      }))
      .pipe(gulp.dest('dist/'))
  }
);
