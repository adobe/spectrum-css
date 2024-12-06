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
 * @typedef {Object} CssPropsMetadata
 * @property {string} name
 * @property {string} media
 * @property {string} selector
 * @property {string} value
 */

/**
 * @typedef {Record<string, CssPropsMetadata>} ExtractResult
 */

/**
 * @typedef {Object} CssPropsConfig
 * @property {string} [prefix] -- Optional prefix to filter custom properties by.
 * @property {string[]} ignoreSelectors -- Which CSS selectors to exclude from the final output.
 * @property {string[]} ignoreCustomProperties -- Which custom properties to exclude from the final output.
 * @property {string[]} ignoreMediaQueries -- Which media queries to exclude from the final output.
 */

/** @typedef {'initial' | 'manual' | 'running' | 'error' | 'ran' | 'ready'} Status */

/**
 * @typedef {Object} CssPropsContextStore
 * @property {Results} results
 * @property {string[]} highlighted
 * @property {(target: string[], highlight: boolean) => void} toggleHighlight
 * @property {() => void} clearHighlights
 * @property {number} tab
 * @property {(index: number) => void} setTab
 * @property {Status} status
 * @property {(status: Status) => void} setStatus
 * @property {unknown} error
 * @property {() => void} handleManual
 * @property {TestDiscrepancy} discrepancy
 */
