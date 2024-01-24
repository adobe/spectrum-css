const { resolve } = require("path");
const { readdirSync } = require("fs");
const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
	withFileTypes: true,
})
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);
module.exports = {
	stories: [
		"../components/*/stories/*.stories.@(js|jsx|ts|tsx)",
	],
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
	],
	core: {
		disableTelemetry: true,
	},
	env: {
		MIGRATED_PACKAGES: componentPkgs.filter((dir) => {
			const {
				peerDependencies = {}
			} = require(
				resolve(componentsPath, dir, "package.json")
			) ?? {};
			return Boolean(peerDependencies["@spectrum-css/tokens"]);
		}),
	},
	webpackFinal: async (config = {}) => {
		if (!config.module) config.module = {};
		if (!config.module.rules) config.module.rules = [];

		config.module.rules = config.module.rules.map((f) => {
			if (f && f.test && f.test.toString() === '/\\.css$/') {
				f.test = /(node_modules|dist(\/|\\))(.*)\.css$/;
			}
			return f;
		});

		return {
			...config,
			ignoreWarnings: [
				...config.ignoreWarnings ?? [],
				/autoprefixer: /
			],
			resolve: {
				...config.resolve ?? {},
				modules: [
					...config.resolve.modules ?? [],
					/* Add support for root node_modules imports */
					resolve(__dirname, "../node_modules"),
				],
				alias: {
					...config.resolve.alias ?? {},
					...componentPkgs.reduce((pkgs, dir) => {
						const pkg = require(resolve(componentsPath, dir, "package.json"));
						pkgs[pkg.name] = resolve(componentsPath, dir);
						return pkgs;
					}, {}),
				}
			},
			module: {
				...config.module ?? {},
				rules: [
					...config.module.rules ?? [],
					{
						test: /\.css$/,
						exclude: [/node_modules/, /dist/],
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
								loader: 'file-loader',
								options: {
									name: '[path][name].[ext][query]',
									outputPath: (url) => {
										const cleanUrl = url.replace(/_\//g, '');
										if (/node_modules\/@spectrum-css/.test(cleanUrl)) {
											return `assets/css/${cleanUrl.replace(/node_modules\/@spectrum-css\//g, "")}`;
										}
										return `assets/css/${cleanUrl}`;
									},
									esModule: false,
								},
							},
							{
								// Gets options from `postcss.config.js` in your project root
								loader: 'postcss-loader',
								options: {
									implementation: require('postcss'),
									sourceMap: true,
								}
							}
						],
					},
				]
			}
		};
	},
	framework: {
		name: "@storybook/web-components-webpack5",
	},
	features: {
		/* Code splitting flag; load stories on-demand */
		storyStoreV7: true,
		/* Builds stories.json to help with on-demand loading */
		buildStoriesJson: true,
		lazyCompilation: true,
		fsCache: true,
	},
	docs: {
		autodocs: true, // see below for alternatives
		defaultName: "Docs", // set to change the name of generated docs entries
	},
};
