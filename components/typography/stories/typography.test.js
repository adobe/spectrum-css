import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const TypographyGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Heading",
			semantics: "heading",
			content: [
				"This is a heading",
				{
					content: "This is a heading with a weight of light",
					semantics: "heading",
					weight: "light",
				},
				{
					content: "This is a heading with a weight of heavy",
					semantics: "heading",
					weight: "heavy",
				},
				{
					content: "This is a strong heading",
					semantics: "heading",
					variant: ["strong"],
				},
				{
					content: "This is an emphasized heading",
					semantics: "heading",
					variant: ["emphasized"],
				},
				{
					content: "This is a strong emphasized heading",
					semantics: "heading",
					variant: ["strong", "emphasized"],
				},
				{
					content: "This is a heading with a serif font",
					semantics: "heading",
					glyph: "serif",
				},
			],
		},
		{
			testHeading: "Body",
			semantics: "body",
			content: [
				"This is a sentence of body text with default settings.",
				{
					content: "This is a sentence of body text with the strong variant.",
					semantics: "body",
					variant: ["strong"],
				},
				{
					content: "This is a sentence of body text with the emphasized variant.",
					semantics: "body",
					variant: ["emphasized"],
				},
				{
					content: "This is a sentence of body text with the strong and emphasized variant.",
					semantics: "body",
					variant: ["strong", "emphasized"],
				},
				{
					content: "This is a sentence of body text with the serif glyph.",
					semantics: "body",
					glyph: "serif",
				},
			],
		},
		{
			testHeading: "Detail",
			semantics: "detail",
			content: [
				"Detail",
				{
					content: "Strong detail",
					semantics: "detail",
					variant: ["strong"],
				},
				{
					content: "Emphasized detail",
					semantics: "detail",
					variant: ["emphasized"],
				},
				{
					content: "Strong + emphasized detail",
					semantics: "detail",
					variant: ["strong", "emphasized"],
				},
				{
					content: "Serif detail",
					semantics: "detail",
					glyph: "serif",
				},
			],
		},
		{
			testHeading: "Code",
			semantics: "code",
			content: [
				"console.log('Hello, code block!');",
				{
					content: "console.log('Hello, strong code!');",
					semantics: "code",
					variant: ["strong"],
				},
				{
					content: "console.log('Hello, emphasized code!');",
					semantics: "code",
					variant: ["emphasized"],
				},
				{
					content: "console.log('Hello, strong + emphasized code!');",
					semantics: "code",
					variant: ["strong", "emphasized"],
				},
			],
		},
	],
});
