import{T as f}from"./template-B52pacml.js";import{R as N,s as g,n as T,g as G,C as t}from"./decorator-BtqfPG1l.js";import{k as s}from"./lit-element-C96egxJg.js";import{t as l}from"./if-defined-B5hOZ0d5.js";const d=({rootClass:a="spectrum-Checkbox",size:e="m",label:o,isChecked:k=!1,isEmphasized:p=!1,isIndeterminate:b=!1,isDisabled:u=!1,isInvalid:w=!1,isReadOnly:c=!1,title:C,value:B,id:$=G("checkbox"),ariaLabelledby:v,customStyles:y={},customClasses:D=[]}={},h={})=>{const{updateArgs:m}=h;let i="75";switch(e){case"s":i="50";break;case"l":i="100";break;case"xl":i="200";break;default:i="75"}return s`
		<label
			class=${N({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--emphasized`]:p,"is-indeterminate":b,"is-disabled":u,"is-invalid":w,"is-readOnly":c,...D.reduce((n,I)=>({...n,[I]:!0}),{})})}
			id=${l($)}
			style=${g(y)}
		>
			<input
				type="checkbox"
				class="${a}-input"
				aria-labelledby=${l(v)}
				aria-disabled=${l(c?"true":void 0)}
				?checked=${k}
				?disabled=${u}
				title=${l(C)}
				value=${l(B)}
				@change=${n=>{c&&(n.preventDefault(),n.target.checked=!n.target.checked),!(u||c)&&(m==null||m({isChecked:n.target.checked}))}}
				id=${l($?`${$}-input`:void 0)}
			/>
			<span class="${a}-box">
				${f({size:e,iconName:`Checkmark${i}`,setName:"ui",customClasses:[`${a}-checkmark`]},h)}
				${f({size:e,iconName:`Dash${i}`,setName:"ui",customClasses:[`${a}-partialCheckmark`]},h)}
			</span>
			${T(o,()=>s`<span class="${a}-label">${o}</span>`)}
		</label>
	`},r=(a,e)=>t({direction:"column",withBorder:!1,content:s`
		${d({...a,context:e,iconName:void 0,label:"Unchecked"})}
		${d({...a,context:e,isChecked:!0,label:"Checked"})}
		${d({...a,context:e,isIndeterminate:!0,label:"Indeterminate"})}
		${d({...a,context:e,label:"Checkbox with a long label that should wrap.",customStyles:{"max-inline-size":"200px"}})}
	`},e),V=(a,e)=>t({withBorder:!1,content:s`
		${t({withBorder:!1,direction:"column",heading:"Default",content:r(a,e)},e)}
		${t({withBorder:!1,direction:"column",heading:"Invalid",content:r({...a,isInvalid:!0},e)},e)}
		${t({withBorder:!1,direction:"column",heading:"Disabled",content:r({...a,isDisabled:!0},e)},e)}
		${t({withBorder:!1,direction:"column",heading:"Read-only",content:r({...a,isReadOnly:!0},e)},e)}
	`},e);export{V as A,r as D,d as T};
