import{T as I}from"./template-DhJXrEWv.js";import{T as R}from"./template-Dl5RGBy0.js";import{T as b}from"./template-CjNf7Zto.js";import{T as S}from"./template-CFzFm5hn.js";import{n,g as A,R as q,s as F}from"./template-CykOH8vE.js";import{T as P}from"./template-CjHMi-cO.js";import{T as U}from"./template-BI8UA81D.js";import{k as g}from"./lit-element-C96egxJg.js";const j=({rootClass:a="spectrum-Picker",size:e="m",labelPosition:m,placeholder:s,isQuiet:u=!1,isKeyboardFocused:l=!1,isOpen:$=!1,isInvalid:p=!1,isLoading:t=!1,isDisabled:c=!1,customClasses:d=[],customStyles:r={},onclick:T}={},i={})=>g`
		<button
			class=${q({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:u,[`${a}--sideLabel`]:m!="top","is-invalid":p,"is-open":$,"is-loading":t,"is-keyboardFocused":l,...d.reduce((k,h)=>({...k,[h]:!0}),{})})}
			?disabled=${c}
			aria-haspopup="listbox"
			style=${F(r)}
			type="button"
			@click=${T}
		>
			<span class="${a}-label is-placeholder">${s}</span>
			${n(t,()=>P({size:"s",isIndeterminate:!0}))}
			${n(p&&!t,()=>b({size:e,iconName:"Alert",setName:"workflow",customClasses:[`${a}-validationIcon`]},i))}
			${b({size:e,iconName:"ChevronDown",setName:"ui",customClasses:[`${a}-menuIcon`]},i)}
		</button>
	`,O=({rootClass:a="spectrum-Picker",size:e="m",label:m,labelPosition:s="top",placeholder:u,helpText:l,isQuiet:$=!1,isKeyboardFocused:p=!1,isOpen:t=!1,isInvalid:c=!1,isLoading:d=!1,isDisabled:r=!1,isReadOnly:T=!1,withSwitch:i=!1,fieldLabelStyle:k={},customClasses:h=[],customStyles:v={},content:w=[],id:y=A("picker")}={},f={})=>{const{updateArgs:N}=f;let o="ChevronDown200";switch(e){case"s":o="ChevronDown75";break;case"m":o="ChevronDown100";break;case"xl":o="ChevronDown300";break;default:o="ChevronDown200"}return g`
		${n(m,()=>I({size:e,label:m,isDisabled:r,customStyles:k,alignment:s},f))}
		${S({isOpen:t&&!r,withTip:!1,position:"bottom-start",trigger:(D,C)=>j({...D,rootClass:a,size:e,placeholder:u,isQuiet:$,isKeyboardFocused:p,isOpen:t,isInvalid:c,isLoading:d,isDisabled:r,isReadOnly:T,customClasses:h,customStyles:{display:s=="left"?"inline-block":void 0,...v},content:w,iconName:o,labelPosition:s,id:y,onclick:function(){N({isOpen:!t})}},C),content:w},f)}
		${n(l,()=>R({text:l,variant:c?"negative":"neutral",hideIcon:!0},f))}
		${n(i,()=>U({size:e,label:"Toggle switch",customStyles:{"padding-inline-start":"15px"}}))}
	`};export{O as T};
