/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { readdirSync } = require('fs');
const { join, dirname } = require("path");

const { linkSettings, convertToMarkdown } = require('./scripts/markdownSettings.js');

/**
 * @type import('@11ty/eleventy').EleventyConfig
*/
module.exports = (config) => {
  /** --------- List of component folder names --------- */
  const componentDir = join(__dirname, "../../components");
  const components = readdirSync(componentDir, {
    withFileTypes: true,
  }).filter((d) => d.isDirectory()).map((c) => c.name);
  config.addGlobalData('componentDir', componentDir);
  config.addGlobalData('components', components);

  /** --------- PLUGINS --------- */
  config.addPlugin(require('@11ty/eleventy-navigation'));
  config.addPlugin(require('eleventy-plugin-error-overlay')); // Shows error name, message, and fancy stacktrace
  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'), {
    init: function ({ Prism }) {
      Prism.languages['html-live'] = Prism.languages.html;
      Prism.languages['html-no-demo'] = Prism.languages.html;
    },
  });
  config.addPlugin(require("eleventy-plugin-code-clipboard"));

  /** --------- CONFIG --------- */
  config.setUseGitIgnore(false);
  config.setWatchThrottleWaitTime(100);
  config.setBrowserSyncConfig({
    notify: true,
    open: true,
    minify: true,
    port: process.env.BROWSERSYNC_PORT,
    server: {
      baseDir: "docs",
      index: "index.html",
      directory: true
    }
  });

  /** --------- LIBRARY SETTINGS --------- */
  config.addNunjucksGlobal('WATCH_MODE', process.env.WATCH_MODE);
  config.setLibrary('md', require('markdown-it')({ html: true })
    .use(require('markdown-it-anchor'), linkSettings)
    .use(require("eleventy-plugin-code-clipboard").markdownItCopyButton)
  );

  /** --------- FILTERS --------- */
  config.addFilter('markdownify', convertToMarkdown);
  config.addFilter('jsonify', (value) => JSON.stringify(value, null, 2));
  config.addFilter('statusLightVariant', (status) => {
    if (!status) return 'neutral';
    if (status === 'Deprecated') return 'negative';
    if (['Beta Contribution', 'Contribution', 'Unverified'].includes(status)) return 'notice';
    if (['Canon', 'Verified'].includes(status)) return 'positive';
    return 'neutral';
  });
  config.addFilter('log', value => { console.log(value) });
    /** --------- PASSTHROUGHS --------- */
  config.addPassthroughCopy({
    'assets/favicon.png': 'docs/favicon.png',
    'assets/css': 'docs/css',
    'assets/img': 'docs/img',
    'assets/js': 'docs/js',
    [require.resolve('@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg')]: 'docs/img/spectrum-icons.svg',
    [require.resolve('@spectrum-css/icon/dist/spectrum-css-icons.svg')]: 'docs/img/spectrum-css-icons.svg',
    [require.resolve('loadicons')]: 'docs/js/loadicons/index.js',
    [require.resolve('@adobe/focus-ring-polyfill')]: 'docs/js/focus-ring-polyfill/index.js',
    [require.resolve('lunr')]: 'docs/js/lunr/lunr.js',
    [`${dirname(require.resolve('prismjs'))}/themes/{prism-dark,prism}.min.css`]: 'docs/css/prism/',
    ...components.reduce((acc, c) => {
      acc[`${componentDir}/${c}/dist/*`] = `components/${c}`;
      acc[`${componentDir}/${c}/package.json`] = `components/${c}/package.json`;
      return acc;
    }, {}),
  });

  return {
    dir: {
      input: 'content',
      output: '../../dist',
      includes: '../_includes',
      layouts: '../_layouts',
      data: '../_data',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', '11ty.js', 'md', 'css', 'yml'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
}
