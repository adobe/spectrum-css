import fs from "node:fs";
import path from "node:path";

// Get a list of all the folders in the components directory
const componentDir = path.resolve(__dirname, "../components");
const components = fs.readdirSync(componentDir, { withFileTypes: true })
	.filter(dirent => dirent.isDirectory() && fs.existsSync(path.resolve(componentDir, dirent.name, "package.json")))
	.map(dirent => dirent.name);

/**
 * @type {import('@storybook/web-components-vite').StorybookConfig}
 */
export default {
	stories: [
		{
			directory: "../components",
			files: "*/stories/*.@(stories.js|mdx)",
			titlePrefix: "Components",
		},
		{
			directory: "./guides",
			files: "*.@(stories.js|mdx)",
			titlePrefix: "Guides",
		},
		{
			directory: "./foundations",
			files: "**/*.@(stories.js|mdx)",
			titlePrefix: "Foundations",
		},
		// @todo: add back in when we have deprecated components to show
		// {
		// 	directory: "./deprecated",
		// 	files: "**/*.@(stories.js|mdx)",
		// 	titlePrefix: "Deprecated",
		// },
	],
	rootDir: "../",
	staticDirs: ["./assets", "./assets/images"],
	addons: [
		// https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
		"@storybook/addon-a11y",
		// https://storybook.js.org/addons/@etchteam/storybook-addon-status
		"@etchteam/storybook-addon-status",
		// https://docs.chromatic.com/docs/visual-tests-addon/
		"@chromatic-com/storybook",
		// https://storybook.js.org/addons/@storybook/addon-designs/
		"@storybook/addon-designs",
	],
	core: {
		disableTelemetry: true,
		disableWhatsNewNotifications: true,
		builder: "@storybook/builder-vite",
	},
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			base: process.env.BASE_PATH || config.base,
			publicDir: "./assets",
			build: {
				sourcemap: configType === "DEVELOPMENT",
				manifest: true,
				minify: configType === "PRODUCTION",
			},
			css: {
				devSourcemap: configType === "DEVELOPMENT",
			},
			resolve: {
				alias: [
					...components.map(component => ({ find: `@spectrum-css/${component}`, replacement: path.resolve(__dirname, `../components/${component}`) })),
					{
						find: `@spectrum-css/tokens`,
						replacement: path.resolve(__dirname, `../tokens`),
					},
					{
						find: `@spectrum-css/ui-icons`,
						replacement: path.resolve(__dirname, `../ui-icons`),
					},
				],
			}
		});
	},
	build: {
		test: {
			disabledAddons: [
				"@etchteam/storybook-addon-status",
			],
			disableBlocks: false,
			disableAutoDocs: false,
			disableMDXEntries: false,
			disableDocgen: false,
		},
	},
	framework: "@storybook/web-components-vite",
	typescript: {
		reactDocgen: "react-docgen",
		// Not using typescript so disable the check
		check: false,
	},
	features: {
		/* Builds stories.json to help with on-demand loading */
		buildStoriesJson: true,
	},
	refs: {
		"web-components": {
			title: "Spectrum web components",
			url: "https://opensource.adobe.com/spectrum-web-components/storybook/",
			expanded: false,
		},
	},
};
