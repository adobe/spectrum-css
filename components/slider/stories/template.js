import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

export const Template = ({
	rootClass = "spectrum-Slider",
	size,
	label,
	min = 0,
	max = 10,
	step = 2,
	values = [],
	variant,
	labelPosition,
	fillColor = "rgb(213, 213, 213)",
	showTicks = false,
	isDisabled = false,
	isFocused = false,
	customClasses = [],
	customStyles = {},
	id,
} = {}, context = {}) => {
	const { globals = {} } = context;
	const [, updateArgs] = useArgs();

	const textDirection = globals.textDirection ?? "ltr";

	const rtl = !!(textDirection === "rtl");
	const rangeLength = max - min;
	const centerPoint = rangeLength / 2 + min;
	const isRamp = variant === "ramp";
	const rampSVG = html`
		<svg
			viewBox="0 0 240 16"
			preserveAspectRatio="none"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
		</svg>`;

	const getPosition = (v) => ((v - min) / rangeLength) * 100;

	const getWidth = (start, end) => {
		const distance = end > start ? end - start : start - end;
		return (distance / rangeLength) * 100;
	};

	function renderTrack({ position, width }) {
		const direction = rtl ? "right" : "left";
		return html`
			<div
				class="${rootClass}-track"
				style=${ifDefined(
					styleMap({
						[direction]: position ? `${position}%` : undefined,
						width: width ? `${width}%` : undefined,
					})
				)}
			></div>`;
	}

	function renderTick({ from, to }) {
		const ticks = [];
		for (let i = from; i <= to; i += step) {
			ticks.push(html`
				<div class="${rootClass}-tick">
					<div class="${rootClass}-tickLabel">${i}</div>
				</div>
			`);
		}
		return html`<div class="${rootClass}-ticks">${ticks}</div>`;
	}

	function renderHandle({ position, value, idx = 0 }) {
		const direction = rtl ? "right" : "left";
		return html`
			<div
				class=${classMap({
					[`${rootClass}-handle`]: true,
					"is-focused": isFocused,
					"is-dragged": false, // note: this only applies z-index; no other styles
					"is-tophandle": false, // todo: when is this supposed to be used
				})}
				style=${ifDefined(
					styleMap({
						[direction]: position ? `${position}%` : undefined,
					})
				)}
			>
				<input
					type="range"
					id=${ifDefined(id ? `${id}-input-${idx + 1}` : undefined)}
					class="${rootClass}-input"
					value=${ifDefined(value)}
					step=${ifDefined(step)}
					min=${ifDefined(min)}
					max=${ifDefined(max)}
					@change=${(event) => {
						if (isDisabled) return;
						updateArgs({ value: event.target.value });
					}}
				/>
			</div>`;
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--ramp`]: variant === "ramp",
				[`${rootClass}--range`]: values.length > 1,
				[`${rootClass}--filled`]: variant === "filled",
				[`${rootClass}--tick`]: showTicks,
				"is-disabled": isDisabled,
				[`${rootClass}--sideLabel`]: labelPosition === "side",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap({
				"max-width": "240px",
				["--spectrum-slider-track-color"]: fillColor,
				...customStyles,
			})}
			role=${ifDefined(values.length > 1 ? "group" : undefined)}
			aria-labelledby=${ifDefined(label && id ? `${id}-label` : undefined)}
			@focusin=${() => {
				const focusClass = { isFocused: true };
				updateArgs(focusClass);
			}}
			@focusout=${() => {
				const focusClass = { isFocused: false };
				updateArgs(focusClass);
			}}
		>
			<!-- Label region -->
			${when(label, () => html`
			<div
				class="${rootClass}-labelContainer"
				role=${ifDefined(values.length > 1 ? "presentation" : undefined)}
			>
				${FieldLabel({
					size,
					label,
					isDisabled,
					id: id ? `${id}-label` : undefined,
					forInput: id ? `${id}-1` : undefined,
					customClasses: [`${rootClass}-label`],
				}, context)}
				${when(values.length && labelPosition != "side", () => html`
					<div
						class="${rootClass}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${ifDefined(
							id && label ? `${id}-label` : undefined
						)}
					>
						${values[0]}${values.length > 1 ? ` - ${values[1]}` : ""}
					</div>
				`)}
			</div>`)}

			<!-- Slider controls -->
			<div
				class=${classMap({
					[`${rootClass}-controls`]: true,
					"is-focused": isFocused,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				role=${ifDefined(isRamp ? "presentation" : undefined)}
			>
				${values.map((value, idx) => {
					const prevPoint = idx === 0 ? min : values[idx - 1];
					const isFirst = idx === 0;
					const isLast = idx === values.length - 1;
					return [
						!isRamp
							? renderTrack({
									position: getPosition(prevPoint),
									width: getWidth(prevPoint, value),
							})
							: "",
						isFirst && isRamp
							? html`<div class="${rootClass}-ramp">${rampSVG}</div>`
							: "",
						isFirst && showTicks && !isRamp
							? renderTick({ from: min, to: max })
							: "",
						renderHandle({
							position: getPosition(value),
							value,
							idx,
						}),
						isLast && !isRamp
							? renderTrack({ width: getWidth(value, max) })
							: "",
						isLast && variant === "offset"
							? html` <div
									class=${classMap({
										[`${rootClass}-fill`]: true,
										[`${rootClass}-fill--right`]: !!(value > centerPoint),
									})}
									style=${ifDefined(
										styleMap({
											[rtl ? "right" : "left"]: `${
												value > centerPoint
													? getPosition(centerPoint)
													: getPosition(value)
											}%`,
											width: `${getWidth(value, centerPoint)}%`,
										})
									)}
							  ></div>`
							: "",
					];
				})}
			</div>
			${when(values.length && labelPosition === "side", () => html`
				<div
					class="${rootClass}-labelContainer"
					role=${ifDefined(values.length > 1 ? "presentation" : undefined)}
				>
					<div
						class="${rootClass}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${ifDefined(
							id && label ? `${id}-label` : undefined
						)}
					>
						${values[0]}${values.length > 1 ? ` - ${values[1]}` : ""}
					</div>
				</div>
			`)}
		</div>`;
};
