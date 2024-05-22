import { html } from "lit";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";

export const Template = ({
	popoverId = "popover-1",
	popoverTestId = "popover-1",
	popoverTriggerId = "trigger",
	customStyles = {},
	customClasses = [],
	items = [],
	isOpen = false,
	label,
	iconName,
	size = "m",
}) => {
	if (!items.length) {
		console.warn("ActionMenu: requires items be passed in to render.");
		return html``;
	}

	return Popover({
		position: "bottom",
		isOpen,
		id: popoverId,
		testId: popoverTestId,
		triggerId: popoverTriggerId,
		customStyles,
		content: [
			Menu({ items })
		],
		trigger: (passthroughs) => ActionButton({
			size,
			label,
			isQuiet: false,
			isEmphasized: false,
			hasPopup: false,
			isSelected: isOpen,
			iconName: iconName ?? "More",
			id: popoverTriggerId,
			customClasses,
			...passthroughs,
		})
	});
};
