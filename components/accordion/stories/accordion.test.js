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
		"Are any Adobe products free?",
		{
			content: "Yes, Adobe offers free products like Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. You can also use Creative Cloud Express, Fresco, and Lightroom Mobile for free, with the option of making in-app purchases.",
		},
	],
	[
		"Are Adobe products worth it?",
		{
			content: Typography({
				semantics: "body",
				content: [
					"This is an example of text content within the content area that uses the spectrum-Body typography class on the paragraphs. Adobe makes some of the most widely used software applications in the world, many of which are industry standard.",
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
		"Which Adobe product is best for editing PDFs?",
		{
			content: Typography({
				semantics: "body",
				content: [
					"You can edit PDFs with Adobe Acrobat, which is available in two editions: Standard and Pro. Acrobat Standard provides basic tools to create, edit, and sign PDFs on Windows devices. Acrobat Pro is the complete PDF solution with tools to edit, convert, and sign PDFs across web, mobile, and tablet, as well as on Windows and macOS computers. If you'd like to try before you buy, you can get a free 7-day trial of Acrobat Pro.",
					Link({
						url: "https://www.adobe.com/acrobat.html",
						text: "Learn more about Acrobat.",
					}),
				],
			}),
		},
	],
	[
		"How many products does Adobe have?",
		{
			content: "This is an example of text content within the content area that is not wrapped by any typography classes or elements. Adobe offers nearly 100 products. Get creative with industry-standard apps like Adobe Photoshop, Illustrator InDesign, and Lightroom. Create, edit, and sign PDFs with Adobe Acrobat and Acrobat Sign. And deliver exceptional customer experiences with our marketing and commerce apps such as Adobe Experience Manager, Campaign, and Target.",
			isOpen: true,
		},
	],
	[
		"What are the most popular Adobe products?",
		{
			content: "This is an example of text content within the content area that is not wrapped by any typography classes or elements. Adobe makes some of the most widely used software in the world, including popular apps like Acrobat Pro, Photoshop, Illustrator, InDesign, Lightroom, and Premiere Pro.",
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
