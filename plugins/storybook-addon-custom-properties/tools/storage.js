import { ADDON_ID } from "../constants";

/**
 * @param {string} key
 * @returns {Record<string, string | never>}
 */
const getSessionStorage = (key) => {
	if (window && window.sessionStorage) {
		try {
			const sessionStorage = window.sessionStorage.getItem(key);
			if (sessionStorage) {
				const parsedStorage = JSON.parse(sessionStorage);
				return parsedStorage;
			}
		} catch (e) {
			console.warn(
				"[storybook-addon-component-tokens]",
				"Couldn't read sessionStorage",
				e,
			);
			return {};
		}
	}
	return {};
};

/**
 * @param {string} key
 * @param {Record<string, unknown>} data
 * @returns {void}
 */
const setSessionStorage = (key, data) => {
	if (window && window.sessionStorage) {
		if (data) {
			try {
				window.sessionStorage.setItem(key, JSON.stringify(data));
			} catch (e) {
				console.warn(
					"[storybook-addon-component-tokens]",
					"Couldn't write to sessionStorage",
				);
			}
		}
	}
};

/**
 * @param {import("@storybook/types").Args} cssProps
 */
export const updateStorage = (cssProps = {}) => {
	const propertiesFromStorage = getSessionStorage(ADDON_ID);
	/** @type import("@storybook/types").Args */
	const newProperties = {};

	Object.keys(cssProps).forEach((key) => {
		newProperties[key] = cssProps[key];
	});

	const newStorage = { ...propertiesFromStorage, ...newProperties };
	setSessionStorage(ADDON_ID, newStorage);
	return newStorage;
};

/**
 * @param {string[]} cssPropNames
 */
export const resetStorage = (argKeys) => {
	const storedProperties = getSessionStorage(ADDON_ID);

	if (argKeys) {
		argKeys.forEach((key) => {
			if (Object.keys(storedProperties).includes(key)) {
				delete storedProperties[key];
			}
		});
	}

	setSessionStorage(ADDON_ID, storedProperties);

	return storedProperties;
};

/**
 * @param {import("@storybook/types").Args} fromParams
 * @param {ReturnType<getSessionStorage>} fromStorage
 */
export const mergeCustomPropertiesWithStorage = (
	fromParams = {},
	fromStorage = getSessionStorage(ADDON_ID),
) => ({ ...fromParams, ...fromStorage });
