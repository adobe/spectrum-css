import{j as e}from"./jsx-runtime-_09DdfSq.js";import{u as n}from"./index-CXGxovgH.js";import{ae as l,af as a,ag as c,ah as d,ai as s,aj as h}from"./index-BreQY16V.js";import{C as p}from"./component-details-CkbMiim1.js";import{C as t,D as m,a as x,W as u}from"./colorwheel.stories-DvzwCE3j.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./index-BCEELo55.js";import"./states-DzrSzBKQ.js";import"./template-jFaH6k2X.js";import"./template-DnxY-KqC.js";import"./template-DTUdi1ER.js";import"./lit-element-CJjJlyWZ.js";import"./lit-html-BdGv-Ldy.js";import"./class-map-sTkR_Npl.js";import"./style-map-yx2CMG_J.js";import"./template-VCbHummt.js";import"./if-defined-Bo9G1hLT.js";import"./when-BR7zwNJC.js";function i(r){const o={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,title:"Docs"}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(p,{}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(o.h2,{id:"usage-notes",children:"Usage notes:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For a given rotation on the wheel, X, the ",e.jsx(o.code,{children:".spectrum-ColorHandle"})," should be moved by applying the style property ",e.jsx(o.code,{children:"transform: translate(${Y * Math.cos(X)}px, ${Y * Math.sin(X)}px)"}),", where Y is ",e.jsx(o.code,{children:"((radius - .spectrum-colorwheel-track-width) / 2))"})]}),`
`,e.jsxs(o.li,{children:["Set the value attribute of ",e.jsx(o.code,{children:".spectrum-ColorWheel-value"})," to the currently selected color (i.e. ",e.jsx(o.code,{children:"hsl(326, 100%, 50%)"}),")"]}),`
`,e.jsxs(o.li,{children:["Add ",e.jsx(o.code,{children:".is-dragged"})," when the handle is being dragged"]}),`
`]}),`
`,e.jsx(o.h2,{id:"standard",children:"Standard"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(o.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(o.h2,{id:"with-color-area",children:"With color area"}),`
`,e.jsx(o.p,{children:"Usage notes:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["To display with ColorArea inside of ColorWheel, add ColorArea to ",e.jsx(o.code,{children:".spectrum-ColorWheel-colorarea-container"})," with ",e.jsx(o.code,{children:'style="--mod-colorarea-width: 70.1%; --mod-colorarea-height: 70.1%"'})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:".spectrum-colorwheel-colorarea-container-size"})," is hard coded to position the ColorArea within the ColorWheel using ",e.jsx(o.code,{children:".spectrum-color-wheel-color-area-margin"}),". Using JS container size can be calcaulted with ",e.jsx(o.code,{children:"Math.sqrt(2 * R * R)"}),", where R is the ",e.jsx(o.code,{children:"innerRadius"})," as calcaulted for the clip paths"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:".spectrum-colorwheel-path"}),", ",e.jsx(o.code,{children:".spectrum-colorwheel-path-borders"}),", and ",e.jsx(o.code,{children:".spectrum-colorwheel-colorarea-container"})," are hard coded in CSS and include token values in custom CSS variables so they can be accessed with JS to and used to calculate these values, ",e.jsx(o.code,{children:`const wheel = document.querySelector(".spectrum-ColorWheel-wheel") getComputedStyle(wheel).getPropertyValue('--track-width'))`})]}),`
`]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{})]})}function J(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{J as default};
