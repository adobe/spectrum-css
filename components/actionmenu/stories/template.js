import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";

export const Template = ({
	id = getRandomId("actionmenu"),
	testId,
	triggerId = getRandomId("actionmenu-trigger"),
	customClasses = [],
	customStyles = {},
	items = [],
	isOpen = false,
	label,
	iconName = "More",
	size = "m",
	...popoverArgs
} = {}, context = {}) => {
	const { updateArgs } = context;

	return Popover({
		size,
		isOpen,
		withTip: false,
		id,
		testId: testId ?? id,
		triggerId,
		position: "bottom-start",
		customStyles: {
			"inset-block-start": "50px",
			"inset-inline-start": "20px",
			...customStyles,
		},
		trigger: (passthroughs) => ActionButton({
			...passthroughs,
			size,
			label,
			hasPopup: "menu",
			iconName,
			id: triggerId,
			customClasses,
			...passthroughs,
			onclick: function () {
				updateArgs({
					isOpen: !isOpen,
				});
			}
		}, context),
		content: [
			Menu({ items, isOpen, size }, context)
		],
		...popoverArgs,
	});
};
