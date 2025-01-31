import{R as p,s as o,g as f}from"./decorator-BtqfPG1l.js";import{k as g}from"./lit-element-C96egxJg.js";import{t as i}from"./if-defined-B5hOZ0d5.js";const n=({id:l=f("progress-circle"),customStyles:c={},testId:t,rootClass:s="spectrum-ProgressCircle",customClasses:a=[],size:r="m",staticColor:d,isIndeterminate:m=!1}={})=>{let e="medium";switch(r){case"s":e="small";break;case"l":e="large";break;default:e="medium"}return g`
		<div
			class=${p({[s]:!0,[`${s}--${e}`]:typeof r<"u",[`${s}--indeterminate`]:m,[`${s}--staticWhite`]:d==="white",...a.reduce((u,v)=>({...u,[v]:!0}),{})})}
			id=${i(l)}
			style=${o(c)}
			data-testid=${i(t)}
		>
			<div class="spectrum-ProgressCircle-track"></div>
			<div class="spectrum-ProgressCircle-fills">
				<div class="spectrum-ProgressCircle-fillMask1">
					<div class="spectrum-ProgressCircle-fillSubMask1">
						<div class="spectrum-ProgressCircle-fill"></div>
					</div>
				</div>
				<div class="spectrum-ProgressCircle-fillMask2">
					<div class="spectrum-ProgressCircle-fillSubMask2">
						<div class="spectrum-ProgressCircle-fill"></div>
					</div>
				</div>
			</div>
		</div>
	`};export{n as T};
