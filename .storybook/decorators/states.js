import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @todo: Need a way to validate combinations of states
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withStatesWrapper = makeDecorator({
  name: "withStatesWrapper",
  parameterName: "states",
  wrapper: (StoryFn, context) => {
    const { argTypes = {}, parameters = {} } = context;

    const states = new Map();

    states.set("default", {
      name: "Stateless",
    });

    Object.entries(argTypes).forEach(([key, details]) => {
      if (!details) return;
      if (details.table?.category !== "State") return;
      if (details.control?.type !== "boolean") {
        console.log(
          `Cannot generate state preview automatically for non-boolean states: ${details.name}`
        );
        return;
      }

      if(parameters.states?.[key] === false) return;

      states.set(key, {
		...details,
		name: details.name ? `${details.name} state` : undefined,
	});
    });

    // If there are no size options, return the story
    if (!states.size) return html`${StoryFn(context)}`;

    if (!window.isChromatic()) return html`${StoryFn(context)}`;

		if (states.size === 1 && states.has("default")) {
			return html`
      ${[...states.entries()].map(([key]) => {
        context.args[key] = true;

        // Set all other states to false
        [...states.keys()]
          .filter((v) => v !== key)
          .forEach((k) => (context.args[k] = false));

        return html`<div data-state-container>${StoryFn(context)}</div>`;
      })}`;
		}

    return html` <div
      data-state-container
      style=${styleMap({
        "display": "flex",
        "flex-direction": "column",
        "gap": "12px",
		"margin": "12px",
      })}
    >
      ${[...states.entries()].map(([key, details]) => {
        context.args[key] = true;

        // Set all other states to false
        [...states.keys()]
          .filter((v) => v !== key)
          .forEach((k) => (context.args[k] = false));

        return html`
          <div data-value=${key}>
            ${when(details.name, () =>
              Typography({
                semantics: "heading",
                size: "xxs",
                content: [details.name],
                customStyles: {
                  "margin-block": "4px 2px",
                },
              })
            )}
            <div
              style=${styleMap({
                border: "1px solid var(--spectrum-gray-400)",
                "border-radius": "4px",
				"overflow": "auto",
              })}
            >
              ${StoryFn(context)}
            </div>
          </div>
        `;
      })}
    </div>`;
  },
});
