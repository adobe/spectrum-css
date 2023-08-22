import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
// import { ifDefined } from 'lit/directives/if-defined.js';

import "@spectrum-css/splitview";

export const Template = ({
	rootClass = "spectrum-SplitView",
	customClasses = [],
	orientation = "horizontal",
	isResizable = false,
	isCollapsible = false,
	collapsePosition,
	panelLabels = [],
	panelStyles = [],
	componentHeight = "200px",
	// ...globals
}) => {
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
					[`is-collapsed-${collapsibleClassName}`]: isCollapsible,
				})}
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
