import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as AppFrameSideNav } from "@spectrum-css/appframesidenav/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "@spectrum-css/appframe/index.css";

// Example only emphasized container
const emphasizedContainerStyles = {
	background: "var(--spectrum-background-layer-1-color)",
	boxShadow: "var(--spectrum-drop-shadow-emphasized-default-x) var(--spectrum-drop-shadow-emphasized-default-y) var(--spectrum-drop-shadow-emphasized-default-blur) var(--spectrum-drop-shadow-emphasized-default-color)",
	minHeight: "200px",
	borderRadius: "var(--spectrum-corner-radius-extra-large-default)",
};

export const Template = ({
	rootClass = "spectrum-AppFrame",
	hasSideNavigation = true,
	hasMinimizedSideNav = false,
	contentLayout = "default",
	id,
	customClasses = [],
	customStyles = {},
}) => {
	const [, updateArgs] = useArgs();

	const sideNavigationMarkup = AppFrameSideNav({
		isMinimized: hasMinimizedSideNav,
		customClasses: ["spectrum-AppFrame-side-nav"],
	});

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--noSideNav`]: hasSideNavigation === false,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap(customStyles))}
		>
			${headerExampleMarkup(hasMinimizedSideNav, updateArgs)}
			${when(hasSideNavigation, () => sideNavigationMarkup)}
			<div
				class=${classMap({
					[`${rootClass}-content`]: true,
					[`${rootClass}-content--${contentLayout}`]: typeof contentLayout !== "undefined" && contentLayout !== "default",
				})}
			>
				<main>
					<section class="spectrum-AppFrame-section spectrum-AppFrame-content-intro">
						<div class="spectrum-Typography">
							<h1 class="spectrum-Heading spectrum-Heading--sizeM spectrum-AppFrame-section-heading">Welcome to Example App, Frodo</h1>
							<div class="spectrum-AppFrame-section-grid">
								<div class="spectrum-AppFrame-section-grid-item--wide" style=${styleMap(emphasizedContainerStyles)}></div>
								${Array.from({length: 3}, () => 
									html`<div style=${styleMap(emphasizedContainerStyles)}></div>`
								)}
							</div>
						</div>
					</section>
					<section class="spectrum-AppFrame-section">
						<div class="spectrum-AppFrame-section-inner">
							${Typography({
								semantics: "heading",
								size: "m",
								content: ["Start something new"],
								customClasses: ["spectrum-AppFrame-section-heading"],
							})}
							<div class="spectrum-AppFrame-section-grid">
								<div class="spectrum-AppFrame-section-grid-item--wide" style=${styleMap(emphasizedContainerStyles)}></div>
								${Array.from({length: 3}, () => 
									html`<div style=${styleMap(emphasizedContainerStyles)}></div>`
								)}
							</div>
						</div>
						<div class="spectrum-AppFrame-section-inner">
							${Typography({
								semantics: "heading",
								size: "m",
								content: ["Recent files"],
								customClasses: ["spectrum-AppFrame-section-heading"],
							})}
							<ul class="spectrum-AppFrame-section-grid">
								${Array.from({length: 20}, () => 
									html`<li style=${styleMap(emphasizedContainerStyles)}></li>`
								)}
							</ul>
						</div>
						<div class="spectrum-AppFrame-section-inner spectrum-Typography">
							${Typography({
								semantics: "heading",
								size: "m",
								content: ["Another example inner area within a section"],
								customClasses: ["spectrum-AppFrame-section-heading"],
							})}
							${Typography({
								semantics: "body",
								size: "m",
								content: ["Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet suscipit convallis cubilia etiam taciti nascetur ad. Eros parturient molestie curabitur dui risus arcu. Luctus dictum in ultricies nisl dolor parturient mus. Lorem ipsum odor amet, consectetuer adipiscing elit."],
							})}
							${Typography({
								semantics: "body",
								size: "m",
								content: ["Pretium adipiscing felis facilisi sem primis primis scelerisque placerat. Facilisi mus curabitur rutrum mus, velit quisque neque vitae tempor. Efficitur mauris pharetra lectus pulvinar pulvinar sociosqu feugiat sociosqu mi. Efficitur dis est mattis interdum fermentum potenti ligula efficitur. Montes per ligula tempus aliquet tortor nam magnis nibh. Mi venenatis risus magnis nec elit eget aenean purus."],
							})}
							${Typography({
								semantics: "body",
								size: "m",
								content: ["Nec venenatis dapibus dictum laoreet litora, pulvinar pretium mi. Accumsan eget erat euismod; nullam egestas porttitor imperdiet odio. Rhoncus gravida metus platea maecenas eleifend. Maximus dictum quis orci vehicula hac euismod lorem arcu. Velit fames fermentum montes fusce consectetur finibus diam. Ex fames eros a habitant urna molestie. Sit congue porttitor proin facilisi consectetur litora facilisi. Aliquam maecenas feugiat mi integer erat. Molestie gravida augue dapibus aenean purus maximus facilisis venenatis metus."],
							})}
							${Typography({
								semantics: "body",
								size: "m",
								content: ["Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet suscipit convallis cubilia etiam taciti nascetur ad. Eros parturient molestie curabitur dui risus arcu. Luctus dictum in ultricies nisl dolor parturient mus. Lorem ipsum odor amet, consectetuer adipiscing elit."],
							})}
						</div>
					</section>
				</main>
			</div>
		</div>
	`;
};

/**
 * Example content within the header, for prototyping.
 * 
 * To-do: this should go away when Header becomes its own full-fledged component.
 */
var headerExampleMarkup = (hasMinimizedSideNav, updateArgs) => html`
	<header
		class="spectrum-AppFrame-header"
		style=${styleMap({
			boxSizing: "border-box",
			padding: "var(--spectrum-spacing-200)",
			blockSize: "var(--spectrum-component-height-400)",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			gap: "var(--spectrum-spacing-200)",
		})}
	>
		${ActionButton({
			/* To-do: Uses S2 icon name "MenuHamburger" instead of "ShowMenu". */
			iconName: hasMinimizedSideNav ? "ShowMenu" : "ChevronDoubleLeft",
			isQuiet: true,
			hideLabel: true,
			onclick: () => {
				// Toggle minimized or expanded side nav on click.
				updateArgs?.({ hasMinimizedSideNav: !hasMinimizedSideNav });
			},
		})}
		<svg width="32" height="28" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg">
			<path d="M31.6166 17.056C32.1285 17.3754 32.1276 18.121 31.6149 18.4392L16.8589 27.5953C16.3328 27.9217 15.6672 27.9217 15.1411 27.5953L0.385079 18.4392C-0.127612 18.121 -0.128535 17.3754 0.383367 17.056L4.37454 14.5657L15.1458 21.1982C15.6696 21.5207 16.3304 21.5207 16.8542 21.1982L27.6255 14.5657L31.6166 17.056Z" fill="#B2D2FB"/>
			<path d="M23.2149 8.06635L16.8601 12.0003C16.3349 12.3254 15.671 12.3255 15.1456 12.0006L8.78513 8.06635L5.50459 10.0851C4.98778 10.4031 4.98771 11.1543 5.50447 11.4725L15.1466 17.4083C15.6715 17.7314 16.3339 17.7306 16.858 17.4062L26.4532 11.4676C26.9669 11.1497 26.9679 10.4028 26.455 10.0835L23.2149 8.06635Z" fill="#7BA7FD"/>
			<path d="M16.8566 0.406954C16.3319 0.0795215 15.6669 0.0775159 15.1402 0.401778L9.87172 3.64514C9.35572 3.96279 9.35485 4.71257 9.87011 5.03143L15.1038 8.27019C15.6298 8.59567 16.2947 8.59522 16.8202 8.26903L22.043 5.02723C22.5556 4.70906 22.5565 3.96348 22.0447 3.64411L16.8566 0.406954Z" fill="#3562FF"/>
		</svg>
		<span style=${styleMap({
			fontSize: "var(--spectrum-font-size-200)",
			fontWeight: "700",
		})}>Example App</span>
	</div>
`;