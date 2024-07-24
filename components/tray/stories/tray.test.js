import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const TrayGroup = Variants({
	Template,
	testData: [
		{
			content: [
				(passthroughs, context) => Dialog({
					...passthroughs,
					heading: "You have new messages waiting in your inbox",
					content: ["You have 5 new messages! This notification is extra long so it wraps to the next line"],
					isDismissable: true,
				}, context)
			],
		},
	],
});
