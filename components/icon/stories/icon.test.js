import { Variants } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template.js";
import { uiIconsWithDirections, uniqueUiIconBaseNames, workflowSizes } from "./utilities.js";

/**
 * Chromatic VRT template that displays multiple icons to cover various options.
 * Includes Chromatic-only testing grid with:
 * - Several workflow icons, at all sizes, with some set to a color
 * - All UI icons, organized within a grid by sizing number and name
 */
export const TestTemplate = (args) => html`
	<div style=${styleMap({
		"display": "flex",
		"gap": "12px",
	})}>
		<div>
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Workflow icons"],
				customStyles: {
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				}
			})}
			<div
				style=${styleMap({
				"display": "grid",
				"grid-template-columns": `repeat(${workflowSizes.length}, 50px)`,
				"gap": "16px",
				"border": "1px solid var(--spectrum-gray-200)",
				"border-radius": "4px",
				"padding": "16px",
				"margin-block-end": "32px",
			})}
			>
				${workflowSizes.map(scale => html`
					<div>
						${Typography({
							semantics: "detail",
							size: "s",
							content: [scale],
							customStyles: {
								"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
							}
						})}
					</div>
				`)}
				${[
					"Add",
					"AlertTriangle",
					"Edit",
					"File",
					"Folder",
					"MenuHamburger",
					"SelectRectangle",
					"Redo",
					"Star",
					"StarFilled",
					"User",
				].map((iconName, idx) => html`
					${workflowSizes.map((size) => Template({
						...args,
						useRef: true,
						iconName,
						setName: "workflow",
						size,
						fill: idx % 5 === 0 ? "var(--spectrum-negative-content-color-default)" : undefined
					}))}
				`)}
			</div>
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["UI icons"],
				customStyles: {
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				}
			})}
			<div
				style=${styleMap({
				"display": "grid",
				"grid-template-columns": "repeat(8, 50px)",
				"gap": "16px",
				"border": "1px solid var(--spectrum-gray-200)",
				"border-radius": "4px",
				"padding": "16px",
			})}
			>
				${["50", "75", "100", "200", "300", "400", "500", "600"].map(scale => html`
					<div>
						${Typography({
							semantics: "detail",
							size: "s",
							content: [scale],
							customStyles: {
								"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
							}
						})}
					</div>
				`)}
				${uniqueUiIconBaseNames.sort().reduce((print, iconName) => {
					let output = Array(8).fill(html`<span></span>`);
					["50", "75", "100", "200", "300", "400", "500", "600"].forEach((scale, idx) => {
						if (uiIconsWithDirections.includes(`${iconName}${scale}`)) {
							output[idx] = Template({
								...args,
								setName: "ui",
								useRef: false,
								uiIconName: `${iconName}${scale}`,
							});
						}
					});
					print.push(...output);
					return print;
				}, [])}
			</div>
		</div>
	</div>
`;

export const IconGroup = Variants({
	Template,
	TestTemplate,
	withSizes: false,
	testData: [{}]
});
