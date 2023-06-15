// Import the component markup template
import { Template } from "./template";

export default {
  title: "Menu",
  description:
    "A menu is used for creating a menu list. The various elements inside a menu can be: a menu group, a menu item, or a menu divider. Often a menu will appear in a popover so that it displays as a togglig menu.",
  component: "Menu",
  argTypes: {
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isSelectable: {
      name: "Selectable",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    labelledby: { table: { disable: true } },
    items: { table: { disable: true } },
    role: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-Menu",
    isDisabled: false,
    isSelectable: true,
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-Menu-item"],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("menu")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Deselect" },
    { label: "Select Inverse" },
    { label: "Feather..." },
    { label: "Select and Mask..." },
    { type: "divider" },
    { label: "Save Selection" },
    { label: "Make Work Path", isDisabled: true },
  ],
};

export const MenuWithSections = Template.bind({});
MenuWithSections.args = {
  items: [
    {
      heading: "Section Heading",
      idx: 1,
      items: [
        { label: "Action 1" },
        { label: "Action 2" },
        { label: "Action 3" },
      ],
    },
    { type: "divider" },
    {
      heading: "Section Heading",
      idx: 2,
      items: [
        { label: "Edit", iconName: "Edit" },
        { label: "Copy", iconName: "Copy", isDisabled: true },
      ],
      isDisabled: true,
    },
  ],
};

export const MenuWithCheckbox = Template.bind({});
MenuWithCheckbox.args = {
  role: "listbox",
  subrole: "option",
  isSelectable: true,
  items: [
    {
      idx: 1,
      heading: "San Francisco",
      id: "menu-heading-sf",
      items: [
        { label: "Financial District", isSelected: true },
        { label: "South of Market" },
        { label: "North Beach" },
      ],
    },
    { type: "divider" },
    {
      idx: 2,
      heading: "Oakland",
      id: "menu-heading-oak",
      items: [
        { label: "City Center" },
        { label: "Jack London Square", isDisabled: true },
        {
          label: `My best friend's mom's house in the burbs just off Silverado street`,
          isSelected: true,
          isChecked: true,
        },
      ],
      isDisabled: true,
    },
  ],
};

// export const Submenu = Template.bind({});
// Submenu.args = {
//   items: [
//     {
//       heading: 'Notifications',
//       idx: 1,
//       items: [
//         { label: 'Push notifications', isToggle: true },
//         { label: 'Badges', isToggle: true,  },
//       ],
//     },
//     { label: 'Deselect' },
//     { label: 'Select Inverse' },
//     {
//       label: 'Feather...',
//       items: [
//         { label: 'Deselect' },
//         { label: 'Select and Mask...' },
//       ]
//     },
//     { label: 'Select and Mask...' },
//     { label: 'Save Selection' }
//   ]
// };
