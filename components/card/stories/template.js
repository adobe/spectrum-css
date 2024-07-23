import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Asset } from "@spectrum-css/asset/stories/template.js";
import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Variants, getRandomId } from "@spectrum-css/preview/decorators";
import { Template as QuickAction } from "@spectrum-css/quickaction/stories/template.js";
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
			@focusin=${() => {
				updateArgs({ isFocused: true });
			}}
			@focusout=${() => {
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
            onclick: () => {
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

export const CardGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "No image",
			title: "Card title",
			description: "Optional description that should be one or two lines",
			footer: undefined,
			image: undefined,
		},
		{
			testHeading: "Horizontal",
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
			testHeading: "Quiet",
			title: "Name",
			showAsset: "image",
			image: "example-ava@2x.png",
			description: "10/15/18",
			isQuiet: true,
			footer: undefined,
		},
		{
			testHeading: "Quiet file",
			title: "FileName",
			description: "PDF",
			showAsset: "file",
			image: undefined,
			isQuiet: true,
			footer: undefined,
		},
		{
			testHeading: "Quiet folder",
			title: "Name",
			showAsset: "folder",
			description: "10/15/18",
			isQuiet: true,
			image: undefined,
			footer: undefined,
		},
		{
			testHeading: "Asset preview",
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
			testHeading: "Gallery",
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
			testHeading: "Text wrap",
			title: "Card title that is longer and should wrap",
			customStyles: { "max-inline-size": "205px" },
			footer: undefined,
			withStates: false,
		},
	],
	stateData: [
		{
			testHeading: "Selected",
			isSelected: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
	]
});
