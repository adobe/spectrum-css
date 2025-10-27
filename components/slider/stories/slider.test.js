import { Sizes, Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const testData = [
	// Default variants
	{
		testHeading: "Default filled",
		variant: "filled"
	},
	{
		testHeading: "Precise",
		variant: "filled",
		isPrecise: true
	},
	{
		testHeading: "Large track",
		variant: "filled",
		trackHeight: "large"
	},
	{
		testHeading: "Precise large track",
		variant: "filled",
		isPrecise: true,
		trackHeight: "large"
	},
	// Ticks variants
	{
		testHeading: "With ticks",
		variant: "filled",
		showTicks: true,
		showTickLabels: true
	},
	{
		testHeading: "Precise with ticks",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		isPrecise: true
	},
	{
		testHeading: "Large track with ticks",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		trackHeight: "large"
	},
	{
		testHeading: "Large track with ticks and precise",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		isPrecise: true,
		trackHeight: "large"
	},
	// Side label variants
	{
		testHeading: "Side label",
		variant: "filled",
		labelPosition: "side"
	},
	{
		testHeading: "Side label with precise",
		variant: "filled",
		labelPosition: "side",
		isPrecise: true
	},
	{
		testHeading: "Large track with side label",
		variant: "filled",
		labelPosition: "side",
		trackHeight: "large"
	},
	{
		testHeading: "Side label with ticks",
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
		testHeading: "Editable with precise",
		variant: "filled",
		isEditable: true,
		isPrecise: true
	},
	{
		testHeading: "Editable with large track",
		variant: "filled",
		isEditable: true,
		trackHeight: "large"
	},
	{
		testHeading: "Editable with side label",
		variant: "filled",
		isEditable: true,
		labelPosition: "side"
	},
	// No label variants
	{
		testHeading: "No label",
		variant: "filled",
		label: ""
	},
	{
		testHeading: "No label with precise",
		variant: "filled",
		label: "",
		isPrecise: true
	},
	{
		testHeading: "No label with large track",
		variant: "filled",
		label: "",
		trackHeight: "large"
	},
	{
		testHeading: "No label with ticks",
		variant: "filled",
		label: "",
		showTicks: true,
		showTickLabels: true
	},
	{
		testHeading: "No label editable",
		variant: "filled",
		label: "",
		isEditable: true
	},
	{
		testHeading: "No label editable with precise",
		variant: "filled",
		label: "",
		isEditable: true,
		isPrecise: true
	},
	{
		testHeading: "No label editable with large track",
		variant: "filled",
		label: "",
		isEditable: true,
		trackHeight: "large"
	},
	// Disabled variants
	{
		testHeading: "Disabled",
		variant: "filled",
		isDisabled: true
	},
	{
		testHeading: "Disabled with precise",
		variant: "filled",
		isDisabled: true,
		isPrecise: true
	},
	{
		testHeading: "Disabled with precise and large track",
		variant: "filled",
		isDisabled: true,
		isPrecise: true,
		trackHeight: "large"
	},
	// Emphasized variants
	{
		testHeading: "Emphasized",
		variant: "filled",
		isEmphasized: true
	},
	{
		testHeading: "Emphasized with precise",
		variant: "filled",
		isEmphasized: true,
		isPrecise: true
	},
	{
		testHeading: "Emphasized with large track",
		variant: "filled",
		isEmphasized: true,
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized with ticks",
		variant: "filled",
		isEmphasized: true,
		showTicks: true,
		showTickLabels: true
	},
	{
		testHeading: "Emphasized with ticks and large track",
		variant: "filled",
		isEmphasized: true,
		showTicks: true,
		showTickLabels: true,
		trackHeight: "large"
	},
	// Sizes variants
	{
		testHeading: "Large track height sizes",
		variant: "filled",
		Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
		trackHeight: "large",
		withStates: false,
	},
	{
		testHeading: "Large track height sizes with precise",
		variant: "filled",
		isPrecise: true,
		Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
		trackHeight: "large",
		withStates: false,
	},
	{
		testHeading: "Sizes with precise",
		variant: "filled",
		isPrecise: true,
		Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
		withStates: false,
	},
];

const rangeTestData = [
	// Default variants
	{
		testHeading: "Range",
		variant: "filled",
		values: [10, 20]
	},
	{
		testHeading: "Range with precise",
		variant: "filled",
		values: [10, 20],
		isPrecise: true
	},
	{
		testHeading: "Range with large track",
		variant: "filled",
		values: [10, 20],
		trackHeight: "large"
	},
	{
		testHeading: "Range with precise and large track",
		variant: "filled",
		values: [10, 20],
		isPrecise: true,
		trackHeight: "large"
	},
	// Ticks variants
	{
		testHeading: "Range with ticks and large track",
		variant: "filled",
		showTicks: true,
		showTickLabels: true,
		values: [10, 20],
		trackHeight: "large"
	},
	// Side label variants
	{
		testHeading: "Range with side label",
		variant: "filled",
		labelPosition: "side",
		values: [10, 20]
	},
	// No label variants
	{
		testHeading: "Range with no label",
		variant: "filled",
		label: "",
		values: [10, 20]
	},
	// Emphasized variants
	{
		testHeading: "Emphasized range",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20]
	},
	{
		testHeading: "Emphasized range with precise",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		isPrecise: true
	},
	{
		testHeading: "Emphasized range with large track",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized range with precise and large track",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		isPrecise: true,
		trackHeight: "large"
	},
	{
		testHeading: "Emphasized range with side label",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		labelPosition: "side"
	},
	{
		testHeading: "Emphasized range with editable",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		isEditable: true
	},
	{
		testHeading: "Emphasized range with no label",
		variant: "filled",
		isEmphasized: true,
		values: [10, 20],
		label: ""
	},
];

const rampTestData = [
	// Default variants
	{
		testHeading: "Ramp",
		variant: "ramp"
	},
	{
		testHeading: "Ramp with precise",
		variant: "ramp",
		isPrecise: true
	},
];

const offsetTestData = [
	// Default variants
	{
		testHeading: "Offset",
		variant: "offset",
		values: [-15]
	},
	{
		testHeading: "Offset with precise",
		variant: "offset",
		values: [-15],
		isPrecise: true
	},
	{
		testHeading: "Offset with large track",
		variant: "offset",
		values: [-15],
		trackHeight: "large"
	},
	{
		testHeading: "Offset with precise and large track",
		variant: "offset",
		values: [-15],
		isPrecise: true,
		trackHeight: "large"
	},
	// Ticks variants
	{
		testHeading: "Offset with ticks and large track",
		variant: "offset",
		showTicks: true,
		showTickLabels: true,
		values: [-15],
		trackHeight: "large"
	},
	// Side label variants
	{
		testHeading: "Offset with side label",
		variant: "offset",
		labelPosition: "side",
		values: [-15]
	},
	// Editable variants
	{
		testHeading: "Offset with editable",
		variant: "offset",
		isEditable: true,
		values: [-15]
	},
	// No label variants
	{
		testHeading: "Offset with no label",
		variant: "offset",
		label: "",
		values: [-15]
	},
	{
		testHeading: "Offset with no label and editable",
		variant: "offset",
		label: "",
		isEditable: true,
		values: [-15]
	},
	// Emphasized variants
	{
		testHeading: "Emphasized offset",
		variant: "offset",
		isEmphasized: true,
		values: [-15]
	},
];

// Helper function to create a group with specific test data
const createGroup = (testData) => Variants({
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
			testHeading: "Focused + Hovered",
			isFocused: true,
			isHovered: true
		},
		{
			testHeading: "Disabled",
			isDisabled: true
		}
	]
});

export const SliderGroup = createGroup(testData);
export const VariantGroup = createGroup([...rangeTestData, ...rampTestData, ...offsetTestData]);
