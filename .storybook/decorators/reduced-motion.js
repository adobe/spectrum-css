import { html } from "lit";

import { makeDecorator } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withReducedMotionWrapper = makeDecorator({
	name: "withReducedMotionWrapper",
	parameterName: "reducedMotion",
	wrapper: (StoryFn, context) => {
		const { globals, parameters } = context;
		const reducedMotion = parameters.reducedMotion ?? globals.reducedMotion ?? false;

		if (!reducedMotion) return html`${StoryFn(context)}`;

		return html`
			<style data-source="decorator">
				.spectrum {
					--spectrum-animation-duration-0: 0ms;
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
