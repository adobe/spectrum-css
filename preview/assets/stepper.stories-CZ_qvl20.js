import{d as c}from"./index-BCEELo55.js";import{e as $,d as y}from"./states-DzrSzBKQ.js";import"./lit-element-CJjJlyWZ.js";import{x as b}from"./lit-html-BdGv-Ldy.js";import{o as i}from"./style-map-yx2CMG_J.js";import{T as e}from"./template-Db1IFiUx.js";import"./class-map-sTkR_Npl.js";import"./template-D4xZNe-s.js";import"./template-D5ShUZ_q.js";import"./if-defined-Bo9G1hLT.js";import"./when-BR7zwNJC.js";import"./template-C3bVK-Qx.js";import"./template-D7lOzDBB.js";import"./template-Df-YB4AQ.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-BTVRUgwL.js";const v="6.1.2",O={title:"Stepper",component:"Stepper",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},isQuiet:{name:"Quiet",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},hideStepper:{name:"Hide stepper",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isInvalid:$,isFocused:y,isKeyboardFocused:{name:"Keyboard focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Stepper",size:"m",isQuiet:!1,isFocused:!1,isKeyboardFocused:!1,isInvalid:!1,isDisabled:!1,hideStepper:!1},parameters:{componentVersion:v,docs:{description:{component:"A stepper can be used to increment or decrement a value by a specified amount via an up/down button. An input field displays the current value."}}}},l=(n,m)=>b`
    <div style=${i({display:window.isChromatic()?"none":"contents"})}>
        ${e(n,m)}
    </div>
    <div style=${i({display:window.isChromatic()?"flex":"none","flex-direction":"column",gap:"8px",padding:"16px"})}>
        ${e({...n,isFocused:!0})}
        ${e({...n,isKeyboardFocused:!0})}
        ${e({...n,isInvalid:!0})}
        ${e({...n,isInvalid:!0,isFocused:!0})}
        ${e({...n,isInvalid:!0,isKeyboardFocused:!0})}
        ${e({...n,isDisabled:!0})}
        ${e({...n,isQuiet:!0})}
        ${e({...n,isQuiet:!0,isFocused:!0})}
        ${e({...n,isQuiet:!0,isKeyboardFocused:!0})}
        ${e({...n,isQuiet:!0,isInvalid:!0})}
        ${e({...n,isQuiet:!0,isInvalid:!0,isFocused:!0})}
        ${e({...n,isQuiet:!0,isInvalid:!0,isKeyboardFocused:!0})}
        ${e({...n,isQuiet:!0,isDisabled:!0})}
        ${e({...n,hideStepper:!0})}
        ${e({...n,hideStepper:!0,isFocused:!0})}
        ${e({...n,hideStepper:!0,isKeyboardFocused:!0})}
        ${e({...n,hideStepper:!0,isInvalid:!0})}
        ${e({...n,hideStepper:!0,isInvalid:!0,isFocused:!0})}
        ${e({...n,hideStepper:!0,isInvalid:!0,isKeyboardFocused:!0})}
        ${e({...n,hideStepper:!0,isDisabled:!0})}
    </div>
`,r=l.bind({});r.args={};const t=l.bind({});t.tags=["!autodocs","!dev","test"];t.parameters={chromatic:{forcedColors:"active",modes:c}};const T=e.bind({});T.args={hideStepper:!0};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args, context) => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : "contents"
})}>
        \${Template(args, context)}
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "flex" : "none",
  "flex-direction": "column",
  "gap": "8px",
  "padding": "16px"
})}>
        \${Template({
  ...args,
  isFocused: true
})}
        \${Template({
  ...args,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isInvalid: true
})}
        \${Template({
  ...args,
  isInvalid: true,
  isFocused: true
})}
        \${Template({
  ...args,
  isInvalid: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isDisabled: true
})}
        \${Template({
  ...args,
  isQuiet: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isInvalid: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isInvalid: true,
  isFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isInvalid: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isDisabled: true
})}
        \${Template({
  ...args,
  hideStepper: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isInvalid: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isInvalid: true,
  isFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isInvalid: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isDisabled: true
})}
    </div>
\``,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`(args, context) => html\`
    <div style=\${styleMap({
  "display": window.isChromatic() ? "none" : "contents"
})}>
        \${Template(args, context)}
    </div>
    <div style=\${styleMap({
  "display": window.isChromatic() ? "flex" : "none",
  "flex-direction": "column",
  "gap": "8px",
  "padding": "16px"
})}>
        \${Template({
  ...args,
  isFocused: true
})}
        \${Template({
  ...args,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isInvalid: true
})}
        \${Template({
  ...args,
  isInvalid: true,
  isFocused: true
})}
        \${Template({
  ...args,
  isInvalid: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isDisabled: true
})}
        \${Template({
  ...args,
  isQuiet: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isInvalid: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isInvalid: true,
  isFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isInvalid: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  isQuiet: true,
  isDisabled: true
})}
        \${Template({
  ...args,
  hideStepper: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isInvalid: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isInvalid: true,
  isFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isInvalid: true,
  isKeyboardFocused: true
})}
        \${Template({
  ...args,
  hideStepper: true,
  isDisabled: true
})}
    </div>
\``,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const j=["Default","WithForcedColors","HideStepper"];export{r as Default,T as HideStepper,t as WithForcedColors,j as __namedExportsOrder,O as default};
