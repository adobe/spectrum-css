import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Variants, getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Popover",
	size = "m",
	isOpen = false,
	withTip = false,
	position = "top",
	customClasses = [],
	id = getRandomId("popover"),
	testId,
	triggerId = getRandomId("popover-trigger"),
	customStyles = {},
	trigger,
	content = [],
} = {}, context = {}) => {
	const { updateArgs } = context;

	const isTopBottom = position && ["top", "bottom"].some((e) => position.startsWith(e));

	return html`
		${when(typeof trigger === "function",
			(passthroughs) => trigger({
				isSelected: isOpen,
				// isActive: isOpen,
				onclick: function () {
					updateArgs({ isOpen: !isOpen });
				},
				...passthroughs,
				id: triggerId,
				popupId: id,
			}, context),
		)}

		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--withTip`]: withTip,
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			role="presentation"
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId ?? id)}
			style=${styleMap(customStyles)}
		>
			${renderContent(content)}
			${when(withTip, () => html`
				<svg
					class=${classMap({ [`${rootClass}-tip`]: true })}
					viewBox=${isTopBottom ? "0 -0.5 16 9" : "0 -0.5 9 16"}
					width="10"
				>
					<path
						class=${classMap({ [`${rootClass}-tip-triangle`]: true })}
						d=${isTopBottom ? "M-1,-1 8,8 17,-1" : "M-1,-1 8,8 -1,17"}
					></path>
				</svg>
			`)}
		</div>
	`;
};

export const PopoverGroup = Variants({
	Template,
	testData: [
		...[
			"top",
			"top-left",
			"top-right",
			"top-start",
			"top-end",
			"bottom",
			"bottom-left",
			"bottom-right",
			"bottom-start",
			"bottom-end",
			"right",
			"right-bottom",
			"right-top",
			"left",
			"left-bottom",
			"left-top",
			"start",
			"start-top",
			"start-bottom",
			"end",
			"end-top",
			"end-bottom",
		].map((position) => ({
			testHeading: `Position: ${position}`,
			position,
			trigger: undefined,
			wrapperStyles: {
				"inline-size": "200px",
				"block-size": "200px",
				"display": "flex",
				// Align button where the popover can fit next to it in the container
				"justify-content": "center",
				"align-items": "center",
			},
		})),
	],
	stateData: [
		{
			testHeading: "With tip",
			withTip: true,
		}
	]
});

export const PopoverGroupNested = Variants({
	Template,
	testData: [{
		testHeading: "Nested",
		position: "right-top",
		isOpen: true,
		trigger: (passthroughs) => ActionButton({
			label: "Menu",
			...passthroughs,
		}),
		content: [
			(passthroughs, context) => Menu({
				...passthroughs,
				items: [
					{
						iconName: "Edit",
						label: "Edit",
					},
				],
			}, context),
			(passthroughs, context) => Template({
				...passthroughs,
				position: "right-top",
				isOpen: true,
				trigger: (passthroughs, context) => ActionButton({
					label: "More options",
					...passthroughs,
				}, context),
				content: [
					(passthroughs, context) => Menu({
						...passthroughs,
						items: [
							{
								iconName: "Copy",
								label: "Copy",
							},
							{
								iconName: "Move",
								label: "Move",
							},
							{
								iconName: "Delete",
								label: "Delete",
							},
						],
					}, context),
				],
			}, context),
		],
		wrapperStyles: {
			"block-size": "150px",
			"inline-size": "400px",
			"display": "flex",
			"align-items": "flex-start",
			"justify-content": "left",
		}
	}],
});
