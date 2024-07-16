import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ButtonGroup",
	customClasses = [],
	size = "m",
	items = [],
	vertical = false,
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--vertical`]: vertical,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
		${items.map((item) =>
			Button({
				...item,
				size,
				customClasses: [`${rootClass}-item`],
			})
		)}
	</div>
`;

const Sizes = (args, context) => ["s", "m", "l", "xl"].map((size) => html`
	<div>
		${Typography({
			semantics: "heading",
			size: "xs",
			content: [
				{
					s: "Small",
					m: "Medium",
					l: "Large",
					xl: "Extra-large",
				}[size]
			],
			customClasses: ["chromatic-ignore"],
		}, context)}
		<div>
			${Template({...args, size}, context)}
		</div>
	</div>
`);

export const ButtonGroup = (args, context) => html`
	<div
		style=${styleMap({
			display: window.isChromatic() ? "none" : "contents",
		})}
	>
		${Template(args, context)}
	</div>
	<div
		style=${styleMap({
			"display": window.isChromatic() ? "flex" : "none",
			"flex-direction": "column",
			"align-items": "flex-start",
			"gap": "32px",
		})}
	>
		${[
			{
				heading: "Default",
			},
			{
				heading: "Vertical",
				vertical: true,
			},
		].map(
			({ heading, ...item }) => html`
				<div class="spectrum-Typography">
					${Typography(
						{
							semantics: "heading",
							size: "s",
							content: [heading],
						},
						context,
					)}
					<div
						style=${styleMap({
							padding: "12px",
							border: "1px solid var(--spectrum-gray-200)",
							"border-radius": "4px",
						})}
					>
						${Template(
							{
								...args,
								...item,
							},
							context,
						)}
					</div>
				</div>
			`,
		)}
		<div class="spectrum-Typography">
			${Typography(
				{
					semantics: "heading",
					size: "s",
					content: ["Sizing"],
				},
				context,
			)}
			<div
				style=${styleMap({
					"display": "flex",
					"flex-direction": "column",
					"align-items": "flex-start",
					"gap": "16px",
					padding: "12px",
					border: "1px solid var(--spectrum-gray-200)",
					"border-radius": "4px",
				})}
			>
				${Sizes(args, context)}
			</div>
		</div>
	</div>
`;
