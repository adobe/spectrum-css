import{T as u}from"./template-BzbLabtx.js";import{d as b}from"./index-BCEELo55.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import"./decorator-Dl7o6wQR.js";import{V as v}from"./utilities-BisrhIqU.js";import{Template as n}from"./template-Df-YB4AQ.js";import{a as x}from"./class-map-sTkR_Npl.js";import{n as c}from"./when-BR7zwNJC.js";const I="7.1.1",m=({rootClass:t="spectrum-IllustratedMessage",heading:r,description:l,customClasses:f=[],useAccentColor:y=!1},$)=>a`
	<div
		class=${x({[t]:!0,...f.reduce((s,M)=>({...s,[M]:!0}),{})})}
	>
		${T(y)}
		${c(r,()=>n({semantics:"heading",size:"m",customClasses:[`${t}-heading`],content:[r]}))}
		${c(l,()=>n({semantics:"body",size:"s",customClasses:[`${t}-description`],content:[...l.map(s=>typeof s=="function"?s({}):s)]}))}
	</div>
`,T=(t=!1)=>a`
	<svg
		class="spectrum-IllustratedMessage-illustration"
		width="199"
		height="98"
		viewBox="0 0 199 97.7"
	>
		<defs>
			<style>
				.cls-1,
				.cls-2 {
					fill: none;
					stroke-linecap: round;
					stroke-linejoin: round;
				}

				.cls-1 {
					stroke-width: 3px;
				}

				.cls-2 {
					stroke-width: 2px;
				}
			</style>
		</defs>
		<path
			class="cls-1 ${t?"spectrum-IllustratedMessage-accent":""}"
			d="M110.53,85.66,100.26,95.89a1.09,1.09,0,0,1-1.52,0L88.47,85.66"
		/>
		<line
			class="cls-1 ${t?"spectrum-IllustratedMessage-accent":""}"
			x1="99.5"
			y1="95.5"
			x2="99.5"
			y2="58.5"
		/>
		<path class="cls-1" d="M105.5,73.5h19a2,2,0,0,0,2-2v-43" />
		<path
			class="cls-1"
			d="M126.5,22.5h-19a2,2,0,0,1-2-2V1.5h-31a2,2,0,0,0-2,2v68a2,2,0,0,0,2,2h19"
		/>
		<line class="cls-1" x1="105.5" y1="1.5" x2="126.5" y2="22.5" />
		<path
			class="cls-2"
			d="M47.93,50.49a5,5,0,1,0-4.83-5A4.93,4.93,0,0,0,47.93,50.49Z"
		/>
		<path
			class="cls-2"
			d="M36.6,65.93,42.05,60A2.06,2.06,0,0,1,45,60l12.68,13.2"
		/>
		<path
			class="cls-2"
			d="M3.14,73.23,22.42,53.76a1.65,1.65,0,0,1,2.38,0l19.05,19.7"
		/>
		<path
			class="cls-1"
			d="M139.5,36.5H196A1.49,1.49,0,0,1,197.5,38V72A1.49,1.49,0,0,1,196,73.5H141A1.49,1.49,0,0,1,139.5,72V32A1.49,1.49,0,0,1,141,30.5H154a2.43,2.43,0,0,1,1.67.66l6,5.66"
		/>
		<rect
			class="cls-1"
			x="1.5"
			y="34.5"
			width="58"
			height="39"
			rx="2"
			ry="2"
		/>
	</svg>
`,g=v({Template:m,testData:[{heading:"Error 404: Page not found",description:["This page isn't available. Try checking the URL or visit a different page."],useAccentColor:!1},{testHeading:"With accent color",heading:"Drag and drop your file",description:[()=>a`${u({url:"#",text:"Select a file"})} from your computer.`],useAccentColor:!0}]}),A={title:"Illustrated message",component:"IllustratedMessage",argTypes:{useAccentColor:{name:"Illustration accent color",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},heading:{name:"Heading",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},description:{name:"Description",table:{category:"Content",disable:!0}}},args:{rootClass:"spectrum-IllustratedMessage",useAccentColor:!1},parameters:{componentVersion:I,docs:{description:{component:"The Illustrated Message displays an illustration along with a heading and description. Optionally, part of the illustration can use an accent color. It can be used for status and errors, or as a call to action. For example, the Drop Zone component makes use of Illustrated Message as an area to drag and drop files."}}}},h=g.bind({});h.args={heading:"Error 404: Page not found",description:["This page isn't available. Try checking the URL or visit a different page."]};const e=m.bind({});e.tags=["autodocs","!dev"];e.args={heading:"Drag and drop your file",description:[()=>a`${u({url:"#",text:"Select a file"})} from your computer.`],useAccentColor:!0};const o=g.bind({});o.tags=["!autodocs","!dev","test"];o.parameters={chromatic:{forcedColors:"active",modes:b}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,description:{story:"To use the accent color, the class `.spectrum-IllustratedMessage-accent` can be added to element(s) within the illustration SVG.",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};const C=["Default","AccentColor","WithForcedColors"],z=Object.freeze(Object.defineProperty({__proto__:null,AccentColor:e,Default:h,WithForcedColors:o,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{A as I,m as T,z as i};
