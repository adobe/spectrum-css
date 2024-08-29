import { DocsContext } from "@storybook/blocks";
import { styled, ThemeProvider } from "@storybook/theming";
import React, { useContext } from "react";
import { fetchToken } from "./utilities.js";

const Container = styled.section`
    color: ${props => fetchToken("neutral-content-color-default", props)};
    background-color: ${props => fetchToken("background-layer-1-color", props)};
    display: flex;
    padding-inline: 48px 24px;
    padding-block: 60px;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    border-radius: 16px;
`;

/**
 * A container that wraps the children in a themed context
 * inherited from the storybook global context. This is used
 * to create a ThemeProvider that can be used to style components
 * with the correct color and scale.
 */
export const ThemeContainer = ({ color, scale, children, ...props }) => {
    const context = DocsContext && useContext(DocsContext);
    // Fetch the current global color theme from the context store
    const activeContext = context?.store?.globals?.globals ?? {
        color: "light",
        scale: "medium",
    };

    // Allow the user to override the global contexts with the props
    if (color) activeContext.color = color;
    if (scale) activeContext.scale = scale;

    return (
        <ThemeProvider theme={activeContext}>
            <Container {...props}>
                {children}
            </Container>
        </ThemeProvider>
    );
};
