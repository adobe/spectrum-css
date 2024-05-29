import { makeDecorator, useEffect } from "@storybook/preview-api";
import { html } from "lit";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, data) => {
		const { args = {}, globals = {}, viewMode, id } = data;
		let { rootClass, staticColor } = args;

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

		let {
			color = "light",
			context = "spectrum1",
			scale = "medium",
		} = globals;

		useEffect(() => {
			let containers = [document.body];

			// Storybook IDs used to target the container element for the docs pages
			const roots = [
				...document.querySelectorAll(`#story--${id}`),
				...document.querySelectorAll(`#story--${id}--primary`)
			];

			// viewMode is either "docs" or "story"
			if (viewMode === "docs" && roots.length > 0) {
				containers = roots.map(root => root.closest(".docs-story") ?? root);
				// add the default classes to the body to ensure labels, headings, and borders are styled correctly
				document.body.classList.add("spectrum", "spectrum--light", "spectrum--medium");
			}

			for (const container of containers) {
				const hasStaticElement = container.matches(`:has(.${rootClass}--staticWhite, .${rootClass}--staticBlack, .${rootClass}--overBackground)`);
				if (!staticColor && hasStaticElement) {
					staticColor = (
						container.querySelector(`.${rootClass}--staticWhite`) && "white" ||
						container.querySelector(`.${rootClass}--staticBlack, .${rootClass}--overBackground`) && "black"
					);
				}

				container.classList.toggle("spectrum", true);

				container.classList.toggle("spectrum--express", Boolean(context === "express"));

				for (const c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
					container.classList.toggle(`spectrum--${c}`, c === staticColorSettings[staticColor]?.color || !staticColor && c === color);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}

				container.style.removeProperty("background");

				if (hasStaticElement && staticColor && staticColorSettings[staticColor]) {
					container.style.background = staticColorSettings[staticColor].background;
				}
			}
		}, [color, context, staticColor, scale, viewMode, rootClass]);

		return StoryFn(data);
	},
});
