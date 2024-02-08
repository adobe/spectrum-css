// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import { argTypes, overflowProps } from "./index.js";

export default {
  title: "Components/Tabs/Horizontal/Quiet/Compact",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: true,
    isEmphasized: false,
    isCompact: true,
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
        ...args
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
      ${window.isChromatic() ?
        Template({
          ...args,
          isEmphasized: true
        })
      : null }
      ${window.isChromatic() ?
        Template({
          ...args,
          isEmphasized: true,
          labelWithIcons: true
        })
      : null }
      ${window.isChromatic() ?
        Template({
          ...args,
          isEmphasized: true,
          iconOnly: true
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
