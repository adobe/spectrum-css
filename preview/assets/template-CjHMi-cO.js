import{R as p,a as i,s as f,g}from"./template-CykOH8vE.js";import{k as o}from"./lit-element-C96egxJg.js";const $=({id:l=g("progress-circle"),customStyles:c={},testId:a,rootClass:s="spectrum-ProgressCircle",customClasses:t=[],size:r="m",staticColor:d,isIndeterminate:m=!1})=>{let e="medium";switch(r){case"s":e="small";break;case"l":e="large";break;default:e="medium"}return o`
		<div
			class=${p({[s]:!0,[`${s}--${e}`]:typeof r<"u",[`${s}--indeterminate`]:m,[`${s}--staticWhite`]:d==="white",...t.reduce((u,v)=>({...u,[v]:!0}),{})})}
			id=${i(l)}
			style=${f(c)}
			data-testid=${i(a)}
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
	`};export{$ as T};
