/*!
 * Copyright 2023 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { resolve, join } = require("path");
const { readdirSync, existsSync } = require("fs");

const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
	withFileTypes: true,
})
	.filter((dirent) => dirent.isDirectory() && existsSync(join(dirent.path, dirent.name, "package.json")))
	.map((dirent) => dirent.name);

const { mergeWithRules } = require('webpack-merge');
const webpackConfig = require("./webpack.config.js");

module.exports = {
	stories: [
		"../components/*/stories/*.stories.js",
		"../components/*/stories/*.mdx",
		"./guides/*.mdx",
		"./deprecated/*/*.stories.js",
		"./deprecated/*/*.mdx",
	],
	docs: {
		autodocs: true, // see below for alternatives
		defaultName: "Docs", // set to change the name of generated docs entries
	},
	rootDir: "../",
	staticDirs: ["../assets"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			// Supported booleans: actions, controls, docs, toolbars, measure, outline.
			options: {
				viewport: false,
				// Don't need viewports b/c the medium/large contexts are used to support scaling.
				backgrounds: false,
				// Don't need backgrounds b/c this is handled by the color contexts.
				configureJSX: true,
				// Enables JSX support in MDX for projects that aren't configured to handle the format.
				transcludeMarkdown: true, // Support markdown in MDX files.
			},
		},
		// https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
		"@storybook/addon-a11y",
		// https://www.npmjs.com/package/@whitespace/storybook-addon-html
		"@whitespace/storybook-addon-html",
		// https://storybook.js.org/addons/@etchteam/storybook-addon-status
		"@etchteam/storybook-addon-status",
		// https://github.com/storybookjs/storybook/tree/next/code/addons/interactions
		"@storybook/addon-interactions",
		// https://www.chromatic.com/docs/visual-testing-addon/
		"@chromaui/addon-visual-tests",
		// https://storybook.js.org/addons/@storybook/addon-designs/
    	"@storybook/addon-designs",
	],
	core: {
		disableTelemetry: true,
	},
	webpackFinal(config) {
		// Removing the global alias as it conflicts with the global npm pkg
		const { global, ...alias } = config.resolve.alias;
		config.resolve.alias = alias;

		return mergeWithRules({
			module: {
				rules: {
					test: "match",
					use: "replace"
				}
			}
		})(config, webpackConfig);
	},
	framework: {
		name: "@storybook/web-components-webpack5",
	},
	features: {
		/* Code splitting flag; load stories on-demand */
		storyStoreV7: true,
		/* Builds stories.json to help with on-demand loading */
		buildStoriesJson: true,
	},
};
