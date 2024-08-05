import { Variants } from "@spectrum-css/preview/decorators";
import { capitalize } from "lodash-es";
import { Template } from "./template.js";
import { default as TooltipStory } from "./tooltip.stories.js";

export const PlacementVariants = Variants({
	Template,
	testData: [
		...(TooltipStory?.argTypes?.variant?.options ?? []).map(variant => ({
			testHeading: capitalize(variant),
			variant,
		})),
		...(TooltipStory?.argTypes?.placement?.options ?? []).map(placement => ({
			testHeading: capitalize(placement.replace(/-/g, " ")),
			placement,
		})),
	],
});
