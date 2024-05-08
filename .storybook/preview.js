import DocumentationTemplate from './DocumentationTemplate.mdx';

import {
	withActions,
	withContextWrapper,
	withLanguageWrapper,
	withPreviewStyles,
	withReducedMotionWrapper,
	withSizingWrapper,
	withStatesWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
	withVariantsWrapper,
} from "./decorators";

import { argTypes, globalTypes } from "./types";

// https://github.com/storybookjs/storybook-addon-console
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/, /postcss/, /stylelint/],
});

import "@spectrum-css/tokens";
import "./assets/base.css";

import "./assets/typekit.js";

export const args = {
	customClasses: [],
	customStorybookStyles: {},
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
	actions: { argTypesRegex: '^on.*' },
	options: {
		storySort: {
			method: "alphabetical-by-kind",
			order: ["Guides", ["Contributing", "*", "Adobe Code of Conduct", "Changelog"], "Components", ["*", ["Docs", "Default", "*"]], "Deprecated", ["*", ["Docs", "Default", "*"]], "*"],
			includeNames: true,
		},
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
	docs: {
		autodocs: true,
    	page: DocumentationTemplate,
		story: {
			inline: true,
		},
		source: {
			type: "dynamic",
			language: "html",
		},
	},
	status: {
		statuses: {
			migrated: {
				background: "rgb(0,122,77)",
				color: "#fff",
				description: "Migrated to the latest tokens.",
			},
			legacy: {
				background: "rgb(246,133,17)",
				color: "#fff",
				description: "Not yet migrated to the latest tokens.",
			},
			deprecated: {
				background: "rgb(211,21,16)",
				color: "#fff",
				description: "Should not be used and will not receive updates.",
			},
		},
	},
};

export const decorators = [
	withActions,
	withPreviewStyles,
	withStatesWrapper,
	withSizingWrapper,
	withVariantsWrapper,
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withContextWrapper,
	withTestingPreviewWrapper,
];

// Use the document.fonts API to check if fonts have loaded
// https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts API to
export const loaders = document.fonts ? [async () => ({ fonts: await document.fonts.ready })] : [];

export default {
	globalTypes,
	argTypes,
	args,
	parameters,
	decorators,
	loaders,
};
