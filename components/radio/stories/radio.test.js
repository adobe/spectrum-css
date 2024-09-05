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
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
		},
	]
});
