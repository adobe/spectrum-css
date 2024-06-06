
import { setConsoleOptions } from "@storybook/addon-console";
import {
	withActions,
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
} from "./decorators/index.js";
import DocumentationTemplate from './DocumentationTemplate.mdx';
import { argTypes, globalTypes } from "./types";

import "./assets/base.css";
import "./assets/typekit.js";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/, /postcss/, /stylelint/],
});

export const args = {
	color: "light",
	scale: "medium",
	reducedMotion: false,
	express: false,
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
	actions: { argTypesRegex: '^on.*' },
	options: {
		storySort: {
			method: "alphabetical-by-kind",
			order: ["Guides", ["Contributing", "*", "Adobe Code of Conduct", "Changelog"], "Components", ["*", ["Docs", "Default", "*"]], "Deprecated", ["*", ["Docs", "Default", "*"]], "*"],
			includeNames: true,
		},
	},
	// chromatic: { forcedColors: 'active' },
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
	args,
	parameters,
	decorators,
	loaders,
};
