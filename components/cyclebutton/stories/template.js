import { useArgs } from "@storybook/client-api";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "@spectrum-css/cyclebutton";

export const Template = ({
	rootClass = "spectrum-CycleButton",
	customClasses = [],
	size = "m",
	initialIcon = "Play",
	selectedIcon = "Pause",
	isDisabled = false,
	onclick,

}) => {
	const [{ selectedIcon: icon }, updateArgs] = useArgs();

	return ActionButton({

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
