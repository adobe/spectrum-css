import{T as n}from"./template-D5ShUZ_q.js";import"./lit-element-CJjJlyWZ.js";import{x as i}from"./lit-html-BdGv-Ldy.js";import{a as v}from"./class-map-sTkR_Npl.js";import{o as $}from"./if-defined-Bo9G1hLT.js";import{o as N}from"./style-map-yx2CMG_J.js";import{n as w}from"./when-BR7zwNJC.js";const F=({rootClass:e="spectrum-Checkbox",size:a="m",label:l,isChecked:s=!1,isEmphasized:f=!1,isIndeterminate:u=!1,isDisabled:m=!1,isInvalid:d=!1,isReadOnly:c=!1,title:o,value:k,id:p,ariaLabelledby:b,customStyles:h={},customClasses:x=[]}={},t={})=>{const{updateArgs:T}=t;let r="75";switch(a){case"s":r="50";break;case"l":r="100";break;case"xl":r="200";break;default:r="75"}return i`
		<label
			class=${v({[e]:!0,[`${e}--size${a==null?void 0:a.toUpperCase()}`]:typeof a<"u",[`${e}--emphasized`]:f,"is-indeterminate":u,"is-disabled":m||c,"is-invalid":d,"is-readOnly":c,...x.reduce((y,g)=>({...y,[g]:!0}),{})})}
			id=${$(p)}
			style=${N(h)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				aria-labelledby=${$(b)}
				?checked=${s}
				?disabled=${m||c}
				title=${$(o)}
				value=${$(k)}
				@change=${()=>{m||T({isChecked:!s})}}
				id=${$(p?`${p}-input`:void 0)}
			/>
			<span class="${e}-box">
				${n({size:a,iconName:`Checkmark${r}`,customClasses:[`${e}-checkmark`]},t)}
				${n({size:a,iconName:`Dash${r}`,customClasses:[`${e}-partialCheckmark`]},t)}
			</span>
			${w(l,()=>i`<span class="${e}-label">${l}</span>`)}
		</label>
	`};export{F as T};
