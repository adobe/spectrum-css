import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Vertical",
			vertical: true,
		},
		{
			testHeading: "Disabled",
			items: [
				{
					variant: "secondary",
					treatment: "outline",
					label: "Cancel",
					isDisabled: true,
				},
				{
					variant: "primary",
					treatment: "fill",
					label: "Enable",
					isDisabled: true,
				},
			]
		}
	],
});
