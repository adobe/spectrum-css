import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

/**
 * The action button component represents an action a user can take.
 */
export default {
	title: "Action button",
	component: "ActionButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl"],
			control: "select",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isSelected: {
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isHovered: {
			name: "Hovered",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isActive: {
			name: "Active",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		hideLabel: {
			name: "Hide label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		hasPopup: {
			name: "Has popup",
			description: "True if the button triggers a popup action.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-ActionButton",
		size: "m",
		iconName: "More",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: false,
		isActive: false,
		isFocused: false,
		isHovered: false,
		isSelected: false,
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
		},
		html: {
			root: "#render-root",
		},
	},
	decorators: [
		(Story, context) => html`
      <style>
        .spectrum-Detail {
          display: inline-block;
        }
        .spectrum-Typography > div {
          border: 1px solid var(--spectrum-gray-200);
          border-radius: 4px;
          padding: 0 14px 14px;
          /* Why seafoam? Because it separates it from the component styles. */
          --mod-detail-font-color: var(--spectrum-seafoam-900);
        }
      </style>
      <div
        style=${styleMap({
          display: "flex",
          "flex-direction": "column",
          "align-items": "flex-start",
          gap: "16px",
          "--mod-detail-margin-end": "4.8px",
        })}
      >
        ${Story(context)}
      </div>
    `,
	],
};

const ActionButtons = (args) => html` <div
  style=${styleMap({
    display: "flex",
    gap: "16px",
  })}
  id="render-root"
>
  ${Template({
    ...args,
    label: "More",
    iconName: undefined,
  })}
  ${Template({
    ...args,
    label: "More",
  })}
  ${Template(args)}
  ${Template({
    ...args,
    hasPopup: true,
  })}
  <!-- Save truncation for VRTs -->
  ${when(window.isChromatic(), () =>
    Template({
      ...args,
      label: "Truncate this long content",
      iconName: undefined,
      customStyles: { maxInlineSize: "100px" },
    })
  )}
  ${when(window.isChromatic(), () =>
    Template({
      ...args,
      label: "Truncate this long content",
      customStyles: { maxInlineSize: "100px" },
    })
  )}
</div>`;

const States = (args) =>
	html` <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Default"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons(args)}
    </div>
    <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Selected"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        isSelected: true,
      })}
    </div>
    <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Focused"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        isFocused: true,
      })}
    </div>
    <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Hovered"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        isHovered: true,
      })}
    </div>
    <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Active"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        isActive: true,
      })}
    </div>
    <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Disabled"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        isDisabled: true,
      })}
    </div>
    <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: ["Disabled + selected"],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        isSelected: true,
        isDisabled: true,
      })}
    </div>`;

const Sizes = (args) =>
	html` ${["s", "m", "l", "xl"].map((size) => {
    return html` <div>
      ${Typography({
        semantics: "detail",
        size: "s",
        content: [
          {
            xxs: "Extra-extra-small",
            xs: "Extra-small",
            s: "Small",
            m: "Medium",
            l: "Large",
            xl: "Extra-large",
            xxl: "Extra-extra-large",
          }[size],
        ],
        customClasses: ["chromatic-ignore"],
      })}
      ${ActionButtons({
        ...args,
        size,
      })}
    </div>`;
  })}`;

const Variants = (args) =>
	html` ${window.isChromatic()
    ? html` <div class="spectrum-Typography">
          ${Typography({
            semantics: "detail",
            size: "l",
            content: ["Standard"],
            customClasses: ["chromatic-ignore"],
          })}
          <div
            style=${styleMap({
              display: "flex",
              "flex-direction": "column",
              gap: "4.8px",
            })}
          >
            ${States(args)}
          </div>
        </div>
        <div class="spectrum-Typography">
          ${Typography({
            semantics: "detail",
            size: "l",
            content: ["Emphasized"],
            customClasses: ["chromatic-ignore"],
          })}
          <div
            style=${styleMap({
              display: "flex",
              "flex-direction": "column",
              gap: "4.8px",
            })}
          >
            ${States({
              ...args,
              isEmphasized: true,
            })}
          </div>
        </div>
        <div class="spectrum-Typography">
          ${Typography({
            semantics: "detail",
            size: "l",
            content: ["Quiet"],
            customClasses: ["chromatic-ignore"],
          })}
          <div
            style=${styleMap({
              display: "flex",
              "flex-direction": "column",
              gap: "4.8px",
            })}
          >
            ${States({
              ...args,
              isQuiet: true,
            })}
          </div>
        </div>
        <div class="spectrum-Typography">
          ${Typography({
            semantics: "detail",
            size: "l",
            content: ["Sizing"],
            customClasses: ["chromatic-ignore"],
          })}
          <div
            style=${styleMap({
              display: "flex",
              "flex-direction": "column",
              gap: "4.8px",
            })}
          >
            ${Sizes(args)}
          </div>
        </div>`
    : ActionButtons(args)}`;

export const Default = Variants.bind({});
Default.args = {};

export const StaticBlack = Variants.bind({});
StaticBlack.args = {
	staticColor: "black",
};

export const StaticWhite = Variants.bind({});
StaticWhite.args = {
	/* Force dark mode to make typography readable */
	color: "dark",
	staticColor: "white",
};

export const WithForcedColors = Variants.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: { forcedColors: "active" },
};
