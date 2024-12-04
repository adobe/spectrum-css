import "@spectrum-css/table/dist/index.css";

import { DocsContext, useOf } from "@storybook/blocks";
import { NAVIGATE_URL } from "@storybook/core-events";
import { styled } from "@storybook/theming";
import React, { useContext } from 'react';
import { ThemeContainer } from "./ThemeContainer.jsx";
import { Body, Code, LinkableHeading } from "./Typography.jsx";

export const Table = styled.table`
	--mod-table-cursor-row-default: auto;
	padding-block: 10px;
`;

/**
 * Displays the modifiable custom properties for a component based on the metadata provided in the story.
 * The story metadata object is imported from the "metadata.json" file in the component's directory.
 *
 * If the metadata object does not contain a "modifiers" array, this component will not render.
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
	if (!metadata?.modifiers || !metadata?.modifiers.length) return;

	return (
		<ThemeContainer color="light" display="contents">
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
		</ThemeContainer>
	);
};
