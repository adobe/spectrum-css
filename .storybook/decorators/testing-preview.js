import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons, makeDecorator, useCallback } from "@storybook/preview-api";
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

		// Function that will update the global value and trigger a UI refresh.
		const refreshAndUpdateGlobal = () => {
			init();

			// Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
			addons.getChannel().emit(FORCE_RE_RENDER);
		};

		init();

		useCallback(() => refreshAndUpdateGlobal(), [testingPreview]);

		return StoryFn(context);
	},
});
