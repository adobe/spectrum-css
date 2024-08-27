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
			withBorder: "lightBorder",
		},
		{
			testHeading: "No border",
			withBorder: "noBorder",
			rounding: "none",
		},
		{
			testHeading: "Rectangle",
			isRectangle: true,
		},
		{
			testHeading: "Gradient",
			isGradient: true,
			gradient: "linear-gradient(to right, rgba(0, 0, 0, 88%), rgb(174, 216, 230))",
			swatchColor: "rgba(174, 216, 230, 0.3)",
		},
		{
			testHeading: "Image",
			isImage: true,
			imageUrl: "example-ava@2x.png",
		},
		{
			testHeading: "Mixed value",
			isMixedValue: true,
			swatchColor: "var(--spectrum-gray-50)",
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "No color",
			swatchColor: undefined,
			imageUrl: "",
			gradient: "",
			isMixedValue: false,
		},
		{
			testHeading: "Selected",
			isSelected: true,
		},
	]
});
