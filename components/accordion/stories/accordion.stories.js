import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { AccordionGroup } from "./accordion.test.js";
import { Template } from "./template.js";

/**
 * The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements.
 */
export default {
	title: "Accordion",
	component: "Accordion",
	argTypes: {
		items: { table: { disable: true } },
		size: size(["s", "m", "l", "xl"]),
		disableAll: {
			name: "Disable all items",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		collapseAll: {
			name: "Collapse all items",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
			},
			control: "boolean",
		},
		density: {
			name: "Density",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["compact", "regular", "spacious"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-Accordion",
		size: "m",
		density: "regular",
		collapseAll: false,
		disableAll: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Accordion-item"],
		},
		chromatic: { disableSnapshot: true },
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=39469-5419",
		},
		packageJson,
		metadata,
	},
	tags: ["!autodocs"],
};

/* Content sourced from: https://www.adobe.com/products/catalog.html#:~:text=Frequently%20asked%20questions. */
const content = new Map([
	[
		"Are any Adobe products free?",
		{
			content:
				"Yes, Adobe offers free products like Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. You can also use Creative Cloud Express, Fresco, and Lightroom Mobile for free, with the option of making in-app purchases.",
			isDisabled: true,
		},
	],
	[
		"Are Adobe products worth it?",
		{
			content: Typography({
				semantics: "body",
				content: [
					"Adobe makes some of the most widely used software applications in the world, many of which are industry standard. Get started with free apps like Adobe Acrobat Reader, Aero, Fill & Sign, Photoshop Express, and Adobe Scan. Or consider Creative Cloud, with plans starting at just US$9.99/mo. Every Adobe Creative Cloud plan includes perks like free stock images and fonts, collaboration tools, and cloud storage as well as regular feature updates to deliver the latest technology.",
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
			content:
				"Adobe offers nearly 100 products. Get creative with industry-standard apps like Adobe Photoshop, Illustrator InDesign, and Lightroom. Create, edit, and sign PDFs with Adobe Acrobat and Acrobat Sign. And deliver exceptional customer experiences with our marketing and commerce apps such as Adobe Experience Manager, Campaign, and Target.",
			isOpen: true,
		},
	],
	[
		"How much do Adobe products cost?",
		{
			content: Typography({
				semantics: "body",
				content: [
					"Creative Cloud plans start at US$9.99/mo. You can subscribe to specific Single App plans or get 20+ creative apps and services in the Creative Cloud All Apps plan.",
					Link({
						url: "https://www.adobe.com/creativecloud/plans.html",
						text: "Explore Creative Cloud plans.",
					}),
				],
			}),
		},
	],
	[
		"What are the most popular Adobe products?",
		{
			content:
				"Adobe makes some of the most widely used software in the world, including popular apps like Acrobat Pro, Photoshop, Illustrator, InDesign, Lightroom, and Premiere Pro.",
		},
	],
	[
		"How can I get a student discount on Adobe products?",
		{
			content: Typography({
				semantics: "body",
				content: [
					`Students who provide a valid school-issued email address at purchase are eligible to save over 60% on Creative Cloud All Apps, which includes 20+ apps such as Photoshop, Illustrator, InDesign, Acrobat Pro, and more. ${Link(
						{
							url: "https://www.adobe.com/creativecloud/buy/students.html",
							text: "Learn more about Creative Cloud for students.",
						}
					)}`,
				],
			}),
		},
	]
]);

export const Default = AccordionGroup.bind({});
Default.args = {
	items: content,
};
Default.parameters = {
	chromatic: { disableSnapshot: false },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = AccordionGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Compact = Template.bind({});
Compact.tags = ["!dev"];
Compact.args = {
	items: content,
	density: "compact",
};

export const Spacious = Template.bind({});
Spacious.tags = ["!dev"];
Spacious.args = {
	items: content,
	density: "spacious",
};
