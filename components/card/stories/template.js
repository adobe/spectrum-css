import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { useArgs } from "@storybook/client-api";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as QuickAction } from "@spectrum-css/quickaction/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Asset } from "@spectrum-css/asset/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-Card",
  size = "m",
  image,
  title,
  subtitle,
  description,
  footer,
  isSelected = false,
  isHorizontal = false,
  isQuiet = false,
  isGallery = false,
  isGrid = false,
  isDropTarget = false,
  hasQuickAction = false,
  hasActions = false,
  showAsset,
  customClasses = [],
  onclick,
  id,
  role,
  ...globals
}) => {
  const [_, updateArgs] = useArgs();

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        'is-selected': isSelected,
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--gallery`]: isGallery,
        [`${rootClass}--horizontal`]: isHorizontal,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      tabindex="0"
      role=${ifDefined(image || showAsset ? "figure" : isGrid ? "rowheader" : role)}
    >
      ${image || showAsset ?
        (showAsset || (isGallery && image) ? html`
          <div class="spectrum-Card-preview">
            ${!isHorizontal ? Asset({
              ...globals,
              image,
              preset: !image ? showAsset : undefined,
            }) : Icon({
              ...globals,
              size: "xxl",
              iconName: showAsset === "folder" ? "File" : "Document",
            })}
          </div>` : html`
          <div class="${rootClass}-coverPhoto" style="background-image: url(${image})"></div>`
          ) :
        ''}
      ${title || subtitle ? html`
        <div class="${rootClass}-body">
          ${title || hasActions ? html`
            <div class="${rootClass}-header">
              ${title ? html`
                <div class="${rootClass}-title spectrum-Heading spectrum-Heading--sizeXS">${title}</div>` : ''}
              ${hasActions && !isHorizontal ? html`
                <div class="${rootClass}-actionButton">
                  ${ActionButton({
                    ...globals,
                    icon: "More",
                    variant: "overBackground",
                    isQuiet: true
                  })}
                </div>` : ''}
            </div>` : ''}
          ${subtitle || description ? html`
            <div class="${rootClass}-content">
              ${subtitle ? html`<div class="${rootClass}-subtitle spectrum-Detail spectrum-Detail--sizeS">
                ${subtitle}
              </div>` : ''}
              ${description ? html`<div class="spectrum-Card-description">${description}</div>` : ''}
            </div>` : ''}
        </div>` : ''}
    ${footer ? html`
      <div class="${rootClass}-footer">${footer}</div>`: ''}
    ${hasQuickAction && !isHorizontal ? QuickAction({
      ...globals,
      noOverlay: true,
      content: [
        Checkbox({
          ...globals,
          isChecked: false,
          title: "Select",
        }),
      ],
      onclick: () => {
        updateArgs({ isSelected: !isSelected });
      },
      customClasses: [`${rootClass}-quickActions`],
    }) : ''}
  </div>
  `;
};
