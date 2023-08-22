import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "@spectrum-css/tray";
import "@spectrum-css/modal";

export const Template = ({
	rootClass = "spectrum-Tray",
	isOpen = true,
	content = [],
	customClasses = ["spectrum-Modal"],
	id,
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express)
			import(
				/* webpackPrefetch: true */ "@spectrum-css/tray/dist/themes/spectrum.css"
			);
		else
			import(
				/* webpackPrefetch: true */ "@spectrum-css/tray/dist/themes/express.css"
			);
	} catch (e) {
		console.warn(e);
	}

	return html`
		<div class="${rootClass}-wrapper">
			<div
				class=${classMap({
					[rootClass]: true,
					"is-open": isOpen,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
			>
				${content.map((c) => {
					const { template, ...props } = c;
					return template({ ...props, ...globals });
				})}
			</div>
		</div>
	`;
};
