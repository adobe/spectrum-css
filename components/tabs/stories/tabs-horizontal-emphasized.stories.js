// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import { argTypes, overflowProps } from "./index.js";

export default {
  title: "Components/Tabs/Horizontal/Emphasized",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: false,
    isEmphasized: true,
    isCompact: false,
    iconOnly: false,
    labelWithIcons: false
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
          ...args,
			})}
			${window.isChromatic() ?
				Template({
          ...args,
          labelWithIcons: true
				})
			: null }
      ${window.isChromatic() ?
				Template({
          ...args,
          iconOnly: true
				})
			: null }
		</div>
	`;
};

export const Default = TabsGroup.bind({});
Default.args = {
  isEmphasized: true
};

export const Overflow = Template.bind({});
Overflow.args = {
  ...overflowProps
};
