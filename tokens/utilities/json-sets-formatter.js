import merge from "deepmerge";
import { usesReferences } from "style-dictionary/utils";

/**
 * @description Checks if a value is an object
 * @param {unknown} value
 * @returns {boolean}
 */
const isObject = (item) => {
	return typeof item === "object" && !Array.isArray(item) && item !== null;
};

/**
 * @description Converts an array to an object
 * @param {string[]} pathAr
 * @param {unknown} value
 * @returns {Record<string, unknown>}
 */
const pathToObj = (pathAr, value) =>
	pathAr.reduceRight((value, key) => ({ [key]: value }), value);

/**
 * @description Checks if a value is a set
 * @param {unknown} value
 * @returns {boolean}
 */
const isASet = (value) => {
	return isObject(value) && "sets" in value;
};

/**
 * @description Gets the value of a token
 * @param {import('style-dictionary').Token} token
 * @param {import('style-dictionary').Dictionary} dictionary
 * @returns {Record<string, unknown>}
 */
const getValue = (token, dictionary) => {
	if (usesReferences(token)) {
		const ref = token.original.value;
		if (isASet(token.value)) {
			const sets = {};
			for (const setName in token.value.sets) {
				sets[setName] = getValue(token.value.sets[setName], dictionary);
			}
			const uuidObj = (Object.hasOwn(token, "uuid")) ? {uuid: token.uuid}: {};
			return { ref, sets, ...uuidObj };
		}
		else {
			const uuidObj = (Object.hasOwn(token, "uuid")) ? {uuid: token.uuid}: {};
			return { ref, value: token.value, ...uuidObj };
		}
	}
	else {
		const uuidObj = (Object.hasOwn(token, "uuid")) ? {uuid: token.uuid}: {};
		return { value: token.value, ...uuidObj };
	}
};

/**
 * @description Formats the JSON sets
 * @type {import('style-dictionary/types').FormatFn}
 */
export const format = ({ dictionary }) => {
	let resultObj = {};
	dictionary.allTokens.forEach((token) => {
		const value = getValue(token, dictionary);
		resultObj = merge(resultObj, pathToObj(token.path, value));
	});
	return JSON.stringify(resultObj, null, 2);
};

format.nested = true;

/**
 * @type {import('style-dictionary/types').Format}
 */
export default {
	name: "json/sets",
	format,
};
