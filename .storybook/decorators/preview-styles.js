import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";


import { makeDecorator } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withWrapperStyles = makeDecorator({
	name: "withWrapperStyles",
	parameterName: "wrapperStyles",
	wrapper: (StoryFn, context) => {
		const { args = {}, parameters = {} } = context;
		const wrapperStyles = parameters.wrapperStyles ?? args.wrapperStyles;

		if (typeof wrapperStyles === "undefined") return StoryFn(context);

		parameters.html.root = ".custom-story-wrapper";

		return html`
			<section class="custom-story-wrapper" style=${styleMap(wrapperStyles)}>
				${StoryFn(context)}
			</section>
		`;
	}
});
