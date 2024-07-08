import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";
import { styleMap } from "lit/directives/style-map.js";
import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Dialog",
	isDismissable = true,
	isOpen = true,
	size,
	layout,
	showModal = false,
	heading,
	header,
	footer,
	content = [],
	buttons,
	customClasses = [],
	hasHeroImage = false,
	heroImageUrl,
	customStyles = {},
	id,
	...globals
}) => {
	const [, updateArgs] = useArgs();

	const Dialog = html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--dismissable`]: isDismissable,
				[`${rootClass}--${layout}`]: typeof layout !== "undefined" && layout !== "default",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${ifDefined(styleMap(customStyles))}
		>
			<div class="${rootClass}-grid">
				${when(hasHeroImage, () =>
					html`
						<div 
							class="spectrum-Dialog-hero"
							style="background-image:url(${heroImageUrl ?  heroImageUrl : "example-card-portrait.png"})">
						</div>
					`
				)}
				<div class="${rootClass}-header">
					${when(heading, () => [
						html`
						<div class="${rootClass}-heading">
							${Typography({
								semantics: "heading",
								size: "m",
								content: heading
							})
						}
						</div>
						`
					])}
					${when(header, () => [
						html`
							${Typography({
								semantics: "body",
								size: "m",
								content: header
							})
						}
						`
					])}
				</div>

				${when(isDismissable, () =>
					CloseButton({
            customClasses: [`${rootClass}-closeButton`],
            ...globals,
            onclick: () => {
              updateArgs({ isOpen: !isOpen });
            },
          }), 
				)}

				${when(layout === "fullscreen" || layout === "fullscreenTakeover", () => html`
					<div class="${rootClass}-buttonGroup">
						${ButtonGroup({
							items: buttons,
							onclick: () => {
								updateArgs({ isOpen: !isOpen });
							},
						})}
					</div>`
				)}

				<section class="${rootClass}-content">${content.map((c) => (typeof c === "function" ? c({}) : c))}</section>
				
				${when(footer, () => html`
					<div class="${rootClass}-footer">
						${Typography({
							semantics: "body",
							size: "m",
							content: footer,
						})}
						${when(!isDismissable, () => html`
							<div class="${rootClass}-buttonGroup">
								${ButtonGroup({
									items: buttons,
									onclick: () => {
										updateArgs({ isOpen: !isOpen });
									},
								})}
							</div>`
						)}
					</div>`, 
					() => html`
						${when(!isDismissable, () => html`
							<div class="${rootClass}-buttonGroup ${rootClass}-buttonGroup--noFooter">
								${ButtonGroup({
									items: buttons,
									onclick: () => {
										updateArgs({ isOpen: !isOpen });
									},
								})}
							</div>`
						)}
					`
				)}
			</div>
		</div>
	`;

	if (showModal) {
		return html`
			${Underlay({
				...globals,
				isOpen,
			})}
			${Button({
				...globals,
				size: "m",
				variant: "secondary",
				label: "Click to open dialog",
				treatment: "outline",
				customClasses: [],
				customStyles: {
					position: "absolute",
					insetInlineStart: "50%",
					insetBlockStart: "50%",
					transform: "translate(-50%, -50%)",
				},
				onclick: () => {
					updateArgs({ isOpen: !isOpen });
				},
			})}
			${Modal({
				...globals,
				isOpen,
				variant: layout,
				content: Dialog,
			})}
		`;
	}
	else {
		return Dialog;
	}
};

const Sizes = (args) =>
	html` ${["s", "m", "l"].map((size) => {
		return html`
			<div>
				${Typography({
					semantics: "detail",
					size: "s",
					content: [
						{
							s: "Small",
							m: "Medium",
							l: "Large",
						}[size],
					],
				})}
				${Template({
						...args,
						showModal: false,
						isDismissable: false,
						size,
				})}
			</div>
		`;
	})}`;

const DismissibleSizes = (args) =>
	html` ${["s", "m", "l"].map((size) => {
		return html`
			<div>
				${Typography({
					semantics: "detail",
					size: "s",
					content: [
						{
							s: "Small",
							m: "Medium",
							l: "Large",
						}[size],
					],
				})}
				${Template({
						...args,
						showModal: false,
						isDismissable: true,
						size,
				})}
			</div>
		`;
	})}`;

const Layouts = (args) =>
	html` 
	${["fullscreen", "fullscreenTakeover"].map((variant) => {
		return html`
			<div style="padding-block-end: 2rem">
				${Typography({
					semantics: "detail",
					variant: "fullscreen",
					content: [
						{
							fullscreen: "Fullscreen",
							fullscreenTakeover: "Fullscreen Takeover",
						}[variant],
					],
				})}
				${Template({
					...args,
					showModal: false,
					layout: variant,
					isDismissable: false,
				})}
			</div>
		`;
	})}`;

const WithHero = (args) =>
	html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Default"],
			})}
			${Template({
				...args,
				size: "m",
				showModal: false,
				hasHeroImage: true,
				isDismissable: false,
			})}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Dismissible"],
			})}
			${Template({
				...args,
				size: "m",
				showModal: false,
				hasHeroImage: true,
				isDismissable: true,
			})}
		</div>
	`;

export const ChromaticVariants = (args) => {
	const sectionData = [
		{
			sectionName: "Sizes, Non-dismissible",
			componentMarkup: Sizes({
				...args,
			}),
		},
		{
			sectionName: "Sizes, dismissible",
			componentMarkup: DismissibleSizes({
				...args,
			}),
		},
		{
			sectionName: "Layouts",
			componentMarkup: Layouts({
				...args,
			}),
			gridColumns: 1,
		},
		{
			sectionName: "Hero/Cover Image",
			componentMarkup: WithHero({
				...args,
			})
		},
	];

	return sectionData.map((data) => html`
		<div class="spectrum-Typography">
			${Typography({
				semantics: "detail",
				size: "l",
				content: [data.sectionName],
			})}
			<div
				style=${styleMap({
					display: "grid",
					gap: "1.5rem",
					gridTemplateColumns: `repeat(${data?.gridColumns?.toString() ?? "4"}, 1fr)`,
				})}
			>
				${data.componentMarkup}
			</div>
		</div>
	`);
};
