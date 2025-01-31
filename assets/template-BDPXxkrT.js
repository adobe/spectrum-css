import{T as u}from"./template-DHPKLTof.js";import{R as g,s as w,n as S,g as B,C as n}from"./decorator-BtqfPG1l.js";import{T as I}from"./template-eb3TYT_n.js";import{k as o}from"./lit-element-C96egxJg.js";import{t as k}from"./if-defined-B5hOZ0d5.js";const t=({rootClass:a="spectrum-Stepper",size:e="m",isQuiet:i=!1,isFocused:f=!1,isHovered:c=!1,isKeyboardFocused:$=!1,isInvalid:m=!1,isDisabled:r=!1,hideStepper:l=!1,id:d=B("stepper"),customClasses:h=[],customStyles:y={}}={},p={})=>{let s="75";switch(e){case"s":s="50";break;case"l":s="100";break;case"xl":s="200";break;default:s="75"}return o`
		<div
			class=${g({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:i,"is-focused":f,"is-hover":c,"is-keyboardFocused":$,"is-invalid":m,"is-disabled":r,"hide-stepper":l,...h.reduce((b,v)=>({...b,[v]:!0}),{})})}
			id=${k(d)}
			style=${w({"--mod-actionbutton-icon-size":"10px",...y})}
		>
			${I({size:e,type:"number",min:"-2",max:"2",step:"0.5",value:"0",isDisabled:r,isQuiet:i,id:d?`${d}-input`:void 0,customClasses:[`${a}-textfield`],customInputClasses:[`${a}-input`]},p)}
			${S(!l,()=>o`
				<span class="${a}-buttons">
					${u({size:e,customClasses:[`${a}-button`],iconName:`ChevronUp${s}`,iconSet:"ui",isDisabled:r,isQuiet:i,position:"top",tabIndex:"-1"},p)}
					${u({size:e,customClasses:[`${a}-button`],iconName:`ChevronDown${s}`,iconSet:"ui",isDisabled:r,isQuiet:i,position:"bottom",tabIndex:"-1"},p)}
				</span>
			`)}
		</div>
	`},A=(a,e)=>n({withBorder:!1,content:o`
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:t(a,e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid",content:t({...a,isInvalid:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Hovered",content:t({...a,isHovered:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Focused",content:t({...a,isFocused:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, focused",content:t({...a,isInvalid:!0,isFocused:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Keyboard-focused",content:t({...a,isKeyboardFocused:!0},e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, keyboard-focused",content:t({...a,isInvalid:!0,isKeyboardFocused:!0},e)},e)}
	`},e),C=(a,e)=>n({withBorder:!1,content:o`
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:t(a,e)},e)}
		${n({withBorder:!1,containerStyles:{gap:"8px"},heading:"Quiet",content:t({...a,isQuiet:!0},e)},e)}
	`},e);export{A,C as D,t as T};
