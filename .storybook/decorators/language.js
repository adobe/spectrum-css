import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers } from "./helpers";
/* global Typekit */

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

		useEffect(() => {
			const isNotEnglish = lang && lang !== "en-US";

			// If it is US-language or unset use the rok6rmo Adobe font web project id (smaller size),
			// otherwise use the mge7bvf kit with all the language settings (larger size)
			const kitId = isNotEnglish ? "mge7bvf" : "rok6rmo";
			const config = {
				kitId,
				async: true,
				scriptTimeout: 3000,
				// https://github.com/typekit/webfontloader?tab=readme-ov-file#configuration
				loading: function() {},
				fontactive: function(familyName) {
					console.log(`Font ${familyName} active`);
				},
				fontinactive: function(familyName) {
					console.log(`Font ${familyName} inactive`);
				},
				active: function() {
					console.log(`Font loaded [id: ${kitId}]`);

					// Fire a custom event to indicate the Adobe Fonts have loaded
					document.dispatchEvent(new CustomEvent("typekit-loaded", { detail: { kitId } }));
				},
			}

			if (window.Typekit) window.Typekit.load(config);
			else window.Typekit = Typekit.load(config);

			for (const container of fetchContainers(id, viewMode === "docs")) {
				container.lang = lang;
			}
		}, [lang]);

		return StoryFn(context);
	},
});
