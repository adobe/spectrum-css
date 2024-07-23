import{d as c}from"./index-BCEELo55.js";import"./lit-element-CJjJlyWZ.js";import{x as d}from"./lit-html-BdGv-Ldy.js";import{a as l}from"./class-map-sTkR_Npl.js";const p="4.1.1",e=({rootClass:t="spectrum-LogicButton",customClasses:n=[],variant:o="and",isDisabled:a=!1})=>d`
	<button
		class=${l({[t]:!0,[`${t}--${o}`]:typeof o<"u",...n.reduce((r,i)=>({...r,[i]:!0}),{})})}
		aria-disabled=${a?"true":"false"}
		?disabled=${a}
		type="button"
	>
		${o?o.charAt(0).toUpperCase()+o.slice(1):void 0}
	</button>
`,$={title:"Logic button",component:"LogicButton",argTypes:{variant:{name:"Variant",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["and","or"],control:"inline-radio"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-LogicButton",variant:"and",isDisabled:!1},parameters:{componentVersion:p,docs:{description:{component:"A logic button displays an operator within a boolean logic sequence."}}}},m=e.bind({});m.args={};const u=e.bind({});u.args={variant:"or"};const b=e.bind({});b.args={isDisabled:!0};const s=e.bind({});s.tags=["!autodocs","!dev","test"];s.parameters={chromatic:{forcedColors:"active",modes:c}};const h=["Default","Or","Disabled","WithForcedColors"];export{m as Default,b as Disabled,u as Or,s as WithForcedColors,h as __namedExportsOrder,$ as default};
