import spectrum from "@adobe/spectrum-tokens/dist/json/variables.json";
import { styled } from "@storybook/theming";

export const Heading = styled.div(({
    theme,
    size = "m",
    scale = "desktop",
}) => {
    const fontSize = size === "s" ? 300 : size === "l" ? 700 : size === "xl" ? 900 : 500;
    return {
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.weight.bold,
        color: "inherit",
        fontSize: spectrum?.[`font-size-${fontSize}`]?.sets?.[scale]?.value ?? 22,

        '> strong': {
            fontWeight: 900, // @todo: this uses "black" which isn't valid CSS
        },

        '> em': {
            fontStyle: spectrum?.["heading-sans-serif-emphasized-font-style"]?.value ?? "italic",
        }
    };
});

export const Body = styled.div(({
    theme,
    size = "m",
    scale = "desktop",
    ...props
}) => {
    const fontSize = size === "s" ? 100 : size === "l" ? 300 : size === "xl" ? 400 : 200;
    return {
        fontFamily: theme.typography.fontFamily,
        fontWeight: "normal",
        color: "inherit",
        fontSize: spectrum?.[`font-size-${fontSize}`]?.sets?.[scale]?.value ?? 16,
        '> strong': {
            fontWeight: 900, // @todo: this uses "black" which isn't valid CSS
        },
        '> em': {
            fontStyle: spectrum?.["body-sans-serif-emphasized-font-style"]?.value ?? "italic",
        },
        ...props
    };
});
