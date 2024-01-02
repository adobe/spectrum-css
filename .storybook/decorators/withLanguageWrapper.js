import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withLanguageWrapper = makeDecorator({
	name: "withLanguageWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { globals } = context;
		const lang = globals.lang;

		useEffect(() => {
			if (lang) document.documentElement.lang = lang;
		}, [lang]);

		return StoryFn(context);
	},
});
