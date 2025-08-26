import { Variants } from "../../../.storybook/decorators";
import { Template } from "./template.js";

export const AvatarGroup = Variants({
	Template,
	stateData: [{
		testHeading: "Not linked",
		hasLink: false,
	}, {
		testHeading: "Disabled",
		isDisabled: true,
		hasLink: false,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}],
	sizeDirection: "row",
});
