import{T as B}from"./template-jncnNKh4.js";import{T as F}from"./template-D-qlzGFy.js";import{T as I}from"./template-B-7gvf2t.js";import{g as b,R as k,n as v,C as a}from"./decorator-BliclrE4.js";import{T as G}from"./template-ChaNjJ37.js";import{k as $}from"./lit-element-C96egxJg.js";import{t as p}from"./if-defined-B5hOZ0d5.js";const o=({rootClass:e="spectrum-FieldGroup",customClasses:r=[],layout:f="vertical",inputType:l="radio",name:w=b(),isReadOnly:t=!1,isRequired:n=!1,label:u,labelPosition:s,isInvalid:c,helpText:h,items:g=[]}={},m={})=>{const T=b("group-label");return $`
		<div
			class=${k({[e]:!0,[`${e}--${s}label`]:typeof s<"u",[`${e}--${f}`]:typeof f<"u",...r.reduce((i,d)=>({...i,[d]:!0}),{})})}
			role=${l=="radio"?"radiogroup":"group"}
			aria-invalid=${p(c?"true":void 0)}
			aria-readonly=${p(t&&l=="radio"?"true":void 0)}
			aria-required=${p(n?"true":void 0)}
			aria-labelledby=${p(u?T:void 0)}
		>
			${v(u,()=>F({size:"m",label:u,isRequired:n,alignment:s==="side"?"right":"top",id:T},m))}
			<div
				class=${k({[`${e}InputLayout`]:!0})}
			>
				${l==="radio"?g.map((i,d)=>G({...i,isReadOnly:t,isRequired:n,name:`field-group-example-${w}`,customClasses:[`${e}-item`],...t?{isChecked:d===1}:{}},m)):g.map((i,d)=>B({...i,isReadOnly:t,isRequired:n,customClasses:[`${e}-item`],...t?{isChecked:d===1}:{}},m))}
				${v(h,()=>I({size:"m",text:h,variant:c?"negative":"neutral"},m))}
			</div>
		</div>
	`},y=(e,r)=>a({withBorder:!1,content:$`
		${a({withBorder:!1,heading:"Radios",content:o({...e},r)})}
		${a({withBorder:!1,heading:"Checkboxes",content:o({...e,inputType:"checkbox"},r)})}
	`}),A=(e,r)=>a({withBorder:!1,content:$`
		${a({withBorder:!1,heading:"Required (text)",content:o({...e,label:"Field label (required)"},r)})}
		${a({withBorder:!1,heading:"Required (asterisk)",content:o({...e,isRequired:!0},r)})}
		${a({withBorder:!1,heading:"Optional",content:o({...e,label:"Field label (optional)",helpText:""},r)})}
	`});export{y as I,A as N,o as T};
