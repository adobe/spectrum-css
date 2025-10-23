import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { CoachContainer, Template } from "./template.js";

export const TestTemplate = (args, context) => {
	return html`
		<div
			class=${classMap({
				[args.rootClass]: true,
				...args.customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(args.customStyles)}
		>
			${CoachContainer(args, context)}
		</div>
	`;
};

export const CoachMarkGroup = Variants({
	Template,
	TestTemplate,
	wrapperStyles: {
		"z-index": "1",
		"min-block-size": "auto",
	},
	testData: [
		{
			testHeading: "Default",
			hasActionMenu: false,
			hasPagination: false,
		},
		{
			testHeading: "With media",
			hasActionMenu: false,
			hasPagination: false,
			hasImage: true,
		},
		{
			testHeading: "With media + fixed height",
			hasActionMenu: false,
			hasPagination: false,
			hasImage: true,
			imageIsFixedHeight: true,
		},
		{
			testHeading: "With action menu",
			hasPagination: false,
			hasActionMenu: true,
		},
		{
			testHeading: "With action menu + media",
			hasPagination: false,
			hasImage: true,
			hasActionMenu: true,
		},
		{
			testHeading: "With pagination",
			hasActionMenu: false,
		},
		{
			testHeading: "With pagination + media",
			hasActionMenu: false,
			hasImage: true,
		},
		{
			testHeading: "With a long title",
			title: "Coach mark title with longer text that wraps to see how icon should align",
			hasActionMenu: true,
		},
	],
	stateData: [],
});
