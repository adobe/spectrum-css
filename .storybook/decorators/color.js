import { makeDecorator, useEffect } from "@storybook/preview-api";

import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/vars/dist/spectrum-light.css";

import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export default makeDecorator({
	name: "withColorWrapper",
	parameterName: "color",
	wrapper: (StoryFn, context) => {
		const { globals, globalTypes, viewMode } = context;

		const getDefaultValue = (type) => {
			if (!type) return;
			if (type.defaultValue) return type.defaultValue;
			if (type.toolbar?.items?.length > 0 && type.toolbar.items[0]?.value) {
				return type.toolbar.items[0]?.value;
			}
			return;
		};

		/** @type string */
		const color = globals.color ? globals.color : getDefaultValue(globalTypes.color) ?? "light";

		useEffect(() => {
			const isDocs = viewMode === "docs";
			let containers = [document.body];
			if (isDocs) containers =  [...document.querySelectorAll(".docs-story")] ?? containers;
			if (!containers) return;

			containers.forEach(container => {
				for (const c of ["light", "dark", "darkest"]) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}
			});
		}, [color, viewMode]);

		return StoryFn(context);
	},
});
