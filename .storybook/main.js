import path from "node:path";

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
			directory: "./deprecated",
			files: "**/*.@(stories.js|mdx)",
			titlePrefix: "Deprecated",
		},
	],
	rootDir: "../",
	staticDirs: ["../assets"],
	port: 6006,
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
		builder: "@storybook/builder-vite",
	},
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			publicDir: "../assets",
			port: 8080,
			build: {
				sourcemap: configType === "DEVELOPMENT",
				manifest: true,
				minify: configType === "PRODUCTION",
			},
			css: {
				devSourcemap: configType === "DEVELOPMENT",
			},
			postcss: path.join(__dirname, "postcss.config.js"),
		});
	},
	framework: {
		name: "@storybook/web-components-vite",
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
