import{g as i,R as m,a as w,s as k,n as b,C as c}from"./template-C7mrcesf.js";import{k as a}from"./lit-element-C96egxJg.js";const $=({rootClass:e="spectrum-Switch",size:t="m",label:n="Switch label",isDisabled:s=!1,isChecked:p=!1,isEmphasized:h=!1,customClasses:l=[],customStyles:r={},id:f=i("switch")}={})=>{const d=i("switch-input");return a`
		<div
			class=${m({[e]:!0,[`${e}--disabled`]:s,[`${e}--emphasized`]:h,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u",...l.reduce((u,o)=>({...u,[o]:!0}),{})})}
			id=${w(f)}
			style=${k(r)}
		>
			<input
				type="checkbox"
				class="${e}-input"
				id=${d}
				?disabled=${s}
				?checked=${p}
			/>
			<span class="${e}-switch"></span>
			${b(n,()=>a`
				<label class="${e}-label" for=${d}>
					${n}
				</label>
			`)}
		</div>
	`},y=(e,t)=>c({withBorder:!1,content:a`
	${c({heading:"Not selected",withBorder:!1,content:a`
			${$({...e,context:t,isChecked:!1})}
		`})}
	${c({heading:"Selected",withBorder:!1,content:a`
			${$({...e,context:t,isChecked:!0})}
		`})}`});export{y as D,$ as T};
