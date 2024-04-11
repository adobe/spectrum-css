import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { makeDecorator, useEffect } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withVariantsWrapper = makeDecorator({
	name: "withVariantsWrapper",
	parameterName: "variants",
	wrapper: (StoryFn, context) => {
		const { argTypes = {}, parameters, globals, args = {} } = context;

		const { testingPreview = false } = parameters;

		const isTestingPreview = globals.testingPreview ?? testingPreview;
		const variants = [];

		variants.push({
			name: 'Default',
			args: {},
		});

		Object.entries(argTypes).forEach(([key, details]) => {
			if (!details) return;
			if (details.table?.category !== "Variant") return;
			if (details.options?.length > 0) {
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
			if (details.control?.type !== "boolean") return;
			variants.push({
				name: details.name,
				args: {
					[key]: true
				}
			});
		});

		// If there are no size options, return the story
		if (!variants.length || !isTestingPreview) return html`${StoryFn(context)}`;

		useEffect(() => {
			// Set the parameters html root to use the scoped-root id
			parameters.html.root = "spectrum-context";
		}, [parameters.html]);

		return html`
		<div
			data-scoped-container="variants"
			style=${styleMap({
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: "12px",
			})}
		>
			${variants.map((details) => {
				// Reset args to original dataset
				context.args = args;

				// Override for this example
				Object.entries(details.args).forEach(([key, value]) => context.args[key] = value);

				return html`<div>
					${when(details.name, () => Typography({
						semantics: "detail",
						size: "m",
						content: [details.name],
						customStyles: {
							/* Details are span tags not block elements */
							display: "inline-block",
							/* Why seafoam? Because it separates it from the component styles. */
							color: "var(--spectrum-seafoam-600)",
								/* This spacing handled by flex gap above */
							marginBlockStart: "0",
							marginBlockEnd: "6px",
						},
					}))}
					<div data-scoped-root style=${styleMap({
						paddingInlineStart: "8px",
						borderInlineStart: "1px solid var(--spectrum-seafoam-600)",
					})}> ${StoryFn(context)} </div>
				</div>`;
			})}
		</div>`;
	},
});
