// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Asset",
	description:
		"Use an asset element to visually represent a file, folder or image. File and folder representations will center themselves horizontally and vertically in the space provided to the element. Images will be contained to the element, growing to the element's full height while centering itself within the width provided.",
	component: "Asset",
	argTypes: {
		reducedMotion: { table: { disable: true } },
		preset: {
			name: "Preset asset types",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["folder", "file"],
			control: "select",
		},
		image: {
			name: "Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
	},
	args: {
		rootClass: "spectrum-Asset",
	},
	parameters: {
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("asset")
				? "migrated"
				: undefined,
		},
    // Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
    // design: {
    //   type: "figma",
    //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    // },
  },
};

export const SymbolicAsset = Template.bind({});
SymbolicAsset.argTypes = {
	image: { table: { disable: true } },
};
SymbolicAsset.args = {
	preset: "folder",
};

export const ImageAsset = Template.bind({});
ImageAsset.argTypes = {
	preset: { table: { disable: true } },
	scale: { table: { disable: true } },
};
ImageAsset.args = {
	image: "example-ava.png",
};
