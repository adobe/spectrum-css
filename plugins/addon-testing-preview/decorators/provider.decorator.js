
import { global } from '@storybook/global';
import { makeDecorator } from "@storybook/preview-api";
import { typography } from '@storybook/theming';
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { PARAM_KEY } from "../constants.js";
const { window } = global;

export const withTestingGrid = makeDecorator({
    name: 'withTestingGrid',
    parameterName: PARAM_KEY,
    // Requires settings to be passed in to render the testing grid
    // skipIfNoParametersOrOptions: true,
    wrapper: (StoryFn, context, { parameters }) => {
        // Deconstruct the parameters down to the relevant values for this decorator
        const {
            isTestEnv,
            withHeadings = true,
            withBorder = "full",
            options = {},
            ...settings
        } = parameters;
        console.log(context);

        /**
         * Collect a list of all the keys used in the options
         * @type {import('./helpers').Key[]}
         */
        const previewKeys = Object.keys(options ?? {});

        // Create an iterable array of options to render in the testing grid
        // Fetch the options from the story's context and map them to the options object
        const gridValues = [];
        for (const previewKey of previewKeys) {
            // Skip any keys that are set to false in the story's settings to allow for conditional rendering
            if (Object.keys(settings).length > 0 && [false, 'false'].includes(settings[previewKey])) {
                continue;
            }

            // Check that a valid key was provided
            if (previewKey && !options[previewKey]) {
                // @todo throw warning `Invalid key provided for testing grid: ${key}`
                console.log(`Invalid key provided for testing grid: ${previewKey}`);
                continue;
            }

            const {
                key,
                scope,
                mapping,
            } = options[previewKey];

            // Fetch the scope and value of the option
            // const currentValue = context[scope][key];
            // console.log(`Value for ${key} is ${currentValue} in ${scope} scope`);

            const localSettings = context[`${scope.replace(/s$/, '')}Types`][key];
            console.log(isTestEnv(window));

            // If the local settings include an array of options, add each to the grid
            if (
                localSettings &&
                typeof localSettings.options !== "undefined" &&
                Array.isArray(localSettings.options)
            ) {
                localSettings.options.forEach((value) => {
                    gridValues.push({
                        // @todo use lodash to format the key as a fallback?
                        name: mapping[value] ?? value,
                        args: {
                            [key]: value,
                        }
                    });
                });
            }
        }

        return html`
            <div style=${styleMap({
                "display": isTestEnv(window) ? "none" : undefined
            })}>
                ${StoryFn(context)}
            </div>
            <div
                style=${styleMap({
                    "display": isTestEnv(window) ? "flex" : "none",
                    "flex-direction": "row",
                    "flex-wrap": "wrap",
                    "gap": "24px",
                })}
            >
                ${gridValues.map((details) => {
                    return html`
                    <div>
                        ${when(withHeadings && details.name, () => html`
                            <h3 style=${styleMap({
                                "font-family": typography.fonts.base,
                                "font-size": typography.size.s3,
                                "font-weight": typography.weight.bold,
                            })}>${details.name}</h3>
                        `)}
                        <div
                            style=${styleMap({
                                [withBorder === "full" ? "border" : "border-inline-start"]: withBorder !== "none" ? "1px solid var(--spectrum-gray-800)" : undefined,
                                "border-radius": withBorder === "full" ? "4px" : undefined,
                            })}
                        >
                            ${StoryFn({
                                ...context,
                                args: {
                                    ...context.args,
                                    ...details.args,
                                }
                            })}
                        </div>
                    </div>`;
                })}
            </div>
        `;
    },
});
