import { makeDecorator } from "@storybook/preview-api";

import { html } from "lit";

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
		const color = args.color ? args.color : getDefaultValue(argTypes.color) ?? "light";
		/** @type string */
		const scale = args.scale ? args.scale : getDefaultValue(argTypes.scale) ?? "medium";
		const legacyTokens = args.legacyTokens ? args.legacyTokens : false;

		return html`
		<spectrum-context
			scale=${scale}
			color=${color}
			?is-express=${isExpress}
			?is-legacy=${legacyTokens}
			template=${StoryFn(context)}
		>
			${StoryFn(context)}
		</spectrum-context>`;
	},
});
