// Import the component markup template
import { Template } from "./template";
import { html } from "lit";
import { argTypes } from "./index.js";

export default {
  title: "Components/Tabs/Vertical",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
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

const chromaticKitchenSink = ({
	...args
}) => {
	return html`
    <h2> Vertical Default</h2>
		<div style="display: flex; gap: 2rem;">
			${Template({
          ...args
			})}
			${Template({
          ...args,
          labelWithIcons: true
      })}
      ${Template({
          ...args,
          iconOnly: true
      })}
		</div>
    <h2>Vertical Emphasized</h2>
    <div style="display: flex; gap: 2rem;">
			${Template({
          ...args,
          isEmphasized: true,
			})}
			${Template({
        ...args,
        labelWithIcons: true,
        isEmphasized: true
      })}
      ${Template({
        ...args,
        iconOnly: true,
        isEmphasized: true
      })}
		</div>
    <h2>Vertical Quiet</h2>
    <div style="display: flex; gap: 2rem;">
			${Template({
        ...args,
        isQuiet: true
			})}
			${Template({
        ...args,
        labelWithIcons: true,
        isQuiet: true
      })}
      ${Template({
        ...args,
        iconOnly: true,
        isQuiet: true
      })}
		</div>
    <h2> Vertical Quiet Compact</h2>
    <div style="display: flex; gap: 2rem;">
			${Template({
        ...args,
        isQuiet: true,
        isCompact: true
			})}
			${Template({
          ...args,
          labelWithIcons: true,
          isQuiet: true,
          isCompact: true
				})}
      ${Template({
        ...args,
        iconOnly: true,
        isQuiet: true,
        isCompact: true
      })}
      ${Template({
        ...args,
        isEmphasized: true,
        isQuiet: true,
        isCompact: true
      })}
		</div>
	`;
};

export const Default = (args) => window.isChromatic() ? chromaticKitchenSink(args) : Template(args);
Default.args = {};
