import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ColorWheelGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With color area",
			isWithColorArea: true,
		},
		{
			testHeading: "Without color loupe",
			isWithColorLoupe: false,
		},
		{
			testHeading: "Custom sizing",
			customStyles: {
				"--spectrum-colorwheel-inline-size": "300px",
				"--spectrum-colorwheel-block-size": "300px",
				"--spectrum-colorwheel-track-width": "30px",
				"--spectrum-colorwheel-path": "\"M 149 149 m -149 0 a 149 149 0 1 0 298 0 a 149 149 0 1 0 -298 0 M 149 149 m -121 0 a 121 121 0 1 0 242 0 a 121 121 0 1 0 -242 0\"",
			},
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
	],
});
