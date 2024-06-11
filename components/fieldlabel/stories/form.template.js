import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Template as Stepper } from "@spectrum-css/stepper/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Form",
	labelsAbove = false,
	customClasses = [],
	customStyles = {},
	id,
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
        <div class="spectrum-Form-item">
            ${FieldLabel({
                label: "Company title",
                forInput: "form-example-company",
                alignment: labelsAbove ? undefined : "left",
            }, context)}
            <div class="spectrum-Form-itemField">
                ${TextField({
                    multiline: true,
                    name: "field",
                    id: "form-example-company",
                }, context)}
            </div>
        </div>
        <div class="spectrum-Form-item">
            ${FieldLabel({
                label: "Email address",
                forInput: "form-example-email",
                alignment: labelsAbove ? undefined : "left",
            }, context)}
            <div class="spectrum-Form-itemField">
                ${TextField({
                    name: "email",
                    type: "email",
                    id: "form-example-email",
                }, context)}
            </div>
        </div>
        <div class="spectrum-Form-item">
            ${FieldLabel({
                label: "Country",
                forInput: "form-example-country",
                alignment: labelsAbove ? undefined : "left",
            }, context)}
            <div class="spectrum-Form-itemField">
                ${Picker({
                    placeholder: "Select a country",
                    name: "country",
                    id: "form-example-country",
                }, context)}
            </div>
        </div>
        <div class="spectrum-Form-item">
            ${FieldLabel({
                label: "Amount",
                forInput: "form-example-amount-input",
                alignment: labelsAbove ? undefined : "left",
            }, context)}
            <div class="spectrum-Form-itemField">
                ${Stepper({
                    id: "form-example-amount"
                }, context)}
            </div>
        </div>
    </form>
`;
