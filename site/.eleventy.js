/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { readdirSync, existsSync } = require("fs");
const { join } = require("path");

const open = require("open");

const filters = require("./utils/filters");
const markdown = require("./utils/markdown");
const shortcodes = require("./utils/shortcodes");
const transforms = require("./utils/transforms");
const styles = require("./utils/styles");
const scripts = require("./utils/scripts");

const { EleventyRenderPlugin } = require("@11ty/eleventy");

const Navigation = require("@11ty/eleventy-navigation");
const Bundle = require("@11ty/eleventy-plugin-bundle");
const Output = require("@11ty/eleventy-plugin-directory-output");
const SyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CodeClipboard = require("eleventy-plugin-code-clipboard");
const pluginTOC = require("eleventy-plugin-nesting-toc");

const md = markdown();

let firstRun = true;
const isDev = process.env.NODE_ENV === "development";

/**
 * @type import('@11ty/eleventy').EleventyConfig
 */
module.exports = (config) => {
	/** --------- PLUGINS --------- */
	if (isDev) config.addPlugin(Output);

	config.addPlugin(EleventyRenderPlugin);
	config.addPlugin(Navigation);
	config.addPlugin(Bundle);
	config.addPlugin(SyntaxHighlight, {
		config: {
			preAttributes: {
				class: ({ language }) => "spectrum-Code",
			},
			codeAttributes: {},
		},
		init: function ({ Prism }) {
			Prism.languages["html-live"] = Prism.languages.html;
			Prism.languages["html-no-demo"] = Prism.languages.html;
		},
	});
	config.addPlugin(CodeClipboard);
	config.addPlugin(pluginTOC, {
		headingText: "Content",
		tags: ["h2", "h3"],
	});

	/** --------- CONFIG --------- */
	config.setDataDeepMerge(true);
	config.setWatchThrottleWaitTime(100);
	config.setServerOptions({
		liveReload: true,
		domDiff: true,
		port: process.env.PORT || 8080,
		showAllHosts: true,
		encoding: "utf-8",
	});

	// @todo Add logic to rebuild only relevant compiled pages
	config.addWatchTarget("../components/*/metadata/*.yml");
	config.addWatchTarget("./assets/**/*");

	/** --------- List of component folder names --------- */
	const componentDir = join(__dirname, "../components");
	const components = readdirSync(componentDir, {
		withFileTypes: true,
	})
		.filter((d) => d.isDirectory())
		.map((c) => c.name);

	config.addCollection("packages", () =>
		components.map((c) => {
			const stylesheet = existsSync(
				join(__dirname, `../components/${c}/dist/index.css`)
			)
				? `index.css`
				: existsSync(join(__dirname, `../components/${c}/dist/index-vars.css`))
				? `index-vars.css`
				: null;
			return {
				name: c,
				stylesheet,
				folder: `/components/${c}`,
			};
		})
	);

	/** --------- LIBRARY SETTINGS --------- */
	config.addNunjucksGlobal("WATCH_MODE", process.env.WATCH_MODE);

	/** --------- CSS --------- */
	config.addTemplateFormats("css");
	config.addExtension("css", {
		outputFileExtension: "css",
		compileOptions: {
			permalink: () => (data) =>
				`assets/${data.page.filePathStem}.${data.page.outputFileExtension}`,
		},
		compile: styles.compiler,
	});

	/** --------- JS --------- */
	config.addTemplateFormats("js");
	config.addExtension("js", {
		outputFileExtension: "js",
		compileOptions: {
			spiderJavascriptDependencies: true,
			permalink: () => (data) =>
				`assets/${data.page.filePathStem}.${data.page.outputFileExtension}`,
		},
		compile: scripts.compiler,
	});

	/** --------- MARKDOWN --------- */
	config.setLibrary("md", md);

	/** --------- FILTERS --------- */
	Object.keys(filters).forEach((key) => {
		config.addFilter(key, filters[key]);
	});

	/** --------- TRANSFORMS --------- */
	Object.keys(transforms).forEach((key) => {
		config.addTransform(key, transforms[key]);
	});

	/** --------- SHORTCODES --------- */
	// Fetch shortcodes by type
	Object.entries(shortcodes).forEach(([type, codes]) => {
		Object.keys(codes).forEach((key) => {
			config[type](key, shortcodes[key]);
		});
	});

	/** --------- PASSTHROUGHS --------- */
	config.addPassthroughCopy({
		// Passthrough shared assets from the source of the project
		"../assets/scripts": "assets/scripts/",
		"../assets/images": "assets/images/",
		"../assets/favicons": "/",
		...(isDev && {
			// Pass through the storybook build
			"../tools/preview/storybook-static": "preview",
		}),
		...components.reduce((acc, c) => {
			acc[`${componentDir}/${c}/dist/*`] = `components/${c}`;
			acc[`${componentDir}/${c}/package.json`] = `components/${c}/package.json`;
			acc[
				`${componentDir}/${c}/stories/${c}.stories.js`
			] = `components/${c}/${c}.stories.js`;
			acc[
				`${componentDir}/${c}/stories/template.js`
			] = `components/${c}/template.js`;
			return acc;
		}, {}),
	});

	return {
		dir: {
			input: "content",
			output: "dist",
			includes: "../_includes",
			layouts: "../_layouts",
			data: "../_data",
		},
		pathPrefix: "/",
		passthroughFileCopy: false,
		templateFormats: [
			"njk",
			"11ty.js",
			"md",
			"js",
			"postcss",
			"png",
			"svg",
			"ico",
		],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	};
};
