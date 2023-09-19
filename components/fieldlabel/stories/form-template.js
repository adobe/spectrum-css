import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Template as Stepper } from "@spectrum-css/stepper/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Form",
    labelsAbove,
	customClasses = [],
	id,
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	return html`
		<form
			class=${classMap({
				[rootClass]: true,
                [`${rootClass}--labelsAbove`]: labelsAbove,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
		>
            <div class="spectrum-Form-item">
                ${FieldLabel({
                    label: 'Company Title',
                    forInput: 'form-example-company',
                    alignment: 'left',
                })}
                <div class="spectrum-Form-itemField">
                    ${TextField({  
                        multiline: true,
                        placeholder: 'Enter your company name',
                        name: 'field',
                        id: 'form-example-company',
                    })}
                </div>
            </div>
            <div class="spectrum-Form-item">
                ${FieldLabel({
                    label: 'Email Address',
                    forInput: 'form-example-email',
                    alignment: labelsAbove ? undefined : 'left',
                })}
                <div class="spectrum-Form-itemField">
                    ${TextField({  
                        placeholder: 'Enter your email address',
                        name: 'email',
                        type: 'email',
                        id: 'form-example-email',
                    })}
                </div>
            </div>
            <div class="spectrum-Form-item">
                ${FieldLabel({
                    label: 'Country',
                    forInput: 'form-example-country',
                    alignment: labelsAbove ? undefined : 'left',
                })}
                <div class="spectrum-Form-itemField">
                    ${Picker({
                        placeholder: 'Select a Country',
                        name: 'country',
                        id: 'form-example-country',
                    })}
                </div>
            </div>
            <div class="spectrum-Form-item">
                ${FieldLabel({
                    label: 'Amount',
                    forInput: 'form-example-amount',
                    alignment: labelsAbove ? undefined : 'left',
                })}
                <div class="spectrum-Form-itemField">
                    ${Stepper({
                        id: 'form-example-amount'
                    })}
                </div>
            </div>
		</form>
	`;
};
