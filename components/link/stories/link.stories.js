import { Template } from "./template";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

/**
 * A link allows users to navigate to a different location. They can be presented in-line inside a paragraph or as standalone text.
 */
export default {
	title: "Link",
	component: "Link",
	argTypes: {
		url: {
			name: "URL",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		text: {
			name: "Text",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["primary", "secondary"],
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
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Link",
		url: "https://www.adobe.com",
		text: "Link using spectrum-Link",
		isQuiet: false,
		variant: "primary",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
	},
};

export const Default = (args, context) => html`
	<div style=${styleMap({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: "1rem",
		"--mod-detail-margin-end": ".3rem",
	})}>
		${Template({
			...args
		})}

		${
			window.isChromatic() ?
				html`
					<div style=${styleMap({
						display: "flex",
						alignItems: "flex-start",
						flexDirection: "column",
						gap: "1rem",
						"--mod-detail-margin-end": ".3rem",
					})}>
					${Template({
							...args,
							variant: "primary",
						}, context)}
						${Template({
							...args,
							variant: "secondary",
						}, context)}
						<!-- ${Template({
							...args,
							staticColor: "white",
							}, context)}
						${Template({
							...args,
							staticColor: "black",
							}, context)} -->
						${Template({
							...args,
							isQuiet: true,
						}, context)}
						${Template({
							...args,
							isQuiet: true,
							variant: "secondary",
						}, context)}
						<!-- ${Template({
							...args,
							staticColor: "white",
							isQuiet: true,
						}, context)}
						${Template({
							...args,
							staticColor: "black",
							isQuiet: true,
						}, context)} -->
					</div>
				`
			: null
		}
	</div>
`;
Default.storyName = "Primary";
Default.args = {};

/*
 * Stories for the "Docs" only.
*/
export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
	text: "Link using spectrum-Link--secondary"
};
Secondary.parameters = {
	chromatic: { disableSnapshot: true },
};
Secondary.tags = ["autodocs", "!dev"];

export const StaticWhite = Template.bind({});
StaticWhite.args = {
	staticColor: "white",
	text: "Link using spectrum-Link--staticWhite"
};
StaticWhite.parameters = {
	chromatic: { disableSnapshot: true },
};
StaticWhite.tags = ["autodocs", "!dev"];

export const StaticBlack = Template.bind({});
StaticBlack.args = {
	staticColor: "black",
	text: "Link using spectrum-Link--staticBlack"
};
StaticBlack.parameters = {
	chromatic: { disableSnapshot: true },
};
StaticBlack.tags = ["autodocs", "!dev"];

export const QuietPrimary = Template.bind({});
QuietPrimary.storyName = "Quiet (Primary)";
QuietPrimary.args = {
	isQuiet: true,
	text: "Link using spectrum-Link--quiet"
};
QuietPrimary.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietPrimary.tags = ["autodocs", "!dev"];

export const QuietSecondary = Template.bind({});
QuietSecondary.storyName = "Quiet (Secondary)";
QuietSecondary.args = {
	isQuiet: true,
	variant: "secondary",
	text: "Link using spectrum-Link--quiet and spectrum-Link--secondary"
};
QuietSecondary.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietSecondary.tags = ["autodocs", "!dev"];

export const QuietStaticWhite = Template.bind({});
QuietStaticWhite.storyName = "Quiet (static white)";
QuietStaticWhite.args = {
	isQuiet: true,
	staticColor: "white",
	text: "Link using spectrum-Link--staticWhite and spectrum-Link--quiet"
};
QuietStaticWhite.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietStaticWhite.tags = ["autodocs", "!dev"];

export const QuietStaticBlack = Template.bind({});
QuietStaticBlack.storyName = "Quiet (static black)";
QuietStaticBlack.args = {
	isQuiet: true,
	staticColor: "black",
	text: "Link using spectrum-Link--staticBlack and spectrum-Link--quiet"
};
QuietStaticBlack.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietStaticBlack.tags = ["autodocs", "!dev"];
