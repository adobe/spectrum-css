import{a as o,o as p,g as f}from"./decorator-DlLJAwnS.js";import{x as g}from"./lit-element-Cr8ugfRm.js";import{o as i}from"./if-defined-C5sRMNk0.js";const n=({id:l=f("progress-circle"),customStyles:c={},testId:a,rootClass:s="spectrum-ProgressCircle",customClasses:t=[],size:r="m",staticColor:d,isIndeterminate:m=!1}={})=>{let e="medium";switch(r){case"s":e="small";break;case"l":e="large";break;default:e="medium"}return g`
		<div
			class=${o({[s]:!0,[`${s}--${e}`]:typeof r<"u",[`${s}--indeterminate`]:m,[`${s}--staticWhite`]:d==="white",...t.reduce((u,v)=>({...u,[v]:!0}),{})})}
			id=${i(l)}
			style=${p(c)}
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
	`};export{n as T};
