import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { markupWithLabel, testContainerStacked } from "@spectrum-css/preview/types";
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
	...globals
}) => {
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
      ${when(iconName && !iconAfterLabel, () => Icon({ ...globals, iconName, size }))}
      ${when(label && !hideLabel,
        () => html`<span class=${`${rootClass}-label`}>${label}</span>`
      )}
      ${when(iconName && iconAfterLabel, () => Icon({ ...globals, iconName, size }))}
      ${when(isPending, () => ProgressCircle({
        ...globals,
        size: "s",
        testId: "progress-circle",
        staticColor,
        isIndeterminate: true,
      }))}
    </button>
  `;
};

/**
 * Multiple button variations displayed in one story template.
 * Used as the base template for the stories.
 */
export const CustomButton = ({ iconName, ...args }) => html`
  ${Template({
    ...args,
    iconName: undefined,
  })}
  ${Template({
    ...args,
    iconName: iconName ?? "Edit",
  })}
  ${Template({
    ...args,
    hideLabel: true,
    iconName: iconName ?? "Edit",
  })}
`;

export const States = (args) => html`
  ${markupWithLabel("Default", Treatment(args), {
    size: "s",
  })}
  ${markupWithLabel("Selected", Treatment({ ...args, isSelected: true }), {
    size: "s",
  })}
  ${markupWithLabel("Focused", Treatment({ ...args, isFocused: true }), {
    size: "s",
  })}
  ${markupWithLabel("Hovered", Treatment({ ...args, isHovered: true }), {
    size: "s",
  })}
  ${markupWithLabel("Active", Treatment({ ...args, isActive: true }), {
    size: "s",
  })}
  ${markupWithLabel("Disabled", Treatment({ ...args, isDisabled: true }), {
    size: "s",
  })}
  ${markupWithLabel("Disabled + selected", Treatment({ ...args, isDisabled: true, isSelected: true }), {
    size: "s",
  })}
  ${markupWithLabel("Pending", Treatment({ ...args, isPending: true }), {
    size: "s",
  })}
`;

export const Sizes = (args) => html`
  ${["s", "m", "l", "xl"].map((size) => {
    return markupWithLabel({
      xxs: "Extra-extra-small",
      xs: "Extra-small",
      s: "Small",
      m: "Medium",
      l: "Large",
      xl: "Extra-large",
      xxl: "Extra-extra-large",
    }[size], Treatment({ ...args, size }), {
      size: "s",
    });
  })}
`;

export const Treatment = (args) => html`
  <div style=${styleMap({
    display: "flex",
    gap: "10px",
  })}>
    ${["fill", "outline"].map((treatment) =>
      CustomButton({ ...args, treatment })
    )}
  </div>
`;

export const Wrapping = (args) => html`
  ${Template({
    ...args,
    customStyles: {
      "max-inline-size": "480px",
    },
    iconName: "Edit",
    label:
      "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
  })}
  ${Template({
    ...args,
    customStyles: {
      "max-inline-size": "480px",
    },
    // Uses a UI icon that is smaller than workflow sizing, to test alignment:
    iconName: "Cross100",
    label:
      "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
  })}
  ${Template({
    ...args,
    customStyles: {
      "max-inline-size": "480px",
    },
    // UI icon that is larger than workflow sizing:
    iconName: "ArrowDown600",
    label:
      "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
  })}
`;

export const Variants = (args) => html`
  <div style=${styleMap({
    ...testContainerStacked,
    display: window.isChromatic() ? "flex" : "none",
  })}>
    ${markupWithLabel("Accent", States(args))}
    ${markupWithLabel("Negative", States({ ...args, variant: "negative" }), {
      withTestBorder: true
    })}
    ${markupWithLabel("Primary", States({ ...args, variant: "primary" }), {
      withTestBorder: true
    })}
    ${markupWithLabel("Secondary", States({ ...args, variant: "secondary" }), {
      withTestBorder: true
    })}
    ${markupWithLabel("Sizing", Sizes(args), {
      withTestBorder: true,
    })}
    ${markupWithLabel("Wrapper", Wrapping(args), {
      withTestBorder: true,
    })}
  </div>
`;
