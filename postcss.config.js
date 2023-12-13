/**
 * @todo: Importing commons assets such as extends brings along all their comments
 * which is not ideal. We should be able to strip them out or make the extends available
 * to all components without having to import them.
 */

const { existsSync } = require("fs");
const { sep, join, basename, dirname } = require("path");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const fetchComponentMetadata = require("./tasks/fetch-metadata-from-css");

const siteConfig = require("./site/postcss.config");

/** @todo use a more minified-focused build for production after migration */
// const prodConfig = require("./postcss.prod.config");

/**
 * @description This PostCSS config determines which file
 * to load based on env variable
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({ cwd, env = "development", file, options = {} }) => {
  const { skipLint = false } = options;

  const {
    _: input,
    output,
    lint = !skipLint,
    map = options.map ?? { inline: false },
  } = yargs(hideBin(process.argv)).argv;

  const inputDirname = typeof file === "string" ? dirname(file) : file.dirname ?? dirname(input[0]);
  const inputBasename = typeof file === "string" ? basename(file) : file.basename ?? basename(input[0]);

  let prefix = "spectrum";
  const parts = inputDirname.split(sep);

  // Prefer the foldername provided by the NX_TASK_TARGET_PROJECT env variable
  let foldername = process.env.NX_TASK_TARGET_PROJECT;
  if (!foldername || foldername === "storybook" || foldername === "site") {
    // If we didn't get a foldername from the env variable, try to get it from the file
    if (parts.includes("components")) {
      foldername = parts[parts.indexOf("components") + 1];
    }
  }

  // If we got a foldername from the interpretation above, use it to set the paths
  cwd = foldername ? join(__dirname, "components", foldername) : cwd ?? process.cwd();
  const from = inputDirname && inputBasename ? join(inputDirname, inputBasename) : join(cwd, "index.css");
  const to = output ?? join(cwd, "dist/index.css");

  let metadata = fetchComponentMetadata(from);
  if (!metadata && existsSync(join(cwd, "index.css"))) {
    metadata = fetchComponentMetadata(join(cwd, "index.css"));
  }

  if (metadata && Object.keys(metadata).length && metadata.namespace) {
    prefix = metadata.namespace;
  }

  // Determine if this is an express file
  const isExpress = Boolean(basename(from, ".css") === "express");
  const isTheme = isExpress || Boolean(basename(from, ".css") === prefix);
  const isVarsOnly = Boolean(to && basename(to, ".css") === "vars");

  let isLegacy = metadata?.legacy ?? false;

  if (
    (
      !metadata ||
      (metadata && typeof metadata.legacy === "undefined")
    ) &&
    existsSync(join(cwd, "package.json"))
  ) {
    const pkg = require(join(cwd, "package.json"));
    if (pkg.peerDependencies && pkg.peerDependencies["@spectrum-css/vars"]) {
      isLegacy = true;
    }
  }

  const componentName = metadata?.component ?? cwd?.split(sep).pop();

  /* Assets that are in this category are compiled in dist or node_modules */
  if (parts.includes("dist") || parts.includes("node_modules")) {
    return siteConfig({ cwd, env, file, options });
  }

  return {
    ...options,
    map,
    plugins: {
      /* --------------------------------------------------- */
      /* ------------------- IMPORTS ---------------- */
      /** @link https://github.com/postcss/postcss-import#postcss-import */
      "postcss-import": {
        root: cwd,
        addModulesDirectories: [join(cwd, "node_modules"), join(__dirname, "node_modules")],
      },

      /* --------------------------------------------------- */
      /* ------------------- SASS-LIKE UTILITIES ----------- */
      "postcss-nested": {},
      "postcss-inherit": {},

      /**
       * @link https://github.com/csstools/postcss-extend-rule
       * @note replacement for postcss-inherit
       */
      "postcss-extend-rule": {
        onRecursiveExtend: "throw",
        onUnusedExtend: "ignore",
      },

      /* --------------------------------------------------- */
      /* ------------------- ORGANIZE/DEDUPE --------------- */

      /**
       * @description Converts transforms with a logical identifier to support ltr and rtl
       * @note Used in accordion, actionbutton, assetlist, breadcrumb, calendar,
       *       pagination, slider, table, & treeview
       **/
      "@spectrum-tools/postcss-transform-logical": {},

      /* --------------------------------------------------- */
      /* ------------------- VARIABLE PARSING -------------- */
      /**
       * @note only used in migrated builds; not legacy components
       * @todo could this be broken out into smaller, focused plugins?
       *
       * @example @\container style(--system: express) -> .spectrum--express
       * @link https://blog.logrocket.com/new-css-style-queries/
       * @link https://developer.chrome.com/blog/style-queries/
       *
       * @note keyIdentifier: helps the script know which class is the "root" or top-level class
       * @note keepSelectors: (default=true) false is used for index-theme.css & themes/*.css
       * @note flatVariables: (default=true) false is used for index-base.css
       */
      "@spectrum-tools/postcss-container-style-converter": !isLegacy
        ? {
          prefix,
          keyIdentifier: componentName,
          flatVariables: !(to && basename(to, ".css").endsWith("-base")),
          keepSelectors: !(to && basename(to, ".css").endsWith("-theme")),
        }
        : false,

      /**
       * @note this is only running on updated components in the themes/express.css file
       * or on the vars.css build
       */
      "@spectrum-tools/postcss-combine-selectors": (isTheme || isVarsOnly) ? isTheme
        ? {
          selector: isExpress ? `.${prefix}--express` : `.${prefix}`,
          customPropertiesOnly: isVarsOnly,
          ignoreList: [/^--highcontrast/, /^--mod/, /^--spectrum/],
        }
        : { customPropertiesOnly: true } : false,

      /* --------------------------------------------------- */
      /* ------------------- POLYFILLS --------------------- */
      /** @note [CSS-289] Coordinating with SWC */
      // "postcss-hover-media-feature": {},

      /**
       * @todo should we be documenting this for downstream users rather
       * than polyfilling the features ourselves? what if they want to
       * use a different support matrix?
       *
       * @note stage 2 (default); stage 4 === stable
       * @link https://github.com/csstools/postcss-plugins
       * @link https://preset-env.cssdb.org/features/#stage-2
       */
      "postcss-preset-env": {
        stage: 3,
        env,
        features: {
          "logical-properties-and-values": false,
          clamp: true,
          "color-functional-notation": true,
          "dir-pseudo-class": { preserve: true },
          "nesting-rules": { noIsPseudoSelector: true },
          // "focus-visible-pseudo-class": true,
          // https://github.com/jsxtools/focus-within
          "focus-within-pseudo-class": true,
          "font-format-keywords": true,
          "not-pseudo-class": true,
          "opacity-percentage": true,
          // https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme
          "prefers-color-scheme-query": true,
        },
      },
      /* --------------------------------------------------- */
      /* ------------------- CLEAN-UP TASKS ---------------- */
      "postcss-discard-comments": {
        removeAllButFirst: true
      },

      /** @todo Add this back in after migrating to the new build system */
      // cssnano: {
      //   preset: [
      //     "lite",
      //     {
      //       normalizeWhitespace: false,
      //       discardComments: true,
      //       orderedValues: false,
      //       mergeRules: false,
      //       uniqueSelectors: false,
      //       cssDeclarationSorter: false,
      //     },
      //   ],
      // },

      /* --------------------------------------------------- */
      /* ------------------- REPORTING --------------------- */
      /**
       * @todo allow customizing the config used or allow manual overrides
       */
      "@spectrum-tools/postcss-prettier": {
        overrides: {
          // Extending this prevents var stacks from line-wrapping (making them easier to diff)
          printWidth: 250,
        },
        // Passing the config path saves a little time b/c it doesn't have to find it
        configFile: join(__dirname, ".prettierrc")
      },

      stylelint: lint ? {
        // Passing the config path saves a little time b/c it doesn't have to find it
        configFile: join(__dirname, "stylelint.config.js"),
        allowEmptyInput: true,
        cache: true,
        // Note: this fixes the original file
        // fix: true,
        ignorePath: join(__dirname, ".stylelintignore"),
        reportNeedlessDisables: true,
        reportInvalidScopeDisables: true,
      } : false,

      "postcss-reporter": {
        clearAllMessages: true,
        noIcon: true,
      },
    },
  };
};
