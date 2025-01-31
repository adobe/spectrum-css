import{T as A}from"./template-BVbcz8Rb.js";import{n as p,R as h,s as T,g as q}from"./decorator-BtqfPG1l.js";import{k as $}from"./lit-element-C96egxJg.js";import{t}from"./if-defined-B5hOZ0d5.js";const H=({rootClass:e="spectrum-Thumbnail",size:i=500,imageURL:c,svg:m,altText:a,isCover:r=!1,isDisabled:v=!1,isFocused:s=!1,isLayer:n=!1,isSelected:y=!1,backgroundColor:d,onclick:l,customClasses:w=[],customStyles:I={},id:g=q("thumbnail")}={},O={})=>{const{updateArgs:b}=O,k=c?$`<img class="${e}-image" src=${c} alt=${t(a)} />`:m?$`${m}`:"",j=$`
			<div class="${e}-image-wrapper">
			${p(c,()=>$`
				<img
					class="${e}-image"
					src=${c}
					alt=${a}
				/>
			`)}
			${p(m,()=>m)}
		</div>
	`;return n?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":y,"is-disabled":v,"is-focused":s,[`${e}--size${i}`]:typeof i<"u",...w.reduce((u,f)=>({...u,[f]:!0}),{})})}
				id=${t(g)}
				@click=${l}
			>
				${A({componentOnly:!0,customClasses:[`${e}-layer-inner`],content:j})}
			</div>
		`:d?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":y,"is-disabled":v,"is-focused":s,[`${e}--size${i}`]:typeof i<"u",...w.reduce((u,f)=>({...u,[f]:!0}),{})})}
				id=${t(g)}
				@click=${l}
			>
				<div class="${e}-background" style=${T({backgroundColor:d})}></div>
				<div class="${e}-image-wrapper">
					${p(c,()=>$`
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
			class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":y,"is-disabled":v,"is-focused":s,[`${e}--size${i}`]:typeof i<"u",...w.reduce((u,f)=>({...u,[f]:!0}),{})})}
		style=${T(I)}
		id=${t(g)}
		@click=${l}
		@focusin=${function(){b({isFocused:!0})}}
		@focusout=${function(){b({isFocused:!1})}}
	>
			${p(d,()=>$`<div class="${e}-background" style=${t(T({backgroundColor:d}))}></div>`)}
			${A({rootClass:d?`${e}-image-wrapper`:void 0,customClasses:n?[`${e}-layer-inner`]:d?[]:[`${e}-image-wrapper`],content:k?[k]:[]})}
		</div>
	`};export{H as T};
