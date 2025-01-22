import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-PickerButton",
	id = getRandomId("pickerbutton"),
	size = "m",
	label,
	position,
	iconSet = "ui",
	iconName = "ChevronDown",
	isDisabled = false,
	isFocused = false,
	isOpen = false,
	isQuiet = false,
	customClasses = [],
	isRounded = false,
	customStyles = {},
	onclick,
	tabindex,
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--textuiicon`]: label && iconSet === "ui",
				[`${rootClass}--uiicononly`]: !label && iconSet === "ui",
				[`${rootClass}--icononly`]: !label && iconSet !== "ui",
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				[`${rootClass}--rounded`]: isRounded,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-disabled": isDisabled,
				"is-focused": isFocused,
				"is-open": isOpen && !isDisabled,
				[`${rootClass}--quiet`]: isQuiet,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			aria-haspopup="listbox"
			?disabled=${isDisabled}
			@click=${onclick ??
			function () {
				if (isDisabled) return;
				updateArgs({ isOpen: !isOpen });
			}}
			tabindex=${ifDefined(tabindex)}
		>
			<div class="${rootClass}-fill">
				${when(label, () => html`
					<span class="${rootClass}-label is-placeholder">
						${label}
					</span>
				`)}
				${Icon({
					iconName: iconName ?? "ChevronDown",
					setName: iconSet,
					size,
					customClasses: [`${rootClass}-icon`],
				}, context)}
			</div>
		</button>
	`;
};

/**
 * Displays the component with a custom icon (instead of the chevron UI icon).
 * Two examples are shown; with a custom UI icon and a custom Workflow icon.
 */
export const CustomIconTemplate = (args) => html`
	<div
		style=${styleMap({
			display: "flex",
			gap: "24px",
			flexWrap: "wrap",
		})}
	>
		<div
			style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "center",
				flexBasis: "80px",
			})}
		>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["UI icon"],
				customStyles: {
					"white-space": "nowrap",
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				},
			})}
			${Template({
				...args,
				iconName: "ArrowDown100",
				iconSet: "ui",
			})}
		</div>
		<div
			style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "center",
				flexBasis: "80px",
			})}
		>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Workflow icon"],
				customStyles: {
					"white-space": "nowrap",
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				},
			})}
			${Template({
				...args,
				iconName: "Add",
				iconSet: "workflow",
			})}
		</div>
	</div>
`;
