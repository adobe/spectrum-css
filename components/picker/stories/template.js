import { useArgs } from "@storybook/client-api";

import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Picker",
  size = "m",
  label,
  position,
  iconName = "menu",
  isFocused = false,
  isRounded = false,
  isOpen = false,
  isValid = false,
  isInvalid = false,
  customClasses = [],
  customStyles = {},
  isQuiet = false,
  isDisabled = false,
  customPopoverStyles = {},
  content = [],
  id,
  ...globals
}) => {
  const [_, updateArgs] = useArgs();

  return [
    PickerButton({
      ...globals,
      rootClass,
      label,
      iconName,
      position,
      size,
      isDisabled,
      isFocused,
      isOpen,
      isValid,
      isInvalid,
      isRounded,
      isQuiet,
      customClasses,
      customStyles,
      id,
      onclick: () => {
        if (isDisabled) return;
        updateArgs({ isOpen: !isOpen });
      },
    }),
    Popover({
      ...globals,
      isOpen: isOpen && !isDisabled,
      withTip: false,
      position: 'bottom',
      isQuiet,
      customStyles: customPopoverStyles,
      content,
    }),
  ];
};
