import { ArgGrid, Container, Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

/**
 * Multiple button variations displayed in one story template.
 * Used as the base template for the stories.
 */
const ButtonContentGroup = ({ iconName, iconSet, ...args }, context) => Container({
	level: 3,
	withBorder: false,
	content: [
		Template({
			...args,
			iconName: undefined,
		}, context),
		Template({
			...args,
			iconName: iconName ?? "Edit",
			iconSet: iconSet ?? "workflow",
		}, context),
		Template({
			...args,
			hideLabel: true,
			iconName: iconName ?? "Edit",
			iconSet: iconSet ?? "workflow",
		}, context),
	],
});

const ButtonIconGroup = (args, context) => Container({
	level: 3,
	withBorder: false,
	content:[
		{
			testHeading: "Workflow icon",
			content: Template({
				...args,
				iconName: "Edit",
				iconSet: "workflow",
			}, context),
		},
		{
			testHeading: "Workflow icon",
			content: Template({
				...args,
				iconName: "Link",
				iconSet: "workflow",
			}, context),
		},
		{
			testHeading: "UI icon",
			content: Template({
				...args,
				// Uses a UI icon that is smaller than workflow sizing, to test alignment:
				iconName: "Cross100",
				iconSet: "ui",
			}, context),
		},
		{
			testHeading: "UI icon (larger)",
			content: Template({
				...args,
				// UI icon that is larger than workflow sizing:
				iconName: "ArrowDown600",
				iconSet: "ui",
			}, context),
		},
	],
});

const ButtonTreatmentGroup = (args, context) => ArgGrid({
	Template: ButtonContentGroup,
	withBorder: false,
	withWrapperBorder: false,
	argKey: "treatment",
	labels: {
		fill: "",
		outline: "",
	},
	...args,
}, context);

const ButtonVariantGroup = (args, context) => ArgGrid({
	Template: ButtonTreatmentGroup,
	withBorder: false,
	argKey: "variant",
	...args,
}, context);

export const ButtonGroups = Variants({
	Template: ButtonContentGroup,
	testData: [
		{
			Template: ButtonVariantGroup,
		},
		{
			Template: ButtonVariantGroup,
			testHeading: "Static white",
			staticColor: "white",
		},
		{
			Template: ButtonVariantGroup,
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			Template: ButtonIconGroup,
			testHeading: "Line wrap",
			customStyles: {
				"max-inline-size": "480px",
			},
			iconName: "Edit",
			iconSet: "workflow",
			label: "An example of text overflow behavior within the button component. When the button text is too long for the horizontal space available, it wraps to form another line.",
			withStates: false,
		},
		{
			Template: ButtonIconGroup,
			testHeading: "Truncation",
			customStyles: {
				"max-inline-size": "120px",
			},
			iconName: "Edit",
			iconSet: "workflow",
			label: "Be a premium member",
			noWrap: true,
			withStates: false,
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
			ignore: ["Static black", "Static white"],
		},
	],
	sizeDirection: "row",
});
