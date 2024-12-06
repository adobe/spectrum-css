import { Flex, View } from "@adobe/react-spectrum";
import { useParameter } from "@storybook/manager-api";
import { PARAM_KEY } from "../constants";
import { extract } from "../tools/extractor";
import { hasEntries } from "../tools/utilities";
import { NoCustomPropertiesWarning } from "./NoCustomPropertiesWarning";
import { PropertiesTable } from "./PropertiesTable";

/**
 * Used by the Storybook Addons Panel
 * @type {import("react").FC} CssPropsPanel
 */
export const CssPropsPanel = () => {
	/** @type {import("../constants").CssPropsParameter} */
	const cssprops = useParameter(PARAM_KEY, {
		styles: undefined,
		mode: "full",
		customProperties: {},
	});

	if (cssprops?.styles) {
		/* Attempt to extract custom properties from the styles provided */
		cssprops.customProperties = extract(cssprops.styles, {
			mode: "full",
			ignoreSelectors: [".spectrum", /\.spectrum--([a-z]+)/],
			ignoreCustomProperties: [/^--highcontrast/, /^--mod/],
		});

    console.log(cssprops.customProperties);
	}

	// CssProps has data keyed on custom property name, not by selector
	// so we need to restructure the data to be keyed by selector
	// to match the data structure of the Item
	const csspropsBySelector =
		Object.keys(cssprops?.customProperties ?? {}).reduce((acc, key, _, props) => {
			const value = props[key];
			console.log('csspropsBySelector', key, value);
			const [selector, prop, media] = key.split("/");
			const selectorProps = acc[selector] || {};
			const mediaProps = selectorProps[media] || {};
			mediaProps[prop] = value;
			selectorProps[media] = mediaProps;
			acc[selector] = selectorProps;
			return acc;
		}, {});

	return hasEntries(cssprops.customProperties) ? (
		<Flex
      direction="column"
       alignItems="center"
			height="size-6000"
			gap="size-100"
		>
			<View>
				{Object.entries(csspropsBySelector).map(([selector, props]) => (
					<Element key={selector} selector={selector} props={props} />
				))}
			</View>
			<View>
				<h3>Full data table</h3>
				<PropertiesTable {...cssprops} inAddonPanel={true} />
			</View>
		</Flex>
	) : (
		<NoCustomPropertiesWarning />
	);
};
