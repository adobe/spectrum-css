import{j as e,M as a,T as i}from"./index-tRM9uqv9.js";import{u as o}from"./index-xEwWwqGq.js";import"./iframe-Dgaxd60Z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ca4lBP7z.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Release workflow"}),`
`,e.jsx(i,{children:"Release workflow"}),`
`,e.jsx(n.h2,{id:"versioning",children:"Versioning"}),`
`,e.jsxs(n.p,{children:["This project versions components independently, meaning each component has its own version number, updated independently of other components. We follow ",e.jsx(n.a,{href:"https://semver.org/",rel:"nofollow",children:"semantic versioning"})," and as such, each release is versioned according to the following rules:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Major"}),": Breaking changes such as API changes, the removal of features, or changes to ",e.jsx(n.code,{children:"--mod"})," custom properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minor"}),": New features or enhancements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Patch"}),": Bug fixes or minor improvements"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Versioning (and package publishing) is handled by ",e.jsx(n.a,{href:"https://github.com/changesets/changesets",rel:"nofollow",children:"Changesets"}),", which lets contributors declare how their changes should be released."]}),`
`,e.jsxs(n.p,{children:["Additionally, we use the ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/",rel:"nofollow",children:"Conventional Commits"})," specification for writing our commit messages to help communicate the types of changes we're making to the codebase."]}),`
`,e.jsx(n.h3,{id:"changesets-usage",children:"Changesets usage"}),`
`,e.jsx(n.p,{children:"A changeset is a piece of information about changes made in a branch or a commit. It holds three bits of information:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"What we need to release"}),`
`,e.jsxs(n.li,{children:["What the next version we want to release is (using a ",e.jsx(n.a,{href:"https://semver.org/",rel:"nofollow",children:"semver bump type"}),")"]}),`
`,e.jsx(n.li,{children:"A changelog entry for the released packages"}),`
`]}),`
`,e.jsxs(n.p,{children:["Not every change to the codebase will require a release, but any changes to files within the ",e.jsx(n.code,{children:"/components"})," directory ",e.jsx(n.strong,{children:"will"}),` require a release. Generally, when thinking about versioning and releases, it's a good idea to consider the question: "does this change need to be consumed by someone or something outside of Spectrum CSS?" If the answer to that question is "yes", then the changes will likely require a changeset.`]}),`
`,e.jsxs(n.p,{children:["A changeset can be ",e.jsx(n.a,{href:"https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#i-am-in-a-multi-package-repository-a-mono-repo",rel:"nofollow",children:"added locally by the author"})," by invoking the command line script, or it can be added during the Pull Request process by a project maintainer via the ",e.jsx(n.a,{href:"https://github.com/changesets/bot",rel:"nofollow",children:"Changesets GitHub bot"}),". The result of either method will be a single commit that adds a markdown file with YAML frontmatter describing the changes."]}),`
`,e.jsxs(n.p,{children:["Additionally, ",e.jsx(n.a,{href:"https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#tips-on-adding-changesets",rel:"nofollow",children:"multiple changesets"})," can be added to a Pull Request."]}),`
`,e.jsx(n.h2,{id:"releasing",children:"Releasing"}),`
`,e.jsxs(n.p,{children:["Releases are handled via Changesets. Specifically, via the ",e.jsx(n.a,{href:"https://github.com/changesets/action",rel:"nofollow",children:"Changesets GitHub action"}),". When there are new changesets on the ",e.jsx(n.a,{href:"https://github.com/changesets/changesets/blob/main/docs/config-file-options.md#basebranch-git-branch-name",rel:"nofollow",children:"configured baseBranch"})," (usually ",e.jsx(n.code,{children:"main"})," in our repo), the action will create a new Pull Request with all of the package versions updated and changelogs updated. The Pull Request can then be merged back into ",e.jsx(n.code,{children:"main"})," and the updated packages can be published manually or automatically via the action."]}),`
`,e.jsx(n.p,{children:"This allows for maintainers and contributors to review the proposed version and changelog updates and make changes as necessary before the publish step."}),`
`,e.jsx(n.h2,{id:"prereleases",children:"Prereleases"}),`
`,e.jsxs(n.p,{children:["Information about Changesets and prereleases can be found ",e.jsx(n.a,{href:"https://github.com/changesets/changesets/blob/main/docs/prereleases.md",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.h3,{id:"snapshot-releases",children:"Snapshot releases"}),`
`,e.jsxs(n.p,{children:["Snapshot releases are a way to release changes for testing without updating versions. Information about Changesets and snapshot releases can be found ",e.jsx(n.a,{href:"https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.p,{children:"Spectrum CSS snapshot releases can be published via two different workflows:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Preferred: via a GitHub Action, which is invoked by any contributor who has ",e.jsx(n.code,{children:"write"})," access to the Spectrum CSS GitHub repository."]}),`
`,e.jsx(n.li,{children:"Alternate: locally, from a contributor's computer (requires npm authorization and publish privileges)."}),`
`]}),`
`,e.jsx(n.h4,{id:"snapshot-releases-via-github-actions",children:"Snapshot releases via GitHub Actions"}),`
`,e.jsxs(n.p,{children:["Our recommended workflow for publishing snapshot releases is through our ",e.jsx(n.a,{href:"https://github.com/adobe/spectrum-css/blob/main/.github/workflows/release-snapshot.yml",rel:"nofollow",children:"GitHub Action"}),`. Releasing snapshots via this method has several advantages over local publishing and poses less risk for publication failures.
Any contributor with `,e.jsx(n.code,{children:"write"})," access to the Spectrum CSS repository can publish snapshot releases."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Steps for publishing snapshot releases"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"First, ensure that the branch from which you want to publish has added a changeset so that you actually have something to release. No changeset = nothing to release."}),`
`,e.jsx(n.li,{children:'Next, navigate to the "Actions" tab near the top of the GitHub interface, and click-through to see all available workflows for the project.'}),`
`,e.jsx(n.li,{children:'In the "Actions" navigation on the left side of the interface, choose "Release snapshot" from the list of available workflows.'}),`
`,e.jsxs(n.li,{children:[`In this "Release snapshots" screen, you'll see a list of previous snapshot worklows that have been run. In the upper right part of the screen, you should see a `,e.jsx(n.strong,{children:'"Run Workflow"'})," button. Clicking the button will open a popover."]}),`
`,e.jsxs(n.li,{children:['In the popover, choose the branch from which you wish to release the snapshot ("Use workflow from"), and in the text field, type in a meaningful tag name (example: ',e.jsx(n.code,{children:"s2-action-button"}),"), or optionally, leave this field blank and the workflow will attempt to automatically create a tag name based on your branch's name."]}),`
`,e.jsxs(n.li,{children:["The workflow should then begin to run, using ",e.jsx(n.code,{children:"changeset version"})," to version the affected components with the proper snapshot version name and tags (based upon what you specified in the text field). The workflow also automatically publishes to npm with the snapshot version and tags."]}),`
`,e.jsx(n.li,{children:"Once complete, navigate to npm and check that your snapshot has been published."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Alternate steps for publishing snapshot releases locally"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"First, ensure that the branch from which you want to publish has added a changeset so that you actually have something to release. No changeset = nothing to release."}),`
`,e.jsx(n.li,{children:"On the command line, be sure that you've checked out that branch and are on it currently."}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:'yarn changeset version --snapshot SOME_MEANINGFUL_TAG_NAME_HERE && && yarn --mode="update-lockfile"'})," to update the affected package versions to 0.0.0-SOME_MEANINGFUL_TAG_NAME_HERE-THE_TIME_YOU_DID_THIS"]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"yarn ci"})," to run a full, cacheless build."]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"yarn changeset publish --tag SOME_MEANINGFUL_TAG_NAME_HERE"})," to invoke the publish step. This will publish your versioned packages to npm using the ",e.jsx(n.code,{children:"SOME_MEANINGFUL_TAG_NAME_HERE"})," tag instead of ",e.jsx(n.code,{children:"latest"})," on npm which is ",e.jsx(n.strong,{children:"VERY"})," important for the npm ecosystem."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
