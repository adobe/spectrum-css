import { useArgs } from "@storybook/client-api";

import { Template as ActionButton } from "../../actionbutton/stories/template.js";

import "../index-base.css";

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
        customClasses: [rootClass, ...customClasses],
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
