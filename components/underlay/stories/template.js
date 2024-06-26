import { renderContent } from "@spectrum-css/preview/decorators/utilities.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Underlay",
	customClasses = [],
	customStyles = {},
	content,
	isOpen = true,
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
    <div
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id="spectrum-underlay"
      style=${styleMap(customStyles)}
      @click=${() => {
        updateArgs({ isOpen: !isOpen });
      }}
    ></div>
    ${when(content, () => renderContent(content, context))}
  `;
};
