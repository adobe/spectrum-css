const { join, dirname, resolve } = require("path");
const { readdirSync } = require("fs");

const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
	withFileTypes: true,
})
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

module.exports = {
	stories: [
		"../components/*/stories/*.stories.js",
		"./guides/*.mdx",
		"./deprecated/*/*.stories.js",
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
		// https://storybook.js.org/addons/@storybook/addon-designs/
    	"@storybook/addon-designs",
	],
	core: {
		disableTelemetry: true,
	},
	env: {
		MIGRATED_PACKAGES: componentPkgs.filter((dir) => {
			const {
				peerDependencies = {}
			} = require(
				`@spectrum-css/${dir}/package.json`
			) ?? {};
			return Boolean(peerDependencies["@spectrum-css/tokens"]);
		}),
		VERSIONS: componentPkgs.reduce((currObj, dir) => {
			const { version } = require(
				`@spectrum-css/${dir}/package.json`
			) ?? {};
			currObj[dir] = version;
			return currObj;
		}),
	},
	webpackFinal: function (config) {
		// Removing the global alias as it conflicts with the global npm pkg
		const { global, ...alias } = config.resolve.alias;
		config.resolve.alias = alias;

		// Parse out any storybook rules for CSS so we can replace them with our own
		const storybookRules =
			config?.module?.rules
				? config.module.rules.filter(
						(rule) => !(rule.test && rule.test.toString().includes("css"))
				  )
				: [];

		return {
			...config,
			ignoreWarnings: [
				...config.ignoreWarnings ?? [],
				/autoprefixer: /
			],
			resolve: {
				...(config.resolve ?? {}),
				modules: [
					...(config.resolve?.modules ?? []),
					/* Add support for root node_modules imports */
					resolve(__dirname, "../node_modules"),
				],
				alias: {
					...(config.resolve?.alias ?? {}),
					...componentPkgs.reduce((pkgs, dir) => {
						const { name } = require(`@spectrum-css/${dir}/package.json`);
						const pkgPath = resolve(require.resolve(`@spectrum-css/${dir}/package.json`));
						pkgs[name] = dirname(pkgPath);
						return pkgs;
					}, {}),
				}
			},
			module: {
				...(config.module ?? {}),
				rules: [
					...storybookRules,
					{
						test: /\.css$/i,
						// exclude: [/node_modules/, /dist/],
						sideEffects: true,
						use: [
							{
								loader: "style-loader",
								options: {
									injectType: "linkTag",
									attributes: {
										"data-source": "processed",
									},
								}
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
								// Gets options from `postcss.config.js`
								loader: 'postcss-loader',
								options: {
									implementation: require('postcss'),
									postcssOptions: {
										config: true,
									},
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
