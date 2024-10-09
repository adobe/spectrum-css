import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { AvatarGroup } from "./avatar.test.js";
import { Template } from "./template.js";

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
		size: size([50, 75, 100, 200, 300, 400, 500, 600, 700], false),
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
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Avatar",
		size: "700",
		isDisabled: false,
		hasLink: true,
		image: "example-ava@2x.png",
		altText: "Shantanu",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=19100-131",
		},
		packageJson: pkgJson,
	},
	tags: ["!autodocs"],
};

export const Default = AvatarGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const SizeOptions = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args
}, context);
SizeOptions.tags = ["!dev"];
SizeOptions.args = Default.args;
SizeOptions.parameters = {
	chromatic: { disableSnapshot: true },
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
export const WithForcedColors = AvatarGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
