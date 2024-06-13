// import workflowSprite from "@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg?raw";
// import uiSprite from "@spectrum-css/ui-icons/dist/spectrum-css-icons.svg?raw";
import { setConsoleOptions } from "@storybook/addon-console";
import isChromatic from "chromatic/isChromatic";
import {
	withActions,
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTextDirectionWrapper,
	withWrapperStyles,
} from "./decorators";
import DocumentationTemplate from './DocumentationTemplate.mdx';
import { FontLoader, IconLoader, TokenLoader } from "./loaders/index.js";
import { argTypes, globalTypes } from "./types";

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

import "@spectrum-css/tokens";
import "./assets/base.css";
import "./assets/typekit.js";

export const args = {
	customClasses: [],
	wrapperStyles: {},
};

/** @type import('@storybook/types').StorybookParameters & import('@storybook/types').API_Layout */
export const parameters = {
	layout: "padded",
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
		// @todo: use a loader to ensure tokens load before stories without arbitrary delay
		delay: 500,
		forcedColors: "none",
		prefersReducedMotion: "no-preference",
		pauseAnimationAtEnd: true,
	},
	controls: {
		expanded: true,
		hideNoControlsWarning: true,
		sort: "requiredFirst",
	},
	html: {
		root: "#root-inner",
		removeComments: true,
		prettier: {
			tabWidth: 4,
			useTabs: false,
			htmlWhitespaceSensitivity: "ignore",
		},
		highlighter: {
			showLineNumbers: true,
			wrapLines: true,
		},
	},
	testingPreview: {
		isTestEnv: isChromatic,
		// Whether or not to show the text label next to the icon in the toolbar
		showLabel: false,
		// Whther or not to prefix groups with the name of the variant
		withHeadings: true,
		withBorder: "full",
		options: {
			// The name used to toggle this option in the testing grid
			sizing: {
				// The key of the option used by args or globals object
				key: "size",
				// Must be one of "args" or "globals"; defaults to "args"
				scope: "args",
				// How to label the value of the option in the testing grid
				mapping: {
					xxs: "Extra-extra-small",
					xs: "Extra-small",
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
					xxl: "Extra-extra-large",
				}
			},
		},
	},
	docs: {
		autodocs: true,
		page: DocumentationTemplate,
		story: {
			inline: true,
			height: "200px",
		},
		source: {
			type: "dynamic",
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
};

export const loaders = [
	FontLoader,
	IconLoader,
	TokenLoader,
];

export const decorators = [
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withContextWrapper,
	withActions,
	withWrapperStyles,
	// Attach the icons to the window object for use in the stories
	(StoryFn, context) => {
		if (context?.loaded?.icons) window.icons = context.loaded.icons;
		return StoryFn(context);
	},
];

export default {
	globalTypes,
	argTypes,
	args,
	parameters,
	decorators,
	loaders,
};
