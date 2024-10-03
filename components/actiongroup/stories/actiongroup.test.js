import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ActionGroups = Variants({
	Template,
	testData: [
		{
			testHeading: "Compact",
			compact: true,
		},
		{
			testHeading: "Justified",
			justified: true,
		},
		{
			testHeading: "Quiet",
			areQuiet: true,
		},
		{
			testHeading: "Emphasized",
			areEmphasized: true,
		},
		{
			testHeading: "Quiet + emphasized",
			areQuiet: true,
			areEmphasized: true,
		},
		{
			testHeading: "Vertical",
			vertical: true,
		},
		{
			testHeading: "Vertical compact",
			compact: true,
			vertical: true
		},
		{
			testHeading: "Vertical justified",
			justified: true,
			vertical: true
		},
		{
			testHeading: "Vertical quiet",
			areQuiet: true,
			vertical: true
		},
		{
			testHeading: "Vertical emphasized",
			areEmphasized: true,
			vertical: true
		},
		{
			testHeading: "Vertical quiet + emphasized",
			areQuiet: true,
			areEmphasized: true,
			vertical: true
		},
		{
			testHeading: "Overflow with workflow icons",
			customStyles: { "max-inline-size": "288px" },
			withStates: false,
			content: [
				{
					iconName: "Edit",
					iconSet: "workflow",
					label: "Edit",
				},
				{
					iconName: "Copy",
					iconSet: "workflow",
					label: "Copy",
				},
				{
					iconName: "Delete",
					iconSet: "workflow",
					label: "Delete",
				},
				{
					iconName: "Cut",
					iconSet: "workflow",
					label: "Cut",
				},
				{
					iconName: "Move",
					iconSet: "workflow",
					label: "Move",
				},
			]
		},
		{
			testHeading: "Overflow without workflow icons",
			customStyles: { "max-inline-size": "288px" },
			withStates: false,
			content: [
				{
					iconName: undefined,
					iconSet: "workflow",
					label: "Edit",
				},
				{
					iconName: undefined,
					iconSet: "workflow",
					label: "Copy",
				},
				{
					iconName: undefined,
					iconSet: "workflow",
					label: "Delete",
				},
				{
					iconName: undefined,
					iconSet: "workflow",
					label: "Cut",
				},
				{
					iconName: undefined,
					iconSet: "workflow",
					label: "Move",
				},
			]
		},
	],
	stateData: [
		{
			testHeading: "Label only",
			content: [
				{
					iconName: undefined,
					label: "Edit",
				},
				{
					iconName: undefined,
					label: "Copy",
				},
				{
					iconName: undefined,
					label: "Delete",
					isSelected: true
				},
			]
		},
		{
			testHeading: "Icon only",
			iconOnly: true
		}
	]
});
