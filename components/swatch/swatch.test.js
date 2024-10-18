import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SwatchGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Color with opacity",
			swatchColor: "rgba(174, 216, 230, 0.3)"
		},
		{
			testHeading: "No rounding",
			rounding: "none"
		},
		{
			testHeading: "Full rounding",
			rounding: "full"
		},
		{
			testHeading: "Light border",
			borderStyle: "lightBorder",
		},
		{
			testHeading: "No border",
			borderStyle: "noBorder",
			rounding: "none",
		},
		{
			testHeading: "Shape: rectangle",
			shape: "rectangle",
		},
		{
			testHeading: "Gradient",
			gradient: "linear-gradient(to right, rgba(0, 0, 0, 88%), rgb(174, 216, 230))",
			swatchColor: "rgba(174, 216, 230, 0.3)",
		},
		{
			testHeading: "Image",
			imageUrl: "example-ava@2x.png",
		},
		{
			testHeading: "Mixed value",
			isMixedValue: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "No color/empty",
			swatchColor: undefined,
			imageUrl: "",
			gradient: "",
			isMixedValue: false,
			borderStyle: "default",
		},
		{
			testHeading: "Selected",
			isSelected: true,
		},
	]
});
