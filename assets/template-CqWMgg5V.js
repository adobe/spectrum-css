import{T as f}from"./template-Cug7zURX.js";import{C as t,a as N,o as T,n as x,g as G}from"./decorator-DlLJAwnS.js";import{x as o}from"./lit-element-Cr8ugfRm.js";import{o as l}from"./if-defined-C5sRMNk0.js";const d=({rootClass:a="spectrum-Checkbox",size:e="m",label:m,isChecked:p=!1,isEmphasized:k=!1,isHovered:b=!1,isIndeterminate:w=!1,isDisabled:c=!1,isInvalid:C=!1,isReadOnly:r=!1,title:v,value:B,id:$=G("checkbox"),ariaLabelledby:y,customStyles:I={},customClasses:g=[]}={},h={})=>{const{updateArgs:u}=h;let i="75";switch(e){case"s":i="50";break;case"l":i="100";break;case"xl":i="200";break;default:i="75"}return o`
		<label
			class=${N({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--emphasized`]:k,"is-indeterminate":w,"is-disabled":c,"is-invalid":C,"is-hover":b&&!c,"is-readOnly":r,...g.reduce((n,D)=>({...n,[D]:!0}),{})})}
			id=${l($)}
			style=${T(I)}
		>
			<input
				type="checkbox"
				class="${a}-input"
				aria-labelledby=${l(y)}
				aria-disabled=${l(r?"true":void 0)}
				?checked=${p}
				?disabled=${c}
				title=${l(v)}
				value=${l(B)}
				@change=${n=>{r&&(n.preventDefault(),n.target.checked=!n.target.checked),!(c||r)&&(u==null||u({isChecked:n.target.checked}))}}
				id=${l($?`${$}-input`:void 0)}
			/>
			<span class="${a}-box">
				${f({size:e,iconName:`Checkmark${i}`,setName:"ui",customClasses:[`${a}-checkmark`]},h)}
				${f({size:e,iconName:`Dash${i}`,setName:"ui",customClasses:[`${a}-partialCheckmark`]},h)}
			</span>
			${x(m,()=>o`<span class="${a}-label">${m}</span>`)}
		</label>
	`},s=(a,e)=>t({direction:"column",withBorder:!1,content:o`
		${d({...a,label:"Unchecked"})}
		${d({...a,isChecked:!0,label:"Checked"})}
		${d({...a,isIndeterminate:!0,label:"Indeterminate"})}
		${d({...a,label:"Checkbox with a long label that should wrap.",customStyles:{"max-inline-size":"200px"}})}
	`},e),j=(a,e)=>t({withBorder:!1,content:o`
		${t({withBorder:!1,direction:"column",heading:"Default",content:s(a,e)},e)}
		${t({withBorder:!1,direction:"column",heading:"Invalid",content:s({...a,isInvalid:!0},e)},e)}
		${t({withBorder:!1,direction:"column",heading:"Disabled",content:s({...a,isDisabled:!0},e)},e)}
		${t({withBorder:!1,direction:"column",heading:"Read-only",content:s({...a,isReadOnly:!0},e)},e)}
	`},e);export{j as A,s as D,d as T};
