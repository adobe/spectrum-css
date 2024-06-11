import { Template } from "./template";

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
				category: "Component",
			},
			control: { type: "text" },
		},
		content: {
			name: "Content",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		variant: { table: { disable: true } },
		buttons: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-AlertDialog",
		isOpen: true,
		variant: "confirmation",
		heading: "Enable Smart Filters?",
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later"
		}, {
			treatment: "fill",
			label: "Enable",
			variant: "accent"
		}],
		content: "Smart filters are nondestructive and will preserve your original images.",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-AlertDialog button"],
		},
		docs: {
			story: {
				height: "300px"
			}
		}
	},
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Information alert dialogs communicate important information that a user needs to acknowledge. Before using this kind of alert dialog, make sure it’s the appropriate communication channel for the message instead of a toast or a more lightweight messaging option.
 *
 * Note that an alert dialog can have a total of 3 buttons if the secondary outline button label is defined.
 */
export const Information = Template.bind({});
Information.args = {
	variant: "information",
	heading: "Informative Dialog with a wrapping title text because the text is longer than the width of the alert dialog",
	buttons: [{
		variant: "secondary",
		treatment: "outline",
		label: "No, thanks"
	},{
		variant: "secondary",
		treatment: "outline",
		label: "Remind me later"
	}, {
		variant: "primary",
		treatment: "outline",
		label: "Rate now",
	}],
	content: "If you enjoy our app, would you mind taking a moment to rate it?",
};

/**
 * Warning alert dialogs communicate important information to users in relation to an issue that needs to be acknowledged, but does not block the user from moving forward.
 */
export const Warning = Template.bind({});
Warning.args = {
	variant: "warning",
	heading: "Unverified format",
	icon: true,
	buttons: [{
		variant: "secondary",
		treatment: "outline",
		label: "Cancel"
	}, {
		treatment: "outline",
		label: "Continue",
		variant: "primary"
	}],
	content: "This format has not been verified and may not be viewable for some users. Do you want to continue publishing?",
};

/**
 * Error alert dialogs communicate critical information about an issue that a user needs to acknowledge.
 */
export const Error = Template.bind({});
Error.args = {
	variant: "error",
	heading: "Unable to share",
	icon: true,
	buttons: [{
		variant: "secondary",
		treatment: "outline",
		label: "Cancel"
	}, {
		treatment: "outline",
		label: "Continue",
		variant: "primary"
	}],
	content: "An error occured while sharing your project. Please verify the email address and try again.",

};

/**
 * Destructive alert dialogs are for when a user needs to confirm an action that will impact their data or experience in a potentially negative way, such as deleting files or contacts.
 */
export const Destructive = Template.bind({});
Destructive.args = {
	variant: "destructive",
	heading: "Delete 3 documents?",
	buttons: [{
		variant: "secondary",
		treatment: "outline",
		label: "Cancel"
	}, {
		treatment: "fill",
		label: "Delete",
		variant: "negative"
	}],
	content: "Are you sure you want to delete the 3 selected documents?",
};

export const Scroll = Template.bind({});
Scroll.tags = ["docs-only"];
Scroll.args = {
	variant: "confirmation",
	heading: "Enable Smart Filters?",
	buttons: [{
		variant: "secondary",
		treatment: "outline",
		label: "Remind me later"
	}, {
		treatment: "fill",
		label: "Enable",
		variant: "accent"
	}],
	content: "Smart filters are nondestructive and will preserve your original images. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices est eu lacus interdum, vitae volutpat tortor laoreet. Phasellus consectetur erat quis massa congue, vel placerat ipsum hendrerit. Aenean eleifend augue quam, quis blandit lacus pretium eget. Aliquam aliquam fermentum nunc, sed dictum metus varius in. Suspendisse in nisl libero. Nulla egestas massa eget lectus ullamcorper placerat. Vivamus cursus, nunc quis pharetra auctor, eros mi tempus elit, sit amet placerat ipsum velit ut dolor. Nam sit amet eleifend erat. Duis sollicitudin orci sit amet tellus tincidunt, vel lobortis risus pellentesque. Integer viverra urna elementum metus dignissim placerat. Nulla posuere eros ipsum. Pellentesque viverra urna justo, eu ultricies nisl fermentum et. Vivamus tristique porttitor dictum.",
	customStyles: {
		"max-block-size": "275px",
	}
};
Scroll.parameters = {
	chromatic: { disableSnapshot: true },
};
