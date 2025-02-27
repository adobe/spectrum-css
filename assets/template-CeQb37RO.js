import{g as n,R as o,s as w,n as k,C as a}from"./decorator-BliclrE4.js";import{k as s}from"./lit-element-C96egxJg.js";import{t as b}from"./if-defined-B5hOZ0d5.js";const p=({rootClass:e="spectrum-Switch",size:t="m",label:d="Switch label",isDisabled:c=!1,isChecked:$=!1,isEmphasized:r=!1,customClasses:h=[],customStyles:l={},id:f=n("switch")}={})=>{const i=n("switch-input");return s`
		<div
			class=${o({[e]:!0,[`${e}--disabled`]:c,[`${e}--emphasized`]:r,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",...h.reduce((u,m)=>({...u,[m]:!0}),{})})}
			id=${b(f)}
			style=${w(l)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				id=${i}
				?disabled=${c}
				?checked=${$}
			/>
			<span class="${e}-switch"></span>
			${k(d,()=>s`
				<label class="${e}-label" for=${i}>
					${d}
				</label>
			`)}
		</div>
	`},B=(e,t)=>a({withBorder:!1,content:s`
		${a({heading:"Not selected",withBorder:!1,content:p({...e,context:t,isChecked:!1})},t)}
		${a({heading:"Selected",withBorder:!1,content:p({...e,context:t,isChecked:!0})},t)}
	`},t);export{B as D,p as T};
