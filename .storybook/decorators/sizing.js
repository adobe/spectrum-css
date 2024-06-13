import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withSizingWrapper = makeDecorator({
	name: "withSizingWrapper",
	parameterName: "sizing",
	wrapper: (StoryFn, context) => {
		const { argTypes = {} } = context;
		const sizes = argTypes.size?.options ?? [];
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
		<div style=${styleMap({ "display": sizes.length === 0 || !window.isTestEnv() ? undefined : "none" })}>
			${StoryFn(context)}
		</div>
		<div data-size-container style=${styleMap({
			"display": sizes.length === 0 || !window.isTestEnv() ? "none" : "flex",
			"flex-direction": "column",
			"align-items": "flex-start",
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
