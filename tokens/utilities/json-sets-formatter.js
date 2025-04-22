import merge from "deepmerge";
import { usesReferences } from "style-dictionary/utils";

const isObject = (item) => {
	return typeof item === "object" && !Array.isArray(item) && item !== null;
};

const pathToObj = (pathAr, value) =>
	pathAr.reduceRight((value, key) => ({ [key]: value }), value);

const isASet = (value) => {
	return isObject(value) && "sets" in value;
};

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

export const format = ({ dictionary }) => {
	let resultObj = {};
	dictionary.allTokens.forEach((token) => {
		const value = getValue(token, dictionary);
		resultObj = merge(resultObj, pathToObj(token.path, value));
	});
	return JSON.stringify(resultObj, null, 2);
};

format.nested = true;

export default {
	name: "json/sets",
	format,
};
