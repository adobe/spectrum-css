import { html } from "lit";
import { Template } from "./template";
import { styleMap } from "lit/directives/style-map.js";

/**
 * Dividers bring clarity to a layout by grouping and dividing content that exists in close proximity. It can also be used to establish rhythm and hierarchy.
 */
export default {
	title: "Divider",
	component: "Divider",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
		vertical: {
			name: "Vertical",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		tag: { table: { disable: true } },
		reducedMotion: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Divider",
		size: "m",
		vertical: false,
	},
};

/**
 * The default size for divider is medium.
 */
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		story: {
			height: "auto",
		}
	},
};

/*
 * Stories for the MDX "Docs" only.
 * "storyName" refers to the display name/heading for a component
 */
const AllDividerSizes = (args) => html`
	<div>
		<div style="display: flex; flex-direction: column; padding: 16px;">
			<h3 style="
				${styleMap({
					"margin": 0,
					"color": args.staticColor === "white" ? "rgb(255, 255, 255)": "inherit",
				})}
			">
				Small
			</h3>
			${Template({
				...args,
				size: "s"
			})}
		</div>
		<div style="display: flex; flex-direction: column; padding: 16px;">
			<h3 style="
				${styleMap({
					"margin": 0,
					"color": args.staticColor === "white" ? "rgb(255, 255, 255)": "inherit",
				})}
			">
				Medium (default)
			</h3>
			${Template({
				...args,
				size: "m"
			})}
		</div>
		<div style="display: flex; flex-direction: column; padding: 16px;">
			<h3 style="
				${styleMap({
					"margin": 0,
					"color": args.staticColor === "white" ? "rgb(255, 255, 255)": "inherit",
				})}
			">
				Large
			</h3>
			${Template({
				...args,
				size: "l"
			})}
		</div>	
	</div>
`;

export const Sizes = AllDividerSizes.bind({});
Sizes.tags = ["docs-only"];
Sizes.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * When a vertical divider is used inside of a flex container, use `align-self: stretch; height: auto;` on the divider.
 */
export const VerticalGroup = AllDividerSizes.bind({});
VerticalGroup.storyName = "Vertical";
VerticalGroup.tags = ["docs-only"];
VerticalGroup.args = {
	vertical: true,
};
VerticalGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticWhiteGroup = AllDividerSizes.bind({});
StaticWhiteGroup.storyName = "Static white";
StaticWhiteGroup.tags = ["docs-only"];
StaticWhiteGroup.args = {
	staticColor: "white",
};
StaticWhiteGroup.parameters = {
	chromatic: { disableSnapshot: true },
};

export const StaticBlackGroup = AllDividerSizes.bind({});
StaticBlackGroup.storyName = "Static black";
StaticBlackGroup.tags = ["docs-only"];
StaticBlackGroup.args = {
	staticColor: "black",
};
StaticBlackGroup.parameters = {
	chromatic: { disableSnapshot: true },
};
