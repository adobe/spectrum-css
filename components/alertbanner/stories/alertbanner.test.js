import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const AlertBannerGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Neutral",
		},
		{
			testHeading: "Informational",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purcahsed the software.",
			variant: "info",
			hasActionButton: false,
		},
		{
			testHeading: "Warning",
			text: "Connection interupted. Check your network to continue.",
			variant: "negative",
			hasActionButton: true,
		},
		{
			testHeading: "Closed",
			isOpen: false,
		},
	],
});
