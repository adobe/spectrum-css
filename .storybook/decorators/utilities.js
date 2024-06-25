// import "@spectrum-css/typography/dist/index.css";
import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";
import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { kebabCase } from "lodash-es";

const Heading = ({
	type = "heading",
	content,
	size = "m",
	weight,
	customClasses = [],
}) => {
	const rootClass = type === "code" ? "spectrum-Code" : "spectrum-Heading";
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
      () => html`<a style=${styleMap({ "text-decoration": "none" })} name=${kebabCase(content)} href=${`#${kebabCase(content)}`}><h2 class=${classMap(derivedClasses)}>${content}</h2></a>`,
    )}
  `;
};

const Container = ({
	heading,
	content,
	type = "heading",
	level = 1,
	direction = "row",
	withBorder = true,
	containerStyles = {
		"display": "flex",
		"flex-direction": "column",
		"gap": "6px",
	},
	wrapperStyles = {},
}) => {
	let headingConfig = { size: "l" };
	let spacingStyles = {
		"gap": direction === "row" ? "120px" : "32px",
	};
	if (level === 2) {
		headingConfig = { size: "m", weight: "light" };
		spacingStyles = {
			"gap": direction === "row" ? "60px" : "32px",
		};
	}
	else if (level === 3) {
		headingConfig = { size: "s", weight: "light" };
		spacingStyles = { "gap": "12px" };
	}

	return html`
    <div style=${styleMap(containerStyles)}>
      ${when(heading, () => Heading({ ...headingConfig, type, content: heading }))}
      <div
        style=${styleMap({
          "display": "flex",
          "flex-direction": direction,
          "align-items": "flex-start",
          "padding": withBorder ? "6px" : "0",
          "border": withBorder ? "1px solid var(--spectrum-gray-200)" : "none",
          "border-radius": withBorder ? "4px" : "0",
          ...spacingStyles,
          ...wrapperStyles,
        })}
      >
        ${renderContent(content)}
      </div>
    </div>
  `;
};

export const States = ({
	Template,
	direction = "row",
	stateData = [],
	...args
}, context) => Container({
	level: 2,
	direction,
	withBorder: false,
	heading: undefined,
	content: stateData.map(({
		testHeading = direction === "row" ? html`&nbsp;` : undefined,
		...item
	}) =>
		Container({
			heading: stateData.some(({ testHeading }) => testHeading) ? testHeading : undefined,
			level: 3,
			withBorder: false,
			content: Template({ ...args, ...item }, context),
		})
	)
});

export const Sizes = ({ Template, direction = "column", ...args }, context) => {
	const sizes = context?.argTypes?.size?.options ?? [];
	if (!sizes.length) return nothing;

	const content = sizes.map((size) => Container({
		heading: `[size=${size}]`,
		type: "code",
		level: 3,
		withBorder: false,
		content: Template({ ...args, size }, context)
	}));

	return Container({
		heading: "Sizing",
		level: 2,
		direction,
		content,
	});
};

export const Variants = ({
	Template,
	// Test data defaults to an empty array so that we at least get the base component
	testData = [{}],
	stateData = [],
	sizeDirection = "column",
	stateDirection = "row",
	overlayIsOpen = false,
}) => {
	if (!Template) {
		throw new Error("Template is required");
	}

	return (args, context) => {
		const isOpenInitial = args.isOpen;
		// If a component is hidden due to the testing preview modes, force the isOpen property to be false
		if (Object.keys(args).includes("isOpen")) {
			args.isOpen = window.isChromatic() ? false : isOpenInitial;
		}


		return html`
      <!-- Underlay should be rendered only once in a testing environment -->
      ${Underlay({ isOpen: overlayIsOpen }, context)}
      <!-- Simple, clean template preview for non-testing grid views -->
      <div
        style=${styleMap({
          "display": window.isChromatic() ? "none" : "contents",
        })}
      >
        ${Template(args, context)}
      </div>

      <!-- Start testing grid markup -->
      <div
        style=${styleMap({
          "display": window.isChromatic() ? "flex" : "none",
          "flex-direction": "column",
          "gap": "60px",
        })}
      >
        <!-- Test data can include: a custom template, descriptive heading, and container styles -->
        <!-- Tests can also opt out of rendering the test in each available state -->
        ${testData.map(
          ({
            Template: customTemplate,
            testHeading,
            customContainerStyles = {},
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
            if (customTemplate) {
              Template = customTemplate;
            }

            // If a test heading is not provided, use the heading from the component data
            if (typeof testHeading === "undefined") {
              testHeading = item.heading;
            }

            // Show the border if we are rendering the test in multiple states or if there are several
            // tests in the grid, this helps distinguish between tests
            const showBorder = withStates || testData.length > 1;

            const data = { ...args, ...item };
            if (Object.keys(data).includes("isOpen")) {
              if (!window.isChromatic()) data.isOpen = false;
              else if (typeof item.isOpen === "undefined") {
                data.isOpen = isOpenInitial;
              }
            }

            return Container({
              heading: testHeading,
              level: withStates ? 1 : 2,
              withBorder: showBorder,
              containerStyles: {
                // the z-index is necessary to ensure elements always appear above the overlay
                "z-index": "1",
              },
              wrapperStyles: customContainerStyles,
              content: html`
                ${when(withStates, () =>
                  States({
                      Template,
                      stateData,
                      direction: stateDirection,
                      ...data
                    }, context),
                  () => Template(data, context)
                )}
              `,
            });
          }
        )}

        <!-- If sizing exists for the component, it will render all sizes for testing -->
        ${Sizes({ Template, direction: sizeDirection, ...args }, context)}
      </div>
    `;
	};
};

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
