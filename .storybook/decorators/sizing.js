import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withSizingWrapper = makeDecorator({
	name: "withSizingWrapper",
	parameterName: "sizing",
	wrapper: (StoryFn, context) => {
		const { argTypes = {}, parameters, globals } = context;

		// If there are no size options, return the story
		if (!argTypes.size) return html`${StoryFn(context)}`;

		const isTestingPreview =
			globals.testingPreview || parameters.testingPreview || false;
		const sizes = argTypes.size.options ?? [];

		if (sizes.length === 0 || !isTestingPreview) return html`${StoryFn(context)}`;

		const sizeMap = {
			xxs: "Extra-extra-small",
			xs: "Extra-small",
			s: "Small",
			m: "Medium",
			l: "Large",
			xl: "Extra-large",
			xxl: "Extra-extra-large",
		};

		return html`
		<div data-scoped-container="sizes" style=${styleMap({
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			gap: "12px",
		})}>
			${sizes.map((size) => {
				context.args.size = size;
				return html` <div data-value=${size}>
					${Typography({
						semantics: "detail",
						size: "l",
						content: [sizeMap[size]],
						customStyles: {
							/* Details are span tags not block elements */
							display: "inline-block",
							/* Why seafoam? Because it separates it from the component styles. */
							color: "var(--spectrum-seafoam-900)",
								/* This spacing handled by flex gap above */
							marginBlockStart: "0",
							marginBlockEnd: "8px",
						},
					})}
					<div
						style=${styleMap({
							paddingInlineStart: "8px",
							borderInlineStart: "1px solid var(--spectrum-seafoam-900)",
						})}> ${StoryFn(context)} </div>
				</div>`;
			})}
		</div>`;
	},
});
