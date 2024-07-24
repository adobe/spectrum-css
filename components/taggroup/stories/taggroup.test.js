import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const TagGroups = Variants({
	Template,
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Is removable",
			isRemovable: true,
		},
		{
			testHeading: "Overflow",
			isRemovable: true,
			isEmphasized: false,
			customStyles: {"max-width": "300px"},
			items: [
				{
					label: "Tag 1 Example",
				},
				{
					label: "Tag 2 Example",
				},
				{
					label: "Tag 3 Example",
				},
				{
					label: "Tag 4",
				},
				{
					label: "Tag 5",
				},
				{
					label: "Tag 6",
				},
				{
					label: "Tag 7",
				},
			],
		}
	],
});
