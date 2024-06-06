import iconOpts from "@adobe/spectrum-css-workflow-icons";
import { IconGroup } from "./template";

const workflowIcons = (iconOpts || []).map((icon) => icon.replace(/\.svg$/, ""));

/**
 * UI Icons have specific sizes represented by a number.
 * Each size has its own individual file and a CSS class with defined dimensions.
 */
const uiIconSizes = {
	"Arrow": ["75","100","200","300","400","500","600"],
	"Asterisk": ["75","100","200","300"],
	"Checkmark": ["50","75","100","200","300","400","500","600"],
	"Chevron": ["50","75","100","200","300","400","500"],
	"CornerTriangle": ["75","100","200","300"],
	"Cross": ["75","100","200","300","400","500","600"],
	"Dash": ["50","75","100","200","300","400","500","600"],
	"SingleGripper": [],
	"DoubleGripper": [],
	"TripleGripper": [],
};

/**
 * List of UI icon names, corresponding to files.
 */
const uiIcons = ["Arrow","Asterisk","Checkmark","Chevron","CornerTriangle","Cross","Dash","SingleGripper","DoubleGripper","TripleGripper"];

/**
 * List of all UI icon names for CSS. Chevron and Arrow have directional suffixes
 * for rotating the same base icon, e.g. Arrow becomes ArrowRight, ArrowDown, etc.
 */
const uiIconsWithDirections = [
	...uiIcons.filter((c) => !["Chevron", "Arrow"].includes(c)),
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown",
	"ChevronRight",
	"ChevronLeft",
	"ChevronUp",
	"ChevronDown",
];

/**
 * Create a list of all UI Icons with their sizing numbers.
 *
 * The list is a little long until Storybook adds a way to use conditional options
 * in controls, e.g. a "uiSize" control with options pulled from uiIconSizes:
 * @see https://github.com/storybookjs/storybook/discussions/24235
 */
const uiIconNameOptions = uiIconsWithDirections.map((iconName) => {
	const baseIconName = iconName.replace(/(Left|Right|Up|Down)$/, "");
	// Icons like Gripper that don't have sizes yet, represented by any empty array.
	if (uiIconSizes[baseIconName]?.length == 0) {
		return [baseIconName];
	}
	return uiIconSizes[baseIconName]?.map(sizeNum => iconName + sizeNum) ?? [];
}).flat();

/**
 * The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.
 */
export default {
	title: "Icon",
	component: "Icon",
	argTypes: {
		reducedMotion: { table: { disable: true } },
		size: {
			name: "Workflow icon Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl", "xxl"],
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		setName: {
			name: "Icon set",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			name: "Workflow icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: workflowIcons,
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		uiIconName: {
			name: "UI icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: [
				...uiIconNameOptions,
			],
			control: "select",
			if: { arg: "setName", eq: "ui" },
		},
		fill: {
			name: "Fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			control: "color",
		},
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		iconName: "ABC",
		size: "xl",
	},
};

export const Default = IconGroup.bind({});
Default.args = {};
