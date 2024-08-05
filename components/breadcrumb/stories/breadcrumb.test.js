import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const BreadcrumbGroup = Variants({
	Template,
	testData: [{
		testHeading: "Default"
	}, {
		testHeading: "Compact",
		variant: "compact",
	},
	{
		testHeading: "Multiline",
		variant: "multiline",
		items: [
			{
				label: "Nav root",
			},
			{
				iconName: "FolderOpen",
				isDisabled: true,
			},
			{
				label: "Trend",
				isDragged: true,
			},
			{
				label: "January 2019 Assets",
			},
		],
	}],
	stateData: [
		{
			testHeading: "Dragged",
			isDragged: true,
		}
	]
});
