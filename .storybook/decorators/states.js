import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

/**
 * @todo: Need a way to validate combinations of states
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withStatesWrapper = makeDecorator({
  name: "withStatesWrapper",
  parameterName: "states",
  wrapper: (StoryFn, context) => {
    const { argTypes = {} } = context;

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

      states.set(key, {
		...details,
		name: details.name ? `${details.name} state` : undefined,
	});
    });

		const Typography = import("@spectrum-css/typography/stories/template")?.Template ?? null;

    return html`
      <div style=${styleMap({ "display": !states.size || !window.isTestEnv() ? undefined : "none" })}>
        ${StoryFn(context)}
      </div>
      <div
        data-state-container
        style=${styleMap({
          "display": !states.size || !window.isTestEnv() ? "none" : "flex",
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
                ${html`${StoryFn(context)}`}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  },
});
