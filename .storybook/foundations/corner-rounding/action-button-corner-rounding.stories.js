import { html } from "lit";
import { Template } from "../../../components/actionbutton/stories/template";

export default {
	title: "Foundations/Corner rounding",
	description:
		"The action button component represents an action a user can take.",
	component: "ActionButton",
	args: {
		rootClass: "spectrum-ActionButton",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("actionbutton")
				? "migrated"
				: undefined,
		},
	},
	tags: ['foundation'],
};

const ActionButton = ({
	...args
}) => {
	return html`
		<div style="padding: 1rem 0;">
			${Template({
				...args,
				iconName: undefined,
			})}
		</div>
	`;
};

const ActionButtonTable = ({ ...args }) => {
	return html`
		<table class="spectrum-Foundations-Example-CornerRounding-table">
			<thead>
				<tr>
					<th scope="col">Token</th>
					<th scope="col" style="padding: 0 2rem;">Value</th>
					<th scope="col">Medium example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>--spectrum-corner-radius-medium-size-extra-small</td>
					<td style="padding: 0 2rem;">6px</td>
					<td>
						${ActionButton({
							...args,
							label: "Extra Small",
							size: "xs"
						})}
					</td>
				</tr>
				<tr>
					<td>--spectrum-corner-radius-medium-size-small</td>
					<td style="padding: 0 2rem;">7px</td>
					<td>
						${ActionButton({
							...args,
							label: "Small",
							size: "s"
						})}
					</td>
				</tr>
				<tr>
					<td>--spectrum-corner-radius-medium-size-medium</td>
					<td style="padding: 0 2rem;">8px</td>
					<td>
						${ActionButton({
							...args,
							label: "Medium",
							size: "m"
						})}
					</td>
				</tr>
				<tr>
					<td>--spectrum-corner-radius-medium-size-large</td>
					<td style="padding: 0 2rem;">9px</td>
					<td>
						${ActionButton({
							...args,
							label: "Large",
							size: "l"
						})}
					</td>
				</tr>
				<tr>
					<td>--spectrum-corner-radius-medium-size-extra-large</td>
					<td style="padding: 0 2rem;">10px</td>
					<td>
						${ActionButton({
							...args,
							label: "Extra Large",
							size: "xl"
						})}
					</td>
				</tr>
			</tbody>
		</table>
	`;
};

export const ActionButtonExamples = ActionButtonTable.bind({});
ActionButtonExamples.args = {};
