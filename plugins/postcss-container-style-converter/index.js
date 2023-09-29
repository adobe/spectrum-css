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

/**
 * @typedef Options
 * @property {boolean} [flatVariables=true] - Whether to create a new rule for each variable or not
 * @property {string|((identifierValue: string, identifierName: string) => string)} [processIdentifier] - A function to process the identifier value
 * @property {(selector: string, prop: string) => string} [getName] - A function to process the variable name
 */

const selectorParser = require("postcss-selector-parser");

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
  keyIdentifier,
  flatVariables = true,
  processIdentifier = (identifierValue) => identifierValue,
  getName,
}) => ({
  postcssPlugin: "postcss-container-style-converter",
  AtRule: {
    container: (query, { Rule }) => {
      keyIdentifier = cleanParts(keyIdentifier);

      function cleanParts(part) {
        return part
          .toLowerCase()
          .replace(/^(is|u)-/, "")
          .replaceAll(/(\W|-)+/g, " ")
          .trim()
          .replaceAll(/\s+/g, "-");
      }

      function getParts(selector, parts = []) {
        if (!selector.nodes) return [...new Set(parts)];

        selector.nodes.forEach((child) => {
          if (child.type === "class") {
            const value = cleanParts(
              cleanParts(child.toString())
                .replace(keyIdentifier, "")
            );
            if (value !== "") parts.push(value);
          } else if (child.type === "nesting") {
            // Get the parent selector (the declaration's grandparent)
            const grandparent = child.parent.parent;
            parts = getParts(grandparent, parts);
          }
        });

        return [...new Set(parts) ?? []];

      }

      /** @todo Use a parser when released: https://github.com/postcss/postcss-at-rule-parser */
      const capture = query.params.match(
        /(\w+)?\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/,
      );

      if (!capture || capture.length < 2) return;

      const [, identiferFunc, identifierName, identifierValue] = capture;

      /* we only want style queries so skip anything else */
      if (identiferFunc && identiferFunc !== "style") return;

      const fallbackProcessor = (selector, decl) => {
        let prop = decl.prop;
        if (!prop || !prop.startsWith("--") || ["mod", "highcontrast"].some((p) => prop.startsWith(`--${p}`))) {
          prop = false;
        } else {
          prop = cleanParts(
            cleanParts(prop)
              .replace(keyIdentifier, "")
          );
        }

        const parts = [
          identifierName ?? 'system',
          keyIdentifier,
          ...getParts(selector) ?? [],
          prop,
        ].filter(Boolean);

        return `--${parts.join("-")}`;
      };

      /* determine the new selector based on the query parts */
      let newSelector = identifierValue;
      /* run the parts through the provided function */
      if (typeof processIdentifier === "function") {
        newSelector = processIdentifier(identifierValue, identifierName);
      } else if (typeof processIdentifier === "string") {
        newSelector = processIdentifier;
      }

      const newRule = new Rule({
          selector: `.${newSelector}`,
          source: query.source,
          raws: {
            before: '\n\n',
            after: query.raws.after,
          },
      });

      /* create a new rule with the new selector */
      query.walkRules((rule) => {
        /* walk the declarations and update the values */
        rule.walkDecls((decl) => {
          /* @todo might be nice to add an option to remove any non-custom properties */
          if (!decl.prop.startsWith("--")) return;

          // Check for fallbacks
          // todo: use valueparser instead of a regex
          const fallbackMatch = decl.value.match(
            /var\(\s*(.*?)\s*,\s*var\(\s*(.*?)\s*\)\)/,
          );

          // Process rules that match multiple selectors separately to avoid weird var names and edge cases
          selectorParser((selectors) => {
            selectors.each((selector) => {
              /* New variable name by combining selector and property data */
              let propName;
              if (typeof getName === "function") {
                propName = getName(selector, decl);
              } else {
                propName = fallbackProcessor(selector, decl);
              }

              let systemDecl = decl.clone({
                    raws: {
                      ...decl.raws,
                      before: rule.raws.before,
                    },
              });

              if (fallbackMatch) {
                const [, override, fallback] = fallbackMatch;

                // The system-level declaration should only have the fallback
                systemDecl.assign({
                  prop: propName,
                  value: fallback ? `var(${fallback})` : `var(${override})`,
                });

                // The final declaration should have the override present
                decl.assign({
                  value: override ? `var(${override}, var(${propName}))` : `var(${propName})`
                });
              } else {
                systemDecl.assign({
                  prop: propName,
                });

                decl.assign({
                  value: `var(${propName})`
                });
              }

              if (newRule.nodes.length === 0) {
                newRule.append(systemDecl);
              } else {
                newRule.walkDecls((decl) => {
                  if (decl.prop === systemDecl.prop) return;
                  newRule.append(systemDecl);
                });
              }
            });
          }).processSync(rule.selector);
        });

        if (flatVariables) {
          query.parent.prepend(newRule);
        }
      });

      query.parent.append(...query.nodes);
      query.remove();
    },
  },
  Rule: {
    // Merge duplicate rules

  }
});

module.exports.postcss = true;
