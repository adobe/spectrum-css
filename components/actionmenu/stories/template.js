import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Variants, getRandomId } from "@spectrum-css/preview/decorators";

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
			onclick: () => updateArgs({ isOpen: !isOpen }),
		}, context),
		content: [
			Menu({ items, isOpen, size }, context)
		],
		...popoverArgs,
	});
};

export const ActionMenuGroup = Variants({
	Template,
	testData: [{
		wrapperStyles: {
			"min-block-size": "200px",
			"align-items": "flex-start",
		},
	}, {
		testHeading: "Closed menu",
		isOpen: false,
		items: [
			{
				label: "Edit",
				iconName: "Edit",
			},
			{
				label: "Delete",
				iconName: "Delete",
			},
		],
	}, {
		testHeading: "Custom icon",
		isOpen: false,
		iconName: "Add",
	}],
});
