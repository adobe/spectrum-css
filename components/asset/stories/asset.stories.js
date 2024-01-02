import { Template } from "./template";

export default {
	title: "Components/Asset",
	description:
		"Use an asset element to visually represent a file, folder or image. File and folder representations will center themselves horizontally and vertically in the space provided to the element. Images will be contained to the element, growing to the element's full height while centering itself within the width provided.",
	component: "Asset",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
				: "legacy",
		},
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
