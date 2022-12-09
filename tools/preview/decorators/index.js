import { useEffect } from '@storybook/client-api';

// Apply reduce motion on demand
import slowDown from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"reduce-motion"}}!css-loader!./reduceMotion.css';

// Global properties added to each component;
//      determines what stylesheets are loaded
export * from './contextsWrapper.js';

// Rendered as controls; these properties are assigned
//      to the document root element
export const withTextDirectionWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const textDirection = parameters.textDirection ?? globals.textDirection;

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
    const reducedMotion = parameters.reducedMotion ?? globals.reducedMotion;

    useEffect(() => {
        if (reducedMotion) slowDown.use();
        else slowDown.unuse();
    }, [reducedMotion]);

    return StoryFn(context);
};

export const withLanguageWrapper = (StoryFn, context) => {
    const { parameters, globals } = context;
    const lang = parameters.lang ?? globals.lang;

    useEffect(() => {
        if (lang) document.documentElement.lang = globals.lang;
    }, [lang]);

    return StoryFn(context);
};
