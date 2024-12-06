import { Accordion, Disclosure, DisclosurePanel, DisclosureTitle } from "@react-spectrum/s2";
import { useParameter } from "@storybook/manager-api";
// import { isEqual } from "es-toolkit";
import React, { useState } from "react";
import { PARAM_KEY } from "../constants";
import { extract, orderBySelector } from "../tools/extractor";
import { hasEntries } from "../tools/utilities";
import { Element } from "./Element";
import { PanelMessage } from "./PanelMessage";

/**
 * Used by the Storybook Addons Panel
 * @type {import("react").FC} CssPropsPanel
 */
export const CssPropsPanel = ({
	// api,
}) => {
	// console.log(api);

	const [customProperties, updateCustomProperties] = useState({});

	// @todo, do we need a way to flag if styles were updated here
	/** @type {import("../constants").CssPropsParameter} */
	const cssprops = useParameter(PARAM_KEY, {
		styles: undefined,
		mode: "full",
		customProperties: {},
	});

	// We can't continue without styles or customProperties
	if (!cssprops || !cssprops?.styles) {
		return (
			<PanelMessage variant="notice" heading="No custom properties found">
				This story is not configured with the custom properties add-on.
			</PanelMessage>
		);
	}

	// @todo where is the best place to attach these values
	/* Attempt to extract custom properties from the styles provided */
	const extractedCustomProperties = extract(cssprops.styles, {
		mode: "full",
		ignoreSelectors: [".spectrum", /\.spectrum--([a-z]+)/],
		ignoreCustomProperties: [/^--highcontrast/, /^--mod/],
	});

	// Check if the extracted custom properties are different from the current custom properties
	// if (!isEqual(extractedCustomProperties, customProperties)) {
		updateCustomProperties(extractedCustomProperties);
	// }

	if (!hasEntries(customProperties)) {
		return (
			<PanelMessage variant="notice" heading="No custom properties found">
				This story is not configured with the custom properties add-on.
			</PanelMessage>
		);
	}

	// CssProps has data keyed on custom property name, not by selector
	// so we need to restructure the data to be keyed by selector
	// to match the data structure of the Item
	const csspropsBySelector = orderBySelector(customProperties);
	console.log(csspropsBySelector);

	return (
		<Accordion allowsMultipleExpanded={true} styles={{ margin: "1rem", width: "100%" }}>
			{Object.entries(csspropsBySelector).map(([selector, props]) => (
				<Disclosure id={selector} key={selector}>
					<DisclosureTitle>{selector}</DisclosureTitle>
					<DisclosurePanel>
						<Element key={selector} selector={selector} props={props} />
					</DisclosurePanel>
				</Disclosure>
			))}
		</Accordion>
	);
};
