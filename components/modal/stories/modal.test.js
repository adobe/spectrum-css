import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ModalGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Standard",
			skipWrapper: false,
		},
	]
});
