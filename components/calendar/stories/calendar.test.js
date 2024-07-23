import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";



const months = [...Array(12).keys()].map((key) =>
	new Date(0, key).toLocaleString("en", { month: "long" })
);

export const CalendarGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Padded",
			padded: true,
		},
		{
			testHeading: "Abbreviated days of the week",
			useDOWAbbrev: true,
		},
		{
			testHeading: "Range selection",
			month: months[6],
			selectedDay: new Date(2023, 6, 3),
			year: 2023,
			lastDay: new Date(2023, 6, 7),
			useDOWAbbrev: true,
			padded: true,
		},
		{
			testHeading: "Today highlighted",
			month: undefined,
			selectedDay: undefined,
			year: undefined,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
	]
});
