import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import "./index.css";

export default {
	title: "Drop shadow",
	description:
		"Drop shadows draw attention and give the appearance of depth. By default, this style is used to show elevation, when content appears on top of other content.",
	component: "Drop shadow",
	tags: ["!dev"],
};

const DropShadowSwatch = ({
	rootClass = "spectrum-Foundations-Example-DropShadow-swatch",
	variant,
	isDropShadow,
}) => html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}-drop-shadow`]:
					typeof variant !== "undefined" && !!isDropShadow,
				[`${rootClass}--${variant}-box-shadow`]:
					typeof variant !== "undefined" && !isDropShadow,
			})}
		></div>
`;

const DropShadowBackground = (
	{
		rootClass = "spectrum-Foundations-Example-swatch-container",
		color,
		...args
	},
	context,
) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			"spectrum--light": color === "light",
			"spectrum--dark": color === "dark",
		})}
	>
		${DropShadowSwatch(args, context)}
	</div>
`;

const DropShadowVariant = (args, context) => html`
	<div class="spectrum-Foundations-Example-variant-container">
		${DropShadowBackground({ ...args, color: "light" }, context)}
		${DropShadowBackground({ ...args, color: "dark" }, context)}
	</div>
`;

export const DropShadowEmphasizedDefault = DropShadowVariant.bind({});
DropShadowEmphasizedDefault.args = {
	variant: "emphasized-default",
	isDropShadow: true,
};
DropShadowEmphasizedDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

export const DropShadowEmphasizedHover = DropShadowVariant.bind({});
DropShadowEmphasizedHover.args = {
	variant: "emphasized-hover",
	isDropShadow: true,
};
DropShadowEmphasizedHover.parameters = {
	chromatic: { disableSnapshot: true },
};

export const DropShadowElevated = DropShadowVariant.bind({});
DropShadowElevated.args = {
	variant: "elevated",
	isDropShadow: true,
};
DropShadowElevated.parameters = {
	chromatic: { disableSnapshot: true },
};

export const BoxShadowEmphasizedDefault = DropShadowVariant.bind({});
BoxShadowEmphasizedDefault.args = {
	variant: "emphasized-default",
	isDropShadow: false,
};
BoxShadowEmphasizedDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

export const BoxShadowEmphasizedHover = DropShadowVariant.bind({});
BoxShadowEmphasizedHover.args = {
	variant: "emphasized-hover",
	isDropShadow: false,
};
BoxShadowEmphasizedHover.parameters = {
	chromatic: { disableSnapshot: true },
};

export const BoxShadowElevated = DropShadowVariant.bind({});
BoxShadowElevated.args = {
	variant: "elevated",
	isDropShadow: false,
};
BoxShadowElevated.parameters = {
	chromatic: { disableSnapshot: true },
};
