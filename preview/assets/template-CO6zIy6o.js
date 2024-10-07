import{T as A}from"./template-ZIwW6MgN.js";import{n as m,R as h,a as t,s as T,g as q}from"./template-CykOH8vE.js";import{k as $}from"./lit-element-C96egxJg.js";const G=({rootClass:e="spectrum-Thumbnail",size:c=500,imageURL:i,svg:p,altText:a,isCover:r=!1,isDisabled:v=!1,isFocused:s=!1,isLayer:n=!1,isSelected:y=!1,backgroundColor:d,onclick:l,customClasses:w=[],customStyles:I={},id:g=q("thumbnail")}={},O={})=>{const{updateArgs:b}=O,k=i?$`<img class="${e}-image" src=${i} alt=${t(a)} />`:p?$`${p}`:"",j=$`
			<div class="${e}-image-wrapper">
			${m(i,()=>$`
				<img
					class="${e}-image"
					src=${i}
					alt=${a}
				/>
			`)}
			${m(p,()=>p)}
		</div>
	`;return n?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":y,"is-disabled":v,"is-focused":s,[`${e}--size${c}`]:typeof c<"u",...w.reduce((u,f)=>({...u,[f]:!0}),{})})}
				id=${t(g)}
				@click=${l}
			>
				${A({componentOnly:!0,customClasses:[`${e}-layer-inner`],content:j})}
			</div>
		`:d?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":y,"is-disabled":v,"is-focused":s,[`${e}--size${c}`]:typeof c<"u",...w.reduce((u,f)=>({...u,[f]:!0}),{})})}
				id=${t(g)}
				@click=${l}
			>
				<div class="${e}-background" style=${T({backgroundColor:d})}></div>
				<div class="${e}-image-wrapper">
					${m(i,()=>$`
						<img
							class="${e}-image"
							src=${i}
							alt=${a}
						/>
					`)}
				</div>
			</div>
		`:$`
		<div
			class=${h({[e]:!0,[`${e}--cover`]:r,[`${e}-layer`]:n,"is-selected":y,"is-disabled":v,"is-focused":s,[`${e}--size${c}`]:typeof c<"u",...w.reduce((u,f)=>({...u,[f]:!0}),{})})}
		style=${T(I)}
		id=${t(g)}
		@click=${l}
		@focusin=${function(){b({isFocused:!0})}}
		@focusout=${function(){b({isFocused:!1})}}
	>
			${m(d,()=>$`<div class="${e}-background" style=${t(T({backgroundColor:d}))}></div>`)}
			${A({rootClass:d?`${e}-image-wrapper`:void 0,customClasses:n?[`${e}-layer-inner`]:d?[]:[`${e}-image-wrapper`],content:k?[k]:[]})}
		</div>
	`};export{G as T};
