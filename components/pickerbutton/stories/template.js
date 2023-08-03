import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { useArgs } from "@storybook/client-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	id,
	rootClass = "spectrum-PickerButton",
	size = "m",
	label,
	position,
	iconType = "ui",
	iconName = "ChevronDown",
	isDisabled = false,
	isFocused = false,
	isOpen = false,
	isQuiet = false,
	customClasses = [],
	isRounded = false,
	customStyles = {},
	onclick,
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

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--textuiicon`]: label && iconType === "ui",
				[`${rootClass}--uiicononly`]: !label && iconType === "ui",
				[`${rootClass}--icononly`]: !label && iconType !== "ui",
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				[`${rootClass}--rounded`]: isRounded,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				"is-open": isOpen && !isDisabled,
				[`${rootClass}--quiet`]: isQuiet,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
			id=${ifDefined(id)}
			aria-haspopup="listbox"
			?disabled=${isDisabled}
			@click=${onclick ??
			function () {
				if (isDisabled) return;
				updateArgs({ isOpen: !isOpen });
			}}
		>
			<div class="${rootClass}-fill">
				${label
					? html`<span class="${rootClass}-label is-placeholder"
							>${label}</span
					  >`
					: ""}
				${Icon({
					...globals,
					iconName: iconName ?? "ChevronDown",
					size,
					customClasses: [`${rootClass}-icon`],
				})}
			</div>
		</button>
	`;
};
