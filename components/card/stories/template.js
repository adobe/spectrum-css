import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Asset } from "@spectrum-css/asset/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

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
	isImageFill = false,
	isGrid = false,
	hasActions = false,
	hasQuickAction = false,
	showAsset,
	customStyles = {},
	customClasses = [],
	id = getRandomId("card"),
	role,
} = {}, context = {}) => {
	const { updateArgs } = context;

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
      style=${styleMap(customStyles)}
      tabindex="0"
      role=${ifDefined(
        image || showAsset ? "figure" : isGrid ? "rowheader" : role
      )}
			@focusin=${function() {
				updateArgs({ isFocused: true });
			}}
			@focusout=${function() {
				updateArgs({ isFocused: false });
			}}
    >
      ${when(image || showAsset, () =>
        when(
          showAsset || (isGallery && image) || isQuiet,
          () => html`
            <div
              class=${classMap({
                [`${rootClass}-preview`]: true,
              })}
            >
              ${when(
                !isHorizontal,
                () =>
                  Asset(
                    {
                      image,
                      preset: showAsset,
                      isImageFill,
                    },
                    context
                  ),
                () =>
                  Icon(
                    {
                      size: "xxl",
                      iconName: showAsset === "folder" ? "Folder" : "Document",
                      setName: "workflow",
                    },
                    context
                  )
              )}
            </div>
          `,
          () => html`
            <div
              class=${classMap({ [`${rootClass}-coverPhoto`]: true })}
              style=${styleMap({ "background-image": `url(${image})` })}
            ></div>
            ${Divider({
              size: "s",
              customClasses: [`${rootClass}-divider`],
            }, context)}
          `
        )
      )}
      ${when(
        title || subtitle,
        () =>
          html` <div
            class=${classMap({
              [`${rootClass}-body`]: true,
            })}
          >
            ${when(
              title || hasActions,
              () => html`
                <div
                  class=${classMap({
                    [`${rootClass}-header`]: true,
                  })}
                >
                  ${when(
                    title,
                    () => html`
                      <div
                        class=${classMap({
                          [`${rootClass}-title`]: true,
                        })}
                      >
                        ${title}
                      </div>
                    `
                  )}
                  ${when(hasActions && !isHorizontal, () =>
                    ActionButton(
                      {
                        iconName: "More",
                        iconSet: "workflow",
                        size: "m",
                        isQuiet: true,
                        customClasses: [`${rootClass}-actionButton`],
                      },
                      context
                    )
                  )}
                </div>
              `
            )}
            ${when(
              subtitle || description,
              () => html`
                <div
                  class=${classMap({
                    [`${rootClass}-content`]: true,
                  })}
                >
                  ${when(
                    subtitle,
                    () => html`
                      <div
                        class=${classMap({
                          [`${rootClass}-subtitle`]: true,
                        })}
                      >
                        ${subtitle}
                      </div>
                    `
                  )}
                  ${when(
                    description,
                    () => html`
                      <div
                        class=${classMap({
                          [`${rootClass}-description`]: true,
                        })}
                      >
                        ${description}
                      </div>
                    `
                  )}
                </div>
              `
            )}
          </div>`
      )}
      ${when(
        footer && !isQuiet && !isHorizontal && !isGallery,
        () => html`
          <div
            class=${classMap({
              [`${rootClass}-footer`]: true,
            })}
          >
            ${footer}
          </div>
        `
      )}
      ${when(hasQuickAction && !isHorizontal, () =>
        html`
          <div
            class=${classMap({
              [`${rootClass}-quickActions`]: true,
            })}
            @click=${function() {
              updateArgs({ isSelected: !isSelected });
            }}
          >
            ${Checkbox(
              {
                isChecked: isSelected,
                title: "Select",
              },
              context
            )}
          </div>`
      )}
    </div>
  `;
};
