import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const SliderGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Filled",
			variant: "filled",
		},
		{
			testHeading: "Filled offset",
			variant: "offset",
			min: 0,
		},
		{
			testHeading: "Ramp",
			variant: "ramp",
		},
		{
			testHeading: "Range",
			values: [14, 16],
		},
		{
			testHeading: "Tick",
			label: undefined,
			showTicks: true,
		},
		{
			testHeading: "Side label",
			labelPosition: "side",
		},
		{
			testHeading: "Gradient",
			customStyles: {
				"--spectrum-slider-track-color":
					"linear-gradient(to right, red, green 100%)",
				"--spectrum-slider-track-color-rtl":
					"linear-gradient(to left, red, green 100%)",
			},
		},
		{
			testHeading: "Truncation",
			withStates: false,
			label: "Slider label that is long and wraps to the next line",
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
	]
});
