import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import isChromatic from "chromatic/isChromatic";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

const PARAM_KEY = "variants";
/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withVariantsWrapper = makeDecorator({
  name: "withVariantsWrapper",
  parameterName: PARAM_KEY,
  wrapper: (StoryFn, context, settings) => {
    /** @type import('@storybook/types').Addon_StoryContext<import('@storybook/web-components').WebComponentsFramework> */
    const { argTypes = {} } = context;

    /** @type import('@storybook/types').Addon_WrapperSettings */
    const { parameters = {} } = settings;

    /**
     * @todo should this return the required conditions for the variant to be shown?
     *
     * @description Check if the condition is met; if met, return false; if not met, return true
     * @param {Object} condition - The details of the if condition
     * @param {object} currentArgs - All the current arguments for the story
     * @returns {boolean} - True if the condition is not met, false if the condition is met
     **/
    const fetchRequiredValues = (condition, currentArgs = {}) => {
      // No condition, so return true
      if (typeof condition === "undefined") return true;

      let hasTargetValue = true;
      let targetValue;
      // A condition can be keyed to a specific argument or a global variable
      let targetKey;

      if (Object.keys(condition).includes("arg")) {
        targetKey = condition.arg;

        if (typeof targetKey !== "undefined") {
          if (Object.keys(currentArgs).includes(targetKey)) {
            targetValue = currentArgs[targetKey];
          } else if (Object.keys(context.args).includes(targetKey)) {
            targetValue = context.args[targetKey];
          }
        }
      } else if (Object.keys(condition).includes("global")) {
        targetKey = condition.global;

        if (
          typeof targetKey !== "undefined" &&
          Object.keys(context.globals).includes(targetKey)
        ) {
          targetValue = context.globals[targetKey];
        }
      }

      // If the target key is not defined, return true
      if (typeof targetKey === "undefined") {
        console.log("No target key found in condition", condition);
        return true;
      }

      // If the target key is not defined, return true
      if (typeof targetValue === "undefined") {
        console.log("No value found for", targetKey);
        hasTargetValue = false;
      }

      console.log(
        "Checking condition",
        condition,
        "with value",
        targetValue,
        "for key",
        targetKey
      );

	  // These check if the conditions have already been met and return true if they have
      if (Object.keys(condition).includes("eq") && targetValue === Boolean(condition.eq)) {
		return true;
	  } else if (Object.keys(condition).includes("neq") && targetValue !== Boolean(condition.neq)) {
		return true;
	  } else if (Object.keys(condition).includes("truthy") && hasTargetValue && Boolean(condition.truthy) === Boolean(targetValue)) {
		return true;
	  } else if (Object.keys(condition).includes("exists") && ((Boolean(condition.exists) === true && hasTargetValue) || (Boolean(condition.exists) === false && !hasTargetValue))) {
        return true;
	  }

      // If none of the conditions have been met, return what the value(s) should be for the condition to be met
      // { [targetKey]: condition.eq } or { [targetKey]: condition.neq }
      if (Object.keys(condition).includes("eq"))
        return { [targetKey]: condition.eq };
      // Not equals is more complex; need to return a value from the options that does not match the condition
      if (Object.keys(condition).includes("neq")) {
        if (Array.isArray(argTypes[targetKey].options)) {
          return {
            [targetKey]: argTypes[targetKey].options.find(
              (opt) => opt !== condition.neq
            ),
          };
        }

        return { [targetKey]: condition.neq };
      }
      if (Object.keys(condition).includes("truthy"))
        return { [targetKey]: !condition.truthy };
      if (Object.keys(condition).includes("exists")) {
        if (Boolean(condition.exists) === true) {
          // If the target key has options, return the first option as the value
          if (Array.isArray(argTypes[targetKey].options)) {
            return { [targetKey]: argTypes[targetKey].options[0] };
          }
        } else {
          return { [targetKey]: undefined };
        }
      }

      // Returns false if the conditions cannot be met
      return;
    };

    const isTestingPreview = window.isChromatic() && !isChromatic();
    const isVRT = window.isChromatic() && isChromatic();

    // Only show variants in a testing preview or in VRT mode
    if (!isTestingPreview && !isVRT) return StoryFn(context);

    const variants = [];

    /* Create an array of variants to iterate over in the render */
    variants.push({
      name: "Default",
      args: {},
    });

    // Iterate over all the argTypes to find the ones that are in the Variant category
    Object.entries(argTypes).forEach(([key, details = {}]) => {
      // If the parameter has the key value set to false, skip this variant
      if (Object.keys(parameters).includes(key) && parameters[key] === false)
        return;

      // Collect the relevant details from the arg definition
      const title = details.name ?? details.title ?? key;
      const category = details.table?.category;
      const hasOptions =
        Array.isArray(details.options) && details.options.length > 0;
      const control =
        details.control?.type?.summary ??
        details.control?.type ??
        details.control?.type?.name;
      let type = details.table?.type?.summary ?? control;
      const defaultValue =
        details.table?.defaultValue?.summary ?? details.defaultValue;
      const conditions = details.if;
      // If the control is a check or inline-check, create a variant for each combination of two options
      const buildCombinations =
        (control &&
          ["check", "inline-check"].some(
            (allowedType) => control === allowedType
          )) ||
        false;

      // Only process args that have a category of "Variant"
      if (typeof category === "undefined" || category !== "Variant") return;

      if (!type) {
        console.log("No type found for", key);
        console.log(details);

        // If no type is found, default to string
        type = "string";
      }

      // console.log("Processing", key, "with type", type, "and control", control);
      // If there are options, create a variant for each
      if (hasOptions) {
        details.options.forEach((opt, idx, options) => {
          // If this is the default value; skip it
          if (typeof defaultValue !== "undefined" && defaultValue === opt)
            return;

          console.log(key);
          const requiredValues = fetchRequiredValues(conditions, {
            [key]: opt,
          });

          if (typeof requiredValues !== "undefined") {
            const additionalArgs =
              typeof requiredValues === "object" ? requiredValues : {};
            console.log(requiredValues, additionalArgs);
            variants.push({
              name: `${details.name} ${opt}`,
              args: {
                ...additionalArgs,
                [key]: opt,
              },
            });
          }

          if (buildCombinations) {
            if (idx === options.length - 1) return;
            if (options.length < 2) return;

            console.log(key);
            const requiredValues = fetchRequiredValues(conditions, {
              [key]: opt,
              [key]: options[(idx + 1) % options.length],
            });

            if (typeof requiredValues !== "undefined") {
              const additionalArgs =
                typeof requiredValues === "object" ? requiredValues : {};
              console.log(requiredValues, additionalArgs);

              variants.push({
                name: `${details.name} ${opt} and ${
                  options[(idx + 1) % options.length]
                }`,
                args: {
                  ...additionalArgs,
                  [key]: opt,
                  [key]: options[(idx + 1) % options.length],
                },
              });
            }
          }
        });

        return;
      }

      if (
        type === "boolean" &&
        fetchRequiredValues(conditions, { [key]: true })
      ) {
        variants.push({
          name: title,
          args: {
            [key]: true,
          },
        });

        return;
      }

      console.log("Cannot generate variants for", key, "with type", type);
    });

    // If there are no variants, return the story with no wrappers
    if (!variants.length) return StoryFn(context);

    variants.forEach((variant) => {
      console.log(variant.name, {
        ...context.args,
        ...variant.args,
      });
    });

    return html` <div
      data-variant-container
      style=${styleMap({
        display: "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        gap: "24px",
      })}
    >
      ${variants.map(({ name, args }) => {
        if (variants.length === 1 && name === "Default") {
          return StoryFn({
            ...context,
            args: {
              ...context.args,
              ...args,
            },
          });
        }

        return html` <div>
          ${when(name, () =>
            Typography({
              semantics: "heading",
              size: "s",
              content: [name],
            })
          )}
          <div
            style=${styleMap({
              border: "1px solid var(--spectrum-gray-800)",
              "border-radius": "4px",
              overflow: "auto",
            })}
          >
            ${StoryFn({
              ...context,
              args: {
                ...context.args,
                ...args,
              },
            })}
          </div>
        </div>`;
      })}
    </div>`;
  },
});
