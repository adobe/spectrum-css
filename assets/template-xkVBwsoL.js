import{R as h,g}from"./decorator-BtqfPG1l.js";import{k as f}from"./lit-element-C96egxJg.js";import{t as a}from"./if-defined-B5hOZ0d5.js";import{c as k}from"./capitalize-D60SaZ2R.js";const v=({rootClass:e="spectrum-Link",url:i="#",text:l,variant:t,staticColor:s,isQuiet:o=!1,isHovered:r=!1,isActive:m=!1,isFocused:p=!1,isVisited:d=!1,id:n=g("link"),customClasses:u=[]}={})=>f`
		<a
			class=${h({[e]:!0,[`${e}--quiet`]:o,[`${e}--${t}`]:typeof t<"u",[`${e}--static${k(s)}`]:typeof s<"u","is-hover":r,"is-active":m,"is-focus-visible":p,"is-visited":d,...u.reduce((c,$)=>({...c,[$]:!0}),{})})}
			id=${a(n)}
			href=${a(i)}
		>
			${l}
		</a>
	`,R=(e,i)=>f`
	<div>
		Hello, this is a
		${v(e)}
		. This is just filler text, but if you keep reading maybe something good will happen.
	</div>
`;export{v as T,R as a};
