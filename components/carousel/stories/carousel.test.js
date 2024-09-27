import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CarouselGroup = Variants({
	Template,
	testData: [{}],
    stateData: [{
        testHeading: "Disabled",
        isDisabled: true,
    }],
});
