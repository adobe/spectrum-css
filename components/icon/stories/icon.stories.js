import path from "path";

// Import the component markup template
import { Template } from "./template";


// Imports an array of all icon names in the workflow set
import iconOpts from "@adobe/spectrum-css-workflow-icons";
// import workflowIcons from '@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg';
// import '../dist/spectrum-css-icons.svg';

export default {
  title: "Icon",
  description:
    "The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.",
  component: "Icon",
  argTypes: {
    /* Turn off express theme for icon preview b/c they use a separate icon set */
    express: { table: { disable: true } },
    reducedMotion: { table: { disable: true } },
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l", "xl", "xxl"],
      control: "select"
    },
    iconName: {
      name: "Workflow icons",
      type: { name: "string", required: true },
      options: iconOpts.map((icon) => path.basename(icon, ".svg")),
      control: { type: "select" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
    },
    fill: {
      name: "Fill color",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Advanced",
      },
      control: "color",
    },
  },
  args: {
    rootClass: "spectrum-Icon",
    iconName: "ABC",
    size: "xl",
  },
  parameters: {
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("icon")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
