import { Variants } from "@spectrum-css/preview/decorators";
import { Dialog, Template } from "./template";

export const AlertDialogGroup = Variants({
	// Test this without Modal to focus on the dialog solo
	Template,
	TestTemplate: Dialog,
	wrapperStyles: {
		"z-index": "1",
		"inline-size": "fit-content",
		"background-color": "var(--spectrum-gray-50, white)"
	},
	testData: [{}, {
		variant: "warning",
		heading: "Unverified format",
		icon: true,
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel"
		}, {
			treatment: "outline",
			label: "Continue",
			variant: "primary"
		}],
		content: "This format has not been verified and may not be viewable for some users. Do you want to continue publishing?",
	}, {
		variant: "error",
		heading: "Unable to share",
		icon: true,
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel"
		}, {
			treatment: "outline",
			label: "Continue",
			variant: "primary"
		}],
		content: "An error occured while sharing your project. Please verify the email address and try again.",
	}, {
		variant: "destructive",
		heading: "Delete 3 documents?",
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "Cancel"
		}, {
			treatment: "fill",
			label: "Delete",
			variant: "negative"
		}],
		content: "Are you sure you want to delete the 3 selected documents?",
	}, {
		variant: "information",
		heading: "Informative Dialog with a wrapping title text because the text is longer than the width of the alert dialog",
		buttons: [{
			variant: "secondary",
			treatment: "outline",
			label: "No, thanks"
		},{
			variant: "secondary",
			treatment: "outline",
			label: "Remind me later"
		}, {
			variant: "primary",
			treatment: "outline",
			label: "Rate now",
		}],
		content: "If you enjoy our app, would you mind taking a moment to rate it?",
	}],
});
