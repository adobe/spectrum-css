import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withPreviewStyles = makeDecorator({
	name: "withPreviewStyles",
	parameterName: "customStyles",
	wrapper: (StoryFn, context) => {
		const { args } = context;
		const staticColor = args.staticColor;
		let {
			/** @todo: do we really want flex as our default display type? does this make development harder b/c we have to consider how it impacts a component or is it helpful so we can stack components in a view easily? */
			display = "flex",
			// Gap is only supported for flex and grid so we don't need to set it for other display types
			gap = "10px",
			padding = "10px",
			position = "relative",
			...customStyles
		} = args.customStorybookStyles ?? {};

		const hasSetting = (setting) => Object.keys(args.customStorybookStyles ?? {}).includes(setting);

		if (
			hasSetting("display") &&
			["flex", "grid"].every(d => !display.endsWith(d))
		) {
			gap = undefined;
			if (display !== "contents") padding = "10px 0";
		}

		// Always prefer the customStorybookStyles over the default styles
		["display", "gap", "position", "padding"].forEach(setting => {
			if (!hasSetting(setting)) return;
			customStyles[setting] = args.customStorybookStyles[setting];
		});


		const customStorybookStyles = {
			display,
			gap,
			padding,
			position,
			...customStyles,
		};

		useEffect(() => {
			const root = document.querySelector("#root-inner");

			// Start with a clean slate
			root.removeAttribute("style");

			Object.entries(customStorybookStyles).forEach(([key, value]) => {
				if (value) root.style[key] = value;
			});

			// automatically set the background color for static color settings
			if (staticColor) {
				document.body.style.backgroundColor = staticColor === "white" ? "rgb(15, 121, 125)" : staticColor === "black" ? "rgb(181, 209, 211)" : undefined;
			} else {
				document.body.style.backgroundColor = customStorybookStyles.backgroundColor ?? undefined;
			}

		}, [customStorybookStyles, staticColor]);

		return StoryFn(context);
	}
});
