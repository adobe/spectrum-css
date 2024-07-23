import{d as v}from"./index-BCEELo55.js";import{T as g}from"./template-CsttVY-o.js";import"./lit-element-CJjJlyWZ.js";import{x as s,T as p}from"./lit-html-BdGv-Ldy.js";import{a as u}from"./class-map-sTkR_Npl.js";import{o as m}from"./if-defined-Bo9G1hLT.js";import{c as S}from"./repeat-Du-egFmu.js";import"./template-D5ShUZ_q.js";import"./decorator-Dl7o6wQR.js";import"./utilities-BisrhIqU.js";import"./style-map-yx2CMG_J.js";import"./when-BR7zwNJC.js";import"./iframe-MtCp54vn.js";import"../sb-preview/runtime.js";import"./v4-CQkTLCs1.js";import"./capitalize-D60SaZ2R.js";import"./directive-helpers-F-Ou1E0_.js";const k="5.1.1",T=({rootClass:e,isSmall:t=!1,isInteractive:n=!1,withTooltip:r=!1,label:o,ariaPosInSet:c=1,ariaSetSize:d=4,isComplete:l=!1,isSelected:a=!1,id:i}={},y={})=>{const f=!t&&!r&&typeof o<"u"?s`<span class="spectrum-Steplist-label">${o}</span>`:p,$=s`
		<span class="${e}-markerContainer">
			${r&&!t&&typeof o<"u"?g({label:o,isOpen:!1,placement:"top",showOnHover:!0},y):p}
			<span class="${e}-marker"></span>
		</span>
	`;return s`
		<div
			class=${u({[`${e}-item`]:!0,"is-complete":l,"is-selected":a,"u-tooltip-showOnHover":r&&!t&&typeof o<"u"})}
			id=${m(i)}
			role="listitem"
			aria-posinset=${c}
			aria-setsize=${d}
			aria-label=${t&&!n?m(o):p}
		>
			${n?s` <a
						class=${u({[`${e}-link`]:!0,"is-complete":l,"is-selected":a})}
						role="link"
						aria-label=${t?m(o):p}
						tabindex=${a?"1":"-1"}
				>
						${f} ${$}
				  </a>`:s` ${f} ${$}`}
			<span class="${e}-segment"></span>
		</div>
	`},b=({rootClass:e="spectrum-Steplist",items:t,isSmall:n=!1,isInteractive:r=!1,withTooltip:o=!1,id:c,customClasses:d=[]}={},l={})=>!t||!t.length?s``:s`
		<div
			class=${u({[e]:!0,[`${e}--small`]:n,[`${e}--interactive`]:r,...d.reduce((a,i)=>({...a,[i]:!0}),{})})}
			id=${m(c)}
			role="list"
		>
			${S(t,(a,i)=>T({rootClass:`${e}`,isSmall:n,isInteractive:r,withTooltip:o,...a,ariaPosInSet:i+1,ariaSetSize:t.length},l))}
		</div>
	`,q={title:"Steplist",component:"Steplist",argTypes:{isSmall:{name:"Small",description:"Use a smaller steplist that does not have visible labels or tooltips.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},isInteractive:{name:"Interactive",description:"Whether the steplist items should be interactive. When true, creates a link around the marker and label.",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},withTooltip:{name:"With Tooltip",description:'Use a Tooltip component for each steplist item, instead of label text. Tooltips do not display when "Small" is true.',type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},items:{table:{disable:!0}}},args:{rootClass:"spectrum-Steplist",isSmall:!1,isInteractive:!1,withTooltip:!1,items:[{label:"Step 1",isComplete:!0},{label:"Step 2",isComplete:!0},{label:"Step 3",isSelected:!0},{label:"Step 4"}]},parameters:{componentVersion:k,docs:{description:{component:"A steplist can communicate the progress of a task or workflow. It can help users understand where they are in a process and what they need to do next."}}}},w=b.bind({});w.args={};const h=b.bind({});h.tags=["!autodocs","!dev","test"];h.parameters={chromatic:{forcedColors:"active",modes:v}};const B=["Default","WithForcedColors"];export{w as Default,h as WithForcedColors,B as __namedExportsOrder,q as default};
