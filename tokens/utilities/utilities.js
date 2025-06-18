/**
 * @description Pushes a value to a map; supports nested maps and arrays
 * @param {Map} map
 * @param {string} key
 * @param {any} value
 * @returns {Map}
 */
export const pushToMap = (map, key, value) => {
	if (!map.has(key)) {
		map.set(key, value);
		return map;
	}

	let existing = map.get(key);

	// Check if the value is a Map
	if (value instanceof Map) {
		// Merge the two maps
		for (const [k, v] of value.entries()) {
			existing.set(k, v);
		}
	}
	else if (value instanceof Object) {
		// Merge the two objects
		for (const [k, v] of Object.entries(value)) {
			existing[k] = v;
		}
	}
	else if (Array.isArray(value)) {
		// Merge the two arrays
		existing.push(...value);
	}
	else {
		// If it's a primitive value, just set it
		existing = value;
	}

	map.set(key, existing);
	return map;
};

/**
 * @param {string} ref The reference to another token
 * @param {string} [prefix] The prefix to add to the reference, if provided
 * @returns {string} The cleaned reference string
 */
export const cleanVariableName = (ref, prefix = undefined) => {
	// Clean up the key by removing any "sets-*" content
	if (ref?.includes("sets-")) {
		ref = ref.replace(/-sets-\w+/g, "");
	}

	// Ensure all keys start with the prefix
	if (prefix && !ref.startsWith(prefix)) {
		ref = prefix + "-" + ref;
	}

	return ref;
};

/**
 * @param {string} ref The reference to another token
 * @param {string} [prefix] The prefix to add to the reference, if provided
 * @param {string} [fallback] The fallback to add to the reference, if provided
 * @returns {string} The converted reference string
 */
export const referenceToVarFunction = (ref, { prefix, fallback, modifier = false } = {}) => {
	if (typeof ref === "string") {
		if (!ref.startsWith("{") && !ref.startsWith("spectrum-")) return ref;

		const [, name] = ref.match(/^{?(.*?)(?:-sets-\w+)?}?$/);
		if (typeof name === "string") {
			return `${modifier ? `var(--${cleanVariableName(name, "mod")}, ` : ""}var(--${cleanVariableName(name, prefix)}${fallback ? `, ${fallback}` : ""})${modifier ? ")" : ""}`;
		}
	}

	return ref;
};
