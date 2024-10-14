import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { SideNavGroup } from "./sidenav.test.js";
import { Template } from "./template.js";

/**
 * Side nav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.
 *
 * - A navigation item can be styled as disabled with the `is-disabled` class.
 * - A navigation item can be styled as the current or selected page with the `is-selected` class. This is accompanied by the use of the `aria-current` attribute on the anchor link.
 */
export default {
	title: "Side nav",
	component: "SideNav",
	argTypes: {
		hasIcon: {
			name: "Has icon",
			description: "Display workflow icons next to first-level navigation items.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
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
				id: "section3",
				title: "Default navigation item",
				link: "#",
			},
			{
				id: "section1",
				title: "Current or selected navigation item",
				link: "#",
				isSelected: true,
			},
			{
				id: "section2",
				title: "Disabled navigation item",
				link: "#",
				isDisabled: true,
			},
		],
	},
	parameters: {
		packageJson,
		metadata,
	},
};

/**
 * When navigation is simple, use the standard single level navigation.
 */
export const Default = SideNavGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = SideNavGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
 * Use a multi-level side navigation when there are multiple layers of hierarchical navigation.
 */
export const Multilevel = Template.bind({});
Multilevel.storyName = "Multi-level";
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
					title: "Section title A",
					link: "#",
				},
				{
					id: "section2.2",
					title: "Section title B: The long title that wraps to the next line",
					link: "#",
					levelThreeItems: [
						{
							id: "section3.1",
							title: "Section title X",
							link: "#",
						},
						{
							id: "section3.2",
							title: "Section title Y: this menu item is set as current / selected",
							link: "#",
							isSelected: true,
						},
						{
							id: "section3.3",
							title: "Section title Z",
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

/**
 * When navigation is simple but categorical, use the single level side navigation with headings.
 */
export const WithHeading = Template.bind({});
WithHeading.storyName = "With headings";
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
					title: "Section 2",
					link: "#",
				},
				{
					id: "section2.2",
					title: "Section 3",
					link: "#",
				},
			]
		},
		{
			id: "section3",
			heading: "Heading 2",
			link: "#",
			levelTwoItems: [
				{
					id: "section3.1",
					title: "Section 4",
					link: "#",
				},
			]
		}
	]
};
WithHeading.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Workflow icons can be displayed in first-level items of any type of side navigation (single level or multi-level).
 */
export const WithIcons = Template.bind({});
WithIcons.storyName = "With workflow icons";
WithIcons.tags = ["!dev"];
WithIcons.args = {
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
					title: "Section 2.1",
					link: "#",
				},
				{
					id: "section2.2",
					title: "Section 2.2",
					link: "#",
					levelThreeItems: [
						{
							id: "section2.2.1",
							title: "Section 2.2.1",
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
