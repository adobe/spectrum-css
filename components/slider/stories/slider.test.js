import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const testData = [
	...["filled", "offset", "ramp"].map((variant) => ({
		testHeading: capitalize(variant),
		variant,
		values: variant === "offset" ? [0] : [15]
	})),
	{
		testHeading: "Range",
		variant: "filled",
		values: [10, 20]
	},
	{
		testHeading: "With Ticks",
		variant: "filled",
		showTicks: true,
		showTickLabels: true
	},
	{
		testHeading: "Focused",
		variant: "filled",
		isFocused: true
	},
	{
		testHeading: "Precise",
		variant: "filled",
		isPrecise: true
	},
	{
		testHeading: "Large Track",
		variant: "filled",
		trackHeight: "large"
	},
	{
		testHeading: "Precise Large Track",
		variant: "filled",
		isPrecise: true,
		trackHeight: "large"
	},
	// Ramp variants
	{
		testHeading: "Ramp Precise",
		variant: "ramp",
		isPrecise: true
	},
	// Range variants
	{
		testHeading: "Range Precise",
		variant: "filled",
		values: [10, 20],
		isPrecise: true
	},
	{
		testHeading: "Range Large Track",
		variant: "filled",
		values: [10, 20],
		trackHeight: "large"
	},
	{
		testHeading: "Range Precise Large Track",
		variant: "filled",
		values: [10, 20],
		isPrecise: true,
		trackHeight: "large"
	},
	// Offset variants
	{
		testHeading: "Offset Precise",
		variant: "offset",
		values: [0],
		isPrecise: true
	},
	{
		testHeading: "Offset Large Track",
		variant: "offset",
		values: [0],
		trackHeight: "large"
	},
	{
		testHeading: "Offset Precise Large Track",
		variant: "offset",
		values: [0],
		isPrecise: true,
		trackHeight: "large"
	},
	// Ticks variants
	{
		testHeading: "Ticks Precise",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		isPrecise: true
	},
	{
		testHeading: "Ticks Large Track",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		trackHeight: "large"
	},
	{
		testHeading: "Ticks Precise Large Track",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		isPrecise: true,
		trackHeight: "large"
	},
	{
		testHeading: "Ticks Range Large Track",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		values: [10, 20],
		trackHeight: "large"
	},
	{
		testHeading: "Ticks Offset Large Track",
		variant: "offset",
		showTicks: true,
		showTickLabels: true,
		values: [0],
		trackHeight: "large"
	},
	// Side label variants
	{
		testHeading: "Side Label",
		variant: "filled",
		labelPosition: "side"
	},
	{
		testHeading: "Side Label Precise",
		variant: "filled",
		labelPosition: "side",
		isPrecise: true
	},
	{
		testHeading: "Side Label Large Track",
		variant: "filled",
		labelPosition: "side",
		trackHeight: "large"
	},
	{
		testHeading: "Side Label Range",
		variant: "filled",
		labelPosition: "side",
		values: [10, 20]
	},
	{
		testHeading: "Side Label Offset",
		variant: "offset",
		labelPosition: "side",
		values: [0]
	},
	{
		testHeading: "Side Label Ticks",
		variant: "filled",
		labelPosition: "side",
		showTicks: true,
		showTickLabels: true
	},
	// Editable variants
	{
		testHeading: "Editable",
		variant: "filled",
		isEditable: true
	},
	{
		testHeading: "Editable Precise",
		variant: "filled",
		isEditable: true,
		isPrecise: true
	},
	{
		testHeading: "Editable Large Track",
		variant: "filled",
		isEditable: true,
		trackHeight: "large"
	},
	{
		testHeading: "Editable Offset",
		variant: "offset",
		isEditable: true,
		values: [0]
	},
	{
		testHeading: "Editable Side Label",
		variant: "filled",
		isEditable: true,
		labelPosition: "side"
	},
	// No label variants
	{
		testHeading: "No Label",
		variant: "filled",
		label: ""
	},
	{
		testHeading: "No Label Precise",
		variant: "filled",
		label: "",
		isPrecise: true
	},
	{
		testHeading: "No Label Large Track",
		variant: "filled",
		label: "",
		trackHeight: "large"
	},
	{
		testHeading: "No Label Range",
		variant: "filled",
		label: "",
		values: [10, 20]
	},
	{
		testHeading: "No Label Offset",
		variant: "offset",
		label: "",
		values: [0]
	},
	{
		testHeading: "No Label Ticks",
		variant: "filled",
		label: "",
		showTicks: true,
		showTickLabels: true
	},
	// No label editable variants
	{
		testHeading: "No Label Editable",
		variant: "filled",
		label: "",
		isEditable: true
	},
	{
		testHeading: "No Label Editable Precise",
		variant: "filled",
		label: "",
		isEditable: true,
		isPrecise: true
	},
	{
		testHeading: "No Label Editable Large Track",
		variant: "filled",
		label: "",
		isEditable: true,
		trackHeight: "large"
	},
	{
		testHeading: "No Label Editable Offset",
		variant: "offset",
		label: "",
		isEditable: true,
		values: [0]
	},
	// Disabled variants
	{
		testHeading: "Disabled",
		variant: "filled",
		isDisabled: true
	},
	{
		testHeading: "Disabled + precise",
		variant: "filled",
		isDisabled: true,
		isPrecise: true
	},
	{
		testHeading: "Disabled + precise + large track",
		variant: "filled",
		isDisabled: true,
		isPrecise: true,
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized",
		variant: "filled",
		isEmphasized: true
	},
	{
		testHeading: "Emphasized Precise",
		variant: "filled",
		isEmphasized: true,
		isPrecise: true
	},
	{
		testHeading: "Emphasized Large Track",
		variant: "filled",
		isEmphasized: true,
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized Range",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20]
	},
	{
		testHeading: "Emphasized Range Precise",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		isPrecise: true
	},
	{
		testHeading: "Emphasized Range Large Track",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized Range Precise Large Track",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		isPrecise: true,
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized Range Side Label",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		labelPosition: "side"
	},
	{
		testHeading: "Emphasized Range Editable",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		isEditable: true
	},
	{
		testHeading: "Emphasized Range No Label",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		label: ""
	},
	{
		testHeading: "Emphasized Offset",
		variant: "offset",
		isEmphasized: true,
		values: [0]
	},
	{
		testHeading: "Emphasized Ticks",
		variant: "filled",
		isEmphasized: true,
		showTicks: true,
		showTickLabels: true
	},
	{
		testHeading: "Emphasized Ticks Large Track",
		variant: "filled",
		isEmphasized: true,
		showTicks: true,
		showTickLabels: true,
		trackHeight: "large"
	}
];

export const SliderGroup = Variants({
	Template,
	testData,
	stateData: [
		{
			testHeading: "Hovered",
			isHovered: true
		},
		{
			testHeading: "Active",
			isActive: true
		},
		{
			testHeading: "Focused",
			isFocused: true
		},
		{
			testHeading: "Disabled",
			isDisabled: true
		}
	]
});
