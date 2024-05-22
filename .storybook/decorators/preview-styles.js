import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withWrapperStyles = makeDecorator({
	name: "withWrapperStyles",
	parameterName: "wrapperStyles",
	wrapper: (StoryFn, context) => {
		const { args = {}, parameters = {} } = context;
		const wrapperStyles = parameters.wrapperStyles ?? args.wrapperStyles;

		if (typeof wrapperStyles === "undefined") return html`${StoryFn(context)}`;

		parameters.html.root = ".custom-story-wrapper";

		return html`
			<section class="custom-story-wrapper" style=${styleMap(wrapperStyles)}>
				${html`${StoryFn(context)}`}
			</section>
		`;
	}
});
