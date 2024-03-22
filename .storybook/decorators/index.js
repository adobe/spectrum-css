import { makeDecorator, useEffect } from "@storybook/preview-api";
import { html } from "lit";

export { withActions } from "@storybook/addon-actions/decorator";
export { withContextWrapper } from "./contextsWrapper.js";
export { withTestingPreviewWrapper } from "./withTestingPreviewWrapper.js";

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
			if (textDirection) document.documentElement.dir = textDirection;
		}, [textDirection]);

		return StoryFn(context);
	},
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withReducedMotionWrapper = makeDecorator({
	name: "withReducedMotionWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { globals, parameters } = context;
		const reducedMotion = parameters.reducedMotion ?? globals.reducedMotion ?? false;

		if (!reducedMotion) return StoryFn(context);

		return html`
			<style data-source="decorator">
				.spectrum {
                    --spectrum-animation-duration-100: 0ms;
                    --spectrum-animation-duration-200: 0ms;
                    --spectrum-animation-duration-300: 0ms;
                    --spectrum-animation-duration-400: 0ms;
                    --spectrum-animation-duration-500: 0ms;
                    --spectrum-animation-duration-600: 0ms;
                    --spectrum-animation-duration-700: 0ms;
                    --spectrum-animation-duration-800: 0ms;
                    --spectrum-animation-duration-900: 0ms;
                    --spectrum-animation-duration-1000: 0ms;
                    --spectrum-animation-duration-2000: 0ms;
                    --spectrum-animation-duration-4000: 0ms;
                    --spectrum-coachmark-animation-indicator-ring-duration: 0ms;
                }
            </style>
			${StoryFn(context)}
		`;
	},
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withLanguageWrapper = makeDecorator({
	name: "withLanguageWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { parameters, globals } = context;
		const lang = globals.lang ?? parameters.lang;

		useEffect(() => {
			if (lang) document.documentElement.lang = lang;
		}, [lang]);

		return StoryFn(context);
	},
});
