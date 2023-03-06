// Import the component markup template
import { Template } from "./template";

export default {
  title: "Sidenav",
  description: "SideNav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.",
  component: "Sidenav",
  argTypes: {
    items: { table: { disable: true }},
    variant: { table: { disable: true }}
  },
  args: {
    rootClass: "spectrum-SideNav",
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
      title: "Section Title 1",
      link: "#",
      isSelected: true,
    },
    {
      title: "Section Title 2",
      link: "#",
      isDisabled: true,
    },
    {
      title: "Section Title 3",
      link: "#",
    },
  ]
};

export const Multilevel = Template.bind({});
Multilevel.args = {
  variant: "multiLevel",
  items: [
    {
      title: "Section Title 1",
      link: "#",
    },
    {
      title: "Section Title 2",
      link: "#",
      subitems: [
        {
          title: "Section Title 1",
          link: "#",
        },
        {
          title: "Section Title 2",
          link: "#",
        },
      ]
    },
    {
      title: "Section Title 3",
      link: "#",
    },
  ]
};

