import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ActionMenuGroup = Variants({
	Template,
	testData: [{
		wrapperStyles: {
			"min-block-size": "200px",
			"align-items": "flex-start",
		},
	}, {
		testHeading: "Closed menu",
		isOpen: false,
		items: [
			{
				label: "Edit",
				iconName: "Edit",
			},
			{
				label: "Delete",
				iconName: "Delete",
			},
		],
	}, {
		testHeading: "Custom icon",
		isOpen: false,
		iconName: "Add",
	}],
});
