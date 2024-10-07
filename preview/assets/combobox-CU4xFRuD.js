import{ae as e,af as r,ag as l,ah as a,ai as c,aj as n,ak as h}from"./index-TjMdyE0H.js";import{u as o}from"./index-DEc0fggC.js";import{C as x,T as u}from"./ComponentDetails-DrLIX8tg.js";import{C as t,D as j,W as p,a as m,I as b,L as f,b as g,Q as w,c as C,d as v,e as Q,f as T,g as q}from"./combobox.stories-D20OhOA7.js";import"./iframe-7tjs3EOx.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./capitalize-D60SaZ2R.js";import"./template-BBACTsaP.js";import"./template-C9PkAyt7.js";import"./template-CykOH8vE.js";import"./v4-CQkTLCs1.js";import"./lit-element-C96egxJg.js";import"./template-CjNf7Zto.js";import"./template-CotMDNmo.js";import"./template-BBAyYaQJ.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./template-CFzFm5hn.js";import"./template-BI8UA81D.js";import"./template-D5W5kXKr.js";import"./template-DJxH4dO_.js";import"./index-BL42WGY7.js";import"./states-D366RZcH.js";import"./variants-YiDXN7gG.js";import"./template-DhJXrEWv.js";import"./template-BMf0vgmq.js";import"./template-BcBQPg07.js";import"./template-CjHMi-cO.js";function d(s){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t,title:"Docs"}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(x,{}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(i.h2,{id:"usage-notes",children:"Usage notes"}),`
`,e.jsx(i.h3,{id:"general-notes",children:"General notes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Combobox uses ",e.jsx(i.code,{children:".spectrum-PickerButton"})," instead of a ",e.jsx(i.code,{children:".spectrum-Picker"})]}),`
`,e.jsxs(i.li,{children:["The following classes must be added:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".spectrum-Combobox-textfield"})," is required on the Textfield outer element (",e.jsx(i.code,{children:".spectrum-Textfield"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".spectrum-Combobox-input"})," is required on the ",e.jsx(i.code,{children:"<input>"})," element inside of Textfields (",e.jsx(i.code,{children:".spectrum-Textfield-input"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".spectrum-Combobox-button"})," is required on the FieldButton (",e.jsx(i.code,{children:".spectrum-ActionButton spectrum-ActionButton--sizeM"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h3,{id:"indicating-validity-and-focus",children:"Indicating validity and focus"}),`
`,e.jsxs(i.p,{children:["Validity and focus must be bubbled up to the parent so descendants siblings can be styled. Implementations should add the following classes to the ",e.jsx(i.code,{children:".spectrum-Combobox"})," parent class in the following situations:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".is-focused"})," - when the input or button is focused with the mouse"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".is-keyboardFocused"})," - when the input or button is focused with the keyboard"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".is-valid"})," - when the input has an explicit valid state"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".is-invalid"})," - when the input has an explicit invalid state"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".is-disabled"})," - when the control is disabled; should also add to the ",e.jsx(i.code,{children:".spectrum-Combobox-textfield"})," and include a ",e.jsx(i.code,{children:"[disabled]"})," attribute to the ",e.jsx(i.code,{children:".spectrum-Combobox-button"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:".is-loading"})," - when the progress circle is being shown"]}),`
`]}),`
`,e.jsx(i.h2,{id:"standard-variants",children:"Standard variants"}),`
`,e.jsx(i.h3,{id:"standard---open",children:"Standard - open"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"standard---with-label",children:"Standard - with label"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"standard---closed",children:"Standard - closed"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"standard---invalid",children:"Standard - invalid"}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h3,{id:"standard---loading",children:"Standard - loading"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"standard---disabled",children:"Standard - disabled"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h2,{id:"quiet-variants",children:"Quiet variants"}),`
`,e.jsx(i.h3,{id:"quiet---open",children:"Quiet - open"}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(i.h3,{id:"quiet---with-label",children:"Quiet - with label"}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(i.h3,{id:"quiet---closed",children:"Quiet - closed"}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h3,{id:"quiet---invalid",children:"Quiet - invalid"}),`
`,e.jsx(n,{of:Q}),`
`,e.jsx(i.h3,{id:"quiet---loading",children:"Quiet - loading"}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(i.h3,{id:"quiet---disabled",children:"Quiet - disabled"}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(i.p,{children:"The component accepts the following inputs (properties):"}),`
`,e.jsx(h,{}),`
`,e.jsx(i.h2,{id:"tagged-releases",children:"Tagged releases"}),`
`,e.jsx(u,{})]})}function se(s={}){const{wrapper:i}={...o(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(d,{...s})}):d(s)}export{se as default};
