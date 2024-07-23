import{d as v}from"./index-BCEELo55.js";import"./lit-element-CJjJlyWZ.js";import{x as b}from"./lit-html-BdGv-Ldy.js";import{a as E}from"./class-map-sTkR_Npl.js";import{o as T}from"./if-defined-Bo9G1hLT.js";import{o as z}from"./style-map-yx2CMG_J.js";const k="9.2.2";__STORYBOOK_MODULE_PREVIEW_API__;const o=({rootClass:e="spectrum-Radio",size:t="m",label:g,name:f,isEmphasized:h,isChecked:s,isDisabled:l,isReadOnly:r,id:x,customClasses:$=[],customStyles:D={}}={},R={})=>{const{updateArgs:S}=R;return b`
		<div
			class=${E({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--emphasized`]:h,"is-readOnly":r,...$.reduce((O,_)=>({...O,[_]:!0}),{})})}
			style=${z(D)}
			id=${T(x)}
		>
			<input
				type="radio"
				name=${f}
				class="${e}-input"
				id="radio-0"
				?readOnly=${r}
				?checked=${s}
				?disabled=${l}
				@change=${()=>{l||S({isChecked:!s})}}
			/>
			<span class="${e}-button ${e}-button--sizeS"></span>
			<label class="${e}-label ${e}-label--sizeS" for="radio-0"
				>${g}</label
			>
		</div>
	`},w={title:"Radio",component:"Radio",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},name:{name:"Name",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:{type:"text"}},isEmphasized:{name:"Emphasized styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:{type:"boolean"}},isChecked:{name:"Radio selected",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:{type:"boolean"}},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isReadOnly:{name:"Read Only",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Radio",size:"m",label:"Label",isEmphasized:!1,isChecked:!1,isDisabled:!1,isReadOnly:!1},parameters:{actions:{handles:['click input[type="radio"]']},componentVersion:k,docs:{description:{component:"A radio selector allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare."}}}},y=(e,t)=>b`
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
            ${o({...e,label:"Default"},t)}
            ${o({...e,isEmphasized:!0,isChecked:!0,label:"Emphasized radio button label that is so long it has to wrap",customStyles:{"max-width":"220px"}},t)}
            ${o({...e,isDisabled:!0,label:"Disabled"},t)}
            ${o({...e,isDisabled:!0,isReadOnly:!0,label:"Read only"},t)}
        </div>
    `,n=y.bind({});n.args={};const a=y.bind({});a.tags=["!autodocs","!dev","test"];a.parameters={chromatic:{forcedColors:"active",modes:v}};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args, context) => {
  return html\`
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
            \${Template({
    ...args,
    label: "Default"
  }, context)}
            \${Template({
    ...args,
    isEmphasized: true,
    isChecked: true,
    label: "Emphasized radio button label that is so long it has to wrap",
    customStyles: {
      "max-width": "220px"
    }
  }, context)}
            \${Template({
    ...args,
    isDisabled: true,
    label: "Disabled"
  }, context)}
            \${Template({
    ...args,
    isDisabled: true,
    isReadOnly: true,
    label: "Read only"
  }, context)}
        </div>
    \`;
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args, context) => {
  return html\`
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
            \${Template({
    ...args,
    label: "Default"
  }, context)}
            \${Template({
    ...args,
    isEmphasized: true,
    isChecked: true,
    label: "Emphasized radio button label that is so long it has to wrap",
    customStyles: {
      "max-width": "220px"
    }
  }, context)}
            \${Template({
    ...args,
    isDisabled: true,
    label: "Disabled"
  }, context)}
            \${Template({
    ...args,
    isDisabled: true,
    isReadOnly: true,
    label: "Read only"
  }, context)}
        </div>
    \`;
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const C=["Default","WithForcedColors"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithForcedColors:a,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{w as R,o as T,j as r};
