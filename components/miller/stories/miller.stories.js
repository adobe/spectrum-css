// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Miller columns",
	description:
		"Miller columns are a browsing/visualization technique that can be applied to tree structures. The columns allow for multiple levels of the hierarchy to be open at once and provide a visual representation of the current location.",
	component: "Miller",
	argTypes: {
		columns: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-MillerColumns",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("miller")
				? "migrated"
				: undefined,
		},
	},
};

export const BranchesSelectable = Template.bind({});
BranchesSelectable.args = {
	columns: [
		{
			items: [
				{
					label: "Folder 1",
					isBranch: true,
					isSelectable: true,
					isSelected: false,
					id: "assetitemlabel-1",
				},
				{
					label: "Folder 2",
					isBranch: true,
					isSelectable: true,
					isSelected: true,
					id: "assetitemlabel-2",
				},
				{
					label: "Folder 3",
					isBranch: true,
					isSelectable: true,
					isSelected: false,
					image: "example-ava.png",
					id: "assetitemlabel-3",
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
					id: "assetitemlabel-4",
				},
				{
					label: "File 2.1",
					isBranch: true,
					isSelectable: true,
					isSelected: true,
					id: "assetitemlabel-5",
				},
				{
					label: "File 2.2",
					isBranch: true,
					isSelectable: true,
					isSelected: true,
					image: "example-ava.png",
					id: "assetitemlabel-6",
				},
			],
		},
	],
};

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
					id: "assetitemlabel-7",
				},
				{
					label: "File 2",
					isBranch: false,
					isSelectable: false,
					isSelected: false,
					id: "assetitemlabel-8",
				},
				{
					label: "File 3",
					isBranch: true,
					isSelectable: false,
					isSelected: false,
					isNavigated: true,
					image: "example-ava.png",
					id: "assetitemlabel-9",
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
					label: "File 2.2",
					isBranch: false,
					isSelectable: false,
					isSelected: false,
					id: "assetitemlabel-10",
				},
				{
					label: "File 2.3",
					isBranch: false,
					isSelectable: false,
					isSelected: true,
					image: "example-ava.png",
					id: "assetitemlabel-11",
				},
			],
		},
	],
};
