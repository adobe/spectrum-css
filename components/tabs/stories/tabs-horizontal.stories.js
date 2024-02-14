// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import { argTypes, TabsGroup } from "./index.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

export default {
  title: "Components/Tabs",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: false,
    isEmphasized: false,
    isCompact: false,
    labelWithIcons: false,
    iconOnly: false
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('tabs') ? 'migrated' : undefined
    }
  }
};

const horiztonalTabsGroup = ({
	...args
  }) => {
    return html `
      ${Typography({
        semantics: "heading",
        size: "s",
        content: ["Horizontal Default"],
      })}
      ${TabsGroup({...args, })}
      ${Typography({
        semantics: "heading",
        size: "s",
        content: ["Horizontal Emphasized"],
      })}
      ${TabsGroup({...args, isEmphasized: true})}
      ${Typography({
        semantics: "heading",
        size: "s",
        content: ["Horizontal Quiet"],
      })}
      ${TabsGroup({...args, isQuiet: true})}
      ${Typography({
        semantics: "heading",
        size: "s",
        content: ["Horizontal Quiet Compact"],
      })}
      ${TabsGroup({...args, isQuiet: true, isCompact: true})}
    `
};

const overflowTabsGroup = ({
  ...args
}) => {
  return html `
  <div style="display: grid; gap: 1rem;">
    ${Template({
      ...args
    })}
    ${Template({
      ...args,
      isQuiet: true
    })}
    </div>
  `
}

export const Horizontal = (args) => window.isChromatic() ? horiztonalTabsGroup(args) : Template(args);
Horizontal.args = {};

export const Overflow = (args) => window.isChromatic() ? overflowTabsGroup(args) : Template(args);
Overflow.args = {
  overflow: true
};
