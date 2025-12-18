import{T as B}from"./template-Cug7zURX.js";import{C as s,a as C,g as w}from"./decorator-DlLJAwnS.js";import{x as n}from"./lit-element-Cr8ugfRm.js";import{o as u}from"./if-defined-C5sRMNk0.js";import{c as I}from"./capitalize-A3_7q2MJ.js";import{u as T}from"./upperCase-DWj-oqyk.js";const o=({rootClass:r="spectrum-CloseButton",size:e="m",iconSize:t="regular",label:i="Close",staticColor:a,isDisabled:l=!1,isHovered:d=!1,isFocused:c=!1,isKeyboardFocused:f=!1,customClasses:$=[],id:m=w("closebutton"),onclick:p}={},b={})=>n`
		<button
			class=${C({[r]:!0,[`${r}--size${T(e)}`]:typeof e<"u",[`${r}--static${I(a)}`]:typeof a<"u","is-disabled":l,"is-hover":d,"is-focus-visible":c,"is-keyboardFocused":f,...$.reduce((h,g)=>({...h,[g]:!0}),{})})}
			aria-label="close"
			id=${u(m)}
			label=${u(i)}
			?disabled=${l}
			@click=${p}
		>
			${B({size:e,iconName:y(e,t),setName:"ui",customClasses:[`${r}-UIIcon`]},b)}
		</button>
	`,y=(r="m",e="regular",t="Cross")=>{if(e=="large")switch(r){case"s":return`${t}200`;case"l":return`${t}400`;case"xl":return`${t}500`;default:return`${t}300`}switch(r){case"s":return`${t}75`;case"l":return`${t}200`;case"xl":return`${t}300`;default:return`${t}100`}},R=(r,e)=>s({withBorder:!1,content:n`
		${s({withBorder:!1,direction:"column",heading:"Default",content:o(r,e)},e)}
		${s({withBorder:!1,direction:"column",heading:"Disabled",content:o({...r,isDisabled:!0},e)},e)}
	`},e);export{R as C,o as T};
