import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { when } from "lit/directives/when.js";

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
			parameters: {
				withUnderlay = true
			} = {},
		} = context;

		// Expand the underlay to fill the entire screen when testing previews
		// to ensure the underlay is always visible in snapshots
		return html`
			${when(withUnderlay, () => Underlay({ isOpen }, context))}
			${StoryFn(context)}
        `;
	},
});
