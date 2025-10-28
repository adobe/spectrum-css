import { Variants, getAllCombinations } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CheckboxGroup = Variants({
	Template,
	stateDirection: "row",
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
		},
		...getAllCombinations([
			{
				testHeading: "Checked",
				isChecked: true,
				not: ["Indeterminate"],
			},
			{
				testHeading: "Indeterminate",
				isIndeterminate: true,
				not: ["Checked"],
			},
			{
				testHeading: "Emphasized",
				isEmphasized: true,
				not: ["Indeterminate"],
			},
			{
				testHeading: "Read-only",
				isReadOnly: true,
			},
			{
				testHeading: "Disabled",
				isDisabled: true,
			},
		]),
		{
			testHeading: "Truncation",
			withStates: false,
			label: "Checkbox with an extraordinarily long label. Please don't do this but if you did, it should wrap text when it gets longer than the container that houses the checkbox with the unacceptably long label",
			customStyles: {
				"max-inline-size": "200px",
			}
		}
	],
	stateData: [
		/* generate all combinations of states to cover 1..n combinations */
		...getAllCombinations([
			{
				testHeading: "Hovered",
				isHovered: true,
			},
			{
				testHeading: "Active",
				isActive: true,
			},
			{
				testHeading: "Focused",
				isFocused: true,
			},
		]),
	],
});
