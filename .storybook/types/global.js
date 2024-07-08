// Rendered as controls; these properties are assigned to the document root element

/** @type import('@storybook/types').GlobalTypes */
export default {
	context: {
		title: "Design context",
		description: "The variation of Spectrum to use in the component",
		defaultValue: "spectrum",
		type: "string",
		showName: true,
		toolbar: {
			items: [
				{ value: "express", title: "Express" },
				{ value: "legacy", title: "Spectrum 1", right: "legacy" },
				{ value: "spectrum", title: "Spectrum 2", right: "default" },
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
	textDirection: {
		title: "Text direction",
		description: "Direction of the content flow",
		defaultValue: "ltr",
		type: "string",
		toolbar: {
			items: [
				{ value: "ltr", title: "Left to right" },
				{ value: "rtl", title: "Right to left" },
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
		defaultValue: "en-US",
		type: "string",
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
