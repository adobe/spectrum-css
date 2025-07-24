import { kebabCase } from "lodash-es";
import { usesReferences } from "style-dictionary/utils";

const isObject = (item) => {
	return typeof item === "object" && !Array.isArray(item) && item !== null;
};

const isASet = (value) => {
	return isObject(value) && "sets" in value;
};

const generateNameArray = (parts) => {
	const name = [];
	for (let i = 0; i < parts.length; i++) {
		if (parts[i] === "sets") i++;
		else name.push(parts[i]);
	}
	return name;
};

export const refToVarFunction = (ref, prefix) => {
	return typeof ref === "string" ? ref.replace(/\{(.*?)\}/g, `var(--${prefix ? `${prefix}-` : ""}$1)`) : ref;
};

export const varToRef = (varName, prefix) => {
	const regex = new RegExp(`var\\(--${prefix ? `${prefix}-` : ""}(.*?)\\)$`);
	return varName.replace(regex, "$1").replace(/^--/, "");
};

/**
 * @description Formats the value of a token for CSS
 * @param {import('style-dictionary/types').TransformedToken} token
 * @param {Object} options
 * @param {string} options.prefix
 * @param {string} options.subtype
 * @returns {import('style-dictionary/types').TransformedToken[]}
 */
export const fetchDefinition = (token, { prefix } = {}) => {
	if (!token) return [];

	let path = token.original?.path ?? token?.path ?? [];
	let context = token.attributes?.sets?.[0];
	let value = valueFormatter(token?.value ?? token.original?.value, { prefix, context });

	const parts = generateNameArray(path);

	if (Array.isArray(value)) {
		return value.map(({ subtype, ...valueObj }) => {
			return {
				...valueObj,
				key: [...parts, subtype].join("-"),
				prop: ["-", prefix, ...parts, subtype].filter(Boolean).join("-"),
			};
		});
	}
	else {
		return [{
			...value,
			key: parts.join("-"),
			prop: ["-", prefix, ...parts].filter(Boolean).join("-"),
		}];
	}
};

function valueFormatter(value, { prefix, context } = {}) {
	let ret = {};

	if (isObject(value)) {
		if (isASet(value)) {
			Object.entries(value.sets).forEach(([set, data]) => {
				ret[set] = valueFormatter(data, { prefix, context });
			});
		}
		else if (!Object.keys(value).includes("$schema")) {
			// Parsing composited tokens
			return Object.entries(value).map(([k, v]) => {
				return { ...valueFormatter(v, { prefix, context }), subtype: kebabCase(k) };
			}).flat();
		}
		else if (value.value) {
			return valueFormatter(value.value, { prefix, context });
		}
	}
	else if (!usesReferences(value)) {
		if (context) ret[context] = { value: String(value) };
		else ret.value = String(value);
	}
	else ret.ref = refToVarFunction(String(value), prefix);

	return ret;
}
