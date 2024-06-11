import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Asset } from "@spectrum-css/asset/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as QuickAction } from "@spectrum-css/quickaction/stories/template.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import "../index.css";

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
	isCardAssetOverride = false,
	isGrid = false,
	hasQuickAction = false,
	hasActions = false,
	showAsset,
	customStyles = {},
	customClasses = [],
	id,
	role,
	...globals
}, context) => {
	const [, updateArgs] = useArgs();

	return html`
    <div
      class=${classMap({
        [rootClass]: true,
        "is-selected": isSelected,
        "is-focused": isFocused,
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--gallery`]: isGallery,
        [`${rootClass}--horizontal`]: isHorizontal,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      style=${ifDefined(styleMap(customStyles))}
      tabindex="0"
      role=${ifDefined(image || showAsset ? "figure" : isGrid ? "rowheader" : role)}
    >
      ${when(image || showAsset, () => when(showAsset || (isGallery && image), () => html`
        <div class=${classMap({
            [`${rootClass}-preview`]: true,
        })}>
          ${when(
            !isHorizontal,
            () => Asset({
              ...globals,
              image,
              preset: !image ? showAsset : undefined,
              isCardAssetOverride,
            }, context),
            () => Icon({
              ...globals,
              size: "xxl",
              iconName: showAsset === "folder" ? "File" : "Document",
            }, context)
          )}
        </div>
      `, () => html`
        <div
          class=${classMap({ [`${rootClass}-coverPhoto`]: true })}
          style=${styleMap({ "background-image": `url(${image})` })}
        ></div>
      `))}
      ${when(title || subtitle, () => html`
        <div class=${classMap({
            [`${rootClass}-body`]: true,
        })}>
          ${when(title || hasActions, () => html`
            <div class=${classMap({
                [`${rootClass}-header`]: true,
            })}>
              ${when(title, () => html`
                <div class=${classMap({
                    [`${rootClass}-title`]: true,
                })}>
                  ${title}
                </div>
              `)}
              ${when(hasActions && !isHorizontal,
                () => ActionButton({
                  ...globals,
                  iconName: "More",
                  size: "m",
                  isQuiet: true,
                  customClasses: [`${rootClass}-actionButton`],
                }, context)
              )}
            </div>
          `)}
          ${when(subtitle || description, () => html`
            <div class=${classMap({
                [`${rootClass}-content`]: true,
            })}>
              ${when(subtitle, () => html`
                <div class=${classMap({
                    [`${rootClass}-subtitle`]: true,
                })}>
                  ${subtitle}
                </div>
              `)}
              ${when(description, () => html`
                <div class=${classMap({
                    [`${rootClass}-description`]: true,
                })}>
                  ${description}
                </div>
              `)}
            </div>
          `)}
        </div>`
      )}
      ${when(footer, () => html`
        <div class=${classMap({
            [`${rootClass}-footer`]: true,
        })}>
          ${footer}
        </div>
      `)}
      ${when(hasQuickAction && !isHorizontal,
        () => QuickAction({
          ...globals,
          noOverlay: true,
          content: [
            Checkbox({
              ...globals,
              isChecked: isSelected,
              title: "Select",
            }, context),
          ],
          onclick: () => {
            updateArgs({ isSelected: !isSelected });
          },
          customClasses: [`${rootClass}-quickActions`],
        }, context)
      )}
    </div>
  `;
};
