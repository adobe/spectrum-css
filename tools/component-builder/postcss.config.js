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

/**
 *  Helper: get a Spectrum CSS T-shirt class name
 *
 * @param {string} name DNA token name
 * @returns {string} Spectrum CSS t-shirt sized token name
 */
function getTShirtTokenName(name) {
  return name
    .replace(/-{1,2}(size)([A-Z]*)/, (match, p1, p2) => `--${p2}`)
    .replace(/\.?([A-Z]{,1}$ |[0-9])/g, (match, p1) => `-${p1}`)
    .replace(/([A-Z]{1,})/g, (match, p1) => `-${p1}`)
    .replace(/^-/, "")
    .replace(".spectrum--", "")
    .replace("--", "")
    .toLowerCase();
}

/** @type import('postcss-load-config').ConfigFn */
module.exports = ({
  // cwd, parser, stringifier, syntax, from, to,
  env = 'development',
  map = 'inline',
  keepVars = false, // was: notNested = true, secondNotNested = true, diff = false
  additionalPlugins = {},
}) => {
  return {
    map: env === 'development' ? map : false,
    plugins: {
      'postcss-import': {},
      'postcss-use': {
        modules: [/^postcss/],
        options: {
          'postcss-mixins': {
            mixins: {
              /**
               * Generate typography t-shirt sizes
               *
               * @param {*} mixin mixin name
               * @param {*} name class name
               * @param {*} tokenName name of token
               * @param {*} textTransformIgnore  ignore text transform
               */
              typographyTShirtSizes: function (_mixin, name, tokenName, textTransformIgnore) {
                tokenName = tokenName ?? getTShirtTokenName(name);
                function buildProperties(tokenString) {
                  const rules = {};
                  Object.entries({
                    'font-size': 'text-size',
                    'font-weight': 'text-font-weight',
                    'line-height': 'text-line-height',
                    'font-style': 'text-font-style',
                    'letter-spacing': 'text-letter-spacing',
                    'text-transform': 'text-transform',
                  }).forEach(([key, value]) => {
                    if (textTransformIgnore && key === 'text-transform') return;
                    rules[key] = `var(--spectrum-${tokenString}-${value})`;
                  });
                  return {
                    ...rules,
                    'margin-block-start': 0,
                    'margin-block-end': 0,
                  };
                }

                return {
                  [name]: buildProperties(tokenName),
                  // Fallback to add <em> and <strong> overwrites if addStrongAndEmphasizedChildren is set to true.
                  // This is only used for the pre-t-shirt sized typography.
                  ...name.includes('.spectrum-Detail') ? {
                    [`${name} em`]: buildProperties(`${tokenName}-emphasized`),
                    [`${name} strong`]: buildProperties(`${tokenName}-strong`),
                  } : {},
                }
              },

              /**
               * Generate typography margins for t-shirt sizes
               *
               * @param {*} mixin mixin name
               * @param {*} name class name
               * @param {*} tokenName name of token
               */
              typographyTShirtMargins: function (_mixin, name, tokenName) {
                tokenName = tokenName ?? getTShirtTokenName(name);
                return {
                  [name]: {
                    'margin-block-start': `var(--spectrum-${tokenName}-margin-top)`,
                    'margin-block-end': `var(--spectrum-${tokenName}-margin-bottom)`,
                  }
                };
              },

              /**
               * generate typography colors for t-shirt sizes
               *
               * @param {*} mixin mixin name
               * @param {*} name class name
               * @param {*} tokenName name of token
               */
              typographyTShirtColor: function (mixin, name, tokenName) {
                tokenName = tokenName ?? getTShirtTokenName(name);
                return {
                  [name]: {
                    'color': `var(--spectrum-${tokenName.toLowerCase()}-text-color)`,
                  }
                };
              },
            }
          }
        }
      },
      'postcss-remapvars': {},
      'postcss-inherit': {},
      'postcss-advanced-variables': {},
      'postcss-each': {},
      'postcss-transform-logical': {},
      'postcss-custom-properties-mapping': keepVars ? {} : false,
    //   'postcss-svg': {},
      'postcss-strip-comments': {},
      'postcss-dropunusedvars': {},
      'postcss-dropdupedvars': {},
      'postcss-droproot': {},
      'postcss-focus-ring': {},
      'postcss-discard-empty': {},
      'postcss-preset-env': {
        browsers: [
          'last 2 Edge versions',
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Safari versions',
          'last 2 iOS versions'
        ],
        stage: 2,
        features: {
          'nesting-rules': true,
        }
      },
      ...additionalPlugins,
    },
  };
};
