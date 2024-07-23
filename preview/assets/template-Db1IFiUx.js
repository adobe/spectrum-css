import{T as s}from"./template-D4xZNe-s.js";import{T as v}from"./template-C3bVK-Qx.js";import"./lit-element-CJjJlyWZ.js";import{x as u}from"./lit-html-BdGv-Ldy.js";import{a as x}from"./class-map-sTkR_Npl.js";import{o as T}from"./if-defined-Bo9G1hLT.js";import{o as k}from"./style-map-yx2CMG_J.js";import{n as y}from"./when-BR7zwNJC.js";const g=({rootClass:e="spectrum-Stepper",size:t="m",isQuiet:a=!1,isFocused:$=!1,isKeyboardFocused:f=!1,isInvalid:c=!1,isDisabled:m=!1,hideStepper:r=!1,customClasses:i=[],id:p,style:d={"--mod-actionbutton-icon-size":"10px"}}={},n={})=>{let o="75";switch(t){case"s":o="50";break;case"l":o="100";break;case"xl":o="200";break;default:o="75"}return u`
		<div
			class=${x({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:a,"is-focused":$,"is-keyboardFocused":f,"is-invalid":c,"is-disabled":m,"hide-stepper":r,...i.reduce((l,b)=>({...l,[b]:!0}),{})})}
			id=${T(p)}
			style=${k(d)}
		>
			${v({size:t,type:"number",min:"-2",max:"2",step:"0.5",value:"0",isDisabled:m,isQuiet:a,id:p?`${p}-input`:void 0,customClasses:[`${e}-textfield`],customInputClasses:[`${e}-input`]},n)}
			${y(!r,()=>u`
				<span class="${e}-buttons">
					${s({size:t,customClasses:[`${e}-button`],iconName:`ChevronUp${o}`,isDisabled:m,isQuiet:a,position:"top",tabIndex:"-1"},n)}
					${s({size:t,customClasses:[`${e}-button`],iconName:`ChevronDown${o}`,isDisabled:m,isQuiet:a,position:"bottom",tabIndex:"-1"},n)}
				</span>
			`)}
		</div>
	`};export{g as T};
