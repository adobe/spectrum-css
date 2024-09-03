import { Template as Checkbox } from "@spectrum-css/checkbox/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const FieldGroupSet = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Horizontal",
			layout: "horizontal",
			items: [
				(passthroughs, context) => Checkbox({
					...passthroughs,
					id: "apple",
					label: "Apples are best",
					customClasses: ["spectrum-FieldGroup-item"],
				}, context),
				(passthroughs, context) => Checkbox({
					...passthroughs,
					id: "banana",
					label: "Bananas forever",
					customClasses: ["spectrum-FieldGroup-item"],
				}, context),
				(passthroughs, context) => Checkbox({
					...passthroughs,
					id: "cherry",
					label: "Cherries ftw",
					customClasses: ["spectrum-FieldGroup-item"],
				}, context),
			],
		},
		{
			testHeading: "Label position: side",
			label: "Pick one:",
			labelPosition: "side",
			helpText: "Select an option to continue.",
		},
	],
	stateData: [
		{
			testHeading: "Invalid",
			isInvalid: true,
			helpText: "Select an option to continue.",
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
		},
	]
});
