import { Cell, Content, InlineAlert } from "@adobe/react-spectrum";
import { PureArgsTable } from "@storybook/blocks";
import { ResetWrapper, withReset } from "@storybook/components";
import { ChevronDownIcon, ChevronRightIcon } from "@storybook/icons";
import { styled } from "@storybook/theming";
import { isEqual } from "es-toolkit/compat";
import React, { useMemo, useState } from "react";

import { mergeCustomPropertiesWithStorage } from "../tools/storage";
import { useInjectStyle } from "../tools/useInjectStyle";
import { hasEntries, isValidColor } from "../tools/utilities";

/**
 * @typedef {Object} PropertiesTableProps
 * @property {import("../constants").CssPropsParameter} [customProperties]
 * @property {boolean} [inAddonPanel]
 */
/** @typedef {(a: import('@storybook/types').ArgType, b: import('@storybook/types').ArgType) => string} SortFn */
/** @typedef {'alpha'|'requiredFirst'|'none'} SortType */

const EmptyBlock = styled.div(withReset, ({ theme }) => ({
	backgroundColor:
		theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
	borderRadius: theme.appBorderRadius,
	border: `1px dashed ${theme.appBorderColor}`,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 20,
	margin: "25px 0 40px",

	color: theme.color.defaultText,
	fontSize: theme.typography.size.s2,
}));

const Section = styled(Cell)(({ theme }) => ({
	position: "relative",
	letterSpacing: "0.35em",
	textTransform: "uppercase",
	fontWeight: theme.typography.weight.bold,
	fontSize: theme.typography.size.s1 - 1,
	color: theme.color.defaultText,
	background: `${theme.background.app} !important`,
	"& ~ td": {
		background: `${theme.background.app} !important`,
	},
}));

const ExpanderIconDown = styled(ChevronDownIcon)(({ theme }) => ({
	marginRight: 8,
	marginLeft: -10,
	marginTop: -2, // optical alignment
	height: 12,
	width: 12,
	color: theme.color.defaultText,
	border: "none",
	display: "inline-block",
}));

const ExpanderIconRight = styled(ChevronRightIcon)(({ theme }) => ({
	marginRight: 8,
	marginLeft: -10,
	marginTop: -2, // optical alignment
	height: 12,
	width: 12,
	color: theme.color.defaultText,
	border: "none",
	display: "inline-block",
}));

const FlexWrapper = styled.span(({}) => ({
	display: "flex",
	lineHeight: "20px",
	alignItems: "center",
}));

const Subsection = styled(Cell)(({ theme }) => ({
	position: "relative",
	fontWeight: theme.typography.weight.bold,
	fontSize: theme.typography.size.s2 - 1,
	background: theme.background.app,
}));

const ClickIntercept = styled.button(() => ({
	// reset button style
	background: "none",
	border: "none",
	padding: "0",
	font: "inherit",

	// add custom style
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	height: "100%",
	width: "100%",
	color: "transparent",
	cursor: "row-resize !important",
}));

const SectionRow = ({
	level = "section",
	label,
	children,
	initialExpanded = true,
	colSpan = 3,
}) => {
	const [expanded, setExpanded] = useState(initialExpanded);
	const Level = level === "subsection" ? Subsection : Section;

	const itemCount = children?.length || 0;
	const caption =
		level === "subsection"
			? `${itemCount} item${itemCount !== 1 ? "s" : ""}`
			: "";

	const helperText = `${expanded ? "Hide" : "Show"} ${
		level === "subsection" ? itemCount : label
	} item${itemCount !== 1 ? "s" : ""}`;

	return (
		<>
			<Level colSpan={1}>
				<ClickIntercept onClick={(e) => setExpanded(!expanded)} tabIndex={0}>
					{helperText}
				</ClickIntercept>
				<FlexWrapper>
					{expanded ? <ExpanderIconDown /> : <ExpanderIconRight />}
					{label}
				</FlexWrapper>
			</Level>
			<Cell colSpan={colSpan - 1}>
				<ClickIntercept
					onClick={(e) => setExpanded(!expanded)}
					tabIndex={-1}
					style={{ outline: "none" }}
				>
					{helperText}
				</ClickIntercept>
				{expanded ? null : caption}
			</Cell>
			{expanded ? children : null}
		</>
	);
};

// const StyledIconButton = styled(IconButton)(({}) => ({
// 	margin: "-4px -12px -4px 0",
// }));

/** @type {Record<SortType, SortFn | null>} */
const sortFns = {
	alpha: (a, b) => a.name.localeCompare(b.name),
	requiredFirst: (a, b) =>
		Number(!!b.type?.required) - Number(!!a.type?.required) ||
		a.name.localeCompare(b.name),
	none: undefined,
};

/**
 * @param {import('@storybook/types').ArgTypes<{ [name: string]: any }>} rows
 * @param {SortType} sort
 * @returns
 */
const groupRows = (rows, sort) => {
	const sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };

	if (!hasEntries(rows)) return sections;

	Object.entries(rows).forEach(([key, row]) => {
		const { category, subcategory } = row?.table || {};
		if (category) {
			const section = sections.sections[category] || {
				ungrouped: [],
				subsections: {},
			};
			if (!subcategory) {
				section.ungrouped.push({ key, ...row });
			} else {
				const subsection = section.subsections[subcategory] || [];
				subsection.push({ key, ...row });
				section.subsections[subcategory] = subsection;
			}
			sections.sections[category] = section;
		} else if (subcategory) {
			const subsection = sections.ungroupedSubsections[subcategory] || [];
			subsection.push({ key, ...row });
			sections.ungroupedSubsections[subcategory] = subsection;
		} else {
			sections.ungrouped.push({ key, ...row });
		}
	});

	// apply sort
	const sortFn = sortFns[sort];

	const sortSubsection = (record) => {
		if (!sortFn) {
			return record;
		}
		return Object.keys(record).reduce(
			(acc, cur) => ({
				...acc,
				[cur]: record[cur].sort(sortFn),
			}),
			{},
		);
	};

	return {
		ungrouped: sections.ungrouped.sort(sortFn),
		ungroupedSubsections: sortSubsection(sections.ungroupedSubsections),
		sections: Object.keys(sections.sections).reduce(
			(acc, cur) => ({
				...acc,
				[cur]: {
					ungrouped: sections.sections[cur].ungrouped.sort(sortFn),
					subsections: sortSubsection(sections.sections[cur].subsections),
				},
			}),
			{},
		),
	};
};

/** @type {import("react").FC<PropertiesTableProps>} */
export const PropertiesTable = ({
	customProperties = {},
	inAddonPanel = true,
} = {}) => {
	if (typeof error !== "undefined") {
		console.log("Throwing an error!");
		return (
			<EmptyBlock className="docblock-emptyblock sb-unstyled">
				<InlineAlert variant="negative">
					<Content>{error}</Content>
				</InlineAlert>
			</EmptyBlock>
		);
	}

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

					// @todo is this where we should try to resolve global token values?


					prev.rows[rowHeading] = {
						control: isValidColor(item.value) ? "color" : "text",
						description: item.description,
						name: `${name}${item.media ? ` @ ${item.media}` : ""}`,
						table: {
							category: item.selector,
							defaultValue: { summary: item.value },
							subcategory: item.subcategory,
							type: { summary: "string" },
						},
					};

					// Try to resolve the item.value
					
					prev.initialArgs[rowHeading] = item.value;
				});

				prev.argsKeys = Object.keys(prev.initialArgs);
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

	const [prevProps, setPrevProps] = useState(customProperties);
	const [mergedArgs, setMergedArgs] = useState(
		mergeCustomPropertiesWithStorage(initialArgs),
	);

	if (isEqual(customProperties, prevProps) === false) {
		// update `mergedArgs` if customProperties changed
		// @see https://github.com/facebook/react/issues/14738
		setPrevProps(customProperties);
		setMergedArgs(mergeCustomPropertiesWithStorage(initialArgs));
	}

	useInjectStyle(mergedArgs);

	return (
		<ResetWrapper>
			<PureArgsTable
				inAddonPanel={inAddonPanel}
				compact={false}
				updateArgs={(args) => {
					const storedProperties = updateStorage(args);
					setMergedArgs(
						mergeCustomPropertiesWithStorage(mergedArgs, storedProperties),
					);
				}}
				resetArgs={() => {
					resetStorage(argsKeys);
					setMergedArgs(initialArgs);
				}}
				rows={rows}
				args={mergedArgs}
				isLoading={argsKeys.length <= 0}
			/>
		</ResetWrapper>
	);
};

{
	/* <TableView
aria-label="Documentation of available custom properties"
>
<TableHeader>
	<Column>Custom property</Column>
	<Column>Description</Column>
	<Column>Initial value</Column>
</TableHeader>
<TableBody>
	{Object.entries(groups.sections).map(([category, { ungrouped = [] } = {}]) => (
		<SectionRow
			key={category}
			label={category}
			level="section"
			colSpan={3}
		>
			{ungrouped.map(({ key, name, value }) => (
				<Row>
					<Cell>{key}</Cell>
					<Cell>{name}</Cell>
					<Cell>{value}</Cell>
				</Row>
			))}
		</SectionRow>
	))}
</TableBody>
</TableView> */
}
