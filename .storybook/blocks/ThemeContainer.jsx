import { DocsContext } from "@storybook/blocks";
import { ThemeProvider } from "@storybook/theming";
import React, { useContext } from "react";
import { Container } from "./Layouts.jsx";

import tokenStyles from "@spectrum-css/tokens/dist/css/index.css?raw";

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
            <style>{tokenStyles}</style>
            <Container {...props} className={`spectrum spectrum--${theme.color} spectrum--${theme.scale}`}>
                {children}
            </Container>
        </ThemeProvider>
    );
};
