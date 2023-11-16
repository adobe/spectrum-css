import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import '@spectrum-css/quickaction';

/** This component is deprecated as of November 2023. */
export default {
	title: "Deprecated/Quick actions",
	component: "QuickAction",
	argTypes: {
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		position: {
			name: "Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["left", "right"],
		},
		textOnly: {
			name: "Text only action buttons",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-QuickAction",
		isOpen: true,
		textOnly: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "deprecated"
		},
	},
};

const Template = ({
	isOpen = false,
	textOnly = false,
	position,
}) => {
	return html`
		<div
			class="${classMap({
				"spectrum-QuickActions": true,
				"is-open": isOpen,
				[`spectrum-QuickActions--${position}`]: typeof position !== "undefined",
				[`spectrum-QuickActions--textOnly`]: textOnly,
			})}"
		>
			${[
				{
					iconName: "Edit",
					label: "Edit",
				},
				{
					iconName: "Copy",
					label: "Copy",
				},
				{
					iconName: "Delete",
					label: "Delete",
				},
			].map((c) => ActionButton({ ...c, isQuiet: true }))}
		</div>
	`;
};

export const Default = Template.bind({});
Default.args = {};
