import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ToastGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default"
		},
		{
			testHeading: "Info",
			variant: "info",
			message: "A new version of Lightroom Classic is now available",
			inlineButtonLabel: "Update",
		},
		{
			testHeading: "Negative",
			variant: "negative",
			message: "Unable to delete file",
			inlineButtonLabel: "Eject",
		},
		{
			testHeading: "Positive",
			variant: "positive",
			message: "Copied to clipboard",
			inlineButtonLabel: "Eject",
		}
	]
});
