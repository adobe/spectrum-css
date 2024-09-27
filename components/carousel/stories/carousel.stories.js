import { version } from "../package.json";
import { Template } from "./template.js";
import { isDisabled, isSelected, isHovered, isFocused } from "@spectrum-css/preview/types";
import { CarouselGroup } from "./Carousel.test.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import pkgJson from "../package.json";

/**
  * The Carousel component is...
  */
export default {
  title: "Carousel",
  component: "Carousel",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      defaultValue: "m",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "m" }
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
    isDisabled,
    isSelected,
    isHovered,
    isFocused,
  },
  args: {
    rootClass: "spectrum-Carousel",
    size: "m",
    isDisabled: false
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-Carousel"],
    },
    componentVersion: version,
    design: {
      type: "figma",
      url: "",
    },
    componentVersion: pkgJson.version,
  }
};

export const Default = CarouselGroup.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
  isDisabled: true
};
Disabled.parameters = {
  chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
