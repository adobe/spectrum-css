import{T as l}from"./template-BSbYaFtl.js";import{T as c}from"./template-Mj7VCTJo.js";import{T as k}from"./template-C5X0M27B.js";import{T as z}from"./template-CHs-ad4W.js";import{k as F}from"./lit-element-C96egxJg.js";import{R as s,a as $,n as v}from"./template-C7mrcesf.js";const B=({rootClass:e="spectrum-FieldGroup",customClasses:T=[],layout:p="vertical",inputType:t="radio",isReadOnly:i=!1,isRequired:a=!1,label:u,labelPosition:d,isInvalid:f,helpText:n,items:o=[]}={},m={})=>F`
		<div
			class=${s({[e]:!0,[`${e}--${d}label`]:typeof d<"u",[`${e}--${p}`]:typeof p<"u",...T.reduce((r,g)=>({...r,[g]:!0}),{})})}
			role=${t=="radio"?"radiogroup":"group"}
			aria-invalid=${$(f?"true":void 0)}
			aria-readonly=${$(i&&t=="radio"?"true":void 0)}
			aria-required=${$(a?"true":void 0)}
		>
			${v(u,()=>c({size:"m",label:u,isRequired:a,alignment:d==="side"?"right":"top"},m))}
			<div
				class=${s({[`${e}InputLayout`]:!0})}
			>
				${t==="radio"?o.map(r=>z({...r,isReadOnly:i,isRequired:a,name:"field-group-example",customClasses:[`${e}-item`]},m)):o.map(r=>l({...r,isReadOnly:i,isRequired:a,customClasses:[`${e}-item`]},m))}
				${v(n,()=>k({size:"m",text:n,variant:f?"negative":"neutral"},m))}
			</div>
		</div>
	`;export{B as T};
