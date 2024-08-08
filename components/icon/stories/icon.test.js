import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { Template } from "./template.js";
import { uiIconSizes, uiIconsWithDirections } from "./utilities.js";

/**
 * Chromatic VRT template that displays multiple icons to cover various options.
 */
const TestTemplate = (args, context) => {
	return html`
        <div
            style=${styleMap({
                "display": "flex",
                "flex-direction": "column",
                "gap": "32px",
            })}
        >
            <div
                style=${styleMap({
                    "display": "flex",
                    "flex-direction": "column",
                    "gap": "16px",
                })}
            >
                ${[
                {
                    setName: "workflow",
                    iconName: "Alert",
                    fill: "var(--spectrum-negative-content-color-default)",
                },
                {
                    setName: "workflow",
                    iconName: "Hand",
                },
                {
                    setName: "workflow",
                    iconName: "Help",
                },
                {
                    setName: "workflow",
                    iconName: "ArrowLeft",
                },
                {
                    setName: "workflow",
                    iconName: "ArrowRight",
                },
                {
                    setName: "workflow",
                    iconName: "ChevronDown",
                }
                ].map((row_args) => html`
                    <div
                        style=${styleMap({
                            "display": "grid",
                            "grid-template-columns": "repeat(6, 1fr)",
                            "column-gap": "24px",
                            "row-gap": "48px",
                            "place-items": "center",
                        })}
                    >
                        ${["xs","s","m","l","xl","xxl"].map(
                            (size) => Template({ ...args, ...row_args, size })
                        )}
                    </div>`
                )}
            </div>
            <div
                style=${styleMap({
                    "display": "flex",
                    "flex-direction": "column",
                    "gap": "16px",
                })}
            >
                ${uiIconsWithDirections.map(iconName => html`
                    <div
                        style=${styleMap({
                            "display": "grid",
                            "grid-template-columns": "repeat(8, 1fr)",
                            "column-gap": "24px",
                            "row-gap": "48px",
                        })}
                    >
                        ${uiIconSizes[iconName.replace(/(Left|Right|Up|Down)$/, "")]?.map((iconSize) =>
                            Template({ ...args, setName: "ui", iconName: iconName + iconSize }, context)
                        )}
                        ${when(uiIconSizes[iconName]?.length == 0, () =>
                            Template({ ...args, setName: "ui", iconName }, context)
                        )}
                    </div>`
                )}
            </div>
        </div>
    `;
};

export const IconGroup = Variants({
	Template,
	TestTemplate,
	withSizes: false,
	testData: [{}]
});
