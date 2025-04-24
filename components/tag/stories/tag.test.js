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
			testHeading: "Selected",
			isSelected: true,
		},
		{
			testHeading: "Emphasized, selected",
			isEmphasized: true,
			isSelected: true,
		},
		// show removable tags for these variants so hover and focus can be captured
		{
			testHeading: "Default, removable",
			hasClearButton: true,
		},
		{
			testHeading: "Emphasized, removable",
			isEmphasized: true,
			hasClearButton: true,
		},
		{
			testHeading: "Selected, removable",
			isSelected: true,
			hasClearButton: true,
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
		},
		// truncated, which many states below ignore
		{
			testHeading: "Truncated",
			label: "Tag label that truncates when it gets too long",
		}
	],
	stateData: [
		// show removable as a state for test headings that don't already test it
		{
			testHeading: "Removable",
			hasClearButton: true,
			include: ["Default, with icon" , "Default, with avatar", "Emphasized, with thumbnail", "Truncated"],
		},
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
			testHeading: "Disabled",
			isDisabled: true,
			ignore: ["Truncated", "Disabled with states"],
		}
	]
});
