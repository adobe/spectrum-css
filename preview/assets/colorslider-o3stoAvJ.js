import{j as e}from"./jsx-runtime-_09DdfSq.js";import{u as n}from"./index-CXGxovgH.js";import{ae as l,af as a,ag as d,ah as c,ai as o,aj as h}from"./index-BreQY16V.js";import{C as p}from"./component-details-CkbMiim1.js";import{C as i,D as m,A as x,a as j,V as u,W as f}from"./colorslider.stories-Bc1lm_mQ.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./index-BCEELo55.js";import"./states-DzrSzBKQ.js";import"./template-DnxY-KqC.js";import"./template-DTUdi1ER.js";import"./lit-element-CJjJlyWZ.js";import"./lit-html-BdGv-Ldy.js";import"./class-map-sTkR_Npl.js";import"./style-map-yx2CMG_J.js";import"./template-VCbHummt.js";import"./if-defined-Bo9G1hLT.js";import"./when-BR7zwNJC.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./v4-CQkTLCs1.js";function s(r){const t={code:"code",h2:"h2",li:"li",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,title:"Docs"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(p,{}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(t.h2,{id:"usage-notes",children:"Usage notes"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Set the color of the nested Color handle component to match Color slider’s currently selected color using its custom property: ",e.jsx(t.code,{children:"--spectrum-picked-color"})]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:".spectrum-ColorHandle"})," should be moved with ",e.jsx(t.code,{children:"inset-inline-*"})," (horizontal) or ",e.jsx(t.code,{children:"inset-block-*"})," (vertical) style properties as the slider is dragged"]}),`
`,e.jsxs(t.li,{children:["Ensure that you set the min and max attributes of the ",e.jsx(t.code,{children:".spectrum-ColorSlider-slider"})," input to the corresponding scale (i.e. 0 to 1 for a, 0 to 255 for r, etc)"]}),`
`,e.jsxs(t.li,{children:["Ensure that you set the step attribute of the ",e.jsx(t.code,{children:".spectrum-ColorSlider-slider"})," input appropriately (i.e. 0.1 for a, s, v or 1 and h, r, etc)"]}),`
`,e.jsxs(t.li,{children:["Set the background style property of ",e.jsx(t.code,{children:".spectrum-ColorSlider-gradient"})," to the gradient of the colors to be selected. The CSS will automatically reverse the gradient element horizontally when using a RTL (right-to-left) base direction",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Alternatively, provide an ",e.jsx(t.code,{children:"<img>"})," element with the gradient you want to use and apply the ",e.jsx(t.code,{children:".spectrum-ColorSlider-gradient"})," class"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"standard",children:"Standard"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"alpha",children:"Alpha"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(t.h2,{id:"vertical",children:"Vertical"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(t.h2,{id:"with-image",children:"With image"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{})]})}function U(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{U as default};
