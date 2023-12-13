/**
 * @todo: Importing commons assets such as extends brings along all their comments
 * which is not ideal. We should be able to strip them out or make the extends available
 * to all components without having to import them.
 */

const { sep, join, dirname } = require("path");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const rootConfig = require("../postcss.config");

/**
 * @description This PostCSS config determines which file
 * to load based on env variable
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({ cwd, env = "development", file, options = {} }) => {
  const isProduction = Boolean(env === "production");

  const {
    _: input,
    map = options.map ?? !isProduction ? { inline: false } : false,
  } = yargs(hideBin(process.argv)).argv;

  const inputDirname = typeof file === "string" ? dirname(file) : file.dirname ?? dirname(input[0]);

  const parts = inputDirname.split(sep);

  const preCompiled = parts.includes("dist") || parts.includes("node_modules");

  // Prefer the foldername provided by the NX_TASK_TARGET_PROJECT env variable
  let foldername = process.env.NX_TASK_TARGET_PROJECT;
  if (!foldername || ["storybook", "site"].includes(foldername)) {
    // If we didn't get a foldername from the env variable, try to get it from the file
    if (parts.includes("components")) {
      foldername = parts[parts.indexOf("components") + 1];
    }
  }

  // If we got a foldername from the interpretation above, use it to set the paths
  cwd = foldername ? join(__dirname, "components", foldername) : cwd ?? process.cwd();

  /* Assets that are in this category are compiled in dist or node_modules */
  if (!preCompiled) {
    options.skipLint = true;
    return rootConfig({ cwd, env, file, options });
  }

  return {
    ...options,
    map,
    plugins: {
      "postcss-selector-replace": parts.includes("vars") || parts.includes("expressvars") ? {
        before: [":root"],
        after: parts.includes("expressvars") ? [".spectrum--express"] : [".spectrum"],
      } : false,
      "postcss-prefix-selector": parts.includes("expressvars") ? {
        prefix: ".spectrum--express",
        transform(_prefix, selector, prefixedSelector) {
          if (selector.startsWith(".spectrum--express")) return selector;
          /* Smoosh the selectors together b/c they co-exist */
          return prefixedSelector.replace(" ", "");
        },
      } : false,
      "@spectrum-tools/postcss-prettier": {
        overrides: {
          // Extending this prevents var stacks from line-wrapping (making them easier to diff)
          printWidth: 250,
        },
        // Passing the config path saves a little time b/c it doesn't have to find it
        configFile: join(__dirname, "..", ".prettierrc")
      },
    },
  };
};
