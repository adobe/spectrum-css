/**
 * Rendered as controls; these properties are assigned to the document root element
 */

/** @type import('@storybook/types').GlobalTypes */
export default {
	context: {
		title: "Design context",
		description: "The variation of Spectrum to use in the component",
		defaultValue: "legacy",
		type: "string",
		showName: true,
		toolbar: {
			items: [
				{ value: "legacy", title: "Spectrum 1", right: "default" },
				{ value: "express", title: "Express" },
				{ value: "raw", title: "Token-free", right: "raw" },
			],
			dynamicTitle: true,
		},
	},
	color: {
		title: "Color",
		description: "Controls the color context of the component",
		defaultValue: "light",
		icon: "paintbrush",
		type: "string",
		toolbar: {
			items: [
				{ value: "light", title: "Light", right: "default" },
				{ value: "dark", title: "Dark" },
				{ value: "darkest", title: "Darkest", right: "deprecated" },
			],
			dynamicTitle: true,
		},
	},
	scale: {
		title: "Platform scale",
		description: "Controls the platform scale of the component",
		defaultValue: "medium",
		type: "string",
		toolbar: {
			items: [
				{ value: "medium", title: "Medium", right: "default", icon: "browser" },
				{ value: "large", title: "Large", icon: "mobile" },
			],
			dynamicTitle: true,
		},
	},
	// @todo https://jira.corp.adobe.com/browse/CSS-314
	reducedMotion: {
		title: "Reduce motion",
		description: "Reduce animation and transitions",
		defaultValue: false,
		type: "boolean",
		toolbar: {
			items: [
				{ value: false, title: "Default", icon: "play" },
				{ value: true, title: "Reduced motion", icon: "stop" },
			],
			dynamicTitle: false,
		},
	},
	lang: {
		title: "Language",
		description: "Language of the content",
		defaultValue: "en_US",
		type: "string",
		toolbar: {
			items: [
				{ value: "en_US", title: "English", right: "English (US)" },
				{ value: "he", title: "Hebrew", right: "עִברִית" },
				{ value: "ja", title: "Japanese", right: "日本語" },
				{ value: "ko", title: "Korean", right: "한국어" },
				{ value: "ar", title: "Arabic", right: "عربي" },
				{ value: "zh", title: "Chinese", right: "中文" },
				{ value: "fa", title: "Persian", right: "فارسی" },
				{ value: "th", title: "Thai", right: "ไทย" },
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
