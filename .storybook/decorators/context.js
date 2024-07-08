import "@spectrum-css/tokens/dist/index.css";
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
			globals = {},
			viewMode,
			id,
			loaded: {
				tokens = {},
				legacy = {},
			} = {}
		} = data;

		let color = globals.color ?? "light";
		let context = globals.context ?? "spectrum";
		let scale = globals.scale ?? "medium";

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
			const isExpress = Boolean(context === "express");
			const isLegacy = Boolean(context !== "spectrum");

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
				toggleStyles(globalContainer, "vars-base", !isLegacy ? tokens?.base : legacy?.global?.base, true);
				if (isLegacy) {
					toggleStyles(contextContainer, "vars-base-spectrum", legacy?.spectrum?.base, true); // @todo this probably becomes "legacy" in the updated system
					toggleStyles(contextContainer, "vars-base-express", legacy?.express?.base, isExpress);
				}

				// Darkest is deprecated in Spectrum 2
				if (!isLegacy && color === "darkest") color = "dark";

				for (let c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
                    const isColor = c === staticColorSettings[staticKey]?.color || !staticKey && c === color;

					container.classList.toggle(`spectrum--${c}`, isColor);

					toggleStyles(colorsContainer, `vars-${c}`, !isLegacy ? tokens?.[c] : legacy?.global?.[c], isColor);
					if (isLegacy) {
						toggleStyles(colorsContainer, `vars-${c}-spectrum`, legacy?.spectrum?.[c], isColor);
						toggleStyles(colorsContainer, `vars-${c}-express`, legacy?.express?.[c], isExpress && isColor);
					}
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);

					toggleStyles(scalesContainer, `vars-${s}`, !isLegacy ? tokens?.[s] : legacy?.global?.[s], s === scale);
					if (isLegacy) {
						toggleStyles(scalesContainer, `vars-${s}-spectrum`, legacy?.spectrum?.[s], s === scale);
						toggleStyles(scalesContainer, `vars-${s}-express`, legacy?.express?.[s], isExpress && s === scale);
					}
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
