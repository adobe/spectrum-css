import{T as u}from"./template-CKQlC29v.js";import{R as h,s as w,n as g,g as T,C as n}from"./decorator-BliclrE4.js";import{k as i}from"./lit-element-C96egxJg.js";import{t as v}from"./if-defined-B5hOZ0d5.js";const r=({rootClass:t="spectrum-HelpText",size:e="m",isDisabled:a=!1,hideIcon:s=!1,text:d,variant:o,id:l=T("helptext"),customClasses:m=[],customStyles:p={}}={},c={})=>i`
		<div
			class=${h({[t]:!0,"is-disabled":a,[`${t}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${t}--${o}`]:typeof o<"u",...m.reduce((f,$)=>({...f,[$]:!0}),{})})}
			style=${w(p)}
			id=${v(l)}
		>
			${g(!s&&o=="negative",()=>u({iconName:"Alert",setName:"workflow",size:e,customClasses:[`${t}-validationIcon`]},c))}
			<div class=${`${t}-text`}>${d}</div>
		</div>
	`,R=(t,e)=>n({withBorder:!1,direction:"column",content:i`${["neutral","negative"].map(a=>n({withBorder:!1,direction:"column",heading:`Variant: ${a}`,containerStyles:{rowGap:"8px"},content:r({...t,variant:a},e)},e))}`},e),V=(t,e)=>n({withBorder:!1,direction:"column",content:i`${[!0,!1].map(a=>n({withBorder:!1,direction:"column",heading:a?"Without icon":"With icon",containerStyles:{rowGap:"8px"},content:r({...t,hideIcon:a},e)},e))}`},e);export{V as N,r as T,R as V};
