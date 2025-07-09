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
 * @returns {string[]}
 */
export const valueFormatter = (value, options = {}) => {
	if (!value) return;

	const { path = [], prefix, context, subtype } = options;

	if (subtype) path.push(subtype);

	const parts = generateNameArray(path);

	const ret = {
		key: parts.join("-"),
		prop: ["-", prefix, ...parts].filter(Boolean).join("-"),
	};

	if (isObject(value)) {
		if (isASet(value)) {
			Object.entries(value.sets).forEach(([set, data]) => {
				ret[set] = valueFormatter(data, options);
			});

			return [ret];
		}
		else return Object.entries(value).map(([k, v]) => {
			return valueFormatter(v, { ...options, subtype: kebabCase(k) });
		})?.flat();
	}

	if (!usesReferences(value)) {
		if (context) ret[context] = { value: String(value) };
		else ret.value = String(value);
	}
	else ret.ref = refToVarFunction(String(value), prefix);

	return [ret];
};
