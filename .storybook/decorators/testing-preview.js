import { makeDecorator, useCallback } from "@storybook/preview-api";
import isChromatic from "chromatic/isChromatic";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Lets you preview the Chromatic testing view locally
 **/
export const withTestingPreviewWrapper = makeDecorator({
	name: "withTestingPreviewWrapper",
	parameterName: "testingPreview",
	wrapper: (StoryFn, context) => {
		const {
			globals: {
				testingPreview = false,
			} = {},
			viewMode,
		} = context;

		const init = () => {
			window.isChromatic = typeof isChromatic === "function" && isChromatic() === true ? isChromatic : () => testingPreview && viewMode !== "docs";
		};

		init();

		useCallback(() => init(), [testingPreview]);

		return StoryFn(context);
	},
});
