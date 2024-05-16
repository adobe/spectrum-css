import DocumentationTemplate from './DocumentationTemplate.mdx';

import {
	withActions,
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
	withWrapperStyles
} from "./decorators";

import { argTypes, globalTypes } from "./types";

import "@storybook/addon-console";
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
	actions: { argTypesRegex: '^on.*' },
	options: {
		storySort: {
			method: "alphabetical-by-kind",
			order: ["Guides", ["Contributing", "*", "Adobe Code of Conduct", "Changelog"], "Components", ["*", ["Docs", "Default", "*"]], "Deprecated", ["*", ["Docs", "Default", "*"]], "*"],
			includeNames: true,
		},
	},
	chromatic: {
		// @todo: uncomment this to enable modes testing
		// Example success: https://www.chromatic.com/build?appId=64762974a45b8bc5ca1705a2&number=1941
		// modes,
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
			// @todo remove this?
			iframeHeight: "200px",
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

export const decorators = [
	withActions,
	withWrapperStyles,
	withContextWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
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
