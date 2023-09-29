/*!
 * Copyright 2023 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = (ctx) => {
  const {
    combineSelectors = true,
    /* This removes all copyright comments so we can add a single one at the top of the file */
    commentsDenylist = ["Copyright", "This file contains"],
  } = ctx.options;

  return {
    ...ctx.options,
    plugins: {
      "postcss-import": {},
      "postcss-sorting": {
        order: ["custom-properties", "declarations", "at-rules", "rules"],
        "properties-order": "alphabetical",
      },
      "postcss-combine-duplicated-selectors": {},
      /** @note Merges _adjacent_ rules only; hense the sorting is first */
      "postcss-merge-rules": {},
      "postcss-combine-duplicated-selectors": combineSelectors ? {} : false,
      "postcss-combine-media-query": {},
      /* Remove all duplicate copyrights and add a single one at the top */
      "postcss-discard-comments": {
        removeAllButFirst: true,
        remove: (comment) => {
          return (
            commentsDenylist.some((str) => comment.includes(str)) ||
            comment.trim() === ""
          );
        },
      },
      "@spectrum-tools/postcss-rgb-mapping": {},
      /* After cleaning up comments, remove all empty rules */
      "postcss-discard-empty": {},
      /* Ensure the license is at the top of the file */
      "postcss-licensing": {
        filename: "../COPYRIGHT",
        skipIfEmpty: true,
      },
    },
  };
};
