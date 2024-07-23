import{d as h}from"./index-BCEELo55.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{T as s}from"./template-BTVRUgwL.js";import"./class-map-sTkR_Npl.js";import"./if-defined-Bo9G1hLT.js";import"./style-map-yx2CMG_J.js";const y="3.1.2",$={title:"Progress circle",component:"ProgressCircle",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l"],control:"select"},isIndeterminate:{name:"Indeterminate",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},staticColor:{name:"Static color",type:{name:"string"},table:{disable:!0,type:{summary:"string"},category:"Advanced"},options:["white"],control:"select"}},args:{rootClass:"spectrum-ProgressCircle",size:"m",isIndeterminate:!1,staticColor:void 0},parameters:{componentVersion:y,docs:{description:{component:"Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress."}}}},C=(o,b)=>a`
    ${window.isChromatic()?a`
        ${s(o)}
        ${s({...o,isIndeterminate:!0})}
    `:s(o)}
`,e=C.bind({});e.args={};const r=e.bind({});r.args=e.args;r.tags=["!autodocs","!dev","test"];r.parameters={chromatic:{forcedColors:"active",modes:h}};const t=e.bind({});t.tags=["!autodocs","!dev","test"];t.args={staticColor:"white"};t.parameters={chromatic:{modes:h}};var i,n,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, context) => html\`
    \${window.isChromatic() ? html\`
        \${Template(args, context)}
        \${Template({
  ...args,
  isIndeterminate: true
}, context)}
    \` : Template(args, context)}
\``,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"ProgressCircleGroup.bind({})",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,g,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"ProgressCircleGroup.bind({})",...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const I=["Default","WithForcedColors","StaticWhite"];export{e as Default,t as StaticWhite,r as WithForcedColors,I as __namedExportsOrder,$ as default};
