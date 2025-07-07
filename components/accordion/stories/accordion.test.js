import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Sizes, Variants } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template.js";

/**
 * General accordion item content for tests.
 * Content sourced from: https://www.adobe.com/products/catalog.html#:~:text=Frequently%20asked%20questions.
 */
export const testsContent = new Map([
	[
		"Abstract",
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
		},
	],
	[
		"Architecture",
		{
			content: Typography({
				semantics: "body",
				content: [
					"This is an example of text content within the content area that uses the spectrum-Body typography class on the paragraphs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit.",
					Link({
						url: "https://www.adobe.com/creativecloud/plans.html",
						text: "Learn more about Adobe Creative Cloud plans and pricing.",
					}),
				],
			}),
			isOpen: true,
		},
	],
	[
		"Nature",
		{
			content: Typography({
				semantics: "body",
				content: [
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
					Link({
						url: "https://www.adobe.com/acrobat.html",
						text: "Learn more about Acrobat.",
					}),
				],
			}),
		},
	],
	[
		"Illustrations",
		{
			content: "This is an example of text content within the content area that is not wrapped by any typography classes or elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit.",
			isOpen: true,
		},
	],
	[
		"Business",
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
		},
	],
	[
		"Landscape and longer text that wraps",
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
		},
	],
]);

const defaultContentText = "This is an example of text content within the content area that is not wrapped by any typography classes or elements.";

/**
 * Content for testing accordion item states.
 */
const statesTestContent = new Map([
	[
		"Hovered",
		{
			isHovered: true,
			content: defaultContentText,
		},
	],
	[
		"Disabled",
		{
			isDisabled: true,
			content: defaultContentText,
		},
	],
	[
		"Hovered + disabled",
		{
			isDisabled: true,
			isHovered: true,
			content: defaultContentText,
		},
	],
	[
		"Focus-visible",
		{
			isFocused: true,
			content: defaultContentText,
		},
	],
	[
		"Active/down",
		{
			isActive: true,
			content: defaultContentText,
		},
	],
	[
		"Active/down + hovered",
		{
			isActive: true,
			isHovered: true,
			content: defaultContentText,
		},
	],
	[
		"Focus-visible + hovered",
		{
			isFocused: true,
			isHovered: true,
			content: defaultContentText,
		},
	],
]);

export const AccordionGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Standard",
			items: testsContent,
			customStyles: {
				maxInlineSize: "500px",
			},
		},
		{
			testHeading: "Quiet",
			items: testsContent,
			isQuiet: true,
			customStyles: {
				maxInlineSize: "500px",
			},
		},
		{
			testHeading: "No Inline Padding",
			items: testsContent,
			hasNoInlinePadding: true,
			customStyles: {
				maxInlineSize: "500px",
			},
		},
		{
			testHeading: "Heading text wrapping",
			items: new Map([
				[
					"This example has a heading that wraps to two lines.",
					{
						content: defaultContentText,
						isOpen: false,
					},
				],
				[
					"This example has a heading that wraps to more than two lines. What are the most popular Adobe products?",
					{
						content: defaultContentText,
						isOpen: false,
					},
				],
				[
					"This example has a heading that wraps to more than two lines. It also shows the text in its content area.",
					{
						content: defaultContentText,
						isOpen: true,
					},
				],
			]),
			customStyles: {
				maxInlineSize: "300px",
			},
			withStates: false,
		},
		{
			testHeading: "Compact",
			items: testsContent,
			Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
			density: "compact",
			collapseAll: true,
			customStyles: {
				maxInlineSize: "500px",
			},
			withStates: false,
		},
		{
			testHeading: "Spacious",
			items: testsContent,
			Template: (args, context) => { return Sizes({Template: Template, ...args}, context); },
			density: "spacious",
			collapseAll: true,
			customStyles: {
				maxInlineSize: "500px",
			},
			withStates: false,
		},
	],
	stateData: [
		{
			testHeading: "Accordion item states",
			items: statesTestContent,
		},
	],
});
