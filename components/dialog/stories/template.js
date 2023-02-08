import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

// @todo: import { Template as Modal } from '../../modal/stories/template.js';
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";

export const Template = ({
  rootClass = "spectrum-Dialog",
  isDismissable = true,
  showModal = false,
  heading,
  content = [],
  customClasses = [],
  ...globals
}) => {
  const { scale } = globals;
  try {
    import(/* webpackPrefetch: true */ "@spectrum-css/modal");

    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
    import(/* webpackPrefetch: true */ "../skin.css");
  } catch (e) {
    console.warn(e);
  }

  const Dialog = html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${scale}`]: true,
        [`${rootClass}--dismissable`]: isDismissable,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(globals.id)}
      role="dialog"
      tabindex="-1"
      aria-modal="true"
    >
      <div class="${rootClass}-grid">
        ${heading
          ? html`
              <h1 class="${rootClass}-heading">${heading}</h1>
              ${Divider({
                horizontal: true,
                customClasses: [`${rootClass}-divider`],
                ...globals,
              })}
            `
          : ""}
        <section class="${rootClass}-content">${content}</section>
        ${isDismissable
          ? CloseButton({
              customClasses: [`${rootClass}-closeButton`],
              ...globals,
            })
          : ""}
      </div>
    </div>
    ${showModal ? html`</div></div>` : ""}
  `;

  if (showModal) {
    return html`
      <div class="spectrum-Modal-wrapper">
        <div class="spectrum-Modal is-open">${Dialog}</div>
      </div>
    `;
  } else {
    return Dialog;
  }
};
