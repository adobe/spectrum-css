import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "./index.css";

export const Template = ({
	rootClass = "spectrum-BackgroundLayers",
	environment = "edit",
  layer = "layer1",
  size = 120,
	customStyles = {},
	customClasses = [],
	id = getRandomId("background-layers"),
}) => {
  let previousZIndex = 0;

	return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}-${environment}-${layer}`]: true,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
			id=${ifDefined(id)}
			style=${styleMap({
        inlineSize: `${size}px`,
        blockSize: `${size}px`,
        borderRadius: "10px",
        position: "absolute",
        ...customStyles,
        display: "grid",
        placeItems: "center",
      })} @mouseover=${(event) => {
        previousZIndex = event.target.style.zIndex;
        event.target.style.zIndex = "100";
      }} @mouseout=${(event) => {
        event.target.style.zIndex = previousZIndex;
      }}>
        <span>${layer}</span>
      </div>
  `;
};
