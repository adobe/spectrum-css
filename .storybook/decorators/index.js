import { makeDecorator, useEffect } from "@storybook/preview-api";
import isChromatic from "chromatic/isChromatic";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { isFullscreen, isPopover } from "./utilities.js";

export { withContextWrapper } from "./contextsWrapper.js";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Rendered as controls; these properties are assigned to the document root element
 **/
export const withTextDirectionWrapper = makeDecorator({
	name: "withTextDirectionWrapper",
	parameterName: "textDecoration",
	wrapper: (StoryFn, context) => {
		const { globals, parameters } = context;
    const defaultDirection = "ltr"
		const textDirection = parameters.textDirection || globals.textDirection || defaultDirection;

		useEffect(() => {
			if (textDirection) document.documentElement.dir = textDirection;
		}, [textDirection]);

		const DIRECTIONS = {
			left: 'ltr',
			right: 'rtl',
			both: 'both',
		};
		const showBothDirections = textDirection === DIRECTIONS.both;

		const componentIsFullscreen = isFullscreen(context);
		const componentHasPopover = isPopover(context);

		if (showBothDirections && !componentIsFullscreen && !componentHasPopover) {
			return html`
				<div style="margin-bottom: 4rem" dir=${DIRECTIONS.left}>
					${StoryFn(context)}
				</div>
				<div dir=${DIRECTIONS.right}>
					${StoryFn(context)}
				</div>
			`;
		};

		if (showBothDirections && (componentIsFullscreen || componentHasPopover)) {
			return html`
				<h4 class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading" style="text-transform: none; background-color: var(--spectrum-negative-color-900); color: var(--spectrum-white); padding: 1rem;">
					⚠️ Sorry, feature is unavailable for this component. Choose a single-setting option in the toolbar to view the component, or try changing the setting in the control panel.
				</h4>
			`;
		};

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
		const { globals } = context;
		const lang = globals.lang;

		useEffect(() => {
			if (lang) document.documentElement.lang = lang;
		}, [lang]);

		return StoryFn(context);
	},
});

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withPlatformScaleWrapper = makeDecorator({
	name: "withPlatformScaleWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args, globals, argTypes } = context;
		const componentIsFullscreen = isFullscreen(context);
		const componentHasPopover = isPopover(context);

		const bodyEl = document.body;
    const bodyElClasses = bodyEl.classList;
		const mediumClass = 'spectrum--medium';
		const largeClass = 'spectrum--large';
		const SCALES = {
			medium: 'medium',
			large: 'large',
			both: 'both',
		};
		const defaultScale = SCALES.medium;
		let scale = globals.platformScale || argTypes.scale || args.scale || defaultScale;
		const showBothScales = scale === 'both';

		const updateBodyClasses = () => {
			bodyElClasses.remove(mediumClass, largeClass);
			bodyElClasses.add(`spectrum--${scale}`);
		};

		useEffect(() => {
			if (scale) {
				setTimeout(() => {
					updateBodyClasses();
        }, 100);
			};
		}, [scale]);

		if (showBothScales && !componentIsFullscreen && !componentHasPopover) {
			return html`
				<div style="margin-bottom: 1rem" class=${mediumClass}>
					<h4 class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading">
						Platform Scale: Medium
					</h4>
					${StoryFn(context)}
				</div>
				<div class=${largeClass}>
					<h4 class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading">
						Platform Scale: Large
					</h4>
					${StoryFn(context)}
				</div>
			`;
		};

		if (showBothScales && (componentIsFullscreen || componentHasPopover)) {
			scale = defaultScale;
			return html`
				<h4 class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading" style="text-transform: none; padding: 1rem;">
					⚠️ Sorry, feature is unavailable for this component. Choose a single-setting option in the toolbar to view the component, or try changing the setting in the control panel.
				</h4>
			`;
		}

		return StoryFn(context);
}});

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

		return isChromatic()
			? html` <div class="spectrum-Examples">
					${sizes.map((size) => {
						context.args.size = size;
						return html` <div class="spectrum-Examples-item" data-value=${size}>
								<h4
									class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading"
								>
									${printSize(size)}
								</h4>
							<div class="spectrum-Examples-itemGroup" id="scoped-root">
								${StoryFn(context)}
							</div>
						</div>`;
					})}
				</div>`
			: StoryFn(context);
	},
});

export const withBackgroundColorDisplayWrapper = makeDecorator({
  name: "withBackgroundColorDisplayWrapper",
  parameterName: "context",
  wrapper: (StoryFn, context) => {
    const { globals, args, parameters } = context;
    const defaultBackgroundColor = 'default';
    const backgroundColorDisplay = parameters.backgroundColorDisplay || globals.backgroundColorDisplay || defaultBackgroundColor;
    const isDefault = backgroundColorDisplay === defaultBackgroundColor;
    const isStacked = backgroundColorDisplay === 'stacked';
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
          bodyEl.classList.remove(...backgroundColorClassNames);
        }, 1000);
      }
    }, [bodyEl]);

    // is it the "default" display option? Return early
    if (isDefault) return StoryFn(context);

    // prep the display areas with the correct classes
    const isExpress = args.express;

    const backgroundColorClassNames = ['spectrum--light', 'spectrum--dark', 'spectrum--darkest'];
    const styles = {
      grid: {
        display: 'grid',
        gridTemplateColumns: isStacked ? '1fr' : 'repeat(auto-fit, minmax(0px, 1fr))',
        height: 'auto',
      },
      gridItem: {
        backgroundColor: 'var(--spectrum-alias-background-color-default)',
        color: 'var(--spectrum-alias-text-color-default)',
        outline: '2px solid var(--spectrum-blue-background-color-default)',
        padding: '2rem',
      },
    };

		const componentIsFullscreen = isFullscreen(context);
		const componentHasPopover = isPopover(context);

		if (componentIsFullscreen || componentHasPopover) {
			return html`
				<h4 class="spectrum-Detail spectrum-Detail--sizeXS spectrum-Examples-itemHeading" style="text-transform: none; background-color: var(--spectrum-negative-color-900); color: var(--spectrum-white); padding: 1rem;">
					⚠️ Sorry, feature is unavailable for this component. Choose a single-setting option in the toolbar to view the component, or try changing the setting in the control panel.
				</h4>
			`;
		};

    return html`
      <div style=${styleMap(styles.grid)}>
        ${backgroundColorClassNames.map((backgroundColorClassName) => {
          return html`
            <div class="spectrum ${backgroundColorClassName} ${isExpress ? `spectrum--express` : null}" style=${styleMap(styles.gridItem)}>
              ${StoryFn(context)}
            </div>
          `;
        })}
      </div>
    `;
  },
});
