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

/** @type import('postcss-load-config').ConfigFn */
module.exports = ({
  // cwd, parser, stringifier, syntax, from, to,
  env = 'development',
  map = 'inline',
  keepUnusedVars = false,
  splitinatorOptions = {},
  additionalPlugins = {},
}) => {
  return {
    map: env === 'development' ? map : false,
    plugins: {
      'postcss-import': {},
      'postcss-splitinator': {
        processIdentifier: (identifier) => {
          if (identifier === 'express') {
            return 'spectrum--express';
          }
          return identifier;
        },
        ...splitinatorOptions
      },
      'postcss-inherit': {},
      'postcss-advanced-variables': {},
      'postcss-each': {},
      'postcss-dropunusedvars': !keepUnusedVars ? {} : false,
      'postcss-dropdupedvars' : {}, // @todo this is a linting step, not a build step; should not merge with dupes
      'postcss-focus-ring': {},
      'postcss-use': {
        modules: [/^postcss/],
      },
      ...additionalPlugins,
      'postcss-transform-logical': {}, // converts logical transforms to rtl & ltr syntax
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
        },
      },
      'postcss-strip-comments': {},
      'postcss-discard-empty': {},
    },
  };
};
