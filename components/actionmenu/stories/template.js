import { html } from "lit";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

export const Template = ({
	customClasses = [],
	items = [],
	isOpen = true,
	...globals
}) => {

	if (!items.length) {
		console.warn("ActionMenu: requires items be passed in to render.");
		return html``;
	}

	return Popover({
		...globals,
		position: "bottom",
		isOpen,
		content: [
			Menu({ ...globals, items })
		],
		trigger: (passthroughs) => ActionButton({
			size: "m",
			...globals,
			isQuiet: true,
			isSelected: isOpen,
			label: "More Actions",
			iconName: "More",
			id: "trigger",
			customClasses,
			...passthroughs,
		})
	})
};
