import{C as t,R as o,s as u}from"./template-CykOH8vE.js";import{k as a}from"./lit-element-C96egxJg.js";const i=({rootClass:e="spectrum-CoachIndicator",isQuiet:r=!1,variant:n,customClasses:d=[],customStyles:c={}})=>a`
	<div
		class=${o({[`${e}`]:!0,[`${e}--quiet`]:r,[`${e}--${n}`]:typeof n<"u"||n!=="default",...d.reduce((l,s)=>({...l,[s]:!0}),{})})}
		style=${u(c)}
	>
		${Array.from({length:3}).map(()=>a`
			<div class=${o({[`${e}-ring`]:!0})}></div>
		`)}
	</div>
`,$=(e,r)=>t({withBorder:!1,content:a`
		${t({direction:"column",withBorder:!1,heading:"Default",content:i({...e,variant:"default"})})}
		${t({direction:"column",withBorder:!1,heading:"Dark",content:i({...e,variant:"dark"})})}
		${t({direction:"column",withBorder:!1,heading:"Light",content:i({...e,variant:"light"})})}
	`});export{$ as A,i as T};
