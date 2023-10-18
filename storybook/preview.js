import isChromatic from "chromatic/isChromatic";

import {
    withContextWrapper,
    withLanguageWrapper,
    withReducedMotionWrapper,
    withTextDirectionWrapper,
} from "./decorators.js";

import { withActions } from "@storybook/addon-actions/decorator";
import { setConsoleOptions } from "@storybook/addon-console";

import DocumentationTemplate from "./templates/Documentation.mdx";

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
    panelExclude: [...panelExclude, /deprecated/],
    // panelInclude: [],
    log: "🔵 [log]",
    warn: "🟡 [warn]",
    error: "🔴 [error]",
});

import "@spectrum-css/typography";

/* --- LEGACY EXPRESS TOKENS --- */
import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/expressvars/dist/spectrum-global.css";
import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";

/* --- LEGACY TOKENS --- */
import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/vars/dist/spectrum-global.css";
import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-light.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

/* --- MODERN TOKENS --- */
import "@spectrum-css/tokens/dist/index.css";

import "./storybook-stories.css";
import "./storybook-stories.js";

// Rendered as controls; these properties are assigned
//      to the document root element
export const globalTypes = {
    textDirection: {
        title: "Text direction",
        description: "Direction of the content flow",
        showName: true,
        defaultValue: "ltr",
        toolbar: {
            items: [
                { value: "ltr", title: "LTR", right: "left to right", icon: "arrowrightalt" },
                { value: "rtl", title: "RTL", right: "right to left", icon: "arrowleftalt" },
            ],
            dynamicTitle: true,
        },
    },
    lang: {
        title: "Language",
        showName: true,
        icon: "globe",
        description: "Language of the content",
        defaultValue: "en-US",
        toolbar: {
            items: [
                { value: "en-US", title: "🇺🇸", right: "English (US)" },
                { value: "ja", title: "🇯🇵", right: "Japanese" },
                { value: "ko", title: "🇰🇷", right: "한국어" },
                { value: "zh", title: "🇨🇳", right: "中文" },
            ],
            dynamicTitle: true,
        },
    },
    scale: {
        title: "Platform scale",
        description: "Controls the platform scale of the component.",
        defaultValue: "medium",
        showName: false,
        toolbar: {
            items: [
                { value: "medium", title: "Medium", right: "default", icon: "browser" },
                { value: "large", title: "Large", icon: "mobile" },
            ],
        },
    },
    // @todo https://jira.corp.adobe.com/browse/CSS-314
    reducedMotion: {
        title: "Reduce motion",
        description: "Reduce animation and transitions",
        defaultValue: false,
        toolbar: {
            items: [
                { value: false, title: "Motion", right: "default", icon: "play" },
                { value: true, title: "Reduced motion", icon: "stop" },
            ],
        },
    },
    context: {
        title: "Theme",
        description: "Variations of the Spectrum theme.",
        defaultValue: "spectrum",
        toolbar: {
            items: [
                { value: "spectrum", title: "Spectrum" },
                { value: "express", title: "Express" },
            ],
            dynamicTitle: true,
        },
    },
    color: {
        title: "Color context",
        description: "Color contexts in which components can be rendered.",
        defaultValue: "light",
        toolbar: {
            items: [
                { value: "light", title: "Light" },
                { value: "dark", title: "Dark" },
                { value: "darkest", title: "Darkest" },
            ],
            dynamicTitle: true,
        },
    },
};

export const argTypes = {
    /* None of these should show up in the args table but are necessary for rendering the templates */
    rootClass: {
        name: "Class name",
        type: { name: "string", required: true },
        table: { disable: true },
        control: "text",
    },
    customClasses: {
        name: "Custom classes",
        type: { name: "string", required: false },
        table: { disable: true },
        control: "object",
    },
    id: {
        name: "Element ID",
        type: { name: "string", required: false },
        table: { disable: true },
        control: "text",
    },
    testId: {
        name: "Test ID",
        type: { name: "string", required: false },
        table: { disable: true },
        control: "text",
    },
};

export const args = {
    customClasses: [],
};

/** @type import('@storybook/types').StorybookParameters & import('@storybook/types').API_Layout */
export const parameters = {
    layout: "padded",
    showNav: true,
    showTabs: true,
    showPanel: true,
    panelPosition: "bottom",
    showToolbar: true,
    isFullscreen: false,
    //👇 Defines a list of viewport widths for a single story to be captured in Chromatic.
    chromatic: isChromatic()
        ? {
              // viewports: [320, 1200],
              // forcedColors: 'active',
              // prefersReducedMotion: 'reduce',
          }
        : {},
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        sort: "requiredFirst",
    },
    html: {
        root: "#root-inner",
        removeEmptyComments: true,
        removeComments: /lit/,
        prettier: {
            tabWidth: 4,
            useTabs: false,
            htmlWhitespaceSensitivity: "strict",
        },
        highlighter: {
            wrapLines: false,
        },
    },
    docs: {
        page: DocumentationTemplate,
        story: {
            inline: true,
            iframeHeight: "400px",
        },
        source: {
            type: "dynamic",
            language: "html",
            format: "html",
        },
    },
    status: {
        statuses: {
            migrated: {
                background: "#f0f0f0",
                color: "#444",
                description: "Migrated to the latest tokens.",
            },
        },
    },
};

export const decorators = [
    withTextDirectionWrapper,
    withLanguageWrapper,
    withReducedMotionWrapper,
    withContextWrapper,
    withActions,
];

export default {
    globalTypes,
    argTypes,
    args,
    parameters,
    decorators,
};
