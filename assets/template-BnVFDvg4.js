import{T as P}from"./template-D-qlzGFy.js";import{T as q}from"./template-B-7gvf2t.js";import{T as C}from"./template-CKQlC29v.js";import{T as F}from"./template-BuT_UzL4.js";import{n as o,g as O,C as d,R as N,s as U}from"./decorator-BliclrE4.js";import{T as j}from"./template-C9EFY2jj.js";import{T as E}from"./template-CeQb37RO.js";import{k as $}from"./lit-element-C96egxJg.js";const H=({rootClass:a="spectrum-Picker",size:e="m",labelPosition:t,placeholder:m="",currentValue:l="",isQuiet:u=!1,isKeyboardFocused:p=!1,showWorkflowIcon:w=!1,isOpen:T=!1,isInvalid:i=!1,isLoading:s=!1,isDisabled:f=!1,isHovered:h=!1,isActive:r=!1,customClasses:k=[],customStyles:g={},onclick:y}={},n={})=>$`
		<button
			class=${N({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:u,[`${a}--sideLabel`]:t!="top","is-invalid":i,"is-open":T,"is-loading":s,"is-hover":h,"is-active":r,"is-keyboardFocused":p,...k.reduce((b,v)=>({...b,[v]:!0}),{})})}
			?disabled=${f}
			aria-haspopup="listbox"
			style=${U(g)}
			type="button"
			@click=${y}
		>
			${o(w,()=>C({size:e,setName:"workflow",iconName:"Image",customClasses:[`${a}-icon`]},n))}
			<span
				class=${N({[`${a}-label`]:!0,"is-placeholder":!l})}
			>${l||m}</span>
			${o(s,()=>j({size:"s",isIndeterminate:!0}))}
			${o(i&&!s,()=>C({size:e,iconName:"Alert",setName:"workflow",customClasses:[`${a}-validationIcon`]},n))}
			${C({size:e,setName:"ui",iconName:{s:"ChevronDown75",m:"ChevronDown100",l:"ChevronDown200",xl:"ChevronDown300"}[e??"m"],customClasses:[`${a}-menuIcon`]},n)}
		</button>
	`,S=({rootClass:a="spectrum-Picker",size:e="m",label:t,labelPosition:m="top",placeholder:l="",currentValue:u="",helpText:p="",isQuiet:w=!1,isKeyboardFocused:T=!1,showWorkflowIcon:i=!1,isOpen:s=!1,isInvalid:f=!1,isLoading:h=!1,isDisabled:r=!1,isReadOnly:k=!1,isHovered:g=!1,isActive:y=!1,withSwitch:n=!1,fieldLabelStyle:b={},customClasses:v=[],customStyles:D={},popoverContent:B=[],id:I=O("picker")}={},c={})=>{const{updateArgs:A}=c;return $`
		${o(t,()=>P({size:e,label:t,isDisabled:r,customStyles:b,alignment:m==="side"?"left":void 0},c))}
		${F({isOpen:s&&!r,withTip:!1,position:"bottom-start",trigger:(R,G)=>H({...R,rootClass:a,size:e,placeholder:l,currentValue:u,isQuiet:w,showWorkflowIcon:i,isKeyboardFocused:T,isOpen:s,isInvalid:f,isLoading:h,isDisabled:r,isReadOnly:k,isHovered:g,isActive:y,customClasses:v,customStyles:D,labelPosition:m,id:I,onclick:function(){A({isOpen:!s})}},G),content:B},c)}
		${o(p,()=>q({text:p,variant:f?"negative":"neutral",hideIcon:!0},c))}
		${o(n,()=>E({size:e,label:"Toggle switch",customStyles:{"padding-inline-start":"15px"}}))}
	`},_=(a,e)=>d({withBorder:!1,content:$`${[!1,!0].map(t=>d({withBorder:!1,direction:"column",heading:t?"Open":"Closed",containerStyles:{rowGap:"8px"},wrapperStyles:{display:"block"},content:S({...a,isOpen:t},e)},e))}`},e),L=(a,e)=>d({withBorder:!1,content:$`${[!1,!0].map(t=>d({withBorder:!1,direction:"column",heading:t?"Invalid":"Default",containerStyles:{rowGap:"8px",overflow:"hidden"},wrapperStyles:{display:"block"},content:S({...a,isInvalid:t},e)},e))}`},e);export{_ as C,L as D,S as T};
