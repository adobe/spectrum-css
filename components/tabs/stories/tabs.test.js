import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TabsGroups = Variants({
	Template,
	wrapperStyles: {
		"gap": "80px",
	},
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Compact",
			isCompact: true,
		},
	],
	stateData: [
		{
			testHeading: "Label only",
			content: [
				{
					id: "tab-1",
					label: "Tab 1",
					isSelected: true,
				},
				{
					id: "tab-2",
					label: "Tab 2",
				},
				{
					id: "tab-3",
					label: "Tab 3",
					isDisabled: true,
				},
			],
		},
		{
			testHeading: "Icon only",
			iconOnly: true
		},
	]
});
