import{T as u}from"./template-Cug7zURX.js";import{C as n,a as h,o as w,n as g,g as T}from"./decorator-DlLJAwnS.js";import{x as i}from"./lit-element-Cr8ugfRm.js";import{o as v}from"./if-defined-C5sRMNk0.js";const r=({rootClass:t="spectrum-HelpText",size:e="m",isDisabled:a=!1,hideIcon:d=!1,text:l,variant:o,id:m=T("helptext"),customClasses:p=[],customStyles:s={}}={},c={})=>i`
		<div
			class=${h({[t]:!0,"is-disabled":a,[`${t}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${t}--${o}`]:typeof o<"u",...p.reduce(($,f)=>({...$,[f]:!0}),{})})}
			style=${w(s)}
			id=${v(m)}
		>
			${g(!d&&o=="negative",()=>u({iconName:"Alert",setName:"workflow",size:e,customClasses:[`${t}-validationIcon`]},c))}
			<div class=${`${t}-text`}>${l}</div>
		</div>
	`,V=(t,e)=>n({withBorder:!1,direction:"column",content:i`${["neutral","negative"].map(a=>n({withBorder:!1,direction:"column",heading:`Variant: ${a}`,containerStyles:{rowGap:"8px"},content:r({...t,variant:a},e)},e))}`},e),G=(t,e)=>n({withBorder:!1,direction:"column",content:i`${[!0,!1].map(a=>n({withBorder:!1,direction:"column",heading:a?"Without icon":"With icon",containerStyles:{rowGap:"8px"},content:r({...t,hideIcon:a},e)},e))}`},e);export{G as N,r as T,V};
