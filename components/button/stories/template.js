import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators/utilities.js";
import { Template as ProgressCircle } from "@spectrum-css/progresscircle/stories/template.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Button",
	id,
	testId,
	customClasses = [],
	customStyles = {},
	size = "m",
	label,
	hideLabel = false,
	iconName,
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
}, context) => {
	const [, updateArgs] = useArgs();

	return html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${treatment}`]: typeof treatment !== "undefined",
        [`${rootClass}--${variant}`]: typeof variant !== "undefined",
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
        [`${rootClass}--iconOnly`]: hideLabel,
        ["is-pending"]: isPending,
        ["is-disabled"]: isDisabled,
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
				["is-active"]: isActive,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${ifDefined(styleMap(customStyles))}
      ?disabled=${isDisabled}
      @click=${onclick ?? function() {
        // Toggle the is-pending state on-click
        updateArgs({ isPending: true });

        setTimeout(() => {
          updateArgs({ isPending: false });
        }, 3000);
      }}
      aria-label=${ifDefined(hideLabel ? iconName : undefined)}
      aria-expanded=${ifDefined(ariaExpanded?.toString())}
      aria-controls=${ifDefined(ariaControls)}
      data-testid=${ifDefined(testId)}
    >
      ${when(iconName && !iconAfterLabel, () => Icon({ iconName, size }, context))}
      ${when(label && !hideLabel,
        () => html`<span class=${`${rootClass}-label`}>${label}</span>`
      )}
      ${when(iconName && iconAfterLabel, () => Icon({ iconName, size }, context))}
      ${when(isPending, () => ProgressCircle({
        size: "s",
        testId: "progress-circle",
        staticColor,
        isIndeterminate: true,
      }, context))}
    </button>
  `;
};

/**
 * Multiple button variations displayed in one story template.
 * Used as the base template for the stories.
 */
const CustomButton = ({ iconName, ...args }, context) => html`
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
`;

export const ButtonGroups = Variants({
	Template: CustomButton,
	testData: [
		...["accent", "negative", "primary", "secondary"].map((variant) => ({
			testHeading: capitalize(variant),
			variant,
		})),
		...["fill", "outline"].map((treatment) => ({
			testHeading: capitalize(treatment),
			treatment,
		})),
		{
			testHeading: "Text wrapping with workflow icon",
			customStyles: {
				"max-inline-size": "480px",
			},
			iconName: "Edit",
			label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
			withStates: false,
			Template,
		},
		{
			testHeading: "Text wrapping with UI icon",
			customStyles: {
				"max-inline-size": "480px",
			},
			// Uses a UI icon that is smaller than workflow sizing, to test alignment:
			iconName: "Cross100",
			label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
			withStates: false,
			Template,
		},
		{
			testHeading: "Text wrapping with larger UI icon",
			customStyles: {
				"max-inline-size": "480px",
			},
			// UI icon that is larger than workflow sizing:
			iconName: "ArrowDown600",
			label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
			withStates: false,
			Template,
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Active",
			isActive: true,
		},
		{
			testHeading: "Pending",
			isPending: true,
		},
	],
	sizeDirection: "row",
});
