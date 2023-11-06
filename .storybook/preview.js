import DocumentationTemplate from "./templates/Documentation.mdx";

import {
	withActions,
	withChromaticWrapper,
	withColorWrapper,
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withScaleWrapper,
	withTextDirectionWrapper,
} from "./decorators/index.js";
import { allModes } from "./modes/index.js";

import { argTypes, globalTypes } from "./types/index.js";

// https://github.com/storybookjs/storybook-addon-console
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
    panelExclude: [...panelExclude, /deprecated/, /TypeError/],
    // panelInclude: [],
    log: "🔵 [log]",
    warn: "🟡 [warn]",
    error: "🔴 [error]",
});

import "@spectrum-css/tokens";

import "./storybook-preview.css";
import "./typekit.js";

/** @type import('@storybook/types').Addon_BaseAnnotations */
export default {
	globalTypes,
	argTypes,
	args: {
		rootClass: "spectrum",
		customClasses: [],
		customStyles: {},
		id: "component",
		testId: "test-1",
	},
	/** @type import('@storybook/types').StorybookParameters & import('@storybook/types').API_Layout */
	parameters: {
		layout: "padded",
		showNav: true,
		showTabs: true,
		showPanel: true,
		panelPosition: "bottom",
		showToolbar: true,
		isFullscreen: false,
		chromatic: {
			modes: allModes,
		},
		controls: {
			expanded: true,
			hideNoControlsWarning: true,
			sort: "requiredFirst",
		},
		docs: {
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
		html: {
			root: "#root-inner",
			removeComments: /^.*lit.*$/,
			prettier: {
				tabWidth: 4,
				useTabs: false,
				htmlWhitespaceSensitivity: "strict",
			},
			highlighter: {
				showLineNumbers: true,
				wrapLines: true,
			},
		},
		status: {
			statuses: {
				migrated: {
					background: "#cef8e0",
					color: "#444",
					description: "Migrated to the latest tokens.",
				},
				legacy: {
					background: "#ffeccc",
					color: "#444",
					description: "Not yet migrated to the latest tokens.",
				},
			},
		},
	},
	decorators: [
		withTextDirectionWrapper,
		withLanguageWrapper,
		withReducedMotionWrapper,
		withChromaticWrapper,
		withContextWrapper,
		withColorWrapper,
		withScaleWrapper,
		withActions,
	],
};
