import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-SideNav",
	customClasses = [],
	variant,
	hasIcon,
	iconName,
	iconSet = "workflow",
	items = [],
} = {}, context = {}) => {
	return html`
<<<<<<< HEAD
		<nav>
			<ul
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--${variant}`]: typeof variant !== "undefined",
					[`${rootClass}--hasIcon`]: hasIcon,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
			>
				${repeat(
					items,
					(item) => item.id,
					(item) => {
						// First level nav item with second tier of nav items beneath.
						if (typeof item.levelTwoItems !== "undefined") {
							return html`
								<li
									class=${classMap({
										[`${rootClass}-item`]: true,
										"is-selected": item.isSelected,
										"is-disabled": item.isDisabled,
									})}
								>
									${item.heading
										? html`<h2
												class="${rootClass}-heading"
												id="${item.id}-heading"
											>
												${item.heading}
											</h2>`
										: html`
												<a
													class="${rootClass}-itemLink"
													aria-current=${ifDefined(
														item.isSelected ? "page" : undefined,
													)}
												>
													${when(hasIcon && iconName, () =>
														Icon({ iconName, setName: iconSet }, context),
													)}
													<span class="${rootClass}-link-text"
														>${item.title}</span
													>
												</a>
											`}
									<ul
										class=${classMap({
											[rootClass]: true,
											[`${rootClass}--hasIcon`]: hasIcon,
											...customClasses.reduce(
												(a, c) => ({ ...a, [c]: true }),
												{},
											),
										})}
										aria-labelledby=${ifDefined(item.heading)
											? `${item.id}-heading`
											: ""}
									>
										${repeat(
											item.levelTwoItems,
											(item) => item.id,
											(item) => {
												// Display nav items in second tier, and possibly a third tier.
												return SideNavItem(
													{
														currentTier: 2,
														hasIcon,
														iconName,
														iconSet,
														...item,
													},
													context,
												);
											},
										)}
									</ul>
								</li>
							`;
						}
						else {
							// First level nav item only.
							return SideNavItem(
								{
									currentTier: 1,
									hasIcon,
									iconName,
									iconSet,
									...item,
								},
								context,
							);
						}
					},
				)}
			</ul>
		</nav>
	`;
=======
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
                <a class="${rootClass}-itemLink" aria-current=${ifDefined(item.isSelected ? "page" : undefined)}>
                  ${when(hasIcon && iconName, () => Icon({ iconName }, context))}
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
                      currentTier: 2,
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
            // First level nav item only
            return SideNavItem({
              currentTier: 1,
              hasIcon,
              iconName,
              ...item
            }, context);
          }
        })}
      </ul>
    </nav>
  `;
>>>>>>> c23ec7beb (feat!: spectrum 2 initial release)
};

/**
 * Renders a single navigation item, and an optional third tier of items.
 */
export const SideNavItem = ({
	rootClass = "spectrum-SideNav",
	currentTier = 1,
	levelThreeItems,
	link,
	title,
	isSelected = false,
	isDisabled = false,
	id = getRandomId("sidenav-item"),
	hasIcon = false,
	iconName,
	iconSet = "workflow",
	customClasses = [],
} = {}, context = {}) => {
	return html`
		<li
			id=${ifDefined(id)}
			class=${classMap({
				[`${rootClass}-item`]: true,
				"is-selected": isSelected,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<a
				href=${ifDefined(link)}
				class=${classMap({
					[`${rootClass}-itemLink`]: true,
				})}
			>
				${when(hasIcon && iconName && currentTier == 1, () =>
					Icon({ iconName, setName: iconSet }, context),
				)}
				<span
					class=${classMap({
						[`${rootClass}-link-text`]: true,
					})}
				>
					${title}
				</span>
			</a>
			${when(
				levelThreeItems,
				() =>
					html` <ul
						class=${classMap({
							[rootClass]: true,
						})}
					>
						${repeat(
							levelThreeItems,
							(item) => item.id,
							(item) =>
								SideNavItem(
									{
										...item,
									},
									context,
								),
						)}
					</ul>`,
			)}
		</li>
	`;
};
