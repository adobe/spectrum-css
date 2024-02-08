// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import { argTypes } from "./index.js";

export default {
  title: "Components/Tabs/Vertical/Quiet",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
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
		<div style="display: flex; gap: 2rem;">
			${Template({
          ...args
			})}
			${window.isChromatic() ?
				Template({
          ...args,
          labelWithIcons: true
				})
      : null }
      ${window.window.isChromatic() ?
        Template({
          ...args,
          iconOnly: true
        })
      : null }
		</div>
	`;
};

export const Default = TabsGroup.bind({});
Default.args = {};
