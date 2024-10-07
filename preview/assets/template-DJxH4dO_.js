import{n as c,R as u,s as o,r as f}from"./template-CykOH8vE.js";import{k as d}from"./lit-element-C96egxJg.js";const p=({rootClass:e="spectrum-Modal",customClasses:s=[],customStyles:r={},isOpen:t=!0,variant:n,content:$=[]}={},a={})=>d`
		<div
			class=${u({[e]:!0,[`${e}--${n}`]:typeof n<"u","is-open":t,...s.reduce((i,m)=>({...i,[m]:!0}),{})})}
			style=${o(r)}
		>
			${f($,{context:a})}
		</div>
	`,M=({rootClass:e="spectrum-Modal",skipWrapper:s=!1,...r}={},t={})=>d`
		${c(s,()=>p({rootClass:e,...r},t),()=>d`
				<div
					class=${u({[`${e}-wrapper`]:!0})}
				>
					${p({rootClass:e,...r},t)}
				</div>
			`)}
	`;export{M as T};
