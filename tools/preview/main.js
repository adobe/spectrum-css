const { resolve } = require('path');
const { readdirSync } = require('fs');

const componentsPath = resolve(__dirname, '../../components');
const componentPkgs = readdirSync(componentsPath, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

module.exports = {
  stories: [
    '../../components/*/stories/*.stories.md',
    '../../components/*/stories/*.stories.js',
  ],
  rootDir: '../../',
  staticDirs: ['./assets'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      // Supported booleans: actions, controls, docs, toolbars, measure, outline.
      options: {
        viewport: false, // Don't need viewports b/c the medium/large contexts are used to support scaling.
        backgrounds: false, // Don't need backgrounds b/c this is handled by the color contexts.
        configureJSX: true, // Enables JSX support in MDX for projects that aren't configured to handle the format. 
        transcludeMarkdown: true, // Support markdown in MDX files.
      }
    },
    // https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
    '@storybook/addon-a11y',
    // https://www.npmjs.com/package/@whitespace/storybook-addon-html
    '@whitespace/storybook-addon-html',
    // https://storybook.js.org/addons/@etchteam/storybook-addon-status
    '@etchteam/storybook-addon-status',
  ],
  env: {
    MIGRATED_PACKAGES: componentPkgs.filter(dir => {
      const pkg = require(resolve(componentsPath, dir, 'package.json'));
      if (pkg.devDependencies && pkg.devDependencies['@spectrum-css/component-builder-simple']) {
        return true;
      }
      return false;
    }),
  },
  core: {
    /* Do not send analytics to storybook */
    disableTelemetry: true,
    options: {
      /* @todo Webpack 5 features */
      /* Enable lazy compilation */
      // lazyCompilation: true,
      /* Set up the cache when not in watch mode */
      // fsCache: !(process.env.WATCH_MODE === 'true'),
    },
  },
  webpackFinal: function (config) {
    let storybookRules = config && config.module && config.module.rules ?
      config.module.rules
        .filter(rule => !(rule.test && rule.test.toString().includes('css'))) : [];

    return {
      ...config,
      stats: 'errors-only',
      /* Add support for root node_modules imports */
      resolve: {
        ...config.resolve ? config.resolve : {},
        modules: [
          ...config.resolve ? config.resolve.modules : [],
          resolve(__dirname, '../../node_modules'),
        ],
        alias: {
          ...config.resolve ? config.resolve.alias : {},
          ...componentPkgs.reduce((pkgs, dir) => {
            const pkg = require(resolve(componentsPath, dir, 'package.json'));
            pkgs[pkg.name] = resolve(componentsPath, dir);
            return pkgs;
          }, {}),
        }
      },
      module: {
        ...config.module ?? [],
        rules: [
          ...storybookRules,
          {
            test: /\.css$/i,
            sideEffects: true,
            exclude: [/node_modules/, /\/dist\//],
            use: [{
              loader: "style-loader",
              options: {
                injectType: "linkTag",
                attributes: {
                  "data-source": "processed"
                }
              }
            },
            {
              loader: "file-loader",
              options: {
                name: '[path][name].[ext][query]',
                outputPath: (url, resourcePath, context) => {
                  return `assets/css/${url.replace(/_\//g, '')}`;
                },
                esModule: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                implementation: require("postcss"),
                postcssOptions: {
                  config: resolve(__dirname, 'postcss.config.js'),
                },
              },
            }],
          },
          {
            test: /\.css$/i,
            include: [/node_modules/, /\/dist\//],
            sideEffects: true,
            use: [{
              loader: "style-loader",
              options: {
                injectType: "linkTag",
                attributes: {
                  "data-source": "processed"
                }
              }
            },
            {
              loader: "file-loader",
              options: {
                name: '[path][name].[ext][query]',
                outputPath: (url, resourcePath, context) => {
                  return `assets/css/${url.replace(/_\//g, '')}`;
                },
                esModule: false,
              },
            }],
          },
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
          /* Raw SVG loader */
          {
            test: /\.svg$/i,
            loader: 'raw-loader',
          },
        ]
      }
    };
  },
  framework: '@storybook/web-components',
  features: {
    postcss: false,
    /* Code splitting flag; load stories on-demand */
    storyStoreV7: true,
    /* Builds stories.json to help with on-demand loading */
    buildStoriesJson: true,
    /* Enables Storybook's modern inline rendering mode */
    // modernInlineRender: true,
    // babelModeV7: true,
  },
  reactOptions: {
    fastRefresh: true,
  },
  // refs: {
  //   'swc': {
  //     title: 'Spectrum Web Components',
  //     url: 'https://opensource.adobe.com/spectrum-web-components/storybook/',
  //     expanded: false,
  //   },
  // },
};
