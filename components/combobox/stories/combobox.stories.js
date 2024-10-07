import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isInvalid, isKeyboardFocused, isLoading, isOpen, isQuiet, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ComboBoxGroup } from "./combobox.test.js";
import { Template } from "./template.js";

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
		isOpen,
		isQuiet,
		isInvalid,
		isFocused,
		isKeyboardFocused,
		isLoading,
		isDisabled,
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
		showFieldLabel: false,
		testId: "combobox",
	},
	parameters: {
		packageJson: pkgJson,
	},
};

export const Default = ComboBoxGroup.bind({});
Default.tags = ["!autodocs"];
Default.args = {
	isOpen: true,
	fieldLabelText: "Select location",
	value: "Ballard",
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
};

// ********* DOCS ONLY ********* //
export const DefaultOpen = Template.bind({});
DefaultOpen.storyName = "Default - open";
DefaultOpen.args = Default.args;
DefaultOpen.tags = ["!dev"];
DefaultOpen.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithLabel = Template.bind({});
WithLabel.storyName = "Default - open with label";
WithLabel.tags = ["!dev"];
WithLabel.args = {
	showFieldLabel: true,
	fieldLabelText: "Country",
	isOpen: true,
};
WithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Closed = Template.bind({});
Closed.storyName = "Default - closed";
Closed.tags = ["!dev"];
Closed.args = {
	isOpen: false,
};
Closed.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Invalid = Template.bind({});
Invalid.storyName = "Default - invalid";
Invalid.tags = ["!dev"];
Invalid.args = {
	isInvalid: true,
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Loading = Template.bind({});
Loading.storyName = "Default - loading";
Loading.tags = ["!dev"];
Loading.args = {
	isLoading: true,
};
Loading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.storyName = "Default - disabled";
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// Quiet
export const Quiet = Template.bind({});
Quiet.storyName = "Quiet - open";
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietWithLabel = Template.bind({});
QuietWithLabel.storyName = "Quiet - with label";
QuietWithLabel.tags = ["!dev"];
QuietWithLabel.args = {
	showFieldLabel: true,
	fieldLabelText: "Country",
	isQuiet: true,
};
QuietWithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietClosed = Template.bind({});
QuietClosed.storyName = "Quiet - closed";
QuietClosed.tags = ["!dev"];
QuietClosed.args = {
	isQuiet: true,
	isOpen: false,
};
QuietClosed.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietInvalid = Template.bind({});
QuietInvalid.storyName = "Quiet - invalid";
QuietInvalid.tags = ["!dev"];
QuietInvalid.args = {
	isQuiet: true,
	isInvalid: true,
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietLoading = Template.bind({});
QuietLoading.storyName = "Quiet - loading";
QuietLoading.tags = ["!dev"];
QuietLoading.args = {
	isQuiet: true,
	isLoading: true,
};
QuietLoading.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietDisabled = Template.bind({});
QuietDisabled.storyName = "Quiet - disabled";
QuietDisabled.tags = ["!dev"];
QuietDisabled.args = {
	isQuiet: true,
	isDisabled: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ComboBoxGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
