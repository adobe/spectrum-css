import { Template as ActionMenu } from "@spectrum-css/actionmenu/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as CoachIndicator } from "@spectrum-css/coachindicator/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const CoachContainer = ({
	rootClass = "spectrum-CoachMark",
	hasActionMenu = false,
	hasPagination,
	hasImage,
	isOpen = false,
} = {}, context = {}) => {
	const { globals = {} } = context;
	const scale = globals.scale ?? "medium";

	return html`
		${when(hasImage, () => html`
			<div class="${rootClass}-image-wrapper">
				<img
					class="${rootClass}-image"
					src="example-card-landscape.png"
				/>
			</div>
		`)}
		<div class="spectrum-CoachMark-header">
			<div class="spectrum-CoachMark-title">
				Try playing with a pixel brush
			</div>
			<div class="spectrum-CoachMark-action-menu">
				${when(hasActionMenu, () =>
					ActionMenu({
						isOpen,
						position: "bottom-start",
						iconName: "More",
						size: scale === "large" ? "s" : "m",
						items: [
							{
								label: "Skip tour",
							},
							{
								label: "Reset tour",
							},
						],
						popoverHeight: 68,
						popoverWidth: 84,
					}, context),
				)}
			</div>
		</div>
		<div class="spectrum-CoachMark-content">
			Pixel brushes use pixels to create brush strokes, just like in
			other design and drawing tools. Start drawing, and zoom in to
			see the pixels in each stroke.
		</div>
		<div class="${rootClass}-footer">
			${when(hasPagination, () => html`
				<div class="spectrum-CoachMark-step">
					<bdo dir="ltr">2 of 8</bdo>
				</div>
			`)}
			${ButtonGroup({
				customClasses:
					scale === "large"
						? [`${rootClass}-buttongroup--mobile`]
						: [`${rootClass}-buttongroup`],
				size: scale === "large" ? "s" : "m",
				items:
					scale === "large"
						? [
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
						: [
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
	`;
};

export const Template = (args, context) => {
	return html`
		<div
			class=${classMap({
				[args.rootClass]: true,
				...args.customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(args.customStyles)}
		>
			${Popover({
				customStyles: {
					"inline-size": "var(--spectrum-coach-mark-width)",
				},
				customClasses: [`${args.rootClass}-popover`],
				isOpen: true,
				position: "right-top",
				trigger: (passthrough) => CoachIndicator({
					...passthrough,
				}, context),
				content: [
					CoachContainer(args, context)
				],
			}, context)}
		</div>
	`;
};
