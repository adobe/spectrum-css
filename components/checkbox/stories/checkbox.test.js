import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

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
			label: "Checkbox with wrapping label text",
			customStyles: { "max-inline-size": "100px" },
		}
	],
	stateData: [
		{
			testHeading: "Checked",
			isChecked: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Indeterminate",
			isIndeterminate: true,
		},
		{
			testHeading: "Read only",
			isReadOnly: true,
		},
	]
});
