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

function getProcessors(keepUnusedVars = false, splitinatorOptions = {}) {
  return [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-splitinator')({
      processIdentifier: (identifier) => {
        if (identifier === 'express') {
          return 'spectrum--express';
        }
        return identifier;
      },
      ...splitinatorOptions
    }),
    require('postcss-inherit'),
    require('./plugins/postcss-transform-logical')(),
    require('./plugins/postcss-custom-properties-passthrough')(),
    require('postcss-calc'),
    require('./plugins/postcss-strip-comments')({ preserveTopdoc: false }),
    !keepUnusedVars && require('postcss-dropunusedvars'),
    require('postcss-dropdupedvars'),
    require('postcss-focus-ring'),
    require('postcss-discard-empty'),
    require('autoprefixer')({
      'browsers': [
        'last 2 Edge versions',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 iOS versions'
      ]
    })
  ].filter(Boolean);
}

exports.getProcessors = getProcessors;
exports.processors = getProcessors();
