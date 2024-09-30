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
			testHeading: "Overflow",
			customStyles: { "max-inline-size": "288px" },
			content: [
				{
					iconName: "Edit",
					iconSet: "workflow",
					label: "Edit",
				},
				{
					iconName: "Copy",
					iconSet: "workflow",
					label: "Copy",
				},
				{
					iconName: "Delete",
					iconSet: "workflow",
					label: "Delete",
				},
				{
					iconName: "Cut",
					iconSet: "workflow",
					label: "Cut",
				},
				{
					iconName: "Move",
					iconSet: "workflow",
					label: "Move",
				},
			]
		}
	],
});
