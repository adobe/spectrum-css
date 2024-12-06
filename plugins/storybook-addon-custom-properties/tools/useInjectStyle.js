import { useEffect, useRef } from "react";
import { ADDON_ID } from "../constants";
import { useDocument } from "./utilities";

/**
 * @param {import("@storybook/types").Args} cssProps
 */
export const useInjectStyle = (args) => {
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
	}, [docRef]);
	useEffect(() => {
		if (styleRef.current) {
			const argEntries = Object.entries(args);
			const styles = argEntries.reduce((prev, [key, value]) => {
				const [selector, prop, media] = key.split("/");

				// Do not include undefined or empty values
				if (typeof value === "undefined" || value === null || value === "") return prev;

				const rule = `${selector} { ${prop}: ${value}; }\n`;
				return prev + (media ? `@media ${media} {\n  ${rule}}\n` : rule);
			}, "");
			styleRef.current.textContent = styles;
		}
	}, [args]);
};
