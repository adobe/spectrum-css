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
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Checked",
			isChecked: true,
		},
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		},
		{
			testHeading: "Hovered + checked",
			isHovered: true,
			isChecked: true,
		},
		{
			testHeading: "Hovered + indeterminate",
			isHovered: true,
			isChecked: true,
		},
		{
			testHeading: "Hovered + indeterminate + invalid",
			isHovered: true,
			isChecked: true,
			isIndeterminate: true,
		},
		{
			testHeading: "Active",
			isActive: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Focused + checked",
			isFocused: true,
			isChecked: true,
		},
		{
			testHeading: "Focused + indeterminate",
			isFocused: true,
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
			testHeading: "Invalid, indeterminate",
			isInvalid: true,
			isIndeterminate: true,
		},
		{
			testHeading: "Hovered + checked + invalid",
			isHovered: true,
			isChecked: true,
			isInvalid: true,
		},
		{
			testHeading: "Focused + checked + invalid",
			isFocused: true,
			isChecked: true,
			isInvalid: true,
		},
		{
			testHeading: "Focused + indeterminate + invalid",
			isFocused: true,
			isIndeterminate: true,
			isInvalid: true,
		},
		{
			testHeading: "Read-only, checked + invalid",
			isReadOnly: true,
			isChecked: true,
			isInvalid: true,
		},
		{
			testHeading: "Read-only, indeterminate + invalid",
			isReadOnly: true,
			isIndeterminate: true,
			isInvalid: true,
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
			testHeading: "Read-only, checked + hovered",
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
			testHeading: "Read-only, indeterminate + hovered",
			isReadOnly: true,
			isIndeterminate: true,
			isHovered: true,
		},
		{
			testHeading: "Read-only, checked, disabled",
			isReadOnly: true,
			isChecked: true,
			isDisabled: true,
		},
	],
});
