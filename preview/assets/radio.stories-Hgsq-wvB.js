import{R as J,s as L,a as M,g as V,C as W,V as P,S as U}from"./template-CykOH8vE.js";import{d as q}from"./index-BL42WGY7.js";import{j as K,i as Q,l as X}from"./states-D366RZcH.js";import{s as Y,a as Z}from"./variants-YiDXN7gG.js";import{k as E}from"./lit-element-C96egxJg.js";const ee="@spectrum-css/radio",te="9.3.0",se="The Spectrum CSS radio component",ae="Apache-2.0",oe="Adobe",ie="https://opensource.adobe.com/spectrum-css/radio",ne={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/radio"},de={url:"https://github.com/adobe/spectrum-css/issues"},re={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},ce="dist/index.css",pe=["dist/*","*.md","package.json","stories/*","metadata/*"],le={"@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14"},me={"@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^"},ue=["spectrum","css","design system","adobe"],he={access:"public"},be={name:ee,version:te,description:se,license:ae,author:oe,homepage:ie,repository:ne,bugs:de,exports:re,main:ce,files:pe,peerDependencies:le,devDependencies:me,keywords:ue,publishConfig:he},l=({rootClass:e="spectrum-Radio",size:t="m",label:j,name:p,isEmphasized:H=!1,isChecked:u=!1,isDisabled:h=!1,isReadOnly:_=!1,id:d=V("radio"),customClasses:I=[],customStyles:A={}}={},B={})=>{const{updateArgs:G}=B,b=typeof d<"u"?d+="-input":typeof p<"u"?d=p+"-input":"radio-0";return E`
		<div
			class=${J({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--emphasized`]:H,"is-readOnly":_,...I.reduce((N,F)=>({...N,[F]:!0}),{})})}
			style=${L(A)}
			id=${M(d)}
		>
			<input
				type="radio"
				name=${p}
				class="${e}-input"
				id=${b}
				?checked=${u}
				?disabled=${h}
				@change=${function(){h||G({isChecked:!u})}}
			/>
			<span class="${e}-button ${e}-button--sizeS"></span>
			<label class="${e}-label ${e}-label--sizeS" for=${b}
				>${j}</label
			>
		</div>
	`},n=(e,t)=>W({withBorder:!1,direction:"column",wrapperStyles:{rowGap:"0px",alignItems:"flex-start"},content:E`
		${l({...e,label:"Example label",id:"radio-1-"+((e==null?void 0:e.id)??"default"),name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
		${l({...e,isChecked:!0,label:"Initially selected radio button that has wrapping label text",customStyles:{"max-width":"220px"},id:"radio-2-"+((e==null?void 0:e.id)??"default"),name:"radio-example-"+((e==null?void 0:e.name)??"default")},t)}
	`}),O=P({Template:l,testData:[{testHeading:"Default"},{testHeading:"Emphasized",isEmphasized:!0},{testHeading:"Truncation",withStates:!1,label:"Emphasized radio button label that is so long it has to wrap",customStyles:{"max-width":"220px"}}],stateData:[{testHeading:"Checked",isChecked:!0},{testHeading:"Disabled",isDisabled:!0},{testHeading:"Read-only",isReadOnly:!0}]}),fe={title:"Radio",component:"Radio",argTypes:{size:Y(["s","m","l","xl"]),label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},name:{name:"Name",description:"The value of the `name` attribute on the `input` element.",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},isEmphasized:Z,isChecked:K,isDisabled:Q,isReadOnly:X},args:{rootClass:"spectrum-Radio",size:"m",label:"Label",isEmphasized:!1,isChecked:!1,isDisabled:!1,isReadOnly:!1},parameters:{actions:{handles:['click input[type="radio"]']},packageJson:be,docs:{description:{component:`Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.

Radio buttons should not be used on their own, they should always be used within a [field group](?path=/docs/components-field-group--docs). Invalid radio buttons are signified by including
[help text](?path=/docs/components-help-text--docs) in a field group. Sample usage for an [invalid radio state](?path=/docs/components-field-group--docs#invalid) is included in the field group documentation.`}}}},r=O.bind({});r.args={};r.tags=["!autodocs"];const m=O.bind({});m.tags=["!autodocs","!dev"];m.parameters={chromatic:{forcedColors:"active",modes:q}};const a=n.bind({});a.args=r.args;a.tags=["!dev"];a.parameters={chromatic:{disableSnapshot:!0}};a.storyName="Default";const s=(e,t)=>U({Template:n,withHeading:!1,withBorder:!1,...e},t);s.args={name:"sizing",id:"sizing"};s.tags=["!dev"];s.parameters={chromatic:{disableSnapshot:!0}};const i=n.bind({});i.args={isEmphasized:!0,name:"emphasized"};i.tags=["!dev"];i.parameters={chromatic:{disableSnapshot:!0}};const c=n.bind({});c.args={isDisabled:!0,name:"disabled"};c.tags=["!dev"];c.parameters={chromatic:{disableSnapshot:!0}};const o=n.bind({});o.storyName="Read-only";o.args={isReadOnly:!0,name:"read-only"};o.tags=["!dev"];o.parameters={chromatic:{disableSnapshot:!0}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,description:{story:"The following example has two radio buttons in order to demonstrate the difference between selected and unselected.",...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var x,w,S,R,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`(args, context) => Sizes({
  Template: BasicGroupTemplate,
  withHeading: false,
  withBorder: false,
  ...args
}, context)`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:"Radios come in four different sizes: small, medium, large, and extra-large. The medium size is the default.",...(v=(R=s.parameters)==null?void 0:R.docs)==null?void 0:v.description}}};var z,k,$;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,description:{story:`The emphasized option provides a visual prominence for the selected radio button. 
It is best for forms, settings, lists or grids of assets, and other situations where a
radio button needs to be noticed.`,...($=(k=i.parameters)==null?void 0:k.docs)==null?void 0:$.description}}};var D,T,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,description:{story:`A radio group has a read-only option for when it's in the disabled state but still needs to be shown.
This allows for content to be copied, but not interacted with or changed.

- Read-only radio buttons are disabled, but not all disabled radio buttons are read-only.
- Read-only radio buttons do not have a focus ring, but the button should be focusable.`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};const ge=["Default","WithForcedColors","Standard","Sizing","Emphasized","Disabled","ReadOnly"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:c,Emphasized:i,ReadOnly:o,Sizing:s,Standard:a,WithForcedColors:m,__namedExportsOrder:ge,default:fe},Symbol.toStringTag,{value:"Module"}));export{fe as R,l as T,ve as r};
