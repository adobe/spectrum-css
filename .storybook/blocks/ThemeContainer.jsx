import spectrum from "@adobe/spectrum-tokens/dist/json/variables.json";
import { styled } from "@storybook/theming";

export const ThemeContainer = styled.section(({
    theme,
}) => ({
	color: spectrum?.["neutral-content-color-default"]?.sets?.[theme]?.value,
	backgroundColor: spectrum?.["background-layer-1-color"]?.sets?.[theme]?.value,
    display: "flex",
    paddingInline: 80,
    paddingBlock: 60,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 60,
    borderRadius: 16,
}));
