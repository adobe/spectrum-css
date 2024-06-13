// Rendered as controls; these properties are assigned to the document root element

/** @type import('@storybook/types').GlobalTypes */
export default {
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
	context: {
		title: "Context",
		description: "Determine which stylesheets to source to preview the component in that context",
		defaultValue: "spectrum",
		type: "string",
		toolbar: {
			items: [
				{ value: "spectrum", title: "Spectrum 2", right: "Default"},
				{ value: "legacy", title: "Spectrum 1", right: "Legacy" },
				{ value: "express", title: "Express", right: "Legacy" },
			],
			dynamicTitle: true,
		},
	},
	testingPreview: {
		title: "Testing preview",
		description: "Enable the testing preview",
		defaultValue: false,
		type: "boolean",
		toolbar: {
			icon: "beaker",
			items: [
				{ value: false, title: "Hide test view" },
				{ value: true, title: "Show test view" },
			],
			dynamicTitle: false,
		},
	},
};
