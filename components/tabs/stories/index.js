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
  withIcons: {
    name: "Label with Icons",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "Component",
    },
    control: "boolean",
  },
  iconOnly: {
    name: "Icon only",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "Component",
    },
    control: "boolean",
  }
};

export const overflowProps = {
  selectorStyle: {
    "width": "60px",
  },
  overflow: true,
};