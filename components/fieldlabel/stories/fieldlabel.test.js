import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const FieldLabelGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			customStyles: { width: "200px" },
		},
		{
			testHeading: "Right alignment",
			alignment: "right",
			customStyles: { width: "200px" },
		},
		{
			testHeading: "Wrapped",
			label: "Label example with longer text that will wrap to the next line. Sometimes there is an asterisk that marks it as required.",
			customStyles: { width: "200px" },
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			ignore: ["Wrapped"],
			isDisabled: true,
			customStyles: { width: "200px" },
		},
		{
			testHeading: "Required",
			isRequired: true,
			customStyles: { width: "200px" },
		},
	],
});
