import{R as h,a,g}from"./template-CykOH8vE.js";import{k as f}from"./lit-element-C96egxJg.js";import{c as k}from"./capitalize-D60SaZ2R.js";const v=({rootClass:e="spectrum-Link",url:i="#",text:l,variant:s,staticColor:t,isQuiet:d=!1,isHovered:p=!1,isActive:m=!1,isFocused:o=!1,isVisited:n=!1,id:r=g("link"),customClasses:u=[]}={})=>f`
	<a
		class=${h({[e]:!0,[`${e}--quiet`]:d,[`${e}--${s}`]:typeof s<"u",[`${e}--static${k(t)}`]:typeof t<"u","is-hover":p,"is-active":m,"is-focus-visible":o,"is-visited":n,...u.reduce(($,c)=>({...$,[c]:!0}),{})})}
		id=${a(r)}
		href=${a(i)}
	>
		${l}
	</a>
`,x=(e,i)=>f`
	<div>
		Hello, this is a
		${v({...e,context:i})}
		. This is just filler text, but if you keep reading maybe something good will happen.
	</div>
`;export{v as T,x as a};
