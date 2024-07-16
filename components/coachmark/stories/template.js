import { Template as ActionMenu } from "@spectrum-css/actionmenu/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-CoachMark",
	customClasses = [],
	customStyles = {},
	hasActionMenu = false,
	hasPagination,
	hasImage,
	isOpen = true,
} = {}, context = {}) => {
	const { globals = {} } = context;
	const scale = globals.scale ?? "medium";

	return html`
		<div style=${styleMap({"margin-top": "8px"})}>
			<div
				class=${classMap({
					[rootClass]: true,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap(customStyles)}
			>
				${Popover({
					nested: true,
					testId: "popover-nested",
					id: "popover-nested",
					triggerId: "trigger-nested",
					customStyles: {
						"margin-inline-start": "0px",
					},
					customClasses: [`${rootClass}-popover`],
					isOpen: true,
					content: [
						html`
						${hasImage ? html`
							<div class="${rootClass}-image-wrapper">
								<img class="${rootClass}-image" src="example-card-landscape.png" />
							</div>` : ""}
						<div class="spectrum-CoachMark-header">
							<div class="spectrum-CoachMark-title">Try playing with a pixel brush</div>
							<div class="spectrum-CoachMark-action-menu">
							${when(hasActionMenu, () =>
								ActionMenu({
									isOpen,
									position: "bottom",
									id: "popover-nested-2",
									triggerId: "trigger-nested-2",
									customStyles: {
                    "inset-inline-start": "unset",
                    "inset-block-start": "unset",
										"margin-block-start": "30px",
										"margin-inline-start": "-32px"
									},
									iconName: "More",
									size: scale === "large" ? "s" : "m",
									items: [
										{
											label: "Skip tour",
										},
										{
											label: "Reset tour",
										}
									],
								}, context)
							)}
						</div>
						</div>
						<div class="spectrum-CoachMark-content">
							Pixel brushes use pixels to create brush strokes, just like in other design and drawing tools. Start drawing, and zoom in to see the pixels in each stroke.
						</div>
						<div class="${rootClass}-footer">
						${hasPagination ? html`<div class="spectrum-CoachMark-step"><bdo dir="ltr">2 of 8</bdo></div>` : ""}
						${ButtonGroup({
							customClasses: scale === "large" ? [`${rootClass}-buttongroup--mobile`] : [`${rootClass}-buttongroup`],
							size: scale === "large" ? "s" : "m",
							items: scale === "large" ?
							[
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
							]
							:
							[
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
				}, context)}
			</div>
		</div>
	`;
};
