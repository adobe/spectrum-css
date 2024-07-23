import{d as $}from"./index-BCEELo55.js";import{i as h}from"./states-DzrSzBKQ.js";import{T as v}from"./template-CU9oPm8-.js";import{T as b}from"./template-B5CNIEfi.js";import{T as A}from"./template-CLOJq6Hl.js";import{T}from"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import{V as B}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as p}from"./lit-html-BdGv-Ldy.js";import{a as r}from"./class-map-sTkR_Npl.js";import{n as i}from"./when-BR7zwNJC.js";import"./template-BTVRUgwL.js";import"./if-defined-Bo9G1hLT.js";import"./style-map-yx2CMG_J.js";import"./capitalize-D60SaZ2R.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";import"./upperCase-0eNr0WW7.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";const x="2.2.0",w=({rootClass:e="spectrum-AlertBanner",isOpen:d=!0,text:m,variant:o,hasActionButton:g,customClasses:f=[]}={},a={})=>p`
		<div
			class=${r({[e]:!0,"is-open":d,[`${e}--${o}`]:typeof o<"u",...f.reduce((n,y)=>({...n,[y]:!0}),{})})}
		>
			<div class=${r({[`${e}-body`]:!0})}>
				<div class=${r({[`${e}-content`]:!0})}>
					${i(["negative","info"].some(n=>o===n),()=>T({iconName:o==="negative"?"Alert":"Info",customClasses:[`${e}-icon`]},a))}
					${i(m,()=>p`
						<p class=${r({[`${e}-text`]:!0})}>${m}</p>
					`)}
				</div>
				${i(g,()=>v({size:"m",staticColor:"white",treatment:"outline",label:"Action"},a))}
			</div>
			<div class=${r({[`${e}-end`]:!0})}>
				${A({vertical:!0,size:"s",tag:"div"})}
				${b({size:"m",staticColor:"white",onclick},a)}
			</div>
		</div>
	`,C=B({Template:w,testData:[{testHeading:"Neutral"},{testHeading:"Informational",text:"Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purcahsed the software.",variant:"info",hasActionButton:!1},{testHeading:"Warning",text:"Connection interupted. Check your network to continue.",variant:"negative",hasActionButton:!0},{testHeading:"Closed",isOpen:!1}]}),Q={title:"Alert banner",component:"AlertBanner",argTypes:{isOpen:h,text:{name:"Text",type:{name:"string",required:!0},table:{type:{summary:"string"},disable:!1,category:"Content"},control:{type:"text"}},variant:{name:"Background color variants",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["neutral","info","negative"],control:"radio"},hasActionButton:{name:"Display action button",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Content"},control:"boolean"}},args:{rootClass:"spectrum-AlertBanner",isOpen:!1,variant:"neutral"},parameters:{actions:{handles:["click .spectrum-AlertBanner button"]},componentVersion:x,docs:{description:{component:"The alert banner show pressing and high-signal messages, such as system alerts. They're meant to be noticed and prompt users to take action."}}}},s=C.bind({});s.args={isOpen:!0,hasActionButton:!0,text:"Your trial has expired"};const t=s.bind({});t.args=s.args;t.tags=["!autodocs","!dev","test"];t.parameters={chromatic:{forcedColors:"active",modes:$}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"AlertBannerGroup.bind({})",...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const R=["Default","WithForcedColors"];export{s as Default,t as WithForcedColors,R as __namedExportsOrder,Q as default};
