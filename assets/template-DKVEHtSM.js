import{C as l,a as F,g as R,o as q,n as c}from"./decorator-DlLJAwnS.js";import{x as n}from"./lit-element-Cr8ugfRm.js";import{o as $}from"./if-defined-C5sRMNk0.js";import{T as w}from"./template-Cug7zURX.js";import{c as Q}from"./capitalize-A3_7q2MJ.js";const t=({rootClass:a="spectrum-ActionButton",size:e="m",iconName:r,iconSet:d="workflow",label:s,isQuiet:y=!1,isSelected:u=!1,isEmphasized:S=!1,isHovered:T=!1,isFocused:B=!1,isActive:D=!1,isDisabled:p=!1,hasPopup:i="false",popupId:g,hideLabel:m=!1,staticColor:b,customClasses:A=[],customStyles:I={},customIconClasses:N=[],onclick:k,id:h=R("actionbutton"),testId:v,role:G="button"}={},o={})=>{const{updateArgs:f}=o;return n`
		<button
			aria-label=${$(m?s:void 0)}
			aria-haspopup=${$(i&&i!=="false"?i:void 0)}
			aria-controls=${i&&i!=="false"?g:void 0}
			aria-pressed=${u?"true":"false"}
			class=${F({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:y,[`${a}--emphasized`]:S,[`${a}--static${Q(b)}`]:typeof b<"u","is-disabled":p,"is-selected":u,"is-hover":T,"is-focus-visible":B,"is-active":D,...A.reduce((L,O)=>({...L,[O]:!0}),{})})}
			id=${h}
			data-testid=${v??h}
			role=${$(G)}
			style=${q(I)}
			?disabled=${p}
			@click=${k??function(){f({isSelected:!u})}}
			@focusin=${function(){f({isFocused:!0})}}
			@focusout=${function(){f({isFocused:!1})}}
		>
			${c(i&&i!=="false",()=>w({size:e,iconName:"CornerTriangle",setName:"ui",customClasses:[`${a}-hold`]},o))}
			${c(r,()=>w({size:e,iconName:r,setName:d,useRef:d==="workflow",customClasses:[`${a}-icon`,...N]},o))}
			${c(s&&!m,()=>n`<span class="${a}-label">${s}</span>`)}
		</button>
	`},U=(a,e)=>l({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${t({...a,iconName:void 0},e)}
		${t({...a},e)}
		${t({...a,hideLabel:!0},e)}
		${t({...a,hideLabel:!0,hasPopup:"true"},e)}
		${t({...a,iconName:void 0,hasPopup:"true"},e)}
	`},e),K=(a,e)=>l({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${t({...a,hideLabel:!0,hasPopup:"true"},e)}
		${t({...a,hideLabel:!0,isQuiet:!0,hasPopup:"true"},e)}
	`},e),M=(a,e)=>l({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:n`${[{isSelected:!1,isDisabled:!1,heading:"Default"},{isSelected:!0,isDisabled:!1,heading:"Selected"},{isSelected:!1,isDisabled:!0,heading:"Disabled"},{isSelected:!0,isDisabled:!0,heading:"Selected + disabled"}].map(({isSelected:r,isDisabled:d,heading:s})=>l({withBorder:!1,heading:s,content:U({...a,isSelected:r,isDisabled:d})},e))}`},e);export{U as A,K as I,t as T,M as a};
