import { Variants } from "../../../.storybook/decorators";
import { Template } from "./template.js";

export const ModalGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Standard",
			skipWrapper: false,
		},
	]
});
