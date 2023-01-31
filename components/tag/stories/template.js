import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
// import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
// import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";

const ClearButton = () => {
  try {
    import("@spectrum-css/clearbutton");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <button type="reset" class="spectrum-ClearButton spectrum-ClearButton--sizeM spectrum-Tag-clearButton" tabindex="-1">
      <div class="spectrum-ClearButton-fill">
        ${Icon({
          iconName: 'Cross75',
          customClasses: [`spectrum-ClearButton-icon`],
        })}
      </div>
    </button>`;
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
  rootClass = "spectrum-Tag",
  size = "m",
  icon,
  avatarUrl,
  label,
  isSelected = false,
  isEmphasized = false,
  isDisabled = false,
  isInvalid = false,
  hasClearButton = false,
  customClasses = [],
  ...globals
}) => {
  const { express } = globals;

  try {
    // Load styles for this component
    import(/* webpackPrefetch: true */ "../index.css");
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      'is-emphasized': isEmphasized,
      'is-disabled': isDisabled,
      'is-invalid': isInvalid,
      'is-selected': isSelected,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} tabindex="0">
      ${avatarUrl && !icon ? Avatar({
        ...globals,
        image: avatarUrl,
        size: '50',
      }) : ""}
      ${icon ? Icon({
        ...globals,
        iconName: icon,
        customClasses: [`${rootClass}s-itemIcon`],
      }) : ""}
      <span class="${rootClass}s-itemLabel">${label}</span>
      ${hasClearButton ? ClearButton() : ""}
    </div>
  `;
};
