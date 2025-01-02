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
			testHeading: "Is removable",
			hasClearButton: true,
		},
		{
			testHeading: "With icon",
			hasIcon: true,
			iconName: "Info",
		},
		{
			testHeading: "With avatar",
			hasAvatar: true,
			avatarUrl: "example-ava.png",
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
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Selected",
			isSelected: true,
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
	]
});
