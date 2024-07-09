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
			const isRaw = Boolean(context === "raw");
			const isDefault = Boolean(context === "spectrum");
			const isExpress = Boolean(context === "express");
			const isLegacy = Boolean(context === "legacy");

			// viewMode is either "docs" or "story"
			if (viewMode === "docs" && !isRaw) {
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
				container.classList.toggle("spectrum", !isRaw);

				// S1 and S1 Express get the legacy class
				container.classList.toggle("spectrum--legacy", isLegacy || isExpress);
				// Express only gets the express class
				container.classList.toggle("spectrum--express", isExpress);

				// Add/remove the base styles for the global, spectrum, and express contexts
				toggleStyles(globalContainer, "vars-shared", tokens?.base, isDefault);
				toggleStyles(globalContainer, "vars-shared-legacy-express", legacy?.global?.base, isLegacy || isExpress);
				toggleStyles(contextContainer, "vars-shared-legacy", legacy?.spectrum?.base, isLegacy);
				toggleStyles(contextContainer, "vars-shared-express", legacy?.express?.base, isExpress);

				// Darkest is deprecated in Spectrum 2
				if (!isLegacy && color === "darkest") color = "dark";

				for (let c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
                    const isColor = c === staticColorSettings[staticKey]?.color || !staticKey && c === color;

					container.classList.toggle(`spectrum--${c}`, isColor && !isRaw);

					toggleStyles(colorsContainer, `vars-${c}`, tokens?.[c], isColor && isDefault);
					toggleStyles(colorsContainer, `vars-${c}-legacy-express`, legacy?.global?.[c], isColor && (isLegacy || isExpress));
					toggleStyles(colorsContainer, `vars-${c}-legacy`, legacy?.spectrum?.[c], isColor && isLegacy);
					toggleStyles(colorsContainer, `vars-${c}-express`, legacy?.express?.[c], isColor && isExpress);
				}

				for (const s of ["medium", "large"]) {
                    const isScale = s === scale;
					container.classList.toggle(`spectrum--${s}`, isScale && !isRaw);

					toggleStyles(scalesContainer, `vars-${s}`, tokens?.[s], isScale && isDefault);
					toggleStyles(scalesContainer, `vars-${s}-legacy-express`, legacy?.global?.[s], isScale && (isLegacy || isExpress));
					toggleStyles(scalesContainer, `vars-${s}-legacy`, legacy?.spectrum?.[s], isScale && isLegacy);
					toggleStyles(scalesContainer, `vars-${s}-express`, legacy?.express?.[s], isScale && isExpress);
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
