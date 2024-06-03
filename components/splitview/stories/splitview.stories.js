import { within } from "@storybook/testing-library";

import { Template } from "./template";

export default {
	title: "Split view",
	component: "SplitView",
	argTypes: {
		orientation: {
			name: "Orientation",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				disable: true,
			},
		},
		isResizable: {
			name: "Resizable",
			type: "boolean",
			table: {
				type: { summary: "boolean" },
				category: "Component",
				disable: true,
			},
			control: "boolean",
		},
		isCollapsible: {
			name: "Collapsible",
			type: "boolean",
			table: {
				type: { summary: "boolean" },
				category: "Component",
				disable: true,
			},
		},
		collapsePosition: {
			name: "Collapse position",
			type: "string",
			table: {
				type: { summary: "string" },
				category: "Component",
				disable: true,
			},
			control: "select",
			options: ["left", "right", "top", "bottom"],
			if: {
				arg: "isCollapsible",
				truthy: true,
			},
		},
		panelLabels: {
			name: "Panel labels",
			type: "string",
			table: { disable: true },
		},
		panelStyles: {
			name: "Panel labels",
			type: "string",
			table: { disable: true },
		},
		componentHeight: {
			name: "Component height",
			table: { disable: true },
		},
	},
	args: {
		rootClass: "spectrum-SplitView",
		isResizable: false,
		componentHeight: "200px",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Horizontal = Template.bind({});
Horizontal.args = {
	orientation: "horizontal",
	isResizable: false,
	isCollapsible: false,
	panelLabels: ["Left", "Right"],
	panelStyles: ["width: 304px;", "flex: 1;"],
};

export const HorizontallyResizable = Template.bind({});
HorizontallyResizable.args = {
	orientation: "horizontal",
	isResizable: true,
	isCollapsible: false,
	panelLabels: ["Left", "Right"],
	panelStyles: ["width: 304px;", "flex: 1;"],
};

export const HorizontallyFocused = Template.bind({});
HorizontallyFocused.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	await canvas.getByTestId("splitter").focus();

};
HorizontallyFocused.args = {
	orientation: "horizontal",
	isResizable: true,
	isCollapsible: false,
	panelLabels: ["Left", "Right"],
	panelStyles: ["width: 304px;", "flex: 1;"],
};

export const HorizontalCollapsedLeft = Template.bind({});
HorizontalCollapsedLeft.args = {
	orientation: "horizontal",
	isResizable: true,
	isCollapsible: true,
	collapsePosition: "left",
	panelLabels: ["Left", "Right"],
	panelStyles: ["width: 0;", "flex: 1;"],
};

export const HorizontalCollapsedRight = Template.bind({});
HorizontalCollapsedRight.args = {
	orientation: "horizontal",
	isResizable: true,
	isCollapsible: true,
	collapsePosition: "right",
	panelLabels: ["Left", "Right"],
	panelStyles: ["flex: 1;", "width: 0;"],
};

export const Vertical = Template.bind({});
Vertical.args = {
	orientation: "vertical",
	isResizable: false,
	isCollapsible: false,
	panelLabels: ["Top", "Bottom"],
	panelStyles: ["height: 50px;", "flex: 1;"],
};

export const VerticallyResizable = Template.bind({});
VerticallyResizable.args = {
	orientation: "vertical",
	isResizable: true,
	isCollapsible: false,
	panelLabels: ["Top", "Bottom"],
	panelStyles: ["height: 50px;", "flex: 1;"],
};

export const VerticalCollapsedTop = Template.bind({});
VerticalCollapsedTop.args = {
	orientation: "vertical",
	isResizable: true,
	isCollapsible: true,
	collapsePosition: "top",
	panelLabels: ["Top", "Bottom"],
	panelStyles: ["height: 0;", "flex: 1;"],
};

export const VerticalCollapsedBottom = Template.bind({});
VerticalCollapsedBottom.args = {
	orientation: "vertical",
	isResizable: true,
	isCollapsible: true,
	collapsePosition: "bottom",
	panelLabels: ["Top", "Bottom"],
	panelStyles: ["flex: 1;", "height: 0;"],
};
