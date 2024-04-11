import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withStatesWrapper = makeDecorator({
	name: "withStatesWrapper",
	parameterName: "states",
	wrapper: (StoryFn, context) => {
		const { argTypes = {}, parameters, globals } = context;

		const states = new Map();

		states.set('default', {
			name: 'Stateless'
		});

		Object.entries(argTypes).forEach(([key, details]) => {
			if (!details) return;
			if (details.table?.category !== "State") return;
			if (details.control?.type !== "boolean") {
				console.log(`Cannot generate state preview automatically for non-boolean states: ${details.name}`);
				return;
			}

			states.set(key, details);
		});

		// If there are no size options, return the story
		if (!states.size) return html`${StoryFn(context)}`;

		const isTestingPreview =
			globals.testingPreview || parameters.testingPreview || false;

		if (!isTestingPreview) return html`${StoryFn(context)}`;

		// Set the parameters html root to use the scoped-root id
		if (parameters.html) parameters.html.root = "#spectrum-context";

		return html`
		<div
			data-scoped-container="states"
			style=${styleMap({
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: "12px",
			})}
		>
			${[...states.entries()].map(([key, details]) => {
				context.args[key] = true;

				// Set all other states to false
				[...states.keys()].filter(v => v !== key).forEach(k => context.args[k] = false);

				return html` <div data-value=${key} style=${styleMap({
					padding: "2px"
				})}>
					${when(details.name, () => Typography({
						semantics: "detail",
						size: "m",
						content: [details.name],
						customStyles: {
							/* Details are span tags not block elements */
							display: "inline-block",
							/* Why seafoam? Because it separates it from the component styles. */
							color: "var(--spectrum-seafoam-800)",
								/* This spacing handled by flex gap above */
							marginBlockStart: "0",
							marginBlockEnd: "8px",
						},
					}))}
					<div style=${styleMap({
						paddingInlineStart: "8px",
						borderInlineStart: "1px solid var(--spectrum-seafoam-800)",
					})} id="spectrum-context"> ${StoryFn(context)} </div>
				</div>`;
			})}
		</div>`;
	},
});
