import { html } from "lit";
import { useArgs } from "@storybook/client-api";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CycleButton",
	customClasses = [],
	size = "m",
	initialIcon = "Play",
	selectedIcon = "Pause",
	isDisabled = false,
	onclick,
	...globals
}) => {
	const [{ selectedIcon: icon }, updateArgs] = useArgs();

	return ActionButton({
		...globals,
		customClasses: [rootClass],
		isQuiet: true,
		isDisabled,
		size,
		iconName: initialIcon,
		onclick:
			onclick ??
			function () {
				if (isDisabled) return;

				updateArgs({ initialIcon: selectedIcon });
				updateArgs({ selectedIcon: icon });
			},
	});
};
