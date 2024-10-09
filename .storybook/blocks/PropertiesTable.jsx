import "@spectrum-css/table";

import { DocsContext, useOf } from "@storybook/blocks";
import { ResetWrapper } from "@storybook/components";
import { NAVIGATE_URL } from "@storybook/core-events";
import { styled } from "@storybook/theming";
import React, { useContext } from 'react';
import { Body, Code, LinkableHeading } from "./Typography.jsx";

export const Table = styled.table`
	padding-block: 10px;
`;

/**
 * Displays the current version number of the component. The version is read from
 * the component's parameters, where it was sourced from the package.json file.
 *
 * Also displays a component status of "deprecated" if it is set in the story's
 * parameters.
 *
 * Usage of this doc block within MDX template(s):
 *  <PropertiesTable />
 */
export const PropertiesTable = () => {
	const context = useContext(DocsContext);
	const storyMeta = useOf("meta");

	const packageJson = storyMeta?.csfFile?.meta?.parameters?.packageJson ?? {};
	const metadata = storyMeta?.csfFile?.meta?.parameters?.metadata ?? {};

	if (!packageJson?.name) return;
	if (!metadata?.modifiers) return;

	return (
		<ResetWrapper>
			<LinkableHeading id="modifiable-properties" size="m">
				<a aria-hidden="true" href="#modifiable-properties" tabIndex="-1" target="_self" onClick={() => {
					context.channel.emit(NAVIGATE_URL, "#modifiable-properties");
				}}></a>
				Modifiable custom properties
			</LinkableHeading>
			<Body>
				These are empty CSS custom property hooks available in this component
				that enable one-off customizations specific to a product implementation.
			</Body>
			<Table className="docblock-properties-table sb-unstyled spectrum-Table spectrum-Table--sizeL spectrum-Table--compact">
				<thead className="spectrum-Table-head">
					<tr>
						<th className="spectrum-Table-headCell">Property</th>
					</tr>
				</thead>
				<tbody className="spectrum-Table-body">
					{metadata?.modifiers.map((propertyName) => (
						<tr key={propertyName} className="spectrum-Table-row">
							<td className="spectrum-Table-cell">
								<Code backgroundColor={"transparent"} size="s">
									{propertyName}
								</Code>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</ResetWrapper>
	);
};
