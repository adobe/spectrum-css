import isChromatic from "chromatic/isChromatic";

import { withActions } from "@storybook/addon-actions/decorator";
import DocumentationTemplate from './DocumentationTemplate.mdx';
import {
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTextDirectionWrapper,
} from "./decorators/index.js";

// https://github.com/storybookjs/storybook-addon-console
import "@storybook/addon-console";
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/],
});

import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/vars/dist/spectrum-light.css";

import "@spectrum-css/vars/dist/spectrum-global.css";

import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";

import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";

import "@spectrum-css/expressvars/dist/spectrum-global.css";

import "@spectrum-css/tokens";

import "./global.js";

// Rendered as controls; these properties are assigned
//      to the document root element
// @todo: resolve errors on 'name' and 'title' in console

export const globalTypes = {
	textDirection: {
		title: "Text Direction",
		description: "Direction of the content flow",
		showName: true,
		defaultValue: "ltr",
		toolbar: {
			items: [
				{ value: "ltr", title: "ltr", right: "left to right" },
				{ value: "rtl", title: "rtl", right: "right to left" },
			],
			dynamicTitle: true,
		},
	},
	lang: {
		title: "Language",
		showName: true,
		icon: "globe",
		description: "Language of the content",
		defaultValue: "en-US",
		toolbar: {
			items: [
				{ value: "en-US", title: "🇺🇸", right: "English (US)" },
				{ value: "ja", title: "🇯🇵", right: "Japanese" },
				{ value: "ko", title: "🇰🇷", right: "한국어" },
				{ value: "zh", title: "🇨🇳", right: "中文" },
			],
			dynamicTitle: true,
		},
	},
};

// Global properties added to each component;
//      determines what stylesheets are loaded
export const argTypes = {
	color: {
		name: "Color",
		description: "Controls the color context of the component.",
		type: { required: true },
		table: {
			type: { summary: "light | dark | darkest" },
			defaultValue: { summary: "light" },
			category: "Global",
		},
		options: ["light", "dark", "darkest"],
		control: {
			type: "select",
			labels: {
				light: "Light (default)",
				dark: "Dark",
				darkest: "Darkest",
			},
		},
	},
	scale: {
		name: "Platform scale",
		description: "Controls the platform scale of the component.",
		table: {
			type: { summary: "medium | large" },
			defaultValue: { summary: "medium" },
			category: "Global",
		},
		type: { required: true },
		options: ["medium", "large"],
		control: {
			type: "radio",
			labels: {
				medium: "Medium (default)",
				large: "Large",
			},
		},
	},
	// @todo https://jira.corp.adobe.com/browse/CSS-314
	reducedMotion: {
		name: "Reduce motion",
		title: "Reduce motion",
		description: "Reduce animation and transitions",
		table: {
			type: { summary: "boolean" },
			defaultValue: { summary: false },
			category: "Global",
		},
		type: { required: true },
		control: "boolean",
	},
	express: {
		name: "Express",
		description: "The express theme is a variation of Spectrum.",
		table: {
			type: { summary: "boolean" },
			defaultValue: { summary: false },
			category: "Global",
		},
		type: { required: true },
		control: "boolean",
	},
	/* None of these should show up in the args table but are necessary for rendering the templates */
	rootClass: {
		name: "Class name",
		type: { name: "string", required: true },
		table: { disable: true },
		control: "text",
	},
	customClasses: {
		name: "Custom classes",
		type: { name: "string", required: false },
		table: { disable: true },
		control: "object",
	},
	customStyles: {
		name: "Custom styles",
		type: { name: "string", required: false },
		table: { disable: true },
		control: "object",
	},
	id: {
		name: "Element ID",
		type: { name: "string", required: false },
		table: { disable: true },
		control: "text",
	},
	testId: {
		name: "Test ID",
		type: { name: "string", required: false },
		table: { disable: true },
		control: "text",
	},
};

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
	//👇 Defines a list of viewport widths for a single story to be captured in Chromatic.
	chromatic: isChromatic()
		? {
				// viewports: [320, 1200],
				// forcedColors: 'active',
				// prefersReducedMotion: 'reduce',
		  }
		: {},
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
				background: "#fff",
				color: "rgb(0,122,77)",
				description: "Migrated to the latest tokens.",
			},
			legacy: {
				background: "#fff",
				color: "rgb(246,133,17)",
				description: "Not yet migrated to the latest tokens.",
			},
			deprecated: {
				background: "#fff",
				color: "rgb(211,21,16)",
				description: "This component is should not be used and will not receive updates.",
			},
		},
	},
};

export const decorators = [
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withContextWrapper,
	withActions,
	// ...[isChromatic() ? withSizingWrapper : false].filter(Boolean),
];

export default {
	globalTypes,
	argTypes,
	args,
	parameters,
	decorators,
};
