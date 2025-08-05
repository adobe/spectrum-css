import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isHovered, isOpen, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { PickerGroup } from "./pickerbutton.test.js";
import { CustomIconTemplate, Template } from "./template.js";

/**
 * The picker button component is used as a dropdown trigger within other components such as [combobox](?path=/docs/components-combobox--docs).
 */
export default {
	title: "Picker button",
	component: "PickerButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		iconSet: {
			name: "Icon",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			...Icon.argTypes.iconName,
			if: { arg: "iconSet", eq: "workflow" },
		},
		isOpen: {
			...isOpen,
			if: { arg: "isDisabled", truthy: false }
		},
		isActive,
		isHovered,
		isQuiet,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-PickerButton",
		size: "m",
		isActive: false,
		isHovered: false,
		isOpen: false,
		isQuiet: false,
		isDisabled: false,
		iconSet: "ui",
		iconName: "ChevronDown",
	},
	parameters: {
		packageJson,
		metadata,
		actions: {
			handles: ["click .spectrum-PickerButton"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2---Desktop?node-id=126176-34080&m=dev"
		},
		downState: {
			selectors: [".spectrum-PickerButton:not(:disabled)"],
		},
	},
	status: {
		type: "migrated",
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

export const Default = PickerGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = PickerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Open = Template.bind({});
Open.tags = ["!dev"];
Open.args = {
	isOpen: true,
};
Open.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * This example uses a custom icon instead of the chevron UI icon.
 */
export const CustomIcon = CustomIconTemplate.bind({});
CustomIcon.storyName = "With custom icon";
CustomIcon.tags = ["!dev"];
CustomIcon.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};
