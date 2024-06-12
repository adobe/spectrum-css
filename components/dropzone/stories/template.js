import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { AccentColor as IllustratedMessageStory } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Template as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/template.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators/utilities.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-DropZone",
		isDragged = false,
		isFilled = false,
		customClasses = [],
		customStyles = {},
		customLabel,
		id,
	},
	context
) => html`
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
    style=${styleMap(customStyles)}
  >
    ${IllustratedMessage(
      {
        heading: IllustratedMessageStory.args.heading,
        description: IllustratedMessageStory.args.description,
      },
      context
    )}

    <div class="${rootClass}-content">
      ${ActionButton(
        {
          label: customLabel ?? "Drop file to replace",
          customClasses: [`${rootClass}-button`],
        },
        context
      )}
    </div>
  </div>
`;

export const DropzoneGroup = Variants({
	Template,
	testData: [
		{},
		{
			heading: "Verbose example",
			customHeading: "Drag and drop your file to upload",
			customDescription: [
				() => {
					return html`You can also ${Link({ url: "#", text: "select a file" })} from your computer.`;
				},
			],
			customLabel: "Drag and drop to replace file upload",
		},
	],
	stateData: [
		{
			heading: "Dragged",
			isDragged: true,
		},
		{
			heading: "Drag with fill",
			isFilled: true,
			isDragged: true,
		},
	],
	withSizes: false,
});
