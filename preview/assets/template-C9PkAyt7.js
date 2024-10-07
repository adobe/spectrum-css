import{a as c,R,s as F,n as $,g as q,C as l}from"./template-CykOH8vE.js";import{k as n}from"./lit-element-C96egxJg.js";import{T as h}from"./template-CjNf7Zto.js";import{c as Q}from"./capitalize-D60SaZ2R.js";const i=({rootClass:e="spectrum-ActionButton",size:a="m",iconName:d,iconSet:r="workflow",label:s,isQuiet:w=!1,isSelected:u=!1,isEmphasized:S=!1,isHovered:y=!1,isFocused:T=!1,isActive:B=!1,isDisabled:p=!1,hasPopup:t="false",popupId:D,hideLabel:g=!1,staticColor:m,customClasses:k=[],customStyles:A={},customIconClasses:I=[],onclick:L,id:b=q("actionbutton"),testId:N,role:v="button"}={},o={})=>{const{updateArgs:f}=o;return n`
		<button
			aria-label=${c(s)}
			aria-haspopup=${c(t&&t!=="false"?t:void 0)}
			aria-controls=${t&&t!=="false"?D:void 0}
			aria-pressed=${u?"true":"false"}
			class=${R({[e]:!0,[`${e}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${e}--quiet`]:w,[`${e}--emphasized`]:S,[`${e}--static${Q(m)}`]:typeof m<"u","is-disabled":p,"is-selected":u,"is-hover":y,"is-focus-visible":T,"is-active":B,...k.reduce((G,O)=>({...G,[O]:!0}),{})})}
			id=${b}
			data-testid=${N??b}
			role=${c(v)}
			style=${F(A)}
			?disabled=${p}
			@click=${L??function(){f({isSelected:!u})}}
			@focusin=${function(){f({isFocused:!0})}}
			@focusout=${function(){f({isFocused:!1})}}
		>
			${$(t&&t!=="false",()=>h({size:a,iconName:"CornerTriangle",setName:"ui",customClasses:[`${e}-hold`]},o))}
			${$(d,()=>h({size:a,iconName:d,setName:r,customClasses:[`${e}-icon`,...I]},o))}
			${$(s&&!g,()=>n`<span class="${e}-label">${s}</span>`)}
		</button>
	`},U=({...e},a)=>l({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${i({...e,iconName:void 0},a)}
		${i({...e},a)}
		${i({...e,hideLabel:!0},a)}
	${i({...e,hideLabel:!0,hasPopup:"true"},a)}
	${i({...e,iconName:void 0,hasPopup:"true"},a)}`}),J=({...e},a)=>l({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
	${i({...e,hideLabel:!0,hasPopup:"true"},a)}
	${i({...e,hideLabel:!0,isQuiet:!0,hasPopup:"true"},a)}`}),K=(e,a)=>l({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:n`${[{isSelected:!1,isDisabled:!1,heading:"Default"},{isSelected:!0,isDisabled:!1,heading:"Selected"},{isSelected:!1,isDisabled:!0,heading:"Disabled"},{isSelected:!0,isDisabled:!0,heading:"Selected + disabled"}].map(({isSelected:d,isDisabled:r,heading:s})=>l({withBorder:!1,heading:s,content:U({...e,isSelected:d,isDisabled:r})},a))}`});export{U as A,J as I,i as T,K as a};
