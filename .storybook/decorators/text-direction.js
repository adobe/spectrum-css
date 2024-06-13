import { makeDecorator, useArgs, useEffect, useGlobals } from "@storybook/preview-api";
import { fetchContainers } from "./helpers";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Sets the text direction of the document, using the global set with a toolbar control. These properties are assigned to the document root element.
 **/
export const withTextDirectionWrapper = makeDecorator({
	name: "withTextDirectionWrapper",
	parameterName: "textDecoration",
	wrapper: (StoryFn, context) => {
		const [, updateGlobals] = useGlobals();
		const [, updateArgs] = useArgs();

		const {
			args = {},
			globals: {
				textDirection = "ltr",
			} = {},
			id,
			viewMode,
		} = context;

		window.__dir = textDirection;

		/**
		 * @deprecated allow temporary fallback support for values defined in the args
		 * */
		if (args.textDirection && args.textDirection !== textDirection) {
			updateGlobals({ textDirection: args.textDirection });
			// prevents unnecessary re-renders
			updateArgs({ textDirection: undefined });
		}

		useEffect(() => {
			if (!textDirection) return;

			for (const container of fetchContainers(id, viewMode === "docs")) {
				container.dir = textDirection;
			}
		}, [textDirection]);

		return StoryFn(context);
	},
});
