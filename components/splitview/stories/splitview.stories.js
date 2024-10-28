import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { SplitViewGroup } from "./splitview.test.js";
import { Template } from "./template.js";

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
		isFocused,
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
		isFocused: false,
		componentHeight: "200px",
		orientation: "horizontal",
		isCollapsible: false,
		panelLabels: ["Left", "Right"],
		panelStyles: ["width: 304px;", "flex: 1;"],
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Horizontal = SplitViewGroup.bind({});
Horizontal.args = {};

// ********* DOCS ONLY ********* //
export const HorizontallyResizable = Template.bind({});
HorizontallyResizable.args = {
	orientation: "horizontal",
	isResizable: true,
	isCollapsible: false,
	panelLabels: ["Left", "Right"],
	panelStyles: ["width: 304px;", "flex: 1;"],
};
HorizontallyResizable.tags = ["!dev"];
HorizontallyResizable.parameters = {
	chromatic: { disableSnapshot: true },
};

export const HorizontallyFocused = Template.bind({});
HorizontallyFocused.args = {
	orientation: "horizontal",
	isFocused: true,
	isResizable: true,
	isCollapsible: false,
	panelLabels: ["Left", "Right"],
	panelStyles: ["width: 304px;", "flex: 1;"],
};
HorizontallyFocused.tags = ["!dev"];
HorizontallyFocused.parameters = {
	chromatic: { disableSnapshot: true },
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
HorizontalCollapsedLeft.tags = ["!dev"];
HorizontalCollapsedLeft.parameters = {
	chromatic: { disableSnapshot: true },
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
HorizontalCollapsedRight.tags = ["!dev"];
HorizontalCollapsedRight.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Vertical = Template.bind({});
Vertical.args = {
	orientation: "vertical",
	isResizable: false,
	isCollapsible: false,
	panelLabels: ["Top", "Bottom"],
	panelStyles: ["height: 50px;", "flex: 1;"],
};
Vertical.tags = ["!dev"];
Vertical.parameters = {
	chromatic: { disableSnapshot: true },
};

export const VerticallyResizable = Template.bind({});
VerticallyResizable.args = {
	orientation: "vertical",
	isResizable: true,
	isCollapsible: false,
	panelLabels: ["Top", "Bottom"],
	panelStyles: ["height: 50px;", "flex: 1;"],
};
VerticallyResizable.tags = ["!dev"];
VerticallyResizable.parameters = {
	chromatic: { disableSnapshot: true },
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
VerticalCollapsedTop.tags = ["!dev"];
VerticalCollapsedTop.parameters = {
	chromatic: { disableSnapshot: true },
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
VerticalCollapsedBottom.tags = ["!dev"];
VerticalCollapsedBottom.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = SplitViewGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
