import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { SideNavGroup, Template } from "./template";

/**
 * Side nav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.
 */
export default {
	title: "Side nav",
	component: "SideNav",
	argTypes: {
		hasIcon: {
			name: "Has Icon",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		iconName: {
			name: "Icon Name",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["Image", "Folder", "Star"],
			control: "select",
			if: { arg: "hasIcon", truthy: true }
		},
		items: { table: { disable: true }},
		variant: { table: { disable: true }}
	},
	args: {
		rootClass: "spectrum-SideNav",
		hasIcon: false,
		iconName: "Folder",
		items: [
			{
				id: "section1",
				title: "Section title 1",
				link: "#",
				isSelected: true,
			},
			{
				id: "section2",
				title: "Section title 2",
				link: "#",
				isDisabled: true,
			},
			{
				id: "section3",
				title: "Section title 3",
				link: "#",
			},
		],
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = SideNavGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = SideNavGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const Multilevel = Template.bind({});
Multilevel.tags = ["autodocs", "!dev"];
Multilevel.args = {
	variant: "multiLevel",
	items: [
		{
			id: "section1",
			title: "Section title 1",
			link: "#",
		},
		{
			id: "section2",
			title: "Section title 2",
			link: "#",
			levelTwoItems: [
				{
					id: "section2.1",
					title: "Section title 1",
					link: "#",
				},
				{
					id: "section2.2",
					title: "Section title 2: The long title that wraps to the next line",
					link: "#",
					levelThreeItems: [
						{
							id: "section3.1",
							title: "Section title 1",
							link: "#",
						},
						{
							id: "section3.2",
							title: "Section title 2: Another long title that wraps to the next line",
							link: "#",
							isSelected: true,
						},
						{
							id: "section3.3",
							title: "Section title 3",
							link: "#",
						},
					]
				},
			]
		},
		{
			id: "section3",
			title: "Section title 3",
			link: "#",
		},
	]
};
Multilevel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithHeading = Template.bind({});
WithHeading.tags = ["autodocs", "!dev"];
WithHeading.args = {
	items: [
		{
			id: "section1",
			title: "Section 1",
			link: "#",
		},
		{
			id: "section2",
			heading: "Heading 1",
			link: "#",
			levelTwoItems: [
				{
					id: "section2.1",
					title: "Section 1",
					link: "#",
				},
				{
					id: "section2.2",
					title: "Section 2",
					link: "#",
				},
			]
		}
	]
};
WithHeading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithIcons = Template.bind({});
WithIcons.tags = ["autodocs", "!dev"];
WithIcons .args = {
	variant: "multiLevel",
	hasIcon: true,
	items: [
		{
			id: "section1",
			title: "Section 1",
			link: "#",
		},
		{
			id: "section2",
			title: "Section 2",
			link: "#",
			levelTwoItems: [
				{
					id: "section2.1",
					title: "Section 1",
					link: "#",
				},
				{
					id: "section2.2",
					title: "Section 2",
					link: "#",
					levelThreeItems: [
						{
							id: "section3.1",
							title: "Section 1",
							link: "#",
						},
					]
				},
			]
		},
		{
			id: "section3",
			title: "Section 3",
			link: "#",
		},
	]
};
WithIcons.parameters = {
	chromatic: { disableSnapshot: true },
};
