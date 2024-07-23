import{T as f}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as $}from"./lit-html-BdGv-Ldy.js";import{a as n}from"./class-map-sTkR_Npl.js";import{o as r}from"./if-defined-Bo9G1hLT.js";import{u as d}from"./upperCase-0eNr0WW7.js";import{c as b}from"./capitalize-D60SaZ2R.js";import{l as T}from"./lowerCase-CIorQk0G.js";const U=({rootClass:e="spectrum-CloseButton",size:o="m",label:m="Close",staticColor:t,isDisabled:a=!1,customClasses:p=[],id:i,onclick:s}={},l={})=>$`
		<button
			class=${n({[e]:!0,[`${e}--size${d(o)}`]:typeof o<"u",[`${e}--static${b(T(t))}`]:typeof t<"u",...p.reduce((u,c)=>({...u,[c]:!0}),{})})}
			aria-label="close"
			id=${r(i)}
			label=${r(m)}
			?disabled=${a}
			@click=${s}
		>
			${f({size:o,iconName:"Cross",customClasses:[`${e}-UIIcon`]},l)}
		</button>
	`;export{U as T};
