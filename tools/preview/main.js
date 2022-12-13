const path = require('path');
const fs = require('fs');

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
  ],
  core: {
    /* Do not send analytics to storybook */
    disableTelemetry: true,
    options: {
      /* Enable lazy compilation */
      lazyCompilation: true,
      /* Set up the cache when not in watch mode */
      fsCache: !(process.env.WATCH_MODE === 'true'),
    },
  },
  webpackFinal: async (config) => {
    /* Add support for root node_modules imports */
    config.resolve = {
      ...config.resolve,
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, '../../node_modules'),
      ],
    };

    /* Set up alias resolves for local packages */
    fs.readdirSync(path.resolve(__dirname, '../../components'), {
      withFileTypes: true,
    }).filter(c => c.isDirectory()).forEach(({ name }) => {
      config.resolve.alias[`@spectrum-css/${name}`] = path.resolve(__dirname, `../../components/${name}`);
    });

    /* Raw SVG loader */
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'raw-loader',
    });
    
    return config;
  },
  framework: '@storybook/web-components',
  features: {
    /* Code splitting flag; load stories on-demand */
    // storyStoreV7: true,
    /* Builds stories.json to help with on-demand loading */
    // buildStoriesJson: true,
    /* Enables Storybook's modern inline rendering mode */
    // modernInlineRender: true,
    postcss: false,
    // babelModeV7: true,
  },
  // refs: {
  //   'swc': {
  //     title: 'Spectrum Web Components',
  //     url: 'https://opensource.adobe.com/spectrum-web-components/storybook/',
  //     expanded: false,
  //   },
  // },
}
