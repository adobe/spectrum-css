import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { AvatarGroup, AvatarSizes, Template } from "./template";

/**
 * An image representing a user. Note that a div wrapper is required for avatar:
 * ```
 * <div class="spectrum-Avatar spectrum-Avatar--size50">
 *   <img class="spectrum-Avatar-image" src="img/example-ava.jpg" alt="Avatar">
 * </div>
 * ```
 */
export default {
	title: "Avatar",
	component: "Avatar",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["50", "75", "100", "200", "300", "400", "500", "600", "700"],
			control: "select",
		},
		image: {
			name: "Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
		altText: {
			name: "Alt text",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "text",
		},
		hasLink: {
			name: "Has Link",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", truthy: false },
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Avatar",
		size: "700",
		isDisabled: false,
		hasLink: true,
	},
	parameters: {
		componentVersion: version,
	},
	tags: ["!autodocs"],
};

export const Default = AvatarGroup.bind({});
Default.args = {
	image: "example-ava@2x.png",
	altText: "Avatar",
};

// ********* DOCS ONLY ********* //
export const SizeOptions = AvatarSizes.bind({});
SizeOptions.tags = ["!dev"];
SizeOptions.parameters = {
	chromatic: { disableSnapshot: true },
};
SizeOptions.args = {
	image: "example-ava@2x.png",
	altText: "Avatar",
};

export const NoLink = Template.bind({});
NoLink.tags = ["!dev"];
NoLink.args = {
	hasLink: false,
	image: "example-ava@2x.png",
	altText: "Avatar",
};
NoLink.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	hasLink: false,
	isDisabled: true,
	image: "example-ava@2x.png",
	altText: "Avatar",
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
