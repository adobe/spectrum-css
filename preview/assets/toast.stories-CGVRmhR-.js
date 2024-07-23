import{d as y}from"./index-BCEELo55.js";import{T as $}from"./template-CU9oPm8-.js";import{T}from"./template-B5CNIEfi.js";import{T as h}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as C}from"./lit-html-BdGv-Ldy.js";import{a as k}from"./class-map-sTkR_Npl.js";import{o as L}from"./if-defined-Bo9G1hLT.js";import{o as w}from"./style-map-yx2CMG_J.js";import{n as m}from"./when-BR7zwNJC.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./template-BTVRUgwL.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";import"./upperCase-0eNr0WW7.js";const I="10.1.1",i=({rootClass:t="spectrum-Toast",message:d,inlineButtonLabel:n,variant:o,customClasses:u=[],customStyles:b={},id:f}={},a={})=>{let s="Info";return o==="negative"&&(s="Alert"),o==="positive"&&(s="CheckmarkCircle"),C`
		<div
			class=${k({[t]:!0,[`${t}--${o}`]:typeof o<"u",...u.reduce((g,v)=>({...g,[v]:!0}),{})})}
			id=${L(f)}
			style=${w(b)}
		>
			${m(o,()=>h({iconName:s,size:"m",customClasses:[`${t}-typeIcon`]},a))}
			<div class="${t}-body">
				<div class="${t}-content">${d}</div>
				${m(n,()=>$({variant:"secondary",size:"m",staticColor:"white",treatment:"outline",label:n},a))}
			</div>
			<div class="${t}-buttons">
				${T({size:"m",staticColor:"white",onclick},a)}
			</div>
		</div>
	`},R={title:"Toast",component:"Toast",argTypes:{variant:{table:{disable:!0}},message:{name:"Message",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},control:"text"},inlineButtonLabel:{name:"Inline button label",description:"Label for the inline button; if blank, no button is shown",type:{name:"string"},table:{category:"Advanced",type:{summary:"string"}},control:"text"}},args:{rootClass:"spectrum-Toast"},parameters:{actions:{handles:["click .spectrum-Toast button"]},componentVersion:I,docs:{description:{component:"Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken."}}}},r=i.bind({});r.args={message:"File has been archived",inlineButtonLabel:"Undo"};const x=i.bind({});x.args={variant:"info",message:"A new version of Lightroom Classic is now available",inlineButtonLabel:"Update"};const B=i.bind({});B.args={variant:"negative",message:"Unable to delete file",inlineButtonLabel:"Eject"};const z=i.bind({});z.args={variant:"positive",message:"Copied to clipboard",inlineButtonLabel:"Eject"};const e=r.bind({});e.args=r.args;e.tags=["!autodocs","!dev","test"];e.parameters={chromatic:{forcedColors:"active",modes:y}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"Template.bind({})",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const X=["Default","Info","Negative","Positive","WithForcedColors"];export{r as Default,x as Info,B as Negative,z as Positive,e as WithForcedColors,X as __namedExportsOrder,R as default};
