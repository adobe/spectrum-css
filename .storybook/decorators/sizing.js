import { makeDecorator } from "@storybook/preview-api";

import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withSizingWrapper = makeDecorator({
	name: "withSizingWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { argTypes = {}, parameters, globals } = context;

		// If there are no size options, return the story
		if (!argTypes.size) return StoryFn(context);

		const isTestingPreview =
			globals.testingPreview || parameters.testingPreview || false;
		const sizes = argTypes.size.options ?? [];

		if (sizes.length === 0 || !isTestingPreview) return StoryFn(context);

		const sizeMap = {
			xxs: "Extra-extra-small",
			xs: "Extra-small",
			s: "Small",
			m: "Medium",
			l: "Large",
			xl: "Extra-large",
			xxl: "Extra-extra-large",
		};

		// Set the parameters html root to use the scoped-root id
		if (parameters.html) parameters.html.root = "spectrum-context";

		// When all sizes are shown, disable the sizing control
		if (argTypes.size.table) argTypes.size.table.disable = true;
		else argTypes.size.table = { disable: true };

		return html` <div
			style=${styleMap({
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				gap: "var(--spectrum-spacing-600)",
				flexWrap: "wrap",
			})}
		>
			${sizes.map((size) => {
				context.args.size = size;
				return html` <div data-value=${size}>
					<div
						style=${styleMap({
							padding: "var(--spectrum-spacing-200)",
							border: "1px solid var(--spectrum-gray-200)",
							borderRadius: "4px",
						})}
					>
						<div data-scoped-root> ${StoryFn(context)} </div>
					</div>
					<div
						style=${styleMap({
							float: "right",
						})}
					>
						${Typography({
							semantics: "detail",
							size: "M",
							content: [sizeMap[size] ?? size],
							customStyles: {
								color: "var(--spectrum-gray-600)",
							},
						})}
					</div>
				</div>`;
			})}
		</div>`;
	},
});
