import { DocsContext } from "@storybook/blocks";
import { styled, ThemeProvider } from "@storybook/theming";
import React, { useContext } from "react";

import "@spectrum-css/tokens/dist/index.css";

const Container = styled.section`
    color: var(--spectrum-neutral-content-color-default);
    background-color: var(--spectrum-background-layer-1-color);
    display: ${props => props.display ?? "flex" };
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
    const globals = context?.store?.userGlobals?.globals ?? {};

    // Fetch the current global color theme from the context store
    const theme = {
        ...globals,
        color: color ?? globals.color ?? "light",
        scale: scale ?? globals.scale ?? "medium",
    };

    return (
        <ThemeProvider theme={theme}>
            <Container {...props} className={`spectrum spectrum--${theme.color} spectrum--${theme.scale}`}>
                {children}
            </Container>
        </ThemeProvider>
    );
};
