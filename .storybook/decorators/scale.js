import { makeDecorator, useEffect } from "@storybook/preview-api";

import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export default makeDecorator({
	name: "withScaleWrapper",
	parameterName: "scale",
	wrapper: (StoryFn, context) => {
		const { globals, globalTypes, viewMode } = context;

		const getDefaultValue = (type) => {
			if (!type) return;
			if (type.defaultValue) return type.defaultValue;
			if (type.options) return type.options[0];
			return;
		};

		/** @type string */
		const scale = globals.scale ? globals.scale : getDefaultValue(globalTypes.scale) ?? "medium";

		useEffect(() => {
			const isDocs = viewMode === "docs";
			let containers = [document.body];
			if (isDocs) containers =  [...document.querySelectorAll(".docs-story")] ?? containers;
			if (!containers) return;

			containers.forEach(container => {
				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}
			});
		}, [scale, viewMode]);

		return StoryFn(context);
	},
});
