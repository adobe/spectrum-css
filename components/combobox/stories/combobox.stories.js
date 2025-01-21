import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isOpen, isQuiet, isReadOnly, size } from "@spectrum-css/preview/types";
import { within } from "@storybook/test";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ComboBoxGroup } from "./combobox.test.js";
import { Template, VariantGroup } from "./template.js";

/**
 * Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 *
 * ## Usage notes
 *
 * ### General notes
 *
 * - Combobox uses `.spectrum-PickerButton` instead of a `.spectrum-Picker`
 * - The following classes must be added:
 *   - `.spectrum-Combobox-textfield` is required on the Textfield outer element (`.spectrum-Textfield`)
 *   - `.spectrum-Combobox-input` is required on the `<input>` element inside of Textfields (`.spectrum-Textfield-input`)
 *   - `.spectrum-Combobox-button` is required on the FieldButton (`.spectrum-ActionButton spectrum-ActionButton--sizeM`)
 *
 * ### Indicating validity and focus
 *
 * Validity and focus must be bubbled up to the parent so descendants siblings can be styled. Implementations should add the following classes to the `.spectrum-Combobox` parent class in the following situations:
 *
 * - `.is-focused` - when the input or button is focused with the mouse
 * - `.is-keyboardFocused` - when the input or button is focused with the keyboard
 * - `.is-valid` - when the input has an explicit valid state
 * - `.is-invalid` - when the input has an explicit invalid state
 * - `.is-disabled` - when the control is disabled; should also add to the `.spectrum-Combobox-textfield` and include a `[disabled]` attribute to the `.spectrum-Combobox-button`
 * - `.is-loading` - when the progress circle is being shown
 *
 * ### Don't use placeholder text
 * Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible. Once a value is entered, placeholder text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text.
 *
 * Instead of placeholder text, use the [help text](/docs/components-help-text--docs) description to convey requirements or to show any formatting examples that would help user comprehension. If there's placeholder text and help text at the same time, it becomes redundant and distracting, especially if they're communicating the same thing.
 */
export default {
	title: "Combobox",
	component: "Combobox",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isOpen: {
			...isOpen,
			if: { arg: "isReadOnly", truthy: false },
		},
		isQuiet,
		isInvalid,
		isFocused,
		isKeyboardFocused,
		isLoading,
		isDisabled,
		isReadOnly,
		showFieldLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		fieldLabelText: {
			name: "Field label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "showFieldLabel", truthy: true },
		},
		fieldLabelPosition: {
			name: "Field label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "left"],
			control: "select",
			if: { arg: "showFieldLabel", truthy: true },
		},
		value: {
			name: "Value",
			description: "The value shows the option that a user has selected.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Combobox",
		size: "m",
		isOpen: false,
		isQuiet: false,
		isInvalid: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isReadOnly: false,
		showFieldLabel: false,
		testId: "combobox",
		content: [
			(passthroughs, context) => Menu({
				role: "listbox",
				subrole: "option",
				selectionMode: "single",
				hasDividers: true,
				items: [
					{
						label: "Ballard",
						isSelected: true,
						isChecked: true,
					},
					{
						label: "Fremont",
					},
					{
						label: "Greenwood",
					},
					{
						type: "divider",
					},
					{
						label: "United States of America",
						isDisabled: true,
					},
				],
				...passthroughs,
			}, context),
		],
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=727-2550",
		},
		packageJson,
		metadata,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for the popover to load
		await canvas.findAllByRole("presentation");
	},
};

export const Default = ComboBoxGroup.bind({});
Default.tags = ["!autodocs"];
Default.args = {
	isOpen: true,
	fieldLabelText: "Select location",
	value: "Ballard",
};

// ********* DOCS ONLY ********* //
export const DefaultGroup = VariantGroup.bind({});
DefaultGroup.storyName = "Default";
DefaultGroup.args = Default.args;
DefaultGroup.tags = ["!dev"];
DefaultGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietGroup = VariantGroup.bind({});
QuietGroup.storyName = "Quiet";
QuietGroup.args = {
	...Default.args,
	isQuiet: true,
};
QuietGroup.tags = ["!dev"];
QuietGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Comboboxes have a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed. A combobox does not have a read-only option if no selection has been made. To enable this feature, add the `.isReadOnly` class to the combobox. To enable this feature, add the .isReadOnly class to the combobox. Then within the nested textfield component, add the .isReadOnly class and readonly attribute to the `<input>` element.
*/
export const ReadOnly = Template.bind({});
ReadOnly.tags = ["!dev"];
ReadOnly.args = {
	isReadOnly: true,
	value: "Ballard"
};
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true }
};

ReadOnly.storyName = "Read-only";

// ********* VRT ONLY ********* //
export const WithForcedColors = ComboBoxGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
