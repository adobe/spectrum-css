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
	...globals
}) => {
	if (!iconName) return;

	const { scale } = globals;
	let icon;

	// Check adobe workflow icons first
	if (setName === "workflow") {
		try {
			icon = require(`!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/${
				scale !== "medium" ? `24` : `18`
			}/${iconName}.svg`);
			if (icon) return icon.default ?? icon;
		} catch (e) {}
	}

	// Check the ui kit for icon set if not yet found
	try {
		icon = require(`!!raw-loader!@spectrum-css/icon/${
			scale ? scale : "medium"
		}/${iconName}.svg`);
		if (icon) return icon.default ?? icon;
	} catch (e) {}

	return;
};
