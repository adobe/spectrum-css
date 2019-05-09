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
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-varsonly', function (opts) {
  opts = opts || {};

  return function (root, result) {
    // Delete all comments
    root.walkComments((comment) => {
      comment.remove();
    });

    // Process each rule
    root.walkRules((rule, ruleIndex) => {
      // Don't break variable declarations
      if (rule.selector === ':root') {
        return;
      }

      // Check every declaration
      rule.walkDecls((decl) => {
        // Remove if not varaible
        if (!decl.value.match('var\(.*?\)')) {
          decl.remove();
        }
      });

      // Delete the rule if it's empty
      if (rule.nodes.length === 0) {
        rule.remove();
      }
    });
  }
});
