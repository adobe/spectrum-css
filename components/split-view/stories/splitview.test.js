import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SplitViewGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Horizontal",
			orientation: "horizontal",
			panelLabels: ["Left", "Right"],
			panelStyles: ["width: 304px;", "flex: 1;"],
		},
		{
			testHeading: "Left collapsed",
			orientation: "horizontal",
			collapsePosition: "left",
			panelLabels: ["Left", "Right"],
			panelStyles: ["width: 0;", "flex: 1;"],
		},
		{
			testHeading: "Right collapsed",
			orientation: "horizontal",
			collapsePosition: "right",
			panelLabels: ["Left", "Right"],
			panelStyles: ["flex: 1;", "width: 0;"],
		},
		{
			testHeading: "Vertical",
			orientation: "vertical",
			panelLabels: ["Top", "Bottom"],
			panelStyles: ["height: 50px;", "flex: 1;"],
		},
		{
			testHeading: "Top collapsed",
			orientation: "horizontal",
			collapsePosition: "top",
			panelLabels: ["Top", "Bottom"],
			panelStyles: ["height: 0;", "flex: 1;"],
		},
		{
			testHeading: "Bottom collapsed",
			orientation: "horizontal",
			collapsePosition: "bottom",
			panelLabels: ["Top", "Bottom"],
			panelStyles: ["flex: 1;", "height: 0;"],
		},
	],
	stateData: [
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Collapsible",
			isCollapsible: true,
		},
		{
			testHeading: "Resizable",
			isResizable: true,
		},
	]
});
