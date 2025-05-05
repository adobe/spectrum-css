import { useEffect, useRef } from "react";
import { ADDON_ID } from "../constants";
import { useDocument } from "./utilities";

/**
 * This hook fetches the resolved value of a CSS property
 *  at a specific selector from the document.
 * @param {string} key -- the full custom property name (e.g. --spectrum-color-static-black)
 * @param {string} selector -- the CSS selector to query in the document
 * @returns {string | undefined} -- the resolved value of the CSS property
 */
export const fetchResolvedValue = (key, selector = ".spectrum") => {
	// Get a reference to the document
	const docRef = useDocument();

	if (!docRef.current) return;

	const element = docRef.current.querySelector(selector);
	if (!element) return;

	const styles = window.getComputedStyle(element);
	if (!styles) return;

	return styles.getPropertyValue(key);
};

/**
 * @param {import("@storybook/types").Args} args
 */
export const useInjectStyle = (args = {}) => {
	/** @type {HTMLStyleElement} */
	const styleRef = useRef();
	const docRef = useDocument();

	useEffect(() => {
		if (docRef.current) {
			/** @type {HTMLStyleElement} */
			styleRef.current = docRef.current.getElementById(ADDON_ID);
			if (!styleRef.current) {
				const styleEl = docRef.current.createElement("style");
				styleEl.id = ADDON_ID;
				styleRef.current = docRef.current.head.appendChild(styleEl);
			}
		}
	}, [docRef, styleRef, ADDON_ID]);

	useEffect(() => {
		if (styleRef.current) {
			const styles = Object.entries(args).reduce((prev, [key, value]) => {
				const [selector, prop, media] = key.split("/");

				// Do not include undefined or empty values
				if (typeof value === "undefined" || value === null || value === "") return prev;

				const rule = `${selector} { ${prop}: ${value}; }\n`;
				return prev + (media ? `@media ${media} {\n  ${rule}}\n` : rule);
			}, "");

			console.log(styles);
			styleRef.current.textContent = styles;
		}
	}, [args, styleRef]);
};
