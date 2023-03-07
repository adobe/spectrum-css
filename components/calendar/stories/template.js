import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { useArgs } from "@storybook/client-api";
import { action } from "@storybook/addon-actions";

import { Template as ActionButton } from '../../actionbutton/stories/template.js';

import '../index.css';
import '../skin.css';

export const Template = ({
  rootClass = "spectrum-Calendar",
  month = new Date().toLocaleString("default", { month: "long" }),
  selectedDay,
  lastDay,
  year = new Date().getFullYear(),
  padded,
  isDisabled = false,
  useDOWAbbrev = false,
  customClasses = [],
  id,
  ...globals
}, ctx) => {
  const { lang } = ctx.globals;
  const displayedDate = new Date(`${month} 1, ${year}`);

  const [_, updateArgs] = useArgs();
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

  const getMonthName = (num, format = 'long') => {
    const date = new Date();
    date.setMonth(num - 1);
    return date.toLocaleString(lang, { month: format });
  };

  const generateMonthArray = ({ displayedDate, selectedDate, lastSelectedDate }) => {
    /* Fetch a clean (time-free) version of today's date */
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayDatetime = today.getTime();

    selectedDate && selectedDate.setHours(0, 0, 0, 0);
    const selectedDatetime = selectedDate ? selectedDate.getTime() : selectedDate;

    lastSelectedDate && lastSelectedDate.setHours(0, 0, 0, 0);
    let lastSelectedDatetime = lastSelectedDate ? lastSelectedDate.getTime() : lastSelectedDate;
    if (lastSelectedDatetime && selectedDatetime && lastSelectedDatetime < selectedDatetime) {
      lastSelectedDatetime = undefined;
      console.warn("Calendar: last selected date must occur after the selected date.");
    }

    const displayedMonth = displayedDate.getMonth();
    const displayedYear = displayedDate.getFullYear();

    const lastDateInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
    const firstDOWInMonth = new Date(displayedYear, displayedMonth, 1).getDay(); // 0 = Sunday

    /* This is generating a nested array with the  */
    return new Array(Math.ceil(lastDateInMonth / DOW.length)).fill(0).map((_val, idx) =>
      new Array(DOW.length).fill(0).map((_v, i) => {
        const thisDay = idx * DOW.length + i + 1 - firstDOWInMonth;
        /* Determine if this entry exists within this month or the next or prev month */
        let thisMonth = !isOutsideMonth ? displayedMonth : displayedMonth + (thisDay < 1 ? -1 : 1);
        /* Determine if the displayed date is in this year or the previous one */
        let thisYear = displayedYear;

        const isOutsideMonth = displayedDate.getDate() < 1 || displayedDate.getDate() > lastDateInMonth;
        if (isOutsideMonth) {
          if (thisMonth < 0) {
            thisMonth = 11;
            thisYear -= 1;
          } else if (thisMonth > 11) {
            thisMonth = 0;
            thisYear += 1;
          }
        }

        const thisDate = new Date(thisYear, displayedMonth, thisDay, 0, 0, 0, 0);
        const thisDatetime = thisDate.getTime();

        /* Compare the rendered date against the clean date stamp for today */
        const isToday = thisDatetime === todayDatetime;
        const isInRange = thisDatetime >= selectedDatetime && thisDatetime <= lastSelectedDatetime;
        const isRangeStart = isInRange && thisDatetime === selectedDatetime;
        const isRangeEnd = isInRange && thisDatetime === lastSelectedDatetime;
        const isFocused = (selectedDate && isSelected) || isToday;
        const isSelected = (selectedDate && selectedDatetime === thisDatetime) || isToday || isInRange;

        return ({
          date: thisDate,
          dateClassList: {
            [`${rootClass}-date`]: true,
            "is-outsideMonth": isOutsideMonth,
            "is-today": isToday,
            "is-focused": isFocused,
            "is-range-selection": isInRange,
            // "is-range-start": isRangeStart, @todo
            // "is-range-end": isRangeEnd, @todo
            "is-selected": isSelected,
            "is-selection-start": isRangeStart,
            "is-selection-end": isRangeEnd,
            "is-disabled": isOutsideMonth || isDisabled,
          },
          isSelected,
          isToday,
          isOutsideMonth,
        });
      })
    );
  };

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--padded`]: padded,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}>
      <div class="${rootClass}-header">
        <div
          class="${rootClass}-title"
          role="heading"
          aria-live="assertive"
          aria-atomic="true"
        >
          ${displayedDate.toLocaleString(lang, { month: "long", year: "numeric" })}
        </div>
        ${ActionButton({
          ...globals,
          label: 'Previous',
          hideLabel: true,
          isQuiet: true,
          isDisabled,
          icon: 'ChevronLeft100',
          customClasses: [`${rootClass}-prevMonth`],
          onclick: (evt) => {
            const m = displayedDate.getMonth();
            if (m === 0) year = year - 1;
            const prevMonth = m < 1 ? 12 : m;
            updateArgs({ month: getMonthName(prevMonth), year });
          }
        })}
        ${ActionButton({
          ...globals,
          label: 'Next',
          hideLabel: true,
          isQuiet: true,
          isDisabled,
          icon: 'ChevronRight100',
          customClasses: [`${rootClass}-nextMonth`],
          onclick: (evt) => {
            const m = displayedDate.getMonth();
            if (m === 11) year = year + 1;
            const nextMonth = m > 10 ? 1 : m + 2;
            updateArgs({ month: getMonthName(nextMonth), year });
          }
        })}
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
            <tr role="row">${repeat(DOW, (day) => html`
              <th
                role="columnheader"
                scope="col"
                class="${rootClass}-tableCell"
              >
                <abbr class="${rootClass}-dayOfWeek" title=${day}
                  >${day.slice(0, useDOWAbbrev ? 3 : 1)}</abbr
                >
              </th>`)}
            </tr>
          </thead>
          <tbody role="presentation">${repeat(generateMonthArray({
            displayedDate,
            selectedDate: selectedDay,
            lastSelectedDate: lastDay
          }), (thisWeek) => html`
            <tr role="row">${repeat(thisWeek, (thisDay) => html`
              <td
                role="gridcell"
                class="${rootClass}-tableCell"
                tabindex=${!thisDay.isOutsideMonth ? "-1" : ""}
                aria-disabled=${thisDay.isOutsideMonth || thisDay.isDisabled ? "true" : "false"}
                aria-selected=${thisDay.isSelected ? "true" : "false"}
                aria-invalid="false"
                title="${thisDay.date.toLocaleDateString(lang, printTitleFormat)}"
              >
                <span
                  role="presentation"
                  class=${classMap(thisDay.dateClassList)}
                  @click=${(evt) => {
                    if (thisDay.isDisabled) return;
                    updateArgs({ selectedDay: thisDay.date });
                    action("select")(evt);
                  }}
                  >${thisDay.date.getDate()}</span>
              </td>`)}
            </tr>`)}
          </tbody>
        </table>
      </div>
    </div>
  `;
};
