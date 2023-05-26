// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Side nav",
	description:
		"SideNav lets users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.",
	component: "Sidenav",
	argTypes: {
		items: { table: { disable: true } },
		variant: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-SideNav",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("sidenav")
				? "migrated"
				: undefined,
		},
	},
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
      subitems: [
        {
          id: "2.1",
          title: "Section Title 1",
          link: "#",
        },
        {
          id: "2.2",
          title: "Section Title 2",
          link: "#",
          secondlevelsubitems: [
            {
              id: "3.1",
              title: "Section Title 1",
              link: "#",
            },
            {
              id: "3.2",
              title: "Section Title 2",
              link: "#",
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: "multiLevel",
  items: [
    {
      id: "1",
      icon: "Image",
      title: "Section Title 1",
      link: "#",
      isSelected: true,

    },
    {
      id: "2",
      icon: "Folder",
      title: "Section Title 2",
      link: "#",
      subitems: [
        {
          id: "sub1",
          title: "Section Title 1",
          link: "#",
        },
        {
          id: "sub2",
          title: "Section Title 2 ",
          link: "#",
        },
      ]

    },
    {
      id: "3",
      title: "Section Title 3",
      link: "#",
      icon: "Star"
    },
  ]
};

export const WithHeading = Template.bind({});
WithHeading.args = {
	items: [
		{
			id: "1",
			title: "Section Title 1",
			link: "#",
		},
		{
			id: "2",
			category: "Category 1",
			link: "#",
			subitems: [
				{
					id: "3",
					title: "Section 3",
					link: "#",
				},
				{
					id: "4",
					title: "Section 4",
					link: "#",
				},
			],
		},
	],
};
