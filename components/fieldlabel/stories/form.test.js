import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./form.template";

export const FormGroup = Variants({
	Template,
	testData: [
		{},
		{
			testHeading: "Labels above",
			labelsAbove: true,
		}
	],
});
