import { styled } from "@storybook/theming";
import { fetchToken } from "./utilities";

export const Heading = styled.div(({
    theme,
    size = "m",
}) => {
    const fontSize = size === "s" ? 300 : size === "l" ? 700 : size === "xl" ? 900 : 500;
    return {
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.weight.bold,
        color: "inherit",
        fontSize: fetchToken(`font-size-${fontSize}`, 22),

        '> strong': {
            fontWeight: 900, // @todo: this uses "black" which isn't valid CSS
        },

        '> em': {
            fontStyle: fetchToken("heading-sans-serif-emphasized-font-style", "italic"),
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
        fontSize: fetchToken(`font-size-${fontSize}`, 16),
        '> strong': {
            fontWeight: 900, // @todo: this uses "black" which isn't valid CSS
        },
        '> em': {
            fontStyle: fetchToken("body-sans-serif-emphasized-font-style", "italic"),
        },
        ...props
    };
});
