import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";

import { Template as ActionButton } from "../../actionbutton/stories/template.js";
import { Template as Button } from "../../button/stories/template.js";
import { Template as SplitButton } from "../../splitbutton/stories/template.js";
import { Template as Textfield } from "../../textfield/stories/template.js";

import "../index-base.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
    rootClass = "spectrum-Pagination",
    size = "m",
    customClasses = [],
    variant,
    items,
    ...globals
}) => {
    if (variant === "explicit") {
        return html`
            <nav
                class=${classMap({
                    [rootClass]: true,
                    [`${rootClass}--explicit`]: true,
                    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
                })}
            >
                ${ActionButton({
                    size,
                    isQuiet: true,
                    iconName: "ChevronLeft",
                    customClasses: [`${rootClass}-prevButton`],
                })}
                ${Textfield({
                    size,
                    value: "1",
                    customClasses: [`${rootClass}-textfield`],
                })}
                <span class="${rootClass}-counter">of 89 pages</span>
                ${ActionButton({
                    size,
                    isQuiet: true,
                    iconName: "ChevronRight",
                    customClasses: [`${rootClass}-nextButton`],
                })}
            </nav>
        `;
    } else if (variant == "button") {
        return SplitButton({
            position: "left",
            variant: "accent",
            label: "Next",
            iconName: "ChevronLeft100",
            labelIconName: "ChevronRight100",
            customFirstButtonClasses: ["spectrum-Pagination-prevButton"],
            customLastButtonClasses: ["spectrum-Pagination-nextButton"],
        });
    }
    return html`
        <nav
            class=${classMap({
                [rootClass]: true,
                [`${rootClass}--${variant}`]: typeof variant !== "undefined",
                ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
            })}
        >
            ${Button({
                ...globals,
                size,
                variant: "primary",
                treatment: "outline",
                label: "Prev",
                customClasses: [`${rootClass}-prevButton`],
            })}
            ${repeat(
                items,
                (item) => item.id,
                (item) => {
                    if (typeof item === "object") {
                        return ActionButton({
                            ...globals,
                            ...item,
                            size,
                            isQuiet: true,
                        });
                    } else return item;
                },
            )}
            ${Button({
                ...globals,
                size,
                variant: "primary",
                treatment: "outline",
                label: "Next",
                customClasses: [`${rootClass}-nextButton`],
            })}
        </nav>
    `;
};
