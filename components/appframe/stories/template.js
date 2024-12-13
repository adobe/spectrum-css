import { Template as AppFrameSideNav } from "@spectrum-css/appframesidenav/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
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
	hasCondensedSideNav = false,
	id,
	customClasses = [],
	customStyles = {},
}) => {
	const sideNavigationMarkup = AppFrameSideNav({
		isCondensed: hasCondensedSideNav,
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
			<header class="spectrum-AppFrame-header"></header>
			${when(hasSideNavigation, () => sideNavigationMarkup)}
			<div class="spectrum-AppFrame-content">
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
