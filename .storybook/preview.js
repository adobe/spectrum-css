import { withActions } from "@storybook/addon-actions/decorator";

import DocumentationTemplate from './DocumentationTemplate.mdx';

import {
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper
} from "./decorators";

// https://github.com/storybookjs/storybook-addon-console
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/, /postcss/, /stylelint/],
});

import "@spectrum-css/tokens";
import "./assets/base.css";

import "./utilities/spectrum-context.js";
import "./assets/typekit.js";


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
	testingPreview: {
		title: "Testing preview",
		description: "See how the story will look to Chromatic",
		defaultValue: false,
		toolbar: {
			icon: "beaker",
			items: [
				{ value: true, title: "Show testing preview" },
				{ value: false, title: "Default mode" },
			],
		},
	}
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
	legacyTokens: {
		name: "Use legacy tokens",
		table: {
			disable: true,
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
	customStorybookStyles: {
		name: "Custom styles specific to Storybook",
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
	legacyTokens: false,
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
	options: {
		storySort: {
			method: "alphabetical-by-kind",
			order: ['Guides', ['Contributing', '*', 'Adobe Code of Conduct'], 'Components', ['Docs', 'Default', '*'], 'Deprecated', ['Docs', 'Default', '*'], '*'],
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
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withContextWrapper,
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
