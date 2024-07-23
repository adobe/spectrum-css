import{d as b}from"./index-BCEELo55.js";import{a as v,d as g}from"./states-DzrSzBKQ.js";import{T as $}from"./template-jFaH6k2X.js";import{T as W}from"./template-DnxY-KqC.js";import"./lit-element-CJjJlyWZ.js";import{x as c}from"./lit-html-BdGv-Ldy.js";import{a as t}from"./class-map-sTkR_Npl.js";import{n as y}from"./when-BR7zwNJC.js";const C="4.1.1",a=({rootClass:e="spectrum-ColorWheel",customClasses:n=[],isDisabled:o=!1,isFocused:m=!1,isWithColorArea:p=!1,colorHandleStyle:u={"--spectrum-picked-color":"rgb(255, 0, 0)"}},l)=>c`
	<div class=${t({[e]:!0,"is-disabled":o,"is-focused":m,...n.reduce((h,f)=>({...h,[f]:!0}),{})})}>
		<div class="${e}-inner">
			<div class="${e}-colorarea-container">
			${y(p,()=>c`
				${$({isDisabled:o,customStyles:{"--mod-colorarea-width":"80px","--mod-colorarea-height":"80px"}},l)}
			`)}
			</div>
		</div>
		<div class=${t({[`${e}-border`]:!0,"is-disabled":o})}>
			<div class=${t({[`${e}-wheel`]:!0,"is-disabled":o})}></div>
		</div>
		${W({isDisabled:o,customClasses:[`${e}-handle`],customStyles:u},l)}
		<input type="range" class="${e}-slider" aria-label="hue" min="0" max="360" step="">
	</div>`,S={title:"Color wheel",component:"ColorWheel",argTypes:{isDisabled:v,isFocused:{...g,if:{arg:"isDisabled",truthy:!1}},isWithColorArea:{name:"With Color Area",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-ColorWheel",isDisabled:!1,isFocused:!1,isWithColorArea:!1},parameters:{componentVersion:C,docs:{description:{component:"The color wheel component lets users visually change an individual channel of a color on a circular track."}}}},d=a.bind({});d.args={};const r=a.bind({});r.tags=["autodocs","!dev"];r.args={isDisabled:!0};r.parameters={chromatic:{disableSnapshot:!0}};const s=a.bind({});s.tags=["autodocs","!dev"];s.args={isWithColorArea:!0};s.parameters={chromatic:{disableSnapshot:!0}};const i=a.bind({});i.tags=["!autodocs","!dev","test"];i.parameters={chromatic:{forcedColors:"active",modes:b}};const T=["Default","Disabled","WithColorArea","WithForcedColors"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Disabled:r,WithColorArea:s,WithForcedColors:i,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{k as C,d as D,s as W,r as a};
