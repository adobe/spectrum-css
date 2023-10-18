import { useArgs } from "@storybook/client-api";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { when } from "lit-html/directives/when.js";

import { Template as Button } from "../../button/stories/template.js";
import { Template as ButtonGroup } from "../../buttongroup/stories/template.js";
import { Template as Divider } from "../../divider/stories/template.js";
import { Template as Icon } from "../../icon/stories/template.js";
import { Template as Modal } from "../../modal/stories/template.js";
import { Template as Underlay } from "../../underlay/stories/template.js";

import "../index-base.css";

export const Template = ({
    rootClass = "spectrum-AlertDialog",
    isOpen = true,
    // showModal = false,
    heading = true,
    content = true,
    customClasses = [],
    buttons,
    variant,
    // onclick,
    icon = false,
    id,
    ...globals
}) => {
    const [, updateArgs] = useArgs();

    const Dialog = html`
        <div
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--${variant}`]: true,
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
            id=${ifDefined(id)}
            role="dialog"
            tabindex="-1"
            aria-modal="true"
            aria-labelledby="dialog_label"
        >
            <div class="${rootClass}-grid">
                <div class="spectrum-AlertDialog-header">
                    <h1 class="${rootClass}-heading" id="dialog_label">${heading}</h1>
                    ${when(icon, () =>
                        Icon({
                            size: "m",
                            iconName: "Alert",
                            customClasses: [`${rootClass}-icon`],
                            ...globals,
                        }),
                    )}
                </div>
                ${Divider({
                    horizontal: true,
                    customClasses: [`${rootClass}-divider`],
                    ...globals,
                })}
                <section class="${rootClass}-content">${content}</section>
                ${ButtonGroup({
                    items: buttons,
                    onclick: () => {
                        updateArgs({ isOpen: !isOpen });
                    },
                })}
            </div>
        </div>
    `;

    return html`
        ${Underlay({
            ...globals,
            isOpen,
        })}
        ${Button({
            ...globals,
            size: "m",
            variant: "secondary",
            label: "Click to open Alert Dialog",
            treatment: "outline",
            customClasses: ["spectrum-CSSExample-overlayShowButton"],
            onclick: () => {
                updateArgs({ isOpen: !isOpen });
            },
        })}
        ${Modal({
            ...globals,
            isOpen,
            content: Dialog,
        })}
    `;
};
