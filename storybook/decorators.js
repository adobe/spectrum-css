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
    const textDirection =
      parameters.textDirection || globals.textDirection || defaultDirection;

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
 **/
export const withSizingWrapper = makeDecorator({
  name: "withSizingWrapper",
  parameterName: "context",
  wrapper: (StoryFn, context) => {
    const { argTypes, parameters } = context;
    const sizes = argTypes?.size?.options || [];
    const sizeVariants =
      typeof parameters?.sizeVariants === "undefined"
        ? true
        : parameters.sizeVariants;

    /** To suppress the sizing wrapper, add `sizeVariants: false` to the parameters of a story */
    if (sizes.length === 0 || !sizeVariants) return StoryFn(context);
    const printSize = (size) => {
      if (size === "xs") return "Extra-small";
      if (size === "s") return "Small";
      if (size === "m") return "Medium";
      if (size === "l") return "Large";
      if (size === "xl") return "Extra-large";
      if (size === "xxl") return "Extra-extra-large";
      return size;
    };

    // context.parameters.html.root =
    //   '.spectrum-Examples-item[data-value="m"] #scoped-root';
    context.argTypes.size.table = {
      ...context.argTypes.size.table,
      disable: true,
    };

    return html` <div class="spectrum-Examples">
      ${sizes.map((size) => {
        context.args.size = size;
        return html` <div class="spectrum-Examples-item" data-value=${size}>
          <div class="spectrum-Examples-itemGroup" id="scoped-root">
            ${StoryFn(context)}
          </div>
          <h4
            class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading"
          >
            ${printSize(size)}
          </h4>
        </div>`;
      })}
    </div>`;
  },
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
  name: "withContextWrapper",
  parameterName: "context",
  wrapper: (StoryFn, context) => {
    const { globals, parameters } = context;

    const getDefaultValue = (type) => {
      if (!type) return null;

      const data = globals[type];
      if (!data) return null;

      const local = localStorage.getItem(`spectrum-${type}`);
      if (local) return local;

      if (data.defaultValue) {
        return data.defaultValue;
      }

      return data.options ? data.options[0] : null;
    };

    // This property informs which context stylesheets to source
    //    but does not source a stylesheet for itself
    /** @type boolean */
    const theme = parameters.theme ?? getDefaultValue('theme') ?? 'spectrum';
    /** @type string */
    const color = parameters.color ?? getDefaultValue('color') ?? "light";
    /** @type string */
    const scale = parameters.scale ?? getDefaultValue('scale') ?? "medium";

    localStorage.setItem("spectrum-theme", theme);
    localStorage.setItem("spectrum-color", color);
    localStorage.setItem("spectrum-scale", scale);

    // Add the spectrum root class
    document.body.classList.add(
      `spectrum${theme !== "spectrum" ? `--${theme}` : ""}`,
      `spectrum--${scale}`,
      `spectrum--${color}`
    );

    return StoryFn(context);
  },
});
