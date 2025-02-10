/* eslint-disable no-prototype-builtins */
const jsonSetsFormatter = require("style-dictionary-sets").JsonSetsFormatter;

const formatter = ({ dictionary, platform, file, options }) => {
	const prefix = platform.prefix ? platform.prefix : false;
	let result = {};

	const jsonSets = JSON.parse(
		jsonSetsFormatter.formatter({ dictionary, platform, file, options })
	);

	const convertRef = (ref) => {
		return ref.replace(/\{(.*?)\}/g, `var(--${prefix}-$1)`);
	};

	const deconstructSets = (obj, scope = undefined) => {
		let ret = obj;
		Object.entries(obj.sets ?? {}).forEach(([context, data]) => {
			if (context === "wireframe") return;
			if (typeof scope !== "undefined" && scope !== context) return;

			delete data.uuid;

			if (data.ref) data.ref = convertRef(data.ref);
			if (data.sets) {
				data = deconstructSets(data, context);

				ret = {
					...ret,
					...data
				};
			}
			else {
				ret[context] = data;
			}

			delete ret.sets;
		});

		delete ret.uuid;
		if (ret.ref) ret.ref = convertRef(ret.ref);

		return ret;
	};

	Object.keys(jsonSets).forEach((tokenName) => {
		const tokenValue = jsonSets[tokenName];

		// Add the property to the results object
		result[tokenName] = {
			prop: (prefix)? `--${prefix}-${tokenName}` : `--${tokenName}`,
			...(deconstructSets(tokenValue) ?? {}),
		};
	});

	// Sort the result alphabetically by keys
	result = Object.entries(result).sort().reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {});

	return JSON.stringify(result, null, 2);
};

formatter.nested = true;

module.exports = {
	name: "json/sets",
	formatter,
};
