import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = (
	{
		rootClass = "spectrum-HelpText",
		size = "m",
		isDisabled = false,
		hideIcon = false,
		text,
		variant,
		id,
		customClasses = [],
		customStyles = {},
	},
	context
) => html`
  <div
    class=${classMap({
      [rootClass]: true,
      "is-disabled": isDisabled,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--${variant}`]: typeof variant !== "undefined",
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
    style=${styleMap(customStyles)}
    id=${ifDefined(id)}
  >
    ${when(!hideIcon && variant == "negative", () =>
      Icon(
        {
          iconName: "Alert",
          size,
          customClasses: [`${rootClass}-validationIcon`],
        },
        context
      )
    )}
    <div class=${`${rootClass}-text`}>${text}</div>
  </div>
`;

const Sizes = (args, context) => {
	const sizes = context?.argTypes?.size?.options;
	return sizes.map(
		(size) => html`
      <div>
        ${Typography(
          {
            semantics: "heading",
            size: "m",
            weight: "light",
            content: [
              {
                s: "Small",
                m: "Medium",
                l: "Large",
                xl: "Extra-large",
              }[size],
            ],
            customClasses: ["chromatic-ignore"],
          },
          context
        )}
        <div>${Template({ ...args, size }, context)}</div>
      </div>
    `
	);
};

export const Variants = (args, context) => html`
  <div
    style=${styleMap({
      display: window.isChromatic() ? "none" : "contents",
    })}
  >
    ${Template(args, context)}
  </div>
  <div
    style=${styleMap({
      display: window.isChromatic() ? "flex" : "none",
      "flex-direction": "column",
      "align-items": "flex-start",
      gap: "32px",
    })}
  >
    ${[
      {
        heading: "Neutral",
        variant: "neutral",
      },
      {
        heading: "Negative",
        variant: "negative",
		text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		customStyles: {"max-width": "350px"},
      },
      {
        heading: "Negative with no icon",
        variant: "negative",
		hideIcon: true,
		text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		customStyles: {"max-width": "350px"},
      },
      {
        heading: "Disabled",
		isDisabled: true,
      },
    ].map(
      ({ heading, ...item }) => html`
        <div class="spectrum-Typography">
          ${when(heading, () =>
            Typography(
              {
                semantics: "heading",
                size: "l",
                content: [heading],
                customClasses: ["chromatic-ignore"],
              },
              context
            )
          )}
          <div
            style=${styleMap({
              padding: "12px",
              border: "1px solid var(--spectrum-gray-200)",
              "border-radius": "4px",
            })}
          >
            ${Template({ ...args, ...item }, context)}
          </div>
        </div>
      `
    )}
    <div class="spectrum-Typography">
      ${Typography(
        {
          semantics: "heading",
          size: "l",
          content: ["Sizing"],
        },
        context
      )}
      <div
        style=${styleMap({
          display: "flex",
          "flex-direction": "row",
          "align-items": "flex-start",
          gap: "32px",
          padding: "12px",
          border: "1px solid var(--spectrum-gray-200)",
          "border-radius": "4px",
        })}
      >
        ${Sizes(args, context)}
      </div>
    </div>
  </div>
`;
