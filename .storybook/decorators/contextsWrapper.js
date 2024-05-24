import { makeDecorator, useEffect } from "@storybook/preview-api";

import tokens from "@spectrum-css/tokens?raw";
import legacy from "@spectrum-css/tokens-legacy?raw";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { globals, args, viewMode, id } = context;

		console.log({ tokens, legacy });

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type string */
		const color = globals.color ?? "light";
		/** @type string */
		const scale = globals.scale ?? "medium";
		/** @type string */
		const ctx = globals.context ?? "spectrum";

		useEffect(() => {
			let containers = [document.body];

			const roots = [
				...document.querySelectorAll(`#story--${id}`),
				...document.querySelectorAll(`#story--${id}--primary`)
			];
			if (viewMode === "docs" && roots.length > 0) {
				containers = roots.map(root => root.closest(".docs-story") ?? root);
			}

			for (const container of containers) {
				const isLegacy = ["legacy", "express"].includes(ctx);

				if (isLegacy) {
					legacy.use();
					tokens.unuse();
				} else {
					tokens.use();
					legacy.unuse();
				}

				container.classList.toggle("spectrum", true);
				container.classList.toggle("spectrum--legacy", isLegacy);
				container.classList.toggle(`spectrum--express`, ctx === "express");

				for (const c of ["light", "dark"]) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}

				container.style.removeProperty("background");
				const hasStaticElement = container.querySelector(`.${args.rootClass}--staticWhite, .${args.rootClass}--staticBlack, .${args.rootClass}--overBackground`);
				if (hasStaticElement) {
					if (container.querySelector(`.${args.rootClass}--staticBlack`)) {
						container.style.background = "rgb(181, 209, 211)";
					}
					else if (container.querySelector(`.${args.rootClass}--staticWhite, .${args.rootClass}--overBackground`)) {
						container.style.background = "rgb(15, 121, 125)";
					}
				}
			}
		}, [color, ctx, scale, args.staticColor]);

		return StoryFn(context);
	},
});
