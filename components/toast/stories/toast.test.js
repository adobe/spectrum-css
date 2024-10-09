import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

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
		},
		{
			testHeading: "Wrapping with button",
			variant: "info",
			message: "A new version of Lightroom Classic is now available. Use the Update button below to start using the new version.",
			inlineButtonLabel: "Update"
		},
		{
			testHeading: "Wrapping without button",
			variant: "info",
			message: "A new version of Lightroom Classic is now available. Use the Update button below to start using the new version.",
			inlineButtonLabel: undefined
		},
		{
			testHeading: "Short message, no required action",
			variant: "neutral",
			message: "The toast is done.",
			inlineButtonLabel: undefined
		},
	]
});
