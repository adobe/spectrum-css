import g from"./actionbutton.stories-A3GYwxv4.js";import{d as h}from"./index-BCEELo55.js";import{T as s}from"./template-Zxf6qo95.js";import{T as u}from"./template-CU9oPm8-.js";import{Default as y}from"./splitbutton.stories-BDm9swga.js";import{T as B}from"./template-C3bVK-Qx.js";import"./lit-element-CJjJlyWZ.js";import{x as m}from"./lit-html-BdGv-Ldy.js";import{a as l}from"./class-map-sTkR_Npl.js";import{c as T}from"./repeat-Du-egFmu.js";import{o as c}from"./style-map-yx2CMG_J.js";import"./icon.stories-DZE3EIDq.js";import"./template-Df-YB4AQ.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./if-defined-Bo9G1hLT.js";import"./capitalize-D60SaZ2R.js";import"./template-D5ShUZ_q.js";import"./states-DzrSzBKQ.js";import"./lowerCase-CIorQk0G.js";import"./_createCompounder-DY9ZW94_.js";import"./template-BTVRUgwL.js";import"./template-D7lOzDBB.js";import"./directive-helpers-F-Ou1E0_.js";const C="8.1.1",n=({rootClass:t="spectrum-Pagination",size:e="m",customClasses:p=[],variant:r,items:b}={},o={})=>r==="explicit"?m`
			<nav
				class=${l({[t]:!0,[`${t}--explicit`]:!0,...p.reduce((i,a)=>({...i,[a]:!0}),{})})}
			>
				${s({size:e,isQuiet:!0,iconSet:"ui",iconName:"ChevronLeft",customClasses:[`${t}-prevButton`]},o)}
				${B({size:e,value:"1",customClasses:[`${t}-textfield`]},o)}
				<span class="${t}-counter">of 89 pages</span>
				${s({size:e,isQuiet:!0,iconSet:"ui",iconName:"ChevronRight",customClasses:[`${t}-nextButton`]},o)}
			</nav>
		`:r=="button"?y({position:"left",variant:"accent",label:"Next",iconName:"ChevronLeft100",labelIconName:"ChevronRight100",customFirstButtonClasses:["spectrum-Pagination-prevButton"],customLastButtonClasses:["spectrum-Pagination-nextButton"]},o):m`
		<nav
			class=${l({[t]:!0,[`${t}--${r}`]:typeof r<"u",...p.reduce((i,a)=>({...i,[a]:!0}),{})})}
		>
			${u({size:e,variant:"primary",treatment:"outline",label:"Prev",customClasses:[`${t}-prevButton`]},o)}
			${T(b,i=>i.id,i=>typeof i=="object"?s({...i,size:e,isQuiet:!0},o):i)}
			${u({size:e,variant:"primary",treatment:"outline",label:"Next",customClasses:[`${t}-nextButton`]},o)}
		</nav>
	`,$=(t,e)=>m`
		<div style=${c({display:window.isChromatic()?"none":void 0})}>
			${n(t,e)}
		</div>
		<div style=${c({display:window.isChromatic()?"flex":"none","flex-direction":"column",gap:"32px"})}>
			${n(t,e)}
			${n({...t,variant:"explicit"},e)}
			${n({...t,variant:"button"},e)}
		</div>
	`;var d,f;const z={title:"Pagination",component:"Pagination",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},variant:{table:{disable:!0}}},args:{rootClass:"spectrum-Pagination",size:"m",variant:"listing",items:[{id:1,label:"1",isSelected:!0},{id:2,label:"2"},{id:3,label:"..."},{id:10,label:"10"}]},parameters:{actions:{handles:[...((f=(d=g.parameters)==null?void 0:d.actions)==null?void 0:f.handles)??[]]},componentVersion:C,docs:{description:{component:"The pagination component displays numbered buttons or an input field to allow for navigation."}}}},P=$.bind({});P.args={};const v=$.bind({});v.tags=["!autodocs","!dev","test"];v.parameters={chromatic:{forcedColors:"active",modes:h}};const tt=["Default","WithForcedColors"];export{P as Default,v as WithForcedColors,tt as __namedExportsOrder,z as default};
