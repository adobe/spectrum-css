import { renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";

import "../index.css";

export const Template = ({ content = [] } = {}, context = {}) => {
	return html`${renderContent(content, { context })}`;
};
