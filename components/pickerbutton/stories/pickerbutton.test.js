import { Variants } from "@spectrum-css/preview/decorators";
import { PickerIconOptions, Template } from "./template.js";

export const PickerGroup = Variants({
	Template,
	SizeTemplate: PickerIconOptions,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Custom sized workflow icon",
			iconName: "Calendar",
			iconSet: "workflow",
			customStyles: {
				"--mod-icon-size": "var(--spectrum-workflow-icon-size-50)",
			},
		}
	],
	stateData: [
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Active",
			isActive: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	]
});
