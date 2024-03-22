import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { parameters, globals, globalTypes, viewMode } = context;

		const getDefaultValue = (type) => {
			if (!type) return;
			if (type.defaultValue) return type.defaultValue;
			if (type.toolbar?.items?.length > 0 && type.toolbar.items[0]?.value) {
				return type.toolbar.items[0]?.value;
			}
			return;
		};

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type boolean */
		const isExpress = parameters.express ?? globals.express ?? getDefaultValue(globalTypes.express);
		/** @type string */
		const color = parameters.color ?? globals.color ?? getDefaultValue(globalTypes.color) ?? "light";
		/** @type string */
		const scale = parameters.scale ?? globals.scale ?? getDefaultValue(globalTypes.scale) ?? "medium";

		useEffect(() => {
			const isDocs = viewMode === "docs";

			let containers = [document.body];
			if (isDocs && !window.isChromatic()) {
				containers = [...document.querySelectorAll(".docs-story")] ?? containers;
			}

			if (!containers) return;

			containers.forEach(container => {
				container.classList.toggle("spectrum", true);

				container.classList.toggle("spectrum--express", isExpress);

				for (const c of ["light", "dark", "darkest"]) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}

				if (args.staticColor === "black") {
					container.style.backgroundColor = "rgb(181, 209, 211)";
				} else if (args.staticColor === "white") {
					container.style.backgroundColor = "rgb(15, 121, 125)";
				} else {
					container.style.removeProperty("background-color");
				}
			});
		}, [color, scale, isExpress, args.staticColor]);

		return StoryFn(context);
	},
});
