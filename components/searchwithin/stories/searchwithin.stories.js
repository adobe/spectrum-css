// Import the component markup template
import { Template } from "@spectrum-css/searchwithin/stories/template.js";

import { default as PickerStories } from "@spectrum-css/picker/stories/picker.stories.js";
const ignoreProps = ["rootClass", "position", "isRounded"];

export default {
	title: "Deprecated/Search within",
	component: "SearchWithin",
	argTypes: {
		...Object.entries(PickerStories.argTypes).reduce((acc, [key, value]) => {
			if (ignoreProps.includes(key)) return acc;
			if (["size"].includes(key))
				value.table = {
					...value.table,
					category: "Shared settings",
				};
			else
				value.table = {
					...value.table,
					category: "Picker settings",
				};
			return { ...acc, [key]: value };
		}, {}),
	},
	args: {
		rootClass: "spectrum-SearchWithin",
		isOpen: false,
		isQuiet: false,
		isDisabled: false,
		size: "m",
		label: "All",
	},
	parameters: {
		actions: {
			handles: [],
		},
		chromatic: { disable: true },
		status: {
			type: "deprecated"
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
