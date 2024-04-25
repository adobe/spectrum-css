import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args, argTypes, viewMode, id } = context;

		const getDefaultValue = (type) => {
			if (!type) return null;
			if (type.defaultValue) return type.defaultValue;
			return type.options ? type.options[0] : null;
		};

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type boolean */
		const isExpress = args.express
			? args.express
			: getDefaultValue(argTypes.express);
		/** @type string */
		const color = args.color ? args.color : getDefaultValue(argTypes.color) ?? "light";
		/** @type string */
		const scale = args.scale ? args.scale : getDefaultValue(argTypes.scale) ?? "medium";

		const colors = ["light", "dark", "darkest"];
		const scales = ["medium", "large"];

		useEffect(() => {
			let containers = [document.body];

			const roots = [
				...document.querySelectorAll(`#story--${id}`),
				...document.querySelectorAll(`#story--${id}--primary`)
			];
			console.log({id, roots});
			if (viewMode === "docs" && roots.length > 0) {
				containers = roots.map(root => root.closest(".docs-story") ?? root);
			}

			for (const container of containers) {
				container.classList.toggle("spectrum", true);

				container.classList.toggle("spectrum--express", isExpress);

				for (const c of colors) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}

				for (const s of scales) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
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
		}, [color, scale, isExpress, args.staticColor]);

		return StoryFn(context);
	},
});
