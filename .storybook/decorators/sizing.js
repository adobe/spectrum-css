import { makeDecorator } from "@storybook/preview-api";
import { html } from "lit";

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
			".spectrum-Examples-item[data-value=\"m\"] #scoped-root";
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
