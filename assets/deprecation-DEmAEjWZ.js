import{j as e,M as r}from"./index-tRM9uqv9.js";import{u as i}from"./index-xEwWwqGq.js";import"./iframe-Dgaxd60Z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";function o(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Deprecation workflow"}),`
`,e.jsx(t.h1,{id:"deprecating-a-component",children:"Deprecating a component"}),`
`,e.jsx(t.p,{children:"When a component is deprecated, it is no longer recommended for use. Though the component will be removed from the codebase and will no longer receive feature updates, we will apply bug fixes to the package as necessary. We will also provide a migration path to a recommended alternative."}),`
`,e.jsx(t.h2,{id:"deprecation-process",children:"Deprecation process"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Deprecation of a component is typically initiated and communicated by the design team."})," They will indicate that a component is going to be deprecated and identify reccomended alternatives and proposed language around migrating away from that component's use."]}),`
`,e.jsx(t.h3,{id:"pre-deprecation-communication",children:"Pre-deprecation communication"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Before starting a deprecation, connect with the Spectrum Web Components team to align on the timing of the deprecation. Make sure downstream users are aware that the component is being deprecated and have a migration path to the recommended alternative. Give downstream consumers time to express any concerns or blockers."}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Add a new ",e.jsx(t.a,{href:"https://github.com/adobe/spectrum-css/discussions/new?category=announcements",rel:"nofollow",children:"Announcement"})," to the Spectrum CSS repository to notify the community of the deprecation. Include the deprecation notice and any additional migration details that would be important for consumers. See the template below for an example of what to include in the announcement. Title should follow this format: ",e.jsx(t.code,{children:"Deprecation notice: <component name>"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-markdown",children:`As of Feb 15, 2024, the @spectrum-css/quickactions has been deprecated.

Please use an Action bar to allow users to perform actions on either a single or multiple items at the same time, instead.

This component has been removed from the Spectrum CSS monorepo and will no longer receive new features. Bug fixes will be patched on a as-needed basis. If you find a critical bug, please open a bug report.

Bug fixes will not longer be supported after the project migrates fully to Spectrum 2 (date TBD).

If you have any questions or concerns about this deprecation, please feel free to contribute to the discussion here or reach out to us directly.
`})}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"flagging-the-component-as-deprecated",children:"Flagging the component as deprecated"}),`
`,e.jsx(t.p,{children:"Before removing the component from the codebase, we need to flag the component as deprecated and publish those changes to the package registry. This will allow downstream consumers to see that the component is being deprecated and provide them with the deprecation notice and migration path. It will also provide a foundation for removal of the component from the codebase without breaking local references."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Create a new branch for the deprecation. i.e., ",e.jsx(t.code,{children:"git checkout -b deprecate-quickaction"}),"."]}),`
`,e.jsxs(t.li,{children:["Open up any ",e.jsx(t.code,{children:"*.stories.js"}),` files inside the component's folder:
a. Edit the title of any exported stories to be prefixed with the `,e.jsx(t.code,{children:"Deprecated"})," category, i.e., ",e.jsx(t.code,{children:'title: "Quick actions"'}),`.
b. Update any local references to point to the package name instead, i.e.,`,e.jsx("br",{}),e.jsx(t.em,{children:"Original"}),":",e.jsx("br",{}),e.jsx(t.code,{children:'import { Template } from "./template.js";'}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(t.em,{children:"Updated to"}),":",e.jsx("br",{}),e.jsx(t.code,{children:'import { Template } from "@spectrum-css/quickaction/stories/template.js";'}),`.
c. In the parameters section, there are 2 important updates to make: - Add `,e.jsx(t.code,{children:"chromatic: { disableSnapshot: true },"})," to ensure it no longer runs regression tests. - Update the ",e.jsx(t.code,{children:"status"})," type to ",e.jsx(t.code,{children:"deprecated"}),":",`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`  parameters: {
      chromatic: { disableSnapshot: true },
      status: { type: "deprecated" }
  },
`})}),`
`]}),`
`,e.jsxs(t.li,{children:["Add a notice to the documentation page that reads: ",e.jsx(t.code,{children:"**This component is deprecated.**"}),". This can be done in either the ",e.jsx(t.code,{children:"*.stories.js"})," file or the ",e.jsx(t.code,{children:"*.mdx"})," file, if it exists. Add any additional migration notes that were provided by the design team."]}),`
`,e.jsxs(t.li,{children:["Commit these changes and open a pull request to the main branch. i.e., ",e.jsx(t.code,{children:'git commit -m "chore(quickaction): prepare for deprecation"'}),"."]}),`
`,e.jsx(t.li,{children:"Once the pull request is approved, merge the changes into the main branch and publish the update to the package registry."}),`
`]}),`
`,e.jsx(t.p,{children:"At this point you can choose to either immediate move on to the next steps or give a preset amount of time for feedback and concerns to be raised. If you choose to wait, make sure to communicate the timeline to the Spectrum Web Components team and downstream consumers."}),`
`,e.jsx(t.h3,{id:"removal-from-the-monorepo",children:"Removal from the monorepo"}),`
`,e.jsx(t.p,{children:"Once the deprecation notice has been communicated and the above steps completed, we can remove the component from the codebase safely without breaking local references."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Create a new folder with the component name in ",e.jsx(t.code,{children:".storybook/deprecated"}),", i.e., ",e.jsx(t.code,{children:".storybook/deprecated/quickaction"}),"."]}),`
`,e.jsxs(t.li,{children:["Copy ",e.jsx(t.code,{children:"*.stories.js"})," and ",e.jsx(t.code,{children:"*.mdx"})," into the new folder (directly, not nested inside subfolders)."]}),`
`,e.jsxs(t.li,{children:["Delete the package from the ",e.jsx(t.code,{children:"components"})," directory."]}),`
`,e.jsxs(t.li,{children:["Add the deprecated component's package and last version to the monorepo's root package.json. i.e., ",e.jsx(t.code,{children:'"@spectrum-css/quickaction": "^3.1.1",'}),"."]}),`
`,e.jsxs(t.li,{children:["Reach out to one of the package maintainers to officially deprecate the package in the package registry with the provided deprecation notice from design. Do not try to run the deprecation command unless you know that you have publishing permissions on npm. i.e., ",e.jsx(t.code,{children:'npm deprecate @spectrum-css/quickaction@3.1.1 "This package has been deprecated. Use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead."'}),"."]}),`
`]}),`
`,e.jsx(t.h3,{id:"post-deprecation-communication",children:"Post-deprecation communication"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Update the ",e.jsx(t.code,{children:"#spectrum-css"})," channel in Slack with the deprecation notice and any additional migration notes."]}),`
`,e.jsx(t.li,{children:"Reach out to the Spectrum Web Components team to confirm completion of the deprecation process."}),`
`]})]})}function p(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{p as default};
