import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const SwitchGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Checked",
			isChecked: true,
		},
		{
			testHeading: "Checked and Disabled",
			isChecked: true,
			isDisabled: true,
		},
	]
});
