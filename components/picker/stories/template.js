import { useArgs } from "@storybook/client-api";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Picker",
  size = "m",
  label,
  placeholder,
  position,
  iconName = "menu",
  isFocused = false,
  isRounded = false,
  isOpen = false,
  isValid = false,
  isInvalid = false,
  isLoading = false,
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
    FieldLabel({
      ...globals,
      size,
      label,
      isDisabled,
      alignment: "top"
    }),
    PickerButton({
      ...globals,
      rootClass,
      placeholder,
      iconName,
      iconType: "workflow",
      position,
      size,
      isDisabled,
      isFocused,
      isOpen,
      isValid,
      isInvalid,
      isRounded,
      isQuiet,
      isLoading,
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
