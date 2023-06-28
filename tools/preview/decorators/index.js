import { useEffect, makeDecorator } from "@storybook/preview-api";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

export { withContextWrapper } from "./contextsWrapper.js";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Rendered as controls; these properties are assigned to the document root element
 **/
export const withTextDirectionWrapper = makeDecorator({
	name: "withTextDirectionWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { globals, parameters } = context;
    const defaultDirection = 'ltr';
		const textDirection =  parameters.textDirection || globals.textDirection || defaultDirection;

		// Shortkeys for the global types
		document.addEventListener("keydown", (e) => {
			switch (e.key || e.keyCode) {
				case "r":
					document.documentElement.dir = "rtl";
					break;
				case "n":
					document.documentElement.dir = "ltr";
					break;
			}
		});

		useEffect(() => {
			if (textDirection) document.documentElement.dir = textDirection;
		}, [textDirection]);

		return StoryFn(context);
	},
});

export const withThemesDisplayWrapper = makeDecorator({
  name: "withThemesDisplayWrapper",
  parameterName: "context",
  wrapper: (StoryFn, context) => {
    const { globals, args, parameters } = context;
    const defaultTheme = 'default';
    const themesDisplay = parameters.themesDisplay || globals.themesDisplay || defaultTheme;
    const isDefault = themesDisplay === defaultTheme;
    const isStacked = themesDisplay === 'stacked';
    const bodyEl = document.body;
    const bodyElClasses = bodyEl.classList;

    // remove the classes from the Storybook body element
    // use a timeout here to make it wait for other addons to modify classes first and then remove them after that
    useEffect(() => {
      if (isDefault) {
        setTimeout(() => {
          bodyEl.className = bodyElClasses;
        }, 1000);
      } else {
        setTimeout(() => {
          bodyEl.classList.remove(...themeClassNames);
        }, 1000);
      }
    }, [bodyEl]);
    
    // is it the "default" display option? Return early
    if (isDefault) return StoryFn(context);
    
    // prep the display areas with the correct classes
    const isExpress = args.express;

    const themeClassNames = ['spectrum--light', 'spectrum--dark', 'spectrum--darkest'];
    const styles = {
      grid: {
        display: 'grid',
        gridTemplateColumns: isStacked ? '1fr' : 'repeat(auto-fit, minmax(0px, 1fr))',
        height: isStacked ? 'auto' : '100vh',
      },
      gridItem: {
        backgroundColor: 'var(--spectrum-alias-background-color-default)',
        color: 'var(--spectrum-alias-text-color-default)',
        outline: '2px solid var(--spectrum-blue-background-color-default)',
        padding: '2rem',
      },
    };

    return html`
      <style>body { padding: 0 !important;}</style>
      <div style=${styleMap(styles.grid)}>
        ${themeClassNames.map((themeClassName) => {
          return html`
            <div class="spectrum spectrum--medium ${themeClassName} ${isExpress ? `spectrum--express` : null}" style=${styleMap(styles.gridItem)}>
              ${StoryFn(context)}
            </div>
          `;
        })}
      </div>
    `;
  },
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withReducedMotionWrapper = makeDecorator({
	name: "withReducedMotionWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args } = context;
		const reducedMotion = args.reducedMotion;

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
		const { globals, parameters } = context;
    const defaultLang = 'en-US';
		const lang = parameters.lang || globals.lang || defaultLang;

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

		context.parameters.html.root =
			'.spectrum-Examples-item[data-value="m"] #scoped-root';
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
