import{T as d}from"./template-DFFDn6QV.js";import{d as y}from"./index-_AwL4lpH.js";import{x as t}from"./lit-element-Cr8ugfRm.js";import{a as b,n as c,V as M}from"./decorator-DlLJAwnS.js";import{T as n}from"./template-DQFWcFnW.js";const x="index.css",v=[".spectrum-IllustratedMessage",".spectrum-IllustratedMessage-accent",".spectrum-IllustratedMessage-description",".spectrum-IllustratedMessage-heading",".spectrum-IllustratedMessage-illustration",".spectrum-IllustratedMessage:lang(ja)",".spectrum-IllustratedMessage:lang(ko)",".spectrum-IllustratedMessage:lang(zh)"],I=["--mod-illustrated-message-content-maximum-width","--mod-illustrated-message-description-color","--mod-illustrated-message-description-font-family","--mod-illustrated-message-description-font-size","--mod-illustrated-message-description-font-style","--mod-illustrated-message-description-font-weight","--mod-illustrated-message-description-line-height","--mod-illustrated-message-description-max-inline-size","--mod-illustrated-message-description-pointer-events","--mod-illustrated-message-description-position","--mod-illustrated-message-description-z-index","--mod-illustrated-message-display","--mod-illustrated-message-heading-max-inline-size","--mod-illustrated-message-heading-to-body","--mod-illustrated-message-heading-to-description","--mod-illustrated-message-illustration-accent-color","--mod-illustrated-message-illustration-color","--mod-illustrated-message-pointer-events","--mod-illustrated-message-title-color","--mod-illustrated-message-title-font-family","--mod-illustrated-message-title-font-size","--mod-illustrated-message-title-font-style","--mod-illustrated-message-title-font-weight","--mod-illustrated-message-title-line-height","--mod-illustrated-message-title-to-heading"],k=["--spectrum-illustrated-message-body-size","--spectrum-illustrated-message-cjk-title-size","--spectrum-illustrated-message-description-color","--spectrum-illustrated-message-description-font-family","--spectrum-illustrated-message-description-font-size","--spectrum-illustrated-message-description-font-style","--spectrum-illustrated-message-description-font-weight","--spectrum-illustrated-message-description-line-height","--spectrum-illustrated-message-description-max-inline-size","--spectrum-illustrated-message-heading-max-inline-size","--spectrum-illustrated-message-heading-to-description","--spectrum-illustrated-message-illustration-accent-color","--spectrum-illustrated-message-illustration-color","--spectrum-illustrated-message-maximum-width","--spectrum-illustrated-message-title-color","--spectrum-illustrated-message-title-font-family","--spectrum-illustrated-message-title-font-size","--spectrum-illustrated-message-title-font-style","--spectrum-illustrated-message-title-font-weight","--spectrum-illustrated-message-title-line-height","--spectrum-illustrated-message-title-size","--spectrum-illustrated-message-title-to-heading"],w=["--spectrum-accent-visual-color","--spectrum-body-color","--spectrum-body-line-height","--spectrum-body-sans-serif-font-style","--spectrum-body-sans-serif-font-weight","--spectrum-heading-color","--spectrum-heading-line-height","--spectrum-heading-sans-serif-font-style","--spectrum-heading-sans-serif-font-weight","--spectrum-neutral-visual-color","--spectrum-sans-font-family-stack","--spectrum-spacing-400","--spectrum-spacing-75"],z=[],C={sourceFile:x,selectors:v,modifiers:I,component:k,global:w,"system-theme":[],passthroughs:z,"high-contrast":["--highcontrast-illustrated-message-illustration-accent-color","--highcontrast-illustrated-message-illustration-color"]},A="@spectrum-css/illustratedmessage",D="9.2.0",T="The Spectrum CSS illustratedmessage component",$="Apache-2.0",S="Adobe",j="https://opensource.adobe.com/spectrum-css/?path=/docs/components-illustrated-message--docs",_={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/illustratedmessage"},H={url:"https://github.com/adobe/spectrum-css/issues"},F={".":"./dist/index.css","./*.md":"./*.md","./package.json":"./package.json","./dist/*":"./dist/*","./index.css":"./dist/index.css","./metadata.json":"./dist/metadata.json","./stories/*":"./stories/*"},V="dist/index.css",L={"@spectrum-css/tokens":">=16.0.0 <17.0.0","@spectrum-css/typography":">=8.0.0 <9.0.0"},W={"@spectrum-css/tokens":{optional:!0},"@spectrum-css/typography":{optional:!0}},E={"@spectrum-css/tokens":"16.0.2","@spectrum-css/typography":"8.2.0"},G=["design-system","spectrum","spectrum-css","adobe","adobe-spectrum","component","css"],O={access:"public"},P=[{guidelines:"https://spectrum-contributions.corp.adobe.com/page/illustrated-message-beta",rootClass:"spectrum-IllustratedMessage",swc:"https://opensource.adobe.com/spectrum-web-components/components/illustrated-message/"}],R={name:A,version:D,description:T,license:$,author:S,homepage:j,repository:_,bugs:H,exports:F,main:V,peerDependencies:L,peerDependenciesMeta:W,devDependencies:E,keywords:G,publishConfig:O,spectrum:P},m=({rootClass:e="spectrum-IllustratedMessage",heading:r,description:i,customClasses:g=[],useAccentColor:h=!1}={},l={})=>t`
		<div
			class=${b({[e]:!0,...g.reduce((s,f)=>({...s,[f]:!0}),{})})}
		>
			${U(h)}
			${c(r,()=>n({semantics:"heading",size:"m",customClasses:[`${e}-heading`],content:[r]},l))}
			${c(i,()=>n({semantics:"body",size:"s",customClasses:[`${e}-description`],content:[...i.map(s=>typeof s=="function"?s({}):s)]},l))}
		</div>
	`,U=(e=!1)=>t`
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
			class="cls-1 ${e?"spectrum-IllustratedMessage-accent":""}"
			d="M110.53,85.66,100.26,95.89a1.09,1.09,0,0,1-1.52,0L88.47,85.66"
		/>
		<line
			class="cls-1 ${e?"spectrum-IllustratedMessage-accent":""}"
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
`,u=M({Template:m,testData:[{heading:"Error 404: Page not found",description:["This page isn't available. Try checking the URL or visit a different page."],useAccentColor:!1},{testHeading:"With accent color",heading:"Drag and drop your file",description:[()=>t`${d({url:"#",text:"Select a file"})} from your computer.`],useAccentColor:!0}]}),Z={title:"Illustrated message",component:"IllustratedMessage",argTypes:{useAccentColor:{name:"Illustration accent color",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},heading:{name:"Heading",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},description:{name:"Description",table:{category:"Content",disable:!0}}},args:{rootClass:"spectrum-IllustratedMessage",useAccentColor:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=20032-601"},packageJson:R,metadata:C}},p=u.bind({});p.args={heading:"Error 404: Page not found",description:["This page isn't available. Try checking the URL or visit a different page."]};const a=m.bind({});a.tags=["!dev"];a.args={heading:"Drag and drop your file",description:[()=>t`${d({url:"#",text:"Select a file"})} from your computer.`],useAccentColor:!0};a.parameters={chromatic:{disableSnapshot:!0}};const o=u.bind({});o.tags=["!autodocs","!dev"];o.parameters={chromatic:{forcedColors:"active",modes:y}};const B=["Default","AccentColor","WithForcedColors"],N=Object.freeze(Object.defineProperty({__proto__:null,AccentColor:a,Default:p,WithForcedColors:o,__namedExportsOrder:B,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as I,m as T,N as i};
