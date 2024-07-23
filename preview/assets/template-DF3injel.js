import{T as b}from"./template-VCbHummt.js";import"./lit-element-CJjJlyWZ.js";import{x as $}from"./lit-html-BdGv-Ldy.js";import{a as h}from"./class-map-sTkR_Npl.js";import{o as p}from"./if-defined-Bo9G1hLT.js";import{o as g}from"./style-map-yx2CMG_J.js";import{n as r}from"./when-BR7zwNJC.js";const K=({rootClass:e="spectrum-Thumbnail",size:i="500",imageURL:c,svg:u,altText:t,isCover:a=!1,isDisabled:v=!1,isFocused:y=!1,isLayer:f=!1,isSelected:l=!1,backgroundColor:d,onclick:w,customClasses:s=[],customStyles:j={},id:T}={},q={})=>{const{updateArgs:A}=q,O=c?$`<img class="${e}-image" src=${c} alt=${p(t)} />`:u?$`${u}`:"",x=$`
			<div class="${e}-image-wrapper">
			${r(c,()=>$`
				<img
					class="${e}-image"
					src=${c}
					alt=${t}
				/>
			`)}
			${r(u,()=>u)}
		</div>
	`;return f?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:a,[`${e}-layer`]:f,"is-selected":l,"is-disabled":v,"is-focused":y,[`${e}--size${i}`]:typeof i<"u",...s.reduce((n,m)=>({...n,[m]:!0}),{})})}
				id=${p(T)}
				@click=${w}
			>
				${b({componentOnly:!0,customClasses:[`${e}-layer-inner`],content:x})}
			</div>
		`:d?$`
			<div
				class=${h({[e]:!0,[`${e}--cover`]:a,[`${e}-layer`]:f,"is-selected":l,"is-disabled":v,"is-focused":y,[`${e}--size${i}`]:typeof i<"u",...s.reduce((n,m)=>({...n,[m]:!0}),{})})}
				id=${p(T)}
				@click=${w}
			>
				<div class="${e}-background" style=${g({backgroundColor:d})}></div>
				<div class="${e}-image-wrapper">
					${r(c,()=>$`
						<img
							class="${e}-image"
							src=${c}
							alt=${t}
						/>
					`)}
				</div>
			</div>
		`:$`
		<div
			class=${h({[e]:!0,[`${e}--cover`]:a,[`${e}-layer`]:f,"is-selected":l,"is-disabled":v,"is-focused":y,[`${e}--size${i}`]:typeof i<"u",...s.reduce((n,m)=>({...n,[m]:!0}),{})})}
		style=${g(j)}
		id=${p(T)}
		@click=${w}
		@focusin=${()=>{A({isFocused:!0})}}
		@focusout=${()=>{A({isFocused:!1})}}
	>
			${r(d,()=>$`<div class="${e}-background" style=${p(g({backgroundColor:d}))}></div>`)}
			${b({rootClass:d?`${e}-image-wrapper`:void 0,customClasses:f?[`${e}-layer-inner`]:d?[]:[`${e}-image-wrapper`],content:O?[O]:[]})}
		</div>
	`};export{K as T};
