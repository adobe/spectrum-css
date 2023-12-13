/**
 * @typedef Options
 * @property {string} [prefix=""] - An optional prefix to use for the new selector
 * @property {string} keyIdentifier - The basename of the identifier to use
 * @property {string|((identifierValue: string, identifierName: string) => string)} [processIdentifier] - A function to process the identifier value
 * @property {boolean} [flatVariables=true] - Whether to create a new rule for each variable or not
 * @property {boolean} [keepSelectors=true] - Whether to keep the original selector or not
 */

const selectorParser = require("postcss-selector-parser");
const processed = Symbol("processed");

/**
 * @type import('postcss').PluginCreator<Options>
 * @link https://developer.chrome.com/docs/css-ui/style-queries/
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/@container#style_container_queries
 * @description This plugin looks for style queries (i.e., `@container style(--theme: dark)) {}`)
 *   and converts them into a format Firefox & Safari browsers can understand (supported in Chrome v111
 *   and Edge v111)
 * @note CSS Containment Module Level 3
 */
module.exports = ({ prefix = "", keyIdentifier, processIdentifier, keepSelectors = true, flatVariables = true }) => ({
  postcssPlugin: "postcss-container-style-converter",
  prepare() {
    const fallbackProcessIdentifier = (identifierValue, identifierName) => {
      if (identifierName !== "system") return identifierValue;
      if (prefix && identifierValue !== prefix) {
        return `${prefix}--${identifierValue}`;
      }
      return identifierValue;
    };

    const clean = (part) => {
      if (!part) return part;
      return (
        part
          .toLowerCase()
          .replace(/^(is|u)-/, "")
          /* @note: this is regex and the s must be escaped, not sure why eslint is throwing an error */
          /* eslint-disable-next-line no-useless-escape */
          .replace(new RegExp(`(${prefix}|mod|highcontrast)(-|\s)?`), "")
          .replaceAll(/(\W|-)+/g, " ")
          .trim()
          .replaceAll(/\s+/g, "-")
      );
    };

    const getParts = (selector, parts = []) => {
      if (!selector.nodes) return [...new Set(parts)];

      selector.nodes.forEach((child) => {
        if (child.type === "class") {
          let value = clean(child.toString());
          value = clean(value.replace(keyIdentifier, ""));
          if (value !== "") parts.push(value);
        } else if (child.type === "nesting") {
          // Get the parent selector (the declaration's grandparent)
          const grandparent = child.parent.parent;
          parts = getParts(grandparent, parts);
        }
      });

      return [...(new Set(parts) ?? [])];
    };

    const variableProcessor = (selector, decl, identifierName = "system") => {
      const parts = [];
      let prop = decl.prop;
      if (!prop || !prop.startsWith("--")) {
        prop = undefined;
        decl.warn(
          decl.root,
          `The property "${decl.prop}" is not a custom property and cannot be used as a variable.`,
        );
      } else {
        prop = prop.replace(keyIdentifier, "");
        prop = clean(prop);
      }

      if (!prop) return parts;

      parts.push(
        identifierName,
        // we strip the prefix from the selector so we can use it here in the correct position
        prefix,
        // we strip the key identifier from the selector so we can use it here in the correct position
        keyIdentifier,
        // this fetches the relevant parts from the selector for use in the variable name
        ...(getParts(selector) ?? []),
        // each variable ends with the relevant parts of the property name
        prop,
      );

      return parts.length ? `--${parts.filter(Boolean).join("-")}` : undefined;
    };

    const getNewSelector = (identifierValue, idenifierName) => {
      if (typeof processIdentifier === "function") {
        return processIdentifier(identifierValue, idenifierName);
      }

      if (typeof processIdentifier === "string") {
        return processIdentifier;
      }

      return fallbackProcessIdentifier(identifierValue, idenifierName);
    };

    // Tidy up the key identifier for use in the variable name
    keyIdentifier = keyIdentifier ? clean(keyIdentifier) : undefined;

    const rulesCache = new Map();

    return {
      /** @note **IMPORTANT** This MUST be run on exit in order to use the unrolled nested syntax. */
      OnceExit(root, { Rule }) {
        /* Walk the rules and combine any that have the same selector */
        root.walkRules((rule) => {
          if (rule[processed]) return;
          rule[processed] = true;

          // Must be a rule on the root
          if (rule.parent?.type !== "root") return;

          // @todo add support for rules that are the same but in different order
          const selector = rule.selector.replace(/[\s|\n]+/g, "");
          if (rulesCache.has(selector)) {
            const cachedRule = rulesCache.get(selector);
            cachedRule.walkDecls((cachedDecl) => {
              rule.walkDecls((decl) => {
                if (cachedDecl.prop === decl.prop && cachedDecl.value !== decl.value) {
                  // Merge values up according to the normal cascade
                  cachedDecl.assign({ value: decl.value });
                } else {
                  cachedRule.append(decl);
                }
              });
            });

            rule.remove();
          } else {
            rulesCache.set(selector, rule);
          }
        });

        /* Walk the container queries looking for style queries */
        root.walkAtRules("container", (container) => {
          if (container[processed]) return;
          // Ensure we don't process the same container twice
          container[processed] = true;

          /** @todo Use a parser when released: https://github.com/postcss/postcss-at-rule-parser */
          const capture = container.params?.match(/(\w+)?\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/);
          if (!capture || capture.length < 2) return;

          const [, identiferFunc, identifierName, identifierValue] = capture;

          /* We're only converting style queries */
          if (identiferFunc && identiferFunc !== "style") return;

          /* Determine the new selector based on the query parts */
          /* This holds the conversion mappings for the custom properties */
          const styleQuerySelector = getNewSelector(identifierValue, identifierName);

          if (!styleQuerySelector) {
            container.warn(container.root, `The identifier "${identifierValue}" is not valid.`);
            return;
          }

          /* First look for the rule at the root of the container */
          let styleQueryRule;

          container.root().walkRules(new RegExp(`^.${styleQuerySelector}$`), (rule) => {
            styleQueryRule = rule;
          });

          if (!styleQueryRule) {
            /* create a new rule with the new selector */
            styleQueryRule = new Rule({
              selector: `.${styleQuerySelector}`,
              source: container.source,
              raws: {
                ...container.raws,
                before: "\n  ",
              },
            });

            // Insert the new rule with system-level mapped values after the container query
            if (flatVariables) {
              container.parent.insertAfter(container, styleQueryRule);
            }
          }

          /* walk the declarations and copy the values */
          container.walkDecls((decl) => {
            if (decl[processed]) return;
            decl[processed] = true;

            if (!decl.prop.startsWith("--")) {
              /* @todo might be nice to add an option to remove/keep any non-custom properties */
              /* Could probably add the property to a selector that matches it's parent and then map it's value to a property and create a new declaration? */
              decl.warn(`The property "${decl.prop}" is not a custom property and cannot be converted to a style query fallback using this plugin.`);

              decl.remove();
              return;
            }

            // Process rules that match multiple keepSelectors separately to avoid weird var names and edge cases
            selectorParser((selectorGroup) => {
              selectorGroup.each((selector) => {
                /* New variable name by combining selector and property data */
                const variableName = variableProcessor(selector, decl);
                if (!variableName) return;

                // Create a new declaration for the system-level mapping
                const conversionMapping = decl.clone({
                  prop: variableName,
                  raws: {
                    ...decl.raws,
                    before: "\n    ",
                  },
                });

                // Add this mapping to the style query rule for toggling
                styleQueryRule.append(conversionMapping);

                let value;

                // Check for fallbacks
                // todo: use valueparser instead of a regex
                const fallbackMatch = decl.value.match(
                  /var\(\s*(.*?)\s*,\s*var\(\s*(.*?)\s*\)\)/,
                );
                if (fallbackMatch) {
                  const [, override, fallback] = fallbackMatch;

                  // The final declaration should have the override present
                  value = `var(${override}, var(${variableName}))`;

                  // The system-level declaration should only have the fallback
                  conversionMapping.assign({ value: `var(${fallback})` });
                } else {
                  value = `var(${variableName})`;
                }

                // Update the original declaration with the new variable name
                let updatedDecl = false;

                const selectorKey = decl.parent.selector.replace(/[\s|\n]+/g, "");
                // First check if this selector already exists on the root
                if (rulesCache.has(selectorKey)) {
                  const foundRule = rulesCache.get(selector.toString());
                  let foundChild = false;

                  foundRule.walkDecls(decl.prop, (child) => {
                    if (value === child.value) foundChild = true;
                    else {
                      child.assign({ value });
                      updatedDecl = true;
                    }
                  });

                  if (!foundChild && !updatedDecl) {
                    foundRule.append(decl.clone({ value }));
                    updatedDecl = true;
                  }
                }

                if (!updatedDecl) {
                  const newSelectorForMapping = decl.parent.clone({
                    selector: selector.toString(),
                    nodes: [],
                    raws: {
                      ...decl.parent.raws,
                      before: "\n  ",
                    },
                  });

                  newSelectorForMapping.append(decl.clone({ value }));
                  root.append(newSelectorForMapping);
                  rulesCache.set(selector.toString().replace(/[\s|\n]+/g, ""), newSelectorForMapping);
                }
              });
            }).processSync(decl.parent.selector);
          });

          /* @todo retain the original container query for use in Chrome & Edge */
          container.remove();

          if (!keepSelectors) {
            root.walkRules((rule) => {
              if (rule.parent?.type !== "root") return;
              if (rule.selector === `.${styleQuerySelector}`) return;
              rule.remove();
            });
          }
        });
      }
    };
  },
});

module.exports.postcss = true;
