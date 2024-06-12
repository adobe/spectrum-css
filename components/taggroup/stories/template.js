import { Variants } from "@spectrum-css/preview/decorators/utilities.js";
import { Template as Tag } from "@spectrum-css/tag/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-TagGroup",
	ariaLabel,
	items = [],
	isRemovable = false,
	customClasses = [],
	customStyles = {},
	size = "m",
}, context) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${ifDefined(styleMap(customStyles))}
		role="list"
		aria-label=${ifDefined(ariaLabel)}
	>
		${items.map((i) => Tag({
			...i,
			size,
			hasClearButton: isRemovable,
			customClasses: [`${rootClass}-item`],
		}, context))}
	</div>
`;

export const TagGroups = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Is removable",
			isRemovable: true,
		},
		{
			testHeading: "Overflow",
			isRemovable: true,
			isEmphasized: false,
			customStyles: {"max-width": "300px"},
			items: [
				{
					label: "Tag 1 Example",
				},
				{
					label: "Tag 2 Example",
				},
				{
					label: "Tag 3 Example",
				},
				{
					label: "Tag 4",
				},
				{
					label: "Tag 5",
				},
				{
					label: "Tag 6",
				},
				{
					label: "Tag 7",
				},
			],
		}
	],
});
