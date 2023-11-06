import path from "path";

// Imports an array of all icon names in the workflow set
import iconOpts from "@adobe/spectrum-css-workflow-icons";

export const workflowIcons = (iconOpts || []).map((icon) =>
	path.basename(icon, ".svg")
);
export const uiIcons = [
	"Arrow",
	"Asterisk",
	"Checkmark",
	"Chevron",
	"CornerTriangle",
	"Cross",
	"Dash",
	"SingleGripper",
	"DoubleGripper",
	"TripleGripper",
];

export const fetchIconSVG = ({
	iconName,
	setName = "workflow",
	scale,
}) => {
	if (!iconName) return;

	let icon;

	// Check adobe workflow icons first
	if (setName === "workflow") {
		try {
			icon = require(`@adobe/spectrum-css-workflow-icons/dist/${
				scale !== "medium" ? `24` : `18`
			}/${iconName}.svg?raw`);
			if (icon) return (icon.default ?? icon).trim();
		} catch (e) {}
	}

	// Check the ui kit for icon set if not yet found
	try {
		icon = require(`@spectrum-css/ui-icons/dist/${
			scale ? scale : "medium"
		}/${iconName}.svg?raw`);
		if (icon) return (icon.default ?? icon).trim();
	} catch (e) {}

	return;
};
