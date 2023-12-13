const processed = Symbol("processed");

/** @type import('postcss').Plugin */
module.exports = ({
  selector,
  customPropertiesOnly = true,
  /* these are properties that should be fully dropped during the combination of selectors */
  ignoreList = [],
} = {}) => ({
  postcssPlugin: "postcss-combine-selectors",
  prepare() {
    // If no selector is provided and we're not stripping non-custom properties,
    // or leveraging the ignore list to strip values, it's a waste of time to run this plugin
    if (typeof selector === "undefined" && !customPropertiesOnly && (!ignoreList || ignoreList.length === 0)) {
      return;
    }

    const rulesCache = [];
    const declsCache = new Map();

    return {
      Rule(rule) {
        if (!rule || rule[processed]) return;
        rule[processed] = true;

        // If the user provided a selector, add it to the cache and move on
        // we'll just be deleting all other rules later
        if (typeof selector !== "undefined") {
          rulesCache.push(rule);
          return;
        }

        // If we're here, we're combining existing selectors so we need to parse
        // the selector to determine if it's a match for any of the existing rules
        let found = false;
        rulesCache.forEach((cachedRule) => {
          // If the selectors don't match or they do but they don't have the same parents, move on
          // note, parents are important because we don't want to combine selectors that are in different media queries
          if (cachedRule.selector !== rule.selector || cachedRule.parent !== rule.parent) {
            return;
          }

          // We have a match!
          found = true;

          // Iterate over each declaration in this rule and add it to the cached rule
          // we found if it doesn't already exist
          rule.walkDecls((thisDecl) => {
            cachedRule.walkDecls(thisDecl.prop, (cachedDecl) => {
              cachedDecl.remove();
            });

            cachedRule.append(thisDecl);
          });
        });

        if (!found) rulesCache.push(rule);
      },
      Declaration(decl) {
        if (decl[processed]) return;

        decl[processed] = true;

        if (
          (customPropertiesOnly && !decl.prop.startsWith("--")) ||
                    ignoreList.some((i) => i.test(decl.prop))
        ) {
          decl.remove();
          return;
        }

        if (decl.parent.type === "rule" && decl.parent.selector === selector) {
          declsCache.set(decl.prop, decl);
          return;
        }

        const prev = declsCache.get(decl.prop);
        if (prev && prev.parent && prev.parent.type === "rule" && prev.parent.selector === selector) {
          decl.remove();
          return;
        }

        declsCache.set(decl.prop, decl);
      },
      OnceExit(root, { Rule }) {
        if (typeof selector === "undefined") return;
        rulesCache.forEach((rule) => {
          rule.remove();
        });

        root.append(
          new Rule({
            selector,
            [processed]: true,
            nodes: [...declsCache.values()],
          }),
        );
      },
    };
  },
});

module.exports.postcss = true;
