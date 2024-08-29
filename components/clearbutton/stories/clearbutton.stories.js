import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isQuiet, size, staticColor } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ClearButtonGroup } from "./clearbutton.test.js";
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
		size: size(["s", "m", "l", "xl"]),
		isDisabled,
		isQuiet,
		staticColor: {
			...staticColor,
			options: ["white"],
		},
	},
	args: {
		rootClass: "spectrum-ClearButton",
		size: "m",
		isDisabled: false,
		isQuiet: false,
	},
	parameters: {
		componentVersion: version,
	},
};

/**
 * The default size for clear button is medium.
 */

export const Default = ClearButtonGroup.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The `.spectrum-ClearButton--quiet` class will use a transparent background (including when the Express theme is active).
 */
export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true,
};
Quiet.tags = ["!dev"];
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args
}, context);
Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const OverBackground = ClearButtonGroup.bind({});
OverBackground.tags = ["!dev"];
OverBackground.args = {
	staticColor: "white",
};
OverBackground.parameters = {
	chromatic: {
		modes: disableDefaultModes
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ClearButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
