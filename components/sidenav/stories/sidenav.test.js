import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SideNavGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Multilevel",
			variant: "multiLevel",
			items: [
				{
					id: "section1",
					title: "Section title 1",
					link: "#",
				},
				{
					id: "section2",
					title: "Section title 2",
					link: "#",
					levelTwoItems: [
						{
							id: "section2.1",
							title: "Section title A",
							link: "#",
						},
						{
							id: "section2.2",
							title: "Section title B: The long title that wraps to the next line",
							link: "#",
							levelThreeItems: [
								{
									id: "section3.1",
									title: "Section title X",
									link: "#",
								},
								{
									id: "section3.2",
									title: "Section title Y: this menu item is set as current / selected",
									link: "#",
									isSelected: true,
								},
								{
									id: "section3.3",
									title: "Section title Z",
									link: "#",
								},
							]
						},
					]
				},
				{
					id: "section3",
					title: "Section title 3",
					link: "#",
				},
			],
		},
		{
			testHeading: "With headings",
			items: [
				{
					id: "section1",
					title: "Section 1",
					link: "#",
				},
				{
					id: "section2",
					heading: "Heading 1",
					link: "#",
					levelTwoItems: [
						{
							id: "section2.1",
							title: "Section 2",
							link: "#",
						},
						{
							id: "section2.2",
							title: "Section 3",
							link: "#",
						},
					]
				},
				{
					id: "section3",
					heading: "Heading 2",
					link: "#",
					levelTwoItems: [
						{
							id: "section3.1",
							title: "Section 4",
							link: "#",
						},
					]
				}
			],
		},
		{
			testHeading: "With icon",
			variant: "multiLevel",
			iconName: "Folder",
			hasIcon: true,
			items: [
				{
					id: "section1",
					title: "Section 1",
					link: "#",
				},
				{
					id: "section2",
					title: "Section 2",
					link: "#",
					levelTwoItems: [
						{
							id: "section2.1",
							title: "Section 1",
							link: "#",
						},
						{
							id: "section2.2",
							title: "Section 2",
							link: "#",
							levelThreeItems: [
								{
									id: "section3.1",
									title: "Section 1",
									link: "#",
								},
							]
						},
					]
				},
				{
					id: "section3",
					title: "Section 3",
					link: "#",
				},
			]
		}
	],
});
