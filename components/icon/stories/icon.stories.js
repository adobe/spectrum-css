import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { IconGroup } from "./icon.test.js";
import { FullIconSetTemplate, Template, UIArrowsTemplate, UIDefaultTemplate, WorkflowDefaultTemplate } from "./template";
import { uiIconsWithDirections, workflowIconsCleaned, workflowSizes } from "./utilities.js";

/**
 * The Icon component contains all of the CSS used for displaying both workflow and UI icons.
 *
 * ## Icon sets
 * The SVG icons used in Spectrum CSS are a part of two different icon sets, "workflow" and "ui".
 * The two sets have different uses and methods of sizing.
 *
 * ## Repositories for the icon SVG files
 * The UI icon SVGs are within the Spectrum CSS repository, which has its own package published to NPM:
 * - GitHub: [adobe/spectrum-css - ui-icons folder](https://github.com/adobe/spectrum-css/tree/main/ui-icons)
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
			...size(workflowSizes),
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
			options: workflowIconsCleaned,
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
			options: uiIconsWithDirections,
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
		useRef: {
			name: "Use sprite sheet reference",
			description: "Storybook only: whether to display an SVG with a `<use>` reference to the icon within a loaded sprite sheet. This improves Storybook performance, especially for multiple icons. When set to `false`, the icon file's full markup is used.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		iconName: "Color",
		uiIconName: "Checkmark400",
		size: "xl",
		useRef: true,
	},
	parameters: {
		packageJson,
		metadata,
		design: {
			type: "figma",
			url: "https://www.figma.com/design/9qeVZSJ9t0kv6r7njzgHx7/S2-%2F-Styles-visualizer-(WIP)?node-id=295-24257&t=ZC7fyaQ0VQYQ5VYM-1",
		},
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

export const Default = IconGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

/**
 * All icons in the Workflow icon set.
 */
export const Workflow = FullIconSetTemplate.bind({});
Workflow.storyName = "Workflow icons";
Workflow.tags = ["!autodocs"];
Workflow.args = {
	setName: "workflow",
	useRef: true,
};
Workflow.argTypes = {
	setName: { table: { disable: true } },
	iconName: { table: { disable: true } },
};
Workflow.parameters = {
	chromatic: { disableSnapshot: true },
	// Layout other than "centered" needed for dynamic grid columns CSS to work correctly.
	layout: "padded",
};

/**
 * All icons in the UI icon set.
 */
export const UI = FullIconSetTemplate.bind({});
UI.storyName = "UI icons";
UI.tags = ["!autodocs"];
UI.args = {
	setName: "ui",
	useRef: true,
};
UI.argTypes = {
	setName: { table: { disable: true } },
	uiIconName: { table: { disable: true } },
};
UI.parameters = {
	chromatic: { disableSnapshot: true },
	// Layout other than "centered" needed for dynamic grid columns CSS to work correctly.
	layout: "padded",
};

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

// ********* DOCS ONLY ********* //

/**
 * The workflow icon set contains several hundred icons to choose from.
 * For a full list of all icons within this set, see **[workflow icons](/story/components-icon--workflow)**.
 * These icons can be seen in use within [button](/docs/components-button--docs), [action button](/docs/components-action-button--docs), [menu](/docs/components-menu--docs), and many other components.
 * Here is an example of just a few of these icons:
 */
export const WorkflowDefault = WorkflowDefaultTemplate.bind({});
WorkflowDefault.storyName = "Workflow icons";
WorkflowDefault.tags = ["!dev"];
WorkflowDefault.parameters = {
	chromatic: { disableSnapshot: true },
};
WorkflowDefault.storyName = "Workflow icons";

/**
 * An example of a Workflow icon displayed at all sizes, from small to extra-large.
 * Note that the extra-extra-large size is currently *not* part of the design specifications and may be deprecated in the near future.
 */
export const WorkflowSizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
WorkflowSizing.tags = ["!dev"];
WorkflowSizing.args = {
	setName: "workflow",
	iconName: "Asset",
};
WorkflowSizing.tags = ["!dev"];
WorkflowSizing.parameters = {
	chromatic: { disableSnapshot: true },
};
WorkflowSizing.storyName = "Workflow icons - sizing";

/**
 * UI icons are atomic pieces (e.g., arrows, crosses, etc.) that are used as part of some components.
 * The chevron within the [combobox component](/docs/components-combobox--docs) is one example.
 * For a full list of all icons within this set, see **[ui icons](/story/components-icon--ui)**.
 *
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
export const UIArrows = UIArrowsTemplate.bind({});
UIArrows.storyName = "UI icons - directional";
UIArrows.tags = ["!dev"];
UIArrows.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * In Storybook documentation, if a workflow icon name does not exist in the set, the
 * placeholder "Circle" icon will be shown. Missing ui icons will render
 * nothing. The following example purposefully uses an icon name that does
 * not exist to demonstrate this behavior.
 */
export const MissingWorkflowIcon = Default.bind({});
MissingWorkflowIcon.storyName = "Workflow icons - missing workflow icon placeholder";
MissingWorkflowIcon.tags = ["!dev"];
MissingWorkflowIcon.args = {
	setName: "workflow",
	iconName: "ThisIconNameDoesNotExist",
};
MissingWorkflowIcon.parameters = {
	chromatic: { disableSnapshot: true },
};
