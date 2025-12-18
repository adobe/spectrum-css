import{j as e,M as i}from"./index-tRM9uqv9.js";import{u as o}from"./index-xEwWwqGq.js";import"./iframe-Dgaxd60Z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";const r=""+new URL("spectrum_illustration_2x-mPTswyN0.png",import.meta.url).href;function n(s){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing"}),`
`,e.jsx("img",{src:r,style:{marginTop:"-20px",marginBottom:"20px"}}),`
`,e.jsx(t.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(t.p,{children:["Welcome to the development and exploration environment for Spectrum CSS, driven by ",e.jsx(t.a,{href:"https://storybook.js.org",rel:"nofollow",children:"Storybook"}),", a React-driven development environment that allows for in-depth exploration of components as they are being built."]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsx(t.p,{children:"This guide is intended to get you up to speed on how we work within Storybook in the Spectrum CSS project. It will cover the following topics:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#architecture",children:"Architecture"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#writing-stories",children:"Writing stories"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#templates",children:"Templates"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#testing-stories",children:"Testing stories"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#changelog",children:"Changelog"})}),`
`]}),`
`,e.jsxs(t.p,{children:["For more general information about how to contribute to the Spectrum CSS project, take a look at our ",e.jsx(t.a,{href:"https://github.com/adobe/spectrum-css/blob/main/.github/CONTRIBUTING.md",rel:"nofollow",children:"contribution guidelines on GitHub"}),"."]}),`
`,e.jsx(t.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://nodejs.org/en/",rel:"nofollow",children:"Node.js"})," (v20 or later)"]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://yarnpkg.com/getting-started/install",rel:"nofollow",children:"Yarn"})}),`
`]}),`
`,e.jsx(t.h2,{id:"component-architecture",children:"Component architecture"}),`
`,e.jsx(t.p,{children:"Each component has the following files:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"index.css"})," - The source file for all styles related to the component. This contains all selectors and css properties for the component but specifically lacks any custom properties or variables. These values are sourced from the ",e.jsx(t.code,{children:"themes"})," directory."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"themes/*.css"})," - The theme-specific, component-level custom properties used to style the component. These files are meant to be loaded with the source styles."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"stories/*.stories.js"})," - The storybook file that defines the component's stories and the available knobs for the component."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"stories/template.js"})," - The template function that generates the component's mark-up based on the provided settings."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"stories/*.test.js"})," - The testing grid for visual regression testing in Chromatic."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"stories/*.mdx"})," - This asset generates the component-specific documentation and is rendered in Storybook as the Docs page."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Each component outputs the following assets to ",e.jsx(t.code,{children:"dist"}),":"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"index.css"}),": This asset includes the base CSS and the ",e.jsx(t.code,{children:"themes/spectrum.css"})," definitions (without the system mapping layer). This asset is meant to be used in a environment where only the current Spectrum theme is supported."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"index-base.css"}),": This asset includes only the base CSS; that is, the CSS without any custom property definitions. This can be used in conjunction with ",e.jsx(t.code,{children:"index-theme.css"})," and the desired ",e.jsx(t.code,{children:"themes/*.css"})," file to render a themed component."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"index-theme.css"}),": This asset includes only the custom property definitions for the component as mapped to the system variables. This can be used in conjunction with ",e.jsx(t.code,{children:"index-base.css"})," and the desired ",e.jsx(t.code,{children:"themes/*.css"})," file to render a themed component."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Each component outputs theme-specific assets to ",e.jsx(t.code,{children:"dist/themes"}),". These assets include the system variables mapped to their global token counterparts. This file is meant to be loaded in conjunction with the ",e.jsx(t.code,{children:"index-base.css"})," and ",e.jsx(t.code,{children:"index-theme.css"})," files to render a themed component."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"themes/spectrum-two.css"}),": Represents the current Spectrum theme, aka Spectrum 2."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"themes/spectrum.css"}),": Represents the legacy Spectrum theme, aka Spectrum 1. ",e.jsx(t.strong,{children:"deprecated"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"themes/express.css"}),": Represents the Express theme. ",e.jsx(t.strong,{children:"deprecated"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"adding-a-new-component",children:"Adding a new component"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Generate a new component using the ",e.jsx(t.code,{children:"yarn new component"})," command. The generator will prompt you to answer questions about your component."]}),`
`,e.jsxs(t.li,{children:["Edit the ",e.jsx(t.code,{children:"dependencies"})," within the ",e.jsx(t.code,{children:"package.json"})," file to use only the dependencies your component needs. All components rely on ",e.jsx(t.code,{children:"@spectrum-css/tokens"}),", and most rely on ",e.jsx(t.code,{children:"@spectrum-css/icon"}),"."]}),`
`,e.jsxs(t.li,{children:["Once your folder has been generated, you can run ",e.jsx(t.code,{children:"yarn start"})," in the root of the project to begin developing."]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"index.css"})," file is where most of your styles will be added. Add any custom property mappings to the global token library in the ",e.jsx(t.code,{children:"themes/spectrum.css"})," asset."]}),`
`,e.jsxs(t.li,{children:["Inside the ",e.jsx(t.code,{children:"stories"})," directory you will find a ",e.jsx(t.code,{children:"template.js"}),", ",e.jsx(t.code,{children:"*.stories.js"}),", and ",e.jsx(t.code,{children:"*.mdx"})," file.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["In the ",e.jsx(t.code,{children:"*.stories.js"})," file, define the available knobs and properties for your component, as well as any standard variations you want to surface in ",e.jsx(t.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"Storybook"}),"."]}),`
`,e.jsxs(t.li,{children:["Update the ",e.jsx(t.code,{children:"template.js"})," file with the markup, using ",e.jsx(t.a,{href:"https://lit.dev/docs/templates/overview/",rel:"nofollow",children:"lit-html syntax"})," to adjust results based on the provided settings from the Storybook knobs."]}),`
`,e.jsxs(t.li,{children:["Update the ",e.jsx(t.code,{children:"*.mdx"})," file with the documentation for your component."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.em,{children:"Note"}),": Because we use scoped packages, before it can be published, you must manually publish the new component as public:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-shell",children:`cd components/newcomponent
npm publish --access=public
`})}),`
`,e.jsx(t.h2,{id:"storybook-architecture",children:"Storybook architecture"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"assets"}),": This folder contains static, unprocessed assets for inclusion in the stories."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"decorators"}),": These assets interpret the arguments provided and apply the necessary stylesheet or markup changes to reflect the desired update."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"deprecated"}),": One folder for each deprecated component we are still including in our documentation but that does not live in the repository any longer."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"guides"}),": Manually written documentation for the project."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"types"}),": There are 3 primary assets stored in this folder: shared global properties (such as rootClass, customStyles, id, etc.), global controls (contexts available in the top toolbar), and states (optional shared properties to be imported into a story for consistency). Each file is surfaced to the ",e.jsx(t.code,{children:"types/index.js"})," file for ease of importing."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Storybook files:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"main.js"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"manager.js"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"preview.js"})}),`
`]}),`
`,e.jsx(t.p,{children:"Packages can be loaded using their package name rather than a relative pathing approach, i.e., in a story:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
`})}),`
`,e.jsx(t.p,{children:"or in a template.js file:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
`})}),`
`,e.jsxs(t.p,{children:["CSS for other components can be loaded in a story using the package name (rather than the directory path), i.e. ",e.jsx(t.code,{children:"@spectrum-css/toast"})," vs. ",e.jsx(t.code,{children:"../toast/index.css"}),". The local version of the package is used regardless but the bundler settings will resolve the pathing for you."]}),`
`,e.jsx(t.p,{children:"For template development, we leverage lit and it's utilities to create dynamic HTML that responds to user configurations provided by the Storybook controls. This allows us to create a single source of truth for the component's mark-up and to ensure that the component is being used as intended."}),`
`,e.jsx(t.p,{children:"To import the utilities you need, use the following:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
`})}),`
`,e.jsxs(t.p,{children:["Images can be loaded directly from the ",e.jsx(t.code,{children:"assets/images"})," directory at the root of the project."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<img class="spectrum-Asset-image" src="example-ava.png" />
`})}),`
`,e.jsxs(t.p,{children:["CSS assets will be run through their respective postcss configurations. This means you do not need to load dist assets into a story. It is recommended you load ",e.jsx(t.strong,{children:"local development assets"})," as they will be correctly compiled on the fly. i.e., in your template.js:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";
`})}),`
`,e.jsxs(t.p,{children:["We are leaning on Storybook's ",e.jsx(t.code,{children:"@storybook/web-components-vite"})," framework configuration as our stories rely on lit for dynamic attribute assignment."]}),`
`,e.jsx(t.h3,{id:"add-ons",children:"Add-ons"}),`
`,e.jsx(t.p,{children:"We rely on the following add-ons to power our implementation:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/storybookjs/storybook/tree/main/addons/essentials",rel:"nofollow",children:"@storybook/addon-essentials"}),": configureJSX, transcludeMarkdown (MDX) specifically turned on"]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/storybookjs/storybook/tree/next/code/addons/a11y",rel:"nofollow",children:"@storybook/addon-a11y"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.npmjs.com/package/@whitespace/storybook-addon-html",rel:"nofollow",children:"@whitespace/storybook-addon-html"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://storybook.js.org/addons/@etchteam/storybook-addon-status",rel:"nofollow",children:"@etchteam/storybook-addon-status"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/storybookjs/storybook/tree/next/code/addons/interactions",rel:"nofollow",children:"@storybook/addon-interactions"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.chromatic.com/docs/visual-testing-addon/",rel:"nofollow",children:"@chromaui/addon-visual-tests"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://storybook.js.org/addons/@storybook/addon-designs/",rel:"nofollow",children:"@storybook/addon-designs"})}),`
`]}),`
`,e.jsx(t.h2,{id:"writing-stories",children:"Writing stories"}),`
`,e.jsxs(t.p,{children:["The easiest way to begin writing stories for a new component is to run ",e.jsx(t.code,{children:"yarn new story"}),". This generator will prompt you to select your component folder name from a pre-populated list. You can search the list by starting to type. Press enter to select. This is not necessary if you used the ",e.jsx(t.code,{children:"yarn new component"})," command to generate your package as it will have populated the templates for you already."]}),`
`,e.jsx(t.p,{children:"Inside the component's package folder, you should now see a stories folder containing 2 assets:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"<foldername>.stories.js"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"template.js"})}),`
`]}),`
`,e.jsxs(t.p,{children:["You are welcome to add as many separate ",e.jsx(t.code,{children:"stories.js"})," files as you like in this directory as they will all be loaded automatically when storybook starts."]}),`
`,e.jsxs(t.p,{children:["To learn about writing stories, start with the ",e.jsx(t.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"nofollow",children:"How to write stories"})," documentation."]}),`
`,e.jsx(t.h3,{id:"metadata",children:"Metadata"}),`
`,e.jsxs(t.p,{children:["Each story definition should contain a title and description. The component key is required and would normally map to the name of the web component's tag but as we do not output web components, use the root class name for the element without the ",e.jsx(t.code,{children:"spectrum-"})," prefix."]}),`
`,e.jsx(t.h3,{id:"argtypes",children:"argTypes"}),`
`,e.jsx(t.p,{children:'Arg types define the UI available to the Storybook visitor. Hereforeto called "controls".'}),`
`,e.jsxs(t.p,{children:["You can import state-based argTypes that are commonly used from the ",e.jsx(t.code,{children:"types/states.js"}),". States available in this file include (but are not limited to):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isOpen"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isSelected"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isValid"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isInvalid"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isFocused"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isKeyboardFocused"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isHovered"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isActive"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isLoading"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isDisabled"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isDragged"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isRequired"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isReadOnly"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"isChecked"})}),`
`]}),`
`,e.jsx(t.p,{children:"To import shared types into your story, use the following syntax:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import {
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
`,e.jsx(t.p,{children:"Be sure to define a default value for these argTypes in your args section."}),`
`,e.jsx(t.h4,{id:"categories",children:"Categories"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"State"}),": represents the environment in which the component exists - is it focused? open? sticky? These are more commonly applied by interaction than statically sourced from the DOM. This category can be used to automatically populate visual regression tests when used with the ",e.jsx(t.code,{children:"withStatesWrapper"})," decorator."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Variant"}),": these controls represent design variants available for a component; often these will be denoted by classes that include a ",e.jsx(t.code,{children:"--"})," separator. i.e., ",e.jsx(t.code,{children:"--quiet"})," or ",e.jsx(t.code,{children:"--multiline"}),". These can be boolean, select dropdowns, radio buttons, etc. depending on the design rules for their application. This category can be used to automatically populate visual regression tests when used with the ",e.jsx(t.code,{children:"withVariantsWrapper"})," decorator."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Content"}),": not specific to the rendering of this component. Text or subcomponents to be rendered inside that region but that is not opinionated. Often this would be represented by a slot in a web component. i.e., labels, content to render inside a dialog or modal."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Advanced"}),": these are controls that match the requirements of a component category but are not recommended to be used; styles designed for specific edge-cases or inoptimal use. i.e., ",e.jsx(t.code,{children:"staticWhite"}),"."]}),`
`]}),`
`,e.jsx(t.h4,{id:"icon-dropdowns",children:"Icon dropdowns"}),`
`,e.jsx(t.p,{children:"You can load a dropdown list of the available workflow icons by adding the following code to your stories.js page:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`argTypes: {
  iconName: {
    ...IconStories?.argTypes?.iconName ?? {},
    if: false,
  },
},
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.em,{children:"Note:"})," In your story, be sure to include the ",e.jsx(t.code,{children:"if: false"})," override otherwise the control will only show up if you have a ",e.jsx(t.code,{children:"setName"})," arg and it is equal to ",e.jsx(t.code,{children:"workflow"}),"."]}),`
`,e.jsx(t.p,{children:"Want to load UI icons instead? Use the following variable import instead:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`argTypes: {
  iconName: {
    ...IconStories?.argTypes?.uiIconName ?? {},
    if: false,
  },
},
`})}),`
`,e.jsx(t.h4,{id:"commonly-used-argtypes",children:"Commonly used argTypes"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`image: {
  name: "Image",
  type: { name: "string" },
  table: {
    type: { summary: "string" },
    category: "Component",
  },
  control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
},
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`isEmphasized: {
  name: "Emphasized styling",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Component",
  },
  control: "boolean",
},
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`isQuiet: {
  name: "Quiet styling",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Component",
  },
  control: "boolean",
},
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`isFixed: {
  name: "Fixed position",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Advanced",
  },
  control: "boolean",
},
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`label: {
  name: "Label",
  type: { name: "string" },
  table: {
    type: { summary: "string" },
    category: "Content",
  },
  control: { type: "text" },
},
`})}),`
`,e.jsx(t.h2,{id:"templates",children:"Templates"}),`
`,e.jsx(t.p,{children:"The goal of the template files is to create a definition for this component to enforce and demonstrate the allowed semantics and required classNames and settings to achieve the desired output (based on the user's selected controls)."}),`
`,e.jsx(t.p,{children:"To this end, be sure to include only the mark-up required and relevant for the named component being presented. Any nested component markup that might be required should be imported and rendered through that component's own template file. i.e.,"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
`})}),`
`,e.jsx(t.p,{children:"Be sure to rename the import to something other than Template as the main export in your template.js file will have the same name."}),`
`,e.jsxs(t.p,{children:["Every component will have access to a few empty, global inputs to provide consistency in naming for common requirements. You can find the full list in ",e.jsx(t.code,{children:".storybook/types/args.js"}),"."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"rootClass"}),": this holds the top-level className of the component and should match the value set in the ",e.jsx(t.code,{children:"args"})," of the stories.js file."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"id"}),": allows users to pass in a custom ID value and should be added to the top-level wrapper of the component. By default, all components set the id using the ",e.jsx(t.code,{children:"getRandomId"})," function from the ",e.jsx(t.code,{children:"@spectrum-css/preview/decorators"})," package."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"testId"}),": used to render a ",e.jsx(t.code,{children:"data-testid"})," value to be used by a testing suite to target specific elements. If not provided, this value defaults to the ",e.jsx(t.code,{children:"id"})," value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"customClasses"})," (array): allows passing in additional classes to be applied to the top-level component. This is necessary for nesting templates inside others while allowing the parent to assign context to the child."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"customStyles"})," (object): allows passing in a style map object to provide custom inline CSS at the top-level of a component."]}),`
`]}),`
`,e.jsx(t.p,{children:"The rest of the variables provided in the Template function's input object will map to the argTypes you defined in your stories.js file."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args",rel:"nofollow",children:"More on component templates"})}),`
`]}),`
`,e.jsxs(t.p,{children:["To help in making a dynamic mark-up template, you can leverage any of the ",e.jsx(t.a,{href:"https://lit.dev/docs/templates/directives/",rel:"nofollow",children:"directives"})," available in the ",e.jsx(t.code,{children:"lit"})," package. Our most commonly used ones are: ",e.jsx(t.code,{children:"html"}),", ",e.jsx(t.code,{children:"classMap"}),", ",e.jsx(t.code,{children:"ifDefined"}),"."]}),`
`,e.jsx(t.p,{children:"All return values for Template functions should be outputting TemplateResults. Said another way, all mark-up needs to be wrapped in the html template literal."}),`
`,e.jsx(t.h3,{id:"full-template-example",children:"Full template example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

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
			)}
			\${when(iconName, () =>
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
`,e.jsx(t.h2,{id:"testing-stories",children:"Testing stories"}),`
`,e.jsxs(t.p,{children:["Now that your stories are written, we need to add them to our visual regression suite. We are using ",e.jsx(t.a,{href:"https://www.chromatic.com",rel:"nofollow",children:"chromatic"}),", a tool that is designed to work with Storybook."]}),`
`,e.jsxs(t.p,{children:["To optimize snapshot usage, we organize our stories into groups when rendered inside the Chromatic environment. This testing grid is created by passing settings to the ",e.jsx(t.code,{children:"Variants"})," utility function from the ",e.jsx(t.code,{children:"@spectrum-css/preview/decorators"})," package. These definitions should be sourced from a ",e.jsx(t.code,{children:"*.test.js"})," file in the component's stories directory. See example below:"]}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"*.test.js"})," file:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const AccordionGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Standard",
		},
		{
			testHeading: "Compact",
			density: "compact",
			collapseAll: true,
			withStates: false,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			disableAll: true,
		},
	],
});
`})}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"*.stories.js"})," file:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { AccordionGroup } from "./accordion.test.js";

export const Default = AccordionGroup.bind({});
Default.args = {};
`})}),`
`,e.jsx(t.p,{children:'Ideally you should have a single story file for each component with multiple variations and states represented in the testing grid that only renders in Chromatic. To preview the groups locally, there is a global toolbar setting with a beaker icon called "Show testing preview" that will activate the Chromatic view.'}),`
`,e.jsxs(t.p,{children:["In the event that you don't want a story to be tested in Chromatic, you can use the ",e.jsx(t.code,{children:"disableSnapshot"})," parameter:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`Default.parameters = {
	chromatic: { disableSnapshot: true },
};
`})}),`
`,e.jsx(t.h4,{id:"story-tags",children:"Story tags"}),`
`,e.jsxs(t.p,{children:["A story's ",e.jsx(t.a,{href:"https://storybook.js.org/docs/writing-stories/tags#built-in-tags",rel:"nofollow",children:"tags"})," can be configured for a few different purposes. Through this project's global configuration, all stories include the ",e.jsx(t.code,{children:"autodocs"}),` tag by default, which causes them to appear on the component's "Docs" page. The `,e.jsx(t.code,{children:"dev"})," tag, which Storybook applies by default, denotes stories that should be included in the Storybook sidebar. The ",e.jsx(t.code,{children:"!"})," symbol is used to negate the tag."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If a story should not be shown in the sidebar:",`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`Default.tags = ["!dev"];
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`If a story should not be shown on the component's "Docs" page:`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`Default.tags = ["!autodocs"];
`})}),`
`]}),`
`,e.jsxs(t.li,{children:["For stories that are for visual regression testing only, both tags can be used:",`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`Default.tags = ["!autodocs", "!dev"];
`})}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"getting-started-1",children:"Getting started"}),`
`,e.jsxs(t.p,{children:["Check that you have a local ",e.jsx(t.code,{children:".env"})," file in your ",e.jsx(t.code,{children:".storybook"})," folder with a ",e.jsx(t.code,{children:"CHROMATIC_PROJECT_TOKEN"})," variable defined. Get this token from the project maintainer. You should not be committing this ",e.jsx(t.code,{children:".env"})," file to the repo as it contains sensitive login information."]}),`
`,e.jsx(t.p,{children:"From the root of the project, there are 2 commands available for you to run:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"yarn test"}),": run chromatic as defined in the preview package"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"yarn test:scope"}),": leveraging the ",e.jsx(t.code,{children:"--only-story-names <storypath>"})," flag under the covers.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["This command only runs a single story or a subset of stories by their name(s). Use the title from the story file's default export as the story path, followed by the desired story names. For example, if selecting all stories from a single story file with a title of ",e.jsx(t.code,{children:"Example/Button"}),", this would be ",e.jsx(t.code,{children:"Example/Button/*"}),". Globs are supported via ",e.jsx(t.a,{href:"https://www.npmjs.com/package/picomatch#globbing-features",rel:"nofollow",children:"picomatch"}),". (",e.jsx(t.em,{children:"note:"})," the ",e.jsx(t.code,{children:"--only-story-names"})," flag can be specified multiple times.)"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["You can pass any supported ",e.jsx(t.a,{href:"https://www.chromatic.com/docs/cli#chromatic-options",rel:"nofollow",children:"chromatic flag"})," to these commands. Note we are not using TurboSnap so commands specific to that tooling will not work in our project."]}),`
`,e.jsxs(t.p,{children:["Runs will generate a JUnit XML file with build results (",e.jsx(t.code,{children:"chromatic-build-{buildNumber}.xml"}),"). This file should not be committed and is part of the .gitignore rules."]}),`
`,e.jsxs(t.p,{children:["Running without publishing to Chromatic? Add the ",e.jsx(t.code,{children:"--dry-run"})," flag. Need more information to debug a run? Try the ",e.jsx(t.code,{children:"--diagnostics"})," flag (writes process context information to ",e.jsx(t.code,{children:"chromatic-diagnostics.json"}),")."]})]})}function m(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{m as default};
