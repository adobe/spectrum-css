import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { WithDividers as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isHovered, isInvalid, isKeyboardFocused, isLoading, isOpen, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { PickerGroup } from "./picker.test.js";
import { ClosedAndOpenTemplate, DisabledTemplate, Template } from "./template.js";

/**
 * The picker component (sometimes known as a "dropdown" or "select") allows users to choose from a list of options in a limited space. The list of options can change based on the context.
 */
export default {
	title: "Picker",
	component: "Picker",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			description: "The label text that is displayed above or to the side of the Picker. This uses a separate Label component outside of the Picker markup.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: {
				type: "select",
				labels: {
					side: "side (inline start)",
				},
			},
			options: ["top", "side"],
		},
		withSwitch: {
			name: "Display Switch component",
			description: "Displays a Switch component after the Picker. This is used for testing the vertical alignment between the side label, Picker, and Switch.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
			if: { arg: "labelPosition", eq: "side" },
		},
		placeholder: {
			name: "Value or placeholder",
			description: "The text within the Picker that represents its current value or placeholder.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		contentIconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Icon",
			description: "Optional workflow icon that appears before the value/placeholder text within the picker.",
			if: false,
		},
		isQuiet: {
			...isQuiet,
			description: "An alternative way to display the Picker without a visible background.",
			name: "Quiet styling",
		},
		helpText: {
			name: "Help text",
			description: "Optional help text that can be informational or an error message. Displays a separate help text component after the picker. For error messages, the invalid control must also be set to true.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isOpen,
		isKeyboardFocused,
		isDisabled,
		isLoading: {
			...isLoading,
			description: "When in the loading state, a progress circle will display next to the disclosure icon.",
			if: { arg: "isDisabled", eq: false }
		},
		isInvalid: {
			...isInvalid,
			description: "When in the invalid state, some styles change on the Picker, and an invalid icon displays next to the disclosure icon.",
		},
		isHovered,
		isActive,
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Picker",
		size: "m",
		label: "Country",
		labelPosition: "top",
		placeholder: "Select a country",
		helpText: "",
		currentValue: "",
		showWorkflowIcon: false,
		isQuiet: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isInvalid: false,
		isOpen: false,
		isHovered: false,
		isActive: false,
		withSwitch: false,
		popoverContent: [
			(passthrough, context) => MenuStories({
				...passthrough,
				...MenuStories.args,
				items: [
					{ label: "United States of America" },
					{ label: "India" },
					{ label: "Australia" },
					{ label: "Brazil" },
				],
			}, context)
		],
	},
	parameters: {
		docs: {
			story: {
				height: "400px"
			}
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=739-1453",
		},
		packageJson,
		metadata,
		downState: {
			selectors: [".spectrum-Picker:not(:disabled, .is-disabled, .is-loading)"],
		},
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

export const Default = PickerGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];
Default.parameters = {
	docs: {
		story: {
			height: "300px",
		}
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = PickerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
WithForcedColors.args = {};

// ********* DOCS ONLY ********* //

/**
 * The following example shows the picker with both a [field label](/docs/components-field-label--docs) and placeholder text.
 * Pickers [should always have a label](https://spectrum.adobe.com/page/picker/#Usage-guidelines).
 * The placeholder text can be displayed when it does not have a selected value.
 */
export const Standard = ClosedAndOpenTemplate.bind({});
Standard.storyName = "Default";
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "300px",
		}
	},
};

/**
 * This example shows the picker with a selected value.
 * A picker can also have [help text](?path=/docs/components-help-text--docs) below the field to give extra context or instruction about what a user should select.
 */
export const SelectedValue = ClosedAndOpenTemplate.bind({});
SelectedValue.storyName = "Default with value and help text";
SelectedValue.args = {
	currentValue: "United States of America",
	helpText: "Additional field context",
	popoverContent: [
		(passthrough, context) => MenuStories({
			...passthrough,
			...MenuStories.args,
			selectionMode: "single",
			items: [
				{ label: "United States of America", isSelected: true },
				{ label: "India" },
				{ label: "Australia" },
				{ label: "Brazil" },
			],
		}, context)
	],
};
SelectedValue.tags = ["!dev"];
SelectedValue.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "300px",
		}
	},
};

/**
 * Pickers come in four different sizes: small, medium, large, and extra-large.
 *
 * At each of these sizes, the following chevron UI icon should be used:
 *
 * | Picker size    | UI icon size |
 * |----------------|--------------|
 * | small          | `Chevron75`  |
 * | medium         | `Chevron100` |
 * | large          | `Chevron200` |
 * | extra-large    | `Chevron300` |
 */
export const Sizing = (args, context) => Sizes({
	Template: Template,
	withHeading: false,
	withBorder: false,
	direction: "column",
	...args,
}, context);
Sizing.args = {
	popoverContent: [],
	onclick: () => {},
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = DisabledTemplate.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A picker can be marked as having an error to show that a value needs to be entered in order to move forward or that a value that was entered is invalid.
 * This example shows the optional error message within the help text area.
 */
export const Invalid = ClosedAndOpenTemplate.bind({});
Invalid.storyName = "Invalid";
Invalid.tags = ["!dev"];
Invalid.args = {
	isInvalid: true,
	helpText: "Select a country.",
};
Invalid.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "300px",
		}
	},
};

export const Loading = Template.bind({});
Loading.tags = ["!dev"];
Loading.args = {
	isLoading: true,
	placeholder: "Loading...",
	popoverContent: [],
	onclick: () => {},
};
Loading.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Quiet pickers have no visible background. This style works best when a clear layout (vertical stack, table, grid)
 * makes it easy to parse the buttons. Too many quiet components in a small space can be hard to read.
 */
export const Quiet = ClosedAndOpenTemplate.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true,
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "300px",
		}
	},
};

export const QuietDisabled = DisabledTemplate.bind({});
QuietDisabled.storyName = "Quiet and disabled";
QuietDisabled.tags = ["!dev"];
QuietDisabled.args = {
	isDisabled: true,
	isQuiet: true,
};
QuietDisabled.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietInvalid = ClosedAndOpenTemplate.bind({});
QuietInvalid.storyName = "Quiet and invalid";
QuietInvalid.tags = ["!dev"];
QuietInvalid.args = {
	isInvalid: true,
	isQuiet: true,
	helpText: "Select a country.",
};
QuietInvalid.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "300px",
		}
	},
};

/**
 * The value and placeholder within the picker will truncate with an ellipsis when it is longer than the available horizontal space within the picker.
 * The full text of the option can be shown in the menu.
 */
export const TextOverflow = Template.bind({});
TextOverflow.storyName = "Text overflow";
TextOverflow.tags = ["!dev"];
TextOverflow.args = {
	placeholder: "Some long text that will be cut off when displayed as the current value or placeholder",
	popoverContent: [],
	onclick: () => {},
};
TextOverflow.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A workflow icon can be displayed before the value or placeholder. The class `.spectrum-Picker-icon` should be used with the icon.
 */
export const WithWorkflowIcon = Template.bind({});
WithWorkflowIcon.storyName = "With workflow icon";
WithWorkflowIcon.tags = ["!dev"];
WithWorkflowIcon.args = {
	showWorkflowIcon: true,
	popoverContent: [],
	onclick: () => {},
};
WithWorkflowIcon.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Labels can be placed either on top or on the side. Top labels are the default and are recommended because
 * they work better with long copy, localization, and responsive layouts. Side labels are most useful when vertical
 * space is limited.
 *
 * When using the side label, the `spectrum-Picker--sideLabel` class is added to the Picker.
 */
export const WithSideLabel = Template.bind({});
WithSideLabel.storyName = "With side label";
WithSideLabel.tags = ["!dev"];
WithSideLabel.args = {
	labelPosition: "side",
	label: "Country",
	popoverContent: [],
	onclick: () => {},
};
WithSideLabel.parameters = {
	chromatic: { disableSnapshot: true },
};
