import { html, svg } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

import { fetchIconSVG, uiIcons, uiIconSizes, workflowIcons } from "./utilities.js";

import "../index.css";

/**
 * @typedef { keyof import("./icon.stories.js").default.args } IconArgs
 * @typedef { IconArgs & { scale: string, useRef: boolean, setName: 'workflow' | 'ui' } } IconProps
 */

/**
 * Template for rendering an icon
 * @description Icon template that renders an icon based on the provided icon name and set name.
 * @param {IconProps} props
 * @param {string} props.rootClass
 * @param {"xs"|"s"|"m"|"l"|"xl"|"xxl"} props.size
 * @param {"ui"|"workflow"} props.setName
 * @param {string} props.iconName - Icon name with or without the icon scale number appended. Names with the scale (e.g. 75, 100) will replace it based upon the value of 'size'.
 * @param {string} props.fill
 * @param {string} props.id
 * @param {string[]} props.customClasses
 * @param {boolean} props.useRef
 * @returns {import('lit').TemplateResult<1>}
 */
export const Template = ({
	rootClass = "spectrum-Icon",
	size = "m",
	setName,
	iconName,
	fill,
	id,
	customClasses = [],
	useRef = false,
	...globals
}) => {
	const { scale } = globals;

	if (!iconName) {
		console.warn(
			"Icon: Could not render a result because no icon name was provided to the icon template."
		);
		return html``;
	}

	let idKey = iconName;

	// If icon set was not provided, try determine which icon set contains this icon.
	// Note: icon sets can contain the same icon name, with different icons.
	if (!['workflow','ui'].includes(setName)){
		if (workflowIcons.includes(idKey)) {
			setName = "workflow";
		} else if (uiIcons.includes(idKey.replace(/\d{2,3}$/, "").replace(/(Right|Left|Down|Up)$/, ""))) {
			setName = "ui";
		}
	}

	if (!setName) {
		console.warn(
			`Icon: Could not determine the icon set for the provided icon name: ${idKey}.`
		);
		return html``;
	}

	// If a descriptor like Right, Left, Down, or Up is present for the UI icons Chevron or
	// Arrow, use that only for the class and not the icon fetch.
	if (
		setName == "ui" &&
		uiIcons.some((c) => idKey.startsWith(c)) &&
		["Right", "Left", "Down", "Up"].some((c) => idKey.includes(c))
	) {
		idKey = idKey.replace(/(Right|Left|Down|Up)/, "");
	}

	/**
	 * Fallback UI Icon sizing number.
	 * 
	 * If the icon name includes its scale, we want to leave that scale. This is preferred,
	 * as UI icons do not use workflow icon sizing.
	 * 
	 * If the UI icon name does not include scale, reformat it to match the provided sizing.
	 * E.g. with a size of "s", the icon name "ChevronRight" would become "ChevronRight75".
	 */
	if (
		setName == "ui" &&
		// Exists in the list of available UI icons.
		uiIcons.includes(idKey.replace(/\d{2,3}$/, "")) &&
		// Does not already have size number at the end.
		!idKey.match(/^(?!\d).*\d{2,3}$/) &&
		// Exclude some UI icons that do not (yet) have size numbers.
		uiIconSizes[idKey]?.length != 0
	) {
		let sizeVal;
		switch (size) {
			case "xs":
			case "s":
				sizeVal = "75";
				break;
			case "l":
				sizeVal = "200";
				break;
			case "xl":
			case "xxl":
				sizeVal = "300";
				break;
			default:
				sizeVal = "100";
				break;
		}

		idKey += sizeVal;
		iconName += sizeVal;
	}

	// Fetch SVG file markup, and set optional fill color.
	let inlineStyle;
	if (fill) inlineStyle = `color: ${fill}`;
	let icon;

	if (!useRef) {
		icon = fetchIconSVG({ iconName: idKey, setName, ...globals });

		if (!icon) {
			console.warn(`Icon: "${idKey}" was not found in the "${setName}" icon set.`);
			return html``;
		}
	}

	/**
	 * Classes to apply to the SVG element. Object as used by the classMap function.
	 * @type {[name: string]: string | boolean | number}
	 */
	const classList = {
		[rootClass]: true,
		[`spectrum-UIIcon-${iconName}`]: !!(setName === "ui"),
		[`${rootClass}--${scale}`]: !!(setName === "ui" && scale),
		[`${rootClass}--size${size?.toUpperCase()}`]: !!(
			(!setName || setName === "workflow") &&
			size
		),
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};

	// If we found an icon above, return that value with the appended class list
	if (icon) {
		return svg`${unsafeSVG(
			icon.replace(
				/^<svg(.*)>/,
				`<svg class="${Object.entries(classList)
					.filter(([, v]) => v === true)
					.map(([k]) => k)
					.join(" ")}"${
					inlineStyle ? ` style="${inlineStyle}"` : ""
				} focusable="false" aria-hidden="true" role="img" $1>`
			)
		)}`;
	}

	// Otherwise, we need to render a reference to the icon

	// ui ID: #spectrum-css-icon-${idKey}
	// workflow ID: #spectrum-icon-(18|24)-${idKey}
	const iconID =
		setName !== "workflow"
			? `spectrum-css-icon-${idKey}`
			: `spectrum-icon-${scale !== "medium" ? `24` : `18`}-${idKey}`;

	try {
		import(
			/* webpackPrefetch: true */ `!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg`
		);
		import(
			/* webpackPrefetch: true */ `!!raw-loader!@spectrum-css/ui-icons/dist/spectrum-css-icons.svg`
		);
	} catch (e) {
		console.warn(e);
	}

	return svg`<svg
		class=${classMap(classList)}
		id=${ifDefined(id)}
		style=${ifDefined(inlineStyle)}
		focusable="false"
		aria-hidden="true"
		aria-labelledby=${idKey}
		role="img"
	>
		<title id=${idKey}>${idKey.replace(/([A-Z])/g, " $1").trim()}</title>
		<use xlink:href="#${iconID}" href="#${iconID}" />
	</svg>`;
};
