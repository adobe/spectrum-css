import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";

import "@spectrum-css/colorhandle/index-base.css";

export const Template = ({
    rootClass = "spectrum-ColorHandle",
    customClasses = [],
    isDisabled = false,
    isFocused = false,
    colorHandleStyle = {
        "--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
    },
    ...globals
}) => {
    const checkerboardContent = html`<div class="${rootClass}-inner"></div>`;

    return html` ${OpacityCheckerboard({
        ...globals,
        componentOnly: true,
        customClasses: [
            `${rootClass}`,
            ...(!isDisabled && isFocused ? ["is-focused"] : []),
            ...(isDisabled ? ["is-disabled"] : []),
            ...customClasses,
        ],
        content: checkerboardContent,
        checkerBoardStyles: colorHandleStyle,
    })}`;
};
