import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export const argTypes = {
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
        name: "StaticColor",
        type: { name: "string" },
        table: {
            type: { summary: "string" },
            category: "Advanced",
        },
        options: ["white", "black"],
        control: "select",
    },
};

export const ActionButtons = (args) => {
    const content = html`${Template({
        ...args,
        label: "More",
        iconName: undefined,
    })}
    ${Template({
        ...args,
        label: "More",
    })}
    ${Template({
        ...args,
    })}
    ${Template({
        ...args,
        hasPopup: true,
    })}`;

    return args.staticColor
        ? html`<div
              style=${styleMap({
                  backgroundColor: "rgb(15, 121, 125)", // : "rgb(181, 209, 211)",
                  margin: "-30px -20px",
                  height: "100%",
                  width: "100%",
                  padding: "var(--spectrum-spacing-400)",
              })}
          >
              ${content}
          </div>`
        : content;
};
