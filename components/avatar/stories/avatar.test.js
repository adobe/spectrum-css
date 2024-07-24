import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const AvatarGroup = Variants({
	Template,
	skipBorders: true,
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
