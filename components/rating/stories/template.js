import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Rating",
	max = 5,
	value = 0,
	isReadOnly = false,
	isKeyboardFocused = false,
	isDisabled = true,
	isEmphasized = false,
	customClasses = [],
	id = getRandomId("rating"),
} = {}, context = {}) => {
	const { updateArgs } = context;
	document.addEventListener("DOMContentLoaded", function() {
		const rating = document.getElementById(id);
		if (!rating) return;
		if (rating.classList.contains("is-disabled") || rating.classList.contains("is-readOnly")) return;
		const icons = Array.from(rating.getElementsByClassName("spectrum-Rating-icon"));
		let hoverIndex = -1;
		let selectedIndex = -1;

		const updateHoverState = () => {
			icons.forEach((icon, index) => {
				const activeStar = icon.querySelector(".spectrum-Rating-starActive");
				const inactiveStar = icon.querySelector(".spectrum-Rating-starInactive");

				if (index <= hoverIndex ||
					(index <= selectedIndex && hoverIndex === -1)
				) {
					icon.classList.add("is-hoverSelection");
					activeStar.style.display = "block";
					inactiveStar.style.display = "none";
				}
				else {
					icon.classList.remove("is-hoverSelection");
					activeStar.style.display = "none";
					inactiveStar.style.display = "block";
				}
			});
		};

		rating.addEventListener("mouseleave", function() {
			icons.forEach(icon => {
				icon.classList.remove("is-hoverSelection");
				icon.querySelector(".spectrum-Rating-starActive").style.display = "";
				icon.querySelector(".spectrum-Rating-starInactive").style.display = "";
			});
		});

		icons.forEach((icon, index) => {
			if (icon.classList.contains("is-selected")) selectedIndex = index;

			icon.addEventListener("mouseover", function() {
				hoverIndex = index;
				updateHoverState();
			});

			icon.addEventListener("mouseleave", function(event) {
				if (!rating.contains(event.relatedTarget)) {
					hoverIndex = -1;
					updateHoverState();
				}
			});

			icon.addEventListener("click", function() {
				selectedIndex = index;
				updateHoverState();
			});
		});

		updateHoverState();
	});

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-disabled": isDisabled,
				"is-readOnly": isReadOnly,
				"is-keyboardFocused": isKeyboardFocused,
				[`${rootClass}--emphasized`]: isEmphasized,
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
							"is-currentValue": idx === value - 1,
						})}
						@click=${function() {
							updateArgs({ value: idx + 1, isFocused: true });
						}}
					>
						${Icon({
							iconName: "Star",
							setName: "workflow",
							customClasses: [`${rootClass}-starActive`],
						}, context)}
						${Icon({
							iconName: "StarOutline",
							setName: "workflow",
							customClasses: [`${rootClass}-starInactive`],
						}, context)}
					</span>
				`
			)}
		</div>
	`;
};
