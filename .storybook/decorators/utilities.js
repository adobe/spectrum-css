import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

/**
 * Renders a heading or code block that identifies the test case and is ignored by the snapshots.
 * @param {Object} props
 * @param {string} props.type - The type of heading or code block to render.
 * @param {string} props.content - The content to render in the heading or code block.
 * @param {string} props.size - The size of the heading to render.
 * @param {string} props.weight - The weight of the heading to render.
 * @param {string[]} props.customClasses - Additional classes to apply to the heading or code block.
 */
const Heading = ({
	type = "heading",
	content,
	size = "m",
	weight,
	customClasses = [],
} = {}) => {
	const rootClass = type === "code" ? "spectrum-Code" : "spectrum-Detail";
	const derivedClasses = {
		[rootClass]: true,
		[`${rootClass}--size${size?.toUpperCase()}`]: true,
		[`${rootClass}--${weight}`]: type !== "code" && typeof weight !== "undefined",
		["chromatic-ignore"]: true,
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};
	return html`
    ${when(
      type === "code",
      () => html`<pre><code class=${classMap(derivedClasses)}>${content}</code></pre>`,
      () => html`<h2 class=${classMap(derivedClasses)} style="color:var(--spectrum-gray-600)">${content}</h2>`,
    )}
  `;
};

/**
 * Generates a container div with a heading and test content.
 * @param {Object} props
 * @param {string} props.heading - The heading to render above the content.
 * @param {string} props.content - The content to render in the container.
 * @param {string} props.type - The type of heading to render.
 * @param {number} props.level - The level of the heading to render.
 * @param {string} props.direction - The direction of the container content.
 * @param {boolean} props.withBorder - Whether to render a border around the container.
 * @param {Object} props.containerStyles - Additional styles to apply to the container.
 * @param {Object} props.wrapperStyles - Additional styles to apply to the content wrapper.
 */
const Container = ({
	heading,
	content,
	type = "heading",
	level = 1,
	direction = "row",
	withBorder = true,
	containerStyles = {},
	wrapperStyles = {},
} = {}) => {
	let headingConfig = { size: "l" };
	let gap = 40;

  if (level > 1) {
		headingConfig = { size: "s", weight: "light" };
  }

  const borderStyles = {};
  if (withBorder) {
    borderStyles["padding-inline"] = "12px";
    borderStyles["padding-block"] = "12px";
    borderStyles["border"] = "1px solid var(--spectrum-gray-200)";
    borderStyles["border-radius"] = "4px";
    gap = 80;
  }

	return html`
    <div
      data-outer-container
      style=${styleMap({
        "position": "relative",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "gap": heading && level > 1 ? `${parseInt(24 / level, 10)}px` : undefined,
        ...containerStyles
      })}
    >
      ${when(heading, () => Heading({
        ...headingConfig,
        type,
        content: heading
      }))}
      <div
        data-inner-container
        style=${styleMap({
          "flex-grow": "1",
          "position": "relative",
          "display": "flex",
          "flex-direction": direction,
          "flex-wrap": "wrap",
          "gap": `${parseInt(gap / level, 10)}px`,
          "align-items": heading && level > 1 ? "center" : undefined,
          "justify-content": heading && level > 1 ? "center" : "flex-start",
          ...borderStyles,
          ...wrapperStyles,
        })}
      >
        ${renderContent(content)}
      </div>
    </div>
  `;
};

/**
 * Iterates over provided state data and renders the template for each state in a testing grid.
 * @param {Object} props
 * @param {Function} props.Template - The template to render for each state.
 * @param {string} props.direction - The direction of the state content.
 * @param {Object[]} props.stateData - The data for each state to render.
 * @param {Object} props.containerStyles - Additional styles to apply to the container.
 * @param {Object} props.wrapperStyles - Additional styles to apply to the content wrapper.
 * @param {Object} props.args - The arguments to pass to the template.
 * @param {Object} context - The context to pass to the template.
 */
export const States = ({
	Template,
	direction = "row",
	stateData = [],
  containerStyles = {},
  wrapperStyles = {},
	...args
} = {}, context = {}) => {
  // If the state data is not an array, make it an array for easier processing
  if (!Array.isArray(stateData)) {
    stateData = [stateData];
  }

  // Return the state data inside a container element
  return Container({
    level: 2,
    direction,
    withBorder: false,
    heading: undefined,
    containerStyles,
    content: stateData.map(({
      testHeading = "Default",
      // Rename the input stateWrapperStyles to avoid confusion with the wrapperStyles prop
      wrapperStyles: stateWrapperStyles = {},
      ignore = [],
      include = [],
      ...item
    }) => {
      // If the test heading is not in the include list, skip rendering this state
      if (include.length && !include.includes(testHeading)) {
        return nothing;
      }

      // If the test heading is in the ignore list, skip rendering this state
      if (ignore.length && ignore.includes(testHeading)) {
        return nothing
      }

      return Container({
        heading: stateData.some(({ testHeading }) => testHeading) ? testHeading : "",
        level: 3,
        withBorder: false,
        wrapperStyles: {
          ...wrapperStyles,
          ...stateWrapperStyles,
        },
        content: Template({ ...args, ...item }, context),
      });
    })
  });
};

/**
 * Iterates over the sizes defined in the argTypes and renders the template for each size in a testing grid.
 * Data for each size is collected from the default args for the story this is bound to.
 * @param {Object} props
 * @param {Function} props.Template - The template to render for each state.
 * @param {Object} props.wrapperStyles - Additional styles to apply to the content wrapper.
 * @param {string} props.direction - The direction of the size content.
 * @param {Object} props.args - The arguments to pass to the template.
 * @param {Object} context - The context to pass to the template.
 */
export const Sizes = ({
  Template,
  wrapperStyles = {},
  direction = "row",
  ...args
} = {}, context = {}) => {
	const sizes = context?.argTypes?.size?.options ?? [];
	if (!sizes.length) return nothing;

	return Container({
		heading: "Sizing",
		level: 2,
		direction,
    wrapperStyles: {
      "align-items": "flex-start",
    },
		content: sizes.map((size) => Container({
      heading: {
        xxs: "Extra-extra-small",
        xs: "Extra-small",
        s: "Small",
        m: "Medium",
        l: "Large",
        xl: "Extra-large",
        xxl: "Extra-extra-large",
      }[size] ?? size,
      level: 2,
      withBorder: false,
      wrapperStyles,
      content: Template({ ...args, size }, context)
    })),
	});
};


/**
 * The entry point for rendering a testing grid for a component with multiple states and sizes.
 * @param {Object} props
 * @param {Function} props.Template - The template to render for each state and size.
 * @param {Function} props.TestTemplate - The template to render for each test case.
 * @param {Object[]} props.testData - The data for each test case to render.
 * @param {Object[]} props.stateData - The data for each state to render.
 * @param {string} props.sizeDirection - The direction of the size content.
 * @param {string} props.stateDirection - The direction of the state content.
 * @param {boolean} props.skipBorders - Whether to skip rendering borders around tests.
 * @param {boolean} props.withSizes - Whether to render sizes for the component.
 * @param {Object} props.containerStyles - Additional styles to apply to the container.
 * @param {Object} props.wrapperStyles - Additional styles to apply to the content wrapper.
 */
export const Variants = ({
	Template,
  TestTemplate,
	// Test data defaults to an empty array so that we at least get the base component
	testData = [{}],
	stateData = [],
	sizeDirection,
	stateDirection,
  skipBorders = false,
  withSizes = true,
  containerStyles = {},
  wrapperStyles = {},
} = {}) => {
	if (!Template) {
		throw new Error("Template is required");
	}

  // If no separate test template is provided, use the default template
  if (typeof TestTemplate === "undefined") {
    TestTemplate = Template;
  }

	return (args, context) => {
		return html`
      <!-- Simple, clean template preview for non-testing grid views -->
      <div
        style=${styleMap({
          "padding": "10px",
          ...wrapperStyles,
          "display": window.isChromatic() ? "none" : wrapperStyles.display,
        })}
        data-html-preview
      >
        ${Template(args, context)}
      </div>

      <!-- Start testing grid markup -->
      <div
        style=${styleMap({
          "inline-size": "fit-content",
          "padding": "10px",
          "display": window.isChromatic() ? "flex" : "none",
          "flex-direction": "column",
          "flex-wrap": "wrap",
          "align-items": "flex-start",
          "gap": "20px",
        })}
      >
        <!-- Test data can include: a custom template, descriptive heading, and container styles -->
        <!-- Tests can also opt out of rendering the test in each available state -->
        ${testData.map(
          ({
            Template: AltTemplate,
            testHeading,
            wrapperStyles: testWrapperStyles = {},
            withStates,
            // Capture any additional data to pass to the template
            ...item
          }) => {
            if (typeof withStates === "undefined") {
              withStates = stateData.length > 0;
            }

            if (stateData[0] && Object.keys(stateData[0]).length !== 0) {
              // Add a default value at the beginning of the array to represent the base state
              stateData.unshift({});
            }

            // If a custom template is provided, use it, otherwise use the default template
            if (typeof AltTemplate !== "undefined") TestTemplate = AltTemplate;

            // Show the border if we are rendering the test in multiple states or if there are several
            // tests in the grid, this helps distinguish between tests
            const withBorder = !skipBorders && (withStates || testData.length > 1);

            // Merge the test data with the args to pass to the template
            const data = { ...args, ...item };

            // If there are other test headings in the set, add "Default" to those missing a heading
            if (testData.some(({ testHeading }) => testHeading) && !testHeading) {
              testHeading = "Default";
            }

            const combinedStyles = {
              ...wrapperStyles,
              ...testWrapperStyles,
            };

            return Container({
              heading: testHeading,
              level: 1,
              withBorder,
              containerStyles: {
                // the z-index is necessary to ensure elements always appear above the overlay
                "z-index": "1",
                ...containerStyles,
              },
              // if the test has multiple states, pass the wrapper styles to that container, otherwise use it here
              wrapperStyles: withStates ? {} : combinedStyles,
              content: html`
                ${when(withStates, () =>
                  States({
                      Template: TestTemplate,
                      stateData,
                      direction: stateDirection,
                      wrapperStyles: combinedStyles,
                      ...data
                    }, context),
                  () => TestTemplate(data, context)
                )}
              `,
            });
          }
        )}

        <!-- If sizing exists for the component, it will render all sizes for testing -->
        ${when(withSizes, () => Sizes({ Template: TestTemplate, wrapperStyles, direction: sizeDirection, ...args }, context))}
      </div>
    `;
	};
};

/**
 * Renders content provided in an array (or in various formats) with optional callback for processing.
 * @param {Array|Object|Function|string} content - The content to render.
 * @param {Object} props
 * @param {Object} props.context - The context to pass to the callback.
 * @param {Object} props.args - The arguments to pass to the callback.
 * @param {Function} props.callback - The callback to process the content.
 * @returns {TemplateResult} The rendered content.
 */
export const renderContent = (content = [], {
	context = {},
	args = {},
	callback = (args, context) => {
		console.log(JSON.stringify(args, null, 2), JSON.stringify(context, null, 2));
		return nothing;
	}
} = {}) => {
	// If the content is not an array, make it an array for easier processing
	if (!Array.isArray(content)) {
		content = [content];
	}

	if (content.length === 0) return nothing;

	return html`
    ${content.map((c) => {
			/* If the content is an object (but not a lit object), we need to merge the object with the template */
			if (typeof c !== "string" && (typeof c === "object" && !c._$litType$)) {
				return callback({ ...args, ...c }, context);
			}

      if (typeof c === "function") {
        return c(args, context);
      }

      return c;
    })}
  `;
};

/**
 * Generates a random ID with a specified prefix.
 * @param {string} prefix - The prefix to use for the ID.
 * @returns {string} The generated ID.
 */
export const getRandomId = (prefix = "spectrum") => {
  return `${prefix}-${Math.random().toString(36).substring(2, 7)}`;
};
