// Import the component markup template
import { Template } from "./template";

export default {
  title: "Splitbutton",
  description: "The Splitbutton component is...",
  component: "Splitbutton",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
    variant: {
      name: "Variant",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["cta", "primary", "secondary"],
      control: "select",
    },
    position: {
      name: "Position",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["left", "right"],
      control: "select"
    },
    iconName: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-SplitButton",
    size: "m",
    position: "left",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('splitbutton') ? 'migrated' : undefined
    }
  }
};

export const CTA = Template.bind({});
CTA.args = {
  variant: "accent",
  treatment: "fill",
  iconName: "ChevronDown100",
};

export const CTAMoreIcon = Template.bind({});
CTAMoreIcon.args = {
  variant: "accent",
  treatment: "fill",
  iconName: "More",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  treatment: "outline",
  iconName: "ChevronDown100",
};

export const PrimaryMoreIcon = Template.bind({});
PrimaryMoreIcon.args = {
  variant: "primary",
  treatment: "outline",
  iconName: "More",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  treatment: "outline",
  iconName: "ChevronDown100",
};

export const SecondaryMoreIcon = Template.bind({});
SecondaryMoreIcon.args = {
  variant: "secondary",
  treatment: "outline",
  iconName: "More",
};
