export const argTypes = {
  items: { table: { disable: true }},
  selectorStyle: { table: { disable: true }},
  style: { table: { disable: true }},
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
  truncate: {
    name: "Truncate",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      category: "State",
    },
    control: "boolean",
  },
};

const items = [
  {
    id: "tab-1",
    label: "Tab 1",
    isSelected: true
  },
  {
    id: "tab-2",
    label: "Tab 2",
  },
  {
    id: "tab-3",
    label: "Tab 3",
  }
];

const itemsWithIcons = [
  {
    id: "tab-1",
    label: "Tab 1",
    icon: "Folder",
    isSelected: true
  },
  {
    id: "tab-2",
    label: "Tab 2",
    icon: "Image"
  },
  {
    id: "tab-3",
    label: "Tab 3",
    icon: "Document"
  }
]

const itemsIconOnly = [
  {
    id: "tab-1",
    icon: "Folder",
    isSelected: true
  },
  {
    id: "tab-2",
    icon: "Image"
  },
  {
    id: "tab-3",
    icon: "Document"
  }
]

/* Set default args and export for other stories */
export const horizontalProps = {
  selectorStyle: {
    "width": "35px",
  },
  items: items
};

export const horizontalWithIconsProps = {
  selectorStyle: {
    "width": "60px",
  },
  items: itemsWithIcons
};

export const horizontalIconOnlyProps = {
  selectorStyle: {
    "width": "20px",
  },
  items: itemsIconOnly
};

export const truncateProps = {
  selectorStyle: {
    "width": "60px",
  },
  style: {
    "inline-size" : "90px",
  },
  truncate: true,
  items: items
};


/* Set default args and export for other stories */
export const verticalProps = {
  selectorStyle: {
    "height": "46px",
    "top": "0"
  },
  items: items
};

export const verticalWithIconsProps = {
  selectorStyle: {
    "height": "46px",
    "top": "0"
  },
  items: itemsWithIcons
};

export const verticalIconOnlyProps = {
  selectorStyle: {
    "height": "46px",
    "top": "0"
  },
  items: itemsIconOnly
};
