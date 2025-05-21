import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isHovered, isInvalid, isKeyboardFocused, isLoading, isOpen, isReadOnly, size } from "@spectrum-css/preview/types";
import { within } from "@storybook/test";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ComboBoxGroup } from "./combobox.test.js";
import { HelpTextTemplate, Template, VariantGroup } from "./template.js";

/**
 * Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 *
 * ## Usage notes
 *
 * ### General notes
 *
 * - Combobox uses `.spectrum-InfieldButton` as a menu trigger.
 * - The following classes must be added:
 *   - `.spectrum-Combobox-textfield` is required on the Textfield outer element (`.spectrum-Textfield`)
 *   - `.spectrum-Combobox-input` is required on the `<input>` element inside of Textfields (`.spectrum-Textfield-input`)
 *   - `.spectrum-Combobox-button` is required on the InfieldButton (`.spectrum-InfieldButton`)
 *
 * ### Indicating validity and focus
 *
 * Validity and focus must be bubbled up to the parent so descendants siblings can be styled. Implementations should add the following classes to the `.spectrum-Combobox` parent class in the following situations:
 *
 * - `.is-focused` - when the input or button is focused with the mouse
 * - `.is-keyboardFocused` - when the input or button is focused with the keyboard
 * - `.is-invalid` - when the input has an explicit invalid state; should also show help text for error messaging
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
		isInvalid,
		isHovered,
		isFocused,
		isKeyboardFocused,
		isLoading,
		isDisabled,
		isReadOnly,
		isLabelRequired: {
			name: "Label required",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "showFieldLabel", truthy: true },
		},
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
			options: ["top", "side"],
			control: "select",
			if: { arg: "showFieldLabel", truthy: true },
		},
		autocomplete: {
			table: {
				disable: true,
			},
		},
		helpText: {
			name: "Help text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
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
		isInvalid: false,
		isHovered: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isReadOnly: false,
		isLabelRequired: false,
		showFieldLabel: false,
		autocomplete: false,
		testId: "combobox",
		fieldLabelText: "Select location",
		helpText: "",
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
		downState: {
			selectors: [".spectrum-InfieldButton:not(:disabled)"],
		},
		status: {
			type: "migrated",
		},
		tags: ["migrated"],
		packageJson,
		metadata,
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Wait for the popover to load
		await canvas.findAllByRole("presentation");
	},
};

export const Default = ComboBoxGroup.bind({});
Default.tags = ["!autodocs"];
Default.parameters = {
	chromatic: { delay: 1000 }
};

// ********* DOCS ONLY ********* //
export const DefaultGroup = VariantGroup.bind({});
DefaultGroup.storyName = "Default";
DefaultGroup.args = {
	isOpen: true,
};
DefaultGroup.tags = ["!dev"];
DefaultGroup.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "360px",
		},
	},
};

/**
 * Comboboxes can show help text to provide feedback to users. The description in the help text is flexible and encompasses a range of guidance. Sometimes this guidance is about what to input, and sometime it’s about how to input. This includes information such as:
 *
 * - An overall description of the input field
 * - Hints for what kind of information needs to be input
 * - Specific formatting examples or requirements
 */
export const HelpText = HelpTextTemplate.bind({});
HelpText.tags = ["!dev"];
HelpText.args = {
	showHelpText: true,
	helpText: "This is a help text. Select an option",
};


/**
 * Comboboxes have a read-only option for when content in the disabled state still needs to be shown. This allows for content to be copied, but not interacted with or changed. A combobox does not have a read-only option if no selection has been made. To enable this feature, add the `.is-readOnly` class to the combobox. To enable this feature, add the `.is-readOnly` class to the combobox. Then within the nested textfield component, add the `.is-readOnly class and readonly attribute to the `<input>` element.
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

export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
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
