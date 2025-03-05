import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-DropZone",
	isDragged = false,
	isFilled = false,
	customClasses = [],
	customStyles = {},
	title,
	description,
	label,
	id = getRandomId("dropzone"),
	size = "m",
	image = "dropzone-illustration.png",
} = {}, context = {}) => {
	return html`
	<div
		class=${classMap({
			[rootClass]: true,
			"is-dragged": isDragged,
			"is-filled": isFilled,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		role="region"
		tabindex="0"
		style=${styleMap(customStyles), [isDragged && isFilled ? `background-image:url(${image});` : null].filter(Boolean).join(" ")}
	>
	<svg
      class="${rootClass}-stroke"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <rect
        x="1"
        y="1"
        rx="10px"
        ry="10px"
        fill="none"
				width="100%"
				height="100%"
        stroke-linecap="round"
				stroke-linejoin="round"
				vector-effect="non-scaling-stroke"
        class="${rootClass}-strokePath"
      />
    </svg>
		<div class="${rootClass}-content">
			${IllustratedMessage({
				title: title,
				description: description,
				customIllustration: customSvg,
				size: size
			}, context )}
			<div class="${rootClass}-actions">
				${isDragged && isFilled
					? Button({
						label: label,
						customClasses: [`${rootClass}-button`],
						variant: "accent",
					})
					: Button({
						label: label,
						size: size
					})}
			</div>
		</div>
	</div>
`;
}


const customSvg = () => html`
  <svg class="spectrum-IllustratedMessage-illustration" fill="none" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
		<path d="m33.454 15.74c-4.1061 0-7.4545 3.3125-7.4545 7.4231v36.154c0 4.1106 3.3484 7.4231 7.4545 7.4231h29.091c4.1061 0 7.4545-3.3125 7.4545-7.4231v-21.254c0-1.9724-0.7882-3.8618-2.1875-5.253l-14.987-14.9c-1.3989-1.3908-3.2937-2.1701-5.2671-2.1701h-14.104zm-3.4545 7.4231c0-1.8796 1.5357-3.4231 3.4545-3.4231h14.104c0.92 0 1.7999 0.3634 2.4469 1.0067l14.987 14.9c0.6466 0.6429 1.0077 1.5123 1.0077 2.4164v21.254c0 1.8796-1.5357 3.4231-3.4545 3.4231h-29.091c-1.9188 0-3.4545-1.5435-3.4545-3.4231v-36.154zm9.7659 22.028c-0.8552-0.6991-2.1152-0.5726-2.8143 0.2825-0.6991 0.8552-0.5726 2.1152 0.2825 2.8143l8.2189 6.7193c0.3659 0.4459 0.9208 0.7309 1.5426 0.7323h0.0189l0.0167-2e-4c0.4638 0.0071 0.9295-0.1465 1.308-0.4605l8.4378-7c0.8501-0.7053 0.9675-1.9662 0.2623-2.8163-0.7053-0.8501-1.9662-0.9675-2.8163-0.2623l-5.2138 4.3254 0.0345-15.782c0.0024-1.1046-0.8911-2.002-1.9956-2.0044-1.1046-0.0024-2.002 0.8911-2.0044 1.9956l-0.0344 15.743-5.2434-4.2867zm-12.766 30.548c-1.1046 0-2 0.8954-2 2s0.8954 2 2 2h7.5c1.1046 0 2-0.8954 2-2s-0.8954-2-2-2h-7.5zm-15-9.5c-1.1046 0-2-0.8954-2-2v-7.5c0-1.1046 0.8954-2 2-2s2 0.8954 2 2v7.5c0 1.1046-0.8954 2-2 2zm70-1.5c0 1.1046 0.8954 2 2 2s2-0.8954 2-2v-7.5c0-1.1046-0.8954-2-2-2s-2 0.8954-2 2v7.5zm-61-22c0-1.1046-0.8954-2-2-2h-3.5c-3.0376 0-5.5 2.4624-5.5 5.5v3.5c0 1.1046 0.8954 2 2 2s2-0.8954 2-2v-3.5c0-0.8284 0.6716-1.5 1.5-1.5h3.5c1.1046 0 2-0.8954 2-2zm56-2c-1.1046 0-2 0.8954-2 2s0.8954 2 2 2h3.5c0.8284 0 1.5 0.6716 1.5 1.5v3.5c0 1.1046 0.8954 2 2 2s2-0.8954 2-2v-3.5c0-3.0376-2.4624-5.5-5.5-5.5h-3.5zm-65 28c-1.1046 0-2 0.8954-2 2v3.5c0 3.0376 2.4624 5.5 5.5 5.5h3.5c1.1046 0 2-0.8954 2-2s-0.8954-2-2-2h-3.5c-0.8284 0-1.5-0.6716-1.5-1.5v-3.5c0-1.1046-0.8954-2-2-2zm74 2c0-1.1046-0.8954-2-2-2s-2 0.8954-2 2v3.5c0 0.8284-0.6716 1.5-1.5 1.5h-3.5c-1.1046 0-2 0.8954-2 2s0.8954 2 2 2h3.5c3.0376 0 5.5-2.4624 5.5-5.5v-3.5zm-44 7c0-1.1046 0.8954-2 2-2h7.5c1.1046 0 2 0.8954 2 2s-0.8954 2-2 2h-7.5c-1.1046 0-2-0.8954-2-2zm19-2c-1.1046 0-2 0.8954-2 2s0.8954 2 2 2h7.5c1.1046 0 2-0.8954 2-2s-0.8954-2-2-2h-7.5z" clip-rule="evenodd" fill-rule="evenodd"/>
	</svg>
`;
