import { withUnderlayWrapper } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { AlertDialogGroup } from "./alertdialog.test.js";
import { Template } from "./template.js";

/**
 * Alert dialogs display important information that users need to acknowledge. They appear over the interface and block further interactions until an action is selected.
 */
export default {
	title: "Alert dialog",
	component: "AlertDialog",
	argTypes: {
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		content: {
			name: "Content",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isOpen,
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["confirmation", "information", "destructive", "warning", "error"],
			control: "select",
		},
		buttonsAreVertical: {
			name: "Vertical buttons",
			description: "Buttons can be displayed horizontally (default) or vertically.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		}
	},
	args: {
		rootClass: "spectrum-AlertDialog",
		isOpen: true,
		buttonsAreVertical: false,
		variant: "confirmation",
	},
	parameters: {
		layout: "fullscreen",
		actions: {
			handles: ["click .spectrum-AlertDialog button"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=21917-157",
		},
		docs: {
			story: {
				height: "300px",
			}
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		}
	},
	tags: ["migrated"],
	decorators: [
		withUnderlayWrapper,
	],
};

export const Default = AlertDialogGroup.bind({});
Default.args = {
	isOpen: true,
	heading: "Enable smart filters?",
	content: "Smart filters are nondestructive and will preserve your original images.",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = AlertDialogGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};

// ********* DOCS ONLY ********* //
/**
 * Information alert dialogs communicate important information that a user needs to acknowledge. Before using this kind of alert dialog, make sure it’s the appropriate communication channel for the message instead of a toast or a more lightweight messaging option.
 *
 * Note that an alert dialog can have a total of 3 buttons if the secondary outline button label is defined.
 */
export const Information = Template.bind({});
Information.tags = ["!dev"];
Information.args = {
	isOpen: true,
	variant: "information",
	heading: "Informative Dialog with a wrapping title text because the text is longer than the width of the alert dialog",
	content: "If you enjoy our app, would you mind taking a moment to rate it?",
};
Information.parameters = {
	docs: {
		story: {
			height: "400px",
		}
	},
	chromatic: { disableSnapshot: true },
};

/**
 * Warning alert dialogs communicate important information to users in relation to an issue that needs to be acknowledged, but does not block the user from moving forward.
 */
export const Warning = Template.bind({});
Warning.tags = ["!dev"];
Warning.args = {
	isOpen: true,
	variant: "warning",
	heading: "Unverified format",
	icon: "Warning",
	content: "This format has not been verified and may not be viewable for some users. Do you want to continue publishing?",
};
Warning.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Error alert dialogs communicate critical information about an issue that a user needs to acknowledge.
 */
export const Error = Template.bind({});
Error.tags = ["!dev"];
Error.args = {
	isOpen: true,
	variant: "error",
	heading: "Unable to share",
	icon: "Alert",
	content: "An error occured while sharing your project. Please verify the email address and try again.",
};
Error.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Destructive alert dialogs are for when a user needs to confirm an action that will impact their data or experience in a potentially negative way, such as deleting files or contacts.
 */
export const Destructive = Template.bind({});
Destructive.tags = ["!dev"];
Destructive.args = {
	isOpen: true,
	variant: "destructive",
	heading: "Delete 3 documents?",
	content: "Are you sure you want to delete the 3 selected documents?",
};
Destructive.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When the title and description text are too long for the available horizontal space, they wrap to form another line.
 */
export const Overflow = Template.bind({});
Overflow.tags = ["!dev"];
Overflow.args = {
	isOpen: true,
	variant: "confirmation",
	heading: "Alert dialogs allow for text overflow by wrapping when the description and dialog are too long",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices est eu lacus interdum, vitae volutpat tortor laoreet. Phasellus consectetur erat quis massa congue, vel placerat ipsum hendrerit. Aenean eleifend augue quam, quis blandit lacus pretium eget. Aliquam aliquam fermentum nunc, sed dictum metus varius in. Suspendisse in nisl libero. Nulla egestas massa eget lectus ullamcorper placerat. Vivamus cursus, nunc quis pharetra auctor, eros mi tempus elit, sit amet placerat ipsum velit ut dolor. Nam sit amet eleifend erat. Duis sollicitudin orci sit amet tellus tincidunt, vel lobortis risus pellentesque. Integer viverra urna elementum metus dignissim placerat. Nulla posuere eros ipsum."
};
Overflow.parameters = {
	chromatic: { disableSnapshot: true },
	docs: {
		story: {
			height: "525px",
		},
	},
};

/**
 * The dialog description may also scroll if the height of the dialog is constrained.
 */
export const Scroll = Template.bind({});
Scroll.tags = ["!dev"];
Scroll.args = {
	isOpen: true,
	variant: "confirmation",
	heading: "Enable Smart Filters?",
	content: "Smart filters are nondestructive and will preserve your original images. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices est eu lacus interdum, vitae volutpat tortor laoreet. Phasellus consectetur erat quis massa congue, vel placerat ipsum hendrerit. Aenean eleifend augue quam, quis blandit lacus pretium eget. Aliquam aliquam fermentum nunc, sed dictum metus varius in. Suspendisse in nisl libero. Nulla egestas massa eget lectus ullamcorper placerat. Vivamus cursus, nunc quis pharetra auctor, eros mi tempus elit, sit amet placerat ipsum velit ut dolor. Nam sit amet eleifend erat. Duis sollicitudin orci sit amet tellus tincidunt, vel lobortis risus pellentesque. Integer viverra urna elementum metus dignissim placerat. Nulla posuere eros ipsum. Pellentesque viverra urna justo, eu ultricies nisl fermentum et. Vivamus tristique porttitor dictum.",
	customStyles: {
		"max-block-size": "275px",
	},
};
Scroll.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When horizontal space is limited, button groups stack vertically. They should appear in ascending order based on importance, with the most critical action at the bottom.
 */
export const VerticalButtons = Template.bind({});
VerticalButtons.tags = ["!dev"];
VerticalButtons.args = {
	buttonsAreVertical: true,
	isOpen: true,
	heading: "Vertical button group",
	content: "This is what an alert dialog looks like with buttons arranged vertically.",
};
