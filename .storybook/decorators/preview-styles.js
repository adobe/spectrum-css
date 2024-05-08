import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";


import { makeDecorator } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withPreviewStyles = makeDecorator({
	name: "withPreviewStyles",
	parameterName: "customStorybookStyles",
	wrapper: (StoryFn, context) => {
		const { args = {}, globals = {} } = context;
		let { color = "light", express = false, scale = "medium" } = globals;

		return html`
			<section
				data-preview-styles
				class=${classMap({
					"spectrum": true,
					"spectrum--express": Boolean(express),
					"spectrum--dark": color === "dark" || args.staticColor === "white",
					"spectrum--light": color === "light" || args.staticColor === "black",
					[`spectrum--darkest`]: color === "darkest",
					[`spectrum--${scale}`]: true,
				})}
				style=${styleMap({
					"padding": window.isChromatic() ? "12px" : undefined,
					"background": args.staticColor === "black" ? "rgb(181, 209, 211)" : args.staticColor === "white" ? "rgb(15, 121, 125)" : undefined,
					...(args.customStyles ?? {}),
					...(args.customStorybookStyles ?? {}),
				})}
			>
				${StoryFn(context)}
			</section>
		`;
	}
});
