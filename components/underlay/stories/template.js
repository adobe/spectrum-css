import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { getRandomId, renderContent } from "../../../.storybook/decorators";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Underlay",
	customClasses = [],
	customStyles = {},
	content,
	isOpen = true,
	id = getRandomId("underlay"),
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
    <div
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${id}
      style=${styleMap(customStyles)}
      @click=${function() {
        updateArgs({ isOpen: !isOpen });
      }}
    ></div>
    ${when(content, () => renderContent(content, context))}
  `;
};
