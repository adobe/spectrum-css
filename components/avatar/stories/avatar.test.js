import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const AvatarGroup = Variants({
	Template,
	stateData: [{
		testHeading: "Not linked",
		hasLink: false,
	}, {
		testHeading: "Disabled",
		isDisabled: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}],
	sizeDirection: "row",
});
