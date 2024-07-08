import { makeDecorator } from "@storybook/preview-api";
import isChromatic from "chromatic/isChromatic";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Lets you preview the Chromatic testing view locally. Sets a boolean for context.isChromaticView
 * 	to be used for conditional rendering within story templates.
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

		// Ensure context.args exists.
		context.args = context.args ?? {};
	
		// Add a boolean to the context that indicates whether the Chromatic view is enabled.
		context.args.isChromaticView = isChromaticViewEnabled(testingPreview, viewMode === "docs");

		// Backwards compatibility with existing use of this custom function.
		// @todo This can be removed from window after changing everywhere it is accessed to use args.isChromaticView instead.
		window.isChromatic = () => context.args.isChromaticView;

		return StoryFn(context);
	},
});

/**
 * Whether Chromatic is viewing the story, or the user has turned on the global
 * parameter through the toolbar to view the Chromatic template.
 * 
 * Always returns false when viewing autodocs.
 * 
 * @param {boolean} isTestingPreview
 * @param {boolean} isDocsPage
 * @returns {boolean}
 */
const isChromaticViewEnabled = (isTestingPreview, isDocsPage) => {
	// Use Chromatic's method to determine whether the story is being viewed by Chromatic.
	if (isChromatic?.()) {
		return true;
	}
	// Otherwise, check if the testing preview should be shown to the user in Storybook.
	return isTestingPreview === true && isDocsPage === false;
}
