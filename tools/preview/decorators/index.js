import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';

// Apply reduce motion on demand
const slowDown = html`
    <style>
        :root {
            --spectrum-global-animation-duration-100: 0ms;
            --spectrum-global-animation-duration-200: 0ms;
            --spectrum-global-animation-duration-300: 0ms;
            --spectrum-global-animation-duration-400: 0ms;
            --spectrum-global-animation-duration-500: 0ms;
            --spectrum-global-animation-duration-600: 0ms;
            --spectrum-global-animation-duration-700: 0ms;
            --spectrum-global-animation-duration-800: 0ms;
            --spectrum-global-animation-duration-900: 0ms;
            --spectrum-global-animation-duration-1000: 0ms;
            --spectrum-global-animation-duration-2000: 0ms;
            --spectrum-global-animation-duration-4000: 0ms;
            --spectrum-coachmark-animation-indicator-ring-duration: 0ms;
        }
    </style>
`;

// Global properties added to each component;
//      determines what stylesheets are loaded
export * from './contextsWrapper.js';

// Rendered as controls; these properties are assigned
//      to the document root element
export const withTextDirectionWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const textDirection = parameters.textDirection || globals.textDirection;

    // Shortkeys for the global types
    document.addEventListener('keydown', (e) => {
        switch (e.key || e.keyCode) {
            case 'r':
                document.documentElement.dir = 'rtl';
                break;
            case 'n':
                document.documentElement.dir = 'ltr';
                break;
        }
    });

    useEffect(() => {
        if (textDirection) document.documentElement.dir = textDirection;
    }, [textDirection]);

    return StoryFn(context);
};

export const withReducedMotionWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const reducedMotion = parameters.reducedMotion || globals.reducedMotion;

    return html`
        ${reducedMotion ? slowDown : ''}
        ${StoryFn(context)}
    `;
};

export const withLanguageWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const lang = parameters.lang || globals.lang;

    useEffect(() => {
        if (lang) document.documentElement.lang = globals.lang;
    }, [lang]);

    return StoryFn(context);
};
