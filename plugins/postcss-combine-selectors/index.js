/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/** @type import('postcss').ConfigFn */
module.exports = ({
  selector,
  customPropertiesOnly = true,
  ignoreList = [],
} = {}) => ({
  postcssPlugin: "postcss-combine-selectors",
  OnceExit(root) {
    let keeper;
    const rules = [];
    const declarations = {};

    root.walkRules((rule) => {
      if (
        typeof selector === "string" &&
        rule.selector === selector &&
        !keeper
      ) {
        keeper = rule.clone({
          nodes: [],
        });
      }

      rules.push(rule);

      rule.walkDecls((decl) => {
        if (customPropertiesOnly && !decl.prop.startsWith("--")) return;
        if (!ignoreList.some((i) => i.test(decl.prop))) {
          declarations[decl.prop] = decl;
        }

        decl.remove();
      });
    });

    if (!keeper) keeper = rules[rules.length - 1]?.clone({});
    rules.forEach((rule) => rule.remove());

    for (let decl of Object.values(declarations)) {
      keeper.append(decl);
    }

    keeper.assign({
      raws: {
        ...keeper.raws,
        before: "",
      },
    });

    root.append(keeper);
  },
});

module.exports.postcss = true;
