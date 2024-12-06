import { useEffect, useRef } from "react";

/**
 * @param {{ [key: string]: any }} object
 */
export const hasEntries = (object = {}) =>
	!!(object && Object.keys(object).length);

// https://www.regextester.com/103656
const colorRe =
	/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;
const varRe = /^(var|calc|\d|\.)/;

/* @type {{ [key: string]: boolean }} */
const memo = {};
/**
 *
 * @param {string} strColor
 */
export const isValidColor = (strColor) => {
	if (!(Object.keys(memo).includes(strColor))) {
		if (varRe.test(strColor)) {
			memo[strColor] = false;
		}
		else if (colorRe.test(strColor)) {
			memo[strColor] = true;
		}
		else {
			const s = new Option().style;
			s.color = strColor;
			memo[strColor] = s.color === strColor.toLowerCase();
		}
	}
	return memo[strColor];
};

export const useDocument = () => {
	/** @type {React.MutableRefObject<Document|undefined>} */
	const docRef = useRef();
	useEffect(() => {
		/** @type {HTMLIFrameElement|null} */
		const iframe = document.getElementById("storybook-preview-iframe");
		docRef.current = iframe?.contentWindow?.document || document;
	}, []);
	return docRef;
};
