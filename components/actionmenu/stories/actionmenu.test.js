import { ArgGrid, Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ActionMenuGroup = Variants({
	Template,
	withSizes: false,
	testData: [{}, {
		testHeading: "Positioning",
		withStates: false,
		Template: (args, context) => ArgGrid({
			Template,
			argKey: "position",
			withBorder: false,
			...args,
		}, context),
	}],
	stateData: [{
		testHeading: "Closed",
		isOpen: false,
	}, {
		testHeading: "Has long press",
		hasLongPress: true,
		isOpen: false,
	}]
});
