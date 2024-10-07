import{d as R}from"./index-BL42WGY7.js";import{C as f,R as g,a as u,g as j,V as _}from"./template-CykOH8vE.js";import{T as z}from"./template-Dbnz0Rq4.js";import{k as a,D as m}from"./lit-element-C96egxJg.js";import{Q as F}from"./repeat-BXd58rDM.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./template-CjNf7Zto.js";import"./directive-helpers-Vx9dmk2R.js";const G="@spectrum-css/steplist",J="5.1.3",N="The Spectrum CSS steplist component",Q="Apache-2.0",U="Adobe",V="https://opensource.adobe.com/spectrum-css/steplist",E={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/steplist"},P={url:"https://github.com/adobe/spectrum-css/issues"},q={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json","./stories/*":"./stories/*"},K="dist/index.css",L=["dist/*","*.md","package.json","stories/*","metadata/*"],X={"@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14","@spectrum-css/tooltip":">=6"},Y={"@spectrum-css/tooltip":{optional:!0}},Z={"@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^","@spectrum-css/tooltip":"workspace:^"},ee=["spectrum","css","design system","adobe"],te={access:"public"},se={name:G,version:J,description:N,license:Q,author:U,homepage:V,repository:E,bugs:P,exports:q,main:K,files:L,peerDependencies:X,peerDependenciesMeta:Y,devDependencies:Z,keywords:ee,publishConfig:te},ae=({rootClass:e="spectrum-Steplist-item",isSmall:t=!1,isInteractive:c=!1,withTooltip:p=!1,label:s,ariaPosInSet:h=1,ariaSetSize:b=4,isComplete:d=!1,isSelected:i=!1,id:l=j("steplist-item")}={},B={})=>{const S=!t&&!p&&typeof s<"u"?a`<span class="spectrum-Steplist-label">${s}</span>`:m,k=a`
		<span class="${e}-markerContainer">
			${p&&!t&&typeof s<"u"?z({label:s,isOpen:!0,placement:"top",showOnHover:!0},B):m}
			<span class="${e}-marker"></span>
		</span>
	`;return a`
		<div
			class=${g({[`${e}-item`]:!0,"is-complete":d,"is-selected":i,"u-tooltip-showOnHover":p&&!t&&typeof s<"u"})}
			id=${u(l)}
			role="listitem"
			aria-posinset=${h}
			aria-setsize=${b}
			aria-label=${t&&!c?u(s):m}
		>
			${c?a` <a
						class=${g({[`${e}-link`]:!0,"is-complete":d,"is-selected":i})}
						role="link"
						aria-label=${t?u(s):m}
						tabindex=${i?"1":"-1"}
				>
						${S} ${k}
				  </a>`:a` ${S} ${k}`}
			<span class="${e}-segment"></span>
		</div>
	`},y=({rootClass:e="spectrum-Steplist",items:t,isSmall:c=!1,isInteractive:p=!1,withTooltip:s=!1,id:h=j("steplist"),customClasses:b=[]}={},d={})=>!t||!t.length?a``:a`
		<div
			class=${g({[e]:!0,[`${e}--small`]:c,[`${e}--interactive`]:p,...b.reduce((i,l)=>({...i,[l]:!0}),{})})}
			id=${u(h)}
			role="list"
		>
			${F(t,(i,l)=>ae({rootClass:`${e}`,isSmall:c,isInteractive:p,withTooltip:s,...i,ariaPosInSet:l+1,ariaSetSize:t.length},d))}
		</div>
	`,v=(e,t)=>f({direction:"column",withBorder:!1,content:a`
		${f({withBorder:!1,heading:"Static",content:y(e,t)})}
		${f({withBorder:!1,heading:"Interactive",content:y({...e,isInteractive:!0},t)})}
	`}),M=_({Template:y,testData:[{testHeading:"Default"},{testHeading:"Small",isSmall:!0},{testHeading:"Interactive",isInteractive:!0},{testHeading:"With tooltip",withTooltip:!0}]}),ue={title:"Steplist",component:"Steplist",argTypes:{isSmall:{name:"Small",description:"Use a smaller steplist that does not have visible labels or tooltips.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isInteractive:{name:"Interactive",description:"Whether the steplist items should be interactive. When true, creates a link around the marker and label.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},withTooltip:{name:"With Tooltip",description:'Use a Tooltip component for each steplist item, instead of label text. Tooltips do not display when "Small" is true.',type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},items:{table:{disable:!0}}},args:{rootClass:"spectrum-Steplist",isSmall:!1,isInteractive:!1,withTooltip:!1,items:[{label:"Step 1",isComplete:!0},{label:"Step 2",isComplete:!0},{label:"Step 3",isSelected:!0},{label:"Step 4"}]},parameters:{packageJson:se,docs:{description:{component:`A steplist can communicate the progress of a task or workflow. It can help users understand where they are in a process and what they need to do next.

All variants of steplist can be static or interactive.`}}}},$=M.bind({});$.args={};$.tags=["!autodocs"];const r=v.bind({});r.tags=["!dev"];r.storyName="Default";r.parameters={chromatic:{disableSnapshot:!0}};const n=v.bind({});n.args={isSmall:!0};n.tags=["!dev"];n.parameters={chromatic:{disableSnapshot:!0}};const o=v.bind({});o.args={...$.args,withTooltip:!0};o.tags=["!dev"];o.storyName="With tooltip";o.parameters={chromatic:{disableSnapshot:!0}};const O=M.bind({});O.tags=["!autodocs","!dev"];O.parameters={chromatic:{forcedColors:"active",modes:R}};var w,D,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,description:{story:"A steplist with labels.",...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var x,C,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,description:{story:"A steplist without labels. This variant does not have visible labels or tooltips.",...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var W,A,H;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,description:{story:"A steplist with tooltips.",...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.description}}};const he=["Default","Standard","Small","WithTooltip","WithForcedColors"];export{$ as Default,n as Small,r as Standard,O as WithForcedColors,o as WithTooltip,he as __namedExportsOrder,ue as default};
