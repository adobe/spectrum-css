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
	isOpen = false,
	hasLongPress = false,
	position,
	// Object should match the schema of the Menu component
	menuArgs = {},
	// Object should match the schema of the ActionButton component (or whatever component is used for the trigger)
	triggerArgs = {},
	...popoverArgs
} = {}, context = {}) => {
	return Popover({
		...popoverArgs,
		isOpen,
		withTip: false,
		id,
		testId: testId ?? id,
		triggerId,
		trigger: (passthroughs) =>
			ActionButton({
				...passthroughs,
				...triggerArgs,
				hasPopup: "menu",
				hasLongPress,
				id: triggerId,
				customClasses: [`${rootClass}-trigger`],
			}, context),
		position,
		customStyles,
		customClasses: [`${rootClass}-popover`],
		customWrapperClasses: [rootClass, ...customClasses],
		content: [
			(passthroughs) => Menu({
				...passthroughs,
				...menuArgs,
				customClasses: [`${rootClass}-menu`],
				isOpen,
			}, context)
		],
	}, context);
};
