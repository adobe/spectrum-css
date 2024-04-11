import { html } from "lit";

import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { globals, globalTypes, viewMode } = context;
		const isDocs = viewMode === "docs";

		const getDefaultValue = (type) => {
			if (!type) return;
			if (type.defaultValue) return type.defaultValue;
			if (type.toolbar?.items?.length > 0 && type.toolbar.items[0]?.value) {
				return type.toolbar.items[0].value;
			}
			return;
		};

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type boolean */
		const isExpress = globals.express ?? getDefaultValue(globalTypes.express);
		/** @type string */
		const color = globals.color ?? getDefaultValue(globalTypes.color) ?? "light";
		/** @type string */
		const scale = globals.scale ?? getDefaultValue(globalTypes.scale) ?? "medium";

		const colors = ["light", "dark", "darkest"];
		const scales = ["medium", "large"];

		if (scale !== window.scale) window.scale = scale;
		if (color !== window.color) window.color = color;
		if (isExpress !== window.isExpress) window.isExpress = isExpress;

		useEffect(() => {
			let containers = [...document.querySelectorAll(".docs-story,#storybook-docs")];
			if (containers.length === 0 || !isDocs) containers = [document.body];
			console.log({ containers });

			if (!containers) return;

			containers.forEach(container => {
				container.classList.toggle("spectrum", true);

				container.classList.toggle("spectrum--express", isExpress);

				for (const c of colors) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}

				for (const s of scales) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}
			});
		}, [isDocs, color, scale, isExpress]);

		return html`${StoryFn(context)}`;
	},
});
