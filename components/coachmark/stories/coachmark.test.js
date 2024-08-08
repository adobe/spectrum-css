import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { CoachContainer, Template } from "./template";

export const TestTemplate = (args, context) => {
	return html`
		<div
			class=${classMap({
				[args.rootClass]: true,
				...args.customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(args.customStyles)}
		>${CoachContainer(args, context)}</div>
	`;
};

export const CoachMarkGroup = Variants({
	Template,
	TestTemplate,
	skipBorders: false,
	wrapperStyles: {
		"z-index": "1",
	},
	testData: [
		{
			testHeading: "Default",
			hasActionMenu: false,
			hasPagination: false,
			hasImage: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50, white)"
			},
		},
		{
			testHeading: "With media",
			hasActionMenu: false,
			hasPagination: false,
			hasImage: true,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50, white)"
			},
		},
		{
			testHeading: "With action menu",
			hasPagination: false,
			hasActionMenu: true,
			hasImage: false,
			isOpen: true,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50, white)"
			},
		},
		{
			testHeading: "With pagination",
			hasPagination: true,
			hasActionMenu: false,
			hasImage: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50, white)"
			},
		},
	],
	stateData: [],
});
