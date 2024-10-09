import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Container, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ActionGroup",
	size = "m",
	areQuiet = false,
	areEmphasized = false,
	areDisabled = false,
	vertical = false,
	compact = false,
	justified = false,
	iconOnly = false,
	staticColor,
	content = [],
	customClasses = [],
	customStyles = {},
	iconName,
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--quiet`]: areQuiet,
				[`${rootClass}--vertical`]: vertical,
				[`${rootClass}--compact`]: compact,
				[`${rootClass}--justified`]: justified,
				[`${rootClass}--static${capitalize(staticColor)}`]:
					typeof staticColor !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${renderContent(content, {
				callback: ActionButton,
				args: {
					staticColor,
					isQuiet: areQuiet,
					isEmphasized: areEmphasized,
					isDisabled: areDisabled,
					customClasses: [`${rootClass}-item`],
					hideLabel: iconOnly,
					size: size,
					iconName: iconName || undefined,
				},
				context
			})}
		</div>
	`;
};

export const OverflowOption = (context) => Container({
	withBorder: false,
	direction: "column",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Container({
				heading: "Wrap",
				content: Template({
					customStyles: { "max-inline-size": "288px" },
					content: [
						{
							iconName: "Edit",
							iconSet: "workflow",
							label: "Edit",
						},
						{
							iconName: "Copy",
							iconSet: "workflow",
							label: "Copy",
						},
						{
							iconName: "Delete",
							iconSet: "workflow",
							label: "Delete",
						},
						{
							iconName: "Cut",
							iconSet: "workflow",
							label: "Cut",
						},
						{
							iconName: "Move",
							iconSet: "workflow",
							label: "Move",
						},
					]
				})
			}
		)}
		${Container({
				heading: "Collapse",
				content: Template({
					content: [
						{
							iconName: "Edit",
							iconSet: "workflow",
							label: "Edit",
						},
						{
							iconName: "Copy",
							iconSet: "workflow",
							label: "Copy",
						},
						{
							iconName: "Delete",
							iconSet: "workflow",
							label: "Delete",
						},
						{
							iconName: "More",
							iconSet: "workflow",
							hideLabel: true,
						},
					]
				})
			}
		)}
	`
}, context );

export const ActionButtonOptions = (args, context ) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		columnGap: "12px",
	},
	content: html`
		${Template({
			size: args.size || "m",
			areQuiet: args.areQuiet || false,
			areEmphasized: args.areEmphasized || false,
			vertical: args.vertical || false,
			compact: args.compact || false,
			content: [
				{
					iconName: args.iconName !== undefined ? "Edit" : undefined,
					label: args.hideLabel !== true ? "Edit" : "",
					isQuiet: args.isQuiet
				},
				{
					iconName: args.iconName !== undefined ? "Copy" : undefined,
					label: args.hideLabel !== true ? "Copy" : "",
					isQuiet: args.isQuiet
				},
				{
					iconName: args.iconName !== undefined ? "Delete" : undefined,
					label: args.hideLabel !== true ? "Delete" : "",
					isSelected: true,
					isQuiet: args.isQuiet
				}
			],
		}, context )}`
});

export const TreatmentTemplate = (args, context) => Container({
	withBorder: false,
	direction: "row",
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`${[
		{ iconName: undefined, hideLabel: false, heading: "Default" }, 
		{ iconName: "", hideLabel: true, heading: "Icon only" },
		{ iconName: "", hideLabel: true, isQuiet: true, heading: "Quiet, Icon only" },
	].map(({ iconName, isQuiet, hideLabel, heading }) => Container({ 
		withBorder: false,
		heading: heading,
		content: ActionButtonOptions({
			...args,
			hideLabel,
			iconName,
			isQuiet
		})
	}, context ))}`,
});

