import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Sizes, withDownStateDimensionCapture } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isHovered, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { InfieldButtonGroup } from "./infieldbutton.test.js";
import { InfieldButtonGroupVariant, InfieldButtonIcons, Template } from "./template.js";

/**
 * In-field buttons are used to represent actions within input fields. They’re currently used inside the [number field](/docs/components-stepper--docs).
 */
export default {
	title: "In-field button",
	component: "InFieldButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		iconName: {
			...IconStories?.argTypes?.uiIconName ?? {},
			options: ["ChevronDown", "Cross", "Dash", "Add"],
			if: { arg: "isInline", neq: true },
			description: "These are icons to use within the in-field button - `ChevronDown`, `Add`, `Dash` and `Cross`",
		},
		isDisabled,
		isActive,
		isHovered,
		isInline: {
			name: "Side by side",
			description: "Renders two in-field buttons side by side. This is typically used for number fields to add or subtract a number.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-InfieldButton",
		size: "m",
		iconName: "ChevronDown",
		isQuiet: false,
		isDisabled: false,
		isHovered: false,
		isActive: false,
		isInline: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-InfieldButton"],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=67509-808&m=dev"
		},
		downState: {
			selectors: [".spectrum-InfieldButton:not(:disabled)"],
		},
		packageJson,
		metadata,
		status: {
			type: "migrated",
		},
	},
	decorators: [
		withDownStateDimensionCapture,
	],
	tags: ["migrated"],
};

export const Default = InfieldButtonGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

export const Primary = InfieldButtonGroupVariant.bind({});
Primary.args = {};
Primary.storyName = "Default";
Primary.tags = ["!dev"];
Primary.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The quiet variant is used when the in-field button needs to be less visually prominent since it is used in input fields.
*/
export const Quiet = InfieldButtonGroupVariant.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The inline variant is used when there are multiple in-field buttons that need to be displayed side by side. This is typically used for number fields to add or subtract a number.
*/

export const Inline = Template.bind({});
Inline.tags = ["!dev"];
Inline.args = {
	isInline: true,
};
Inline.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The `ChevronDown`, `Add`, `Dash` and `Cross` icons should be used within the infield button to represent different actions. Use the correct icon size that corresponds to the t-shirt size you require for the infield button.

	<table>
		<thead>
			<tr>
				<th>**T-Shirt size**</th>
				<th>**Cross icon size class**</th>
				<th>**Disclosure (ChevronDown) icon size class**</th>
				<th>**Dash (Minus) icon size class**</th>
				<th>**Add icon size class**</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>spectrum-InfieldButton--sizeS</td>
				<td>spectrum-UIIcon-Cross75</td>
				<td>spectrum-UIIcon-ChevronDown75</td>
				<td>spectrum-UIIcon-Dash75</td>
				<td>spectrum-Icon--sizeS</td>
			</tr>
			<tr>
				<td>spectrum-InfieldButton--sizeM</td>
				<td>spectrum-UIIcon-Cross100</td>
				<td>spectrum-UIIcon-ChevronDown100</td>
				<td>spectrum-UIIcon-Dash100</td>
				<td>spectrum-Icon--sizeM</td>
			</tr>
			<tr>
				<td>spectrum-InfieldButton--sizeL</td>
				<td>spectrum-UIIcon-Cross200</td>
				<td>spectrum-UIIcon-ChevronDown200</td>
				<td>spectrum-UIIcon-Dash200</td>
				<td>spectrum-Icon--sizeL</td>
			</tr>
			<tr>
				<td>spectrum-InfieldButton--sizeXL</td>
				<td>spectrum-UIIcon-Cross300</td>
				<td>spectrum-UIIcon-ChevronDown300</td>
				<td>spectrum-UIIcon-Dash300</td>
				<td>spectrum-Icon--sizeXL</td>
			</tr>
		</tbody>
	</table>
 */
export const SupportedIcons = InfieldButtonIcons.bind({});
SupportedIcons.tags = ["!dev"];
SupportedIcons.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = InfieldButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
