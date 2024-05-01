
import DocumentationTemplate from "./DocumentationTemplate.mdx";

import { withActions } from "@storybook/addon-actions/decorator";
import {
	withContextWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	withTestingPreviewWrapper,
	withTextDirectionWrapper,
} from "./decorators/index.js";

// https://github.com/storybookjs/storybook-addon-console
import "@storybook/addon-console";
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/, /postcss/, /stylelint/],
});

import "./assets/base.css";

import "./assets/typekit.js";


// Rendered as controls; these properties are assigned
//      to the document root element
// @todo: resolve errors on 'name' and 'title' in console

export const globalTypes = {
	textDirection: {
		title: "Text Direction",
		description: "Direction of the content flow",
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
	color: {
		title: "Color",
		description: "Controls the color context of the component.",
		defaultValue: "light",
		toolbar: {
			items: [
				{ value: "light", title: "Light", right: "(default)" },
				{ value: "dark", title: "Dark", right: "" },
			],
			dynamicTitle: true,
		},
	},
	scale: {
		title: "Platform scale",
		description: "Controls the platform scale of the component.",
		defaultValue: "medium",
		toolbar: {
			items: [
				{ value: "medium", title: "Medium", right: "(desktop)" },
				{ value: "large", title: "Large", right: "(mobile)" },
			],
			dynamicTitle: true,
		},
	},
	theme: {
		title: "Render context",
		description: "Describes the context of the component.",
		defaultValue: "spectrum",
		toolbar: {
			items: [
				{ value: "spectrum", title: "Spectrum 2", right: "(default)" },
				{ value: "legacy", title: "Spectrum 1", right: "" },
				{ value: "express", title: "Express", right: "" },
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
	reducedMotion: false,
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
			method: "alphabetical",
			order: ["Guides", ["Contributing", "*", "Adobe Code of Conduct"], "Components", ["*", ["Docs", "Default", "*"]], "*"],
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
