import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { AccentColor as IllustratedMessageStory } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

export const Template = ({
	rootClass = "spectrum-DropZone",
	isDragged = false,
	isFilled = false,
	customClasses = [],
	customHeading,
	customDescription,
	customLabel,
	customStyles = {},
	id,
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
			style=${ifDefined(styleMap(customStyles))}
		>
			${IllustratedMessage({
				heading: customHeading ?? IllustratedMessageStory.args.heading,
				description: customDescription ?? IllustratedMessageStory.args.description,
			}, context)}

			<div class="${rootClass}-content">
				${ActionButton({
					label: customLabel ?? "Drop file to replace",
					customClasses: [`${rootClass}-button`],
				}, context)}
			</div>
		</div>
	`;
};

export const DropZoneGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined,
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"gap": "12px",
	})}>
		${Template(args, context)}
		${Template({
			...args,
			customHeading: "Drag and drop your file to upload",
			customDescription: [
				() => {
					return html`You can also ${Link({ url: "#", text: "select a file" })} from your computer.`;
				}
			],
			customLabel: "Drag and drop to replace file upload",
			customStyles: {}
		}, context)}
	</div>
`;
