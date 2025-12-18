import{C as c,g as s,a as m,o as w,n as b}from"./decorator-DlLJAwnS.js";import{x as a}from"./lit-element-Cr8ugfRm.js";import{o as k}from"./if-defined-C5sRMNk0.js";const $=({rootClass:e="spectrum-Switch",size:t="m",label:d="Switch label",isDisabled:i=!1,isChecked:p=!1,isEmphasized:r=!1,customClasses:h=[],customStyles:l={},id:o=s("switch")}={})=>{const n=s("switch-input");return a`
		<div
			class=${m({[e]:!0,[`${e}--disabled`]:i,[`${e}--emphasized`]:r,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",...h.reduce((f,u)=>({...f,[u]:!0}),{})})}
			id=${k(o)}
			style=${w(l)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				id=${n}
				?disabled=${i}
				?checked=${p}
			/>
			<span class="${e}-switch"></span>
			${b(d,()=>a`
				<label class="${e}-label" for=${n}>
					${d}
				</label>
			`)}
		</div>
	`},B=(e,t)=>c({withBorder:!1,content:a`
		${c({heading:"Not selected",withBorder:!1,content:$({...e,isChecked:!1})},t)}
		${c({heading:"Selected",withBorder:!1,content:$({...e,isChecked:!0})},t)}
	`},t);export{B as D,$ as T};
