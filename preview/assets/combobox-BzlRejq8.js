import{j as i}from"./jsx-runtime-_09DdfSq.js";import{u as o}from"./index-CXGxovgH.js";import{ae as r,af as l,ag as a,ah as c,ai as n,aj as h}from"./index-BreQY16V.js";import{C as x}from"./component-details-CkbMiim1.js";import{C as t,D as u,W as p,a as m,I as j,L as b,b as f,Q as g,c as C,d as v,e as w,f as Q,g as q}from"./combobox.stories-DmLtF_nU.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./template-xI5Kowax.js";import"./template-BSRXx7Ch.js";import"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import"./lit-html-BdGv-Ldy.js";import"./class-map-sTkR_Npl.js";import"./if-defined-Bo9G1hLT.js";import"./style-map-yx2CMG_J.js";import"./when-BR7zwNJC.js";import"./template-CLOJq6Hl.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./template-BzRF0abB.js";import"./template-BMKK6e4E.js";import"./template-Di67rEmc.js";import"./template-B5CNIEfi.js";import"./template-BtQIgTkN.js";import"./utilities-BisrhIqU.js";import"./decorator-Dl7o6wQR.js";import"./v4-CQkTLCs1.js";import"./template-Df-YB4AQ.js";import"./index-BCEELo55.js";import"./states-DzrSzBKQ.js";import"./template-D7lOzDBB.js";import"./template-oY73HyMu.js";import"./template-BCjEPzLh.js";import"./template-C3bVK-Qx.js";import"./template-BTVRUgwL.js";function d(s){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:t,title:"Docs"}),`
`,i.jsx(l,{of:t}),`
`,i.jsx(a,{of:t}),`
`,i.jsx(x,{}),`
`,i.jsx(c,{of:t}),`
`,i.jsx(e.h2,{id:"usage-notes",children:"Usage notes"}),`
`,i.jsx(e.h3,{id:"general-notes",children:"General notes"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Combobox uses ",i.jsx(e.code,{children:".spectrum-PickerButton"})," instead of a ",i.jsx(e.code,{children:".spectrum-Picker"})]}),`
`,i.jsxs(e.li,{children:["The following classes must be added:",`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".spectrum-Combobox-textfield"})," is required on the Textfield outer element (",i.jsx(e.code,{children:".spectrum-Textfield"}),")"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".spectrum-Combobox-input"})," is required on the ",i.jsx(e.code,{children:"<input>"})," element inside of Textfields (",i.jsx(e.code,{children:".spectrum-Textfield-input"}),")"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".spectrum-Combobox-button"})," is required on the FieldButton (",i.jsx(e.code,{children:".spectrum-ActionButton spectrum-ActionButton--sizeM"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,i.jsx(e.h3,{id:"indicating-validity-and-focus",children:"Indicating validity and focus"}),`
`,i.jsxs(e.p,{children:["Validity and focus must be bubbled up to the parent so descendants siblings can be styled. Implementations should add the following classes to the ",i.jsx(e.code,{children:".spectrum-Combobox"})," parent class in the following situations:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".is-focused"})," - when the input or button is focused with the mouse"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".is-keyboardFocused"})," - when the input or button is focused with the keyboard"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".is-valid"})," - when the input has an explicit valid state"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".is-invalid"})," - when the input has an explicit invalid state"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".is-disabled"})," - when the control is disabled; should also add to the ",i.jsx(e.code,{children:".spectrum-Combobox-textfield"})," and include a ",i.jsx(e.code,{children:"[disabled]"})," attribute to the ",i.jsx(e.code,{children:".spectrum-Combobox-button"})]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:".is-loading"})," - when the progress circle is being shown"]}),`
`]}),`
`,i.jsx(e.h2,{id:"standard-variants",children:"Standard variants"}),`
`,i.jsx(e.h3,{id:"standard---open",children:"Standard - open"}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(e.h3,{id:"standard---with-label",children:"Standard - with label"}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(e.h3,{id:"standard---closed",children:"Standard - closed"}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(e.h3,{id:"standard---invalid",children:"Standard - invalid"}),`
`,i.jsx(n,{of:j}),`
`,i.jsx(e.h3,{id:"standard---loading",children:"Standard - loading"}),`
`,i.jsx(n,{of:b}),`
`,i.jsx(e.h3,{id:"standard---disabled",children:"Standard - disabled"}),`
`,i.jsx(n,{of:f}),`
`,i.jsx(e.h2,{id:"quiet-variants",children:"Quiet variants"}),`
`,i.jsx(e.h3,{id:"quiet---open",children:"Quiet - open"}),`
`,i.jsx(n,{of:g}),`
`,i.jsx(e.h3,{id:"quiet---with-label",children:"Quiet - with label"}),`
`,i.jsx(n,{of:C}),`
`,i.jsx(e.h3,{id:"quiet---closed",children:"Quiet - closed"}),`
`,i.jsx(n,{of:v}),`
`,i.jsx(e.h3,{id:"quiet---invalid",children:"Quiet - invalid"}),`
`,i.jsx(n,{of:w}),`
`,i.jsx(e.h3,{id:"quiet---loading",children:"Quiet - loading"}),`
`,i.jsx(n,{of:Q}),`
`,i.jsx(e.h3,{id:"quiet---disabled",children:"Quiet - disabled"}),`
`,i.jsx(n,{of:q}),`
`,i.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,i.jsx(h,{})]})}function hi(s={}){const{wrapper:e}={...o(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(d,{...s})}):d(s)}export{hi as default};
