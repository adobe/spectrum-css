import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

const sizeOptions = ["50", "75", "100", "200", "300", "400", "500", "600", "700"];

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
		reducedMotion: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: sizeOptions,
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
		image: "example-ava@2x.png",
		altText: "Avatar",
		isDisabled: false,
		hasLink: true,
	},
	parameters: {
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Stories for the MDX "Docs" only.
 */
const AvatarSizes = (args) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"gap": "16px",
		})}
	>
		${sizeOptions.map((size) => (html`
			<div
				style=${styleMap({
					"display": "flex",
					"gap": "16px",
					"flex-direction": "column",
					"align-items": "center",
				})}
			>
				${Template({...args, size})}
				${Typography({
					semantics: "detail",
					size: "s",
					content: [size],
				})}
			</div>
		`))}
	</div>
`;

export const SizeOptions = AvatarSizes.bind({});
SizeOptions.tags = ["docs-only"];
SizeOptions.parameters = {
	chromatic: { disableSnapshot: true },
};

export const NoLink = Template.bind({});
NoLink.tags = ["docs-only"];
NoLink.args = {
	hasLink: false,
};
NoLink.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["docs-only"];
Disabled.args = {
	hasLink: false,
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
