import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { AccordionGroup } from "./accordion.test.js";
import { Template } from "./template.js";
import { faqContent } from "./faqContent"; // ✅ Import modularized FAQ content
import packageJson from "../package.json";
import metadata from "../dist/metadata.json";

type AccordionProps = {
  items: Map<string, { content: string; isOpen?: boolean; isDisabled?: boolean }>;
  size: "s" | "m" | "l" | "xl";
  density: "compact" | "regular" | "spacious";
};

export default {
  title: "Accordion",
  component: "Accordion",
  argTypes: {
    size: size(["s", "m", "l", "xl"]),
    disableAll: { name: "Disable all items", type: "boolean", control: "boolean" },
    density: {
      name: "Density",
      type: "string",
      options: ["compact", "regular", "spacious"],
      control: "select",
    },
  },
  args: {
    rootClass: "spectrum-Accordion",
    size: "m",
    density: "regular",
    disableAll: false,
  },
  parameters: {
    actions: { handles: ["click .spectrum-Accordion-item"] },
    chromatic: { disableSnapshot: true },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=39469-5419",
    },
    packageJson,
    metadata,
  },
};

// ✅ Reusable function to create Storybook stories dynamically
const createStory = (density: "compact" | "regular" | "spacious") => {
  const Story = Template.bind({});
  Story.args = { items: faqContent, density };
  return Story;
};

export const Default = AccordionGroup.bind({});
Default.args = { items: faqContent };

export const Compact = createStory("compact");
export const Spacious = createStory("spacious");

export const WithForcedColors = AccordionGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.parameters = {
  chromatic: { forcedColors: "active", modes: disableDefaultModes },
};
