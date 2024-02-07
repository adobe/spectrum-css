# @spectrum-css/preview

The preview tool for Spectrum CSS is driven by [Storybook](https://storybook.js.org), a React-driven development environment that allows for in-depth exploration of components as they are being built.

- `assets`: This folder contains static, unprocessed assets for inclusion in the stories.
- `decorators`: These assets interpret the arguments provided and apply the necessary stylesheet or markup changes to reflect the desired update.

**Storybook files:**

- `main.js`
- `manager.js`
- `preview.js`
- `preview-head.html` & `main-head.html`

Storybook leverages webpack for bundling and we have updated it with the following settings (these rules are applied to \*.stories.js assets as well as the template.js files):

- Packages can be loaded from local or root node_modules directories. i.e., in a story:

  ```js
  import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
  ```

  or in a template.js file:

  ```js
  import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
  ```

- CSS for other components can be loaded in a story using the package name (rather than the directory path), i.e. `@spectrum-css/toast` vs. `../toast/index.css`. The local version of the package is used regardless but the webpack settings will resolve the pathing for you.

  ```js
  import { html } from "lit";
  import { classMap } from "lit/directives/class-map.js";
  import { ifDefined } from "lit/directives/if-defined.js";
  ```

- Images can be loaded automatically from the `assets/images` directory at the root of the project.

  ```html
  <img class="spectrum-Asset-image" src="example-ava.png" />
  ```

- CSS assets will be run automatically through their respective postcss configurations. This means you do not need to load dist assets into a story. It is recommended you load **local development assets** as they will be correctly compiled on the fly. i.e., in your template.js:

  ```js
  import "../index.css";
  ```

- If you need to load an asset in your template based on storybook configurations, you can do so using dynamic imports and a webpackPrefetch flag (to prevent FOUC). These will follow the same compilation rules as noted above. i.e.,

  ```js
  try {
   if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
   else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
   console.warn(e);
  }
  ```

We are leaning on Storybook's `@storybook/web-components-webpack5` framework configuration as our stories rely on lit for dynamic attribute assignment.

## Add-ons

We are leveraging the following add-ons:

- [@storybook/addon-essentials](https://github.com/storybookjs/storybook/tree/main/addons/essentials): configureJSX, transcludeMarkdown (MDX) specifically turned on
- [@storybook/addon-a11y](https://github.com/storybookjs/storybook/tree/next/code/addons/a11y)
- [@whitespace/storybook-addon-html](https://www.npmjs.com/package/@whitespace/storybook-addon-html)
- [@etchteam/storybook-addon-status](https://storybook.js.org/addons/@etchteam/storybook-addon-status)
- [@storybook/addon-interactions](https://github.com/storybookjs/storybook/tree/next/code/addons/interactions)
- [@chromaui/addon-visual-tests](https://www.chromatic.com/docs/visual-testing-addon/)

## Writing stories

The easiest way to begin writing stories for a new component is to run `yarn new story` or `yarn workspace @spectrum-css/generator new story`. This generator will prompt you to select your component folder name from a pre-populated list. You can search the list by starting to type. Press enter to select. This is not necessary if you used the `yarn new component` command to generate your package in the first place as it will have populated the templates for you at that time.

Inside the component's package folder, you should now see a stories folder containing 2 assets:

- `<foldername>.stories.js`
- `template.js`

You are welcome to add as many separate `stories.js` files as you like in this directory as they will all be loaded automatically when storybook starts.

## Stories

To learn about writing stories, start with the [How to write stories](https://storybook.js.org/docs/react/writing-stories/introduction) documentation.

Each story definition should contain a title and description. The component key is required and would normally map to the name of the web component's tag but as we do not output web components, use the root class name for the element without the `spectrum-` prefix.

### argTypes

Arg types define the UI available to the Storybook visitor. Hereforeto called "controls".

Notes on a few commonly used argTypes:

- If your component does not include any animation, please hide the reducedMotion control to avoid confusion: `reducedMotion: { table: { disable: true } }`

#### Categories

- `Global`: sourced automatically from preview.js. You can turn these off but we do not recommend adding any new controls here that are story-specific.
- `Component`: controls that relate to the styling of the component; often these will be denoted by classes that include a `--` separator. i.e., `--quiet` or `--multiline`. These can be boolean, select dropdowns, radio buttons, etc. depending on the design rules for their application.
- `Advanced`: these are controls that match the requirements of a component category but are not recommended to be used; styles designed for specific edge-cases or inoptimal use. i.e., `staticWhite`.
- `State`: represents the environment in which the component exists - is it focused? open? sticky? These are more commonly applied by interaction than statically sourced from the DOM.
- `Content`: not specific to the rendering of this component. Text or subcomponents to be rendered inside that region but that is not opinionated. Often this would be represented by a slot in a web component. i.e., labels, content to render inside a dialog or modal.

#### Icon dropdowns

You can load a dropdown list of the available workflow icons by adding the following code to your stories.js page:

```js
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
```

```js
argTypes: {
  iconName: {
    ...IconStories?.argTypes?.iconName ?? {},
    if: false,
  },
},
```

_Note:_ In your story, be sure to include the `if: false` override otherwise the control will only show up if you have a `setName` arg and it is equal to `workflow`.

Want to load UI icons instead? Use the following variable import instead:

```js
argTypes: {
  iconName: {
    ...IconStories?.argTypes?.uiIconName ?? {},
    if: false,
  },
},
```

#### Commonly used argTypes

```js
image: {
  name: "Image",
  type: { name: "string" },
  table: {
    type: { summary: "string" },
    category: "Component",
  },
  control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
},
```

```js
isOpen: {
  name: "Open",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "State",
  },
  control: "boolean",
},
```

```js
isEmphasized: {
  name: "Emphasized styling",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Component",
  },
  control: "boolean",
},
```

```js
isQuiet: {
  name: "Quiet styling",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Component",
  },
  control: "boolean",
},
```

```js
isFixed: {
  name: "Fixed position",
  type: { name: "boolean" },
  table: {
    type: { summary: "boolean" },
    category: "Advanced",
  },
  control: "boolean",
},
```

```js
label: {
  name: "Label",
  type: { name: "string" },
  table: {
    type: { summary: "string" },
    category: "Content",
  },
  control: { type: "text" },
},
```

## Templates

The goal of the template files is to create a definition for this component to enforce and demonstrate the allowed semantics and required classNames and settings to achieve the desired output (based on the user's selected controls).

To this end, be sure to include only the mark-up required and relevant for the named component being presented. Any nested component markup that might be required should be imported and rendered through that component's own template file. i.e.,

```js
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
```

Be sure to rename the import to something other than Template as the main export in your template.js file will have the same name.

Every component will have access to a few empty, global inputs to provide consistency in naming for common requirements.

- `rootClass`: this holds the top-level className of the component and should match the value set in the `args` of the stories.js file.
- `id`: allows users to pass in a custom ID value and should be added to the top-level wrapper of the component.
- `customClasses` (array): allows passing in additional classes to be applied to the top-level component. This is necessary for nesting templates inside others while allowing the parent to assign context to the child.
- `...globals`: this spread variable should not be decomposed on import. Instead, add a desctructuring right after instantiation, i.e., `const { express } = globals`. These values map to the globally provided settings and allow you to make rendering choices based on these values.

The rest of the variables provided in the Template function's input object will map to the argTypes you defined in your stories.js file.

- [More on component templates](https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args)

To help in making a dynamic mark-up template, you can leverage any of the [directives](https://lit.dev/docs/templates/directives/) available in the `lit` package. Our most commonly used ones are: `html`, `classMap`, `ifDefined`.

All return values for Template functions should be outputting TemplateResults. Said another way, all mark-up needs to be wrapped in the html template literal.

### Full example

```js
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Avatar } from "@spectrum-css/avatar/stories/template.js";
import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";

import "../index.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
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
  <div
   class=${classMap({
    [rootClass]: true,
    [`${rootClass}--size${size?.toUpperCase()}`]:
     typeof size !== "undefined",
    "is-emphasized": isEmphasized,
    "is-disabled": isDisabled,
    "is-invalid": isInvalid,
    "is-selected": isSelected,
    ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
   })}
   id=${ifDefined(id)}
   tabindex="0"
  >
   ${avatarUrl && !iconName
    ? Avatar({
      ...globals,
      image: avatarUrl,
      size: "50",
      })
    : ""} ${iconName
    ? Icon({
      ...globals,
      iconName,
      customClasses: [`${rootClass}s-itemIcon`],
      })
    : ""}
   <span class="${rootClass}s-itemLabel">${label}</span>
   ${hasClearButton
    ? ClearButton({
      ...globals,
      customClasses: [`${rootClass}-clearButton`],
      onclick: (evt) => {
       const el = evt.target;
       if (!el) return;

       const wrapper = el.closest(rootClass);
       wrapper.parentNode.removeChild(wrapper);
      },
      })
    : ""}
  </div>
 `;
};
```

## Testing stories

Now that your stories are written, we need to add them to our visual regression suite. We are using [chromatic](https://www.chromatic.com), a tool that is designed to work with Storybook.

To optimize snapshot usage, we organize our stories into groups when rendered inside the Chromatic environment. This is done by adding an `window.isChromatic()` check and creating groups of stories (note: do not import the `isChromatic` function directly, there is added functionality we've included when sourcing it from`window`). See example below:

```js

const AccordionGroup = ({
 customStyles = {},
 ...args
}) => {
 return html`
   ${Template(args)}
   ${when(window.isChromatic(), () =>
    Template({
     ...args,
     customStyles: { "max-inline-size": "300px"},
    })
   )}
   ${when(window.isChromatic(), () =>
    Template({
     ...args,
     disableAll: true,
    })
   )}
 `;
};

export const Default = AccordionGroup.bind({});
Default.args = {};
```

Ideally you should have a single story file for each component with multiple variations and states represented in the "Kitchen sink" grouping that only renders in Chromatic. To preview the groups locally, there is a global toolbar setting with a beaker icon called "Show testing preview" that will activate the Chromatic view.

### Getting started

Check that you have a local `.env` file in your `.storybook` folder with a `CHROMATIC_PROJECT_TOKEN` variable defined. Get this token from the project maintainer. You should not be committing this `.env` file to the repo as it contains sensitive login information.

From the root of the project, there are 2 commands available for you to run:

- `yarn test`: run chromatic as defined in the preview package
- `yarn test:scope`: leveraging the `--only-story-names <storypath>` flag under the covers.
  - This command only runs a single story or a subset of stories by their name(s). Use the title from the story file's default export as the story path, followed by the desired story names. For example, if selecting all stories from a single story file with a title of `Example/Button`, this would be `Example/Button/*`. Globs are supported via [picomatch](https://www.npmjs.com/package/picomatch#globbing-features). (_note:_ the `--only-story-names` flag can be specified multiple times.)

You can pass any supported [chromatic flag](https://www.chromatic.com/docs/cli#chromatic-options) to these commands. Note we are not using TurboSnap so commands specific to that tooling will not work in our project.

Runs will generate a JUnit XML file with build results (`chromatic-build-{buildNumber}.xml`). This file should not be committed and is part of the .gitignore rules.

Running without publishing to Chromatic? Add the `--dry-run` flag. Need more information to debug a run? Try the `--diagnostics` flag (writes process context information to `chromatic-diagnostics.json`).

# Migration to Storybook 7.0(Draft)

## Updates

---
`*` Added support for handler actions with ```withActions``` on each stories which have action handlers.

Example:

```js
import globalThis from 'global';
+ import { withActions } from '@storybook/addon-actions/decorator';

export default {
  component: globalThis.Components.Button,
  args: {
    label: 'Click Me!',
  },
  parameters: {
    chromatic: { disable: true },
  },
};
export const Basic = {
  parameters: {
    handles: [{ click: 'clicked', contextmenu: 'right clicked' }],
  },
+  decorators: [withActions],
};
```

`*` Upgraded to ```Webpack 5``` for improved bundling and performance from ```webpack 4```

`*` @storybook addons dependencies are upgraded to v7 from v6

```js
"@storybook/addon-docs": "^7.0.12",
"@storybook/addon-essentials": "^7.0.12",
"@storybook/api": "^7.0.12",
"@storybook/client-api": "^7.0.12",
"@storybook/components": "^7.0.12",
"@storybook/core-events": "^7.0.12",
"@storybook/manager-api": "^7.0.12",
"@storybook/preview-api": "^7.0.12",
"@storybook/theming": "^7.0.12",
"@storybook/web-components-webpack5": "^7.0.12",
"@whitespace/storybook-addon-html": "^5.1.4",
```

`*` Added a new "Controls" addon for interactive component props editing.

`*` Introduced a new "Docs-only" mode for isolating component documentation.

`*` Improved the addon ecosystem with new and updated addons.

<br></br>

## Breaking Changes

---
`*` client-api is deperacted and preview-api is introduced

```js
 - import { useEffect } from '@storybook/client-api';
 + import { useEffect } from '@storybook/preview-api';
```

`*` @storybook/addons is deperacted and replaced with @storybook/manager-api

```js
 - import { addons } from '@storybook/addons';
 + import { addons } from '@storybook/manager-api';
```

`*` ```@storybook-webcomponents``` is deprecated. ```@storybook/web-components-webpack'``` is added with webpack 5 support.

```js
 - framework: '@storybook/web-components',
 + framework: {
    name: '@storybook/web-components-webpack5',
    options: {
      fastRefresh: true,
      builder: { lazyCompilation: true },
    },
  },

```

`*` Docs is now added to every component on the sidebar with the below code in Storybook 7

```js
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
```

`*` preview.js is exported as default in Storybook 7

```js
- export const parameters = {
- actions: { argTypesRegex: '^on[A-Z].*' },
- };

+ export default {
+  parameters: {
+    actions: { argTypesRegex: '^on[A-Z].*' },
+  },
+ };
```

## Deprecations(Addons)

---

`*` ```"@storybook/client-api"``` is deprecated

`*` ```"@storybook/addons"``` is deprecated

## Bug Fixes

---
`*` Fixed various issues related to performance, rendering, and compatibility.

`*` Resolved problems with the Storybook UI, including layout glitches and navigation bugs.

`*` Fixed bugs in calender storybook

## Improvements

---
`*` Improved the overall performance and stability of the Storybook development environment.

`*` Enhanced the documentation with updated examples and guides.

`*` Optimized the build process for faster bundling and reduced file sizes.

`*` Upgraded dependencies to their latest versions for improved compatibility and security.

---
