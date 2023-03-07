import { html } from 'lit-html';

import { Template as ActionButton } from '@spectrum-css/actionbutton/stories/template.js';
import { Template as Popover } from '@spectrum-css/popover/stories/template.js';
import { Template as Menu } from '@spectrum-css/menu/stories/template.js';

import { useArgs } from "@storybook/client-api";

export const Template = ({
  items = [],
  isOpen = true,
  ...globals
}) => {
  const [, updateArgs] = useArgs();

  if (!items.length) {
    console.warn("ActionMenu: requires items be passed in to render.");
    return html``;
  }

  return html`
    ${ActionButton({ ...globals, size: "m", isQuiet: true, isSelected: isOpen, label: "More Actions", icon: "More", onclick: () => {
      updateArgs({ isOpen: !isOpen });
    } })}
    <br/>
    ${Popover({ ...globals, position: "bottom", isOpen, content: [
      Menu({ ...globals, items })
    ] })}
  `;
}
