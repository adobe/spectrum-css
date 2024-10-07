import{ae as e,af as l,ag as a,ah as c,ai as d,aj as t,ak as h}from"./index-TjMdyE0H.js";import{u as i}from"./index-DEc0fggC.js";import{C as p,T as x}from"./ComponentDetails-DrLIX8tg.js";import{C as s,D as m,a as j,W as u}from"./colorwheel.stories-D7ARMPVH.js";import"./iframe-7tjs3EOx.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./capitalize-D60SaZ2R.js";import"./index-BL42WGY7.js";import"./states-D366RZcH.js";import"./template-CykOH8vE.js";import"./v4-CQkTLCs1.js";import"./lit-element-C96egxJg.js";import"./template-DyYXcNIO.js";import"./template-Dea2w9I9.js";import"./template-BktYrln9.js";import"./template-ZIwW6MgN.js";function n(r){const o={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,title:"Docs"}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(p,{}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(o.h2,{id:"usage-notes",children:"Usage notes:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["For a given rotation on the wheel, X, the ",e.jsx(o.code,{children:".spectrum-ColorHandle"})," should be moved by applying the style property ",e.jsx(o.code,{children:"transform: translate(${Y * Math.cos(X)}px, ${Y * Math.sin(X)}px)"}),", where Y is ",e.jsx(o.code,{children:"((radius - .spectrum-colorwheel-track-width) / 2))"})]}),`
`,e.jsxs(o.li,{children:["Set the value attribute of ",e.jsx(o.code,{children:".spectrum-ColorWheel-value"})," to the currently selected color (i.e. ",e.jsx(o.code,{children:"hsl(326, 100%, 50%)"}),")"]}),`
`,e.jsxs(o.li,{children:["Add ",e.jsx(o.code,{children:".is-dragged"})," when the handle is being dragged"]}),`
`]}),`
`,e.jsx(o.h2,{id:"standard",children:"Standard"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(o.h2,{id:"with-color-area",children:"With color area"}),`
`,e.jsx(o.p,{children:"Usage notes:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["To display with ColorArea inside of ColorWheel, add ColorArea to ",e.jsx(o.code,{children:".spectrum-ColorWheel-colorarea-container"})," with ",e.jsx(o.code,{children:'style="--mod-colorarea-width: 70.1%; --mod-colorarea-height: 70.1%"'})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:".spectrum-colorwheel-colorarea-container-size"})," is hard coded to position the ColorArea within the ColorWheel using ",e.jsx(o.code,{children:".spectrum-color-wheel-color-area-margin"}),". Using JS container size can be calcaulted with ",e.jsx(o.code,{children:"Math.sqrt(2 * R * R)"}),", where R is the ",e.jsx(o.code,{children:"innerRadius"})," as calcaulted for the clip paths"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:".spectrum-colorwheel-path"}),", ",e.jsx(o.code,{children:".spectrum-colorwheel-path-borders"}),", and ",e.jsx(o.code,{children:".spectrum-colorwheel-colorarea-container"})," are hard coded in CSS and include token values in custom CSS variables so they can be accessed with JS to and used to calculate these values, ",e.jsx(o.code,{children:`const wheel = document.querySelector(".spectrum-ColorWheel-wheel") getComputedStyle(wheel).getPropertyValue('--track-width'))`})]}),`
`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o.p,{children:"The component accepts the following inputs (properties):"}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h2,{id:"tagged-releases",children:"Tagged releases"}),`
`,e.jsx(x,{})]})}function z(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{z as default};
