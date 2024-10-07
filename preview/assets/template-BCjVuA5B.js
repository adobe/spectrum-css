import{T}from"./template-DhJXrEWv.js";import{T as l}from"./template-Dl5RGBy0.js";import{R as p,a as d,n as o,r as k}from"./template-CykOH8vE.js";import{k as z}from"./lit-element-C96egxJg.js";const h=({rootClass:e="spectrum-FieldGroup",customClasses:s=[],layout:i="vertical",inputType:t="radio",isReadOnly:n=!1,isRequired:u=!1,label:$,labelPosition:r,isInvalid:m,helpText:f,items:v=[]}={},a={})=>z`
		<div
			class=${p({[e]:!0,[`${e}--${r}label`]:typeof r<"u",[`${e}--${i}`]:typeof i<"u",...s.reduce((g,c)=>({...g,[c]:!0}),{})})}
			role=${t=="radio"?"radiogroup":"group"}
			aria-invalid=${d(m?"true":void 0)}
			aria-readonly=${d(n&&t=="radio"?"true":void 0)}
			aria-required=${d(u?"true":void 0)}
		>
			${o($,()=>T({size:"m",label:$,alignment:r==="side"?"right":"top"},a))}
			<div
				class=${p({[`${e}InputLayout`]:!0})}
			>
				${k(v,{args:{isReadOnly:n,isRequired:u},context:a})}
				${o(f,()=>l({size:"m",text:f,variant:m?"negative":"neutral"},a))}
			</div>
		</div>
	`;export{h as T};
