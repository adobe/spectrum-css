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
const path = require('path');

const { concatFiles, getTokensInCSS } = require('./bin/utilities.js');

/**
 * Legacy build
 *   _note: keepVars == + postcss-custom-properties-mapping_
 * - index + skin = dist/index-vars
 * - dist/index-vars = vars | _classnames from dist/index-vars + global values_
 * - copy dist/index-vars to dist/index
 */

/**
 * Migrated build
 *
 * - index + themes/spectrum + themes/* = dist/index
 * - index + themes/spectrum + themes/* = dist/index-base
 * - themes/* = dist/themes/*
 * - themes/spectrum + themes/* = dist/index-theme
 * - dist/index-theme = dist/themes/express
 */

/** @type import('postcss-load-config').ConfigFn */
module.exports = async (ctx) => {
  const { file, options } = ctx;

  const pathname = file?.dirname?.replace('/dist', '') || process.cwd();
  const componentPath = path.resolve(__dirname, '../../components');
  const folderName = pathname?.replace(componentPath, '').split('/').pop();
  const pkgPath = require.resolve(path.join(pathname, 'package.json'));

  // Determine if this should use the legacy build
  if (pkgPath && fs.existsSync(pkgPath)) {
    const { devDependencies } = require(pkgPath);
    isLegacy = Object.keys(devDependencies)?.includes('@spectrum-css/vars');
  }

  isTheme = file?.split("/")?.includes("themes");
  isExpress = file?.endsWith("express.css");

  if (['expressvars', 'vars', 'tokens'].includes(folderName)) {
    isExpress = folderName === 'expressvars';
    modifier = path.basename(file, '.css').startsWith('spectrum') ? path.basename(file, '.css')?.replace('spectrum-', '')?.replace('global', '') : '';
  }

  const splitinatorSettings = {};
  if ((isLegacy && file?.basename === 'index-vars.css') || (!isLegacy && file?.basename === 'index-base.css')) {
    splitinatorSettings.noFlatVariables = true;
  }
  if (!isLegacy && (file?.basename === 'index-theme.css' || file?.path.split('/').includes('themes'))) {
    splitinatorSettings.noSelectors = true;
  }

  let globalVariables = {};
  let allVariables = {};
  if (isLegacy) {
    // Fetch the token values for the custom properties mapping
    const varsPath = path.dirname(require.resolve('@spectrum-css/vars/package.json'));
    await Promise.all([
      concatFiles([
        `/dist/globals/*.css`,
      ], {
        cwd: varsPath,
      }).then((css) => {
        const root = postcss.parse(css);
        const { definedTokens } = getTokensInCSS(root);
        globalVariables = definedTokens;
      }),
      concatFiles([
        `/dist/css/components/*.css`,
        `/dist/custom.css`,
      ], {
        cwd: varsPath,
      }).then((css) => {
        const root = postcss.parse(css);
        const { definedTokens } = getTokensInCSS(root);
        allVariables = {
          ...globalVariables,
          ...definedTokens,
        };
      })
    ]);
  }

  const legacyPlugins = {
    'postcss-remapvars': {},
    'postcss-logical': {},
    'postcss-dir-pseudo-class': {},
    'postcss-svg': {},
    'postcss-custom-properties-mapping': file?.basename === 'index-vars.css' ? { globalVariables, allVariables } : false,
    'postcss-droproot': {},
  };

  return {
    ...options,
    plugins: {
      'postcss-import': {
        resolve: (input) => {
          if (!input) return;

          if (input.startsWith('vars/')) {
            return input.replace('vars/', `${path.resolve(componentPath, '../tokens/vars')}/`);
          }
          if (input.startsWith('../')) {
            return input.replace('../', `${componentPath}/`);
          }

          return input;
        },
      },
      ...isLegacy ? legacyPlugins : {},
      'postcss-dropunusedvars': isLegacy || ['index.css', 'index-base.css'].includes(file?.basename),
      'postcss-combininator': !isLegacy && (file?.basename === 'express.css' || file?.path?.split('/')?.includes('themes')) ? true : false,
      'postcss-dropdupedvars': {},
      'postcss-splitinator': splitinatorSettings || false,
      'postcss-inherit': {},
      'postcss-nested': {},
      'postcss-calc': {},
      'postcss-transform-logical': {},
      'postcss-custom-properties-passthrough': {},
      'postcss-discard-comments': {},
      'postcss-focus-ring': {},
      'postcss-discard-empty': {},
      'autoprefixer': {},
      'postcss-reporter': { clearReportedMessages: true },
      // For storybook, add a tool to suppress autoprefixer warnings
      'postcss-warn-cleaner': options.quiet ? {
        ignoreFiles: '**/*.css'
      } : false,
    }
  };
}
