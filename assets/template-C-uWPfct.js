import{n as a,a as $,o as c,r as f}from"./decorator-DlLJAwnS.js";import{x as p}from"./lit-element-Cr8ugfRm.js";const n=({rootClass:e="spectrum-Modal",customClasses:d=[],customStyles:r={},isOpen:t=!0,variant:u,content:i=[]}={},m={})=>p`
		<div
			class=${$({[e]:!0,[`${e}--${u}`]:typeof u<"u","is-open":t,...d.reduce((o,s)=>({...o,[s]:!0}),{})})}
			style=${c(r)}
		>
			${f(i,{context:m})}
		</div>
	`,M=({rootClass:e="spectrum-Modal",skipWrapper:d=!1,...r}={},t={})=>p`
		${a(d,()=>n({rootClass:e,...r},t),()=>p`
				<div
					class=${$({[`${e}-wrapper`]:!0})}
				>
					${n({rootClass:e,...r},t)}
				</div>
			`)}
	`;export{M as T};
