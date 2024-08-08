import { ResetWrapper } from "@storybook/components";
import { styled } from "@storybook/theming";
import { capitalize } from "lodash-es";
import React from "react";
import { Body, Heading } from "./Typography";
import { fetchToken } from "./utilities.js";

export const SwatchGroupLabel = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	align-self: flex-start;
	justify-content: center;
	text-wrap: nowrap;
	inline-size: max-content;
	block-size: ${props => props.size ?? 32}px;
	color: ${props => fetchToken("neutral-subdued-content-color-default", props.theme.defaultText, props)};
`;

export const SwatchSet = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2px;
	color: ${props => fetchToken("neutral-subdued-content-color-default", props.theme.defaultText, props)};
`;

export const Swatch = styled.div`
	position: relative;
	inline-size: ${props => props.size ?? 32}px;
	block-size: ${props => props.size ?? 32}px;
	outline: none;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		inline-size: 100%;
		block-size: 100%;
		content: "";
		opacity: 1;
		border-radius: ${props => props.theme.appBorderRadius ?? fetchToken("corner-radius-100", 4, props)}px;
		${props => props.background && `background: ${props.background};`}
	}
`;

export const SwatchColors = styled.div`
	display: inline-flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: ${props => props.size > 0 ? (props.size * 0.2) : 8}px;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const SwatchGroup = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const List = styled.div`
	display: grid;
	gap: 24px;
	grid-template-columns: 1fr auto;
	grid-template-rows: auto;
	align-items: center;
	justify-content: center;
`;

/**
 * A single color row your styleguide showing title, subtitle and one or more colors, used
 * as a child of `ColorPalette`.
 */
export const ColorItem = ({ title, color, values = [], ...props }) => {
	if (!color) return;
	if (!values.length) return (
		<>
			<SwatchGroupLabel className="swatch-group-label">
				<Heading size="s">{title ?? capitalize(color)}</Heading>
			</SwatchGroupLabel>
			<Body>No values provided for color {color}</Body>
		</>
	);

	return (
		<>
			<SwatchGroupLabel className="swatch-group-label">
				<Heading size="s">{title ?? capitalize(color)}</Heading>
			</SwatchGroupLabel>
			<SwatchGroup className="swatch-group" {...props}>
				<SwatchColors className="swatch-colors" size={60}>
					{values.map((value) => {
						const resolved = fetchToken(`${color}-${value}`, value ?? color);
						return (
							<SwatchSet className="swatch-set">
								<Body className="swatch-label" size="s">
									{value}
								</Body>
								<Swatch
									className="swatch"
									title={`--spectrum-${color}-${value} / ${resolved}`}
									background={resolved}
									size={60}
									onClick={() => navigator.clipboard.writeText(`--spectrum-${color}-${value}`)}
								/>
							</SwatchSet>
						);
					})}
				</SwatchColors>
			</SwatchGroup>
		</>
	);
};

/**
 * Styleguide documentation for colors, including names, captions, and color swatches,
 * all specified as `ColorItem` children of this wrapper component.
 */
export const ColorPalette = ({ children, ...props }) => {
	return (
		<ResetWrapper>
			<List {...props} className="docblock-colorpalette sb-unstyled">
				{children}
			</List>
		</ResetWrapper>
	);
};

export default ColorPalette;
