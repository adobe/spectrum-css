import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Ensures the Underlay component is rendered only once.
 **/
export const withOverlayWrapper = makeDecorator({
	name: "withOverlayWrapper",
	parameterName: "withOverlay",
	// @todo: should this be opt-in?
	// skipIfNoParametersOrOptions: true,
	wrapper: (StoryFn, context) => {
		const {
            args: {
                isOpen = false,
            } = {},
		} = context;

		return html`
            ${Underlay({ isOpen }, context)}
            ${StoryFn(context)}
        `;
	},
});
