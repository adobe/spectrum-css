import { makeDecorator, useEffect } from "@storybook/preview-api";

import { html } from "lit";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Rendered as controls; these properties are assigned to the document root element
 **/
export const withTextDirectionWrapper = makeDecorator({
    name: "withTextDirectionWrapper",
    parameterName: "textDecoration",
    wrapper: (StoryFn, context) => {
        const { globals, parameters } = context;
        const defaultDirection = "ltr";
        const textDirection = parameters.textDirection || globals.textDirection || defaultDirection;

        // Shortkeys for the global types
        document.addEventListener("keydown", (e) => {
            switch (e.key || e.keyCode) {
                case "r":
                    document.documentElement.dir = "rtl";
                    break;
                case "n":
                    document.documentElement.dir = defaultDirection;
                    break;
            }
        });

        useEffect(() => {
            if (textDirection) document.documentElement.dir = textDirection;
        }, [textDirection]);

        return StoryFn(context);
    },
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withReducedMotionWrapper = makeDecorator({
    name: "withReducedMotionWrapper",
    parameterName: "context",
    wrapper: (StoryFn, context) => {
        const { parameters } = context;
        const reducedMotion = parameters.reducedMotion ?? false;

        return html`
            ${reducedMotion
                ? html`
                      <style data-source="decorator">
                          .spectrum #root #root-inner {
                              --spectrum-global-animation-duration-100: 0ms;
                              --spectrum-global-animation-duration-200: 0ms;
                              --spectrum-global-animation-duration-300: 0ms;
                              --spectrum-global-animation-duration-400: 0ms;
                              --spectrum-global-animation-duration-500: 0ms;
                              --spectrum-global-animation-duration-600: 0ms;
                              --spectrum-global-animation-duration-700: 0ms;
                              --spectrum-global-animation-duration-800: 0ms;
                              --spectrum-global-animation-duration-900: 0ms;
                              --spectrum-global-animation-duration-1000: 0ms;
                              --spectrum-global-animation-duration-2000: 0ms;
                              --spectrum-global-animation-duration-4000: 0ms;
                              --spectrum-coachmark-animation-indicator-ring-duration: 0ms;
                          }
                      </style>
                  `
                : ""}
            ${StoryFn(context)}
        `;
    },
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withLanguageWrapper = makeDecorator({
    name: "withLanguageWrapper",
    parameterName: "context",
    wrapper: (StoryFn, context) => {
        const { parameters, globals } = context;
        const lang = parameters.lang ?? globals.lang ?? "en-US";

        useEffect(() => {
            if (lang) document.documentElement.lang = lang;
        }, [lang]);

        return StoryFn(context);
    },
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
    name: "withContextWrapper",
    parameterName: "context",
    wrapper: (StoryFn, { parameters, globals, viewMode }) => {
        const colors = ["spectrum--light", "spectrum--dark", "spectrum--darkest"];
        const scales = ["spectrum--medium", "spectrum--large"];

        const color = parameters.color ?? globals.color;
        const context = parameters.context ?? globals.context ?? localStorage.getItem("spectrum-theme");
        const scale = parameters.scale ?? globals.scale ?? localStorage.getItem("spectrum-scale");

        useEffect(() => {
            localStorage.setItem("spectrum-theme", context);
            localStorage.setItem("spectrum-color", color);
            localStorage.setItem("spectrum-scale", scale ?? "medium");

            const els =
                viewMode === "docs" ? [...document.querySelectorAll(".docs-story")] : [document.documentElement];
            els.forEach((root) => {
                [...root.classList].forEach((className) => {
                    // @note: we never remove the spectrum class
                    if (["spectrum--express", ...scales, ...colors].includes(className)) {
                        root.classList.remove(className);
                    }
                });

                // Add the spectrum root class
                root.classList.add("spectrum");
                root.classList.add(`spectrum--${scale ?? "medium"}`);
                root.classList.add(`spectrum--${color ?? "light"}`);
                root.classList.toggle(`spectrum--express`, context !== "spectrum");
            });
        }, [context, scale]);

        return StoryFn(context);
    },
});
