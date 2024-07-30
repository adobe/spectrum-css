import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Ensures the Underlay component is rendered only once.
 **/
export const withUnderlayWrapper = makeDecorator({
	name: "withUnderlayWrapper",
	parameterName: "withUnderlay",
	wrapper: (StoryFn, context) => {
		const {
            args: {
                isOpen = false,
            } = {},
			globals: {
				testingPreview = false,
			} = {},
		} = context;

		return html`
            ${Underlay({
				isOpen,
				customStyles: {
					"block-size": testingPreview ? "100%" : undefined,
					"inline-size": testingPreview ? "100%" : undefined,
				},
			}, context)}
            ${StoryFn(context)}
        `;
	},
});
