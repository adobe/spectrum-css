// Import the component markup template
import { Template } from "./template";

export default {
  title: "Components/Side nav",
  description: "SideNav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.",
  component: "Sidenav",
  argTypes: {
    hasIcon: {
      name: "Has Icon",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    iconName: {
      name: "Icon Name",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ['Image', "Folder", "Star"],
      control: "select",
      if: { arg: 'hasIcon', truthy: true }
    },
    items: { table: { disable: true }},
    variant: { table: { disable: true }}
  },
  args: {
    rootClass: "spectrum-SideNav",
    hasIcon: false,
    iconName: "Folder"
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('sidenav') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			id: "1",
			title: "Section Title 1",
			link: "#",
			isSelected: true,
		},
		{
			id: "2",
			title: "Section Title 2",
			link: "#",
			isDisabled: true,
		},
		{
			id: "3",
			title: "Section Title 3",
			link: "#",
		},
	],
};

export const Multilevel = Template.bind({});
Multilevel.args = {
  variant: "multiLevel",
  items: [
    {
      id: "1",
      title: "Section Title 1",
      link: "#",
    },
    {
      id: "2",
      title: "Section Title 2",
      link: "#",
      levelTwoItems: [
        {
          id: "2.1",
          title: "Section Title 1",
          link: "#",
        },
        {
          id: "2.2",
          title: "Section Title 2: The Long Title That Wraps to The Next Line",
          link: "#",
          levelThreeItems: [
            {
              id: "3.1",
              title: "Section Title 1",
              link: "#",
            },
            {
              id: "3.2",
              title: "Section Title 2: Another Long Title That Wraps to The Next Line",
              link: "#",
              isSelected: true,
            },
            {
              id: "3.3",
              title: "Section Title 3",
              link: "#",
            },
          ]
        },
      ]
    },
    {
      id: "3",
      title: "Section Title 3",
      link: "#",
    },
  ]
};

export const WithHeading = Template.bind({});
WithHeading.args = {
  items: [
    {
      id: "1",
      title: "Section 1",
      link: "#",
    },
    {
      id: "2",
      heading: "Heading 1",
      link: "#",
      levelTwoItems: [
        {
          id: "2.1",
          title: "Section 1",
          link: "#",
        },
        {
          id: "2.2",
          title: "Section 2",
          link: "#",
        },
      ]
    }
  ]
};

export const WithIcons = Template.bind({});
WithIcons .args = {
  variant: "multiLevel",
  hasIcon: true,
  items: [
    {
      id: "1",
      title: "Section 1",
      link: "#",
    },
    {
      id: "2",
      title: "Section 2",
      link: "#",
      levelTwoItems: [
        {
          id: "2.1",
          title: "Section 1",
          link: "#",
        },
        {
          id: "2.2",
          title: "Section 2",
          link: "#",
          levelThreeItems: [
            {
              id: "3.1",
              title: "Section 1",
              link: "#",
            },
          ]
        },
      ]
    },
    {
      id: "3",
      title: "Section 3",
      link: "#",
    },
  ]
};
