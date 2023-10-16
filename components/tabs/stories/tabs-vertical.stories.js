// Import the component markup template
import { argTypes, verticalIconOnlyProps, verticalProps, verticalWithIconsProps } from "./index.js";
import { Template } from "./template";

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
export default {
    title: "Components/Tabs/Vertical",
    component: "Tabs",
    argTypes: argTypes,
    args: {
        rootClass: "spectrum-Tabs",
        size: "m",
        orientation: "vertical",
        isQuiet: false,
        isEmphasized: false,
        isCompact: false,
    },
    parameters: {
        actions: {
            handles: [],
        },
        status: {
            type: process.env.MIGRATED_PACKAGES.includes("tabs") ? "migrated" : undefined,
        },
    },
};

export const Default = Template.bind({});
Default.args = verticalProps;

export const WithIcon = Template.bind({});
WithIcon.args = verticalWithIconsProps;

export const iconOnly = Template.bind({});
iconOnly.args = verticalIconOnlyProps;
