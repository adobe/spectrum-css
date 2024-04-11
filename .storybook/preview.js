
import DocumentationTemplate from './DocumentationTemplate.mdx';

import {
	withActions,
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
} from "./decorators/index.js";
import { argTypes, globalTypes } from "./types";

// https://github.com/storybookjs/storybook-addon-console
import "@storybook/addon-console";
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/, /postcss/, /stylelint/],
});

import "@spectrum-css/tokens";
import "./assets/base.css";

import "./assets/typekit.js";

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
			order: ['Guides', ['Contributing', '*', 'Adobe Code of Conduct'], 'Foundations', 'Components', ['Docs', 'Default', '*'], 'Deprecated', ['Docs', 'Default', '*'], '*'],
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
				background: "#f0f0f0",
				color: "#444",
				description: "Migrated to the latest tokens.",
			},
		},
	},
};

export const decorators = [
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withContextWrapper,
	withTestingPreviewWrapper,
	withActions,
];

// Use the document.fonts API to check if fonts have loaded
// https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts API to
export const loaders = document.fonts ? [async () => ({ fonts: await document.fonts.ready })] : [];

export default {
	globalTypes,
	argTypes,
	args: {
		customClasses: [],
		customStorybookStyles: {},
	},
	parameters,
	decorators,
	loaders,
};
