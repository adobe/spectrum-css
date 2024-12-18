import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

/**
 * @typedef { keyof import("./icon.stories.js").default.args } IconArgs
 * @typedef { IconArgs & { scale: string, setName: 'workflow' | 'ui' } } IconProps
 */

const fetchIconDetails = ({
	icons,
	workflowIcons = [],
	uiIcons = [],
	uiIconSizes = {},
}) => {
	if (!icons || Object.keys(icons).length == 0) {
		// Fetch loaded data if not provided
		if (window.icons) icons = window.icons;
		else {
			return {
				workflowIcons: [],
				uiIcons: [],
				uiIconSizes: {},
				uiIconsWithDirections: [],
			};
		}
	}

	// clean up loaded icon data
	icons = Object.entries(icons).reduce((acc, [setName, data]) => {
		acc[setName] = Object.entries(data).reduce((acc, [size, data]) => {
			acc[size] = Object.entries(data).reduce((acc, [iconName, svg]) => {
				// simplify icon name
				iconName = iconName.split("/").pop().replace(/\.svg$/, "");
				acc[iconName] = svg;

				// Add the icon name to the workflowIcons list if it's from the workflow set
				if (setName === "workflow") {
					workflowIcons.push(iconName);
				}
				else {
					const iconNameRoot = iconName.replace(/\d{2,3}$/, "").replace(/(Right|Left|Down|Up)$/, "");
					const iconNameSize = iconName.match(/\d{2,3}/g)?.[0];
					uiIcons.push(iconNameRoot);
					uiIconSizes[iconNameRoot] = [
						...new Set([
							...uiIconSizes[iconNameRoot] ?? [],
							...(iconNameSize ? [iconNameSize] : []),
						])
					];
				}
				return acc;
			}, {});
			return acc;
		}, {});
		return acc;
	}, {});

	return {
		icons,
		workflowIcons: [...new Set(workflowIcons)],
		uiIcons: [...new Set(uiIcons)],
		uiIconSizes,
		uiIconsWithDirections: [
			...new Set([
				...(uiIcons.filter((c) => !["Chevron", "Arrow"].includes(c)) ?? []),
				"ArrowRight",
				"ArrowLeft",
				"ArrowUp",
				"ArrowDown",
				"ChevronRight",
				"ChevronLeft",
				"ChevronUp",
				"ChevronDown",
			])
		],
	};
};

/**
 * Template for rendering an icon
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
	icons,
	useRef = false,
	workflowIcons,
	uiIcons,
	uiIconSizes,
} = {}, context = {}) => {
	const { globals = {}, loaded = {} } = context;

	const scale = globals.scale ?? "medium";

	if (!workflowIcons || !uiIcons || !uiIconSizes) {
		const details = fetchIconDetails({
			icons: loaded.icons,
			workflowIcons,
			uiIcons,
			uiIconSizes
		});

		if(details.icons) {
			icons = details.icons;
		}

		if (!workflowIcons && details.workflowIcons) {
			workflowIcons = details.workflowIcons;
		}

		if (!uiIcons && details.uiIcons) {
			uiIcons = details.uiIcons;
		}

		if (!uiIconSizes && details.uiIconSizes) {
			uiIconSizes = details.uiIconSizes;
		}
	}

	// UI icons are selected from a different control.
	if (setName === "ui" && uiIconName) {
		iconName = uiIconName;
	}

	if (!iconName) {
		console.warn(
			"Icon: Could not render a result because no icon name was provided to the icon template."
		);
		return html``;
	}

	let idKey = iconName;

	// If icon set was not provided, try determine which icon set contains this icon.
	// Note: icon sets can contain the same icon name, with different icons.
	if (!["workflow","ui"].includes(setName)) {
		if (workflowIcons.includes(idKey)) {
			setName = "workflow";
		}
		else if (uiIcons.includes(idKey.replace(/\d{2,3}$/, "").replace(/(Right|Left|Down|Up)$/, ""))) {
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

	let svgString;
	if (icons && icons[setName]?.[scale]?.[idKey]) {
		svgString = icons[setName][scale][idKey];
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

	const classesAsString = Object.entries(classList).reduce((acc, [key, value]) => {
		if (value) acc += `${key} `;
		return acc;
	}, "");

	if (!useRef && svgString) {
		return html`${unsafeSVG(
			svgString.replace(/<svg/, `<svg class="${classesAsString}" focusable="false" aria-hidden="true" role="img"`)
		)}`;
	}

	// ui ID: #spectrum-css-icon-${idKey}
	// workflow ID: #spectrum-icon-(18|24)-${idKey}
	const iconID =
		setName !== "workflow"
			? `spectrum-css-icon-${idKey}`
			: `spectrum-icon-${scale !== "medium" ? "24" : "18"}-${idKey}`;

	return html`<svg
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
