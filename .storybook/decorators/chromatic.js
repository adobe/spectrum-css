import { makeDecorator } from "@storybook/preview-api";
import isChromatic from "chromatic/isChromatic";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export default makeDecorator({
	name: "withChromaticWrapper",
	parameterName: "chromatic",
	wrapper: (StoryFn, context) => {
        if (!isChromatic()) return StoryFn(context);

		return html`
			<style data-source="decorator">
				#root-inner {
                    max-inline-size: max-content;
                    max-block-size: max-content;
				}
			</style>
			${StoryFn(context)}
		`;
	},
});
