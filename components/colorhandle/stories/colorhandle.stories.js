// Import the component markup template
import { Template } from "./template";

/**
 * The Color Handle component is used with ColorArea, ColorSlider and ColorWheel as the color selector
 */
export default {
    title: "Components/Color handle",
    component: "Colorhandle",
    argTypes: {
        isDisabled: {
            name: "Disabled",
            type: { name: "boolean" },
            table: {
                type: { summary: "boolean" },
                category: "State",
            },
            control: "boolean",
        },
        isFocused: {
            name: "Focused",
            type: { name: "boolean" },
            table: {
                type: { summary: "boolean" },
                category: "State",
            },
            control: "boolean",
            if: { arg: "isDisabled", truthy: false },
        },
    },
    args: {
        rootClass: "spectrum-ColorHandle",
        isDisabled: false,
        isFocused: false,
    },
    parameters: {
        actions: {
            handles: [],
        },
        status: {
            type: process.env.MIGRATED_PACKAGES.includes("colorhandle") ? "migrated" : undefined,
        },
    },
};

export const Default = Template.bind({});
Default.args = {};
