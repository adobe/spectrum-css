import{a as h,g}from"./decorator-DlLJAwnS.js";import{x as f}from"./lit-element-Cr8ugfRm.js";import{o as a}from"./if-defined-C5sRMNk0.js";import{c as v}from"./capitalize-A3_7q2MJ.js";const x=({rootClass:e="spectrum-Link",url:i="#",text:l,variant:t,staticColor:s,isQuiet:o=!1,isHovered:r=!1,isActive:m=!1,isFocused:p=!1,isVisited:d=!1,id:n=g("link"),customClasses:u=[]}={})=>f`
		<a
			class=${h({[e]:!0,[`${e}--quiet`]:o,[`${e}--${t}`]:typeof t<"u",[`${e}--static${v(s)}`]:typeof s<"u","is-hover":r,"is-active":m,"is-focus-visible":p,"is-visited":d,...u.reduce((c,$)=>({...c,[$]:!0}),{})})}
			id=${a(n)}
			href=${a(i)}
		>
			${l}
		</a>
	`,j=(e,i)=>f`
	<div>
		Hello, this is a
		${x(e)}
		. This is just filler text, but if you keep reading maybe something good will happen.
	</div>
`;export{x as T,j as a};
