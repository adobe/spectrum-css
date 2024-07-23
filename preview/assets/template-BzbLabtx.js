import"./lit-element-CJjJlyWZ.js";import{x as c}from"./lit-html-BdGv-Ldy.js";import{a as d}from"./class-map-sTkR_Npl.js";import{o as i}from"./if-defined-Bo9G1hLT.js";import{c as n}from"./capitalize-D60SaZ2R.js";import{l as s}from"./lowerCase-CIorQk0G.js";const q=({rootClass:e="spectrum-Link",url:p="#",text:t,variant:m,staticColor:r,isQuiet:f=!1,id:o,customClasses:$=[]})=>c`
	<a
		class=${d({[e]:!0,[`${e}--quiet`]:f,[`${e}--${m}`]:typeof m<"u",[`${e}--static${n(s(r))}`]:typeof r<"u",...$.reduce((a,u)=>({...a,[u]:!0}),{})})}
		id=${i(o)}
		href=${i(p)}
	>
		${t}
	</a>
`;export{q as T};
