import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { AvatarGroup } from "./avatar.test.js";
import { Template } from "./template.js";

/**
 * An image representing a user.
 */
export default {
	title: "Avatar",
	component: "Avatar",
	argTypes: {
		size: size([50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], false),
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
		packageJson,
		metadata,
	},
	tags: ["migrated"],
};

/**
 * Note that a `div` wrapper is required for avatar:
 * ```
 * <div class="spectrum-Avatar spectrum-Avatar--size50">
 *   <img class="spectrum-Avatar-image" src="img/example-ava.jpg" alt="Avatar">
 * </div>
 * ```
 */
export const Default = AvatarGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/** Avatar sizes scale exponentially, based on the Spectrum type scale. These range from size-50 to size-700, with the default size for an avatar being `100`. An avatar can also be customized to fit appropriately for your context.
 *
 * Avatar is available in many sizes using the required `.spectrum-Avatar--size<number>` class. The available size classes are:

- `spectrum-Avatar--size50`
- `spectrum-Avatar--size75`
- `spectrum-Avatar--size100`
- `spectrum-Avatar--size200`
- `spectrum-Avatar--size300`
- `spectrum-Avatar--size400`
- `spectrum-Avatar--size500`
- `spectrum-Avatar--size600`
- `spectrum-Avatar--size700`
*/
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args
}, context);
Sizing.tags = ["!dev"];
Sizing.args = Default.args;
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * An avatar image is wrapped in a link that uses the `.spectrum-Avatar-link` class by default, however, an avatar may also be used without a link.
 */
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
NoLink.storyName = "No link";

/**
 * When disabled, the avatar should only be used without a link.*/
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
