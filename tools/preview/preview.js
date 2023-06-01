/**!
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
	withContextWrapper,
	withTextDirectionWrapper,
	withLanguageWrapper,
	withReducedMotionWrapper,
	// withSizingWrapper,
} from "./decorators/index.js";
import { withActions } from "@storybook/addon-actions/decorator";

// https://github.com/storybookjs/storybook-addon-console
import "@storybook/addon-console";
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({}).panelExclude || [];
setConsoleOptions({
	panelExclude: [...panelExclude, /deprecated/, /TypeError/],
});

import "@spectrum-css/vars/dist/spectrum-medium.css";
import "@spectrum-css/vars/dist/spectrum-large.css";

import "@spectrum-css/vars/dist/spectrum-light.css";
import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";

import "@spectrum-css/vars/dist/spectrum-global.css";

import "@spectrum-css/expressvars/dist/spectrum-medium.css";
import "@spectrum-css/expressvars/dist/spectrum-large.css";

import "@spectrum-css/expressvars/dist/spectrum-light.css";
import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";

import "@spectrum-css/expressvars/dist/spectrum-global.css";

import "@spectrum-css/tokens";

// Loading typography on every page because it's a useful utility
import "@spectrum-css/typography";

import "../../assets/scripts/typekit.js";

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
	id: {
		name: "Element ID",
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

export const parameters = {
	layout: "padded", // Valid: 'centered' | 'fullscreen' | 'padded' | 'none';
	showNav: true,
	showPanel: true,
	panelPosition: "bottom",
	showToolbar: false,
	isFullscreen: false,
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
	withActions,
];

export default {
	globalTypes,
	argTypes,
	args,
	parameters,
	decorators,
};
