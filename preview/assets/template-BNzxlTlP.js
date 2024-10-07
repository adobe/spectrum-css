import{T as u}from"./template-DWrPNYN6.js";import{R as g,a as w,s as S,n as B,g as I,C as a}from"./template-CykOH8vE.js";import{T as k}from"./template-BcBQPg07.js";import{k as r}from"./lit-element-C96egxJg.js";const n=({rootClass:e="spectrum-Stepper",size:t="m",isQuiet:s=!1,isFocused:c=!1,isHovered:f=!1,isKeyboardFocused:$=!1,isInvalid:m=!1,isDisabled:i=!1,hideStepper:l=!1,id:d=I("stepper"),customClasses:h=[],customStyles:y={}}={},p={})=>{let o="75";switch(t){case"s":o="50";break;case"l":o="100";break;case"xl":o="200";break;default:o="75"}return r`
		<div
			class=${g({[e]:!0,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--quiet`]:s,"is-focused":c,"is-hover":f,"is-keyboardFocused":$,"is-invalid":m,"is-disabled":i,"hide-stepper":l,...h.reduce((b,v)=>({...b,[v]:!0}),{})})}
			id=${w(d)}
			style=${S({"--mod-actionbutton-icon-size":"10px",...y})}
		>
			${k({size:t,type:"number",min:"-2",max:"2",step:"0.5",value:"0",isDisabled:i,isQuiet:s,id:d?`${d}-input`:void 0,customClasses:[`${e}-textfield`],customInputClasses:[`${e}-input`]},p)}
			${B(!l,()=>r`
				<span class="${e}-buttons">
					${u({size:t,customClasses:[`${e}-button`],iconName:`ChevronUp${o}`,iconSet:"ui",isDisabled:i,isQuiet:s,position:"top",tabIndex:"-1"},p)}
					${u({size:t,customClasses:[`${e}-button`],iconName:`ChevronDown${o}`,iconSet:"ui",isDisabled:i,isQuiet:s,position:"bottom",tabIndex:"-1"},p)}
				</span>
			`)}
		</div>
	`},K=(e,t)=>a({withBorder:!1,content:r`
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n(e,t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid",content:n({...e,isInvalid:!0},t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Hovered",content:n({...e,isHovered:!0},t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Focused",content:n({...e,isFocused:!0},t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, focused",content:n({...e,isInvalid:!0,isFocused:!0},t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Keyboard-focused",content:n({...e,isKeyboardFocused:!0},t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, keyboard-focused",content:n({...e,isInvalid:!0,isKeyboardFocused:!0},t)})}
	`}),R=(e,t)=>a({withBorder:!1,content:r`
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n(e,t)})}
		${a({withBorder:!1,containerStyles:{gap:"8px"},heading:"Quiet",content:n({...e,isQuiet:!0},t)})}
	`});export{K as A,R as D,n as T};
