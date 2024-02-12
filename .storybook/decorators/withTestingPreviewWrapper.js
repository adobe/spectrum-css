import { makeDecorator, useEffect } from "@storybook/preview-api";

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

        function init(isTestingPreview = false) {
            if (!window) window = {};
            // Prevents the "isChromatic" function from being over written
            if (typeof window.isChromatic !== "function") {
                // If we're not in Chromatic and we want to show the testing preview, we need to override the isChromatic function
                // Otherwise, we need to reset it to the original function (in case it was overridden previously)
                window.isChromatic = typeof isChromatic === "function" && isChromatic() ? isChromatic : () => isTestingPreview;
            }
        }

        init(globals.testingPreview);

        useEffect(() => init(globals.testingPreview), [globals.testingPreview]);

        return StoryFn(context);
	},
});
