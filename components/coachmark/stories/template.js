import { Template as ActionMenu } from "@spectrum-css/actionmenu/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as CoachIndicator } from "@spectrum-css/coachindicator/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const CoachContainer = (
	{
		rootClass = "spectrum-CoachMark",
		hasActionMenu = false,
		hasPagination,
		hasImage,
		imageIsFixedHeight,
		imageSource,
		title = "Coach mark title",
		content = "Pixel brushes use pixels to create brush strokes, just like in other design and drawing tools. Start drawing, and zoom in to see the pixels in each stroke.",
		currentStep = 2,
		totalStepCount = 8,
		isOpen = false,
	} = {},
	context = {},
) => {
	const { globals = {} } = context;

	const scale = globals.scale ?? "medium";

	return html`
		${when(
			hasImage,
			() => html`
				<div
					class=${classMap({
						[`${rootClass}-image-wrapper`]: true,
						[`${rootClass}-image-wrapper--fixedHeight`]: imageIsFixedHeight
					})}
				>
					<img
						class="${rootClass}-image"
						src="${imageSource || "example-card-landscape.png"}"
					/>
				</div>
			`,
		)}
		<div class="spectrum-CoachMark-header" style=${styleMap({
			"--mod-popover-width": "0px",
			"--mod-popover-height": "0px",
			"--mod-popover-wrapper-spacing": "0px",
		})}>
			<div class="spectrum-CoachMark-title">${title}</div>
			${when(
				hasActionMenu,
				() => ActionMenu(
					{
						isOpen,
						position: "bottom-start",
						iconName: "More",
						size: scale === "large" ? "s" : "m",
						customClasses: [
							`${rootClass}-action-menu`
						],
						items: [
							{
								label: "Skip tour",
							},
							{
								label: "Reset tour",
							},
						],
					},
					context,
				),
			)}
		</div>
		<div class="spectrum-CoachMark-content">
			${content}
		</div>
		<div class="${rootClass}-footer">
			${when(
				hasPagination,
				() => html`
					<div class="spectrum-CoachMark-step">
						<bdo dir="ltr">${currentStep} of ${totalStepCount}</bdo>
					</div>
				`,
			)}
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
									iconSet: "ui",
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
	return Popover(
		{
			customWrapperClasses: [
				args.rootClass,
				...args?.customClasses ?? []
			],
			customStyles: {
				...args?.customStyles ?? {},
				"inline-size": "var(--spectrum-coach-mark-width)",
			},
			customClasses: [`${args.rootClass}-popover`],
			isOpen: true,
			position: "right-top",
			trigger: (passthrough) => CoachIndicator(passthrough, context),
			content: [CoachContainer(args, context)],
		},
		context,
	);
};

/* Displays open and closed action menus in a single story. */
export const CoachmarkMenuStatesTemplate = (args, context) =>
	Container({
		withBorder: false,
		withHeading: false,
		wrapperStyles: {
			columnGap: "100px",
			rowGap: "200px",
		},
		content: [
			Container({
				withBorder: false,
				heading: "With action menu (closed) and media",
				content: Template(args, context),
			}),
			Container({
				withBorder: false,
				heading: "Action menu, without media",
				content: Template(
					{
						...args,
						hasImage: false,
						hasActionMenu: true,
						isOpen: true
					},
					context,
				),
			}),
		],
	});

/* Displays fixed and minimum height images in a single story. */
export const CoachMarkMediaOptionsTemplate = (args, context) =>
	Container({
		withBorder: false,
		withHeading: false,
		wrapperStyles: {
			columnGap: "100px",
			rowGap: "200px",
		},
		content: [
			Container({
				withBorder: false,
				heading: "With fixed height",
				content: Template(
					{
						...args,
						hasImage: true,
						imageIsFixedHeight: true,
						imageSource: "example-card-portrait.png",
						customStyles: {
							"height": "315px"
						}
					},
					context,
				),
			}),
			Container({
				withBorder: false,
				heading: "Without fixed height",
				content: Template(
					{
						...args,
						imageIsFixedHeight: false,
						customStyles: {
							"height": "700px"
						}
					},
					context,
				),
			}),
		],
	});
