import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withPreviewStyles = makeDecorator({
	name: "withPreviewStyles",
	parameterName: "customStorybookStyles",
	wrapper: (StoryFn, context) => {
		const { args, parameters } = context;

		const staticColor = args.staticColor;
		const rootElement = parameters.html?.root ?? "#root-inner";

		let {
			position = "relative",
			// Gap is only supported for flex and grid so it does nothing for other display types
			gap = "1rem",
			padding = "max(10px, 1rem)",
			...customStyles
		} = args.customStorybookStyles ?? {};

		const hasSetting = (setting) => Object.keys(args.customStorybookStyles ?? {}).includes(setting);

		// Always prefer the customStorybookStyles over the default styles
		["gap", "position", "padding"].forEach(setting => {
			if (!hasSetting(setting)) return;
			customStyles[setting] = args.customStorybookStyles[setting];
		});

		const customStorybookStyles = {
			gap,
			padding,
			position,
			...customStyles,
		};

		useEffect(() => {
			const roots = [
				...document.querySelectorAll(rootElement)
			] ?? [document.documentElement];

			// Look for a possible previous root element and remove the styles
			const previousRoot = [
				...document.querySelectorAll("[data-preview-styles]")
			];

			if (previousRoot.length > 0) {
				// Start with a clean slate
				previousRoot.forEach(root => {
					root.removeAttribute("style");
					root.removeAttribute("data-preview-styles");
				});
			}

			if (roots.length === 0) return;

			roots.forEach(root => {
				root.setAttribute("data-preview-styles", "");

				Object.entries(customStorybookStyles).forEach(([key, value]) => {
					if (value) root.style[key] = value;
				});

				// automatically set the background color for static color settings
				if (staticColor) {
					root.style.backgroundColor = staticColor === "white" ? "rgb(15, 121, 125)" : staticColor === "black" ? "rgb(181, 209, 211)" : undefined;
				} else {
					root.style.backgroundColor = customStorybookStyles.backgroundColor ?? undefined;
				}
			});
		}, [rootElement, customStorybookStyles, staticColor]);

		return StoryFn(context);
	}
});
