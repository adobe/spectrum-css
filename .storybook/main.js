import fs from "fs";
import path from "path";
import remarkGfm from 'remark-gfm';

// Get a list of all the folders in the components directory
const componentDir = path.resolve(__dirname, "../components");
const components = fs.readdirSync("../components", { withFileTypes: true })
	.filter(dirent => dirent.isDirectory() && fs.existsSync(path.resolve(componentDir, dirent.name, "package.json")))
	.map(dirent => dirent.name);

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
		{
			directory: "./deprecated",
			files: "**/*.@(stories.js|mdx)",
			titlePrefix: "Deprecated",
		},
	],
	rootDir: "../",
	staticDirs: ["./assets", "./assets/images"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			// Supported booleans: actions, controls, docs, toolbars, measure, outline.
			options: {
				// Don't need viewports b/c the medium/large contexts are used to support scaling.
				viewport: false,
				// Don't need backgrounds b/c this is handled by the color contexts.
				backgrounds: false,
				// Configure separately
				docs: false,
			},
		},
		{
			name: "@storybook/addon-docs",
			options: {
				// Enables JSX support in MDX for projects that aren't configured to handle the format.
				configureJSX: true,
				// Support markdown in MDX files
				transcludeMarkdown: true,
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
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
				alias: components.map(component => ({ find: `@spectrum-css/${component}`, replacement: path.resolve(__dirname, `../components/${component}`) })),
			}
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
		defaultName: "Docs",
	},
	refs: {
		"web-components": {
			title: "Spectrum web components",
			url: "https://opensource.adobe.com/spectrum-web-components/storybook/",
			expanded: false,
		},
	},
};
