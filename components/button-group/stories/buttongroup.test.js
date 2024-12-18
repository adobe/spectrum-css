import { Sizes, Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
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
		},
		{
			testHeading: "Vertical",
			vertical: true,
		},
		{
			Template: (args, context) => Sizes({
				Template,
				withHeading: false,
				withWrapperBorder: false,
				...args
			}, context),
			testHeading: "Vertical sizing",
			vertical: true,
		},
	],
});
