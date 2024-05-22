import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withVariantsWrapper = makeDecorator({
	name: "withVariantsWrapper",
	parameterName: "variants",
	wrapper: (StoryFn, context) => {
		const { argTypes = {} } = context;

		const variants = [];

		/* Create an array of variants to iterate over in the render */
		variants.push({
			name: "Default",
			args: {},
		});

		Object.entries(argTypes).forEach(([key, details]) => {
			if (!details) return;
			// Only process args that are in the Variant category
			if (details.table?.category !== "Variant") return;

			const type = details.table?.type?.summary ?? details.control?.type?.summary ?? details.control?.type?.name;

			// If there are options, create a variant for each
			if (details.options?.length > 0) {
				// Check if one of the options is the default value; if so, skip it
				if (details.table?.defaultValue && details.options.includes(details.table.defaultValue?.summary)) {
					details.options = details.options.filter(opt => opt !== details.table.defaultValue.summary);
				}
				details.options.forEach(opt => {
					variants.push({
						name: `${details.name} ${opt}`,
						args: {
							[key]: opt,
						}
					});
				});
				return;
			}
			if (type !== "boolean") return;
			variants.push({
				name: details.name,
				args: {
					[key]: true
				}
			});
		});

		// If there are no size options, return the story
		if (!variants.length) return html`${StoryFn(context)}`;

		const Typography = import("@spectrum-css/typography/stories/template")?.Template ?? null;

		return html`
			<div style=${styleMap({ "display": window.isTestEnv() ? "none" : undefined })}>
				${StoryFn(context)}
			</div>
			<div
				data-variant-container
				style=${styleMap({
					"display": !window.isTestEnv() ? "none" : "flex",
					"flex-direction": "row",
					"flex-wrap": "wrap",
					"gap": "24px",
				})}
			>
				${variants.map((details) => {
					return html`
					<div>
						${when(details.name, () => Typography({
							semantics: "heading",
							size: "s",
							content: [details.name],
						}))}
						<div
							style=${styleMap({
								"border": "1px solid var(--spectrum-gray-800)",
								"border-radius": "4px",
								"overflow": "auto",
							})}
						>
							${StoryFn({ ...context, args: {
								...context.args,
								...details.args,
							}})}
						</div>
					</div>`;
				})}
			</div>
		`;
	},
});
