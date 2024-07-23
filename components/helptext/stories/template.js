import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-HelpText",
		size = "m",
		isDisabled = false,
		hideIcon = false,
		text,
		variant,
		id = getRandomId("helptext"),
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

export const HelpTextGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Neutral",
			variant: "neutral",
		},
		{
			testHeading: "Negative",
			variant: "negative",
			text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			customStyles: { "max-width": "350px" },
		},
		{
			testHeading: "Negative with no icon",
			variant: "negative",
			hideIcon: true,
			text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			customStyles: { "max-width": "350px" },
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	],
});
