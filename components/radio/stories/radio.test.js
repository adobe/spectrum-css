import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const RadioGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default"
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Truncation",
			withStates: false,
			label: "Emphasized radio button label that is so long it has to wrap",
			customStyles: {
				"max-width": "220px",
			}
		}
	],
	stateData: [
		{
			testHeading: "Checked",
			isChecked: true,
		},
		{
			testHeading: "Checked + hovered",
			isChecked: true,
		},
		{
			testHeading: "Hover",
			isHovered: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Disabled + checked",
			isDisabled: true,
			isChecked: true,
		},
		{
			testHeading: "Disabled + checked + hovered",
			isDisabled: true,
			isChecked: true,
			isHovered: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
		},
		{
			testHeading: "Read-only + checked",
			isReadOnly: true,
			isChecked: true,
		},
		{
			testHeading: "Read-only + checked + hovered",
			isHovered: true,
			isReadOnly: true,
			isChecked: true,
		},
		{
			testHeading: "Focus-visible",
			isFocused: true,
		},
	]
});
