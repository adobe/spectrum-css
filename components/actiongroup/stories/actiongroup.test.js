import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ActionGroups = Variants({
	Template,
	testData: [
		{},
		{
			testHeading: "Compact",
			compact: true,
		},
		{
			testHeading: "Justified",
			justified: true,
		},
		{
			testHeading: "Quiet",
			areQuiet: true,
		},
		{
			testHeading: "Emphasized",
			areEmphasized: true,
		},
		{
			testHeading: "Vertical",
			vertical: true,
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			testHeading: "Static white",
			staticColor: "white",
		},
	],
});
