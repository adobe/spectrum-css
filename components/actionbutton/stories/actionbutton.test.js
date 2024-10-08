import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template.js";

export const ActionButtons = (args, context) => {
	return html`
		<div style=${styleMap({ display: "flex", "gap": "13px" })}>
			${Template(args, context)}
			${Template({
				...args,
			}, context)}
			${Template({
				...args,
				hideLabel: true,
			}, context)}
			${Template({
				...args,
				hasPopup: "true",
				hideLabel: true,
			}, context)}
			${Template({
				...args,
				iconName: undefined,
				hasPopup: "true",
			}, context)}
		</div>
	`;
};

const Truncation = (args, context) => {
	return html`
		${Template(args, context)}
		${Template({
			...args,
			iconName: undefined,
		}, context)}
	`;
};

export const ActionButtonGroup = Variants({
	Template: ActionButtons,
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Standard",
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Quiet + emphasized",
			isEmphasized: true,
			isQuiet: true,
		},
		{
			Template: Truncation,
			testHeading: "Truncation",
			label: "Truncate this long content",
			customStyles: {
				maxInlineSize: "100px"
			},
			withStates: false,
		},
	],
	stateData: [{
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Selected",
		isSelected: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}, {
		testHeading: "Hovered",
		isHovered: true,
	}, {
		testHeading: "Active",
		isActive: true,
	}, {
		testHeading: "Disabled + selected",
		isDisabled: true,
		isSelected: true,
	}],
});
