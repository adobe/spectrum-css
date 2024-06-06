import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Sets the text direction of the document, using the global set with a toolbar control. These properties are assigned to the document root element.
 **/
export const withTextDirectionWrapper = makeDecorator({
	name: "withTextDirectionWrapper",
	parameterName: "textDecoration",
	wrapper: (StoryFn, context) => {
		const { globals, parameters } = context;
		const defaultDirection = "ltr"
		const textDirection = parameters.textDirection || globals.textDirection || defaultDirection;

		useEffect(() => {
			if (textDirection) document.documentElement.dir = textDirection;
		}, [textDirection]);

		return StoryFn(context);
	},
});
