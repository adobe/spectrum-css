import fs from "node:fs";
import { createRequire } from "node:module";
import path, { dirname, join } from "node:path";

const require = createRequire(import.meta.url);

// Get a list of all the folders in the components directory
const componentDir = path.resolve(__dirname, "../components");
const components = fs.readdirSync(componentDir, { withFileTypes: true })
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
		// {
		// 	directory: "./deprecated",
		// 	files: "**/*.@(stories.js|mdx)",
		// 	titlePrefix: "Deprecated",
		// },
	],
	rootDir: "../",
	staticDirs: ["./assets", "./assets/images"],
	addons: [
		"@storybook/addon-docs",
		"@whitespace/storybook-addon-html",
		"@storybook/addon-a11y",
		"@etchteam/storybook-addon-status",
		"@chromatic-com/storybook",
		"@storybook/addon-designs",
	],
	core: {
		disableTelemetry: true,
		disableWhatsNewNotifications: true,
		builder: getAbsolutePath("@storybook/builder-vite"),
	},
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			publicDir: "./assets",
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: [
					"@whitespace/storybook-addon-html",
					"lit",
					"lodash-es",
					"storybook/internal/components",
					"storybook/theming",
				],
			},
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
				"@whitespace/storybook-addon-html",
				"@etchteam/storybook-addon-status",
			],
			disableBlocks: false,
			disableAutoDocs: false,
			disableMDXEntries: false,
			disableDocgen: false,
		},
	},
	framework: getAbsolutePath("@storybook/web-components-vite"),
	typescript: {
		reactDocgen: "react-docgen",
		// Not using typescript so disable the check
		check: false,
	},
	features: {
		/* Code splitting flag; load stories on-demand */
		storyStoreV7: true,
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

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
