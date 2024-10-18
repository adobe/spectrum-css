import{a as c,R,s as F,n as $,g as q,C as r}from"./template-C7mrcesf.js";import{k as n}from"./lit-element-C96egxJg.js";import{T as w}from"./template-CNHi6PLw.js";import{c as Q}from"./capitalize-D60SaZ2R.js";const i=({rootClass:e="spectrum-ActionButton",size:a="m",iconName:d,iconSet:l="workflow",label:s,isQuiet:S=!1,isSelected:u=!1,isEmphasized:y=!1,isHovered:T=!1,isFocused:B=!1,isActive:D=!1,isDisabled:p=!1,hasPopup:t="false",popupId:g,hideLabel:m=!1,staticColor:b,customClasses:k=[],customStyles:A={},customIconClasses:I=[],onclick:N,id:h=q("actionbutton"),testId:v,role:G="button"}={},o={})=>{const{updateArgs:f}=o;return n`
		<button
			aria-label=${c(m?s:void 0)}
			aria-haspopup=${c(t&&t!=="false"?t:void 0)}
			aria-controls=${t&&t!=="false"?g:void 0}
			aria-pressed=${u?"true":"false"}
			class=${R({[e]:!0,[`${e}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${e}--quiet`]:S,[`${e}--emphasized`]:y,[`${e}--static${Q(b)}`]:typeof b<"u","is-disabled":p,"is-selected":u,"is-hover":T,"is-focus-visible":B,"is-active":D,...k.reduce((L,O)=>({...L,[O]:!0}),{})})}
			id=${h}
			data-testid=${v??h}
			role=${c(G)}
			style=${F(A)}
			?disabled=${p}
			@click=${N??function(){f({isSelected:!u})}}
			@focusin=${function(){f({isFocused:!0})}}
			@focusout=${function(){f({isFocused:!1})}}
		>
			${$(t&&t!=="false",()=>w({size:a,iconName:"CornerTriangle",setName:"ui",customClasses:[`${e}-hold`]},o))}
			${$(d,()=>w({size:a,iconName:d,setName:l,customClasses:[`${e}-icon`,...I]},o))}
			${$(s&&!m,()=>n`<span class="${e}-label">${s}</span>`)}
		</button>
	`},U=(e,a)=>r({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${i({...e,iconName:void 0},a)}
		${i({...e},a)}
		${i({...e,hideLabel:!0},a)}
		${i({...e,hideLabel:!0,hasPopup:"true"},a)}
		${i({...e,iconName:void 0,hasPopup:"true"},a)}
	`}),J=(e,a)=>r({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${i({...e,hideLabel:!0,hasPopup:"true"},a)}
		${i({...e,hideLabel:!0,isQuiet:!0,hasPopup:"true"},a)}
	`}),K=(e,a)=>r({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:n`${[{isSelected:!1,isDisabled:!1,heading:"Default"},{isSelected:!0,isDisabled:!1,heading:"Selected"},{isSelected:!1,isDisabled:!0,heading:"Disabled"},{isSelected:!0,isDisabled:!0,heading:"Selected + disabled"}].map(({isSelected:d,isDisabled:l,heading:s})=>r({withBorder:!1,heading:s,content:U({...e,isSelected:d,isDisabled:l})},a))}`});export{U as A,J as I,i as T,K as a};
