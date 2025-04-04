import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import { Sizes } from "@spectrum-css/preview/decorators";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { IconGroup } from "./icon.test.js";
import { IconListTemplate, Template, UIDefaultTemplate } from "./template.js";
import { uiIconSizes, uiIconsWithDirections, workflowIcons } from "./utilities.js";

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
 * The Icon component contains all of the CSS used for displaying both workflow and UI icons.
 *
 * ## Icon sets
 * The SVG icons used in Spectrum CSS are a part of two different icon sets, "workflow" and "ui".
 * The two sets have different uses and methods of sizing.
 *
 * ## Repositories for the icon SVG files
 * The UI icon SVGs are within the Spectrum CSS repository, which has its own package published to NPM:
 * - GitHub: [adobe/spectrum-css — ui-icons folder](https://github.com/adobe/spectrum-css/tree/main/ui-icons)
 * - NPM: [@spectrum-css/ui-icons](https://www.npmjs.com/package/@spectrum-css/ui-icons).
 *
 * The workflow icon SVGs are within a separate repository, which is also published to NPM:
 * - GitHub: [adobe/spectrum-css-workflow-icons](https://github.com/adobe/spectrum-css-workflow-icons)
 * - NPM: [@adobe/spectrum-css-workflow-icons](https://www.npmjs.com/package/@adobe/spectrum-css-workflow-icons).
 */
export default {
	title: "Icon",
	component: "Icon",
	argTypes: {
		size: {
			...size(["xs", "s", "m", "l", "xl", "xxl"]),
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
		useRef: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		iconName: "ABC",
		size: "xl",
		useRef: true,
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Default = IconGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* VRT ONLY ********* //
export const WithForcedColors = IconGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: {
			...disableDefaultModes,
			"Mobile": { disable: true },
		},
	},
};

/* Stories for the MDX "Docs" only. */

/**
 * The workflow icon set contains several hundred icons to choose from.
 * These icons can be seen in use within [button](/docs/components-button--docs), [action button](/docs/components-action-button--docs), [menu](/docs/components-menu--docs), and many other components.
 * Here is an example of just a few of these icons:
 */
export const WorkflowDefault = (args, context) => IconListTemplate(
	{
		...args,
		setName: "workflow",
		size: "xl",
	},
	[
		"Alert",
		"Asset",
		"Actions",
		"ArrowDown",
		"Camera",
		"Copy",
		"DeviceDesktop",
		"Download",
		"FilterAdd",
		"Form",
		"Light",
		"Polygon",
	],
	context
);
WorkflowDefault.tags = ["!dev"];
WorkflowDefault.parameters = {
	chromatic: { disableSnapshot: true },
};
WorkflowDefault.storyName = "Workflow icons";

/**
 * Below is an example of a workflow icon displayed at all its available sizes, from extra-small to extra-extra-large.
 * Workflow icons use "t-shirt" sizes (e.g. small, medium), that are the same width and height for each icon in the set.
 */
export const WorkflowSizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
WorkflowSizing.args = {
	setName: "workflow",
	iconName: "Asset",
};
WorkflowSizing.tags = ["!dev"];
WorkflowSizing.parameters = {
	chromatic: { disableSnapshot: true },
};
WorkflowSizing.storyName = "Workflow sizing";

/**
 * UI icons are atomic pieces (e.g., arrows, crosses, etc.) that are used as part of some components.
 * The chevron within the [combobox component](/docs/components-combobox--docs) is one example.
 * Unlike workflow icons, each UI icon comes in specific numbered sizes. They do not use "t-shirt" sizing. They have unique classes applied that set their size in CSS. For example:
 * - `.spectrum-UIIcon-Asterisk300`
 * - `.spectrum-UIIcon-ChevronDown75`
 *
 * Different UI icons have different number sizes available. The smallest size for some may be `50`, while others may start at `100`.
 * Some have up to a `600` size. Some may only have two different sizes, while others have six.
 * Because of this, they can't be mapped one-to-one to t-shirt sizes.
 * The correct UI icon sizes that correspond to each of a component's size options is typically defined in the design spec.
 * An example of some UI icons in their available sizes is below.
 */
export const UIDefault = UIDefaultTemplate.bind({});
UIDefault.storyName = "UI icons";
UIDefault.tags = ["!dev"];
UIDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Directional UI icons such as chevron and arrow have classes for each direction. They rotate the same basic icon with a CSS `transform: rotate`.
 * For example, the `Arrow100.svg` icon is used with:
 * - `.spectrum-UIIcon-ArrowRight100`
 * - `.spectrum-UIIcon-ArrowLeft100`
 * - `.spectrum-UIIcon-ArrowDown100`
 * - `.spectrum-UIIcon-ArrowUp100`
 */
export const UIArrows = (args, context) => IconListTemplate(
	{
		...args,
		setName: "ui",
	},
	[
		"ArrowRight100",
		"ArrowLeft100",
		"ArrowDown100",
		"ArrowUp100",
	],
	context
);
UIArrows.storyName = "UI icons - directional";
UIArrows.tags = ["!dev"];
UIArrows.parameters = {
	chromatic: { disableSnapshot: true },
};
