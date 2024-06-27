import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template } from "./template";

/**
 * Use an asset element to visually represent a file, folder or image. File and folder representations will center themselves horizontally and vertically in the space provided to the element. Images will be contained to the element, growing to the element's full height while centering itself within the width provided.
*/
export default {
	title: "Asset",
	component: "Asset",
	argTypes: {
		scale: {
			name: "Platform scale",
			if: { arg: "preset", neq: "image" }
		},
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
		preset: "image",
		image: "example-ava.png",
	},
};

const AssetGroup = (args, context) => html`
	${window.isChromatic() ? html`
		<div style=${styleMap({
			"display": "grid",
			"grid-template-columns": "repeat(3, 200px)",
			"gap": "8px"
		})}>
			${Template(args, context)}
			${Template({
				...args,
				preset: "file",
			}, context)}
			${Template({
				...args,
				preset: "folder",
			}, context)}
		</div>
	` : Template(args, context)}
`;

export const Default = AssetGroup.bind({});

export const File = Template.bind({});
File.tags = ["docs-only"];
File.args = {
	preset: "file",
};
File.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Folder = Template.bind({});
Folder.tags = ["docs-only"];
Folder.args = {
	preset: "folder",
};
Folder.parameters = {
	chromatic: { disableSnapshot: true },
};
