import{T as u}from"./template-DgH1MZUK.js";import{C as n,a as g,o as w,n as S,g as B}from"./decorator-DlLJAwnS.js";import{T as I}from"./template-Bx_kTUaV.js";import{x as o}from"./lit-element-Cr8ugfRm.js";import{o as F}from"./if-defined-C5sRMNk0.js";const t=({rootClass:a="spectrum-Stepper",size:e="m",isQuiet:r=!1,isFocused:f=!1,isHovered:c=!1,isKeyboardFocused:$=!1,isInvalid:m=!1,isDisabled:s=!1,hideStepper:l=!1,id:d=B("stepper"),customClasses:h=[],customStyles:y={}}={},p={})=>{let i="75";switch(e){case"s":i="50";break;case"l":i="100";break;case"xl":i="200";break;default:i="75"}return o`
		<div
			class=${g({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:r,"is-focused":f,"is-hover":c,"is-keyboardFocused":$,"is-invalid":m,"is-disabled":s,"hide-stepper":l,...h.reduce((b,v)=>({...b,[v]:!0}),{})})}
			id=${F(d)}
			style=${w({"--mod-actionbutton-icon-size":"10px",...y})}
		>
			${I({size:e,type:"number",value:"0",isDisabled:s,isQuiet:r,id:d?`${d}-input`:void 0,customClasses:[`${a}-textfield`],customInputClasses:[`${a}-input`]},p)}
			${S(!l,()=>o`
				<span class="${a}-buttons">
					${u({size:e,customClasses:[`${a}-button`],iconName:`ChevronUp${i}`,iconSet:"ui",isDisabled:s,isQuiet:r,position:"top",tabIndex:"-1"},p)}
					${u({size:e,customClasses:[`${a}-button`],iconName:`ChevronDown${i}`,iconSet:"ui",isDisabled:s,isQuiet:r,position:"bottom",tabIndex:"-1"},p)}
				</span>
			`)}
		</div>
	`},C=(a,e)=>n({withBorder:!1,content:o`
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:t(a,e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid",content:t({...a,isInvalid:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Hovered",content:t({...a,isHovered:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Focused",content:t({...a,isFocused:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, focused",content:t({...a,isInvalid:!0,isFocused:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Keyboard-focused",content:t({...a,isKeyboardFocused:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, keyboard-focused",content:t({...a,isInvalid:!0,isKeyboardFocused:!0},e)},e)}
	`},e),G=(a,e)=>n({withBorder:!1,content:o`
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:t(a,e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Quiet",content:t({...a,isQuiet:!0},e)},e)}
	`},e);export{C as A,G as D,t as T};
