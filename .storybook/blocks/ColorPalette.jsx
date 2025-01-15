import { ResetWrapper } from "@storybook/components";
import { capitalize } from "lodash-es";
import React from "react";
import { List } from "./Layouts.jsx";
import {
	Swatch,
	SwatchColors,
	SwatchGroup,
	SwatchGroupLabel,
	SwatchSet,
} from "./Swatches.jsx";
import { ThemeContainer } from "./ThemeContainer.jsx";
import { Body, Heading } from "./Typography.jsx";
import { fetchToken } from "./utilities.js";

/**
 * A single color row your styleguide showing title, subtitle and one or more colors, used
 * as a child of `ColorPalette`.
 */
export const ColorItem = ({ title, color, size = 60, values = [], ...props }) => {
	if (!color) return;
	if (!values.length) return (
		<>
			{title && <SwatchGroupLabel className="swatch-group-label">
				<Heading size="s">{title ?? capitalize(color)}</Heading>
			</SwatchGroupLabel>}
			<Body>No values provided for color {color}</Body>
		</>
	);

	return (
		<>
			{title && <SwatchGroupLabel className="swatch-group-label">
				<Heading size="s">{title ?? capitalize(color)}</Heading>
			</SwatchGroupLabel>}
			<SwatchGroup className="swatch-group" {...props}>
				<SwatchColors className="swatch-colors" size={60}>
					{values.map((value) => {
						const resolved = fetchToken(`${color}-${value}`, value ?? color);
						return (
							<SwatchSet className="swatch-set" key={`${color}-${value}`}>
								<Body className="swatch-label" size="s">
									{value}
								</Body>
								<Swatch
									className="swatch"
									title={`--spectrum-${color}-${value} / ${resolved}`}
									background={resolved}
									size={size}
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
export const ColorPalette = ({ color, children, ...props }) => {
	return (
		<ResetWrapper>
			<ThemeContainer color={color} {...props}>
				<List className="docblock-colorpalette sb-unstyled">
					{children}
				</List>
			</ThemeContainer>
		</ResetWrapper>
	);
};

export default ColorPalette;
