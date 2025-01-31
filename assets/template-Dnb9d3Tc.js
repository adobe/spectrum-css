import{k as i}from"./lit-element-C96egxJg.js";import{R as r,s as u}from"./decorator-BtqfPG1l.js";const n=({rootClass:e="spectrum-CoachIndicator",isQuiet:a=!1,staticColor:t,customClasses:c=[],customStyles:$={}}={})=>i`
		<div
			class=${r({[`${e}`]:!0,[`${e}--quiet`]:a,[`${e}--staticWhite`]:t==="white",[`${e}--staticBlack`]:t==="black",...c.reduce((m,s)=>({...m,[s]:!0}),{})})}
			style=${u($)}
		>
			${Array.from({length:3}).map(()=>i`
				<div class=${r({[`${e}-ring`]:!0})}></div>
			`)}
		</div>
	`;export{n as T};
