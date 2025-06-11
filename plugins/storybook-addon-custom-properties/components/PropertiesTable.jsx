import { PureArgsTable } from "@storybook/blocks";
import { ResetWrapper } from "@storybook/components";
import React, { useMemo, useState } from "react";

import { fetchResolvedValue } from "../tools/useInjectStyle";
import { isValidColor } from "../tools/utilities";

/**
 * @typedef {Object} PropertiesTableProps
 * @property {import("../constants").CssPropsParameter} [customProperties]
 * @property {boolean} [inAddonPanel]
 */
/** @typedef {(a: import('@storybook/types').ArgType, b: import('@storybook/types').ArgType) => string} SortFn */
/** @typedef {'alpha'|'requiredFirst'|'none'} SortType */

const createArgTypes = ({
	name,
	description,
	value,
	resolvedValue,
	selector,
	subcategory,
}) => ({
	name,
	description: description,
	control: { type: resolvedValue && isValidColor(resolvedValue) ? "color" : "text" },
	table: {
		category: selector,
		subcategory,
		type: { summary: "string", detail: description },
		defaultValue: { summary: value },
	},
});

/** @type {import("react").FC<PropertiesTableProps>} */
export const PropertiesTable = ({
	customProperties = {},
	inAddonPanel = true,
} = {}) => {
	const { rows = {}, initialArgs = {}, argsKeys = [] } = useMemo(() => {
			return Object.entries(customProperties).reduce(
				(prev, [name, values]) => {
					if (!Array.isArray(values)) return prev;

					// Iterate over each value and create the appropriate rows
					values.forEach((item = {}) => {
						if (!item.selector) return;

						const rowHeading = `${item.selector.trim()}/${name?.trim()}${
							item.media ? `/${item.media}` : ""
						}`;

						// Resolve global token values
						const resolvedValue = fetchResolvedValue(name, item.selector);

						// Add the argType to the rows to render in the table
						prev.rows[rowHeading] = createArgTypes({ ...item, name, resolvedValue });
						// Add the resolved value to the initialArgs object for the table
						prev.initialArgs[rowHeading] = resolvedValue;
					});

					prev.argsKeys = Object.keys(prev.initialArgs ?? {});
					return prev;
				},
				{
					/** @type {import("@storybook/types").ArgTypes} */
					rows: {},
					/** @type {import("@storybook/types").Args} */
					initialArgs: {},
					/** @type {string[]} */
					argsKeys: [],
				},
			);
	}, [customProperties]);

	const [theArgs, setProperties] = useState(initialArgs);

	console.log("inject styles", {initialArgs, theArgs});
	// useInjectStyle(initialArgs);

	return (
		<ResetWrapper>
			<PureArgsTable
				inAddonPanel={inAddonPanel}
				compact={false}
				updateArgs={(args) => {
					setProperties({...initialArgs, ...args});
					// useInjectStyle({...initialArgs, ...args});
				}}
				resetArgs={() => {
					setProperties(initialArgs);
					// useInjectStyle(initialArgs);
				}}
				rows={rows}
				args={initialArgs}
				isLoading={argsKeys.length <= 0}
			/>
		</ResetWrapper>
	);
};
