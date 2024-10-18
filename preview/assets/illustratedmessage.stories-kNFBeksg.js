import{T as p}from"./template-BVkzJCOv.js";import{d as M}from"./index-BL42WGY7.js";import{k as a}from"./lit-element-C96egxJg.js";import{R as v,n as c,T as n,V as I}from"./template-C7mrcesf.js";const k="index.css",w=[".spectrum-IllustratedMessage",".spectrum-IllustratedMessage-accent",".spectrum-IllustratedMessage-description",".spectrum-IllustratedMessage-heading",".spectrum-IllustratedMessage-illustration",".spectrum-IllustratedMessage:lang(ja)",".spectrum-IllustratedMessage:lang(ko)",".spectrum-IllustratedMessage:lang(zh)"],z=["--mod-illustrated-message-content-maximum-width","--mod-illustrated-message-description-color","--mod-illustrated-message-description-font-family","--mod-illustrated-message-description-font-size","--mod-illustrated-message-description-font-style","--mod-illustrated-message-description-font-weight","--mod-illustrated-message-description-line-height","--mod-illustrated-message-description-max-inline-size","--mod-illustrated-message-description-pointer-events","--mod-illustrated-message-description-position","--mod-illustrated-message-description-z-index","--mod-illustrated-message-display","--mod-illustrated-message-heading-max-inline-size","--mod-illustrated-message-heading-to-body","--mod-illustrated-message-heading-to-description","--mod-illustrated-message-illustration-accent-color","--mod-illustrated-message-illustration-color","--mod-illustrated-message-pointer-events","--mod-illustrated-message-title-color","--mod-illustrated-message-title-font-family","--mod-illustrated-message-title-font-size","--mod-illustrated-message-title-font-style","--mod-illustrated-message-title-font-weight","--mod-illustrated-message-title-line-height","--mod-illustrated-message-title-to-heading"],C=["--spectrum-illustrated-message-body-size","--spectrum-illustrated-message-cjk-title-size","--spectrum-illustrated-message-description-color","--spectrum-illustrated-message-description-font-family","--spectrum-illustrated-message-description-font-size","--spectrum-illustrated-message-description-font-style","--spectrum-illustrated-message-description-font-weight","--spectrum-illustrated-message-description-line-height","--spectrum-illustrated-message-description-max-inline-size","--spectrum-illustrated-message-heading-max-inline-size","--spectrum-illustrated-message-heading-to-description","--spectrum-illustrated-message-illustration-accent-color","--spectrum-illustrated-message-illustration-color","--spectrum-illustrated-message-maximum-width","--spectrum-illustrated-message-title-color","--spectrum-illustrated-message-title-font-family","--spectrum-illustrated-message-title-font-size","--spectrum-illustrated-message-title-font-style","--spectrum-illustrated-message-title-font-weight","--spectrum-illustrated-message-title-line-height","--spectrum-illustrated-message-title-size","--spectrum-illustrated-message-title-to-heading"],T=["--spectrum-accent-visual-color","--spectrum-body-color","--spectrum-body-line-height","--spectrum-body-sans-serif-font-style","--spectrum-body-sans-serif-font-weight","--spectrum-heading-color","--spectrum-heading-line-height","--spectrum-heading-sans-serif-font-style","--spectrum-heading-sans-serif-font-weight","--spectrum-neutral-visual-color","--spectrum-sans-font-family-stack","--spectrum-spacing-400","--spectrum-spacing-75"],A=[],D={sourceFile:k,selectors:w,modifiers:z,component:C,global:T,"system-theme":[],passthroughs:A,"high-contrast":["--highcontrast-illustrated-message-illustration-accent-color","--highcontrast-illustrated-message-illustration-color"]},$="@spectrum-css/illustratedmessage",j="7.1.3",S="The Spectrum CSS illustratedmessage component",_="Apache-2.0",V="Adobe",F="https://opensource.adobe.com/spectrum-css/illustratedmessage",H={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/illustratedmessage"},O={url:"https://github.com/adobe/spectrum-css/issues"},R={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},E="dist/index.css",L=["dist/*","*.md","package.json","stories/*","metadata/*"],P={"@spectrum-css/tokens":">=14","@spectrum-css/typography":">=6"},W={"@spectrum-css/tokens":"workspace:^","@spectrum-css/typography":"workspace:^"},G=["spectrum","css","design system","adobe"],U={access:"public"},Z=[{guidelines:"https://spectrum-contributions.corp.adobe.com/page/illustrated-message-beta",rootClass:"spectrum-IllustratedMessage"}],B={name:$,version:j,description:S,license:_,author:V,homepage:F,repository:H,bugs:O,exports:R,main:E,files:L,peerDependencies:P,devDependencies:W,keywords:G,publishConfig:U,spectrum:Z},g=({rootClass:s="spectrum-IllustratedMessage",heading:r,description:i,customClasses:y=[],useAccentColor:b=!1}={},l={})=>a`
	<div
		class=${v({[s]:!0,...y.reduce((t,x)=>({...t,[x]:!0}),{})})}
	>
		${J(b)}
		${c(r,()=>n({semantics:"heading",size:"m",customClasses:[`${s}-heading`],content:[r]},l))}
		${c(i,()=>n({semantics:"body",size:"s",customClasses:[`${s}-description`],content:[...i.map(t=>typeof t=="function"?t({}):t)]},l))}
	</div>
`,J=(s=!1)=>a`
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
			class="cls-1 ${s?"spectrum-IllustratedMessage-accent":""}"
			d="M110.53,85.66,100.26,95.89a1.09,1.09,0,0,1-1.52,0L88.47,85.66"
		/>
		<line
			class="cls-1 ${s?"spectrum-IllustratedMessage-accent":""}"
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
`,h=I({Template:g,testData:[{heading:"Error 404: Page not found",description:["This page isn't available. Try checking the URL or visit a different page."],useAccentColor:!1},{testHeading:"With accent color",heading:"Drag and drop your file",description:[()=>a`${p({url:"#",text:"Select a file"})} from your computer.`],useAccentColor:!0}]}),q={title:"Illustrated message",component:"IllustratedMessage",argTypes:{useAccentColor:{name:"Illustration accent color",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},heading:{name:"Heading",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},description:{name:"Description",table:{category:"Content",disable:!0}}},args:{rootClass:"spectrum-IllustratedMessage",useAccentColor:!1},parameters:{packageJson:B,metadata:D,docs:{description:{component:"The Illustrated Message displays an illustration along with a heading and description. Optionally, part of the illustration can use an accent color. It can be used for status and errors, or as a call to action. For example, the Drop Zone component makes use of Illustrated Message as an area to drag and drop files."}}}},f=h.bind({});f.args={heading:"Error 404: Page not found",description:["This page isn't available. Try checking the URL or visit a different page."]};const e=g.bind({});e.tags=["!dev"];e.args={heading:"Drag and drop your file",description:[()=>a`${p({url:"#",text:"Select a file"})} from your computer.`],useAccentColor:!0};e.parameters={chromatic:{disableSnapshot:!0}};const o=h.bind({});o.tags=["!autodocs","!dev"];o.parameters={chromatic:{forcedColors:"active",modes:M}};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,description:{story:"To use the accent color, the class `.spectrum-IllustratedMessage-accent` can be added to element(s) within the illustration SVG.",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};const K=["Default","AccentColor","WithForcedColors"],ee=Object.freeze(Object.defineProperty({__proto__:null,AccentColor:e,Default:f,WithForcedColors:o,__namedExportsOrder:K,default:q},Symbol.toStringTag,{value:"Module"}));export{q as I,g as T,ee as i};
