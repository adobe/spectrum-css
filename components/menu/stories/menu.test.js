import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { MenuItem, Template } from "./template.js";

export const MenuWithVariants = Variants({
	Template,
	// This is validated at the Menu Item level
	withSizes: false,
	wrapperStyles: {
		"min-block-size": "auto",
	},
	testData: [
		{
			testHeading: "No selection",
			selectionMode: "none",
		},
		{
			testHeading: "With dividers",
			selectionMode: "none",
			hasDividers: true,
		},
		{
			testHeading: "Single selection",
			selectionMode: "single",
		},
		{
			testHeading: "Multi selection",
			selectionMode: "multiple",
		},
		{
			testHeading: "Collapsible",
			shouldTruncate: true,
			items: [
				{
					label: "Web Design",
					iconName: "DesktopAndMobile",
					iconSet: "workflow",
					isCollapsible: true,
					isOpen: true,
					items: [
						{
							label: "Web Large",
							itemValue: "1920 x 1080",
						},
						{
							label: "Web Medium",
							itemValue: "1366 x 768",
						},
						{
							label: "Web Small",
							itemValue: "1280 x 800",
						},
					],
				},
				{
					label: "Mobile",
					isCollapsible: true,
					isOpen: true,
					items: [
						{
							label: "Web Large",
							itemValue: "1920 x 1080",
						},
						{
							label: "Web Medium",
							itemValue: "1366 x 768",
						},
						{
							label: "Web Small",
							itemValue: "1280 x 800",
						},
					],
				},
				{
					label: "Tablet",
					iconName: "DeviceTablet",
					iconSet: "workflow",
					isCollapsible: true,
					items: [{ label: "Defaults to not visible within closed item" }],
				},
				{
					label: "Social Media",
					iconName: "ShareAndroid",
					iconSet: "workflow",
					isCollapsible: true,
					items: [{ label: "Defaults to not visible within closed item" }],
				},
				{
					label: "Watches",
					iconName: "Watch",
					iconSet: "workflow",
					isCollapsible: true,
					items: [{ label: "Defaults to not visible within closed item" }],
				},
			],
		},
	],
	stateData: [],
});

export const MenuItemGroup = Variants({
	Template: (args, context) => html`
		<ul
			class=${classMap({
				"spectrum-Menu": true,
				[`spectrum-Menu--size${args.size?.toUpperCase()}`]:
					typeof args.size !== "undefined",
				"is-selectable": args.selectionMode === "single",
				"is-selectableMultiple": args.selectionMode === "multiple",
				"is-open": args.isOpen,
			})}
		>
			${MenuItem(
				{
					...args,
					rootClass: "spectrum-Menu-item",
				},
				context,
			)}
		</ul>
	`,
	wrapperStyles: {
		"min-block-size": "auto",
	},
	testData: [
		{
			testHeading: "No selection",
			description: undefined,
			value: undefined,
		},
		{
			testHeading: "With description",
		},
		{
			testHeading: "Single selection: selected",
			description: undefined,
			value: undefined,
			selectionMode: "single",
			isSelected: true,
		},
		{
			testHeading: "Single selection: unselected",
			description: undefined,
			value: undefined,
			selectionMode: "single",
			label: "Share",
			iconName: "Share",
			iconSet: "workflow",
		},
		{
			testHeading: "Multi-selection: selected",
			description: undefined,
			value: undefined,
			selectionMode: "multiple",
			isSelected: true,
		},
		{
			testHeading: "Multi-selection: unselected",
			selectionMode: "multiple",
			label: "Share",
			iconName: "Share",
			iconSet: "workflow",
		},
		{
			testHeading: "Multi-selection: switches",
			selectionMode: "multiple",
			hasActions: true,
			value: undefined,
			description: undefined,
		},
		{
			testHeading: "Multi-selection: switches + labels",
			selectionMode: "multiple",
			hasActions: true,
			label: "Menu item",
		},
		{
			testHeading: "Truncation",
			description: "A longer description that will truncate",
			shouldTruncate: true,
			value: undefined,
			customStyles: {
				"inline-size": "150px",
			},
		},
	],
	stateData: [
		{
			testHeading: "Hover",
			isHovered: true,
		},
		{
			testHeading: "Active (Down)",
			isActive: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		// {
		// 	testHeading: "Selected",
		// 	isSelected: true,
		// },
		// {
		// 	testHeading: "Selected and disabled",
		// 	isSelected: true,
		// 	isDisabled: true,
		// },
		// {
		// 	testHeading: "Collapsible",
		// 	isCollapsible: true,
		// },
		// {
		// 	testHeading: "Drill-in",
		// 	isDrillIn: true,
		// },
		// {
		// 	testHeading: "Highlighted",
		// 	isHighlighted: true,
		// },
	],
});

export const MenuTraySubmenu = Variants({
	Template,
	wrapperStyles: {
		"min-block-size": "auto",
	},
	withSizes: false,
	testData: [{}],
});
