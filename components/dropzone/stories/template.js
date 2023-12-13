import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { AccentColor as IllustratedMessageStory } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-DropZone",
	isDragged = false,
	isFilled = false,
	customClasses = [],
	customHeading,
	customDescription,
	customLabel,
	id,
	...globals
}) => {
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
			style="width: 300px;"
		>
			${IllustratedMessage({
				...globals,
				heading: customHeading ?? IllustratedMessageStory.args.heading,
				description: customDescription ?? IllustratedMessageStory.args.description,
			})}

			<div class="${rootClass}-content">
				${ActionButton({
					label: customLabel ?? "Drop file to replace",
					customClasses: [`${rootClass}-button`],
				})}
			</div>
		</div>
	`;
};
