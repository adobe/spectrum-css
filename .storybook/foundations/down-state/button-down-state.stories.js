import { Template } from "../../../components/button/stories/template";

export default {
	title: "Foundations/Down state",
	description:
		"Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",
	component: "Button",
	args: {
		rootClass: "spectrum-Button",
	},
	parameters: {
		actions: {
			handles: ['click .spectrum-Button'],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("button")
				? "migrated"
				: undefined,
		},
	},
	tags: ['foundation'],
};

export const ButtonDownState = Template.bind({});
ButtonDownState.args = {
	label: "Edit",
	variant: "accent",
	customStyles: {
		"--spectrum-downstate-width": "72px",
		"--spectrum-downstate-height": "32px"
	}
};
