import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import { Template as ActionMenu } from "@spectrum-css/actionmenu/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";

import { Template as Popover } from "@spectrum-css/popover/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CoachMark",
	variant,
	isCoachMarkOpen,
	customClasses,
	hasActionMenu = false,
	hasPagination,
	hasImage,
	isOpen = true,
	...globals
}) => {
	const { scale } = globals;

	return html`
		<div
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
		${Popover({
			...globals,
			nested: true,
			testId: 'popover-nested',
			id: 'popover-nested',
			triggerId: 'trigger-nested',
			customStyles: {
				"margin-inline-start": "0px",
			},
			customClasses: [`${rootClass}-popover`],
			isOpen: true,
			content: [
				html`
				${when(hasImage, () => html
					`<div class="${rootClass}-image-wrapper">
					<img class="${rootClass}-image" src="example-card-landscape.png" />
				</div>`)}
				<div class="spectrum-CoachMark-header">
					<div class="spectrum-CoachMark-title">Try playing with a pixel brush</div>
					<div class="spectrum-CoachMark-action-menu">
						${when(hasActionMenu, () => ActionMenu({
							isOpen,
							popoverPosition: "right",
							popoverTestId: 'popover-nested-2',
							popoverId: 'popover-nested-2',
							popoverTriggerId: "trigger-nested-2",
							iconName: 'More',
							popoverPosition: "bottom-start",
							size: scale === "large" ? "s" : "m",
							items: [
								{
									label: "Skip tour",
								},
								{
									label: "Reset tour",
								}
							],
						}))}
					</div>
				</div>
				<div class="spectrum-CoachMark-content">
					Pixel brushes use pixels to create brush strokes, just like in other design and drawing tools. Start drawing, and zoom in to see the pixels in each stroke.
				</div>
				<div class="${rootClass}-footer">
				${when(hasPagination, () => html`<div class="spectrum-CoachMark-step"><bdo dir="ltr">2 of 8</bdo></div>`)}
				${ButtonGroup({
					customClasses: scale === "large" ? [`${rootClass}-buttongroup--mobile`] : [`${rootClass}-buttongroup`],
					size: scale === "large" ? "s" : "m",
					items: scale === "large" ? [
						{
							variant: "secondary",
							treatment: "outline",
							hideLabel: true,
							iconName: "ChevronLeft75",
						},
						{
							variant: "primary",
							treatment: "outline",
							label: "Next",
						},
					] : [
						{
							variant: "secondary",
							treatment: "outline",
							label: "Previous",
						},
						{
							variant: "primary",
							treatment: "outline",
							label: "Next",
						},
					],
				})}
				</div>
				`
			],
		})}
		</div>
	`;
};
