import"./lit-element-CJjJlyWZ.js";import{x as v}from"./lit-html-BdGv-Ldy.js";import{a as p}from"./class-map-sTkR_Npl.js";import{o as i}from"./if-defined-Bo9G1hLT.js";import{o as f}from"./style-map-yx2CMG_J.js";const n=({id:l,customStyles:c={},testId:t,rootClass:s="spectrum-ProgressCircle",customClasses:a=[],size:r="m",staticColor:d,isIndeterminate:m=!1})=>{let e="medium";switch(r){case"s":e="small";break;case"l":e="large";break;default:e="medium"}return v`
		<div
			class=${p({[s]:!0,[`${s}--${e}`]:typeof r<"u",[`${s}--indeterminate`]:m,[`${s}--staticWhite`]:d==="white",...a.reduce((u,o)=>({...u,[o]:!0}),{})})}
			id=${i(l)}
			style=${f(c)}
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
