import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { Template as FieldLabel } from '@spectrum-css/fieldlabel/stories/template.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-ProgressBar",
  customClasses = [],
  labelPosition,
  backgroundColor,
  staticWhite,
  customWidth,
  indeterminate,
  styles  = {
    width: customWidth ? customWidth : "",
  },
  staticWhiteStyles = {
    backgroundColor: backgroundColor,
    width: '400px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  size = "m",
  ...globals
}) => {
  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
  <div style="${staticWhite ? styleMap(staticWhiteStyles) : ""}">
    <div class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${labelPosition}Label`]: typeof labelPosition !== "undefined",
        [`${rootClass}--${staticWhite}`]: typeof staticWhite !== "undefined",
        [`${rootClass}--${indeterminate}`]: typeof indeterminate !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
        style=${styleMap(styles)}
        value="50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        ${FieldLabel({
          ...globals,
          size: `${size}`,
          label: "Loading",
          alignment: "",
          customClasses: [`${rootClass}-label`]
        })}
        ${FieldLabel({
          ...globals,
          size: `${size}`,
          label: indeterminate ? "" : "50%",
          alignment: "",
          customClasses: [`${rootClass}-percentage`]
        })}
        <div class="${rootClass}-track">
          <div class="${rootClass}-fill" style="width: 50%;"></div>
        </div>
      </div>
    </div>
  `;
}
