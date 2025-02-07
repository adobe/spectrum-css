import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-IllustratedMessage",
	title,
	description,
	customClasses = [],
	hasButtons = false,
	isHorizontal = false,
	size = "m",
	customIllustration,
}) => {
	const descriptionContent = Array.isArray(description)
		? description
		: [() => html`${description}`];
	return html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--horizontal`]: isHorizontal,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined" && size !== "m",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
	${customIllustration
        ? customIllustration()
        : illustrationSvgMarkup(size)}
		<div class="${rootClass}-content">
			${when(
				title,
				() =>
					html`<h2 class="${rootClass}-heading">
						${title}
					</h2>`
			)}
			${when(
          descriptionContent,
          () =>
            html`<p
              class="${rootClass}-description"
            >
              ${descriptionContent.map((c) =>
                typeof c === "function" ? c({}) : c
              )}
            </p>`
        )}
			${when(hasButtons, () =>
				ButtonGroup({
					size,
					customClasses: ["spectrum-IllustratedMessage-actions"],
					items: [
						{
							variant: "secondary",
							treatment: "outline",
							label: "Remind me later",
						},
						{
							variant: "accent",
							treatment: "fill",
							label: "Rate now",
						},
					]
				})
			)}
		</div>
	</div>
`;
};

const illustrationSvgMarkup = (size = "m") => {
	const computedSize = size === "l" ? 160 : 96;
	return html`
	<svg class="spectrum-IllustratedMessage-illustration" xmlns="http://www.w3.org/2000/svg" width=${computedSize} height=${computedSize} viewBox="0 0 160 160" fill="none" preserveAspectRatio="xMinYMid slice">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2825 50.793C61.8957 37.7312 74.5092 28.5 89.3299 28.5C108.539 28.5 124.014 43.962 125.409 63.2651C140.627 65.9995 152 79.7949 152 96.1349C152 114.396 137.783 129.5 119.883 129.5C119.853 129.5 119.825 129.5 119.8 129.499C119.775 129.5 119.751 129.5 119.726 129.5H31.8807C31.7163 129.5 31.5543 129.49 31.3951 129.471C18.254 129.016 8 117.815 8 104.385C8 94.2115 13.8616 85.3693 22.4022 81.4428C22.3022 80.4808 22.2483 79.4993 22.2483 78.4996C22.2483 62.9094 34.3921 49.9713 49.734 49.9713C51.9924 49.9713 54.1854 50.2579 56.2825 50.793ZM32.2594 121.5H119.543C119.611 121.497 119.679 121.496 119.747 121.496C119.774 121.496 119.799 121.496 119.821 121.497C119.848 121.497 119.87 121.498 119.889 121.498C119.904 121.499 119.919 121.499 119.931 121.5C133.067 121.473 144 110.292 144 96.1349C144 82.4618 133.788 71.5539 121.259 70.8142C119.114 70.6875 117.453 68.8895 117.495 66.7416C117.5 66.5158 117.504 66.4133 117.507 66.3391C117.51 66.2659 117.512 66.2201 117.512 66.1104C117.512 49.5915 104.732 36.5 89.3299 36.5C76.895 36.5 66.2004 45.0052 62.5117 57.0028C62.1777 58.0892 61.3973 58.9822 60.3655 59.4587C59.3337 59.9353 58.1478 59.9504 57.1042 59.5002C54.8242 58.5168 52.3404 57.9713 49.734 57.9713C39.1343 57.9713 30.2483 66.9966 30.2483 78.4996C30.2483 80.0856 30.4387 81.6435 30.7778 83.175C31.235 85.2398 30.0059 87.3038 27.9726 87.8855C21.1678 89.8321 16 96.3955 16 104.385C16 113.898 23.2726 121.333 31.9497 121.483C32.054 121.485 32.1573 121.49 32.2594 121.5ZM119.959 121.501L119.957 121.501C119.967 121.501 119.973 121.502 119.959 121.501Z" />
    </svg>
  `;
};
