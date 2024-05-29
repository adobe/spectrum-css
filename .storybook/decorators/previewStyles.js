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

		// Force surrounding padding when in VRT mode
		// @todo source this from settings
		const isTestingPreview = window?.isTestEnv && window?.isTestEnv();
		return html`
			<section class="spectrum-story-container" style=${styleMap({
				"padding": isTestingPreview ? "12px" : undefined,
				...wrapperStyles
			})}>
				${StoryFn(context)}
			</section>
		`;
	}
});
