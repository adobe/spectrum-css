import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { AccentColor as IllustratedMessageStory } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Template as IllustratedMessage } from '@spectrum-css/illustratedmessage/stories/template.js';
import { Template as Link } from "@spectrum-css/link/stories/template.js";

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-Dropzone",
  isDragged = false,
  customClasses = [],
  id,
  ...globals
}) => {
  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        'is-dragged': isDragged,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role="region"
      tabindex="0"
      style="width: 300px;"
    >
      ${IllustratedMessage({
        ...globals,
        heading: IllustratedMessageStory.args.heading,
        description: IllustratedMessageStory.args.description,
      })}
    </div>
  `;
};
