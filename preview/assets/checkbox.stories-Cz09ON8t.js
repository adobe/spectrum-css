import{d as c}from"./index-BCEELo55.js";import{e as p}from"./states-DzrSzBKQ.js";import"./lit-element-CJjJlyWZ.js";import{x as d}from"./lit-html-BdGv-Ldy.js";import{T as o}from"./template-BSRXx7Ch.js";import"./template-D5ShUZ_q.js";import"./class-map-sTkR_Npl.js";import"./if-defined-Bo9G1hLT.js";import"./style-map-yx2CMG_J.js";import"./when-BR7zwNJC.js";const b="9.1.1",z={title:"Checkbox",component:"Checkbox",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},isEmphasized:{name:"Emphasized styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:{type:"boolean"}},isInvalid:p,isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isChecked:{name:"Checked",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:{type:"boolean"}},isIndeterminate:{name:"Checkbox indeterminate",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isReadOnly:{name:"Read only",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Checkbox",size:"m",label:"Checkbox",isChecked:!1,isDisabled:!1,isEmphasized:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1},parameters:{actions:{handles:['click input[type="checkbox"]']},componentVersion:b,docs:{description:{component:"Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected."}}}},y=a=>d`
    <div style="display: flex; flex-direction: column; padding: 16px">
        ${o({...a,iconName:void 0})}
        ${o({...a,isChecked:!0})}
        ${o({...a,isIndeterminate:!0})}
            ${o({...a,isDisabled:!0})}
        ${o({...a,label:"Checkbox with wrapping label text",customStyles:{"max-inline-size":"100px"}})}
    </div>
`,e=y.bind({});e.args={id:"default-checkbox"};const t=e.bind({});t.args=e.args;t.tags=["!autodocs","!dev","test"];t.parameters={chromatic:{forcedColors:"active",modes:c}};var n,s,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
    <div style="display: flex; flex-direction: column; padding: 16px">
        \${Template({
  ...args,
  iconName: undefined
})}
        \${Template({
  ...args,
  isChecked: true
})}
        \${Template({
  ...args,
  isIndeterminate: true
})}
            \${Template({
  ...args,
  isDisabled: true
})}
        \${Template({
  ...args,
  label: "Checkbox with wrapping label text",
  customStyles: {
    "max-inline-size": "100px"
  }
})}
    </div>
\``,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"CheckboxGroup.bind({})",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const D=["Default","WithForcedColors"];export{e as Default,t as WithForcedColors,D as __namedExportsOrder,z as default};
