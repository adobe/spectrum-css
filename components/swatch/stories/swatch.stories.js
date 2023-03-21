import { Template } from "./template";

export default {
	title: "Components/Swatch",
	description:
		"A swatch shows a small sample of a fill&emdash;such as a color, gradient, texture, or material&emdash;that is intended to be applied to an object.",
	component: "Swatch",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l",],
			control: "select",
		},
		swatchColor: {
			name: "Color",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
		},
		rounding: {
			name: "Rounding",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["none", "regular", "full"],
			control: "select",
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
  },
  args: {
    rootClass: "spectrum-Swatch",
    size: "m",
    isSelected: false,
    isDisabled: false,
    rounding: "regular",
    swatchColor: "rgb(174, 216, 230)"
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("swatch")
        ? "migrated"
        : "legacy",
    },
    // Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
    // design: {
    //   type: "figma",
    //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    // },
  },
};

export const Default = Template.bind({});
Default.args = {};

export const Transparent = Template.bind({});
Transparent.args = {
	swatchColor: "rgba(174, 216, 230, 0.3)",
};
