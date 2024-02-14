import { html } from "lit";
import { Template } from "./template";

export const argTypes = {
  items: { table: { disable: true }},
  selectorStyle: { table: { disable: true }},
  style: { table: { disable: true }},
  overflow: { table: { disable: true }},
  size: {
    name: "Size",
    type: { name: "string", required: true },
    table: {
      type: { summary: "string" },
      category: "Component",
    },
    options: ["s", "m", "l", "xl"],
    control: "select"
  },
  orientation: { table: { disable: true }},
  isQuiet: {
    name: "Quiet",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "State",
    },
    control: "boolean",
  },
  isEmphasized: {
    name: "Emphasized",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "State",
    },
    control: "boolean",
  },
  isCompact: {
    name: "Compact",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "State",
    },
    control: "boolean",
    if: { arg: 'isQuiet', truthy: true },
  },
  labelWithIcons: {
    name: "Label with Icons",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "Component",
    },
    control: "boolean",
    if: { arg: 'overflow', truthy: false },
  },
  iconOnly: {
    name: "Icon only",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "Component",
    },
    control: "boolean",
    if: { arg: 'overflow', truthy: false },
  }
};

export const TabsGroup = ({
  ...args
  }) => {

    return html`
        <div style="display: flex; flex-direction: ${args.orientation === "horizontal" ? "column" : "row"}; gap: 2rem;">
          ${Template({
            ...args
          })}
          ${Template({
            ...args,
            labelWithIcons: true
          })}
          ${Template({
            ...args,
            iconOnly: true
            })}
        </div>
      `
  };