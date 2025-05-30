import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CheckboxGroup = Variants({
	Template,
	stateDirection: "row",
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Truncation",
			withStates: false,
			label: "Checkbox with an extraordinarily long label. Please don't do this but if you did, it should wrap text when it gets longer than the container that houses the checkbox with the unacceptably long label",
			customStyles: {
				"max-width": "200px",
			}
		}
	],
	stateData: [
		{
			testHeading: "Checked",
			isChecked: true,
		},
		{
			testHeading: "Checked, hovered",
			isChecked: true,
			isHovered: true,
		},
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Invalid, checked",
			isInvalid: true,
			isChecked: true,
		},
		{
			testHeading: "Invalid, checked, hovered",
			isInvalid: true,
			isChecked: true,
			isHovered: true,
		},
		{
			testHeading: "Invalid, indeterminate",
			isInvalid: true,
			isIndeterminate: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Disabled, checked",
			isDisabled: true,
			isChecked: true,
		},
		{
			testHeading: "Disabled, checked, hovered",
			isDisabled: true,
			isChecked: true,
		},
		{
			testHeading: "Disabled, indeterminate",
			isDisabled: true,
			isIndeterminate: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
		},
		{
			testHeading: "Read-only, checked",
			isReadOnly: true,
			isChecked: true,
		},
		{
			testHeading: "Read-only, checked, hovered",
			isReadOnly: true,
			isChecked: true,
			isHovered: true,
		},
		{
			testHeading: "Read-only, indeterminate",
			isReadOnly: true,
			isIndeterminate: true,
		},
		{
			testHeading: "Read-only, checked, disabled",
			isReadOnly: true,
			isChecked: true,
		},
	]
});
