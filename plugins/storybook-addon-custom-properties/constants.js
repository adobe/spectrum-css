export const PARAM_KEY = "cssprops";
export const ADDON_ID = "addon-component-tokens";

/**
 * @typedef {Object} Group
 * @property {string} label
 * @property {string} [category]
 * @property {string} [subcategory]
 */

/**
 * @typedef StyleNode
 * @property {string} type
 * @property {StyleNode[] | string} [content]
 * @property {(type: string) => boolean} is
 */

/**
 * @typedef {Object} ExtractOptions
 * @property {'simple'|'full'} mode -- How much information should be extracted from the styles.
 * @property {string} prefix -- Optional prefix to filter custom properties by.
 * @property {string} commentKeyword -- Optional keyword to check for in the styles to offer context.
 */

/**
 * @typedef {{} & ExtractOptions} CssPropsParameter
 * @property {import("custom-property-extract/dist/types").FullExtractResult} [customProperties]
 * @property {Group} [group]
 */

/**
 * @typedef {Record<string, string[]>} SimpleExtractResult
 */

/**
 * @typedef {Record<string, { media?: string; name?: string; selector?: string; value?: string; }>} ExtractResult
 */
