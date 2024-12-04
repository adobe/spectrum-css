import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers, toggleStyles } from "./helpers.js";

import legacyTokens from "@spectrum-css/tokens-legacy/dist/index.css?inline";
import tokens from "@spectrum-css/tokens/dist/index.css?inline";

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
				testingPreview = false,
			} = {},
			id,
			viewMode,
		} = data;

		const staticColorSettings = {
			"black": {
				background: "var(--spectrum-examples-gradient-static-black)",
				color: "light"
			},
			"white": {
				background: "var(--spectrum-examples-gradient-static-white)",
				color: "dark"
			},
		};

		const original = {
			color,
			context,
			scale,
		};

		useEffect(() => {
			const isTesting = testingPreview;
			const isDocs = viewMode === "docs";
			const isRaw = Boolean(context === "raw");
			const isModern = Boolean(context === "spectrum");
			const isExpress = Boolean(context === "express");

			// Start by attaching the appropriate tokens to the container
			toggleStyles(document.body, "tokens", tokens, !isRaw);

			if (!isRaw) {
				// add the default classes to the body to ensure labels, headings, and borders are styled correctly
				document.body.classList.add("spectrum", "spectrum--light", "spectrum--medium");
			}

			// Start by attaching the appropriate tokens to the container
			toggleStyles(document.body, "tokens", isModern ? tokens : legacyTokens, !isRaw);

			for (const container of fetchContainers(id, isDocs, isTesting)) {
				// Reset the context to the original values
				color = original.color;
				context = original.context;
				scale = original.scale;

				// Check if the container has a static color element
				let hasStaticElement = container.matches(`:has([data-html-preview])`) ? container.matches(`:has([data-html-preview] .${rootClass}--staticWhite, [data-html-preview] .${rootClass}--staticBlack)`) : container.matches(`:has(.${rootClass}--staticWhite, .${rootClass}--staticBlack)`);

				let staticKey = staticColor;
				if (!staticKey && hasStaticElement) {
					staticKey = (
						container.querySelector(`.${rootClass}--staticWhite`) && "white" ||
						container.querySelector(`.${rootClass}--staticBlack`) && "black"
					);
				}

				// If we can't determine the static key, we can't use the static color
				if (!staticKey) hasStaticElement = false;

				// Every container gets the spectrum class
				container.classList.toggle("spectrum", !isRaw);

				// S1 and S1 Express get the legacy class
				container.classList.toggle("spectrum--legacy", !isModern && !isRaw);

				// Express only gets the express class
				container.classList.toggle("spectrum--express", isExpress && !isRaw);

				// Darkest is deprecated in Spectrum 2
				if (isModern && color === "darkest") {
					/* eslint-disable no-console -- notify that darkest was deprecated in S2 */
					console.warn("The 'darkest' color is deprecated in Spectrum 2. Please use 'dark' instead.");
					color = "dark";
				}

				// Let the static color override the color if it's set
				if (hasStaticElement && staticColorSettings[staticKey]?.color) {
					color = staticColorSettings[staticKey].color;
				}

				// Force a light theme for the body wrapper in testing preview mode
				// because the individual containers will bring in the correct theme
				if (isTesting && container.matches("body:has([data-testing-preview]")) {
					color = "light";
				}

				for (let c of ["light", "dark", "darkest"]) {
					container.classList.toggle(`spectrum--${c}`, c === color && !isRaw);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale && !isRaw);
				}

				// Start by removing the background color from the container and then add it back if needed
				container.style.removeProperty("background");
				if (hasStaticElement && staticKey && staticColorSettings[staticKey]) {
					container.style.background = staticColorSettings[staticKey].background;
				}
			}

		}, [context, viewMode, original, staticColor, color, scale, rootClass, tokens, legacyTokens, staticColorSettings, testingPreview]);

		return StoryFn(data);
	},
});
