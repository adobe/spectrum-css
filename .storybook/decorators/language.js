import { html } from "lit";

import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withLanguageWrapper = makeDecorator({
	name: "withLanguageWrapper",
	parameterName: "lang",
	wrapper: (StoryFn, context) => {
		const { parameters, globals } = context;
		const lang = globals.lang ?? parameters.lang;

		useEffect(() => {
			document.documentElement.lang = lang;
		}, [lang]);

		return html`${StoryFn(context)}`;
	},
});
