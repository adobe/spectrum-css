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
	if (ref.startsWith("{") && ref.endsWith("}")) {
		ref = ref.slice(1, -1);
	}
	return `var(--${prefix ? `${prefix}-` : ""}${ref})`;
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

	let value;
	if (usesReferences(token.original?.value)) {
		value = valueFormatter(token.original?.value, { prefix, context, token });
	}
	else {
		value = valueFormatter(token?.value, { prefix, context, token });
	}

	const parts = generateNameArray(path);

	if (Array.isArray(value)) {
		return value.map(({ subtype, ...valueObj }) => {
			return {
				key: [...parts, subtype].join("-"),
				prop: ["-", prefix, ...parts, subtype].filter(Boolean).join("-"),
				...valueObj,
			};
		});
	}
	else {
		return [{
			key: parts.join("-"),
			prop: ["-", prefix, ...parts].filter(Boolean).join("-"),
			...value,
		}];
	}
};

function valueFormatter(value, { prefix, context, token } = {}) {
	let ret = {};

	if (isObject(value)) {
		if (isASet(value)) {
			Object.entries(value.sets).forEach(([set, data]) => {
				const resolvedSet = valueFormatter(data, { prefix, context: set, token });
				ret[set] = resolvedSet[set] ?? resolvedSet;
			});
		}
		else {
			// Parsing composited tokens
			return Object.entries(value).map(([k, v]) => {
				return {
					...valueFormatter(v, { prefix, context, token }),
					subtype: kebabCase(k),
				};
			}).flat();
		}
	}
	else if (["string", "number", "boolean"].includes(typeof value)) {
		value = String(value);
		if (usesReferences(value)) {
			const ref = refToVarFunction(value, prefix);
			if (ref) ret.ref = ref;
		}
		else {
			if (context) ret[context] = { value };
			else ret.value = value;
		}
	}
	else return;

	return ret;
}
