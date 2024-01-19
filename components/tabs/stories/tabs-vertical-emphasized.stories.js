// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import isChromatic from "chromatic/isChromatic";
import { argTypes } from "./index.js";

export default {
  title: "Components/Tabs/Vertical/Emphasized",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
    isQuiet: false,
    isEmphasized: true,
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
          ...args,
          isEmphasized: true,
			})}
			${!isChromatic() ?
				Template({
          ...args,
          labelWithIcons: true,
          isEmphasized: true
				})
      : null }
      ${!isChromatic() ?
        Template({
          ...args,
          iconOnly: true,
          isEmphasized: true
        })
      : null }
		</div>
	`;
};

export const Default = TabsGroup.bind({});
Default.args = {
  selectorStyle: {
    "height": "46px",
    "top": "0"
  },
};
