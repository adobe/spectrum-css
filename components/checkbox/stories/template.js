import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/client-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Checkbox",
	size = "m",
	label,
	isChecked = false,
	isEmphasized = false,
	isIndeterminate = false,
	isDisabled = false,
	title,
	value,
	id,
	customClasses = [],
	...globals
}) => {
	const [_, updateArgs] = useArgs();

	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	let iconSize = "75";
	switch (size) {
		case "s":
			iconSize = "50";
			break;
		case "l":
			iconSize = "100";
			break;
		case "xl":
			iconSize = "200";
			break;
		default:
			iconSize = "75";
	}

	return html`
		<label
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--emphasized`]: isEmphasized,
				[`is-indeterminate`]: isIndeterminate,
				[`is-disabled`]: isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				?checked=${isChecked}
				?disabled=${isDisabled}
				title=${ifDefined(label || title)}
				value=${ifDefined(value)}
				@change=${() => {
					if (isDisabled) return;
					updateArgs({ isChecked: !isChecked });
				}}
				id=${id}
			/>
			<span class="${rootClass}-box">
				${Icon({
					...globals,
					size,
					iconName: `Checkmark${iconSize}`,
					customClasses: [`${rootClass}-checkmark`],
				})}
				${Icon({
					...globals,
					size,
					iconName: `Dash${iconSize}`,
					customClasses: [`${rootClass}-partialCheckmark`],
				})}
			</span>
			${when(
				label,
				() => html`<span class="${rootClass}-label">${label}</span>`
			)}
		</label>
	`;
};
