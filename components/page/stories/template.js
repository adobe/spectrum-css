import { html } from "lit";
import { renderContent } from "../../../.storybook/decorators";

import "../index.css";

export const Template = ({ content = [] } = {}, context = {}) => {
	return html`${renderContent(content, { context })}`;
};
