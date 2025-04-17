import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TagGroups = Variants({
	Template,
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
			testHeading: "Default, with icon",
			iconName: "Circle",
		},
		{
			testHeading: "Default, with avatar",
			avatarUrl: "example-ava.png",
		},
		{
			testHeading: "Emphasized, with thumbnail",
			isEmphasized: true,
			thumbnailUrl: "example-card-landscape.png",
		},
		{
			testHeading: "Truncated",
			label: "Tag label that truncates when it gets too long",
			customStyles: {
				"max-inline-size": "200px"
			}
		}
	],
	stateData: [
		{
			testHeading: "Hovered",
			isHovered: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Focused",
			isFocused: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Active",
			isActive: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Selected",
			isSelected: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Removable",
			hasClearButton: true,
		}
	]
});
