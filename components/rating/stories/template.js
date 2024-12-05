import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";

import { useArgs } from "@storybook/preview-api";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Rating",
	max = 5,
	value = 0,
	isReadOnly = false,
	isFocused = false,
	isDisabled = true,
	isEmphasized = false,
	customClasses = [],
	id,
	...globals
}) => {
	const [, updateArgs] = useArgs();

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-disabled": isDisabled,
				"is-readOnly": isReadOnly,
				[`${rootClass}--emphasized`]: isEmphasized,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			@focusin=${() => {
				updateArgs({ isFocused: true });
			}}
			@focusout=${() => {
				updateArgs({ isFocused: false });
			}}
		>
			<input
				class=${classMap({
					[`${rootClass}-input`]: true,
					["is-Focus"]: isFocused,
				})}
				type="range"
				min="0"
				max=${max}
				value=${value}
				aria-label="Rating"
				?readonly=${isReadOnly}
				?disabled=${isDisabled}
				@change=${(e) => {
					const rating = e.target.closest(`.${rootClass}`);
					if (!rating) return;

					const input = rating.closest(`.${rootClass}-input`);
					if (!input) return;
					if (!isReadOnly && !isDisabled) {
						updateArgs({ value: parseInt(input.value, 10) });
					}
				}}
			/>
			${repeat(
				Array(max).fill(0),
				(_, idx) => html`
					<span
						class=${classMap({
							[`${rootClass}-icon`]: true,
							"is-selected": !isDisabled && idx <= value - 1,
							"is-currentValue":
								!isDisabled && !isReadOnly && idx === value - 1,
						})}
						@click=${() => {
							updateArgs({ value: idx + 1, isFocused: true });
						}}
					>
						${Icon({
							...globals,
							iconName: "Star",
							customClasses: [`${rootClass}-starActive`],
						})}
						${Icon({
							...globals,
							iconName: "StarOutline",
							customClasses: [`${rootClass}-starInactive`],
						})}
					</span>
				`
			)}
		</div>
	`;
};
