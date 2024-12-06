import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "./constants";

export function getTitle() {
	const { customProperties = {} } = useParameter(PARAM_KEY, {
		customProperties: {},
	});

	const controlsCount = Object.values(customProperties).flat().length;
	const suffix = controlsCount === 0 ? "" : ` (${controlsCount})`;

	return `Component properties${suffix}`;
}
