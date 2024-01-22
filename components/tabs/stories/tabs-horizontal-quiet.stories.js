// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import isChromatic from "chromatic/isChromatic";
import { argTypes, overflowProps } from "./index.js";

export default {
  title: "Components/Tabs/Horizontal/Quiet",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: true,
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

const TabsGroup = ({
	...args
}) => {
	return html`
		<div style="display: flex; flex-direction: column; gap: 2rem;">
			${Template({
          selectorStyle: {"width": "35px"},
          ...args
			})}
			${isChromatic() ?
				Template({
          selectorStyle: {"width": "60px"},
          ...args,
          labelWithIcons: true
				})
      : null }
      ${isChromatic() ?
        Template({
          selectorStyle: {"width": "20px"},
          ...args,
          iconOnly: true
        })
      : null }
      ${isChromatic() ?
        Template({
          selectorStyle: {"width": "35px"},
          ...args,
          isEmphasized: true
        })
      : null }
		</div>
	`;
};

export const Default = TabsGroup.bind({});
Default.args = {};

export const Overflow = Template.bind({});
Overflow.args = {
  ...overflowProps
};
