import { Column, Row, TableBody, TableHeader, TableView } from "@react-spectrum/s2";
import React from "react";

/**
 * @typedef {Object} NodeResult
 * @property {Array} any - The 'any' rules.
 * @property {Array} all - The 'all' rules.
 * @property {Array} none - The 'none' rules.
 * @property {Array} target - The target elements.
 */

/**
 * @typedef {Object} ElementProps
 * @property {string} customProperty - The custom property name.
 * @property {string} value - The value assigned to the custom property at this selector.
 */

/**
 * @param {ElementProps} props - The custom property key-value pairs for the Element component.
 * @returns {JSX.Element} - The Element component.
 */
export const Element = ({ selector, props }) => {
	let columns = [
		{ name: "Custom property", uid: "name" },
		{ name: "Default value", uid: "value" },
		{ name: "Current value", uid: "current" },
	];

	let rows = Object.entries(props).map(([customProperty, value]) => {
		return {
			name: customProperty,
			value: value,
			current: "",
		};
	});

	return (
		<TableView
			key={selector}
			selectionMode={"none"}
			overflowMode={"wrap"}
			styles={{ width: "100%"}}
		>
			<TableHeader columns={columns}>
				{column => (
					<Column key={column.uid}>{column.name}</Column>
				)}
			</TableHeader>
			<TableBody items={rows}>
				{item => (
					<Row>
						{columnKey => <Cell key={columnKey}>{item[columnKey]}</Cell>}
					</Row>
				)}
			</TableBody>
		</TableView>
	);
};
