import { html } from 'lit-html';
import { useArgs } from '@storybook/client-api';

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import '../index.css';

export const Template = ({
  rootClass = "spectrum-CycleButton",
  customClasses = [],
  size = "m",
  initialIcon = "Play",
  selectedIcon = "Pause",
  ...globals
}) => {
  var icon = initialIcon;

  const [, updateArgs] = useArgs();
  const handleClick = () => {
    const icon = initialIcon + '';
    updateArgs({ initialIcon: selectedIcon });
    updateArgs({ selectedIcon: icon });
  }

  return html`
    ${ActionButton({ 
      ...globals, 
      customClasses: [rootClass], 
      isQuiet: true,
      size,
      icon: icon,
      onclick: handleClick
    })}
  `;
}
