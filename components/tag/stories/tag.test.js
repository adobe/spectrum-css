import { Variants } from "@spectrum-css/preview/decorators";
import { TagsDefaultOptions, Template } from "./template.js";

export const TagGroups = Variants({
	Template,
	SizeTemplate: TagsDefaultOptions,
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
			testHeading: "Disabled with states",
			isDisabled: true,
		},
		// variants with visuals
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
		// read-only
		{
			testHeading: "Default, read-only",
			isReadOnly: true,
		},
		{
			testHeading: "Emphasized, read-only",
			isReadOnly: true,
			isEmphasized: true,
			isSelected: true,
		},
		// truncated, which many states below ignore
		{
			testHeading: "Truncated",
			label: "Tag label that truncates when it gets too long",
		}
	],
	stateData: [
		{
			testHeading: "Removable",
			isRemovable: true,
		},
		{
			testHeading: "Hovered",
			isHovered: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Keyboard focused",
			isKeyboardFocused: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Active",
			isActive: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
			ignore: ["Truncated", "Disabled with states"],
		},
		{
			testHeading: "Selected",
			isSelected: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Selected & removable",
			isSelected: true,
			isRemovable: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Selected & hovered",
			isSelected: true,
			isHovered: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Selected & keyboard focused",
			isSelected: true,
			isKeyboardFocused: true,
			ignore: ["Truncated"],
		},
		{
			testHeading: "Selected & active",
			isSelected: true,
			isActive: true,
			ignore: ["Truncated"],
		},
		// adding visuals as states so we can test them in the truncated section
		{
			testHeading: "With icon",
			iconName: "Circle",
			include: ["Truncated"],
		},
		{
			testHeading: "With icon, removable",
			iconName: "Circle",
			isRemovable: true,
			include: ["Truncated"],
		},
		{
			testHeading: "With avatar",
			avatarUrl: "example-ava.png",
			include: ["Truncated"],
		},
		{
			testHeading: "With avatar, removable",
			avatarUrl: "example-ava.png",
			isRemovable: true,
			include: ["Truncated"],
		},
		{
			testHeading: "With thumbnail",
			thumbnailUrl: "example-card-landscape.png",
			include: ["Truncated"],
		},
		{
			testHeading: "With thumbnail, removable",
			thumbnailUrl: "example-card-landscape.png",
			isRemovable: true,
			include: ["Truncated"],
		},
	]
});
