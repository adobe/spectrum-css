import { renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({ content = [] } = {}, context = {}) => {
	return html`${renderContent(content, { context })}`;
};
