import { useEffect, makeDecorator } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args, argTypes } = context;

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
		const color = args.color ? args.color : getDefaultValue(argTypes.color);
		/** @type string */
		const scale = args.scale ? args.scale : getDefaultValue(argTypes.scale);

		const colors = argTypes.color.options;
		const scales = argTypes.scale.options;

		useEffect(() => {
			document.body.classList.toggle("spectrum--express", isExpress);

			for (const c of colors) {
				document.body.classList.toggle(`spectrum--${c}`, c === color);
			}

			for (const s of scales) {
				document.body.classList.toggle(`spectrum--${s}`, s === scale);
			}
		}, [color, scale, isExpress]);

		return StoryFn(context);
	},
});
