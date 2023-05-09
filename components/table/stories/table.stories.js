// Import the component markup template
import { Template } from "./template";

export default {
  title: "Table",
  description:
    "A table is used to create a container for displaying information. It allows users to sort, compare, and take action on large amounts of data.",
  component: "Table",
  argTypes: {
    size: {
      name: "Size",
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l", "xl"],
      control: "select",
    },
    density: {
      name: "Density",
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["standard", "compact", "spacious"],
      control: "select",
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
      name: "Emphasized",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    useDivs: {
      name: "Use Divs for Markup",
      description: "Use 'div' elements for all of the table markup instead of the 'table' element.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    rowItems: {
      table: { disable: true }
    },
  },
  args: {
    rootClass: "spectrum-Table",
    size: "m",
    density: "standard",
    isQuiet: false,
    isEmphasized: true,
    useDivs: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("table")
        ? "migrated"
        : undefined,
    },
  },
  // decorators: [
  //   (StoryFn) => { return html`<div>${StoryFn()}</div>`; }
  // ]
};

export const Default = Template.bind({});
Default.args = {
  rowItems: [
    {
      cellContent: "Table Row Alpha",
    },
    {
      cellContent: "Table Row Bravo",
    },
    {
      cellContent: "Table Row Charlie",
      isSelected: true,
    },
    {
      cellContent: "Table Row Delta",
    },
    {
      cellContent: "Summary Row",
      isSummaryRow: true,
    },
  ]
};

export const MultiSelect = Template.bind({});
MultiSelect.storyName = "Multi-select";
MultiSelect.args = {
  rowItems: [
    {
      cellContent: "Table Row Alpha",
      showCheckbox: true,
    },
    {
      cellContent: [
        "Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Bravo",
        "Table Row Bravo. Lorem ipsum dolor sit amet.",
      ],
      showCheckbox: true,
      isSelected: true,
    },
    {
      cellContent: "Table Row Charlie",
      showCheckbox: true,
      isSelected: true,
    },
    {
      cellContent: "Table Row Delta",
      showCheckbox: true,
    },
    {
      cellContent: "Table Row Echo",
      showCheckbox: true,
    },
  ]
};

export const SectionHeader = Template.bind({});
SectionHeader.args = {
  rowItems: [
    {
      cellContent: "Section Header",
      isSectionHeader: true,
    },
    {
      cellContent: "Table Row Alpha",
    },
    {
      cellContent: "Table Row Bravo",
    },
    {
      cellContent: "Table Row Charlie",
    },
    {
      cellContent: "Another Section Header",
      isSectionHeader: true,
    },
    {
      cellContent: "Table Row Delta",
    },
    {
      cellContent: "Table Row Echo",
    },
  ]
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  rowItems: [
    {
      cellContent: "Table Row Alpha",
      isCollapsible: true,
      isExpanded: true,
      tier: 0,
      ariaControls: "table-cr-bravo table-cr-delta",
    },
    {
      cellContent: "Table Row Bravo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      isCollapsible: true,
      tier: 1,
      ariaControls: "table-cr-charlie",
      id: "table-cr-bravo",
    },
    {
      cellContent: [
        "Table Row Charlie",
        "Default Not Visible",
        "Default Not Visible",
      ],
      isCollapsible: true,
      isHidden: true,
      tier: 2,
      id: "table-cr-charlie",
    },
    {
      cellContent: "Table Row Delta",
      isSelected: true,
      isCollapsible: true,
      isExpanded: true,
      tier: 1,
      ariaControls: "table-cr-echo table-cr-foxtrot",
      id: "table-cr-delta",
    },
    {
      cellContent: "Table Row Echo",
      tier: 2,
      isLastTier: true,
      isCollapsible: true,
      id: "table-cr-echo",
    },
    {
      cellContent: "Table Row Foxtrot",
      tier: 2,
      isLastTier: true,
      isCollapsible: true,
      id: "table-cr-foxtrot",
    },
    {
      cellContent: "Summary Row",
      isSummaryRow: true,
    },
  ]
};