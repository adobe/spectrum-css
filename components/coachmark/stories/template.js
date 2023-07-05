import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from 'lit/directives/if-defined.js';

import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as ActionMenu } from "@spectrum-css/actionmenu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";

import "../index.css";
import "../skin.css";

export const Template = ({
	rootClass = "spectrum-CoachMark",
	variant,
	isCoachMarkOpen,
	customClasses,
	hasActionMenu = false,
	hasPagination,
	hasImage,
	isMobile,
	...globals
}) => {
	return html`
		<div cdiv
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--mobile`]: isMobile,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
		${Popover({
			...globals,
			customClasses: [`${rootClass}-popover`],
			isCoachMarkOpen,
			content: [
				html`
				${hasImage ? html `<img src="example-card-landscape.png" class="${rootClass}-image" />` : ''}
				<div class="spectrum-CoachMark-header">
					<div class="spectrum-CoachMark-title">Try playing with a pixel brush</div>
					<div class="spectrum-CoachMark-action-menu">
					${ifDefined(hasActionMenu ? ActionMenu({
							iconName: "More",
							label: "More actions",
							items: [
								{
									label: "Skip tour",
								},
								{
									label: "Reset tour",
								},
								{
									label: "Action 3",
								},
								{
									label: "Action 4",
								},
							],
					}) : '')}
				</div>
				</div>
				<div class="spectrum-CoachMark-content">
					Pixel brushes use pixels to create brush strokes, just like in other design and drawing tools. Start drawing, and zoom in to see the pixels in each stroke.
				</div>
				<div class="${rootClass}-footer">
				${ifDefined(hasPagination ? html`<div class="spectrum-CoachMark-step"><bdo dir="ltr">2 of 8</bdo></div>` : '')}
				${ButtonGroup({
					size: isMobile ? 's' : 'm',
					items: [
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
