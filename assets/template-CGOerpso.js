import{T as O}from"./template-B6nmLdiv.js";import{T as P}from"./template-x40ps2mj.js";import{T as v}from"./template-Cug7zURX.js";import{T as R}from"./template-DsAHXp6B.js";import{C as d,n as o,g as q,a as N,o as F}from"./decorator-DlLJAwnS.js";import{T as U}from"./template-CeLwEE-a.js";import{T as j}from"./template-CCwR_CIj.js";import{x as $}from"./lit-element-Cr8ugfRm.js";const E=({rootClass:a="spectrum-Picker",size:e="m",labelPosition:t,placeholder:m="",currentValue:l="",isQuiet:u=!1,isKeyboardFocused:p=!1,showWorkflowIcon:w=!1,isOpen:T=!1,isInvalid:i=!1,isLoading:s=!1,isDisabled:f=!1,isHovered:h=!1,isActive:r=!1,customClasses:C=[],customStyles:y={},onclick:g}={},n={})=>$`
		<button
			class=${N({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:u,[`${a}--sideLabel`]:t!="top","is-invalid":i,"is-open":T,"is-loading":s,"is-hover":h,"is-active":r,"is-keyboardFocused":p,...C.reduce((k,b)=>({...k,[b]:!0}),{})})}
			?disabled=${f}
			aria-haspopup="listbox"
			style=${F(y)}
			type="button"
			@click=${g}
		>
			${o(w,()=>v({size:e,setName:"workflow",iconName:"Image",customClasses:[`${a}-icon`]},n))}
			<span
				class=${N({[`${a}-label`]:!0,"is-placeholder":!l})}
			>${l||m}</span>
			${o(s,()=>U({size:"s",isIndeterminate:!0}))}
			${o(i&&!s,()=>v({size:e,iconName:"Alert",setName:"workflow",customClasses:[`${a}-validationIcon`]},n))}
			${v({size:e,setName:"ui",iconName:{s:"ChevronDown75",m:"ChevronDown100",l:"ChevronDown200",xl:"ChevronDown300"}[e??"m"],customClasses:[`${a}-menuIcon`]},n)}
		</button>
	`,S=({rootClass:a="spectrum-Picker",size:e="m",label:t,labelPosition:m="top",placeholder:l="",currentValue:u="",helpText:p="",isQuiet:w=!1,isKeyboardFocused:T=!1,showWorkflowIcon:i=!1,isOpen:s=!1,isInvalid:f=!1,isLoading:h=!1,isDisabled:r=!1,isReadOnly:C=!1,isHovered:y=!1,isActive:g=!1,withSwitch:n=!1,fieldLabelStyle:k={},customClasses:b=[],customStyles:D={},popoverContent:B=[],id:H=q("picker")}={},c={})=>{const{updateArgs:I}=c;return $`
		${o(t,()=>O({size:e,label:t,isDisabled:r,customStyles:k,alignment:m==="side"?"left":void 0},c))}
		${R({isOpen:s&&!r,withTip:!1,position:"bottom-start",trigger:(A,G)=>E({...A,rootClass:a,size:e,placeholder:l,currentValue:u,isQuiet:w,showWorkflowIcon:i,isKeyboardFocused:T,isOpen:s,isInvalid:f,isLoading:h,isDisabled:r,isHovered:y,isActive:g,customClasses:b,customStyles:D,labelPosition:m,onclick:function(){I({isOpen:!s})}},G),content:B},c)}
		${o(p,()=>P({text:p,variant:f?"negative":"neutral",hideIcon:!0},c))}
		${o(n,()=>j({size:e,label:"Toggle switch",customStyles:{"padding-inline-start":"15px"}}))}
	`},_=(a,e)=>d({withBorder:!1,content:$`${[!1,!0].map(t=>d({withBorder:!1,direction:"column",heading:t?"Open":"Closed",containerStyles:{rowGap:"8px"},wrapperStyles:{display:"block"},content:S({...a,isOpen:t},e)},e))}`},e),L=(a,e)=>d({withBorder:!1,content:$`${[!1,!0].map(t=>d({withBorder:!1,direction:"column",heading:t?"Invalid":"Default",containerStyles:{rowGap:"8px",overflow:"hidden"},wrapperStyles:{display:"block"},content:S({...a,isInvalid:t},e)},e))}`},e);export{_ as C,L as D,S as T};
