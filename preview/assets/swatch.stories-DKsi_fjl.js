import{d as S}from"./index-BCEELo55.js";import{b as C}from"./states-DzrSzBKQ.js";import{T as v}from"./template-D5ShUZ_q.js";import{T}from"./template-VCbHummt.js";import"./lit-element-CJjJlyWZ.js";import{x as c}from"./lit-html-BdGv-Ldy.js";import{a as _}from"./class-map-sTkR_Npl.js";import{o as f}from"./if-defined-Bo9G1hLT.js";import{o as a}from"./style-map-yx2CMG_J.js";import{c as k}from"./capitalize-D60SaZ2R.js";import{l as j}from"./lowerCase-CIorQk0G.js";const q="6.1.1",t=({rootClass:e="spectrum-Swatch",size:o="m",isSelected:n=!1,isDisabled:r=!1,rounding:i="regular",customClasses:w=[],swatchColor:l,customStyles:g={},id:h}={},u={})=>{const{updateArgs:d}=u;return c`
		<div
			class=${_({[e]:!0,[`${e}--size${o==null?void 0:o.toUpperCase()}`]:typeof o<"u",[`${e}--rounding${k(j(i))}`]:typeof i<"u"&&i!=="regular","is-selected":!r&&n,"is-disabled":r,"is-nothing":!r&&(typeof l>"u"||l==="transparent"),...w.reduce((s,b)=>({...s,[b]:!0}),{})})}
			?disabled=${r}
			id=${f(h)}
			style=${f(a({"--spectrum-picked-color":l,...g}))}
			tabindex="0"
			@click=${()=>{d({isSelected:!n})}}
			@focusout=${()=>d({isSelected:!1})}
			@keypress=${s=>{s.key!=="Enter"&&s.key!==" "||d({isSelected:!n})}}
		>
			${T({customClasses:[`${e}-fill`],content:[...r?[v({customClasses:[`${e}-disabledIcon`],setName:"workflow",iconName:"Cancel"},u)]:[]]})}
		</div>
	`},m=(e,o)=>c`
	<div style=${a({display:window.isChromatic()?"none":void 0})}>
		${t(e,o)}
	</div>
	<div style=${a({display:window.isChromatic()?"flex":"none","flex-wrap":"wrap",gap:"16px"})}>
		${t(e,o)}
		${t({...e,swatchColor:"rgba(174, 216, 230, 0.3)"},o)}
		${t({...e,swatchColor:void 0},o)}
		${t({...e,rounding:"none"},o)}
		${t({...e,rounding:"full"},o)}
	</div>
`,y=(e,o)=>c`
	<div style=${a({display:window.isChromatic()?"none":void 0})}>
		${t(e,o)}
	</div>
	<div style=${a({display:window.isChromatic()?"flex":"none","flex-direction":"column",gap:"16px"})}>
		${m(e,o)}
		${m({...e,isDisabled:!0},o)}
		${m({...e,isSelected:!0},o)}
	</div>
`,x={title:"Swatch",component:"Swatch",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["xs","s","m","l"],control:"select"},swatchColor:{name:"Color",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},control:"color"},rounding:{name:"Rounding",type:{name:"string"},table:{type:{summary:"string",required:!0},category:"Component"},options:["none","regular","full"],control:"select"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isSelected:C},args:{rootClass:"spectrum-Swatch",size:"m",isSelected:!1,isDisabled:!1,rounding:"regular",swatchColor:"rgb(174, 216, 230)"},parameters:{componentVersion:q,docs:{description:{component:"A swatch shows a small sample of a fill&emdash;such as a color, gradient, texture, or material&emdash;that is intended to be applied to an object."}}}},$=y.bind({});$.args={};const p=y.bind({});p.tags=["!autodocs","!dev","test"];p.parameters={chromatic:{forcedColors:"active",modes:S}};const D=["Default","WithForcedColors"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:$,WithForcedColors:p,__namedExportsOrder:D,default:x},Symbol.toStringTag,{value:"Module"}));export{x as S,t as T,R as s};
