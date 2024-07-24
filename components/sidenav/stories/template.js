import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId, Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-SideNav",
	customClasses = [],
	variant,
	hasIcon,
	iconName,
	items = [],
} = {}, context) => html`
  <nav>
    <ul class=${classMap({
      [rootClass]: true,
      [`${rootClass}--${variant}`]: typeof variant !== "undefined",
      [`${rootClass}--hasIcon`]: hasIcon,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      ${repeat(items, (item) => item.id, (item) => {
        if (typeof item.levelTwoItems !== "undefined") {
          return html`
            <li class=${classMap({
              [`${rootClass}-item`]: true,
              "is-selected": item.isSelected,
              "is-disabled": item.isDisabled,
            })}>
            ${item.heading ?
              html`<h2 class="${rootClass}-heading" id="${item.id}-heading">${item.heading}</h2>`
              :
              html`
              <a class="${rootClass}-itemLink">
              ${when(hasIcon, () =>
                Icon({ iconName }, context)
                )}
                <span class="${rootClass}-link-text">${item.title}</span>
              </a>
              `
            }
            <ul class=${classMap({
              [rootClass]: true,
              [`${rootClass}--hasIcon`]: hasIcon,
              ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            aria-labelledby=${ifDefined(item.heading) ? `${item.id}-heading` : ""}>
                ${repeat(item.levelTwoItems, (item) => item.id, (item) => {
                  return SideNavItem({
                    variant,
                    hasIcon,
                    iconName,
                    ...item
                  }, context);
                })}
              </ul>
            </li>
          `;
        }
        else {
          return SideNavItem({
            hasIcon,
            iconName,
            ...item
          }, context);
        }
      })}
    </ul>
  </nav>
`;

export const SideNavItem = ({
	rootClass = "spectrum-SideNav",
	variant,
	levelThreeItems,
	link,
	title,
	isSelected = false,
	isDisabled = false,
	id = getRandomId("sidenav-item"),
	hasIcon = false,
	iconName,
	customClasses = [],
} = {}, context) => {
	const displayIcon = hasIcon & variant === "multiLevel" ? false : true;
	return html`
    <li id=${id} class=${classMap({
      [`${rootClass}-item`]: true,
      "is-selected": isSelected,
      "is-disabled": isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
      <a href=${link} class="${rootClass}-itemLink">
        ${when(displayIcon, () =>
          Icon({ iconName }, context)
        )}
        <span class="${rootClass}-link-text">${title}</span>
      </a>
      ${when(levelThreeItems, () => html`
        <ul class=${rootClass}>
          ${repeat(levelThreeItems, (item) => item.id, (item) => {
            return SideNavItem({ ...item }, context);
          })}
        </ul>`
      )}
    </li>
  `;
};

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
							title: "Section title 1",
							link: "#",
						},
						{
							id: "section2.2",
							title: "Section title 2: The long title that wraps to the next line",
							link: "#",
							levelThreeItems: [
								{
									id: "section3.1",
									title: "Section title 1",
									link: "#",
								},
								{
									id: "section3.2",
									title: "Section title 2: Another long title that wraps to the next line",
									link: "#",
									isSelected: true,
								},
								{
									id: "section3.3",
									title: "Section title 3",
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
			]
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
							title: "Section 1",
							link: "#",
						},
						{
							id: "section2.2",
							title: "Section 2",
							link: "#",
						},
					]
				}
			]
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
