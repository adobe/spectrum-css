import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-Button",
	id = getRandomId("button"),
	testId,
	customClasses = [],
	customStyles = {},
	size = "m",
	label,
	hideLabel = false,
	iconName,
	iconSet = "workflow",
	iconAfterLabel = false,
	variant,
	staticColor,
	treatment,
	onclick,
	isDisabled = false,
	isHovered = false,
	isFocused = false,
	isActive = false,
	isPending = false,
	ariaExpanded,
	ariaControls,
	noWrap = false,
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
	<button
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--static${capitalize(staticColor)}`]:
				typeof staticColor !== "undefined",
			[`${rootClass}--iconOnly`]: hideLabel,
			["is-pending"]: isPending,
			["is-disabled"]: isDisabled,
			["is-hover"]: isHovered,
			["is-focus-visible"]: isFocused,
			["is-active"]: isActive,
			[`${rootClass}--noWrap`]: noWrap,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		style=${styleMap(customStyles)}
		?disabled=${isDisabled}
		@click=${onclick ??
		function () {
			// Toggle the is-pending state on-click
			updateArgs({ isPending: true });

			setTimeout(() => {
				updateArgs({ isPending: false });
			}, 3000);
		}}
		@focusin=${function() {
			updateArgs({ isFocused: true });
		}}
		@focusout=${function() {
			updateArgs({ isFocused: false });
		}}
		aria-label=${ifDefined(hideLabel ? iconName : undefined)}
		aria-expanded=${ifDefined(ariaExpanded?.toString())}
		aria-controls=${ifDefined(ariaControls)}
		data-testid=${ifDefined(testId)}
	>
		${when(iconName && !iconAfterLabel, () =>
			Icon({ iconName, setName: iconSet, size }, context)
		)}
		${when(label && !hideLabel, () => 
			html`<span class=${`${rootClass}-label`}>${label}</span>`
		)}
		${when(iconName && iconAfterLabel, () =>
			Icon({ iconName, setName: iconSet, size }, context)
		)}
		${when(isPending, () =>
			ProgressCircle(
				{
					size: "s",
					testId: "progress-circle",
					staticColor,
					isIndeterminate: true,
				},
				context
			)
		)}
	</button>
	`;
};

/**
 * Displays multiple buttons with text label, icon + text label, and icon only.
 * Used in the display of some docs-only stories.
 */
export const ButtonsWithIconOptions = ({
	iconName,
	...args
}, context = {}) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			...args,
			iconName: undefined,
		}, context)}
		${Template({
			...args,
			iconName: iconName ?? "Edit",
		}, context)}
		${Template({
			...args,
			hideLabel: true,
			iconName: iconName ?? "Edit",
		}, context)}
	`,
});

/**
 * Display the buttons with icon options for each treatment option.
 */
export const TreatmentTemplate = (args, context = {}) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${["fill", "outline"].map((treatment) => ButtonsWithIconOptions({ ...args, treatment }, context))}`,
}, context);

/**
 * Display the text overflow behavior of buttons.
 */
export const TextOverflowTemplate = (args, context = {}) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`
	${Template({
		...args,
		customStyles: {
			"max-inline-size": "480px",
		},
		label: "An example of text overflow behavior when there is no icon. When the button text is too long for the horizontal space available, it wraps to form another line.",
	}, context)}
	${Template({
		...args,
		customStyles: {
			"max-inline-size": "480px",
		},
		iconName: "Edit",
		iconSet: "workflow",
		label: "An example of text overflow behavior when the button has an icon. When the button text is too long for the horizontal space available, it wraps to form another line.",
	}, context)}
  `,
}, context);

export const TextWrapTemplate = (args, context = {}) => Container({
	direction: "column",
	wrapperStyles: {
		rowGap: "12px",
		maxInlineSize: "120px",
	},
	content: html`
		${Template({
			...args,
			customStyles: {},
			label: "Be a premium member",
			noWrap: true,
		}, context)}
		${Template({
			...args,
			customStyles: {
				"max-inline-size": "100%",
			},
			label: "Be a premium member",
			noWrap: true,
		}, context)}
		${Template({
			...args,
			customStyles: {
				"max-inline-size": "100%",
			},
			iconName: "Star",
			iconSet: "workflow",
			label: "Be a premium member",
			noWrap: true,
		}, context)}
	`,
}, context);