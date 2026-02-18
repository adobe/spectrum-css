import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isHovered, isOpen, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { PickerGroup } from "./pickerbutton.test.js";
import { PickerIconOptions, Template } from "./template.js";

/**
 * The picker button component is used as a dropdown trigger within other components such as [combobox](?path=/docs/components-combobox--docs) and [date picker](?path=/docs/components-date-picker--docs).
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
		uiIconName: {
			...Icon.argTypes.uiIconName,
			if: { arg: "iconSet", eq: "ui" },
			category: "Content",
		},
		workflowIconName: {
			...Icon.argTypes.iconName,
			if: { arg: "iconSet", eq: "workflow" },
			category: "Content",
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
		workflowIconName: "Calendar",
		uiIconName: "ChevronDown",
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
		status: {
			type: "migrated",
		},
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

/**
 * Use the correct UI icon size that corresponds to the t-shirt size you require. For instance, if using the chevron icon seen below:
 *
	<table>
		<thead>
			<tr>
				<th>**T-Shirt Size**</th>
				<th>**Icon Size**</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>spectrum-PickerButton--sizeS</td>
				<td>spectrum-css-icon-Chevron75</td>
			</tr>
			<tr>
				<td>spectrum-PickerButton--sizeM</td>
				<td>spectrum-css-icon-Chevron100</td>
			</tr>
			<tr>
				<td>spectrum-PickerButton--sizeL</td>
				<td>spectrum-css-icon-Chevron200</td>
			</tr>
			<tr>
				<td>spectrum-PickerButton--sizeXL</td>
				<td>spectrum-css-icon-Chevron300</td>
			</tr>
		</tbody>
	</table>
 */
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
 * These examples use custom icons. The icon on the left is a custom UI icon, and the icon on the right is a custom workflow icon. The size of the icon can also be modified by using the `--spectrum-icon-size` custom property on the icon component.
 *
 * By default, the picker button supports a UI icon. If using a workflow icon, please apply the `.spectrum-PickerButton--workflowicon` class to the picker button to best support the use of a workflow icon.
 */
export const CustomIcon = PickerIconOptions.bind({});
CustomIcon.args = {
	uiIconName: "ArrowDown100",
	workflowIconName: "Calendar",
};
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
