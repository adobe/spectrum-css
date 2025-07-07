import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Slider",
	size,
	label,
	min = 0,
	max = 15,
	step = 2,
	values = [],
	variant,
	trackHeight,
	labelPosition,
	fillColor,
	showTicks = false,
	showTickLabels = false,
	isDisabled = false,
	isHovered = false,
	isActive = false,
	isFocused = false,
	isPrecise = false,
	isEditable = false,
	isEmphasized = false,
	customClasses = [],
	customStyles = {},
	id = getRandomId("slider"),
} = {}, context = {}) => {
	// Auto-set values and range for offset variant
	let finalValues = values;
	let finalMin = min;
	let finalMax = max;

	if (variant === "offset") {
		// Only set default value if no values are provided
		if (values.length === 0) {
			finalValues = [0]; // Default to center (0)
		}
		finalMin = -15; // Left edge = negative
		finalMax = 15;  // Right edge = positive
	}

	const { globals = {}, updateArgs } = context;
	let fillPercentage = 50;
	const isRTL = globals.textDirection !== "rtl";
	const rangeLength = finalMax - finalMin;
	const centerPoint = rangeLength / 2 + finalMin;
	const isRamp = variant === "ramp";
	const maskWidth = (fillPercentage / 100) * 240;
	const rampSVG = html`
		<svg
			viewBox="0 0 240 16"
			preserveAspectRatio="none"
			aria-hidden="true"
			focusable="false"
		>
			<defs>
				<mask id="rampMask">
					<rect x="0" y="0" width=${maskWidth} height="16" fill="white"/>
				</mask>
			</defs>
			<path class="spectrum-Slider-ramp-track" d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"></path>
			<path class="spectrum-Slider-ramp-track-fill" d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z" fill="currentColor" mask="url(#rampMask)"></path>
		</svg>`;

	const getPosition = (v) => ((v - finalMin) / rangeLength) * 100;

	const getWidth = (start, end) => {
		const distance = end > start ? end - start : start - end;
		return (distance / rangeLength) * 100;
	};

	function renderTrack({ position, width }) {
		const direction = isRTL ? "right" : "left";
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
				<div class=${classMap({
					[`${rootClass}-tick`]: true,
					[`${rootClass}-tick--track-height-${trackHeight}`]: trackHeight
				})}>
					<div class="${rootClass}-tickLabel">
						${when(showTickLabels, () => html`${i}`, undefined)}
					</div>
				</div>
			`);
		}
		return html`<div class="${rootClass}-ticks">${ticks}</div>`;
	}

	function renderHandle({ position, value, idx = 0 }) {
		const direction = isRTL ? "left" : "right";
		return html`
			<div
				class=${classMap({
					[`${rootClass}-handle`]: true,
					"is-hover": isHovered,
					"is-focused": isFocused,
					"is-active": isActive,
					"is-dragged": false, // note: this only applies z-index; no other styles
					"is-tophandle": false, // todo: when is this supposed to be used
				})}
				style=${styleMap({
					[direction]: position ? `${position}%` : undefined,
				})}
			>
				<input
					type="range"
					id=${ifDefined(id ? `${id}-input-${idx + 1}` : undefined)}
					class="${rootClass}-input"
					value=${ifDefined(value)}
					step=${ifDefined(step)}
					min=${ifDefined(finalMin)}
					max=${ifDefined(finalMax)}
					@change=${function(event) {
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
				[`${rootClass}--offset`]: variant === "offset",
				[`${rootClass}--range`]: finalValues.length > 1,
				[`${rootClass}--filled`]: variant === "filled",
				[`${rootClass}--tick`]: showTicks,
				[`${rootClass}--track-height-${trackHeight}`]: trackHeight,
				[`${rootClass}--precise`]: isPrecise,
				[`${rootClass}--emphasized`]: isEmphasized,
				"is-disabled": isDisabled,
				[`${rootClass}--sideLabel`]: labelPosition === "side",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap({
				"--spectrum-slider-track-color": fillColor ? fillColor : undefined,
				...customStyles,
			})}
			role=${ifDefined(finalValues.length > 1 ? "group" : undefined)}
			aria-labelledby=${ifDefined(label && id ? `${id}-label` : undefined)}
			@focusin=${function() {
				updateArgs({ isFocused: true });
			}}
			@focusout=${function() {
				updateArgs({ isFocused: false });
			}}
		>
			<!-- Label region -->
			${when(label, () => html`
			<div
				class="${rootClass}-labelContainer"
				role=${ifDefined(finalValues.length > 1 ? "presentation" : undefined)}
			>
				${FieldLabel({
					size,
					label,
					isDisabled,
					id: id ? `${id}-label` : undefined,
					forInput: id ? `${id}-1` : undefined,
					customClasses: [`${rootClass}-label`],
				}, context)}
				${when(finalValues.length && labelPosition != "side" && !isEditable, () => html`
					<div
						class="${rootClass}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${ifDefined(
							id && label ? `${id}-label` : undefined
						)}
					>
						${finalValues[0]}${finalValues.length > 1 ? ` - ${finalValues[1]}` : ""}
					</div>
				`)}
			</div>`)}

			<div class=${classMap({
				[`${rootClass}-content`]: true,
				[`${rootClass}-content--editable`]: isEditable,
			})}>
			<!-- Slider controls -->
			<div
				class=${classMap({
					[`${rootClass}-controls`]: true,
					"is-focused": isFocused,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				role=${ifDefined(isRamp ? "presentation" : undefined)}
			>
				${finalValues.map((value, idx) => {
					const prevPoint = idx === 0 ? finalMin : finalValues[idx - 1];
					const isFirst = idx === 0;
					const isLast = idx === finalValues.length - 1;
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
							? renderTick({ from: finalMin, to: finalMax })
							: "",
						renderHandle({
							position: getPosition(value),
							value,
							idx,
						}),
						isLast && !isRamp
							? renderTrack({ width: getWidth(value, finalMax) })
							: "",
						isLast && variant === "offset"
							? html` <div
									class=${classMap({
										[`${rootClass}-fill`]: true,
										[`${rootClass}-fill--right`]: !!(value > centerPoint),
									})}
									style=${ifDefined(
										styleMap({
											[isRTL ? "right" : "left"]: `${getPosition(centerPoint)}%`,
											width: `${getWidth(centerPoint, value)}%`,
										})
									)}
							  ></div>`
							: "",
					];
				})}
			</div>
			${when(isEditable, () => html`
				${TextField({
					value: finalValues[0],
					id: id ? `${id}-offset` : undefined,
					customClasses: [`${rootClass}-editable`],
					isFocused,
					isDisabled,
					size,
				}, context)}
			`)}
			</div>
			${when(finalValues.length && labelPosition === "side" && !isEditable, () => html`
				<div
					class="${rootClass}-labelContainer"
					role=${ifDefined(finalValues.length > 1 ? "presentation" : undefined)}
				>
					<div
						class="${rootClass}-value"
						role="textbox"
						aria-readonly="true"
						aria-labelledby=${ifDefined(
							id && label ? `${id}-label` : undefined
						)}
					>
						${finalValues[0]}${finalValues.length > 1 ? ` - ${finalValues[1]}` : ""}
					</div>
				</div>
			`)}
		</div>`;
};
