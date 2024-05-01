import { makeDecorator, useEffect } from "@storybook/preview-api";

import express from "@spectrum-css/tokens/dist/index-express.css?raw";
import legacy from "@spectrum-css/tokens/dist/index-legacy.css?raw";
import spectrum from "@spectrum-css/tokens/dist/index.css?raw";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args, globals, viewMode, id } = context;

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type string */
		const color = globals.color ? globals.color : "light";
		/** @type string */
		const scale = globals.scale ? globals.scale : "medium";
		/** @type string */
		const theme = globals.theme ? globals.theme : "spectrum";

		useEffect(() => {
			let containers = [document.body];

			const roots = [
				...document.querySelectorAll(`#story--${id}`),
				...document.querySelectorAll(`#story--${id}--primary`)
			];
			if (viewMode === "docs" && roots.length > 0) {
				containers = roots.map(root => root.closest(".docs-story") ?? root);
			}

			let tokenStyles = document.querySelector("[active-context]");
			if (!tokenStyles) {
				tokenStyles = document.createElement("style");
				tokenStyles.setAttribute("active-context", "");
				document.head.appendChild(tokenStyles);
			}

			for (const container of containers) {
				container.classList.toggle("spectrum", true);

				for (const t of ["spectrum", "legacy", "express"]) {
					if (t === "spectrum") continue;
					container.classList.toggle(`spectrum--${t}`, t === theme);
				}

				for (const c of ["light", "dark"]) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}

				if (theme === "legacy") {
					tokenStyles.innerHTML = legacy;
				} else if (theme === "express") {
					tokenStyles.innerHTML = express;
				} else {
					tokenStyles.innerHTML = spectrum;
				}

				container.style.removeProperty("background");

				const hasStaticElement = container.querySelector(`.${args.rootClass}--staticWhite, .${args.rootClass}--staticBlack, .${args.rootClass}--overBackground`);
				if (hasStaticElement) {
					if (container.querySelector(`.${args.rootClass}--staticBlack`)) {
						container.style.background = "rgb(181, 209, 211)";
					} else if (container.querySelector(`.${args.rootClass}--staticWhite, .${args.rootClass}--overBackground`)) {
						container.style.background = "rgb(15, 121, 125)";
					}
				}
			}
		}, [color, scale, theme, args.staticColor]);

		return StoryFn(context);
	},
});
