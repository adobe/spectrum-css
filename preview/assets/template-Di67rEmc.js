import{T as h}from"./template-B5CNIEfi.js";import{T as v}from"./template-CLOJq6Hl.js";import{T as D}from"./template-BtQIgTkN.js";import"./decorator-Dl7o6wQR.js";import{V as b}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as a}from"./lit-html-BdGv-Ldy.js";import{a as w}from"./class-map-sTkR_Npl.js";import{o as M}from"./if-defined-Bo9G1hLT.js";import{n as l}from"./when-BR7zwNJC.js";const V=({rootClass:e="spectrum-Dialog",isDismissable:i=!0,isOpen:o=!0,showModal:n=!1,heading:r,content:p=[],customClasses:c=[],id:d}={},s={})=>{const{globals:u={},updateArgs:$}=s,f=u.scale??"medium",g=()=>$({isOpen:!o}),m=a`
		<div
			class=${w({[e]:!0,[`${e}--${f}`]:!0,[`${e}--dismissable`]:i,...c.reduce((t,T)=>({...t,[T]:!0}),{})})}
			id=${M(d)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
		>
			<div class="${e}-grid">
				${l(r,()=>[a`<h1 class="${e}-heading">${r}</h1>`,v({horizontal:!0,customClasses:[`${e}-divider`]})])}
				<section class="${e}-content">
					${p.map(t=>typeof t=="function"?t({},s):t)}
				</section>
				${l(i,()=>h({customClasses:[`${e}-closeButton`],onclick:g},s))}
			</div>
		</div>
	`;return n?a`
			${D({isOpen:o,content:[()=>m]},s)}
		`:m},q=b({Template:V,testData:[{showModal:!1},{testHeading:"Not dismissable",isDismissable:!1,showModal:!1}]});export{q as D,V as T};
