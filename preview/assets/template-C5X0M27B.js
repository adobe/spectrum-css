import{T as u}from"./template-CNHi6PLw.js";import{R as h,s as w,a as g,n as T,g as x,C as a}from"./template-C7mrcesf.js";import{k as i}from"./lit-element-C96egxJg.js";const r=({rootClass:e="spectrum-HelpText",size:t="m",isDisabled:n=!1,hideIcon:s=!1,text:c,variant:o,id:d=x("helptext"),customClasses:l=[],customStyles:m={}}={},p={})=>i`
		<div
			class=${h({[e]:!0,"is-disabled":n,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",[`${e}--${o}`]:typeof o<"u",...l.reduce(($,f)=>({...$,[f]:!0}),{})})}
			style=${w(m)}
			id=${g(d)}
		>
			${T(!s&&o=="negative",()=>u({iconName:"Alert",setName:"workflow",size:t,customClasses:[`${e}-validationIcon`]},p))}
			<div class=${`${e}-text`}>${c}</div>
		</div>
	`,N=(e,t)=>a({withBorder:!1,direction:"column",content:i`${["neutral","negative"].map(n=>a({withBorder:!1,direction:"column",heading:`Variant: ${n}`,containerStyles:{rowGap:"8px"},content:r({...e,variant:n},t)}))}`}),k=(e,t)=>a({withBorder:!1,direction:"column",content:i`${[!0,!1].map(n=>a({withBorder:!1,direction:"column",heading:n?"Without icon":"With icon",containerStyles:{rowGap:"8px"},content:r({...e,hideIcon:n},t)}))}`});export{k as N,r as T,N as V};
