const path = require("path");

const postcss = require("postcss");
const prettier = require("prettier");

const selectorParser = require("postcss-selector-parser");

const isCompoundSelector = (node) => {
  let ret = false;
  selectorParser((selectors) => {
    if (selectors.length > 1) ret = true;
  }).processSync(node.selector);
  return ret;
};

const hasType = (node, type) => {
  let ret = false;
  selectorParser((selectors) => {
    selectors.each((s) => {
      if (s.nodes.some((n) => n.type === type)) {
        ret = true;
      }
    });
  }).processSync(node.selector);
  return ret;
};

const hasModifier = (node, exceptions = []) => {
  let ret = false;
  selectorParser((selectors) => {
    selectors.each((s) => {
      s.nodes.forEach((n) => {
        if (n.type !== "class") return;
        if (n.value.includes("--") && !exceptions.some((e) => e.test(n.value))) {
          ret = true;
        }
      });
    });
  }).processSync(node.selector);
  return ret;
};

const isRoot = (node) => {
  let ret = false;
  selectorParser((selectors) => {
    selectors.each((s) => {
      s.nodes.forEach((n) => {
        if (n.type !== "class") return;
        if ([/^spectrum$/, /^spectrum--express$/].some((e) => e.test(n.value))) {
          ret = true;
        }
      });
    });
  }).processSync(node.selector);
  return ret;
};

// Capture the longest selector length in the set
const selectorLength = (node) => {
  let ret = 0;
  selectorParser((selectors) => {
    selectors.each((s) => {
      if (s.nodes.length > ret) ret = s.nodes.length;
    });
  }).processSync(node.selector);
  return ret;
};

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({ overrides = {}, configFile } = {}) => ({
  postcssPlugin: "postcss-prettier",
  async OnceExit(root) {
    /**
         * compareFn(a, b) return value	sort order
         *    > 0     sort a after b, e.g. [b, a]
         *    < 0     sort a before b, e.g. [a, b]
         *    === 0   keep original order of a and b
         */
    root.nodes.sort((a, b) => {
      // AtRules go to the bottom
      if (a.type === "atrule" && b.type === "rule") return 1;
      if (a.type === "rule" && b.type === "atrule") return -1;

      if (a.type === "rule" && b.type === "rule") {
        if (isRoot(a) && !isRoot(b)) return -1;
        if (!isRoot(a) && isRoot(b)) return 1;

        // Push pseudo selectors down
        if (hasType(a, "pseudo") && !hasType(b, "pseudo")) return 1;
        if (!hasType(a, "pseudo") && hasType(b, "pseudo")) return -1;

        // Sort by selector length
        if (selectorLength(a) > selectorLength(b)) return 1;
        if (selectorLength(a) < selectorLength(b)) return -1;

        // Push modifiers down
        const exceptions = [/--express$/];
        if (hasModifier(a, exceptions) && !hasModifier(b, exceptions)) return 1;
        if (!hasModifier(a, exceptions) && hasModifier(b, exceptions)) return -1;

        // Push compound selectors down
        if (isCompoundSelector(a) && !isCompoundSelector(b)) return -1;
        if (!isCompoundSelector(a) && isCompoundSelector(b)) return 1;
      }

      return 0;
    });

    if (!configFile) {
      configFile = root.source.input.file ? path.dirname(root.source.input.file) : process.cwd();
    }

    if (!configFile) {
      root.error(
        root.toResult(),
        "Running prettier with no config file and no file path to infer config from",
        {
          plugin: "postcss-prettier",
        }
      );
      return;
    }

    const options = await prettier.resolveConfig(configFile);

    root.warn(
      root.toResult(),
      `Running prettier with the following config loaded from ${configFile}: ${JSON.stringify(options)}`,
      {
        plugin: "postcss-prettier",
      }
    );

    const cleanRoot = await prettier
      .format(root.toString(), {
        ...options,
        ...overrides,
        parser: "css",
      })
      .then((result) => postcss.parse(result));

    root.removeAll();
    root.append(cleanRoot);
  },
});

module.exports.postcss = true;
