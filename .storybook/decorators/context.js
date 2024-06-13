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
		const { args = {}, globals = {}, viewMode, id, loaded = {} } = data;
		let { rootClass, staticColor } = args;
		const { tokens = {} } = loaded;

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
			const toggleStyles = (container, id, styleObj, add = true) => {
				if (!container && !id) return;

				let style = container.querySelector(`#${id}`);
				const styles = styleObj ? Object.values(styleObj)[0] : undefined;

				if (!add) {
					if (style) style.remove();
					return;
				}

				if (!style) {
					style = document.createElement("style");
					style.id = id;
					container.appendChild(style);
				}

				if (!style) return;

				if (add && styles) style.innerHTML = styles;
				else style.remove();
			};

			const isExpress = Boolean(context === "express");
			const isLegacy = Boolean(context !== "spectrum2");
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
				const styleContainer = container.querySelector("#styles-container");
				const globalContainer = styleContainer.querySelector("#global");
				const colorsContainer = styleContainer.querySelector("#colors");
				const scalesContainer = styleContainer.querySelector("#scale");
				const contextContainer = styleContainer.querySelector("#context");

				const hasStaticElement = container.matches(`:has(.${rootClass}--staticWhite, .${rootClass}--staticBlack, .${rootClass}--overBackground)`);
				if (!staticColor && hasStaticElement) {
					staticColor = (
						container.querySelector(`.${rootClass}--staticWhite`) && "white" ||
						container.querySelector(`.${rootClass}--staticBlack, .${rootClass}--overBackground`) && "black"
					);
				}

				container.classList.toggle("spectrum", true);
				container.classList.toggle("spectrum--legacy", isLegacy);
				container.classList.toggle("spectrum--express", isExpress);

				toggleStyles(globalContainer, "vars-base", tokens?.global?.base, true);
				toggleStyles(contextContainer, "vars-base-spectrum", tokens?.spectrum?.base, true);
				toggleStyles(contextContainer, "vars-base-express", tokens?.express?.base, isExpress);

				for (const c of ["light", "dark", "darkest"]) {
					// Force light or dark mode if the static color is set
                    const isColor = c === staticColorSettings[staticColor]?.color || !staticColor && c === color;
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

				container.style.removeProperty("background");

				if (hasStaticElement && staticColor && staticColorSettings[staticColor]) {
					container.style.background = staticColorSettings[staticColor].background;
				}
			}
		}, [color, context, staticColor, scale, viewMode, rootClass]);

		return html`
			<div id="styles-container">
				<div id="global"></div>
				<div id="colors"></div>
				<div id="scale"></div>
				<div id="context"></div>
			</div>
			${StoryFn(data)}
		`;
	},
});
