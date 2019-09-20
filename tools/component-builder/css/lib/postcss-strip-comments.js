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

module.exports = postcss.plugin('postcss-strip-comments', (opts = {}) => {
  return css => {
    css.walk(node => {
      if (node.type === 'comment') {
        if (node.text.trim().indexOf('topdoc') === 0 && opts.preserveTopdoc) {
          return;
        }

        // Get a refernce to the parent before the node is removed
        let parent = node.parent;

        node.remove();

        // If the comment was the last thing left in its parent, remove the parent
        if (parent && parent.nodes && parent.nodes.length === 0) {
          parent.remove();
        }
        return;
      }
    });
  };
});