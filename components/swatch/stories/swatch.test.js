import { Container, Variants } from "@spectrum-css/preview/decorators";
import exampleImage from "../../../.storybook/assets/images/example-ava@2x.png";
import { Template } from "./template.js";

export const Swatches = (args, context) => {
	return Container({
		withBorder: false,
		containerStyles: {
			"flex-grow": "1",
			"align-items": "stretch",
		},
		wrapperStyles: {
			"gap": "40px",
			"justify-content": "space-around"
		},
		level: 2,
		content: [
			Template(args, context),
			Template({
				...args,
				rounding: "none",
				borderStyle: "noBorder",
				swatchColor: "linear-gradient(to right, rgba(154, 116, 200, 0.5), rgb(174, 216, 230))",
			}, context),
			Template({
				...args,
				rounding: "full",
				borderStyle: "lightBorder",
				swatchColor: `center / contain no-repeat url("${exampleImage}")`,
			}, context),
			Template({
				...args,
				isMixedValue: true,
			}, context),
			Template({
				...args,
				swatchColor: undefined,
				imageUrl: undefined,
			}, context),
		],
	});
};

export const SwatchGroup = Variants({
	Template,
	SizeTemplate: Swatches,
	sizeDirection: "column",
	containerStyles: {
		"flex-grow": "1",
		"align-items": "stretch",
	},
	testData: [
		{
			testHeading: "RGB",
		},
		{
			testHeading: "RGBA (opacity)",
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
		},
		{
			testHeading: "Shape: rectangle",
			shape: "rectangle",
		},
		{
			testHeading: "Gradient",
			swatchColor: "linear-gradient(to right, rgba(154, 116, 200, 0.5), rgb(174, 216, 230))",
		},
		{
			testHeading: "Image as background",
			swatchColor: `center / contain no-repeat url("${exampleImage}")`,
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
			testHeading: "Empty",
			swatchColor: undefined,
			imageUrl: undefined,
			isMixedValue: false,
			borderStyle: "default",
		},
		{
			testHeading: "Selected",
			isSelected: true,
		},
	]
});
