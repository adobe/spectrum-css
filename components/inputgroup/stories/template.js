import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { Template as TextField } from '../../textfield/stories/template.js';
import { Template as Picker } from '../../picker/stories/template.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-InputGroup",
  id,
  customClasses = [],
  isOpen = true,
  isInvalid = false,
  isValid = false,
  isQuiet = false,
  isDisabled = false,
  ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      'is-open': isOpen,
      'is-invalid': isInvalid,
      'is-valid': isValid,
      'is-disabled': isDisabled,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })} id=${ifDefined(id)}>
      ${TextField({
        ...globals,
        size: 'm',
        isQuiet,
        isDisabled,
        isValid,
        isInvalid,
        customClasses: [`${rootClass}-textfield`],
        customInputClasses: [`${rootClass}-input`],
        placeholder: 'Type here',
        name: 'field',
      })}
      ${Picker({
        ...globals,
        rootClass: "spectrum-PickerButton",
        customClasses: [`${rootClass}-button`],
        customPopoverStyles: {
          position: 'absolute',
          top: '100%',
          left: '0',
          width: '100%',
        },
        size: 'm',
        isQuiet,
        isOpen,
        isInvalid,
        isValid,
        isDisabled,
        position: 'right',
      })}
    </div>
  `;
}
