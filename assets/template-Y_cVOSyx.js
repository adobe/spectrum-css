import{T as I}from"./template-BJlsLmf1.js";import{n as t,a as h,g as B,o as T}from"./decorator-DlLJAwnS.js";import{x as $}from"./lit-element-Cr8ugfRm.js";import{o as m}from"./if-defined-C5sRMNk0.js";const J=({rootClass:e="spectrum-Thumbnail",size:i=500,imageURL:c,svg:p,altText:a,isCover:r=!1,isDisabled:v=!1,isFocused:y=!1,isLayer:n=!1,isSelected:l=!1,backgroundColor:d,onclick:s,customClasses:w=[],customStyles:j={},id:g=B("thumbnail")}={},q={})=>{const{updateArgs:b}=q,A=c?$`<img class="${e}-image" src=${c} alt=${m(a)} />`:p?$`${p}`:"",x=$`
			<div class="${e}-image-wrapper">
			${t(c,()=>$`
				<img
					class="${e}-image"
					src=${c}
					alt=${a}
				/>
			`)}
			${t(p,()=>p)}
		</div>
	`;return n?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":l,"is-disabled":v,"is-focused":y,[`${e}--size${i}`]:typeof i<"u",...w.reduce((f,u)=>({...f,[u]:!0}),{})})}
				id=${m(g)}
				@click=${s}
			>
				${I({customClasses:[`${e}-layer-inner`],content:x})}
			</div>
		`:d?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":l,"is-disabled":v,"is-focused":y,[`${e}--size${i}`]:typeof i<"u",...w.reduce((f,u)=>({...f,[u]:!0}),{})})}
				id=${m(g)}
				@click=${s}
			>
				<div class="${e}-background" style=${T({backgroundColor:d})}></div>
				<div class="${e}-image-wrapper">
					${t(c,()=>$`
						<img
							class="${e}-image"
							src=${c}
							alt=${a}
						/>
					`)}
				</div>
			</div>
		`:$`
		<div
			class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":l,"is-disabled":v,"is-focused":y,[`${e}--size${i}`]:typeof i<"u",...w.reduce((f,u)=>({...f,[u]:!0}),{})})}
		style=${T(j)}
		id=${m(g)}
		@click=${s}
		@focusin=${function(){b({isFocused:!0})}}
		@focusout=${function(){b({isFocused:!1})}}
	>
			${t(d,()=>$`<div class="${e}-background" style=${m(T({backgroundColor:d}))}></div>`)}
			${I({rootClass:d?`${e}-image-wrapper`:void 0,customClasses:n?[`${e}-layer-inner`]:d?[]:[`${e}-image-wrapper`],content:A?[A]:[]})}
		</div>
	`};export{J as T};
