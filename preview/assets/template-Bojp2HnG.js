import{T as h}from"./template-CNHi6PLw.js";import{R as I,s as o,a as N,n as A,g as B,T as l}from"./template-C7mrcesf.js";import{k as s}from"./lit-element-C96egxJg.js";const m=({rootClass:e="spectrum-PickerButton",id:u=B("pickerbutton"),size:n="m",label:t,position:c,iconSet:i="ui",iconName:r="ChevronDown",isDisabled:a=!1,isFocused:f=!1,isOpen:p=!1,isQuiet:$=!1,customClasses:x=[],isRounded:y=!1,customStyles:v={},onclick:w}={},d={})=>{const{updateArgs:g}=d;return s`
		<button
			class=${I({[e]:!0,[`${e}--textuiicon`]:t&&i==="ui",[`${e}--uiicononly`]:!t&&i==="ui",[`${e}--icononly`]:!t&&i!=="ui",[`${e}--${c}`]:typeof c<"u",[`${e}--rounded`]:y,[`${e}--size${n==null?void 0:n.toUpperCase()}`]:typeof n<"u","is-disabled":a,"is-focused":f,"is-open":p&&!a,[`${e}--quiet`]:$,...x.reduce((k,T)=>({...k,[T]:!0}),{})})}
			style=${o(v)}
			id=${N(u)}
			aria-haspopup="listbox"
			?disabled=${a}
			@click=${w??function(){a||g({isOpen:!p})}}
		>
			<div class="${e}-fill">
				${A(t,()=>s`
					<span class="${e}-label is-placeholder">
						${t}
					</span>
				`)}
				${h({iconName:r??"ChevronDown",setName:i,size:n,customClasses:[`${e}-icon`]},d)}
			</div>
		</button>
	`},W=e=>s`
	<div
		style=${o({display:"flex",gap:"24px",flexWrap:"wrap"})}
	>
		<div
			style=${o({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${l({semantics:"detail",size:"s",content:["UI icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${m({...e,iconName:"ArrowDown100",iconSet:"ui"})}
		</div>
		<div
			style=${o({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${l({semantics:"detail",size:"s",content:["Workflow icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${m({...e,iconName:"Add",iconSet:"workflow"})}
		</div>
	</div>
`;export{W as C,m as T};
