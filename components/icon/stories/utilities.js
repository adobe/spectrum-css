import { Template as CloseButton } from "../../closebutton/stories/template.js";
import { Template } from "./template.js";

export const fetchIconSVG = ({ iconName, setName, ...globals }) => {
  const { scale } = globals;
  let icon;

  // Check adobe workflow icons first
  if (!setName || setName === "workflow") {
    try {
      icon = require(`!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/${
        scale !== "medium" ? `24` : `18`
      }/${iconName}.svg`);
    } catch (e) {
      console.warn(e);
    }

    if (icon && icon.default) {
      return {
        icon: icon.default,
        setName: "workflow",
      };
    }
  }

  // Check the ui kit for icon set if not yet found
  try {
    icon = require(`!!raw-loader!@spectrum-css/icon/${
      scale ? scale : "medium"
    }/${iconName}.svg`);
  } catch (e) {
    console.warn(e);
  }

  if (icon && icon.default) {
    return {
      icon: icon.default,
      setName: "ui",
    };
  }

  return;
};

export const successToast = ({ scale }) => html` <div
  class="spectrum-Toast spectrum-Toast--positive"
  id="success"
  hidden
>
  ${Template({
    iconName: "CheckmarkCircle",
    size: "s",
    scale,
    customClasses: ["spectrum-Toast-typeIcon"],
    useRef: true,
    setName: "workflow",
  })}
  <div class="spectrum-Toast-body">
    <div class="spectrum-Toast-content">Icon filename copied to clipboard.</div>
  </div>
  <div class="spectrum-Toast-buttons">
    ${CloseButton({
      scale,
      size: "m",
      staticColor: "white",
      onClick: () => {
        toggleToast("failure", false);
      },
    })}
  </div>
</div>`;

export const failToast = ({ scale }) => html` <div
  class="spectrum-Toast spectrum-Toast--negative"
  id="failure"
  hidden
>
  ${Template({
    iconName: "Alert",
    size: "s",
    scale,
    customClasses: ["spectrum-Toast-typeIcon"],
    useRef: true,
    setName: "workflow",
  })}
  <div class="spectrum-Toast-body">
    <div class="spectrum-Toast-content">
      Failed to copy icon filename to clipboard.
    </div>
  </div>
  <div class="spectrum-Toast-buttons">
    ${CloseButton({
      scale,
      size: "m",
      staticColor: "white",
      onClick: () => {
        toggleToast("failure", false);
      },
    })}
  </div>
</div>`;

export const toggleToast = (id, open = true) => {
  const toast = document.querySelector(`#${id}`);
  if (!toast) return;
  if (open) toast.removeAttribute("hidden");
  else toast.setAttribute("hidden", "");
};
