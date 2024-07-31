import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-SplitView",
	customClasses = [],
	orientation = "horizontal",
	isResizable = false,
	isFocused = false,
	isCollapsible = false,
	collapsePosition,
	panelLabels = [],
	panelStyles = [],
	componentHeight = "200px",
} = {}) => {
	const collapsible = isCollapsible;
	const collapsibleStart =
		(typeof collapsePosition !== "undefined" && collapsePosition === "left") ||
		collapsePosition === "top";
	const collapsibleEnd =
		(typeof collapsePosition !== "undefined" && collapsePosition === "right") ||
		collapsePosition === "bottom";
	const collapsibleClassName =
		collapsible && collapsibleStart
			? "start"
			: collapsible && collapsibleEnd
				? "end"
				: "";

	return html`
		<div
			style="height: ${componentHeight};"
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${orientation}`]: orientation,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			<div class="spectrum-SplitView-pane" style="${panelStyles[0]}">
				${panelLabels[0]}
			</div>
			<div
				class=${classMap({
					[`${rootClass}-splitter`]: true,
					["is-draggable"]: isResizable,
					"is-focused": isFocused,
					[`is-collapsed-${collapsibleClassName}`]: isCollapsible,
				})}
				tabindex="0"
				data-testid="splitter"
			>
				${when(
					isResizable,
					() => html`<div class="spectrum-SplitView-gripper"></div>`
				)}
			</div>
			<div class="spectrum-SplitView-pane" style="${panelStyles[1]}">
				${panelLabels[1]}
			</div>
		</div>
	`;
};
