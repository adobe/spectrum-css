import { Template as Modal } from "@spectrum-css/modal/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = [],
	customStyles = {},
	id,
}) => Modal({
	isOpen,
	customClasses: [rootClass, ...customClasses],
	customWrapperClasses: [`${rootClass}-wrapper`],
	customWrapperStyles: customStyles,
	id,
	content,
});
