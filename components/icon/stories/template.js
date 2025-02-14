import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { when } from "lit/directives/when.js";
import { getSpriteSheetName, uiIconsCleaned, uiIconsWithDirections, workflowIconsCleaned } from "./utilities.js";

import "../index.css";

/**
 * @typedef { keyof import("./icon.stories.js").default.args } IconArgs
 * @typedef { IconArgs & { scale: string, setName: 'workflow' | 'ui' } } IconProps
 */

/**
 * Template for rendering an icon.
 * @description Icon template that renders an icon based on the provided icon name and set name.
 * @param {IconProps} props
 * @param {string} props.rootClass
 * @param {"xs"|"s"|"m"|"l"|"xl"|"xxl"} props.size
 * @param {"ui"|"workflow"} props.setName
 * @param {string} props.iconName Icon name; could be from either icon set.
 * @param {string} props.uiIconName Icon name selected from the UI icon set. When defined, takes precedence over iconName when setName == "ui".
 * @param {string} props.fill
 * @param {string} props.id
 * @param {string[]} props.customClasses
 * @param {boolean} props.useRef [true] Whether to use an SVG with a reference to the icon within the sprite sheet. When false, returns the the individual SVG's entire markup.
 * @returns {import('lit').TemplateResult<1>}
 */
export const Template = ({
	rootClass = "spectrum-Icon",
	size = "m",
	setName,
	iconName,
	uiIconName,
	fill,
	id = getRandomId("icon"),
	customClasses = [],
	useRef = true,
} = {}, context = {}) => {
	// All icons SVG markup from the global IconLoader are in loaded.icons
	const { loaded } = context;

	// Treat "iconName" as the icon name regardless of the icon set.
	// UI icons are selected from a different control and arg.
	if (setName === "ui" && uiIconName) {
		iconName = uiIconName;
	}

	// Make sure icon name is provided.
	if (!iconName) {
		console.warn(
			"Icon: Could not render a result because no icon name was provided to the icon template."
		);
		return html``;
	}

	// Name of icon that corresponds with SVG file. This may differ from the icon name, such as with
	// directional icons that use a single icon.
	let idKey = iconName;

	// If a descriptor like "Right", "Left", "Down", or "Up" is present for the UI icons Chevron or
	// Arrow, use that only for the class name and not the icon fetch. This is because these use a
	// single icon file that is rotated in CSS.
	if (
		["Right", "Left", "Down", "Up"].some((c) => idKey.includes(c)) &&
		setName === "ui"
	) {
		idKey = idKey.replace(/(Right|Left|Down|Up)/, "");
	}

	// Make sure icon set is provided.
	if (!setName) {
		console.warn(
			`Icon "${idKey}" is missing its icon set. Make sure you are explicitly setting either the workflow or ui icon set.`
		);
		return html``;
	}

	/**
	 * Fallback UI Icon sizing number.
	 *
	 * If the icon name includes its scale, we want to leave that scale. This is preferred,
	 * as UI icons do not use workflow icon sizing.
	 *
	 * If the UI icon name does not include scale, or the scale does not exist in the current
	 * list of UI icons, reformat it to approximate the provided sizing for the component.
	 */
	if (
		setName === "ui" &&
		(
			// Does not already have size number at the end.
			!idKey.match(/\d{2,3}$/) ||
			// If the provided icon name includes the sizing number, make sure it's a supported sizing number;
			// if not, strip it from the key.
			(
				idKey.match(/\d{2,3}$/) &&
				!uiIconsCleaned.includes(idKey)
			)
		)
	) {
		let sizeVal;
		switch (size) {
			case "xs":
				if (["CornerTriangle", "Cross"].some(c => idKey.startsWith(c))) {
					sizeVal = "75";
				}
				else if (["Arrow", "Asterisk", "LinkOut"].some(c => idKey.startsWith(c))) {
					sizeVal = "100";
				}
				else {
					sizeVal = "50";
				}
				break;
			case "s":
				if (["Arrow", "Asterisk", "LinkOut"].some(c => idKey.startsWith(c))) {
					sizeVal = "100";
				}
				else {
					sizeVal = "75";
				}
				break;
			case "l":
				if (["Arrow"].some(c => idKey.startsWith(c))) {
					sizeVal = "400";
				}
				else {
					sizeVal = "200";
				}
				break;
			case "xl":
			case "xxl":
				if (["Arrow"].some(c => idKey.startsWith(c))) {
					sizeVal = "400";
				}
				else {
					sizeVal = "300";
				}
				break;
			default:
				sizeVal = "100";
				break;
		}

		console.warn(`Using fallback UI Icon sizing number "${sizeVal}" for "${idKey}". UI icon size was not provided or does not exist in the list of available UI icons.`);

		// Replace sizing number on idKey and iconName with new fallback size.
		idKey = idKey.replace(/\d{2,3}$/, "");
		idKey += sizeVal;

		iconName = iconName.replace(/\d{2,3}$/, "");
		iconName += sizeVal;

		if (!uiIconsCleaned.includes(idKey)) {
			console.error(`The UI icon "${idKey}" does not exist in the list of available UI icons.`);
		}
	}

	/**
	 * Classes to apply to the SVG element. Object as used by the classMap function.
	 * @type {[name: string]: string | boolean | number}
	 */
	const classList = {
		[rootClass]: true,
		[`spectrum-UIIcon-${iconName}`]: !!(setName === "ui"),
		[`${rootClass}--size${size?.toUpperCase()}`]: !!(
			(!setName || setName === "workflow") &&
			size
		),
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};

	/**
	 * Display full SVG file markup from global IconLoader data, when not using a reference to the sprite sheet.
	 */
	if (!useRef) {
		let svgString;
		if (loaded?.icons && loaded?.icons[setName]?.[idKey]) {
			svgString = loaded.icons[setName][idKey];
		}

		// Return the individual SVG's entire markup.
		if (svgString) {
			const classesAsString = Object.entries(classList).reduce((acc, [key, value]) => {
				if (value) acc += `${key} `;
				return acc;
			}, "");

			return html`${unsafeSVG(
				svgString.replace(/<svg/, `<svg class="${classesAsString}" ${fill ? `style="color: ${fill};"` : ""} focusable="false" aria-hidden="true" role="img"`)
			)}`;
		}
		else {
			console.warn(`Could not find SVG markup for "${idKey}" in context.loaded.icons. Did you pass through context? Falling back to using the sprite sheet reference instead.`);
		}
	}

	// ID of the icon within the sprite sheet for its icon set.
	const iconID = getSpriteSheetName(idKey, setName);

	// Return SVG markup with a reference to the icon ID within the sprite sheet.
	return html`<svg
		class=${classMap(classList)}
		id=${ifDefined(id)}
		style=${ifDefined(fill ? `color: ${fill};` : undefined)}
		focusable="false"
		aria-hidden="true"
		aria-label=${iconName}
		role="img"
	>
		<title id=${idKey}>${idKey.replace(/([A-Z])/g, " $1").trim()}</title>
		<use xlink:href="#${iconID}" href="#${iconID}" />
	</svg>`;
};

/**
 * Display all icons in the icon set within a grid.
 */
export const FullIconSetTemplate = (args, context) => {
	return html`
		<div
			style=${styleMap({
				"display": "grid",
				"grid-template-columns": "repeat(4 , 150px)",
				"gap": "16px",
				"rowGap": "32px",
				"padding": "32px",
			})}
		>
			${when(args.setName === "workflow", () => {
				return workflowIconsCleaned.sort().map((iconName) => IconWithLabelTemplate({ ...args, iconName }, context));
			}, () => {
				return uiIconsWithDirections.sort().map((iconName) => IconWithLabelTemplate({ ...args, uiIconName: iconName }, context));
			})}
		</div>
	`;
};

/**
 * Display a single icon in the icon set with a label showing the icon name.
 */
export const IconWithLabelTemplate = (args, context) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"align-items": "center",
			"justify-content": "space-between",
			"gap": "12px",
			"flex-flow": "column nowrap",
		})}
	>
		${Template({
			useRef: true,
			size: "xxl",
			setName: args.setName,
			iconName: args?.iconName ?? undefined,
			uiIconName: args?.uiIconName ?? undefined,
			...args,
		}, context)}
		${Typography({
			customClasses: ["chromatic-ignore"],
			semantics: "body",
			size: "xxs",
			content: [
				args.setName == "ui" ? args.uiIconName : args.iconName,
			],
		})}
	</div>
`;

/**
 * Helper template function to display multiple icons using an array of icon names.
 */
export const IconListTemplate = (args, context, iconsList = []) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"gap": "32px",
			"flexWrap": "wrap",
		})}
	>
		${iconsList.map(
			(iconName) => Template({
				...args,
				iconName: args?.setName === "workflow" ? iconName : undefined,
				uiIconName: args?.setName === "ui" ? iconName : undefined,
			}, context)
		)}
	</div>
`;

/**
 * Display examples of multiple workflow icons.
 */
export const WorkflowDefaultTemplate = (args, context) => html`
	${IconListTemplate(
		{
			...args,
			setName: "workflow",
			size: "xl",
		},
		context,
		[
			"AlertCircle",
			"Bell",
			"Camera",
			"Color",
			"Copy",
			"DeviceDesktop",
			"Download",
			"Draw",
			"Files",
			"Hand",
			"Lightbulb",
			"Paragraph",
		]
	)}
`;

/**
 * Display examples of all directions of a single UI arrow.
 */
export const UIArrowsTemplate = (args, context) => html`
	${IconListTemplate(
		{
			...args,
			setName: "ui",
		},
		context,
		[
			"ArrowRight100",
			"ArrowLeft100",
			"ArrowDown100",
			"ArrowUp100",
		]
	)}
`;

/**
 * Display examples of multiple UI icons.
 */
export const UIDefaultTemplate = (args, context) => html`
	<div style="margin-bottom: 32px;">
		${IconListTemplate(
			{
				...args,
				setName: "ui",
			},
			context,
			[
				"Asterisk100",
				"Asterisk200",
				"Asterisk300",
			]
		)}
	</div>
	<div>
		${IconListTemplate(
			{
				...args,
				setName: "ui",
			},
			context,
			[
				"ChevronDown50",
				"ChevronDown75",
				"ChevronDown100",
				"ChevronDown200",
				"ChevronDown300",
				"ChevronDown400",
			]
		)}
	</div>
`;
