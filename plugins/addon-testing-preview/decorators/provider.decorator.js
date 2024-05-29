import { makeDecorator } from '@storybook/preview-api';
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { capitalize } from 'lodash-es';
import { PARAM_KEY } from "../constants";

// import { global } from '@storybook/global';
// const { document, Element } = global;

export const withTestingGrid = makeDecorator({
    name: 'withTestingGrid',
    parameterName: PARAM_KEY,
    // Requires settings to be passed in to render the testing grid
    skipIfNoParametersOrOptions: true,
    wrapper: (StoryFn, context) => {
        const {
            globals: {
                testingPreview = false,
            } = {},
            parameters: {
                [PARAM_KEY]: storyParameters = {},
            } = {},
        } = context ?? {};

        const {
            isTestEnv = () => testingPreview,
            withHeadings = true,
            withBorder = true,
            // @todo returns true to show all options; what else could it return?
            options = {},
            showLabel = true, // pull this out, it's used for the testing toolbar settings
            ...optionKeysToRender
        } = storyParameters;

        console.table({
            ...options,
            ...optionKeysToRender,
        });

        // @todo How do we multiply the story without being opinionated about the rendering

        // Create an iterable array of options to render in the testing grid
        // Fetch the options from the story's context and map them to the options object
        const gridValues = [];
        for (const [key, settings] of Object.entries({
            ...options,
            ...optionKeysToRender,
        })) {
            // If this story has opted to hide this option, skip it
            if (typeof settings === 'boolean' && settings === false) {
                console.log(`Skipping ${key} because it is set to false in the options object.`);
                continue;
            }

            /**
             * @todo Default all scopes to local args for now but add support for global scopes later
             */
            const {
                // default to the options key if no settings key was provided
                key: localKey = key,
                // default to args scope; add support for globals later
                scope = "args",
                // @note this is an optional input to allow the user to customize the label used in the testing grid
                mapping
            } = settings;

            // Now we need to fetch all possible values for this option and push them into the gridValues array
            /** @type {import('@storybook/types').ArgTypes} */
            const {
                name: title,
                options: possibleValues,
                control,
                ...others
            } = context[`${scope.replace(/s$/, '')}Types`]?.[localKey] ?? {};

            console.log(title, possibleValues, control, others);

            // @todo determine what the default value is for this option
            const defaultValue = context.args?.[localKey];
            const category = others?.table?.category;
            console.log(category, defaultValue);

            // If this has a set of possible values, add each one to the gridValues array
            if (possibleValues && Array.isArray(possibleValues)) {
                possibleValues.forEach((value) => {
                    gridValues.push({
                        key,
                        title: [category, title, mapping?.[value] ?? capitalize(value)].filter(Boolean).join(" | "),
                        args: {
                            [localKey]: value,
                        },
                        scope,
                    });
                });
            } else if (control?.type === "boolean") {
                // Check to see what the category is for this option (is it a state?)
                const category = others?.table?.category;
                const isState = category?.toLowerCase().trim() === "state";
                gridValues.push({
                    key,
                    title: [category, title, mapping?.true].filter(Boolean).join(" | "),
                    args: {
                        // If this is a state, set it to true; otherwise, toggle the value of the default
                        [localKey]: isState ? true : !defaultValue,
                    },
                    scope,
                });
            }
        }

        console.log(gridValues);

        // Show the vanilla story if the story is not in the testing environment
        // Otherwise, render the story inside the testing grid
        return html`
            <div style=${styleMap({
                // Show the default view if the story is not in the testing environment
                "display": isTestEnv() || testingPreview ? "none" : "contents",
            })}>
                ${StoryFn(context)}
            </div>
            <div style=${styleMap({
                // Show the testing grid if the story is in the testing environment
                "display": isTestEnv() || testingPreview ? "flex" : "none",
                "flex-direction": "column",
                "gap": "20px",
            })}>
                ${gridValues.map(({ title, args }) => {
                    // Render the story with the current set of args
                    return html`
						<div
							style=${styleMap({
                                "display": "flex",
                                "flex-direction": "column",
                                "align-items": "flex-start",
                                "row-gap": "0",
                            })}
                        >
                            ${when(withHeadings, () => html`<h3>${title}</h3>`)}
                            <div
                                style=${styleMap({
                                    "display": "flex",
                                    "flex-direction": "column",
                                    "row-gap": "20px",
                                    "border": withBorder ? "1px solid var(--spectrum-gray-800)" : "none",
                                    "border-radius": "4px",
                                    "padding": withBorder ? "10px" : "0",
                                })}
                            >
                                ${StoryFn({
                                    ...context,
                                    args: {
                                        ...context.args,
                                        ...args,
                                    }
                                })}
                            </div>
                        </div>
                    `;
                })}
            </div>
        `;
    },
});
