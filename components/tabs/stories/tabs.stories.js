import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
export default {
	title: "Tabs",
	component: "Tabs",
	argTypes: {
		content: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		orientation: {
			name: "Orientation",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
				default: "horizontal",
			},
			options: ["horizontal", "vertical", "overflow"],
			control: "select",
			default: "horizontal",
		},
		isQuiet: {
			name: "Quiet",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isCompact: {
			name: "Compact",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isQuiet", truthy: true },
		},
		iconOnly: {
			name: "Icon only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tabs",
		isQuiet: false,
		isEmphasized: false,
		isCompact: false,
		iconOnly: false,
		content: [
			{
				id: "tab-1",
				label: "Tab 1",
				icon: "Folder",
				isSelected: true,
			},
			{
				id: "tab-2",
				label: "Tab 2",
				icon: "Image",
			},
			{
				id: "tab-3",
				label: "Tab 3",
				icon: "Document",
				isDisabled: true,
			},
		],
	},
	parameters: {
		actions: {
			handles: [".spectrum-Tabs-item"],
		},
		componentVersion: version,
	},
};

const TabsGroup = (args) => html`
  <div
    style="display: flex; flex-direction: ${args.orientation === "horizontal"
      ? "column"
      : "row"}; gap: 32px;"
  >
    ${Template({
      ...args,
      content: [
        {
          id: "tab-1",
          label: "Tab 1",
          isSelected: true,
        },
        {
          id: "tab-2",
          label: "Tab 2",
          isDisabled: true,
        },
        {
          id: "tab-3",
          label: "Tab 3",
        },
      ],
    })}
    ${Template(args)} ${Template({ ...args, iconOnly: true })}
  </div>
`;

const Variants = (args) => html`
  ${window.isChromatic() ? html`
  <div style="display: grid; gap: 32px;${args.orientation === "overflow" ? " max-inline-size: 100px" : ""}">
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${Typography({ semantics: "heading", size: "s", content: ["Default"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup(args)}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${Typography({ semantics: "heading", size: "s", content: ["Emphasized"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup({ ...args, isEmphasized: true })}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${Typography({ semantics: "heading", size: "s", content: ["Quiet"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup({ ...args, isQuiet: true })}
    </div>
    <div style="display: flex; flex-flow: column nowrap; gap: 8px;">
      ${Typography({ semantics: "heading", size: "s", content: ["Quiet + compact"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup({ ...args, isQuiet: true, isCompact: true })}
    </div>
  </div>
` : Template(args)}
`;

export const Default = Variants.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Variants.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const Vertical = Variants.bind({});
Vertical.args = {
	orientation: "vertical",
};

export const Overflow = Variants.bind({});
Overflow.args = {
	orientation: "overflow",
};
