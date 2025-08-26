import { Variants } from "../../../.storybook/decorators";
import { Template } from "./template.js";

export const PageGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Standard",
			skipWrapper: true,
		},
	]
});
