const { resolve, join } = require("path");
const { readdirSync, existsSync } = require("fs");

const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
	withFileTypes: true,
})
	.filter((dirent) => dirent.isDirectory() && existsSync(join(dirent.path, dirent.name, "package.json")))
	.map((dirent) => dirent.name);

module.exports = {
	stories: [{
		directory: '../components',
		files: '*/stories/*.@(stories.js|mdx)',
		titlePrefix: 'Components',
	}, {
		directory: './guides',
		files: '*.mdx',
		titlePrefix: 'Guides',
	}, {
		directory: './deprecated',
		files: '**/*.@(stories.js|mdx)',
		titlePrefix: 'Deprecated',
	}],
	rootDir: "../",
	staticDirs: ["../assets"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			// Supported booleans: actions, controls, docs, toolbars, measure, outline.
			options: {
				// Don't need viewports b/c the medium/large contexts are used to support scaling.
				viewport: false,
				// Don't need backgrounds b/c this is handled by the color contexts.
				backgrounds: false,
				// Enables JSX support in MDX for projects that aren't configured to handle the format.
				configureJSX: true,
				// Support markdown in MDX files.
				transcludeMarkdown: true,
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
		disableWhatsNewNotifications: true,
	},
	webpackFinal: function (config) {
		// Removing the global alias as it conflicts with the global npm pkg
		const { global, ...alias } = config.resolve.alias;
		config.resolve.alias = alias;

		// Parse out any storybook rules for CSS so we can replace them with our own
		const storybookRules =
			config && config.module && config.module.rules
				? config.module.rules.filter(
						(rule) => !(rule.test && rule.test.toString().includes("css"))
				  )
				: [];
		return {
			...config,
			/* Suppress autoprefixer warnings from storybook build */
			ignoreWarnings: [
				...(config.ignoreWarnings ?? []),
				/autoprefixer/,
				/postcss/,
				/.*stylelint.*/,
			],
			/* Add support for root node_modules imports */
			resolve: {
				...(config.resolve ? config.resolve : {}),
				modules: [
					...(config.resolve ? config.resolve.modules : []),
					resolve(__dirname, "../node_modules"),
				],
				alias: {
					...(config.resolve ? config.resolve.alias : {}),
					...componentPkgs.reduce((pkgs, dir) => {
						const pkg = require(resolve(componentsPath, dir, "package.json"));
						pkgs[pkg.name] = resolve(componentsPath, dir);
						return pkgs;
					}, {}),
				},
			},
			module: {
				...(config.module ?? []),
				rules: [
					...storybookRules,
					{
						test: /^\w+\.{ico,jpg,jpeg,png,gif,webp}$/i,
						use: [
							{
								loader: "file-loader",
								options: {
									outputPath: (url) => `assets/images/${url.replace(/_\//g, "")}`,
								},
							},
						],
					},
					{
						test: /\.css$/i,
						sideEffects: true,
						use: [
							{
								loader: "style-loader",
								options: {
									injectType: "linkTag",
									attributes: {
										"data-source": "processed",
									},
								},
							},
							{
								loader: "file-loader",
								options: {
									name: "[path][name].[ext][query]",
									outputPath: (url) => {
										const cleanURL = url.replace(/_\//g, "");
										if (/node_modules\/@spectrum-css/.test(url)) {
											return `assets/css/${cleanURL.replace(/node_modules\/@spectrum-css\//g, "")}`;
										}

										return `assets/css/${cleanURL}`;
									},
									esModule: false,
								},
							},
							{
								loader: "postcss-loader",
								options: {
									implementation: require("postcss"),
									postcssOptions: {
										config: resolve(__dirname, "../postcss.config.js"),
										additionalPlugins: {
											"postcss-pseudo-classes": {
												restrictTo: ['focus-visible', 'focus-within', 'hover', 'active', 'disabled'],
												allCombinations: true,
												preserveBeforeAfter: false,
												prefix: 'is-'
											},
										}
									},
								},
							},
						],
					},
					{
						test: /\.js$/,
						enforce: "pre",
						use: ["source-map-loader"],
					} /* Raw loader */,
					{
						resourceQuery: /raw/,
						type: 'asset/source',
					},
				],
			},
		};
	},
	framework: {
		name: "@storybook/web-components-webpack5",
	},
	docs: {
		autodocs: true, // see below for alternatives
		defaultName: "Docs", // set to change the name of generated docs entries
	},
};
