import{T as B}from"./template-B52pacml.js";import{R as C,g as w,C as s}from"./decorator-BtqfPG1l.js";import{k as n}from"./lit-element-C96egxJg.js";import{t as u}from"./if-defined-B5hOZ0d5.js";import{u as k}from"./upperCase-0eNr0WW7.js";import{c as I}from"./capitalize-D60SaZ2R.js";const o=({rootClass:t="spectrum-CloseButton",size:e="m",iconSize:r="regular",label:i="Close",staticColor:a,isDisabled:l=!1,isHovered:d=!1,isFocused:c=!1,isKeyboardFocused:f=!1,customClasses:$=[],id:m=w("closebutton"),onclick:p}={},b={})=>n`
		<button
			class=${C({[t]:!0,[`${t}--size${k(e)}`]:typeof e<"u",[`${t}--static${I(a)}`]:typeof a<"u","is-disabled":l,"is-hover":d,"is-focus-visible":c,"is-keyboardFocused":f,...$.reduce((h,g)=>({...h,[g]:!0}),{})})}
			aria-label="close"
			id=${u(m)}
			label=${u(i)}
			?disabled=${l}
			@click=${p}
		>
			${B({size:e,iconName:T(e,r),setName:"ui",customClasses:[`${t}-UIIcon`]},b)}
		</button>
	`,T=(t="m",e="regular",r="Cross")=>{if(e=="large")switch(t){case"s":return`${r}200`;case"l":return`${r}400`;case"xl":return`${r}500`;default:return`${r}300`}switch(t){case"s":return`${r}75`;case"l":return`${r}200`;case"xl":return`${r}300`;default:return`${r}100`}},U=(t,e)=>s({withBorder:!1,content:n`
		${s({withBorder:!1,direction:"column",heading:"Default",content:o(t,e)},e)}
		${s({withBorder:!1,direction:"column",heading:"Disabled",content:o({...t,isDisabled:!0},e)},e)}
	`},e);export{U as C,o as T};
