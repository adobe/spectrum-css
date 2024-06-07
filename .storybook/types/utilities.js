import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

const flexStack = {
  "display": "flex",
  "flex-direction": "column",
  "align-items": "flex-start",
};

const bordered = {
  "border": "1px solid var(--spectrum-gray-200)",
  "border-radius": "4px",
  "padding": "0 14px 14px",
};

export const testContainerWithBorder = {
  ...flexStack,
  "gap": "4.8px",
  ...bordered,
  /* Why seafoam? Because it separates it from the component styles. */
  "--mod-detail-font-color": "var(--spectrum-seafoam-900)",
};

export const testContainerStacked = {
  ...flexStack,
  "gap": "10px",
  "--mod-detail-margin-end": "6px",
}

export const markupWithLabel = (
  label,
  content,
  { withTestBorder = false, semantics = "detail", size = "l" } = {}
) => html`
  <div class="spectrum-Typography">
    ${Typography({
      semantics,
      size,
      content: [label],
      customClasses: ["chromatic-ignore"],
      customStyles:
        semantics === "detail"
          ? {
              display: "inline-block",
            }
          : undefined,
    })}
    <div style=${styleMap(!withTestBorder ? testContainerStacked : testContainerWithBorder)}>
      ${content}
    </div>
  </div>
`;
