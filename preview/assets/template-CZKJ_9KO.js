import{T as B}from"./template-CNHi6PLw.js";import{R as C,a as u,g as w,C as s}from"./template-C7mrcesf.js";import{k as n}from"./lit-element-C96egxJg.js";import{u as k}from"./upperCase-0eNr0WW7.js";import{c as I}from"./capitalize-D60SaZ2R.js";const o=({rootClass:e="spectrum-CloseButton",size:r="m",iconSize:t="regular",label:i="Close",staticColor:a,isDisabled:l=!1,isHovered:c=!1,isFocused:d=!1,isKeyboardFocused:$=!1,customClasses:f=[],id:m=w("closebutton"),onclick:p}={},b={})=>n`
		<button
			class=${C({[e]:!0,[`${e}--size${k(r)}`]:typeof r<"u",[`${e}--static${I(a)}`]:typeof a<"u","is-disabled":l,"is-hover":c,"is-focus-visible":d,"is-keyboardFocused":$,...f.reduce((h,g)=>({...h,[g]:!0}),{})})}
			aria-label="close"
			id=${u(m)}
			label=${u(i)}
			?disabled=${l}
			@click=${p}
		>
			${B({size:r,iconName:T(r,t),setName:"ui",customClasses:[`${e}-UIIcon`]},b)}
		</button>
	`,T=(e="m",r="regular",t="Cross")=>{if(r=="large")switch(e){case"s":return`${t}200`;case"l":return`${t}400`;case"xl":return`${t}500`;default:return`${t}300`}switch(e){case"s":return`${t}75`;case"l":return`${t}200`;case"xl":return`${t}300`;default:return`${t}100`}},E=(e,r)=>s({withBorder:!1,content:n`
		${s({withBorder:!1,direction:"column",heading:"Default",content:o(e,r)})}
		${s({withBorder:!1,direction:"column",heading:"Disabled",content:o({...e,isDisabled:!0},r)})}
	`});export{E as C,o as T};
