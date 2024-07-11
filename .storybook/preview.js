import {
	withActions,
	withContextWrapper,
	withIconSpriteSheet,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
} from "./decorators";
// import modes from "./modes";
import {
	FontLoader,
	IconLoader,
	TokenLoader,
} from "./loaders";
import DocumentationTemplate from "./templates/DocumentationTemplate.mdx";
import { argTypes, globalTypes } from "./types";

import "./assets/base.css";
import "./assets/typekit.js";

window.global = window;

/** @type import('@storybook/types').StorybookParameters & import('@storybook/types').API_Layout */
const parameters = {
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
		forcedColors: "none",
		prefersReducedMotion: "no-preference",
		pauseAnimationAtEnd: true,
		// modes,
	},
	controls: {
		expanded: true,
		hideNoControlsWarning: true,
		sort: "requiredFirst",
	},
	html: {
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
		withTextDirectionWrapper,
		withLanguageWrapper,
		withReducedMotionWrapper,
		withContextWrapper,
		withTestingPreviewWrapper,
		withActions,
		withIconSpriteSheet,
	],
	loaders: [
		FontLoader,
		IconLoader,
		TokenLoader,
	],
};
