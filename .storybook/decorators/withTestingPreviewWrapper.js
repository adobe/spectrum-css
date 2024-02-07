import { makeDecorator } from "@storybook/preview-api";

import isChromatic from "chromatic/isChromatic";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Lets you preview the Chromatic testing view locally
 **/
export const withTestingPreviewWrapper = makeDecorator({
	name: "withTestingPreviewWrapper",
	parameterName: "testingPreview",
	wrapper: (StoryFn, context) => {
        const { globals } = context;
        const showTestingPreview = globals.testingPreview ?? false;

        // If we're not in Chromatic and we want to show the testing preview, we need to override the isChromatic function
        if (!isChromatic() && showTestingPreview) {
            window.isChromatic = () => true;
        } else {
            // Otherwise, we need to reset it to the original function (in case it was overridden previously)
            window.isChromatic = isChromatic;
        }

        return StoryFn(context);
	},
});
