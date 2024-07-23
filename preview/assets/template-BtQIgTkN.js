import{V as f,r as c}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as e}from"./lit-html-BdGv-Ldy.js";import{a as p}from"./class-map-sTkR_Npl.js";import{o as l}from"./style-map-yx2CMG_J.js";import{n as M}from"./when-BR7zwNJC.js";const v=({rootClass:r="spectrum-Modal",customClasses:m=[],customStyles:s={},isOpen:a=!0,variant:o,content:i=[],skipWrapper:d=!1}={},n={})=>{const t=e`
		<div class=${p({[r]:!0,[`${r}--${o}`]:typeof o<"u","is-open":a,...m.reduce((u,$)=>({...u,[$]:!0}),{})})} style=${l(s)}>
			${c(i,{context:n})}
		</div>
	`;return e`
		${M(d,()=>t,()=>e`<div class=${p({[`${r}-wrapper`]:!0})}>${t}</div>`)}
	`},b=f({Template:v});export{b as M,v as T};
