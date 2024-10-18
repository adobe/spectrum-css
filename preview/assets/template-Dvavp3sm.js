import{T as p}from"./template-Ccr11ePv.js";import{k as f}from"./lit-element-C96egxJg.js";import{R as g,s as o}from"./template-C7mrcesf.js";const h=({rootClass:a="spectrum-ColorArea",customClasses:i=[],customStyles:l={},isDisabled:e=!1,isFocused:n=!1,customWidth:r,customHeight:u,selectedColor:c="rgba(255, 0, 0, 1)"}={},s={})=>{const{updateArgs:t}=s;return f`
		<div
			class=${g({[a]:!0,"is-disabled":e,"is-focused":n,...i.reduce((d,m)=>({...d,[m]:!0}),{})})}
			style=${o({"--mod-colorarea-height":u,"--mod-colorarea-width":r,...l})}
			@focusin=${function(){t({isFocused:!0})}}
			@focusout=${function(){t({isFocused:!1})}}
		>
			<div
				class="spectrum-ColorArea-gradient"
				style=${o({background:"linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgba(255, 0, 0)"})}
			></div>
			${p({isDisabled:e,customClasses:[`${a}-handle`],customStyles:{"--spectrum-picked-color":c,transform:r?"translate(var(--mod-colorarea-width), 0)":void 0}},s)}
			<input
				type="range"
				class="spectrum-ColorArea-slider"
				name="x"
				aria-label="saturation and value"
				min="0"
				max="1"
				step="0.01"
			/>
			<input
				type="range"
				class="spectrum-ColorArea-slider"
				name="y"
				aria-label="saturation and value"
				min="0"
				max="1"
				step="0.01"
			/>
		</div>
	`};export{h as T};
