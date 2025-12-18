import{T as k}from"./template-CqWMgg5V.js";import{T as F}from"./template-B6nmLdiv.js";import{T as I}from"./template-x40ps2mj.js";import{C as a,g as b,a as v,n as w}from"./decorator-DlLJAwnS.js";import{T as q}from"./template-DEQKnFHl.js";import{x as s}from"./lit-element-Cr8ugfRm.js";import{o as m}from"./if-defined-C5sRMNk0.js";const o=({rootClass:e="spectrum-FieldGroup",customClasses:r=[],layout:$="vertical",inputType:p="radio",name:B=b(),isReadOnly:i=!1,isRequired:f=!1,label:l,labelPosition:u,isInvalid:c,helpText:h,items:g=[]}={},n={})=>{const T=b("group-label");return s`
		<div
			class=${v({[e]:!0,[`${e}--${u}label`]:typeof u<"u",[`${e}--${$}`]:typeof $<"u",...r.reduce((t,d)=>({...t,[d]:!0}),{})})}
			role=${p=="radio"?"radiogroup":"group"}
			aria-invalid=${m(c?"true":void 0)}
			aria-readonly=${m(i&&p=="radio"?"true":void 0)}
			aria-required=${m(f?"true":void 0)}
			aria-labelledby=${m(l?T:void 0)}
		>
			${w(l,()=>F({size:"m",label:l,isRequired:f,alignment:u==="side"?"right":"top",id:T},n))}
			<div
				class=${v({[`${e}InputLayout`]:!0})}
			>
				${p==="radio"?g.map((t,d)=>q({...t,isReadOnly:i,name:`field-group-example-${B}`,customClasses:[`${e}-item`],...i?{isChecked:d===1}:{}},n)):g.map((t,d)=>k({...t,isReadOnly:i,customClasses:[`${e}-item`],...i?{isChecked:d===1}:{}},n))}
				${w(h,()=>I({size:"m",text:h,variant:c?"negative":"neutral"},n))}
			</div>
		</div>
	`},y=(e,r)=>a({withBorder:!1,content:s`
		${a({withBorder:!1,heading:"Radios",content:o({...e},r)})}
		${a({withBorder:!1,heading:"Checkboxes",content:o({...e,inputType:"checkbox"},r)})}
	`}),A=(e,r)=>a({withBorder:!1,content:s`
		${a({withBorder:!1,heading:"Required (text)",content:o({...e,label:"Field label (required)"},r)})}
		${a({withBorder:!1,heading:"Required (asterisk)",content:o({...e,isRequired:!0},r)})}
		${a({withBorder:!1,heading:"Optional",content:o({...e,label:"Field label (optional)",helpText:""},r)})}
	`});export{y as I,A as N,o as T};
