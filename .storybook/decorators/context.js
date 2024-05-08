import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons, makeDecorator, useEffect } from "@storybook/preview-api";

import isChromatic from "chromatic/isChromatic";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args = {}, globals = {}, viewMode } = context;
		let { color = "light", express = false, scale = "medium" } = globals;
		const { rootClass } = args;

		if (!window) window = {};

		const isDocs = viewMode === "docs";
		const isExpress = Boolean(express);
		let shouldRefresh = false;

		if (scale !== window.scale) {
			window.scale = scale;
			shouldRefresh = true;
		}
		if (color !== window.color) {
			window.color = color;
			shouldRefresh = true;
		}
		if (isExpress !== window.isExpress) {
			window.isExpress = isExpress;
			shouldRefresh = true;
		}

		useEffect(() => {
			const isVRT = (window.isChromatic && window.isChromatic()) || isChromatic();

			let containers = [document.body, ...document.querySelectorAll(".docs-story,#storybook-docs,[data-preview-styles]")];
			let scopedContainers = [];
			if (document.querySelector("[data-preview-styles]")) {
				scopedContainers = [...document.querySelectorAll("[data-preview-styles]")];
			}

			if (!(isDocs || isVRT) || containers.length === 0) containers = [document.body];

			[...containers, ...scopedContainers].forEach(container => {
				container.classList.toggle("spectrum", true);

				container.classList.toggle("spectrum--express", isExpress);

				for (const c of ["light", "dark", "darkest"]) {
					container.classList.toggle(`spectrum--${c}`, c === window.color);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === window.scale);
				}
			});

			scopedContainers.forEach(container => {
				container.style.removeProperty("background");

				const hasStaticElement = container.querySelector(`.${rootClass}--staticWhite, .${rootClass}--staticBlack, .${rootClass}--overBackground`);
				if (hasStaticElement) {
					if (container.querySelector(`.${rootClass}--staticBlack`)) {
						container.style.background = "rgb(181, 209, 211)";
						container.classList.toggle(`spectrum--light`, true);
						shouldRefresh = true;
					} else if (container.querySelector(`.${rootClass}--staticWhite, .${rootClass}--overBackground`)) {
						container.style.background = "rgb(15, 121, 125)";
						container.classList.toggle(`spectrum--dark`, true);
						shouldRefresh = true;
					}
				}
			});

			if (shouldRefresh) {
				// Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
				addons.getChannel().emit(FORCE_RE_RENDER);
			}
		}, [window, color, scale, isExpress, isDocs, rootClass]);

		return StoryFn(context);
	},
});
