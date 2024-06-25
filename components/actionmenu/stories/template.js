import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators/utilities.js";

export const Template = ({
	id,
	testId,
	triggerId,
	customClasses = [],
	items = [],
	isOpen = false,
	label,
	iconName = "More",
	size = "m",
	...popoverArgs
} = {}, context = {}) => {
	if (!items.length) {
		console.warn("ActionMenu: requires items be passed in to render.");
	}

	return Popover({
		isOpen,
		id,
		testId: testId ?? id,
		triggerId,
		content: [
			Menu({ items }, context)
		],
		trigger: (passthroughs) => ActionButton({
			size,
			label,
			hasPopup: "menu",
			iconName,
			customClasses,
			...passthroughs,
		}, context),
		...popoverArgs,
	});
};

export const ActionMenuGroup = Variants({
	Template,
	testData: [{
		id: "popover-1",
		triggerId: "trigger-1",
		customContainerStyles: {
			"block-size": "250px",
		},
	}, {
		testHeading: "Closed menu",
		isOpen: false,
		id: "popover-2",
		triggerId: "trigger-2",
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
		id: "popover-3",
		triggerId: "trigger-3",
	}],
});
