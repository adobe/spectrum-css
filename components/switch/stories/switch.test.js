import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

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
			testHeading: "Checked and disabled",
			isChecked: true,
			isDisabled: true,
		},
		{
			testHeading: "With longer label",
			label: "A longer switch label that will wrap if there is not enough space",
			customStyles: {"max-width": "200px"},
			include: ["Default"],
		}
	]
});
