import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isHovered, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ClearButtonGroup } from "./clearbutton.test.js";
import { Template } from "./template.js";

/**
 * The clear button component is an in-field button used in [search](/docs/components-search-field--docs) and [tags](/docs/components-tag--docs).
 */
export default {
	title: "Clear button",
	component: "ClearButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isDisabled,
		isHovered,
		isActive,
		isFocusable: {
			table: { disable: true },
			type: { name: "boolean" },
		},
	},
	args: {
		rootClass: "spectrum-ClearButton",
		size: "m",
		isDisabled: false,
		isHovered: false,
		isActive: false,
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-token-specs?node-id=13078-14989",
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	tags: ["migrated"],
};

export const Default = ClearButtonGroup.bind({});
Default.args = {};

/**
 * When disabled, the clear button color changes to `--spectrum-disabled-content-color` and is not interactive.
 */
export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true,
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Use the correct cross icon size that corresponds to the t-shirt size you require for the clear button. The default size is medium.

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
 *
 */
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

// ********* VRT ONLY ********* //
export const WithForcedColors = ClearButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
