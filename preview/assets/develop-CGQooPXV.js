import{j as e}from"./jsx-runtime-_09DdfSq.js";import{u as o}from"./index-CXGxovgH.js";import{ae as i}from"./index-BreQY16V.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";const r=""+new URL("spectrum_illustration_2x-mPTswyN0.png",import.meta.url).href;function t(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing"}),`
`,e.jsx("img",{src:r,style:{marginTop:"-20px",marginBottom:"20px"}}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(n.p,{children:["Welcome to the development and exploration environment for Spectrum CSS, driven by ",e.jsx(n.a,{href:"https://storybook.js.org",rel:"nofollow",children:"Storybook"}),", a React-driven development environment that allows for in-depth exploration of components as they are being built."]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsx(n.p,{children:"This guide is intended to get you up to speed on how we work within Storybook in the Spectrum CSS project. It will cover the following topics:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#architecture",children:"Architecture"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#writing-stories",children:"Writing stories"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#templates",children:"Templates"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#testing-stories",children:"Testing stories"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#changelog",children:"Changelog"})}),`
`]}),`
`,e.jsxs(n.p,{children:["For more general information about how to contribute to the Spectrum CSS project, take a look at our ",e.jsx(n.a,{href:"https://github.com/adobe/spectrum-css/blob/main/.github/CONTRIBUTING.md",rel:"nofollow",children:"contribution guidelines on GitHub"}),"."]}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nodejs.org/en/",rel:"nofollow",children:"Node.js"})," (v20 or later)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://yarnpkg.com/getting-started/install",rel:"nofollow",children:"Yarn"})}),`
`]}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"assets"}),": This folder contains static, unprocessed assets for inclusion in the stories."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"decorators"}),": These assets interpret the arguments provided and apply the necessary stylesheet or markup changes to reflect the desired update."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deprecated"}),": One folder for each deprecated component we are still including in our documentation but that does not live in the repository any longer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"guides"}),": Manually written documentation for the project."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"types"}),": There are 3 primary assets stored in this folder: shared global properties (such as rootClass, customStyles, id, etc.), global controls (contexts available in the top toolbar), and states (optional shared properties to be imported into a story for consistency). Each file is surfaced to the ",e.jsx(n.code,{children:"types/index.js"})," file for ease of importing."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Storybook files:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"main.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"manager.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"preview.js"})}),`
`]}),`
`,e.jsx(n.p,{children:"Packages can be loaded using their package name rather than a relative pathing approach, i.e., in a story:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
`})}),`
`,e.jsx(n.p,{children:"or in a template.js file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
`})}),`
`,e.jsxs(n.p,{children:["CSS for other components can be loaded in a story using the package name (rather than the directory path), i.e. ",e.jsx(n.code,{children:"@spectrum-css/toast"})," vs. ",e.jsx(n.code,{children:"../toast/index.css"}),". The local version of the package is used regardless but the bundler settings will resolve the pathing for you."]}),`
`,e.jsx(n.p,{children:"For template development, we leverage lit and it's utilities to create dynamic HTML that responds to user configurations provided by the Storybook controls. This allows us to create a single source of truth for the component's mark-up and to ensure that the component is being used as intended."}),`
`,e.jsx(n.p,{children:"To import the utilities you need, use the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
`})}),`
`,e.jsxs(n.p,{children:["Images can be loaded directly from the ",e.jsx(n.code,{children:"assets/images"})," directory at the root of the project."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<img class="spectrum-Asset-image" src="example-ava.png" />
`})}),`
`,e.jsxs(n.p,{children:["CSS assets will be run through their respective postcss configurations. This means you do not need to load dist assets into a story. It is recommended you load ",e.jsx(n.strong,{children:"local development assets"})," as they will be correctly compiled on the fly. i.e., in your template.js:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import "../index.css";
`})}),`
`,e.jsxs(n.p,{children:["We are leaning on Storybook's ",e.jsx(n.code,{children:"@storybook/web-components-vite"})," framework configuration as our stories rely on lit for dynamic attribute assignment."]}),`
`,e.jsx(n.h3,{id:"add-ons",children:"Add-ons"}),`
`,e.jsx(n.p,{children:"We rely on the following add-ons to power our implementation:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/storybookjs/storybook/tree/main/addons/essentials",rel:"nofollow",children:"@storybook/addon-essentials"}),": configureJSX, transcludeMarkdown (MDX) specifically turned on"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/storybookjs/storybook/tree/next/code/addons/a11y",rel:"nofollow",children:"@storybook/addon-a11y"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@whitespace/storybook-addon-html",rel:"nofollow",children:"@whitespace/storybook-addon-html"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.js.org/addons/@etchteam/storybook-addon-status",rel:"nofollow",children:"@etchteam/storybook-addon-status"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/storybookjs/storybook/tree/next/code/addons/interactions",rel:"nofollow",children:"@storybook/addon-interactions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.chromatic.com/docs/visual-testing-addon/",rel:"nofollow",children:"@chromaui/addon-visual-tests"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.js.org/addons/@storybook/addon-designs/",rel:"nofollow",children:"@storybook/addon-designs"})}),`
`]}),`
`,e.jsx(n.h2,{id:"writing-stories",children:"Writing stories"}),`
`,e.jsxs(n.p,{children:["The easiest way to begin writing stories for a new component is to run ",e.jsx(n.code,{children:"yarn new story"}),". This generator will prompt you to select your component folder name from a pre-populated list. You can search the list by starting to type. Press enter to select. This is not necessary if you used the ",e.jsx(n.code,{children:"yarn new component"})," command to generate your package as it will have populated the templates for you already."]}),`
`,e.jsx(n.p,{children:"Inside the component's package folder, you should now see a stories folder containing 2 assets:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<foldername>.stories.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"template.js"})}),`
`]}),`
`,e.jsxs(n.p,{children:["You are welcome to add as many separate ",e.jsx(n.code,{children:"stories.js"})," files as you like in this directory as they will all be loaded automatically when storybook starts."]}),`
`,e.jsxs(n.p,{children:["To learn about writing stories, start with the ",e.jsx(n.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"How to write stories"})," documentation."]}),`
`,e.jsx(n.h3,{id:"metadata",children:"Metadata"}),`
`,e.jsxs(n.p,{children:["Each story definition should contain a title and description. The component key is required and would normally map to the name of the web component's tag but as we do not output web components, use the root class name for the element without the ",e.jsx(n.code,{children:"spectrum-"})," prefix."]}),`
`,e.jsx(n.h3,{id:"argtypes",children:"argTypes"}),`
`,e.jsx(n.p,{children:'Arg types define the UI available to the Storybook visitor. Hereforeto called "controls".'}),`
`,e.jsxs(n.p,{children:["You can import state-based argTypes that are commonly used from the ",e.jsx(n.code,{children:"types/states.js"}),". States available in this file include (but are not limited to):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isOpen"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isValid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isInvalid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isFocused"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isKeyboardFocused"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isHovered"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isLoading"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isDisabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isDragged"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isRequired"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isReadOnly"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"isChecked"})}),`
`]}),`
`,e.jsx(n.p,{children:"To import shared types into your story, use the following syntax:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  isActive,
  isDisabled,
  isFocused,
  isHovered,
  isSelected,
} from "@spectrum-css/preview/types";

export default {
  argTypes: {
    isDisabled,
    isSelected,
    isHovered,
    isFocused,
    isActive,
  },
  args: {
    isDisabled: false,
    isSelected: false,
    isHovered: false,
    isFocused: false,
    isActive: false,
  },
};
`})}),`
`,e.jsx(n.p,{children:"Be sure to define a default value for these argTypes in your args section."}),`
`,e.jsx(n.h4,{id:"categories",children:"Categories"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"State"}),": represents the environment in which the component exists - is it focused? open? sticky? These are more commonly applied by interaction than statically sourced from the DOM. This category can be used to automatically populate visual regression tests when used with the ",e.jsx(n.code,{children:"withStatesWrapper"})," decorator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Variant"}),": these controls represent design variants available for a component; often these will be denoted by classes that include a ",e.jsx(n.code,{children:"--"})," separator. i.e., ",e.jsx(n.code,{children:"--quiet"})," or ",e.jsx(n.code,{children:"--multiline"}),". These can be boolean, select dropdowns, radio buttons, etc. depending on the design rules for their application. This category can be used to automatically populate visual regression tests when used with the ",e.jsx(n.code,{children:"withVariantsWrapper"})," decorator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Content"}),": not specific to the rendering of this component. Text or subcomponents to be rendered inside that region but that is not opinionated. Often this would be represented by a slot in a web component. i.e., labels, content to render inside a dialog or modal."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Advanced"}),": these are controls that match the requirements of a component category but are not recommended to be used; styles designed for specific edge-cases or inoptimal use. i.e., ",e.jsx(n.code,{children:"staticWhite"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{id:"icon-dropdowns",children:"Icon dropdowns"}),`
`,e.jsx(n.p,{children:"You can load a dropdown list of the available workflow icons by adding the following code to your stories.js page:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`argTypes: {
  iconName: {
    ...IconStories?.argTypes?.iconName ?? {},
    if: false,
  },
},
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Note:"})," In your story, be sure to include the ",e.jsx(n.code,{children:"if: false"})," override otherwise the control will only show up if you have a ",e.jsx(n.code,{children:"setName"})," arg and it is equal to ",e.jsx(n.code,{children:"workflow"}),"."]}),`
`,e.jsx(n.p,{children:"Want to load UI icons instead? Use the following variable import instead:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`argTypes: {
  iconName: {
    ...IconStories?.argTypes?.uiIconName ?? {},
    if: false,
  },
},
`})}),`
`,e.jsx(n.h4,{id:"commonly-used-argtypes",children:"Commonly used argTypes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`image: {
  name: "Image",
  type: { name: "string" },
  table: {
    type: { summary: "string" },
    category: "Component",
  },
  control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
},
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`isEmphasized: {
  name: "Emphasized styling",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Component",
  },
  control: "boolean",
},
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`isQuiet: {
  name: "Quiet styling",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Component",
  },
  control: "boolean",
},
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`isFixed: {
  name: "Fixed position",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Advanced",
  },
  control: "boolean",
},
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`label: {
  name: "Label",
  type: { name: "string" },
  table: {
    type: { summary: "string" },
    category: "Content",
  },
  control: { type: "text" },
},
`})}),`
`,e.jsx(n.h2,{id:"templates",children:"Templates"}),`
`,e.jsx(n.p,{children:"The goal of the template files is to create a definition for this component to enforce and demonstrate the allowed semantics and required classNames and settings to achieve the desired output (based on the user's selected controls)."}),`
`,e.jsx(n.p,{children:"To this end, be sure to include only the mark-up required and relevant for the named component being presented. Any nested component markup that might be required should be imported and rendered through that component's own template file. i.e.,"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
`})}),`
`,e.jsx(n.p,{children:"Be sure to rename the import to something other than Template as the main export in your template.js file will have the same name."}),`
`,e.jsxs(n.p,{children:["Every component will have access to a few empty, global inputs to provide consistency in naming for common requirements. You can find the full list in ",e.jsx(n.code,{children:".storybook/types/args.js"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rootClass"}),": this holds the top-level className of the component and should match the value set in the ",e.jsx(n.code,{children:"args"})," of the stories.js file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"}),": allows users to pass in a custom ID value and should be added to the top-level wrapper of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"testId"}),": used to render a ",e.jsx(n.code,{children:"data-test-id"})," value to be used by a testing suite to target specific elements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"customClasses"})," (array): allows passing in additional classes to be applied to the top-level component. This is necessary for nesting templates inside others while allowing the parent to assign context to the child."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"customStyles"})," (object): allows passing in a style map object to provide custom inline CSS at the top-level of a component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"testId"}),": used to render a ",e.jsx(n.code,{children:"data-test-id"})," value to be used by a testing suite to target specific elements."]}),`
`]}),`
`,e.jsx(n.p,{children:"The rest of the variables provided in the Template function's input object will map to the argTypes you defined in your stories.js file."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args",rel:"nofollow",children:"More on component templates"})}),`
`]}),`
`,e.jsxs(n.p,{children:["To help in making a dynamic mark-up template, you can leverage any of the ",e.jsx(n.a,{href:"https://lit.dev/docs/templates/directives/",rel:"nofollow",children:"directives"})," available in the ",e.jsx(n.code,{children:"lit"})," package. Our most commonly used ones are: ",e.jsx(n.code,{children:"html"}),", ",e.jsx(n.code,{children:"classMap"}),", ",e.jsx(n.code,{children:"ifDefined"}),"."]}),`
`,e.jsx(n.p,{children:"All return values for Template functions should be outputting TemplateResults. Said another way, all mark-up needs to be wrapped in the html template literal."}),`
`,e.jsx(n.h3,{id:"full-example",children:"Full example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = (
  {
    rootClass = "spectrum-Tag",
    size = "m",
    iconName,
    avatarUrl,
    label,
    isSelected = false,
    isEmphasized = false,
    isDisabled = false,
    isInvalid = false,
    hasClearButton = false,
    id,
    customClasses = [],
    customStyles = {},
  },
  context,
) => {
  return html\`
    <div
      class=\${classMap({
        [rootClass]: true,
        [\`\${rootClass}--size\${size?.toUpperCase()}\`]:
          typeof size !== "undefined",
        "is-emphasized": isEmphasized,
        "is-disabled": isDisabled,
        "is-invalid": isInvalid,
        "is-selected": isSelected,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=\${styleMap(customStyles)}
      id=\${ifDefined(id)}
      tabindex="0"
    >
      \${when(avatarUrl && !iconName, () =>
        Avatar(
          {
            image: avatarUrl,
            size: "50",
          },
          context,
        ),
      )} \${when(iconName, () =>
        Icon(
          {
            iconName,
            customClasses: [\`\${rootClass}s-itemIcon\`],
          },
          context,
        ),
      )}
      <span
        class=\${classMap({
          [\`\${rootClass}s-itemLabel\`]: true,
        })}
        >\${label}</span
      >
      \${when(hasClearButton, () =>
        ClearButton(
          {
            customClasses: [\`\${rootClass}-clearButton\`],
            onclick: (evt) => {
              const el = evt.target;
              if (!el) return;

              const wrapper = el.closest(rootClass);
              wrapper.parentNode.removeChild(wrapper);
            },
          },
          context,
        ),
      )}
    </div>
  \`;
};
`})}),`
`,e.jsx(n.h2,{id:"testing-stories",children:"Testing stories"}),`
`,e.jsxs(n.p,{children:["Now that your stories are written, we need to add them to our visual regression suite. We are using ",e.jsx(n.a,{href:"https://www.chromatic.com",rel:"nofollow",children:"chromatic"}),", a tool that is designed to work with Storybook."]}),`
`,e.jsxs(n.p,{children:["To optimize snapshot usage, we organize our stories into groups when rendered inside the Chromatic environment. This is done by adding an ",e.jsx(n.code,{children:"window.isChromatic()"})," check and creating groups of stories (note: do not import the ",e.jsx(n.code,{children:"isChromatic"})," function directly, there is added functionality we've included when sourcing it from",e.jsx(n.code,{children:"window"}),"). See example below:"]}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"template.js"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export const AccordionGroup = (
  { customStyles = {}, ...args } = {},
  context = {},
) => {
  return html\`
    \${Template(args, context)} \${Template(
      {
        ...args,
        customStyles: {
          ...customStyles,
          "max-inline-size": "300px",
          display: !window.isChromatic() ? "none" : customStyles.display,
        },
      },
      context,
    )} \${Template(
      {
        ...args,
        disableAll: true,
        customStyles: {
          ...customStyles,
          display: !window.isChromatic() ? "none" : customStyles.display,
        },
      },
      context,
    )}
  \`;
};
`})}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"*.stories.js"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export const Default = AccordionGroup.bind({});
Default.args = {};
`})}),`
`,e.jsx(n.p,{children:'Ideally you should have a single story file for each component with multiple variations and states represented in the "Kitchen sink" grouping that only renders in Chromatic. To preview the groups locally, there is a global toolbar setting with a beaker icon called "Show testing preview" that will activate the Chromatic view.'}),`
`,e.jsxs(n.p,{children:["In the event that you don't want a story to be tested in Chromatic, you can use the ",e.jsx(n.code,{children:"disabledSnapshot"})," paramter:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`Default.parameters = {
  chromatic: { disableSnapshot: true },
};
`})}),`
`,e.jsx(n.p,{children:"If a story should not be shown in the sidebar because it is only for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Documentation purposes, you can use the tags:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`Default.tags = ["autodocs", "!dev"];
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Visual regression testing, you can use the following tags:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`Default.tags = ["test", "!autodocs", "!dev"];
`})}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"!"})," symbol is used to negate the tag. This is useful for filtering stories in the sidebar. The ",e.jsx(n.code,{children:"autodocs"})," tag is used to denote stories that are only for documentation purposes and should not be included in the visual regression suite. The ",e.jsx(n.code,{children:"dev"})," tag is used to denote stories that should be included in the storybook sidebar. The ",e.jsx(n.code,{children:"test"})," tag is used to denote stories that should be included in the visual regression suite."]}),`
`,e.jsx(n.h3,{id:"getting-started-1",children:"Getting started"}),`
`,e.jsxs(n.p,{children:["Check that you have a local ",e.jsx(n.code,{children:".env"})," file in your ",e.jsx(n.code,{children:".storybook"})," folder with a ",e.jsx(n.code,{children:"CHROMATIC_PROJECT_TOKEN"})," variable defined. Get this token from the project maintainer. You should not be committing this ",e.jsx(n.code,{children:".env"})," file to the repo as it contains sensitive login information."]}),`
`,e.jsx(n.p,{children:"From the root of the project, there are 2 commands available for you to run:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn test"}),": run chromatic as defined in the preview package"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn test:scope"}),": leveraging the ",e.jsx(n.code,{children:"--only-story-names <storypath>"})," flag under the covers.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This command only runs a single story or a subset of stories by their name(s). Use the title from the story file's default export as the story path, followed by the desired story names. For example, if selecting all stories from a single story file with a title of ",e.jsx(n.code,{children:"Example/Button"}),", this would be ",e.jsx(n.code,{children:"Example/Button/*"}),". Globs are supported via ",e.jsx(n.a,{href:"https://www.npmjs.com/package/picomatch#globbing-features",rel:"nofollow",children:"picomatch"}),". (",e.jsx(n.em,{children:"note:"})," the ",e.jsx(n.code,{children:"--only-story-names"})," flag can be specified multiple times.)"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can pass any supported ",e.jsx(n.a,{href:"https://www.chromatic.com/docs/cli#chromatic-options",rel:"nofollow",children:"chromatic flag"})," to these commands. Note we are not using TurboSnap so commands specific to that tooling will not work in our project."]}),`
`,e.jsxs(n.p,{children:["Runs will generate a JUnit XML file with build results (",e.jsx(n.code,{children:"chromatic-build-{buildNumber}.xml"}),"). This file should not be committed and is part of the .gitignore rules."]}),`
`,e.jsxs(n.p,{children:["Running without publishing to Chromatic? Add the ",e.jsx(n.code,{children:"--dry-run"})," flag. Need more information to debug a run? Try the ",e.jsx(n.code,{children:"--diagnostics"})," flag (writes process context information to ",e.jsx(n.code,{children:"chromatic-diagnostics.json"}),")."]})]})}function j(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{j as default};
