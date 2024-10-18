import{T as P}from"./template-Mj7VCTJo.js";import{T as q}from"./template-C5X0M27B.js";import{T as C}from"./template-CNHi6PLw.js";import{T as x}from"./template-B4EwY7hA.js";import{n as o,g as F,C as d,R as N,s as O}from"./template-C7mrcesf.js";import{T as U}from"./template-ww5XkWg8.js";import{T as j}from"./template-C8MiogCw.js";import{k as $}from"./lit-element-C96egxJg.js";const E=({rootClass:a="spectrum-Picker",size:e="m",labelPosition:t,placeholder:m="",currentValue:n="",isQuiet:u=!1,isKeyboardFocused:p=!1,showWorkflowIcon:w=!1,isOpen:T=!1,isInvalid:i=!1,isLoading:s=!1,isDisabled:f=!1,isHovered:h=!1,isActive:l=!1,customClasses:k=[],customStyles:g={},onclick:y}={},r={})=>$`
		<button
			class=${N({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:u,[`${a}--sideLabel`]:t!="top","is-invalid":i,"is-open":T,"is-loading":s,"is-hover":h,"is-active":l,"is-keyboardFocused":p,...k.reduce((b,v)=>({...b,[v]:!0}),{})})}
			?disabled=${f}
			aria-haspopup="listbox"
			style=${O(g)}
			type="button"
			@click=${y}
		>
			${o(w,()=>C({size:e,setName:"workflow",iconName:"Image",customClasses:[`${a}-icon`]},r))}
			<span
				class=${N({[`${a}-label`]:!0,"is-placeholder":!n})}
			>${n||m}</span>
			${o(s,()=>U({size:"s",isIndeterminate:!0}))}
			${o(i&&!s,()=>C({size:e,iconName:"Alert",setName:"workflow",customClasses:[`${a}-validationIcon`]},r))}
			${C({size:e,setName:"ui",iconName:{s:"ChevronDown75",m:"ChevronDown100",l:"ChevronDown200",xl:"ChevronDown300"}[e??"m"],customClasses:[`${a}-menuIcon`]},r)}
		</button>
	`,S=({rootClass:a="spectrum-Picker",size:e="m",label:t,labelPosition:m="top",placeholder:n="",currentValue:u="",helpText:p="",isQuiet:w=!1,isKeyboardFocused:T=!1,showWorkflowIcon:i=!1,isOpen:s=!1,isInvalid:f=!1,isLoading:h=!1,isDisabled:l=!1,isReadOnly:k=!1,isHovered:g=!1,isActive:y=!1,withSwitch:r=!1,fieldLabelStyle:b={},customClasses:v=[],customStyles:D={},popoverContent:B=[],id:I=F("picker")}={},c={})=>{const{updateArgs:A}=c;return $`
		${o(t,()=>P({size:e,label:t,isDisabled:l,customStyles:b,alignment:m==="side"?"left":void 0},c))}
		${x({isOpen:s&&!l,withTip:!1,position:"bottom-start",trigger:(R,G)=>E({...R,rootClass:a,size:e,placeholder:n,currentValue:u,isQuiet:w,showWorkflowIcon:i,isKeyboardFocused:T,isOpen:s,isInvalid:f,isLoading:h,isDisabled:l,isReadOnly:k,isHovered:g,isActive:y,customClasses:v,customStyles:D,labelPosition:m,id:I,onclick:function(){A({isOpen:!s})}},G),content:B},c)}
		${o(p,()=>q({text:p,variant:f?"negative":"neutral",hideIcon:!0},c))}
		${o(r,()=>j({size:e,label:"Toggle switch",customStyles:{"padding-inline-start":"15px"}}))}
	`},Z=(a,e)=>d({withBorder:!1,content:$`${[!1,!0].map(t=>d({withBorder:!1,direction:"column",heading:t?"Open":"Closed",containerStyles:{rowGap:"8px"},wrapperStyles:{display:"block"},content:S({...a,isOpen:t},e)}))}`}),_=(a,e)=>d({withBorder:!1,content:$`${[!1,!0].map(t=>d({withBorder:!1,direction:"column",heading:t?"Invalid":"Default",containerStyles:{rowGap:"8px",overflow:"hidden"},wrapperStyles:{display:"block"},content:S({...a,isInvalid:t},e)}))}`});export{Z as C,_ as D,S as T};
