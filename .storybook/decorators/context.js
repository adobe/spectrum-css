import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers, toggleStyles } from "./helpers.js";

import legacy from "@spectrum-css/tokens-legacy?inline";
import tokens from "@spectrum-css/tokens?inline";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, data) => {
		let {
			args: {
				rootClass,
				staticColor,
			} = {},
			globals: {
				color = "light",
				context = "spectrum",
				scale = "medium",
			} = {},
			viewMode,
			id,
		} = data;

		const staticColorSettings = {
			"black": {
				background: "var(--spectrum-docs-static-black-background-color)",
				color: "light"
			},
			"white": {
				background: "var(--spectrum-docs-static-white-background-color)",
				color: "dark"
			},
		};

		useEffect(() => {
			const isRaw = Boolean(context === "raw");
			const isModern = Boolean(context === "spectrum");
			const isExpress = Boolean(context === "express");

			// viewMode is either "docs" or "story"
			if (viewMode === "docs" && !isRaw) {
				// add the default classes to the body to ensure labels, headings, and borders are styled correctly
				document.body.classList.add("spectrum", "spectrum--light", "spectrum--medium");
			}

			for (const container of fetchContainers(id, viewMode === "docs")) {
				// Start by attaching the appropriate tokens to the container
				toggleStyles(container, "tokens", tokens, isModern && !isRaw);
				toggleStyles(container, "tokens-legacy", legacy, !isModern && !isRaw);

				// Check if the container has a static color element
				const hasStaticElement = container.matches(`:has(.${rootClass}--staticWhite, .${rootClass}--staticBlack, .${rootClass}--overBackground)`);
				let staticKey = staticColor;
				if (!staticKey && hasStaticElement) {
					staticKey = (
						container.querySelector(`.${rootClass}--staticWhite`) && "white" ||
						container.querySelector(`.${rootClass}--staticBlack, .${rootClass}--overBackground`) && "black"
					);
				}

				// Every container gets the spectrum class
				container.classList.toggle("spectrum", !isRaw);

				// S1 and S1 Express get the legacy class
				container.classList.toggle("spectrum--legacy", !isRaw && !isModern);
				// Express only gets the express class
				container.classList.toggle("spectrum--express", !isRaw && isExpress);

				// Darkest is deprecated in Spectrum 2
				if (isModern && color === "darkest") color = "dark";

				for (let c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
                    const isColor = c === staticColorSettings[staticKey]?.color || !staticKey && c === color;

					container.classList.toggle(`spectrum--${c}`, isColor && !isRaw);
				}

				for (const s of ["medium", "large"]) {
                    const isScale = s === scale;
					container.classList.toggle(`spectrum--${s}`, isScale && !isRaw);
				}

				// Start by removing the background color from the container and then add it back if needed
				container.style.removeProperty("background");
				if (hasStaticElement && staticKey && staticColorSettings[staticKey]) {
					container.style.background = staticColorSettings[staticKey].background;
				}
			}
		}, [color, context, staticColor, scale, viewMode, rootClass, staticColorSettings]);

		return StoryFn(data);
	},
});
