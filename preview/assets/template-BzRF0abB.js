import"./lit-element-CJjJlyWZ.js";import{x as i}from"./lit-html-BdGv-Ldy.js";import{a as u}from"./class-map-sTkR_Npl.js";import{o as h}from"./if-defined-Bo9G1hLT.js";import{o as l}from"./style-map-yx2CMG_J.js";import{n as b}from"./when-BR7zwNJC.js";const S=({rootClass:e="spectrum-Switch",size:p="m",label:$="Switch label",isDisabled:c,isChecked:r,isEmphasized:n,customClasses:a=[],customStyles:d={},id:t})=>{const m=t?`${t}-input`:"switch-onoff-0";return i`
		<div
			class=${u({[e]:!0,[`${e}--disabled`]:c,[`${e}--emphasized`]:n,[`${e}--size${p==null?void 0:p.toUpperCase()}`]:typeof p<"u",...a.reduce((o,f)=>({...o,[f]:!0}),{})})}
			id=${h(t)}
			style=${l(d)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				id=${m}
				?disabled=${c}
				?checked=${r}
			/>
			<span class="${e}-switch"></span>
			${b($,()=>i`
				<label class="${e}-label" for=${m}>
					${$}
				</label>
			`)}
		</div>
	`};export{S as T};
