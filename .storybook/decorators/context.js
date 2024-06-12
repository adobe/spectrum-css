import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers, fetchStyleContainer, toggleStyles } from "./helpers";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, data) => {
		const {
			args: {
				rootClass,
				staticColor,
			} = {},
			globals: {
				color = "light",
				context = "spectrum1",
				scale = "medium",
			} = {},
			viewMode,
			id,
			loaded: {
				tokens = {},
			} = {}
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

		window.__color = color;
		window.__context = context;
		window.__scale = scale;

		useEffect(() => {
			const isExpress = Boolean(context === "express");
			const isLegacy = Boolean(context !== "spectrum2");

			// viewMode is either "docs" or "story"
			if (viewMode === "docs") {
				// add the default classes to the body to ensure labels, headings, and borders are styled correctly
				document.body.classList.add("spectrum", "spectrum--light", "spectrum--medium");
			}

			for (const container of fetchContainers(id, viewMode === "docs")) {
				// Wrapper div for all injected styles
				const styleContainer = fetchStyleContainer("styles-container", container);

				// Individual style containers for global, colors, scales, and context
				const globalContainer = fetchStyleContainer("global", styleContainer);
				const colorsContainer = fetchStyleContainer("colors", styleContainer);
				const scalesContainer = fetchStyleContainer("scale", styleContainer);
				const contextContainer = fetchStyleContainer("context", styleContainer);

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
				container.classList.toggle("spectrum", true);

				// S1 and S1 Express get the legacy class
				container.classList.toggle("spectrum--legacy", isLegacy);
				// Express only gets the express class
				container.classList.toggle("spectrum--express", isExpress);

				// Add/remove the base styles for the global, spectrum, and express contexts
				toggleStyles(globalContainer, "vars-base", tokens?.global?.base, true);
				toggleStyles(contextContainer, "vars-base-spectrum", tokens?.spectrum?.base, true); // @todo this probably becomes "legacy" in the updated system
				toggleStyles(contextContainer, "vars-base-express", tokens?.express?.base, isExpress);

				// @todo note that darkest is being deprecated in the S2 system
				for (const c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
                    const isColor = c === staticColorSettings[staticKey]?.color || !staticKey && c === color;

					container.classList.toggle(`spectrum--${c}`, isColor);

					toggleStyles(colorsContainer, `vars-${c}`, tokens?.global?.[c], isColor);
					toggleStyles(colorsContainer, `vars-${c}-spectrum`, tokens?.spectrum?.[c], isColor);
					toggleStyles(colorsContainer, `vars-${c}-express`, tokens?.express?.[c], isExpress && isColor);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);

					toggleStyles(scalesContainer, `vars-${s}`, tokens?.global?.[s], s === scale);
					toggleStyles(scalesContainer, `vars-${s}-spectrum`, tokens?.spectrum?.[s], s === scale);
					toggleStyles(scalesContainer, `vars-${s}-express`, tokens?.express?.[s], isExpress && s === scale);
				}

				// Start by removing the background color from the container and then add it back if needed
				container.style.removeProperty("background");
				if (hasStaticElement && staticKey && staticColorSettings[staticKey]) {
					container.style.background = staticColorSettings[staticKey].background;
				}
			}
		}, [color, context, staticColor, scale, viewMode, rootClass]);

		return StoryFn(data);
	},
});
