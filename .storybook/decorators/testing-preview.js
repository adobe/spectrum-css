import { html } from "lit";

import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons, makeDecorator, useEffect } from "@storybook/preview-api";

import isChromatic from "chromatic/isChromatic";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Lets you preview the Chromatic testing view locally
 **/
export const withTestingPreviewWrapper = makeDecorator({
	name: "withTestingPreviewWrapper",
	parameterName: "testingPreview",
    wrapper: (StoryFn, context) => {
        const { globals, parameters } = context;
        const isTestingPreview = parameters.testingPreview ?? globals.testingPreview ?? false;

        if (!window) window = {};

        // Global initializer
        window.isChromatic = typeof isChromatic === "function" && isChromatic() ? isChromatic : () => isTestingPreview;

        useEffect(() => {
            // Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
            addons.getChannel().emit(FORCE_RE_RENDER);
        }, [window, isTestingPreview]);

        return html`${StoryFn(context)}`;
	},
});
