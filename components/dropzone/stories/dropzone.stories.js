// Import the component markup template
import { Template } from "./template";

/**
 * DropZone
 */
export default {
    title: "Components/Drop zone",
    argTypes: {
        isDragged: {
            name: "Dragged",
            type: { name: "boolean" },
            table: {
                type: { summary: "boolean" },
                category: "State",
            },
            control: "boolean",
        },
        isFilled: {
            name: "Filled",
            type: { name: "boolean" },
            table: {
                type: { summary: "boolean" },
                category: "State",
            },
            control: "boolean",
            if: { arg: "isDragged", truthy: true },
        },
    },
    args: {
        rootClass: "spectrum-DropZone",
        isDragged: false,
        isFilled: false,
    },
    parameters: {
        actions: {
            handles: [],
        },
        status: {
            type: process.env.MIGRATED_PACKAGES.includes("dropzone") ? "migrated" : undefined,
        },
    },
};

export const Default = Template.bind({});
Default.args = {};

export const Dragged = Template.bind({});
Dragged.args = {
    isDragged: true,
};

export const FilledAndDragged = Template.bind({});
FilledAndDragged.args = {
    isDragged: true,
    isFilled: true,
};
