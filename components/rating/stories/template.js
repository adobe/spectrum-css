import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Tooltip } from "@spectrum-css/tooltip/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Rating",
	max = 5,
	value = 0,
	isReadOnly = false,
	isFocused = false,
	isHovered = false,
	isDisabled = true,
	isEmphasized = false,
	withTooltip = false,
	isPartial = false,
	size = "s",
	customClasses = [],
	customStyles = {},
	id = getRandomId("rating"),
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-disabled": isDisabled,
				"is-readOnly": isReadOnly,
				"is-focused": isFocused,
				"is-hover": isHovered,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			@focusin=${function() {
				updateArgs({ isFocused: true });
			}}
			@focusout=${function() {
				updateArgs({ isFocused: false });
			}}
		>
			${withTooltip
				? Tooltip({
					label: "Edit rating",
					isOpen: true,
					placement: "top",
					showOnHover: true,
			}, context)
			: nothing}
			<input
				class=${classMap({
					[`${rootClass}-input`]: true,
				})}
				type="range"
				min="0"
				max=${max}
				value=${value}
				aria-label="Rating"
				?disabled=${isDisabled}
				@change=${function(e) {
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
							"is-selected": idx <= value - 1,
							"is-hover": idx === 4 && isHovered,
							"is-partial": isPartial === true && idx === value - 1,
						})}
						@click=${function() {
							updateArgs({ value: idx + 1, isFocused: true });
						}}
						style=${styleMap(customStyles)}
					>
						${Icon({
							iconName: "StarFilled",
							setName: "workflow",
							customClasses: [`${rootClass}-starActive`],
						}, context)}
						${Icon({
							iconName: "Star",
							setName: "workflow",
							customClasses: [`${rootClass}-starInactive`],
						}, context)}
					</span>
				`
			)}
		</div>
	`;
};
