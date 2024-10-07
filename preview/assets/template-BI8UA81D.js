import{g as $,R as h,a as r,s as b,n as w}from"./template-CykOH8vE.js";import{k as d}from"./lit-element-C96egxJg.js";const R=({rootClass:e="spectrum-Switch",size:t="m",label:a="Switch label",isDisabled:c=!1,isChecked:n=!1,isEmphasized:s=!1,customClasses:i=[],customStyles:l={},id:u=$("switch")}={})=>{const p=$("switch-input");return d`
		<div
			class=${h({[e]:!0,[`${e}--disabled`]:c,[`${e}--emphasized`]:s,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",...i.reduce((m,f)=>({...m,[f]:!0}),{})})}
			id=${r(u)}
			style=${b(l)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				id=${p}
				?disabled=${c}
				?checked=${n}
			/>
			<span class="${e}-switch"></span>
			${w(a,()=>d`
				<label class="${e}-label" for=${p}>
					${a}
				</label>
			`)}
		</div>
	`};export{R as T};
