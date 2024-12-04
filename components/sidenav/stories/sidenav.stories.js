import { Template } from "./template";

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
		iconName: "Folder"
	},
	parameters: {
		actions: {
			handles: []
		},
		status: {
			type: "migrated"
		}
	}
};

export const Default = Template.bind({});
Default.args = {
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
};

export const Multilevel = Template.bind({});
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

export const WithHeading = Template.bind({});
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

export const WithIcons = Template.bind({});
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
