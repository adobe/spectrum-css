import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';

// import { Template as IconTemplate } from '../../icon/stories/template.js';
import { Template as ActionButtonTemplate } from '../../actionbutton/stories/template.js';

// @todo: bring in date util

export const Template = ({ rootClass, month, year, size = 'm', customClasses = [] }) => {
   const classList = {
     [rootClass]: true,
     [`${rootClass}--size${size.toUpperCase()}`]: true,
     ...customClasses.map((c) => ({ [c]: true })),
   };

  return html`
    <div class=${classMap(classList)}>
      <div class="${rootClass}-header">
         <div class="${rootClass}-title" role="heading" aria-live="assertive" aria-atomic="true">${month} ${year}</div>
         ${ActionButtonTemplate({ label: 'Previous', isQuiet: true, icon: 'Chevron100', customClasses: [ `${rootClass}-prevMonth` ] })}
         <!-- <button aria-label="Previous" title="Previous" class="spectrum-ActionButton spectrum-ActionButton--quiet spectrum-Calendar-prevMonth">
         <svg class="spectrum-Icon spectrum-UIIcon-ChevronLeft100" focusable="false" aria-hidden="true">
            <use xlink:href="#spectrum-css-icon-Chevron100"></use>
         </svg>
         </button> -->
         ${ActionButtonTemplate({ label: 'Next', isQuiet: true, icon: 'Chevron100', customClasses: [ `${rootClass}-nextMonth` ] })}
      </div>
      <div class="${rootClass}-body" role="grid" tabindex="0" aria-readonly="true" aria-disabled="false">
      <table role="presentation" class="${rootClass}-table">
         <thead role="presentation">
            <tr role="row">${repeat(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], (day) => html`
               <th role="columnheader" scope="col" class="${rootClass}-tableCell"><abbr class="${rootClass}-dayOfWeek" title=${day}>${day.slice(0,1)}</abbr></th>
            `)}</tr>
         </thead>
         <tbody role="presentation">
            <tr role="row">
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Sunday, July 30, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">30</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Monday, July 31, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">31</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, ${month} 1, ${year}"><span role="presentation" class="${rootClass}-date">1</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Today, Wednesday, ${month} 2, ${year} selected"><span role="presentation" class="${rootClass}-date is-today">2</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, ${month} 3, ${year}"><span role="presentation" class="${rootClass}-date">3</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, ${month} 4, ${year}"><span role="presentation" class="${rootClass}-date">4</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="true" aria-invalid="false" title="Saturday, ${month} 5, ${year}"><span role="presentation" class="${rootClass}-date is-selected">5</span></td>
            </tr>
            <tr role="row">
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, ${month} 6, ${year}"><span role="presentation" class="${rootClass}-date">6</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, ${month} 7, ${year}"><span role="presentation" class="${rootClass}-date">7</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, ${month} 8, ${year}"><span role="presentation" class="${rootClass}-date">8</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, ${month} 9, ${year}"><span role="presentation" class="${rootClass}-date">9</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, ${month} 10, ${year}"><span role="presentation" class="${rootClass}-date">10</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, ${month} 11, ${year}"><span role="presentation" class="${rootClass}-date">11</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Saturday, ${month} 12, ${year}"><span role="presentation" class="${rootClass}-date">12</span></td>
            </tr>
            <tr role="row">
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, ${month} 13, ${year}"><span role="presentation" class="${rootClass}-date">13</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, ${month} 14, ${year}"><span role="presentation" class="${rootClass}-date">14</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, ${month} 15, ${year}"><span role="presentation" class="${rootClass}-date">15</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, ${month} 16, ${year}"><span role="presentation" class="${rootClass}-date">16</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, ${month} 17, ${year}"><span role="presentation" class="${rootClass}-date">17</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, ${month} 18, ${year}"><span role="presentation" class="${rootClass}-date">18</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Saturday, ${month} 19, ${year}"><span role="presentation" class="${rootClass}-date">19</span></td>
            </tr>
            <tr role="row">
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, ${month} 20, ${year}"><span role="presentation" class="${rootClass}-date">20</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, ${month} 21, ${year}"><span role="presentation" class="${rootClass}-date">21</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, ${month} 22, ${year}"><span role="presentation" class="${rootClass}-date">22</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, ${month} 23, ${year}"><span role="presentation" class="${rootClass}-date">23</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, ${month} 24, ${year}"><span role="presentation" class="${rootClass}-date">24</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, ${month} 25, ${year}"><span role="presentation" class="${rootClass}-date">25</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Saturday, ${month} 26, ${year}"><span role="presentation" class="${rootClass}-date">26</span></td>
            </tr>
            <tr role="row">
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, ${month} 27, ${year}"><span role="presentation" class="${rootClass}-date">27</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, ${month} 28, ${year}"><span role="presentation" class="${rootClass}-date">28</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, ${month} 29, ${year}"><span role="presentation" class="${rootClass}-date">29</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, ${month} 30, ${year}"><span role="presentation" class="${rootClass}-date">30</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, ${month} 31, ${year}"><span role="presentation" class="${rootClass}-date">31</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Friday, September 1, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">1</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Saturday, September 2, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">2</span></td>
            </tr>
            <tr role="row">
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Sunday, September 3, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">3</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Monday, September 4, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">4</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Tuesday, September 5, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">5</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Wednesday, September 6, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">6</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Thursday, September 7, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">7</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Friday, September 8, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">8</span></td>
               <td role="gridcell" class="${rootClass}-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Saturday, September 9, ${year}"><span role="presentation" class="${rootClass}-date is-outsideMonth">9</span></td>
            </tr>
         </tbody>
      </table>
      </div>
   </div>
  `;
}
