import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers } from "./helpers";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withLanguageWrapper = makeDecorator({
	name: "withLanguageWrapper",
	parameterName: "lang",
	wrapper: (StoryFn, context) => {
		const {
			globals: {
				lang = false,
			} = {},
			id,
			viewMode,
		} = context;

		window.__lang = lang ?? "en-US";

		useEffect(() => {
			for (const container of fetchContainers(id, viewMode === "docs")) {
				container.lang = lang;
			}
		}, [lang]);

		return StoryFn(context);
	},
});
