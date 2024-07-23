import{T as u}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as c}from"./lit-html-BdGv-Ldy.js";import{a as f}from"./class-map-sTkR_Npl.js";import{o as n}from"./if-defined-Bo9G1hLT.js";import{o as s}from"./style-map-yx2CMG_J.js";const B=({rootClass:e="spectrum-ClearButton",isDisabled:o=!1,size:t="m",staticColor:r,id:m,customClasses:p=[],customStyles:a={}},$)=>c`
	<button
		type="reset"
		class=${f({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--overBackground`]:r==="white","is-disabled":o,...p.reduce((d,i)=>({...d,[i]:!0}),{})})}
		id=${n(m)}
		style=${s(a)}
		?disabled=${o}
	>
		<div class="${e}-fill">
			${u({size:t,iconName:"Cross",customClasses:[`${e}-icon`]},$)}
		</div>
	</button>
`;export{B as T};
