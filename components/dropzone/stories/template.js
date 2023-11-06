import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { AccentColor as IllustratedMessageStory } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";

import "@spectrum-css/dropzone";

export const Template = ({
	rootClass = "spectrum-DropZone",
	isDragged = false,
	isFilled = false,
	customClasses = [],
	id,
	testId,
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
			data-testid=${ifDefined(testId)}
			role="region"
			tabindex="0"
			style="width: 300px;"
		>
			${IllustratedMessage({

				heading: IllustratedMessageStory.args.heading,
				description: IllustratedMessageStory.args.description,
			})}

			<div class="${rootClass}-content">
				${ActionButton({
					label: "Drop file to replace",
					customClasses: [`${rootClass}-button`],
				})}
			</div>
		</div>
	`;
};
