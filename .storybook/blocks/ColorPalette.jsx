import spectrum from "@adobe/spectrum-tokens/dist/json/variables.json";
import { ResetWrapper } from "@storybook/components";
import { styled } from "@storybook/theming";
import { capitalize } from "lodash-es";
import React from "react";
import { Body, Heading } from "./Typography";

const SwatchGroupLabel = styled.div({
	alignSelf: "flex-start",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	textWrap: "nowrap",
	inlineSize: "max-content",
	blockSize: 80 + 16,
	marginBlockStart: 16,
});

const SwatchSet = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	gap: 2,
});

const Swatch = styled.div(({ theme, background }) => ({
	position: "relative",
	inlineSize: 80,
	blockSize: 80,
	outline: "none",

	"&::before": {
		borderRadius: theme.appBorderRadius ?? spectrum["corner-radius-100"].sets.desktop.value,
		position: "absolute",
		top: 0,
		left: 0,
		inlineSize: "100%",
		blockSize: "100%",
		background,
		content: `""`,
		opacity: 1,
	},
}));

const SwatchColors = styled.div({
	display: "inline-flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: 16,
	alignItems: "flex-start",
	justifyContent: "flex-start",
});

const SwatchGroup = styled.div({
	display: "flex",
	flexDirection: "column",
	flex: 1,
	position: "relative",
});

const Swatches = styled.div({
	flex: 1,
	display: "flex",
	flexDirection: "row",
	gap: 50,
});

const Item = styled.div({
	display: "grid",
	gap: 24,
	gridTemplateColumns: "1fr auto",
	gridTemplateRows: "auto",
	alignItems: "center",
	justifyContent: "center",
});

const List = styled.div(({ theme }) => ({
	display: "grid",
	gap: 24,
	gridTemplateColumns: "1fr auto",
	gridTemplateRows: "auto",
	alignItems: "center",
	justifyContent: "center",
}));

/**
 * A single color row your styleguide showing title, subtitle and one or more colors, used
 * as a child of `ColorPalette`.
 */
export const ColorItem = ({ title, color, theme = "light", values = [] }) => {
	return (
		<>
			<SwatchGroupLabel className="swatch-group-label">
				<Heading size="s">{title ?? capitalize(color)}</Heading>
			</SwatchGroupLabel>
			<SwatchGroup className="swatch-group">
				<SwatchColors className="swatch-colors">
					{values.map((value) => {
						const resolved = spectrum?.[`${color}-${value}`]?.sets?.[theme]?.value ?? color;
						return (
							<SwatchSet className="swatch-set">
								<Body className="swatch-label" size="s">
									{value}
								</Body>
								<Swatch className="swatch" title={color} background={resolved} />
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
