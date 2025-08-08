import { Variants } from "@spectrum-css/preview/decorators";
import { Dialog, Template } from "./template.js";

export const AlertDialogGroup = Variants({
	Template,
	TestTemplate: Dialog,
	wrapperStyles: {
		"z-index": "1",
		"inline-size": "fit-content",
		"background-color": "transparent",
		"border": "none",
		"min-block-size": "auto",
	},
	testData: [{}, {
		testHeading: "Vertical button display",
		heading: "Vertical button group",
		content: "This is what an alert dialog looks like with buttons arranged vertically.",
		hasVerticalButtons: true,
	}, {
		testHeading: "Warning",
		variant: "warning",
		heading: "Unverified format",
		content: "This format has not been verified and may not be viewable for some users. Do you want to continue publishing?",
	}, {
		testHeading: "Error",
		variant: "error",
		heading: "Unable to share",
		content: "An error occured while sharing your project. Please verify the email address and try again.",
	}, {
		testHeading: "Destructive",
		variant: "destructive",
		heading: "Delete 3 documents?",
		content: "Are you sure you want to delete the 3 selected documents?",
	}, {
		testHeading: "Informative",
		variant: "information",
		heading: "Informative dialog with a wrapping title text because the text is longer than the width of the alert dialog",
		content: "If you enjoy our app, would you mind taking a moment to rate it?",
	}],
});
