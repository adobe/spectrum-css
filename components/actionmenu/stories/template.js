import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";

import "../index.css";

export const Template = (
	{
		rootClass = "spectrum-ActionMenu",
		id = getRandomId("actionmenu"),
		testId,
		triggerId = getRandomId("actionmenu-trigger"),
		customClasses = [],
		customStyles = {},
		isOpen = false,
		hasLongPress = false,
		position = "bottom-start",
		// Object should match the schema of the Menu component
		menuArgs = {},
		// Object should match the schema of the ActionButton component (or whatever component is used for the trigger)
		triggerArgs = {},
		...popoverArgs
	} = {},
	context = {},
) => {
	return Popover(
		{
			...popoverArgs,
			isOpen,
			withTip: false,
			id,
			testId: testId ?? id,
			triggerId,
			trigger: (passthroughs) =>
				ActionButton(
					{
						...passthroughs,
						...triggerArgs,
						hasPopup: "menu",
						hasLongPress,
						id: triggerId,
						isOpen,
						isSelected: isOpen,
						customClasses: [`${rootClass}-trigger`],
					},
					context,
				),
			position,
			customClasses: [`${rootClass}-popover`],
			customWrapperClasses: [rootClass, ...customClasses],
			customWrapperStyles: customStyles,
			content: [
				(passthroughs) =>
					Menu(
						{
							...passthroughs,
							...menuArgs,
							customClasses: [
								`${rootClass}-menu`,
								...(passthroughs?.customClasses ?? []),
								...(menuArgs?.customClasses ?? []),
							],
							customStyles: {
								"--mod-menu-inline-size": "100%",
								...(passthroughs?.customStyles ?? {}),
								...(menuArgs?.customStyles ?? {}),
							},
							isOpen,
						},
						context,
					),
			],
		},
		context,
	);
};
