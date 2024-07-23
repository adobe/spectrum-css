import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { capitalize } from "lodash-es";
import { Template } from "./template";

/**
 * Multiple button variations displayed in one story template.
 * Used as the base template for the stories.
 */
const CustomButton = ({ iconName, ...args }, context) => html`
  ${Template(
    {
      ...args,
      iconName: undefined,
    },
    context
  )}
  ${Template(
    {
      ...args,
      iconName: iconName ?? "Edit",
    },
    context
  )}
  ${Template(
    {
      ...args,
      hideLabel: true,
      iconName: iconName ?? "Edit",
    },
    context
  )}
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
			label:
        "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
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
			label:
        "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
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
			label:
        "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
			withStates: false,
			Template,
		},
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
