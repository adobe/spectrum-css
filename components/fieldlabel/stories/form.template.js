import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Form",
	labelsAbove = false,
	customClasses = [],
	customStyles = {},
	id,
	items = [],
}, context) => html`
    <form
        class=${classMap({
            [rootClass]: true,
            [`${rootClass}--labelsAbove`]: labelsAbove,
            ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
        id=${ifDefined(id)}
        style=${ifDefined(styleMap(customStyles))}
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
                        alignment: labelsAbove ? undefined : "left",
                    }, context))}
                    <div class=${classMap({
                        [`${rootClass}-itemField`]: true,
                    })}>
                        ${typeof content === "function" ? content({ ...item }, context) : content}
                    </div>
                </div>
            `;
        })}
    </form>
`;

export const FormGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : "contents"
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"align-items": "flex-start",
		"gap": "8px",
	})}>
		${[{}, {
            heading: "Labels above",
            labelsAbove: true,
        }].map(({ heading, ...item }) => html`
			<div>
				${Typography({
					semantics: "heading",
					size: "s",
					content: [heading],
				}, context)}
                <div style=${styleMap({
                    "border": "1px solid var(--spectrum-gray-200)",
                    "border-radius": "4px",
                    "padding": "12px",
                    "margin-block-end": "32px",
                })}>
                    ${Template({
                        ...args,
                        ...item,
                    }, context)}
                </div>
			</div>
		`)}
	</div>
`;
