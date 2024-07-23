import{T as S}from"./template-D7lOzDBB.js";import{T as q}from"./template-CO7DuZY3.js";import{T as y}from"./template-D5ShUZ_q.js";import{T as A}from"./template-BCjEPzLh.js";import{T as C}from"./template-BTVRUgwL.js";import{T as I}from"./template-BzRF0abB.js";import"./lit-element-CJjJlyWZ.js";import{x as w}from"./lit-html-BdGv-Ldy.js";import{a as U}from"./class-map-sTkR_Npl.js";import{o as j}from"./style-map-yx2CMG_J.js";import{n as l}from"./when-BR7zwNJC.js";const N=({rootClass:a="spectrum-Picker",size:e="m",labelPosition:u,placeholder:r,isQuiet:i=!1,isKeyboardFocused:T=!1,isOpen:m=!1,isInvalid:f=!1,isLoading:t=!1,isDisabled:n=!1,customClasses:h=[],customStyles:p={}}={},$={})=>w`
		<button
			class=${U({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:i,[`${a}--sideLabel`]:u!="top","is-invalid":f,"is-open":m,"is-loading":t,"is-keyboardFocused":T,...h.reduce((s,v)=>({...s,[v]:!0}),{})})}
			?disabled=${n}
			aria-haspopup="listbox"
			style=${j(p)}
			type="button"
			@click=${s=>{s.target.classList.toggle("is-open",!m)}}
		>
			<span class="${a}-label is-placeholder">${r}</span>
			${l(t,()=>C({size:"s",isIndeterminate:!0}))}
			${l(f&&!t,()=>y({size:e,iconName:"Alert",customClasses:[`${a}-validationIcon`]},$))}
			${y({size:e,setName:"ui",iconName:"ChevronDown",customClasses:[`${a}-menuIcon`]},$)}
		</button>
	`,X=({rootClass:a="spectrum-Picker",size:e="m",label:u,labelPosition:r="top",placeholder:i,helpText:T,isQuiet:m=!1,isKeyboardFocused:f=!1,isOpen:t=!1,isInvalid:n=!1,isLoading:h=!1,isDisabled:p=!1,isReadOnly:$=!1,withSwitch:s=!1,fieldLabelStyle:v={},customClasses:g=[],customStyles:b={},customPopoverStyles:D={},content:k=[],id:d}={},c={})=>{let o="ChevronDown200";switch(e){case"s":o="ChevronDown75";break;case"m":o="ChevronDown100";break;case"xl":o="ChevronDown300";break;default:o="ChevronDown200"}return w`
		${l(u,()=>S({size:e,label:u,isDisabled:p,customStyles:v,alignment:r},c))}
		${r=="left"?w`<div style="display: inline-block">
				${N({rootClass:a,size:e,placeholder:i,isQuiet:m,isKeyboardFocused:f,isOpen:t,isInvalid:n,isLoading:h,isDisabled:p,isReadOnly:$,customClasses:g,customStyles:b,content:k,iconName:o,labelPosition:r,id:d},c)}
			</div>
			`:N({rootClass:a,size:e,placeholder:i,isQuiet:m,isKeyboardFocused:f,isOpen:t,isInvalid:n,isLoading:h,isDisabled:p,isReadOnly:$,customClasses:g,customStyles:b,content:k,iconName:o,labelPosition:r,id:d},c)}
		${l(T,()=>q({text:T,variant:n?"negative":"neutral",hideIcon:!0},c))}
		${l(k.length!==0,()=>A({isOpen:t&&!p,withTip:!1,position:"bottom",isQuiet:m,customStyles:D,content:k},c))}
		${l(s,()=>I({size:e,label:"Toggle switch",customStyles:{"padding-inline-start":"15px"}}))}
	`};export{X as T};
