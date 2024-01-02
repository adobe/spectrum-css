import path from "path";

import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";


// Imports an array of all icon names in the workflow set
import iconOpts from "@adobe/spectrum-css-workflow-icons";

const workflowIcons = (iconOpts || []).map((icon) =>
	path.basename(icon, ".svg")
);

const uiIcons = [
	"Arrow",
	"Asterisk",
	"Checkmark",
	"Chevron",
	"CornerTriangle",
	"Cross",
	"Dash",
	"SingleGripper",
	"DoubleGripper",
	"TripleGripper",
];

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
 * @param {"s"|"m"|"l"|"xl"} props.size
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
	uiIconName,
	fill,
	id,
	customClasses = [],
	useRef = false,
	...globals
}) => {
	const { scale } = globals;

	if (!iconName && uiIconName) {
		iconName = uiIconName;
		setName = "ui";
	}

	if (!iconName) {
		console.warn(
			"Icon: Could not render a result because no icon name was provided to the icon template."
		);
		return html``;
	}

	let idKey = iconName;

	// If a descriptor like Right, Left, Down, or Up is present for the Chevron or the
	// Arrow, use that only for the class and not the icon fetch.
	if (
		uiIcons.some((c) => idKey.startsWith(c)) &&
		["Right", "Left", "Down", "Up"].some((c) => idKey.includes(c))
	) {
		idKey = idKey.replace(/(Right|Left|Down|Up)/, "");
	}

	// If the icon name includes its scale, we want to leave that scale
	// If the icon name does not include scale, reformat it to match the provided sizing.
	// E.g. with a size of "s", the icon name "ChevronRight" would become "ChevronRight75".
	if (
		uiIcons.includes(idKey.replace(/\d{2,3}$/, "")) &&
		!idKey.match(/^(?!\d).*\d{2,3}$/) &&
		!idKey.endsWith("Gripper")
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

	// Determine which icon set contains this icon.
	if (workflowIcons.includes(idKey)) {
		setName = "workflow";
	} else if (uiIcons.includes(idKey.replace(/\d{2,3}$/, ""))) {
		setName = "ui";
	}

	if (!setName) {
		console.warn(
			`Icon: Could not determine the icon set for the provided icon name: ${idKey}.`
		);
		return html``;
	}

	let inlineStyle;
	if (fill) inlineStyle = `color: ${fill}`;

	let icon;

	if (!useRef) {
		// Check adobe workflow icons first
		if (setName === "workflow") {
			icon = require(/* webpackPrefetch: true */ `!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/${
				scale !== "medium" ? `24` : `18`
			}/${idKey}.svg?raw`);
		}

		// Check the ui kit for icon set if not yet found
		if (!icon || setName === "ui") {
			icon = require(/* webpackPrefetch: true */ `!!raw-loader!@spectrum-css/ui-icons/dist/${scale ?? "medium"}/${idKey}.svg?raw`);
		}

		if (!icon) {
			console.warn(`Icon: ${idKey} not found.`);
			return html``;
		} else {
			icon = (icon.default ?? icon).trim();
		}
	}

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

	const svgCapture = /<\/?svg(?:\s\w+=[\"|\']?[\w|\s|\.|:|\/]+[\"|\']?)*>/gm;
	const attributeCapture = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;
	const props = {
		focusable: "false",
		["aria-hidden"]: "true",
		role: "img",
	};

	if (id) props.id = id;
	if (inlineStyle) props.style = inlineStyle;
	if (classList) {
		props.class = Object.entries(classList)
			.filter(([, v]) => v === true)
			.map(([k]) => k)
			.join(" ");
	}

	if (!icon) {
		// If no icon content, we need to render a reference to the icon

		// ui ID: #spectrum-css-icon-${idKey}
		// workflow ID: #spectrum-icon-(18|24)-${idKey}
		const iconID =
			setName !== "workflow"
				? `spectrum-css-icon-${idKey}`
				: `spectrum-icon-${scale !== "medium" ? `24` : `18`}-${idKey}`;

		props["aria-labelledby"] = idKey;

		return html`${unsafeHTML(`<svg ${Object.entries(props).map(([key, value]) => `${key}="${value}"`).join(" ")}>
			<title id=${idKey}>${idKey.replace(/([A-Z])/g, " $1").trim()}</title>
			<use xlink:href="#${iconID}" href="#${iconID}" />
		</svg>`)}`;
	}

	// If we found an icon, return that value with the appended class list
	const matches = icon.match(svgCapture)?.[0];

	// Split the string into attribute key/value pairs by capturing the value inside quotes
	const keyPairs = matches ? matches.match(attributeCapture) : [];

	// Convert the array of key/value pairs into an object
	if (keyPairs) {
		keyPairs.forEach((pair) => {
			const [key, value] = pair.split("=");
			props[key] = value.replace(/"/g, "");
		});
	}

	delete props.height;

	if (setName === "ui") {
		if (props.viewBox) {
			const viewbox = props.viewBox.split(" ");
			const width = viewbox[2];
			props.width = width ?? "10";
		} else {
			props.width = "10";
		}
	} else delete props.width;

	const iconContent = icon.replaceAll(svgCapture, "");
	return html`${unsafeHTML(`<svg ${Object.entries(props).map(([key, value]) => `${key}="${value}"`).join(" ")}>${iconContent}</svg>`)}`;
};
