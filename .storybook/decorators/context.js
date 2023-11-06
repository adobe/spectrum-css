import { makeDecorator, useEffect } from "@storybook/preview-api";

import "@spectrum-css/expressvars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-global.css";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export default makeDecorator({
	name: "withContextWrapper",
	parameterName: "express",
	wrapper: (StoryFn, context) => {
		const { express = false } = context.globals;
		const foldername = context.component.toLowerCase().replace(/\s*/g, "");
		const isDocs = context.viewMode === "docs";

		useEffect(() => {
			let containers = [document.body];
			if (isDocs) containers =  [...document.querySelectorAll(".docs-story")] ?? containers;
			if (!containers) return;

			containers.forEach(container => {
				container.classList.toggle("spectrum", true);
				container.classList.toggle("spectrum--express", express);
			});

			try {
				if (!express) import(`@spectrum-css/${foldername}/themes/spectrum.css`);
				else import(`@spectrum-css/${foldername}/themes/express.css`);
			} catch (e) {
				console.warn(e);
			}

		}, [express]);

		return StoryFn(context);
	},
});
