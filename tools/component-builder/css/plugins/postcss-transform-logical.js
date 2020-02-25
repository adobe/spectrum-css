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
const postcss = require('postcss');
const { parse } = require('postcss-values-parser');

const selectorParser = require('postcss-selector-parser');
const addDir = selectors => {
  selectors.each(selector => {
    let dirPseudo = selectorParser.pseudo({value: ':dir(rtl)'});
    selector.append(dirPseudo);
  });
};

const matrix = 'matrix(-1, 0, 0, 1, 0, 0)';

module.exports = postcss.plugin('postcss-transform-logical', function (opts) {
  opts = opts || {};

  return function (root, result) {
    root.walkRules((rule, ruleIndex) => {
      rule.walkDecls((decl) => {
        if (decl.prop === 'transform') {
          let value;
          try {
            value = parse(decl.value);
          }
          catch (err) {
            console.warn('postcss-transform-logical: could not parse %s', decl.value);
          }

          if (value && value.nodes[0].value === 'logical') {
            // Drop logical
            value.nodes[0].remove();

            let originalRotation = null;
            let rotationNode = null;
            value.walkFuncs((node, index, nodes) => {
              if (node.name === 'rotate') {
                originalRotation = node.nodes[0].value;
                rotationNode = node;
              }
              else if (node.name === 'matrix') {
                throw new Error('postcss-transform-logical: logical flips cannot be performed on transforms that use matrix()');
              }
            });

            if (rotationNode !== null) {
              // Ignore 0 deg initial rotations for LTR; this means we meant for it to be standard rotation for LTR
              if (parseInt(originalRotation, 10) !== 0) {
                let ltrRule = postcss.parse(`${rule.selector}:dir(ltr) { transform: ${value}; }`);
                root.insertBefore(rule, ltrRule);

                // Use the same rotation, but flip horizontal
                let rtlRule = postcss.parse(`${rule.selector}:dir(rtl) { transform: ${matrix} ${value}; }`);
                root.insertBefore(rule, rtlRule);
              }
              else {
                // Drop the unnecessary rotation
                rotationNode.remove();

                // Add direction to all matching selectors
                let newSelector = selectorParser(addDir).processSync(rule.selector);

                // Just flip horizontal
                let rtlRule = postcss.parse(`${newSelector} { transform: ${matrix} ${value}; }`);
                root.insertBefore(rule, rtlRule);
              }

              // Remove original declaration
              decl.remove();
            }
          }
        }
      });
    });
  }
});
