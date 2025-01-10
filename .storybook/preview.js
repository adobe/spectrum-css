import { setConsoleOptions } from "@storybook/addon-console";
import {
  withActions,
  withArgEvents,
  withContextWrapper,
  withIconSpriteSheet,
  withLanguageWrapper,
  withReducedMotionWrapper,
  withTestingPreviewWrapper,
  withTextDirectionWrapper
} from "./decorators";
import {
  FontLoader,
  IconLoader,
} from "./loaders";
import modes from "./modes";
import DocumentationTemplate from "./templates/DocumentationTemplate.mdx";
import {
  argTypes,
  globalTypes
} from "./types";

import "./assets/base.css";

window.global = window;

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [
		...panelExclude,
		/deprecated/,
		/TypeError/,
		/postcss/,
		/stylelint/,
	],
});

/** @type import('@storybook/types').StorybookParameters & import('@storybook/types').API_Layout */
export const parameters = {
	layout: "centered",
	showNav: true,
	showTabs: true,
	showPanel: true,
	panelPosition: "bottom",
	showToolbar: true,
	isFullscreen: false,
	actions: { argTypesRegex: "^on.*" },
	options: {
		storySort: {
			method: "alphabetical-by-kind",
			order: [
				"Guides",
				["Contributing", "*", "Adobe Code of Conduct", "Changelog"],
				"Components",
				["*", ["Docs", "Default", "*"]],
				"Deprecated",
				["*", ["Docs", "Default", "*"]],
				"*",
			],
			includeNames: true,
		},
	},
	chromatic: {
		forcedColors: "none",
		prefersReducedMotion: "no-preference",
		pauseAnimationAtEnd: true,
		modes,
	},
	controls: {
		expanded: true,
		hideNoControlsWarning: true,
		sort: "requiredFirst",
	},
	html: {
		root: "[data-html-preview]:first-of-type",
		removeComments: true,
		prettier: {
			tabWidth: 4,
			useTabs: false,
			htmlWhitespaceSensitivity: "ignore",
		},
		highlighter: {
			showLineNumbers: false,
			wrapLines: true,
		},
	},
	docs: {
		page: DocumentationTemplate,
		story: { inline: true },
		source: {
			dark: false,
			excludeDecorators: true,
			type: "auto",
			language: "html",
		},
	},
	status: {
		statuses: {
			migrated: {
				background: "#f0f0f0",
				color: "#444",
				description: "Migrated to the latest tokens.",
			},
			deprecated: {
				background: "rgb(211,21,16)",
				color: "#fff",
				description: "Should not be used and will not receive updates.",
			},
		},
	},
	// Set an empty object to avoid the "undefined" value in the ComponentDetails doc block
	packageJson: {},
	// A list of published npm tags that should not appear in the ComponentDetails doc block
	ignoredTags: ["beta", "next"],
};

export default {
	title: "Spectrum CSS",
	parameters,
	argTypes,
	globalTypes,
	args: {
		customClasses: [],
		customStyles: {},
	},
	decorators: [
		withLanguageWrapper,
		withReducedMotionWrapper,
		withTextDirectionWrapper,
		withContextWrapper,
		withTestingPreviewWrapper,
		withArgEvents,
		withActions,
		withIconSpriteSheet,
	],
	loaders: [
		FontLoader,
		IconLoader,
	],
	tags: ["autodocs", "dev"],
};
