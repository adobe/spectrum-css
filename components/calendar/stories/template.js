import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Calendar",
	month,
	selectedDay,
	lastDay,
	year,
	padded,
	isDisabled = false,
	isFocused = false,
	useDOWAbbrev = false,
	buttonSize = "s",
	customClasses = [],
	customStyles = {
		"--mod-actionbutton-icon-size": "10px",
	},
	onDateClick,
	previousHandler,
	nextHandler,
	id,
	...globals
}, context) => {
	const [, updateArgs] = useArgs();
	const lang = window.__lang;

	const DOW = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const printTitleFormat = {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	};

	const getMonthName = (dateOrIndex, format = "long") => {
		let date;
		if (typeof dateOrIndex === "number") {
			date = new Date().setMonth(dateOrIndex - 1);
		}
		else if (dateOrIndex instanceof Date) {
			date = dateOrIndex;
		}
		else {
			console.warn(
				"Calendar: getMonthName() requires a date object or a number."
			);
			return;
		}

		return date.toLocaleString(lang ?? "default", { month: format });
	};

	let today = new Date();
	if (window.isChromatic()) {
		today = new Date(`${month ?? "January"} 1, ${year ?? "2021"}`);
	}

	if (today) {
		month = month ?? getMonthName(today);
		year = year ?? today.getFullYear();
	}

	const displayedDate = new Date(`${month} 1, ${year}`);
	const displayedMonth = displayedDate.getMonth();
	const displayedYear = displayedDate.getFullYear();

	/**
	 * @typedef {{ date: Date, dateClassList: import('lit').ClassInfo, isSelected: boolean, isToday: boolean, isOutsideMonth: boolean }} DateMetadata
	 **/

	/**
	 *
	 * @param {object} config
	 * @param {Date} config.selectedDate
	 * @param {Date} config.lastSelectedDate
	 * @returns {DateMetadata[]}
	 */
	const generateMonthArray = ({ selectedDate, lastSelectedDate }) => {
		/* Fetch a clean (time-free) version of today's date */
		today.setHours(0, 0, 0, 0);
		const todayDatetime = today.getTime();

		let selectedDatetime;
		let lastSelectedDatetime;

		if (selectedDate && typeof selectedDate.setHours === "function") {
			selectedDate.setHours(0, 0, 0, 0);
			selectedDatetime = selectedDate ? selectedDate.getTime() : selectedDate;
		}

		if (lastSelectedDate && typeof lastSelectedDate.setHours === "function") {
			lastSelectedDate.setHours(0, 0, 0, 0);
			lastSelectedDatetime = lastSelectedDate
				? lastSelectedDate.getTime()
				: lastSelectedDate;
		}

		if (
			lastSelectedDatetime &&
			selectedDatetime &&
			lastSelectedDatetime < selectedDatetime
		) {
			lastSelectedDatetime = undefined;
			console.warn(
				"Calendar: last selected date must occur after the selected date."
			);
		}

		const lastDateInMonth = new Date(
			displayedYear,
			displayedMonth + 1,
			0
		).getDate();

		const firstDOWInMonth = new Date(displayedYear, displayedMonth, 1).getDay(); // 0 = Sunday

		let weeksInMonth = Math.ceil(lastDateInMonth / DOW.length);
		const orphanedDays = lastDateInMonth % DOW.length;

		if (firstDOWInMonth > DOW.length - orphanedDays) {
			weeksInMonth++;
		}
		if (displayedMonth === 1 && firstDOWInMonth > 0) { // accounts for Feburary
			weeksInMonth++;
		}

		/* This is generating a nested array with the  */
		return new Array(Math.ceil(weeksInMonth))
			.fill(0)
			.map((_val, idx) =>
				new Array(DOW.length).fill(0).map((_v, i) => {
					const thisDay = idx * DOW.length + i + 1 - firstDOWInMonth;
					const isOutsideMonth =
						thisDay < 1 ||
						thisDay > lastDateInMonth;
					/* Determine if this entry exists within this month or the next or prev month */
					let thisMonth = !isOutsideMonth
						? displayedMonth
						: displayedMonth + (thisDay < 1 ? -1 : 1);
					/* Determine if the displayed date is in this year or the previous one */
					let thisYear = displayedYear;

					if (isOutsideMonth) {
						if (thisMonth < 0) {
							thisMonth = 11;
							thisYear -= 1;
						}
						else if (thisMonth > 11) {
							thisMonth = 0;
							thisYear += 1;
						}
					}
					const thisDate = new Date(
						thisYear,
						displayedMonth,
						thisDay,
						0,
						0,
						0,
						0
					);
					const thisDatetime = thisDate.getTime();

					/* Compare the rendered date against the clean date stamp for today */
					const isToday = !!(thisDatetime === todayDatetime);
					const isInRange = !!(
						thisDatetime &&
						selectedDatetime &&
						lastSelectedDatetime &&
						thisDatetime >= selectedDatetime &&
						thisDatetime <= lastSelectedDatetime
					);
					const isSelected = !!(
						(selectedDate && selectedDatetime === thisDatetime) ||
						isInRange
					);
					const isFocused = thisDay === 5;


					return {
						date: thisDate,
						isSelected,
						isToday,
						isOutsideMonth,
						isInRange,
						isRangeStart: !!(isInRange && thisDatetime === selectedDatetime),
						isRangeEnd: !!(isInRange && thisDatetime === lastSelectedDatetime),
						isFocused,
					};
				})
			);
	};
	if (!onDateClick || typeof onDateClick !== "function") {
		/**
		 * @param {DateMetadata} thisDay
		 * @param {Event} evt
		 * @returns {void}
		 */
		onDateClick = (thisDay, evt) => {
			if (!thisDay || thisDay.isDisabled || !thisDay.date) return;

			updateArgs({ selectedDay: thisDay.date });
			action(`click .${rootClass}-date`)(evt);
		};
	}

	if (!previousHandler || typeof previousHandler !== "function") {
		previousHandler = ({ displayedMonth, displayedYear }) => {
			if (
				typeof displayedMonth === "undefined" ||
				typeof displayedYear === "undefined"
			) {
				console.warn("Calendar: No month or year could be determined.");
				return;
			}
			return updateArgs({
				month: getMonthName(displayedMonth < 1 ? 12 : displayedMonth),
				year: displayedMonth === 0 ? displayedYear - 1 : displayedYear,
			});
		};
	}

	if (!nextHandler || typeof nextHandler !== "function") {
		nextHandler = ({ displayedMonth, displayedYear }) => {
			if (
				typeof displayedMonth === "undefined" ||
				typeof displayedYear === "undefined"
			) {
				console.warn("Calendar: No month or year could be determined.");
				return;
			}
			return updateArgs({
				month: getMonthName(displayedMonth > 10 ? 1 : displayedMonth + 2),
				year: displayedMonth === 11 ? displayedYear + 1 : displayedYear,
			});
		};
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--padded`]: padded,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(customStyles))}
			id=${ifDefined(id)}
		>
			<div class="${rootClass}-header">
				<div
					class="${rootClass}-title"
					role="heading"
					aria-live="assertive"
					aria-atomic="true"
				>
					${displayedDate.toLocaleString(lang ?? "default", {
						month: "long",
						year: "numeric",
					})}
				</div>
				${ActionButton({
					...globals,
					label: "Previous",
					hideLabel: true,
					isQuiet: true,
					isDisabled,
					size: buttonSize,
					iconName: "ChevronLeft100",
					customClasses: [`${rootClass}-prevMonth`],
					onclick: previousHandler.bind(null, {
						displayedMonth,
						displayedYear,
					}),
				}, context)}
				${ActionButton({
					...globals,
					label: "Next",
					hideLabel: true,
					isQuiet: true,
					isDisabled,
					size: buttonSize,
					iconName: "ChevronRight100",
					customClasses: [`${rootClass}-nextMonth`],
					onclick: nextHandler.bind(null, {
						displayedMonth,
						displayedYear,
					}),
				}, context)}
			</div>
			<div
				class="${rootClass}-body"
				role="grid"
				tabindex="0"
				aria-readonly="true"
				aria-disabled=${isDisabled ? "true" : "false"}
			>
				<table role="presentation" class="${rootClass}-table">
					<thead role="presentation">
						<tr role="row">
							${repeat(
								DOW,
								(day) => html` <th
									role="columnheader"
									scope="col"
									class="${rootClass}-tableCell"
								>
									<abbr class="${rootClass}-dayOfWeek" title=${day}
										>${day.slice(0, useDOWAbbrev ? 3 : 1)}</abbr
									>
								</th>`
							)}
						</tr>
					</thead>
					<tbody role="presentation">
						${repeat(
							generateMonthArray({
								selectedDate: selectedDay,
								lastSelectedDate: lastDay,
							}),
							(thisWeek) => html` <tr role="row">
								${repeat(
									thisWeek,
									(thisDay) => html` <td
										role="gridcell"
										class="${rootClass}-tableCell"
										tabindex=${!thisDay.isOutsideMonth ? "-1" : ""}
										aria-disabled=${thisDay.isDisabled
											? "true"
											: "false"}
										aria-selected=${thisDay.isSelected === true
											? "true"
											: "false"}
										aria-invalid="false"
										title="${thisDay.date.toLocaleDateString(
											lang,
											printTitleFormat
										)}"
									>
										<span
											role="presentation"
											class=${classMap({
												[`${rootClass}-date`]: true,
												"is-outsideMonth": thisDay.isOutsideMonth,
												"is-today": thisDay.isToday,
												// "is-focused": thisDay.isSelected, @todo
												"is-range-selection": thisDay.isInRange,
												// "is-range-start": thisDay.isRangeStart, @todo
												// "is-range-end": thisDay.isRangeEnd, @todo
												"is-selected": thisDay.isSelected,
												"is-selection-start": thisDay.isRangeStart,
												"is-selection-end": thisDay.isRangeEnd,
												"is-disabled": isDisabled,
												"is-focused": isFocused && thisDay.isFocused,
											})}
											@click=${onDateClick.bind(null, thisDay)}
											>${thisDay.date.getDate()}</span
										>
									</td>`
								)}
							</tr>`
						)}
					</tbody>
				</table>
			</div>
		</div>
	`;
};
