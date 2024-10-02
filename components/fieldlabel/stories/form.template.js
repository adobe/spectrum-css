import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Form",
	labelPosition = "top",
	fieldLabelAlignment = "left",
	customClasses = [],
	customStyles = {},
	id = getRandomId("form"),
	items = [],
}, context) => html`
    <form
        class=${classMap({
            [rootClass]: true,
            [`${rootClass}--labelsAbove`]: labelPosition === "top",
            ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
        id=${ifDefined(id)}
        style=${styleMap(customStyles)}
    >
        ${repeat(items, (item) => item.id, ({ label, content, ...item }) => {
            if (!content) return;

            return html`
                <div class=${classMap({
                    [`${rootClass}-item`]: true,
                })}>
                    ${when(label, () => FieldLabel({
                        label,
                        forInput: item.id,
                        alignment: labelPosition === "side" ? fieldLabelAlignment : undefined,
                    }, context))}
                    <div class=${classMap({
                        [`${rootClass}-itemField`]: true,
                    })}>
                        ${renderContent(content, { context })}
                    </div>
                </div>
            `;
        })}
    </form>
`;
