import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { makeDecorator } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withSizingWrapper = makeDecorator({
	name: "withSizingWrapper",
	parameterName: "sizing",
	wrapper: (StoryFn, context) => {
		const { argTypes = {} } = context;

		// If there are no size options, return the story
		if (!argTypes.size) return StoryFn(context);

		const sizes = argTypes.size.options ?? [];

		if (sizes.length === 0 || !window.isChromatic()) return StoryFn(context);

		const sizeMap = {
			xxs: "Extra-extra-small",
			xs: "Extra-small",
			s: "Small",
			m: "Medium",
			l: "Large",
			xl: "Extra-large",
			xxl: "Extra-extra-large",
		};

		const Typography = import("@spectrum-css/typography/stories/template")?.Template ?? null;

		return html`
		<div data-size-container style=${styleMap({
			"display": "flex",
			"flex-direction": "column",
			"gap": "24px",
			"margin": "12px",
		})}>
			${sizes.map((size) => {
				context.args.size = size;
				return html`
					<div>
						${Typography({
							semantics: "heading",
							size: "xs",
							content: [sizeMap[size]],
						})}
						<div
							style=${styleMap({
								"border": "1px solid var(--spectrum-gray-600)",
								"border-radius": "4px",
								"overflow": "auto",
							})}
						>
							${StoryFn(context)}
						</div>
					</div>
				`;
			})}
		</div>`;
	},
});
