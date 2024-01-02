const { join } = require("path");
const { existsSync, readdirSync } = require("fs");
const componentsPath = join(__dirname, "../components");
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
		// https://github.com/storybookjs/storybook/tree/next/code/addons/actions
		"@storybook/addon-actions",
		// https://github.com/storybookjs/storybook/tree/next/code/addons/interactions
		"@storybook/addon-interactions",
		// https://www.npmjs.com/package/@whitespace/storybook-addon-html
		"@whitespace/storybook-addon-html",
		// https://storybook.js.org/addons/@etchteam/storybook-addon-status
		"@etchteam/storybook-addon-status",
		// https://www.chromatic.com/docs/visual-testing-addon/
		"@chromaui/addon-visual-tests",
	],
	core: {
		disableTelemetry: true,
	},
	env: {
		MIGRATED_PACKAGES: componentPkgs.filter((dir) => {
			if (!existsSync(join(componentsPath, dir, "package.json"))) {
				return false;
			}

			const {
				peerDependencies = {},
				devDependencies = {},
				dependencies = {}
			} = require(join(componentsPath, dir, "package.json"));

			const allDeps = [...new Set([
				...Object.keys(dependencies),
				...Object.keys(devDependencies),
				...Object.keys(peerDependencies),
			])];

			if (
				allDeps.length > 0 &&
				allDeps.includes("@spectrum-css/vars")
			) {
				return false;
			}

			return true;
		}),
	},
	webpackFinal: function (config) {
		// Removing the global alias as it conflicts with the global npm pkg
		const { global, ...alias } = config.resolve.alias;
		config.resolve.alias = alias;
		let storybookRules =
			config && config.module && config.module.rules
				? config.module.rules.filter(
						(rule) => !(rule.test && rule.test.toString().includes("css"))
				  )
				: [];
		return {
			...config,
			stats: {
				/* Suppress autoprefixer warnings from storybook build */
				warningsFilter: [/autoprefixer: /],
			},
			/* Add support for root node_modules imports */
			resolve: {
				...(config.resolve ? config.resolve : {}),
				modules: [
					...(config.resolve ? config.resolve.modules : []),
					join(__dirname, "../node_modules"),
				],
				alias: {
					...(config.resolve ? config.resolve.alias : {}),
					...componentPkgs.reduce((pkgs, dir) => {
						const pkg = require(join(componentsPath, dir, "package.json"));
						pkgs[pkg.name] = join(componentsPath, dir);
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
										config: join(__dirname, "postcss.config.js"),
									},
									sourceMap: true,
								},
							},
						],
					},
					{
						test: /\.js$/,
						enforce: "pre",
						use: ["source-map-loader"],
					} /* Raw SVG loader */,
					{
						test: /\.svg$/i,
						loader: "raw-loader",
					},
				],
			},
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
	},
	docs: {
		autodocs: true, // see below for alternatives
		defaultName: "Docs", // set to change the name of generated docs entries
	},
};
