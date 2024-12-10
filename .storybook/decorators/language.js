import { makeDecorator, useEffect } from "@storybook/preview-api";
import { fetchContainers } from "./helpers.js";

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

		const currentKitId = window.currentKitId;

		useEffect(() => {
			let hasChanged = false;
			for (const container of fetchContainers(id, viewMode === "docs")) {
				if (container.lang !== lang) {
					container.lang = lang;
					hasChanged = true;
				}
			}

			if (window.FontsLoading === true) return;
			if (!hasChanged) return;

			// If it is US-language or unset use the rok6rmo Adobe font web project id (smaller size),
			// otherwise use the mge7bvf kit with all the language settings (larger size)
			const kitId = lang && lang !== "en-US" ? "mge7bvf" : "rok6rmo";

			if (currentKitId === kitId) return;

			try {
				window.Typekit.load({
					kitId,
					async: true,
					scriptTimeout: 3000,
					// https://github.com/typekit/webfontloader?tab=readme-ov-file#configuration
					loading: function() {
						window.FontsLoading = true;
					},
					active: function() {
						window.FontsLoading = false;
						window.currentKitId = this.kitId;
						console.log(`Font loaded [id: ${this.kitId}]`);

						// Fire a custom event to indicate the Adobe Fonts have loaded
						document.dispatchEvent(new CustomEvent("typekit-loaded", { detail: { kitId: this.kitId } }));

					},
				});
			} catch (e) {/* empty */}
		}, [lang, currentKitId, window]);

		return StoryFn(context);
	},
});
