import{T as v}from"./template-D5ShUZ_q.js";import{Template as p}from"./template-Df-YB4AQ.js";import"./lit-element-CJjJlyWZ.js";import{x as d}from"./lit-html-BdGv-Ldy.js";import{a as y}from"./class-map-sTkR_Npl.js";import{o as l}from"./if-defined-Bo9G1hLT.js";import{o as s}from"./style-map-yx2CMG_J.js";import{n as k}from"./when-BR7zwNJC.js";const o=({rootClass:e="spectrum-FieldLabel",customClasses:t=[],customStyles:a={},size:i="m",label:n,id:c,testId:u,forInput:x,alignment:m,isDisabled:$,isRequired:h}={},f={})=>{n||console.warn("FieldLabel: please provide a label for the field label.");let r="Asterisk100";switch(i){case"s":r="Asterisk100";break;case"l":r="Asterisk200";break;case"xl":r="Asterisk300";break;default:r="Asterisk100"}const g=v({size:i,iconName:r,setName:"ui",customClasses:[`${e}-UIIcon`,`${e}-requiredIcon`]},f);return d`
		<label
			class=${y({[e]:!0,[`${e}--size${i==null?void 0:i.toUpperCase()}`]:typeof i<"u",[`${e}--${m}`]:typeof m<"u","is-disabled":$,...t.reduce((b,w)=>({...b,[w]:!0}),{})})}
			style=${s(a)}
			id=${l(c)}
			data-testid=${l(u)}
			for=${l(x)}
		>
			${n}
			${k(h,()=>g)}
		</label>
	`},D=(e,t)=>d`
	<div style=${s({display:window.isChromatic()?"none":"contents"})}>
		${o(e,t)}
	</div>
	<div style=${s({display:window.isChromatic()?"flex":"none","flex-direction":"column","align-items":"flex-start",gap:"32px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px",padding:"12px","margin-block-end":"32px"})}>
		${[{},{heading:"Right alignment",alignment:"right",customStyles:{width:"200px"}},{heading:"Disabled",isDisabled:!0,customStyles:{width:"200px"}},{heading:"Required",isRequired:!0,customStyles:{width:"200px"}},{heading:"Wrapped",label:"Label example with longer text that will wrap to the next line. And with an asterisk that marks it as required.",customStyles:{width:"200px"}}].map(({heading:a,...i})=>d`
			<div>
				${p({semantics:"heading",size:"xs",content:[a]})}
				${o({...e,...i},t)}
			</div>
		`)}
	</div>
	<div style=${s({display:window.isChromatic()?"flex":"none","flex-direction":"row","align-items":"flex-start",gap:"60px",border:"1px solid var(--spectrum-gray-200)","border-radius":"4px",padding:"12px"})}>
		${A(e,t)}
	</div>
`,A=(e,t)=>["s","m","l","xl"].map(a=>d`
	<div>
		${p({semantics:"heading",size:"xs",content:[{s:"Small",m:"Medium",l:"Large",xl:"Extra-large"}[a]],customClasses:["chromatic-ignore"]})}
		<div>
			${o({...e,size:a},t)}
		</div>
	</div>
`);export{D as F,o as T};
