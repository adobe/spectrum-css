/**
 * @typedef Options
 * @property {string} [prefix=""] - An optional prefix to use for the new selector
 * @property {string} keyIdentifier - The basename of the identifier to use
 * @property {string|((identifierValue: string, identifierName: string) => string)} [processIdentifier] - A function to process the identifier value
 * @property {boolean} [flatVariables=true] - Whether to create a new rule for each variable or not
 * @property {boolean} [keepSelectors=true] -
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

    return {
      /** @note **IMPORTANT** This MUST be run on exit in order to use the unrolled nested syntax. */
      AtRuleExit: {
        container: (container, { Rule }) => {
          if (container[processed]) return;
          // Ensure we don't process the same container twice
          container[processed] = true;

          // Tidy up the key identifier for use in the variable name
          keyIdentifier = keyIdentifier ? clean(keyIdentifier) : undefined;

          /** @todo Use a parser when released: https://github.com/postcss/postcss-at-rule-parser */
          const capture = container.params?.match(/(\w+)?\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/);
          if (!capture || capture.length < 2) return;

          const [, identiferFunc, identifierName, identifierValue] = capture;

          /* We're only converting style queries */
          if (identiferFunc && identiferFunc !== "style") return;

          /* Determine the new selector based on the query parts */
          const newSelector = getNewSelector(identifierValue, identifierName);

          if (!newSelector) {
            container.warn(container.root, `The identifier "${identifierValue}" is not valid.`);
            return;
          }

          /* First look for the rule at the root of the container */
          let newRule;

          container.root().walkRules((rule) => {
            if (rule.selector === `.${newSelector}`) {
              newRule = rule;
            }
          });

          if (!newRule) {
            /* create a new rule with the new selector */
            newRule = new Rule({
              selector: `.${newSelector}`,
              source: container.source,
              raws: {
                ...container.raws,
                before: "\n  ",
              },
              [processed]: true,
            });

            // Insert the new rule with system-level mapped values after the container query
            if (flatVariables) {
              container.parent.insertAfter(container, newRule);
            }
          } else {
            newRule[processed] = true;
          }

          if (container.nodes && container.nodes.length > 0) {
            container.nodes.forEach((node) => {
              if (node[processed]) return;
              node[processed] = true;

              const clone = node.clone();

              if (node.type === "rule") {
                /* walk the declarations and copy the values */
                node.walkDecls((decl) => {
                  if (decl[processed]) return;
                  decl[processed] = true;

                  /* @todo might be nice to add an option to remove any non-custom properties */
                  if (!decl.prop.startsWith("--")) return;

                  // Process rules that match multiple keepSelectors separately to avoid weird var names and edge cases
                  selectorParser((selectorGroup) => {
                    selectorGroup.each((selector) => {
                      /* New variable name by combining selector and property data */
                      const variableName = variableProcessor(selector, decl);
                      if (!variableName) return;

                      const newDecl = decl.clone({
                        prop: variableName,
                        source: decl.source,
                        raws: {
                          ...decl.raws,
                          before: "\n    ",
                        },
                      });

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
                        newDecl.assign({ value: `var(${fallback})` });
                      } else {
                        value = `var(${variableName})`;
                      }

                      if (value) {
                        decl.remove();
                        clone.append(decl.clone({ value }));
                      }

                      // Remove any existing declarations with the same name
                      newRule.walkDecls(newDecl.prop, (d) => d.remove());
                      // Add this new declaration to the new rule
                      newRule.append(newDecl);
                    });
                  }).processSync(decl.parent.selector);
                });
              }

              if (keepSelectors) {
                container.parent.insertAfter(container, clone);
              }
            });
          }

          /* @todo retain the original container query for use in Chrome & Edge */
          container.remove();
        },
      },
    };
  },
});

module.exports.postcss = true;
