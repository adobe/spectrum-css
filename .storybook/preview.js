import { setConsoleOptions } from "@storybook/addon-console";
import {
	withActions,
	withArgEvents,
	withContextWrapper,
	withIconSpriteSheet,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
} from "./decorators";
import { FontLoader, IconLoader, TokenLoader } from "./loaders";
import modes from "./modes";
import DocumentationTemplate from "./templates/DocumentationTemplate.mdx";
import { argTypes, globalTypes } from "./types";

import "./assets/base.css";
import "./assets/typekit.js";

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

export const args = {
	customClasses: [],
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
		modes,
	},
	controls: {
		expanded: true,
		hideNoControlsWarning: true,
		sort: "requiredFirst",
	},
	html: {
		root: "[data-html-preview]",
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
	componentVersion: undefined,
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
	withTestingPreviewWrapper,
	withArgEvents,
	withActions,
	withIconSpriteSheet,
];

export default {
	globalTypes,
	argTypes: {
		...argTypes,
		// Disable the following controls from the previews as they are migrated to the global scope
		// but are still temporarily used in the stories for backwards compatibility.
		color: { table: { disable: true } },
		scale: { table: { disable: true } },
		reducedMotion: { table: { disable: true } },
		express: { table: { disable: true } },
	},
	args,
	parameters,
	decorators,
	loaders,
};
