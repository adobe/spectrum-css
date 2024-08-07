import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers, toggleStyles } from "./helpers";

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
				context = "legacy",
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
				container.classList.toggle("spectrum--legacy", !isModern);
				// Express only gets the express class
				container.classList.toggle("spectrum--express", isExpress);

				// Add/remove the base styles for the global, spectrum, and express contexts
				toggleStyles(container, "vars-global", tokens?.global?.base, true);

				// Note: Express requires loading both spectrum + express tokens
				toggleStyles(container, "vars-shared-legacy", tokens?.spectrum?.base, !isModern);
				toggleStyles(container, "vars-shared-express", tokens?.express?.base, isExpress);

				// Darkest is deprecated in Spectrum 2
				if (isModern && color === "darkest") color = "dark";

				for (let c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
                    const isColor = c === staticColorSettings[staticKey]?.color || !staticKey && c === color;

					container.classList.toggle(`spectrum--${c}`, isColor && !isRaw);

					toggleStyles(container, `vars-global-${c}`, tokens?.global?.[c], isColor);

					// Note: Express requires loading both spectrum + express tokens
					toggleStyles(container, `vars-${c}-legacy`, tokens?.spectrum?.[c], isColor && !isModern);
					toggleStyles(container, `vars-${c}-express`, tokens?.express?.[c], isColor && isExpress);
				}

				for (const s of ["medium", "large"]) {
                    const isScale = s === scale;
					container.classList.toggle(`spectrum--${s}`, isScale && !isRaw);

					toggleStyles(container, `vars-global-${s}`, tokens?.global?.[s], isScale);

					// Note: Express requires loading both spectrum + express tokens
					toggleStyles(container, `vars-${s}-legacy`, tokens?.spectrum?.[s], isScale && !isModern);
					toggleStyles(container, `vars-${s}-express`, tokens?.express?.[s], isScale && isExpress);
				}

				// Start by removing the background color from the container and then add it back if needed
				container.style.removeProperty("background");
				if (hasStaticElement && staticKey && staticColorSettings[staticKey]) {
					container.style.background = staticColorSettings[staticKey].background;
				}
			}
		}, [color, context, staticColor, scale, viewMode, rootClass, tokens, staticColorSettings]);

		return StoryFn(data);
	},
});
