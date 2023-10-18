// Import the component markup template
import { Template } from "./template";

import { default as PickerStories } from "@spectrum-css/picker/stories/picker.stories.js";
const ignoreProps = ["rootClass", "position", "isRounded"];

/**
 * The Search within component is...
 */
export default {
    title: "Components/Search within",
    component: "SearchWithin",
    argTypes: {
        ...Object.entries(PickerStories.argTypes).reduce((acc, [key, value]) => {
            if (ignoreProps.includes(key)) return acc;
            if (["size"].includes(key))
                value.table = {
                    ...value.table,
                    category: "Shared settings",
                };
            else
                value.table = {
                    ...value.table,
                    category: "Picker settings",
                };
            return { ...acc, [key]: value };
        }, {}),
    },
    args: {
        rootClass: "spectrum-SearchWithin",
        isOpen: false,
        isQuiet: false,
        isDisabled: false,
        size: "m",
        label: "All",
    },
    parameters: {
        actions: {
            handles: [],
        },
        status: {
            type: process.env.MIGRATED_PACKAGES.includes("searchwithin") ? "migrated" : undefined,
        },
    },
};

export const Default = Template.bind({});
Default.args = {};
