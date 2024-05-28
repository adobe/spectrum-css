import { Template } from "./template";

/**
 * The clear button component is an in-field button used in search and tags.
 * 
 * ## Usage Notes

	Use the correct cross icon size that corresponds to the t-shirt size you require for the clear button.

	<table>
		<thead>
			<tr>
				<th>**T-Shirt Size**</th>
				<th>**Icon Size**</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>spectrum-ClearButton--sizeS</td>
				<td>spectrum-css-icon-Cross75</td>
			</tr>
			<tr>
				<td>spectrum-ClearButton--sizeM</td>
				<td>spectrum-css-icon-Cross100</td>
			</tr>
			<tr>
				<td>spectrum-ClearButton--sizeL</td>
				<td>spectrum-css-icon-Cross200</td>
			</tr>
			<tr>
				<td>spectrum-ClearButton--sizeXL</td>
				<td>spectrum-css-icon-Cross300</td>
			</tr>
		</tbody>
	</table>
 */
export default {
	title: "Clear button",
	component: "ClearButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
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
		isQuiet: {
			name: "Quiet Styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				disable: true,
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ClearButton",
		size: "m",
		isDisabled: false,
		isQuiet: false,
	},
};

/**
 * The default size for clear button is medium.
 */
export const Default = Template.bind({});
Default.args = {};

export const OverBackground = Template.bind({});
OverBackground.args = {
	staticColor: "white",
};

/*
 * Stories for the MDX "Docs" only.
 * Based off of the base `Template` which does not have conditional Chromatic-only markup.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["docs-only"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true }
};

/**
 * The `.spectrum-ClearButton--quiet` class will use a transparent background (including when the Express theme is active).
 */
export const Quiet = Template.bind({});
Quiet.tags = ["docs-only"];
Quiet.parameters = {
	chromatic: { disableSnapshot: true }
};
