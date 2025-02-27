import{R as O,s as F,n as c,g as q,C as l}from"./decorator-BliclrE4.js";import{k as n}from"./lit-element-C96egxJg.js";import{t as $}from"./if-defined-B5hOZ0d5.js";import{T as w}from"./template-CKQlC29v.js";import{c as Q}from"./capitalize-D60SaZ2R.js";const s=({rootClass:a="spectrum-ActionButton",size:e="m",iconName:r,iconSet:d="workflow",label:i,isQuiet:y=!1,isSelected:u=!1,isEmphasized:S=!1,isHovered:T=!1,isFocused:B=!1,isActive:k=!1,isDisabled:p=!1,hasPopup:t="false",popupId:D,hideLabel:m=!1,staticColor:b,customClasses:g=[],customStyles:A={},customIconClasses:I=[],onclick:N,id:h=q("actionbutton"),testId:R,role:v="button"}={},o={})=>{const{updateArgs:f}=o;return n`
		<button
			aria-label=${$(m?i:void 0)}
			aria-haspopup=${$(t&&t!=="false"?t:void 0)}
			aria-controls=${t&&t!=="false"?D:void 0}
			aria-pressed=${u?"true":"false"}
			class=${O({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:y,[`${a}--emphasized`]:S,[`${a}--static${Q(b)}`]:typeof b<"u","is-disabled":p,"is-selected":u,"is-hover":T,"is-focus-visible":B,"is-active":k,...g.reduce((G,L)=>({...G,[L]:!0}),{})})}
			id=${h}
			data-testid=${R??h}
			role=${$(v)}
			style=${F(A)}
			?disabled=${p}
			@click=${N??function(){f({isSelected:!u})}}
			@focusin=${function(){f({isFocused:!0})}}
			@focusout=${function(){f({isFocused:!1})}}
		>
			${c(t&&t!=="false",()=>w({size:e,iconName:"CornerTriangle",setName:"ui",customClasses:[`${a}-hold`]},o))}
			${c(r,()=>w({size:e,iconName:r,setName:d,useRef:d==="workflow",customClasses:[`${a}-icon`,...I]},o))}
			${c(i&&!m,()=>n`<span class="${a}-label">${i}</span>`)}
		</button>
	`},U=(a,e)=>l({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${s({...a,iconName:void 0},e)}
		${s({...a},e)}
		${s({...a,hideLabel:!0},e)}
		${s({...a,hideLabel:!0,hasPopup:"true"},e)}
		${s({...a,iconName:void 0,hasPopup:"true"},e)}
	`},e),K=(a,e)=>l({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${s({...a,hideLabel:!0,hasPopup:"true"},e)}
		${s({...a,hideLabel:!0,isQuiet:!0,hasPopup:"true"},e)}
	`},e),M=(a,e)=>l({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:n`${[{isSelected:!1,isDisabled:!1,heading:"Default"},{isSelected:!0,isDisabled:!1,heading:"Selected"},{isSelected:!1,isDisabled:!0,heading:"Disabled"},{isSelected:!0,isDisabled:!0,heading:"Selected + disabled"}].map(({isSelected:r,isDisabled:d,heading:i})=>l({withBorder:!1,heading:i,content:U({...a,isSelected:r,isDisabled:d})},e))}`},e);export{U as A,K as I,s as T,M as a};
