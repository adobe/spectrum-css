/**
 * @todo: Importing commons assets such as extends brings along all their comments
 * which is not ideal. We should be able to strip them out or make the extends available
 * to all components without having to import them.
 */

const { existsSync } = require("fs");
const { relative, sep, join, basename, dirname } = require("path");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const fetchComponentMetadata = require("./tasks/fetch-metadata-from-css");

/** @todo use a more minified-focused build for production after migration */
// const prodConfig = require("./postcss.prod.config");

/**
 * @description This PostCSS config determines how to build the CSS for each component based on the provided configuration.
 *
 * - 11ty: **file**: { dirname, basename, extname }; **cwd**: project root; **options**: { map: { inline: true } }
 * - Storybook: **file**: string with full path to import; **cwd**: undefined; **options**: {}; **mode**: (matches **env**); **webpackLoaderContext**: { **context**: (matches **cwd**) }
 * - Vanilla postcss: **file**: { dirname, basename, extname }; **cwd**: project root; **options**: { map: { inline: true } }; _input_, _output_ are passed in as args
 *
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({
  cwd: rootDir,
  env = "development",
  file,
  options = {},
  webpackLoaderContext,
}) => {
  const { skipLint = false } = options;
  const fromStorybook = Boolean(webpackLoaderContext);

  // If we're running in Storybook, we need to get the rootDir from the webpackLoaderContext
  if (!rootDir && fromStorybook && Object.keys(webpackLoaderContext).includes("rootContext")) {
    const { rootContext } = webpackLoaderContext;
    rootDir = rootContext;
  }

  let inputDirname;
  if (typeof file === "string") {
    inputDirname = dirname(file);
  } else if (typeof file === "object" && file.dirname) {
    inputDirname = file.dirname;
  }

  let inputBasename;
  if (typeof file === "string") {
    inputBasename = basename(file);
  } else if (typeof file === "object" && file.basename) {
    inputBasename = file.basename;
  }

  // Fetch input from the command line if it's available
  let {
    _: input,
    output,
    lint = !skipLint,
    flatVariables = true,
    map = options.map ?? { inline: false },
  } = yargs(hideBin(process.argv)).argv;

  // If we didn't get an inputDirname from the file, try to get it from the command line
  if (!inputDirname && input && input.length) {
    inputDirname = dirname(input[0]);
  }

  // If we didn't get an inputBasename from the file, try to get it from the command line
  if (!inputBasename && input && input.length) {
    inputBasename = basename(input[0]);
  }

  // Split the directory into an array of parts
  const parts = relative(rootDir, inputDirname).split(sep);
  const isPreCompiled = parts.includes("dist") || parts.includes("node_modules");

  let cwd;
  // Prefer the foldername provided by the NX_TASK_TARGET_PROJECT env variable
  let foldername = process.env.NX_TASK_TARGET_PROJECT;
  if (!foldername || foldername === "storybook" || foldername === "site") {
    // If we didn't get a foldername from the env variable, try to get it from the file
    if (parts.includes("components")) {
      foldername = parts[parts.indexOf("components") + 1];
      cwd = parts.slice(0, parts.indexOf("components") + 1).join(sep);
    } else {
      foldername = parts[0];
    }
  }

  // If we got a foldername from the interpretation above, use it to set the paths
  try {
    cwd = dirname(
      require.resolve(`@spectrum-css/${foldername}/package.json`)
    );
  } catch (e) { /* empty */ }

  const from = inputDirname && inputBasename ? join(inputDirname, inputBasename) : undefined;
  const to = output ?? join(inputDirname, "dist", inputBasename);

  // Determine if this is an express file
  const isExpress = Boolean(to && basename(to, ".css") === "express");
  const isTheme = isExpress || Boolean(to && basename(to, ".css") === "spectrum");
  const isVarsOnly = Boolean(to && basename(to, ".css") === "vars");
  const isBaseFile = Boolean(to && basename(to, ".css").endsWith("-base")) && !fromStorybook;

  if (isBaseFile) flatVariables = false;

  /* Assets that are in this category are compiled in dist or node_modules */
  if (isPreCompiled) {
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
  }

  const metadata = fetchComponentMetadata(from) ?? {};
  const prefix = metadata?.namespace ?? "spectrum";
  let isLegacy = metadata?.legacy ?? false;

  if (!cwd) cwd = process.cwd();

  if (!metadata?.legacy && existsSync(join(cwd, "package.json"))) {
    try {
      const { peerDependencies = {} } = require(join(cwd, "package.json"));
      if (peerDependencies["@spectrum-css/vars"]) isLegacy = true;
    } catch (e) { /* empty */ }
  }

  const componentName = metadata?.component ?? foldername;

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
          flatVariables,
          keepSelectors: !(to && basename(to, ".css").endsWith("-theme")),
        }
        : false,

      /**
       * @note this is only running on updated components in the themes/express.css file
       * or on the vars.css build
       */
      "@spectrum-tools/postcss-combine-selectors": (isExpress || isVarsOnly) ? isTheme
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
        fix: false,
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
