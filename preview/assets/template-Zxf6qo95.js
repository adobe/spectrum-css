import"./decorator-Dl7o6wQR.js";import{V as Q}from"./utilities-BisrhIqU.js";import"./lit-element-CJjJlyWZ.js";import{x as n}from"./lit-html-BdGv-Ldy.js";import{a as V}from"./class-map-sTkR_Npl.js";import{o as s}from"./if-defined-Bo9G1hLT.js";import{o as q}from"./style-map-yx2CMG_J.js";import{n as u}from"./when-BR7zwNJC.js";import{T as $}from"./template-D5ShUZ_q.js";import{c as G}from"./capitalize-D60SaZ2R.js";import{l as I}from"./lowerCase-CIorQk0G.js";const i=({rootClass:e="spectrum-ActionButton",size:t="m",iconName:o,iconSet:p,label:r,isQuiet:H=!1,isSelected:l=!1,isEmphasized:b=!1,isHovered:T=!1,isFocused:g=!1,isActive:v=!1,isDisabled:m=!1,hasPopup:a="false",popupId:A,hideLabel:D=!1,staticColor:c,customClasses:S=[],customStyles:N={},customIconClasses:h=[],onclick:w,id:y,testId:F,role:B="button"}={},d={})=>{const{updateArgs:f}=d;return n`
		<button
			aria-label=${s(r)}
			aria-haspopup=${s(a&&a!=="false"?a:void 0)}
			aria-controls=${a&&a!=="false"?A:void 0}
			aria-pressed=${l?"true":"false"}
			class=${V({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:H,[`${e}--emphasized`]:b,[`${e}--static${G(I(c))}`]:typeof c<"u","is-disabled":m,"is-selected":l,"is-hover":T,"is-focus-visible":g,"is-active":v,...S.reduce((k,E)=>({...k,[E]:!0}),{})})}
			id=${s(y)}
			data-testid=${s(F)}
			role=${s(B)}
			style=${q(N)}
			?disabled=${m}
			@click=${w}
			@focusin=${()=>{f({isFocused:!0})}}
			@focusout=${()=>{f({isFocused:!1})}}
		>
			${u(a&&a!=="false",()=>$({size:t,iconName:"CornerTriangle",setName:"workflow",customClasses:[`${e}-hold`]},d))}
			${u(o,()=>$({size:t,iconName:o,setName:p,customClasses:[`${e}-icon`,...h]},d))}
			${u(r&&!D,()=>n`<span class="${e}-label">${r}</span>`)}
		</button>
	`},L=(e,t)=>n`
		${i(e,t)}
		${i({...e,iconName:void 0},t)}
		${i({...e,hideLabel:!0},t)}
		${i({...e,hasPopup:"menu",label:"Has pop-up",iconName:void 0},t)}
	`,U=(e,t)=>n`
		${i(e,t)}
		${i({...e,iconName:void 0},t)}
	`,z=Q({Template:L,stateDirection:"column",testData:[{testHeading:"Standard"},{testHeading:"Emphasized",isEmphasized:!0},{testHeading:"Quiet",isQuiet:!0},{Template:U,testHeading:"Truncation",label:"Truncate this long content",customStyles:{maxInlineSize:"100px"},withStates:!1}],stateData:[{testHeading:"Disabled",isDisabled:!0},{testHeading:"Selected",isSelected:!0},{testHeading:"Focused",isFocused:!0},{testHeading:"Hovered",isHovered:!0},{testHeading:"Active",isActive:!0},{testHeading:"Disabled + selected",isDisabled:!0,isSelected:!0}]});export{z as A,i as T,L as a};
