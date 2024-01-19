// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import isChromatic from "chromatic/isChromatic";

import {
  argTypes,
  overflowProps
} from "./index.js";

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
	customStyles = {},
	...args
}) => {
	return html`
		<div style="display: flex; flex-direction: column; gap: 2rem;">
			${Template({
          selectorStyle: {"width": "35px"},
            ...args
			})}
			${!isChromatic() ?
				Template({
            selectorStyle: {"width": "35px"},
            withIcons: true,
            ...args
				})
				: null }
        ${!isChromatic() ?
          Template({
              selectorStyle: {"width": "60px"},
              iconOnly: true,
              ...args
          })
				: null }
        ${!isChromatic() ?
          Template({
            selectorStyle: {"width": "35px"},
            ...args,
            isEmphasized: true,
          })
				: null }
        ${!isChromatic() ?
          Template({
            selectorStyle: {"width": "35px"},
            ...args,
            isEmphasized: true,
            withIcons: true,
          })
				: null }
        ${!isChromatic() ?
          Template({
            selectorStyle: {"width": "35px"},
            ...args,
            isEmphasized: true,
            iconOnly: true,
          })
				: null }
		</div>
	`;
};

export const Default = TabsGroup.bind({});
Default.args = {};

export const Overflow = Template.bind({});
Overflow.args = {
  popoverOffset: "162px",
  ...overflowProps
};
