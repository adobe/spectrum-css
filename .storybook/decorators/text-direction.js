import { makeDecorator, useEffect } from "@storybook/preview-api";
import { html } from "lit";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Rendered as controls; these properties are assigned to the document root element
 **/
export const withTextDirectionWrapper = makeDecorator({
	name: "withTextDirectionWrapper",
	parameterName: "textDecoration",
	wrapper: (StoryFn, context) => {
		const { globals, parameters } = context;
		const textDirection = parameters.textDirection ?? globals.textDirection ?? "ltr";

		useEffect(() => {
			document.documentElement.dir = textDirection;
		}, [textDirection]);

		return html`${StoryFn(context)}`;
	},
});
