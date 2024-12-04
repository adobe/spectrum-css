import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers, toggleStyles } from "./helpers.js";

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
			} = {},
			parameters: {
				showTestingGrid = false,
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
			const isDocs = viewMode === "docs";
			const isTesting = showTestingGrid;
			const isRaw = Boolean(context === "raw");

			if (!isRaw) {
				// add the default classes to the body to ensure labels, headings, and borders are styled correctly
				document.body.classList.add("spectrum", "spectrum--light", "spectrum--medium");
			}

			// Start by attaching the appropriate tokens to the container
			toggleStyles(document.body, "tokens", tokens, !isRaw);

			for (const container of fetchContainers(id, isDocs, isTesting)) {
				// Check if the container is a testing wrapper to prevent applying colors around the testing grid
				const isTestingWrapper = isTesting ? container.matches("body:has([data-testing-preview]),[data-testing-preview]") : false;
				// Check if the container has a static color element
				let hasStaticElement = container.matches(`:has([data-html-preview])`) ? container.matches(`:has([data-html-preview] .${rootClass}--staticWhite, [data-html-preview] .${rootClass}--staticBlack)`) : container.matches(`:has(.${rootClass}--staticWhite, .${rootClass}--staticBlack)`);

				// Reset the context to the original values
				color = original.color;
				context = original.context;
				scale = original.scale;

				let staticKey = staticColor;
				if (!isTestingWrapper && !staticKey && hasStaticElement) {
					staticKey = (
						container.querySelector(`.${rootClass}--staticWhite`) && "white" ||
						container.querySelector(`.${rootClass}--staticBlack`) && "black"
					);
				}

				// If we can't determine the static key, we can't use the static color
				if (!staticKey) hasStaticElement = false;

				// Every container gets the spectrum class
				container.classList.toggle("spectrum", !isRaw);

				// Let the static color override the color if it's set
				if (!isTestingWrapper && hasStaticElement && staticColorSettings[staticKey]?.color) {
					color = staticColorSettings[staticKey].color;
				}

				// Force a light theme for the body wrapper in testing preview mode
				// because the individual containers will bring in the correct theme
				if (isTestingWrapper) {
					color = "light";
				}

				for (let c of ["light", "dark"]) {
					container.classList.toggle(`spectrum--${c}`, c === color && !isRaw);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale && !isRaw);
				}

				if (!isTestingWrapper) {
					if (hasStaticElement && staticKey && staticColorSettings[staticKey]) {
						container.style.background = staticColorSettings[staticKey].background;
					}
				} else {
					// Testing background is stark white to highlight the gray-ish background color on light theme
					container.style.background = "Canvas";
				}
			}

		}, [context, viewMode, original, staticColor, color, scale, rootClass, tokens, staticColorSettings, showTestingGrid]);

		return StoryFn(data);
	},
});
