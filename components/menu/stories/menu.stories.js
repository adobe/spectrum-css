// Import the component markup template
import { Template } from "./template";

export default {
  title: "Components/Menu",
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
    selectionMode: {
      name: "Selection Mode",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      options: ["none", "single", "multiple"],
			control: "select",
    },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
    hasActions: { table: { disable: true } },
    labelledby: { table: { disable: true } },
    items: { table: { disable: true } },
    role: { table: { disable: true } },
    subrole: { table: { disable: true } },
    customStyles: {
      description: "Custom styles for testing the story, applied to the parent element.",
      table: {
        type: { summary: "object" },
        category: "Storybook Only",
      },
      if: { arg: 'customStyles' }
    }
  },
  args: {
    rootClass: "spectrum-Menu",
    isDisabled: false,
    selectionMode: "none",
    size: "m",
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
Default.storyName = "Standard with Dividers";
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

export const MenuWithCheckmark = Template.bind({});
MenuWithCheckmark.args = {
  role: "listbox",
  subrole: "option",
  selectionMode: "single",
  items: [
    {
      idx: 1,
      heading: "San Francisco",
      id: "menu-heading-sf",
      items: [
        { label: "Financial District" },
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

export const IconsAndDescriptions = Template.bind({});
IconsAndDescriptions.parameters = {
	docs: {
		description: {
			story:
				"A few different variants and states are demonstrated in this story. Menu items are shown with icons, with short descriptions, and with both. A selected item and a disabled item are shown for each. A max-width is set for the story, to test the text wrapping.",
		},
	},
};
IconsAndDescriptions.args = {
  role: "listbox",
  subrole: "option",
  customStyles: {'max-width': '400px'},
  items: [
    {
      idx: 1,
      heading: "With Icons",
      id: "menu-heading-with-icons",
      items: [
        {
          label: "Default Menu Item",
          iconName: "Export"
        },
        {
          label: "Focused Menu Item",
          iconName: "FolderOpen",
          isFocused: true
        },
        {
          label: "A Menu Item With a Longer Label That Causes The Text to Wrap",
          iconName: "Share",
        },
        {
          label: "Disabled Menu Item",
          iconName: "Share",
          isDisabled: true,
        },
      ],
    },
    {
      idx: 2,
      heading: "With Short Descriptions",
      id: "menu-heading-short-desc",
      items: [
        {
          label: "Default Menu Item",
          description: "Short description",
        },
        {
          label: "Focused Menu Item",
          description: "Another short description",
          isFocused: true,
        },
        {
          label: "A Menu Item With a Longer Label That Causes The Text to Wrap",
          description: "A description that is longer than average and is forced to wrap with an example max width.",
        },
        {
          label: "Disabled Menu Item",
          description: "Menu item description.",
          isDisabled: true,
        },
      ],
    },
    {
      idx: 3,
      heading: "With Icons and Short Descriptions",
      id: "menu-heading-desc-and-icon",
      items: [
        {
          label: "Default Menu Item",
          iconName: "Export",
          description: "Short description",
        },
        {
          label: "Focused Menu Item",
          iconName: "FolderOpen",
          description: "Another short description",
          isFocused: true,
        },
        {
          label: "A Menu Item With a Longer Label That Causes The Text to Wrap",
          iconName: "Share",
          description: "A description that is longer than average and is forced to wrap with an example max width.",
        },
        {
          label: "Disabled Menu Item",
          iconName: "Share",
          description: "Menu item description.",
          isDisabled: true,
        },
      ],
    },
  ],
};

export const SingleSelection = Template.bind({});
SingleSelection.parameters = {
	docs: {
		description: {
			story:
				"For single selection menu sections, menu items show a single checkmark to indicate the selected item.",
		},
	},
};
SingleSelection.args = {
  selectionMode: "single",
  customStyles: {'max-width': '1000px'},
  items: [
    {
      label: "Marquee. Extra long menu item text to demonstrate wrapping text and alignment of icon in this situation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isSelected: true,
      isChecked: true,
    },
    { label: "Add" },
    { label: "Subtract" },
  ],
};

export const SingleSelectionWithIcons = Template.bind({});
SingleSelectionWithIcons.args = {
  selectionMode: "single",
  customStyles: {'max-width': '1000px'},
  items: [
    {
      label: "Marquee. Extra long menu item text to demonstrate wrapping text and alignment of icon in this situation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iconName: "Selection",
      isSelected: true,
      isChecked: true,
    },
    {
      label: "Add",
      iconName: "SelectAdd",
    },
    {
      label: "Subtract",
      iconName: "SelectSubtract",
    },
  ],
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  selectionMode: "multiple",
  customStyles: {'max-width': '1000px'},
  items: [
    {
      label: "Marquee. Extra long menu item text to demonstrate wrapping text and alignment of icon in this situation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iconName: "Selection",
      isSelected: true,
      isChecked: true,
    },
    {
      label: "Add",
      iconName: "SelectAdd",
    },
    {
      label: "Subtract",
      iconName: "SelectSubtract",
    },
  ],
};

export const WithActions = Template.bind({});
WithActions.args = {
  hasActions: true,
  customStyles: {'max-width': '1000px'},
  items: [
    {
      label: "Marquee. Extra long menu item text to demonstrate wrapping text and alignment of icon in this situation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iconName: "Selection",
    },
    {
      label: "Add",
      iconName: "SelectAdd",
    },
    {
      label: "Subtract",
      iconName: "SelectSubtract",
    },
  ],
};

export const WithValueAndActions = Template.bind({});
WithValueAndActions.args = {
  hasActions: true,
  customStyles: {'max-width': '1000px'},
  items: [
    {
      label: "Marquee. Extra long menu item text to demonstrate wrapping text and alignment of icon in this situation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      value: "Value"
    },
    {
      label: "Add",
      value: "Value"
    },
    {
      label: "Subtract",
      value: "Value"
    },
  ],
};

export const DrillInSubmenu = Template.bind({});
DrillInSubmenu.storyName = "Drill-in for Submenu";
DrillInSubmenu.parameters = {
	docs: {
		description: {
			story:
				"When a menu item contains a submenu, a drill-in chevron will appear at the end of the menu item to show that a submenu is available.",
		},
	},
};
DrillInSubmenu.args = {
  items: [
    { label: "Deselect" },
    { label: "Select Inverse" },
    {
      label: "Feather really long item",
      isDrillIn: true,
      isOpen: true,
    },
    { label: "Select and Mask..." },
    { label: "Save Selection" },
  ],
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  items: [
    {
      label: "Web Design",
      iconName: "DesktopAndMobile",
      isCollapsible: true,
      isOpen: true,
      items: [
        {
          label: "Web Large",
          itemValue: "1920 x 1080",
        },
        {
          label: "Web Medium",
          itemValue: "1366 x 768",
        },
        {
          label: "Web Small",
          itemValue: "1280 x 800",
        },
      ],
    },
    {
      label: "Mobile",
      isCollapsible: true,
      isOpen: true,
      items: [
        {
          label: "Web Large",
          itemValue: "1920 x 1080",
        },
        {
          label: "Web Medium",
          itemValue: "1366 x 768",
        },
        {
          label: "Web Small",
          itemValue: "1280 x 800",
        },
      ],
    },
    {
      label: "Tablet",
      iconName: "DeviceTablet",
      isCollapsible: true,
      items: [
        { label: "Defaults to not visible within closed item" },
      ],
    },
    {
      label: "Social Media",
      iconName: "ShareAndroid",
      isCollapsible: true,
      items: [
        { label: "Defaults to not visible within closed item" },
      ],
    },
    {
      label: "Watches",
      iconName: "Watch",
      isCollapsible: true,
      items: [
        { label: "Defaults to not visible within closed item" },
      ],
    },
  ],
};
