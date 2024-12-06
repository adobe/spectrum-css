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
    });
  }

  return hasEntries(cssprops.customProperties) ? (
    <PropertiesTable {...cssprops} inAddonPanel={true} />
  ) : (
    <NoCustomPropertiesWarning />
  );
};
