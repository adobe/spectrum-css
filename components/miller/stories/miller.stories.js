import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { MillerGroup } from "./miller.test.js";
import { Template } from "./template.js";

/**
 * Miller columns are a browsing/visualization technique that can be applied to tree structures. The columns allow for multiple levels of the hierarchy to be open at once and provide a visual representation of the current location.
 */
export default {
	title: "Miller columns",
	component: "MillerColumns",
	argTypes: {
		columns: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-MillerColumns",
		columns: [
			{
				items: [
					{
						label: "Folder 1",
						isBranch: true,
						isSelectable: true,
						isSelected: false,
						ariaLabelledby: "assetitemlabel-1",
						checkboxId: "checkbox-1",
					},
					{
						label: "Folder 2",
						isBranch: true,
						isSelectable: true,
						isSelected: true,
						ariaLabelledby: "assetitemlabel-2",
						checkboxId: "checkbox-2",
					},
					{
						label: "Folder 3",
						isBranch: true,
						isSelectable: true,
						isSelected: false,
						image: "example-ava.png",
						ariaLabelledby: "assetitemlabel-3",
						checkboxId: "checkbox-3",
					},
				],
			},
			{
				items: [
					{
						label: "Folder 2.1",
						isBranch: true,
						isSelectable: true,
						isSelected: false,
						ariaLabelledby: "assetitemlabel-4",
						checkboxId: "checkbox-4",
					},
					{
						label: "File 2.1",
						isBranch: true,
						isSelectable: true,
						isSelected: true,
						ariaLabelledby: "assetitemlabel-5",
						checkboxId: "checkbox-5",
					},
					{
						label: "File 2.2",
						isBranch: true,
						isSelectable: true,
						isSelected: true,
						image: "example-ava.png",
						ariaLabelledby: "assetitemlabel-6",
						checkboxId: "checkbox-6",
					},
				],
			},
		],
	},
	parameters: {
		componentVersion: version,
	},
};

/**
 * Miller columns that allow both files and folders to be selected.
 */
export const BranchesSelectable = MillerGroup.bind({});
BranchesSelectable.args = {};

/**
 * Miller columns that only allow files to be selected.
 */
export const FilesSelectable = Template.bind({});
FilesSelectable.args = {
	columns: [
		{
			items: [
				{
					label: "File 1",
					isBranch: true,
					isSelectable: false,
					isSelected: false,
					ariaLabelledby: "assetitemlabel-7",
					checkboxId: "checkbox-7",
				},
				{
					label: "File 2",
					isBranch: false,
					isSelectable: false,
					isSelected: false,
					ariaLabelledby: "assetitemlabel-8",
					checkboxId: "checkbox-8",
				},
				{
					label: "File 3",
					isBranch: true,
					isSelectable: false,
					isSelected: false,
					isNavigated: true,
					image: "example-ava.png",
					ariaLabelledby: "assetitemlabel-9",
					checkboxId: "checkbox-9",
				},
			],
		},
		{
			items: [
				{
					label: "File 2.1",
					isBranch: true,
					isSelectable: false,
					isSelected: false,
				},
				{
					label: "File 2.2 Shows Text Truncation For Long Names",
					isBranch: false,
					isSelectable: false,
					isSelected: false,
					ariaLabelledby: "assetitemlabel-10",
					checkboxId: "checkbox-10",
				},
				{
					label: "File 2.3",
					isBranch: false,
					isSelectable: false,
					isSelected: true,
					image: "example-ava.png",
					ariaLabelledby: "assetitemlabel-11",
					checkboxId: "checkbox-11",
				},
			],
		},
	],
};
FilesSelectable.parameters = {
	chromatic: {
		disableSnapshot: true,
	}
};

// ********* VRT ONLY ********* //
export const WithForcedColors = MillerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
