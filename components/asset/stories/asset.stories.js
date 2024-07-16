import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { AssetGroup, Template } from "./template";

/**
 * Use an asset element to visually represent a file, folder or image. File and folder representations will center themselves horizontally and vertically in the space provided to the element. Images will be contained to the element, growing to the element's full height while centering itself within the width provided.
*/
export default {
	title: "Asset",
	component: "Asset",
	argTypes: {
		preset: {
			name: "Preset asset types",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["folder", "file", "image"],
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
			if: { arg: "preset", eq: "image" }
		},
	},
	args: {
		rootClass: "spectrum-Asset",
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = AssetGroup.bind({});
Default.args = {
	preset: "image",
	image: "example-ava.png",
};

// ********* DOCS ONLY ********* //
export const File = Template.bind({});
File.tags = ["autodocs", "!dev"];
File.args = {
	preset: "file",
};
File.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Folder = Template.bind({});
Folder.tags = ["autodocs", "!dev"];
Folder.args = {
	preset: "folder",
};
Folder.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
