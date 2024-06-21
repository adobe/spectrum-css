import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { sizeDisplayNames } from "./helpers";

/**
 * Display all component sizes that are available as options for their "size" arg.
 * Displays the name of the size and displays them in columns next to each other.
 * 
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withSizingWrapper = makeDecorator({
	name: "withSizingWrapper",
	wrapper: (StoryFn, context) => {
		const { argTypes = {} } = context;

		// Size control options. Show default story if that control does not exist.
		const sizes = argTypes?.size?.options ?? [];
		if (sizes.length === 0){
			return StoryFn(context);
		}

		// Color for heading that shows the name of the size. Adjustments for static white and black backgrounds,
		// which don't change with the color context.
		let headingColor = "var(--spectrum-seafoam-900)";
		if (context?.args?.staticColor == "white"){ headingColor = "rgb(255, 255, 255)"; }
		if (context?.args?.staticColor == "black"){ headingColor = "rgb(0, 0, 0)"; }

		return html`
		<div
			style=${styleMap({
				display: "flex",
				gap: "32px",
				flexWrap: "wrap",
			})}
		>
			${sizes.map((size) => {
				let modifiedContext = { args: {} };
				modifiedContext.args.size = size;

				// Make sure stories maintain a unique name and id, by appending the size name.
				if (typeof context?.args?.name !== "undefined"){
					modifiedContext.args.name = context.args.name + "-" + sizeDisplayNames[size];
				}

				if (typeof context?.args?.id !== "undefined"){
					modifiedContext.args.id = context.args.id + "-" + sizeDisplayNames[size];
				}

				return html`
					<div
						style=${styleMap({
							display: "flex",
							gap: "16px",
							flexDirection: "column",
							alignItems: "center",
						})}
					>
						${Typography({
							semantics: "heading",
							size: "xs",
							content: [sizeDisplayNames[size]],
							customClasses: ["chromatic-ignore"],
							customStyles: {
								"white-space": "nowrap",
								"--mod-heading-font-color": headingColor,
							},
						})}
						${StoryFn({ ...context, ...modifiedContext })}
					</div>
				`;
			})}
		</div>`;
	},
});
