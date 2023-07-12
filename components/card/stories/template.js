import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/client-api";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as QuickAction } from "@spectrum-css/quickaction/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Asset } from "@spectrum-css/asset/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";

import '../index.css';

export const Template = ({
  rootClass = "spectrum-Card",
  image,
  title,
  subtitle,
  description,
  footer,
  isFocused = false,
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
        'is-focused': isFocused,
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--gallery`]: isGallery,
        [`${rootClass}--horizontal`]: isHorizontal,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      tabindex="0"
      role=${ifDefined(image || showAsset ? "figure" : isGrid ? "rowheader" : role)}
    >
      ${when(
        image || showAsset,
        () => when(
          showAsset || (isGallery && image),
          () => html`
            <div class="spectrum-Card-preview">
              ${when(
                !isHorizontal,
                () => Asset({
                  ...globals,
                  image,
                  preset: !image ? showAsset : undefined,
                }),
                () => Icon({
                  ...globals,
                  size: "xxl",
                  iconName: showAsset === "folder" ? "File" : "Document",
                })
              )}
            </div>`,
          () => html`<div class="${rootClass}-coverPhoto" style="background-image: url(${image})"></div>`
        )
      )}
      ${when(
        title || subtitle,
        () => html`
          <div class="${rootClass}-body">
            ${when(
              title || hasActions,
              () => html`
                <div class="${rootClass}-header">
                ${when(title, () => html`<div class="${rootClass}-title spectrum-Heading spectrum-Heading--sizeXS">${title}</div>`)}
                ${when(hasActions && !isHorizontal,
                  () => html`
                    <div class="${rootClass}-actionButton">
                      ${ActionButton({
                        ...globals,
                        iconName: "More",
                        variant: "overBackground",
                        size: "m",
                        isQuiet: true
                      })}
                    </div>`
                )}
                </div>`
            )}
            ${when(
              subtitle || description,
              () => html`
              <div class="${rootClass}-content">
                ${when(subtitle, () => html`<div class="${rootClass}-subtitle spectrum-Detail spectrum-Detail--sizeS">${subtitle}</div>`)}
                ${when(description, () => html`<div class="${rootClass}-description">${description}</div>`)}
              </div>`
            )}
          </div>`
      )}
      ${when(footer, () => html`
        <div class="${rootClass}-footer">
          ${footer}
        </div>`)}
      ${when(
        hasQuickAction && !isHorizontal,
        () => QuickAction({
          ...globals,
          noOverlay: true,
          content: [
            Checkbox({
              ...globals,
              isChecked: isSelected,
              title: "Select",
            }),
          ],
          onclick: () => {
            updateArgs({ isSelected: !isSelected });
          },
          customClasses: [`${rootClass}-quickActions`],
        })
      )}
    </div>`;
};
