import { makeDecorator } from "@storybook/preview-api";

import { html } from "lit";
/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withReducedMotionWrapper = makeDecorator({
	name: "withReducedMotionWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args } = context;
		const reducedMotion = args.reducedMotion;

		return html`
			${reducedMotion
				? html`
						<style data-source="decorator">
							.spectrum #root #root-inner {
								--spectrum-global-animation-duration-100: 0ms;
								--spectrum-global-animation-duration-200: 0ms;
								--spectrum-global-animation-duration-300: 0ms;
								--spectrum-global-animation-duration-400: 0ms;
								--spectrum-global-animation-duration-500: 0ms;
								--spectrum-global-animation-duration-600: 0ms;
								--spectrum-global-animation-duration-700: 0ms;
								--spectrum-global-animation-duration-800: 0ms;
								--spectrum-global-animation-duration-900: 0ms;
								--spectrum-global-animation-duration-1000: 0ms;
								--spectrum-global-animation-duration-2000: 0ms;
								--spectrum-global-animation-duration-4000: 0ms;
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
				  `
				: ""}
			${StoryFn(context)}
		`;
	},
});
