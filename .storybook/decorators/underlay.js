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

		if (testingPreview) {
			document.addEventListener("DOMContentLoaded", () => {
				// Ensure the #storybook-root (used by Chromatic for snapshots)
				// is positioned relative to allow the underlay to fill the screen
				document.getElementById("storybook-root").style.position = "relative";
				document.getElementById("storybook-root").style.inlineSize = "fit-content";
			});
		}

		// Expand the underlay to fill the entire screen when testing previews
		// to ensure the underlay is always visible in snapshots
		return html`
			${Underlay({
				isOpen,
				customStyles: {
					"position": testingPreview ? "absolute" : undefined,
					"block-size": testingPreview ? "100%" : undefined,
					"inline-size": testingPreview ? "100%" : undefined,
				},
			}, context)}
			${StoryFn(context)}
        `;
	},
});
