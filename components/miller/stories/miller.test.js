import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const MillerGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Selectable branches",
		},
		{
			testHeading: "Selectable files",
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
		}
	],
});
