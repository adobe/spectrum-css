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
		wrapperStyles: {
			"min-block-size": "50px",
		},
	}, {
		testHeading: "Custom icon",
		isOpen: false,
		iconName: "Add",
		wrapperStyles: {
			"min-block-size": "50px",
		},
	}],
});
