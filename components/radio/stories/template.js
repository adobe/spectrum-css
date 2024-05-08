import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { useArgs } from "@storybook/preview-api";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Radio",
	customClasses = [],
	customStyles = {},
	size = "m",
	label,
	name,
	isEmphasized,
	isChecked,
	isDisabled,
	isReadOnly,
	id,
	onclick,
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--emphasized`]: isEmphasized,
			"is-readOnly" : isReadOnly,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${ifDefined(styleMap(customStyles))}
		id=${ifDefined(id)}
	>
		<input
			type="radio"
			name=${name}
			class="${rootClass}-input"
			id="radio-0"
			readOnly=${isReadOnly ? "readonly" : ""}
			@click=${onclick ?? function () {
				const [,updateArgs] = useArgs();
				if (isReadOnly) return;
				updateArgs({ isChecked: !isChecked });
			}}
			?checked=${isChecked}
			?disabled=${isDisabled}
		/>
		<span class="${rootClass}-button ${rootClass}-button--sizeS"></span>
		<label class="${rootClass}-label ${rootClass}-label--sizeS" for="radio-0"
			>${label}</label
		>
	</div>
`;
