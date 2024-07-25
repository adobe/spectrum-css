import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Asset } from "@spectrum-css/asset/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as QuickAction } from "@spectrum-css/quickaction/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = (
	{
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
	},
	context
) => {
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
          showAsset || (isGallery && image),
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
                      preset: !image ? showAsset : undefined,
                      isCardAssetOverride,
                    },
                    context
                  ),
                () =>
                  Icon(
                    {
                      size: "xxl",
                      iconName: showAsset === "folder" ? "File" : "Document",
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
        footer,
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
        QuickAction(
          {
            noOverlay: true,
            content: [
              Checkbox(
                {
                  isChecked: isSelected,
                  title: "Select",
                },
                context
              ),
            ],
            onclick: function() {
              updateArgs({ isSelected: !isSelected });
            },
            customClasses: [`${rootClass}-quickActions`],
          },
          context
        )
      )}
    </div>
  `;
};

const States = (args, context) => html`
  <div
    style=${styleMap({
      display: "flex",
      "flex-direction": "row",
      "flex-wrap": "wrap",
      gap: "32px",
    })}
  >
    ${[
      {},
      {
        heading: "Selected",
        isSelected: true,
      },
      {
        heading: "Focused",
        isFocused: true,
      },
    ].map(
      ({ heading, ...item }) => html`
        <div>
          ${Typography(
              {
                semantics: "heading",
                size: "m",
                weight: "light",
                // this whitespace helps the boxes align better when there's not a headings
                content: [heading ?? html`&nbsp;`],
                customClasses: ["chromatic-ignore"],
              },
              context
            )}
          <div>
            ${Template(
              {
                ...args,
                ...item,
              },
              context
            )}
          </div>
        </div>
      `
    )}
  </div>
`;

export const CardGroup = (args, context) => html`
  <div
    style=${styleMap({
      display: window.isChromatic() ? "none" : "contents",
    })}
  >
    ${Template(args, context)}
  </div>
  <div
    style=${styleMap({
      display: window.isChromatic() ? "flex" : "none",
      "flex-direction": "column",
      "align-items": "flex-start",
      gap: "32px",
    })}
  >
    ${[
      {
        heading: "Default",
      },
      {
        heading: "No image",
        title: "Card title",
        description: "Optional description that should be one or two lines",
        footer: undefined,
        image: undefined,
      },
      {
        heading: "Horizontal",
        title: "Card title",
        description: "jpg",
        showAsset: "file",
        isQuiet: false,
        isHorizontal: true,
        hasActions: false,
        hasQuickAction: false,
        footer: undefined,
      },
      {
        heading: "Quiet",
        title: "Name",
        showAsset: "image",
        image: "example-ava@2x.png",
        description: "10/15/18",
        isQuiet: true,
        footer: undefined,
      },
      {
        heading: "Quiet file",
        title: "FileName",
        description: "PDF",
        showAsset: "file",
        image: undefined,
        isQuiet: true,
        footer: undefined,
      },
      {
        heading: "Quiet folder",
        title: "Name",
        showAsset: "folder",
        description: "10/15/18",
        isQuiet: true,
        image: undefined,
        footer: undefined,
      },
      {
        heading: "Asset preview",
        title: "Card title",
        showAsset: "image",
        image: "example-card-portrait.png",
        description: "jpg",
        hasActions: false,
        isCardAssetOverride: true,
        customStyles: {
          width: "200px",
        },
        footer: undefined,
      },
      {
        heading: "Gallery",
        title: "Card title",
        showAsset: "image",
        image: "example-card-landscape.png",
        description: "jpg",
        isGallery: true,
        isCardAssetOverride: true,
        customStyles: {
          width: "700px",
        },
        footer: undefined,
      },
      {
        heading: "Text wrap",
        title: "Card title that is longer and should wrap",
        customStyles: { "max-inline-size": "205px" },
        footer: undefined,
        withStates: false,
      },
    ].map(
      ({ heading, withStates = true, ...item }) => html`
        <div
          class="spectrum-Typography"
        >
          ${when(heading, () =>
            Typography(
              {
                semantics: "heading",
                size: "l",
                content: [heading],
                customClasses: ["chromatic-ignore"],
              },
              context
            )
          )}
          <div
            style=${styleMap({
              padding: "12px",
              border: "1px solid var(--spectrum-gray-200)",
              "border-radius": "4px",
            })}
          >
            ${when(
              withStates,
              () => States({ ...args, ...item }, context),
              () => Template({ ...args, ...item }, context)
            )}
          </div>
        </div>
      `
    )}
  </div>
`;
