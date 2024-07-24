import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { BreadcrumbGroup } from "./breadcrumb.test";

/**
 * Breadcrumbs show hierarchy and navigational context for a user's location within an app.
 */
export default {
	title: "Breadcrumbs",
	component: "Breadcrumbs",
	argTypes: {
		items: { table: { disable: true } },
		variant: {
			name: "Variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "multiline"],
			control: "inline-radio",
		},
		isDragged: {
			name: "Dragged",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean"
		},
	},
	args: {
		rootClass: "spectrum-Breadcrumbs",
		isDragged: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = BreadcrumbGroup.bind({});
Default.args = {
	items: [
		{
			label: "Nav root",
			isDragged: true,
		},
		{
			label: "Trend",
			isDisabled: true,
		},
		{
			label: "January 2019 Assets",
		},
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = BreadcrumbGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
