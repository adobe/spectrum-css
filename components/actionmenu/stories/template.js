import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";

export const Template = ({
	rootClass = "spectrum-ActionMenu",
	id = getRandomId("actionmenu"),
	testId,
	triggerId = getRandomId("actionmenu-trigger"),
	customClasses =[],
	customStyles = {},
	items =[],
	isOpen = false,
	label,
	iconName = "More",
	iconSet = "workflow",
	hasLongPress = false,
	menuArgs = {},
	size = "m",
	...popoverArgs
} = {}, context = {}) => {
	return Popover({
		...popoverArgs,
		size,
		isOpen,
		withTip: false,
		id,
		testId: testId ?? id,
		triggerId,
		trigger: (passthroughs) =>
			ActionButton({
				...passthroughs,
				size,
				label,
				hasPopup: "menu",
				showPopup: hasLongPress,
				iconName,
				iconSet,
				id: triggerId,
				customClasses: [`${rootClass}-trigger`],
			}, context),
		position: "bottom-start",
		customStyles,
		customClasses: [`${rootClass}-popover`],
		customWrapperClasses: [rootClass, ...customClasses],
		contentArgs: menuArgs,
		content: [
			(passthroughs) => Menu({
				...passthroughs,
				customClasses: [`${rootClass}-menu`],
				items,
				isOpen,
				size,
			}, context)
		],
	}, context);
};
